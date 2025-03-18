import React, { useContext, useEffect, useState } from 'react';
import './style.css';
import ShowOrHideEye from '../../svg/ShowOrHideEye';
import { logIn } from '../../functions';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { LoginContext } from '../../App';
import InputField from '../Input';

const LoginPage = ({ loggedIn }) => {
  const [isRightPanelActive, setRightPanelActive] = useState(false);
  const [isRightMobilePanelActive, setRightMobilePanelActive] = useState(false);
  const [initialData, setInitialData] = useState({
    userName: "",
    password: "",
    email: ""
  })
  const [loginData, setLoginData] = useState(initialData);
  const { login, setLogin } = useContext(LoginContext);
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignUp) {
      e.preventDefault();
      // Add sign-up logic if needed
      console.log('Sign-up form submitted with:', loginData);
    }
    else {
      e.preventDefault(); // Prevent default form behavior
      console.log("hvjgf", initialData);

      try {
        const loginDetails = await logIn(loginData);
        console.log("Final Login Details:", loginDetails);
        localStorage.setItem('login', JSON.stringify(loginDetails));
        setLogin(loginDetails)
        loggedIn(true)
      } catch (error) {
        console.error("Login Error:", error);
        loggedIn(false)
      }
      setLoginData(initialData)
    }
    const modal = document.querySelector('[data-bs-dismiss="modal"]');
    if (modal && login) {
      modal.click();
    }
  };

  const handleFormChange = () => {
    // setRightPanelActive(!isRightPanelActive)
    setRightMobilePanelActive(!isRightMobilePanelActive)
  }
  return (
    <div className='login-page'>
      <div className={`container position-relative px-0 mx-0 ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container">
        {/* Sign Up Form */}
        <div className={`form-container ${isSignUp ? "sign-up-container" : "sign-in-container"}`}>
          <form onSubmit={handleSubmit}>
            <h4 className='text-center'>{isSignUp ? 'Create Account' : 'Sign In'}</h4>
            <InputField label={"User Name"} type={'text'} id={'userName'} value={loginData} setLoginData={setLoginData}
            />
            {/* <label htmlFor='username' className='form-label mb-0'>User Name</label>
            <input
              className='form-control'
              placeholder='Enter your Name'
              type='text'
              id='username'
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            /> */}
            {isRightPanelActive && (
              <InputField label={"Email"} type={'text'} id={'email'} value={loginData} setLoginData={setLoginData}/>
            )}
            {/* {isSignUp && (
              <>
                <label htmlFor='email' className='form-label mb-0'>Email Address</label>
                <input
                  className='form-control'
                  placeholder='Enter your Email Address'
                  type='email'
                  id='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </>
            )} */}
              <InputField label={"Password"} type={'password'} id={'password'} value={loginData} setLoginData={setLoginData}/>
            {!isSignUp && <a href='#' className='d-flex justify-content-center'>Forgot your password?</a>}
            <button type='submit' data-bs-dismiss='modal' aria-label='Close'>{isSignUp ? 'Sign Up' : 'Sign In'}</button>
          </form>
        </div>

        {/* Overlay Section */}
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h4 className='fs-1'>Welcome Back!</h4>
              <p>To keep connected with us, please login with your personal info</p>
              <button className="ghost" onClick={() => setRightPanelActive(false)}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h4 className='fs-1'>Hello, Cartie!</h4>
              <p>Enter your personal details and start your journey with us</p>
              <button className="ghost" onClick={() => setRightPanelActive(true)}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;