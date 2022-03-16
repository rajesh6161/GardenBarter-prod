import React from 'react';
import './NearbyCard.css';
import { myProducts } from '../Data/Data';
const NearbyCard = ({ name, item, quantity, time, photo }) => {

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
          <h5 className="card-title">{name}</h5>
          <p>
            Item Available: <b>{item}</b>
          </p>
          <p>Quantity: {quantity}</p>
          <p>Time to harvest: {(time.substring(0, time.length - 4)) - (date - startdate) + 1} days</p>

          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Barter
          </button>

          {/* Modal Button */}

          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Exchange Product</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div class="modal-body">
                    <div class="container-fluid">
                      <div class="row">
                        <div class="col-md-4"><h6>Product Name</h6></div>
                        <div class="col-md-8">
                          <input class="form-control" type="text" placeholder="Enter item name" a-label="default input example" />
                        </div>
                      </div>
                      <div class="row mt-3">
                        <div class="col-md-4"><h6>Quantity in Possession</h6></div>
                        <div class="col-md-8"><input class="form-control" type="text" placeholder="1-50Kg" aria-label="default input example" /></div>
                      </div>

                      <div class="row mt-1">
                        <div class="col-md-5 mt-3"><h6>What do you want to exchange</h6></div>
                        <div class="col-md-7">

                          <div class="dropdown mt-0">
                            <select class="btn btn-secondary dropdown-toggle" name="products" id="dropdownMenuButton">
                              <option value="" disabled selected hidden>My products</option>

                              {myProducts.map((eachProduct) => (
                                <option key={eachProduct.id}>{eachProduct.item}</option>
                              ))}
                            </select>

                          </div>
                        </div>
                      </div>
                      <div class="row mt-3">
                        <div class="col-md-4"><h6>Barter Quantity</h6></div>
                        <div class="col-md-8"><input class="form-control" type="text" placeholder="1-50Kg" aria-label="default input example" /></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="modal-footer">
                  <button type="button" data-bs-dismiss="modal" aria-label="Close" class="btn btn-primary-center mx-auto text-white">Send Request</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )

};

export default NearbyCard;
