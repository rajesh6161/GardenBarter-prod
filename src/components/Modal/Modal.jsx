import React, { useState } from 'react';
import './modal.css'
import { myProducts, addingProduct } from '../Data/Data';
import upload from '../../assets/upload.png';
import { CLOUDINARY_URL, UPLOAD_PRESET } from '../../keys'

const Modal = () => {

  const [productDetails, setProductDetails] = useState({
    item: "",
    photo: "",
    quantity: "",
    expectedDate: ""
  }
  )
  const { item, photo, quantity, expectedDate } = productDetails
  // const [item, setItem] = useState({});

  const [productImage, setProductImage] = useState('')

  const handleChange = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  }

  // const validation = () => {
  //   let nameMsg = document.getElementById("nameMsg");
  //   let quantityMsg = document.getElementById("quantityMsg");
  //   let nameCheck = document.getElementById("nameCheck");
  //   let quantityCheck = document.getElementById("quantityCheck");
  //   let flag = 1;

  //   if (nameCheck.value == "") {
  //     nameMsg.innerHTML = "Name is required";
  //     nameMsg.style = "color: red";
  //     flag = 0;
  //   }

  //   if (quantityCheck.value == "") {
  //     quantityMsg.innerHTML = "Quantity is required";
  //     quantityMsg.style = "color: red";
  //     flag = 0;
  //   }

  //   if (flag) {
  //     return true;
  //   }
  //   else {
  //     return false;
  //   }
  // }

  const uploadProductImage = () => {
    const { files } = document.querySelector('input[type="file"]')

    if (files.length == 0) {
      alert("Please choose an image")
    } else if (files[0].type == 'image/jpeg' || files[0].type == 'image/png') {
      const { files } = document.querySelector('input[type="file"]');
      const formData = new FormData();
      formData.append('file', files[0]);
      formData.append('upload_preset', UPLOAD_PRESET);

      const options = {
        method: 'POST',
        body: formData
      }

      return fetch(CLOUDINARY_URL, options).then(res => res.json()).then(res => console.log(res)).catch(err => console.log(err))
    } else {
      alert('Please choose jpeg/png formats')
    }
  }


  const addProduct = () => {



    if (item.length || quantity.length || expectedDate.length) {
      myProducts.push(productDetails);
      console.log(myProducts);
      alert("Product Added Successfully");
    } else {
      alert('Fields Missing')
    }

  }
  return (

    <>
      <button type="button" class="btn btn2" data-bs-toggle="modal" data-bs-target="#exampleModal2">
        Add Product
      </button>
      <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" style={{ color: 'black' }} id="exampleModalLabel">Add Product</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="modal-body">
                <div class="container-fluid text-black">
                  <div class="row">
                    <div class="col-md-4">Product Name</div>
                    <div class="col-md-8" >
                      <input id="nameCheck" class="form-control" minlength="3" onChange={handleChange} name="item" value={item} type="text" required placeholder="Product Name" aria-label="default input example" />
                      <p id="nameMsg"></p>
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col-md-4">Quantity</div>
                    <div class="col-md-8">
                      <input class="form-control" name="quantity" minlength="3" onChange={handleChange} required type="text" value={quantity} placeholder="1-50Kg" aria-label="default input example" />
                    </div>
                    <p id="quantityMsg"></p>
                  </div>

                  <div class="row mt-3">
                    <div class="col-md-4">Expected Days</div>
                    <div class="col-md-8"><input class="form-control" minlength="3" name="expectedDate" value={expectedDate} onChange={handleChange} required type="text" placeholder="1-30 days" aria-label="default input example" /></div>
                  </div>
                  <div className="flexC">
                    <div class="btn btn-sm upload-btn">
                      <input type="file" name="photo" id="file" accept='image/*' />
                      <label For="file"> Upload Image  <img src={upload} alt="" />
                      </label>
                    </div>
                    <button onClick={addProduct} type="submit" className="btn ">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
