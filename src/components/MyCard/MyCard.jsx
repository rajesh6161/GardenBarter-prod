import React from 'react';
import '../Nearby/NearbyCard.css';
import { myProducts } from '../Data/Data';
const MyCard = ({ item, quantity, time, photo, removeHandler, id }) => {
  const current = new Date();
  const date = `${current.getDate()}`;
  const startdate = '15';
  return (
    <div>
      <div className="card" id="productCard">
        <img
          src={photo}
          alt=""
          className="card-img-top productImg"
        />
        <div className="card-body ">
          <h5 className="card-title">{item}</h5>
          <p>Quantity: {quantity}</p>
          <p>Time to harvest: {(time.substring(0, time.length - 4)) - (date - startdate) + 1} days</p>

          <button type="button btn-danger" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => removeHandler(id)}>
            Delete
          </button>

        </div>
      </div>
    </div>
  )

};

export default MyCard;
