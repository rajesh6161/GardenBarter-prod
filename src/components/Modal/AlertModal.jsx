import React from 'react';
import { bartarList } from '../Data/Data';

const Modal = () => {
  return (
    <>
      <button
        type="button"
        className="btn btn2"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal2"
      >
        Add Product
      </button>

      <div
        className="modal fade"
        id="exampleModal2"
        tabindex="-1"
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
                Add Product
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
                    <div className="col-md-4">Product Name</div>
                    <div className="col-md-8">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Default input"
                        value="Potato"
                        aria-label="default input example"
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-4">Quantity</div>
                    <div className="col-md-8">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="5-100Kg"
                        aria-label="default input example"
                      />
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-4">Expected Date</div>
                    <div className="col-md-8">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="7 days"
                        aria-label="default input example"
                      />
                    </div>
                  </div>

                  <div className="flexC">
                    <div>loading...</div>
                    <button className="btn">Upload Image</button>
                    <button className="btn">Submit</button>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Send Request</button>
              </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
