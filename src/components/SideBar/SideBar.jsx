import React, { useState, useEffect } from 'react';
import './sidebar.css';
import Modal from '../Modal/Modal';
import { useNavigate } from 'react-router-dom';

const SideBar = ({ nearbyFarm, renderState }) => {
  const [userName, setUserName] = useState('')
  const navigate = useNavigate();
  const myFarm = () => {
    if (renderState === false) {
      nearbyFarm(true);
    }
  };
  const otherFarm = () => {
    if (renderState === true) {
      nearbyFarm(false);
    }
  };
  useEffect(() => {
    if (!localStorage.getItem('user')) {
      navigate('/');
    } else {
      let x = localStorage.getItem('user');
      let res = JSON.parse(x)
      setUserName(res.email.split('@')[0])
    }
  }, []);
  const handleLogout = () => {
    localStorage.clear();
    if (!localStorage.getItem('user')) {
      navigate('/');
    }
  };

  return (
    <div className="sidebar">
      <div className="box1">
        <i className="fa fa-circle-user fa-8x"></i>
        <h2>{userName}</h2>
        <button className="btn btn2" onClick={handleLogout}>
          Logout
          <i className="fa fa-lock mx-2"></i>
        </button>
      </div>
      <div className="box2 flexC">
        <a>Barter's Request</a>
        <Modal />
        <button onClick={otherFarm} type="button" className="btn btn2">
          My Farms
        </button>
        <button onClick={myFarm} type="button" className="btn btn2">
          Nearby Farms
        </button>
      </div>
    </div>

  );
};

export default SideBar;
