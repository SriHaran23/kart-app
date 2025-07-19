import React, { useContext, useEffect, useState } from 'react';
import './style.css';
import ShowOrHideEye from '../../svg/ShowOrHideEye';
import { logIn, loginFormSubmit, addUsers, getUsers, getValidationSchema } from '../../functions';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { LoginContext } from '../../App';
import LoginInputField from './input';
import { useFormik } from 'formik';
import * as Yup from "yup";
import LoginButtons from './button';

const LoginPage = ({ }) => {
  const location = useLocation();
    const navigate = useNavigate();
  const [isRightPanelActive, setRightPanelActive] = useState(false);
  const [isRightMobilePanelActive, setRightMobilePanelActive] = useState(false);
  const [initialData, setInitialData] = useState({
    userName: "",
    password: "",
    email: ""
  })
  const [loginData, setLoginData] = useState(initialData);
  const [isSignUp, setIsSignUp] = useState(false);
  const formData = useFormik({
    initialValues: {
      userName: "",
      password: "",
      email: "",
      isSignUp: isRightPanelActive
    },
    validationSchema: getValidationSchema(isRightPanelActive),
    onSubmit: (values) => {if(!isRightPanelActive) {logIn(values,location) && navigate(location.state?.from || '/')}}
  })

  const handleSubmit = (e) => {

  };

  useEffect(()=>{
    console.log("loca",location);
    
  },[location])

  const handleFormChange = () => {
    setRightPanelActive(!isRightPanelActive)
    setRightMobilePanelActive(!isRightMobilePanelActive)
  }
  return (
    <div className='login-page d-flex justify-content-center align-items-center'>
      <div className=' w-75 d-flex justify-content-center align-items-center'>
        <div className={`container w-75 position-relative px-0 mx-0 ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container">
          {/* Sign Up Form */}
          <div className={`form-container ${isRightPanelActive ? "sign-up-container" : "sign-in-container"}`}>
            {/* Mobile toggle buttons for Sign In / Sign Up */}
            <div className={`mobile-tab-switch ${isRightPanelActive ? 'signup-active' : ''} d-md-none position-relative`}>
              <div className="slider-tab"></div>
              <button
                className={`login ${!isRightPanelActive ? 'active' : ''}`}
                type="button"
                onClick={() => {
                  setIsSignUp(false);
                  setRightPanelActive(false);
                }}
              >
                Login
              </button>
              <button
                className={`signup ${isRightPanelActive ? 'active' : ''}`}
                type="button"
                onClick={() => {
                  setIsSignUp(true);
                  setRightPanelActive(true);
                }}
              >
                Sign Up
              </button>
            </div>

            <form onSubmit={formData.handleSubmit}>
              <h4 className='text-center'>{isRightPanelActive ? 'Create Account' : 'Sign In'}</h4>
              <LoginInputField formData={formData} label={"User Name"} type={'text'} id={'userName'} value={loginData} setLoginData={setLoginData}
              />

              {isRightPanelActive && (
                <LoginInputField formData={formData} label={"Email"} type={'text'} id={'email'} value={loginData} setLoginData={setLoginData} />
              )}
              <LoginInputField formData={formData} label={"Password"} type={'password'} id={'password'} value={loginData} setLoginData={setLoginData} />
              {!isRightPanelActive && <a href='#' className='d-flex justify-content-center'>Forgot your password?</a>}
              <button type='submit'>{isRightPanelActive ? 'Sign Up' : 'Sign In'}</button>
            </form>
          </div>

          {/* Overlay Section */}
          <LoginButtons setRightPanelActive={setRightPanelActive} />

        </div>
      </div>
    </div>
  );
};

export default LoginPage;