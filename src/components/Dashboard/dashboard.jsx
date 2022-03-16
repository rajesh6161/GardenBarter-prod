import React, { useState, useEffect } from 'react';
import SideBar from '../SideBar/SideBar';
import NearbyCard from '../Nearby/NearbyCard';
import MyCard from '../MyCard/MyCard';
import './dashboard.css';
import Modal from '../Modal/Modal';
import AlertCard from './AlertCard';
import { cardList } from '../Data/Data';
import { myProducts } from '../Data/Data';
import { bartarList } from '../Data/Data';

const Dashboard = () => {
  const [renderState, setRenderSate] = useState(false);
  const [sliderState, setSliderState] = useState(false);
  const [alertState, setAlertState] = useState(bartarList)

  const nearbyFarm = (farmStatus) => {
    setRenderSate(farmStatus);
  };

  const [productState, setProductState] = useState(myProducts)

  useEffect(() => {
    localStorage.getItem('myProducts')
  }, [])
  const onRemove = (id) => {
    let x = productState.filter(el => el.id !== id)
    setProductState(x)
  }

  const slider = () => {
    if (!sliderState) {
      document.querySelector('.sidebar').style.transform = "translateX(100%)";
      setSliderState(true);
    }
    else {
      document.querySelector('.sidebar').style.transform = "translateX(-60%)";
      setSliderState(false);
    }
  }

  const onCheck = (id) => {
    let x = alertState.filter(el => el.id !== id)
    setAlertState(x)
  }

  const [userName, setUserName] = useState('')
  useEffect(() => {
    let u = JSON.parse(localStorage.getItem('user'))

    setUserName(u.email.split('@')[0])
  }, [])


  return (
    <>
      <div className="dashboardWrapper">
        <SideBar nearbyFarm={nearbyFarm} renderState={renderState} />
        <div className="dashboard">
          <div className="d_top">
            <i className="fa-solid fa-bars sidebar-toggle" onClick={slider}></i>
            {!renderState ? <h2>My Farm</h2> : <h2>Nearby Farm</h2>}
            <div className="icons">
              <i
                className="fa fa-bell"
                style={{ fontSize: 24, cursor: 'pointer' }}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal3"
              ></i>
            </div>
            <div
              className="modal fade"
              id="exampleModal3"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5
                      className="modal-title"
                      style={{ color: 'black' }}
                      id="exampleModalLabel"
                    >
                      Awaiting Orders for {userName}
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div className="modal-body">
                      <div className="container-fluid text-black">
                        <div className="row">
                          <div className="col-sm-12">
                            {alertState.map((event) => (
                              <AlertCard
                                id={event.id}
                                key={event.id} bartarList={event} removeHandler={onCheck} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {renderState ? (
            <div className="d_content">
              {cardList.map((el) => (
                <NearbyCard
                  name={el.name}
                  item={el.item}
                  photo={el.photo}
                  quantity={el.quantity}
                  time={el.time}
                  cardList={el}
                />
              ))}
            </div>
          ) : (
            <div className="d_content">
              {productState.map((el) => (
                <MyCard
                  key={el.id}
                  id={el.id}
                  item={el.item}
                  photo={el.photo}
                  quantity={el.quantity}
                  time={el.time}
                  myProducts={el}
                  removeHandler={onRemove}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
