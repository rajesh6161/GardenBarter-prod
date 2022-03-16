import React, { useState, useEffect } from 'react';
// import { bartarList } from '../Data/Data';


const AlertCard = ({ bartarList, removeHandler, id }) => {
  const [showInput, setShowInput] = useState(false);
  const [reason, setReason] = useState('');


  const openInput = () => {
    setShowInput(!showInput);
  };


  return (
    <div className="alert alert-success" role="alert">
      <div id="notify">
        <h5 className="alert-heading">{bartarList.name}'s Request</h5>
        <ul>
          <li>Item Grown: {bartarList.item}</li>
          <li>Quantity: {bartarList.quantity}</li>
          <li>Harvest Time: {bartarList.time}</li>
        </ul>
        <hr />
        <div className="mb-0 flexR">
          <button className="btn text-white" onClick={() => removeHandler(bartarList.id)}>
            <i className="fa fa-check"></i>
          </button>
          <button className="btn btn-red mx-3 text-white" onClick={openInput}>
            <i className="fa fa-times"></i>
          </button>
        </div>

        <div style={showInput ? { display: 'block' } : { display: 'none' }}>
          <input className="form-control mt-4" placeholder="Specify Reason" />
          <button className="btn" onClick={() => removeHandler(id)}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertCard;
