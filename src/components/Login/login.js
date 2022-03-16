import React, { useEffect, useState } from 'react';
import './login.css';
import icon from '../../assets/image.jpg';
import Navbar from '../Navbar/Navbar';
import bushes from '../../assets/bushes.png';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  function changeHeading() {
    if (document.getElementById('singUp-title').innerHTML == 'Sign Up') {
      document.getElementById('singUp-title').innerHTML = 'Login';
      document.getElementById('signUp-link').innerHTML = 'Create New Account';
    } else {
      document.getElementById('singUp-title').innerHTML = 'Sign Up';
      document.getElementById('signUp-link').innerHTML =
        'Already in the system ?';
    }
  }
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validation()) {
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/dashboard');
    }
  };

  useEffect(() => {
    if (localStorage.getItem('user')) {
      navigate('/dashboard');
    }
  }, []);

  const validation = () => {
    let email = document.getElementById("exampleInputEmail1");
    let password = document.getElementById("exampleInputPassword1");

    console.log(password);

    let emailMsg = document.getElementById("emailMsg");
    let passMsg = document.getElementById("passMsg");

    let flag = 1;

    if (email.value === "") {
      emailMsg.innerHTML = "Email is required";
      emailMsg.style = "color: red";

      flag = 0;

    }

    if (password.value == "") {
      console.log("Hello");
      passMsg.innerHTML = "Password is required";
      passMsg.style = "color: red";
      flag = 0;
    }

    if (flag) {
      return true;
    }
    else {
      return false;
    }
  }


  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div className="left">
          <div className="left-up">
            <img src={icon} alt="intro_image" />
            <h4>A new way to invest in agriculture</h4>
          </div>
          <div className="left-down">
            <p>
              GardenBarter is an Agri-tech start-up that aims to utilize empty
              spaces inside apartment complexes to grow fresh produce in
              communal spaces and private balconies.{' '}
            </p>
          </div>
        </div>
        <div className="right">
          <div className="form-div">
            <form className="form-outermost">
              <h2 className="signup" id="singUp-title">
                {' '}
                Sign Up
              </h2>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  User Name / Email Id
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="User Name / Email Id"
                  name="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
                <p id="emailMsg"></p>

                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label id="password" htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  name="password"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
                <p id="passMsg"></p>

              </div>
              <div className="btns-login">
                <button
                  type="submit"
                  className="btn-submit btn-primary"
                  onClick={(e) => handleSubmit(e)}
                >
                  {' '}
                  Submit
                </button>

                <a href="#" id="signUp-link" onClick={changeHeading}>
                  Already in the system ?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="bushes">
        <img src={bushes} alt="" />
      </div>
    </>
  );
}

export default Login;
