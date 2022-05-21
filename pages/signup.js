import React, {useState, useEffect} from "react";
import Link from "next/link";
import validator from 'validator'
import isEmail from 'validator/lib/isEmail'
import isDate from 'validator/lib/isDate'
import OtpInput from "react-otp-input";
import { createPopper } from "@popperjs/core";
import { useSelector, useDispatch } from 'react-redux';
import { incrementCounter, decrementCounter } from '../store/counter/action';

// layout for page

import Auth from "layouts/Auth.js";

export default function Login() {
  //Handle OTP
  let [OTPstate, setOTP] = useState("")

  const handleChangeOTP = (event) => {

    if (event.length === 6) {
      isOtpValid(true)
    }
    console.log(event.length)
    console.log(event)
    setOTP(event)
  }


  let [phone, setPhone] = useState("")
  let [createProfile, setCreateProfile] = useState("")
  let [signUp, setSignUp] = useState(true)
  let [otpUp, setOTPUp] = useState("")

  let [valid, isValid] = useState("")
  let [otpValid, isOtpValid] = useState("")

  let [firstName, setFirstName] = useState("")
  let [lastName, setLastName] = useState("")

  let [dob, setDOB] = useState("")
  let [dobValid, isDOBValid] = useState("")


  let [gender, setGender] = useState("")


  let [email, setEmail] = useState("")
  let [emailValid, isEmailValid] = useState("")
  let [profileValid, isProfileValid] = useState("")
  let [formValid, setFormValid] = useState("")

  useEffect(() => {
    console.log(phone);
  }, [phone]);


  const setPhoneNum = (event) => {
    setPhone(event.target.value)
    isValid(validatePhoneNumber(event.target.value))
  }

  const handlePhoneChange = (event) => {
    console.log(phone)
    setPhone(event.target.value)
    isValid(validatePhoneNumber(event.target.value))
  }
  const handleCreateProfile = (event) => {
    setCreateProfile(true)
    setSignUp(false)
    setOTPUp(false)
  }


  const handleOTPUp = (event) => {
    validatePhoneNumber(phone)
    setSignUp(false)
    setOTPUp(true)
  }

  const handleFirstValid = (event) => {
    setFirstName(event.target.value)
  }
  const handleLastValid = (event) => {
    setLastName(event.target.value)
  }
  const handleDOBValid = (event) => {
    if(isDate(event.target.value,{format: "MM/DD/YYYY",})) {
      isDOBValid(true)
      console.log("dob valid")
    }
    setDOB(event.target.value)
  }
  const handleGender = (event) => {
    setGender(event.target.value)
  }
  const handleEmail= (event) => {
    if(isEmail(event.target.value)) {
      isEmailValid(true)
    }
    setEmail(event.target.value)
  }

  const isFormValid = (event) => {
    if(isEmailValid && setGender && isDOBValid && firstName && lastName) {
      setFormValid(true)
    }
  }


  let validatePhoneNumber = (value) => {
    let isValidPhoneNumber = validator.isMobilePhone(value, "en-US")
    // console.log(isValidPhoneNumber, phone)
    return (isValidPhoneNumber)
  }


  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="sign-in-wrapper absolute w-full flex mt-8 justify-end items-center" style={{maxWidth: '423px', left: '0'}}>
        <h6 className="text-md font-medium mr-3">Already have an account?</h6>
        <Link href="login">
        <button 
        className="bg-primary font-medium text-white text-md px-4 py-2 rounded"
        >
        Sign In</button>
        </Link>
       
        </div>
        
        
        <div  style={{top: '193px'}} className="flex relative content-center items-center justify-center">
          <div className="w-full  px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded-l border-0">

              {signUp && 
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0" style={{maxWidth: '423px'}}>
                <h5 className="text-2xl font-bold mb-1">Sign Up</h5>
                <h3 className="text-4xl font-bold mb-12">Let's Get Started!</h3>
                <form>
                  <div className="relative flex flex-wrap items-stretch w-full mb-3">
                    <label
                      className="block text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Enter phone number
                    </label>
                    <span style={{top: '34px', left: '9px'}} className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1">
                      <i className="icon-phone-lg text-green-primary disabled:text-green-secondary" disabled={!valid}></i>
                    </span>
                    <input
                      type="tel"
                      className="w-full input-primary pl-8 px-8 py-13 focus:outline-none"
                      onKeyUp={setPhoneNum}
                      placeholder="123 456 7890"
                    />
                    {valid &&
                    <span style={{top: '32px', right: '9px'}} className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1">
                      <i className="icon-check text-green-active disabled:display-none"></i>
                    </span>
                    }
                  </div>


                  <div className="text-center mt-6">
                    <button
                      className="bg-primary text-white active:bg-tertiary disabled:bg-secondary text-sm font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                      disabled={!valid}
                      onClick={handleOTPUp}
                    >
                      Send One-Time Password
                    </button>
                  </div>
                </form>
              </div>
              }
              {/* {signIn && 
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0" style={{maxWidth: '423px'}}>
                <h5 className="text-2xl font-bold mb-1">Sign In</h5>
                <h3 className="text-4xl font-bold mb-12">Welcome Back</h3>
                <form>
                  <div className="relative flex flex-wrap items-stretch w-full mb-3">
                    <label
                      className="block text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Enter phone number
                    </label>
                    <span style={{top: '32px', left: '9px'}} className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1">
                      <i className="icon-phone-lg text-green-primary disabled:text-green-secondary" disabled={!valid}></i>
                    </span>
                    <input
                      type="tel"
                      className="w-full input-primary pl-8 focus:outline-none"
                      onChange={handlePhoneChange}
                      value={phone}
                      placeholder="123 456 7890"
                    />
                    {valid &&
                    <span style={{top: '32px', right: '9px'}} className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1">
                      <i className="icon-check text-green-active disabled:display-none"></i>
                    </span>
                    }
                  </div>


                  <div className="text-center mt-6">
                    <button
                      className="bg-primary text-white active:bg-tertiary disabled:bg-secondary text-sm font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                      disabled={!valid}
                      onClick={handleOTPIn}
                    >
                      Send One-Time Password
                    </button>
                  </div>
                </form>
              </div>
              } */}
              {/* {otpIn && 
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0" style={{maxWidth: '423px'}}>
              <h5 className="text-2xl font-bold mb-1">Sign In</h5>
              <h3 className="text-4xl font-bold mb-12">Welcome Back!</h3>
              <label
                      className="block text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Enter One-time Password
                    </label>
              <OtpInput
                className="otp-input"
                value={OTPstate}
                onChange={handleChangeOTP}
                numInputs={6}
                isInputNum={true}
                inputStyle={"otp-single"}
                // separator={<span>-</span>}
              />
              <div className="text-center mt-6">
                <button
                  className="bg-primary text-white active:bg-tertiary disabled:bg-secondary text-sm font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="button"
                  disabled={!otpValid}
                  onClick={handleOTP}
                >
                  Login
                </button>
              </div>
            </div>
              } */}
              {otpUp && 
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0" style={{maxWidth: '423px'}}>
              <h5 className="text-2xl font-bold mb-1">Sign Up</h5>
              <h3 className="text-4xl font-bold mb-12">Let's Get Started</h3>
              <label
                      className="block text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Enter One-time Password
                    </label>
              <OtpInput
                className="otp-input"
                value={OTPstate}
                onChange={handleChangeOTP}
                numInputs={6}
                isInputNum={true}
                inputStyle={"otp-single"}
                // separator={<span>-</span>}
              />
              <div className="text-center mt-6">
                <button
                  className="bg-primary text-white active:bg-tertiary disabled:bg-secondary text-sm font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="button"
                  disabled={!otpValid}
                  onClick={handleCreateProfile}
                >
                  Login
                </button>
              </div>
                <p className="sub-text">A 6 digit one-time password has been sent to your entered number</p>
            </div>
              }
              {/* {createProfile && 
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0" style={{maxWidth: '423px'}}>
              <h5 className="text-2xl font-bold mb-1">Create Your Profile</h5>
              <form>
                  <div className="relative flex flex-wrap items-stretch w-full mb-3">
                    <label
                      className="block text-blueGray-600 text-xs font-bold mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full input-primary pl-8 focus:outline-none"
                      onChange={handleFirstValid}
                      value={firstName}
                      placeholder="e.g. Dwight"
                    />
                    {firstName &&
                    <span style={{top: '32px', right: '9px'}} className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1">
                      <i className="icon-check text-green-active disabled:display-none"></i>
                    </span>
                    }
                    <label
                      className="block text-blueGray-600 text-xs font-bold mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full input-primary pl-8 focus:outline-none"
                      onChange={handleFirstValid}
                      value={lastName}
                      placeholder="e.g. Schrute"
                    />
                    {lastName &&
                    <span style={{top: '32px', right: '9px'}} className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1">
                      <i className="icon-check text-green-active disabled:display-none"></i>
                    </span>
                    }
                    <label
                      className="block text-blueGray-600 text-xs font-bold mb-2"
                    >
                      Date Of Birth
                    </label>
                    <input
                      type="text"
                      className="w-full input-primary pl-8 focus:outline-none"
                      onChange={handleDOBValid}
                      value={dob}
                      placeholder="e.g. 11/11/1990"
                    />
                    {dob &&
                    <span style={{top: '32px', right: '9px'}} className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1">
                      <i className="icon-check text-green-active disabled:display-none"></i>
                    </span>
                    }
                    <label
                      className="block text-blueGray-600 text-xs font-bold mb-2"
                    >
                      Gender
                    </label>
                    <span style={{top: '32px', left: '9px'}} className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1">
                      <i className="icon-phone-lg text-green-primary disabled:text-green-secondary" disabled={!valid}></i>
                    </span>
                    <input
                      type="text"
                      className="w-full input-primary pl-8 focus:outline-none"
                      onChange={handleFirstValid}
                      value={firstName}
                      placeholder="e.g. Dwight"
                    />
                    {gender &&
                    <span style={{top: '32px', right: '9px'}} className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1">
                      <i className="icon-check text-green-active disabled:display-none"></i>
                    </span>
                    }
                    <label
                      className="block text-blueGray-600 text-xs font-bold mb-2"
                    >
                      Email
                    </label>
                    <span style={{top: '32px', left: '9px'}} className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1">
                      <i className="icon-phone-lg text-green-primary disabled:text-green-secondary" disabled={!valid}></i>
                    </span>
                    <input
                      type="text"
                      className="w-full input-primary pl-8 focus:outline-none"
                      onChange={handleFirstValid}
                      value={firstName}
                      placeholder="e.g. Dwight"
                    />
                    {email &&
                    <span style={{top: '32px', right: '9px'}} className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1">
                      <i className="icon-check text-green-active disabled:display-none"></i>
                    </span>
                    }
                    </div>


                  <div className="text-center mt-6">
                    <button
                      className="bg-primary text-white active:bg-tertiary disabled:bg-secondary text-sm font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                      disabled={!valid}
                      onClick={handleOTPIn}
                    >
                      Send One-Time Password
                    </button>
                  </div>
                </form>
              <div className="text-center mt-6">
                <button
                  className="bg-primary text-white active:bg-tertiary disabled:bg-secondary text-sm font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="button"
                  disabled={!otpValid}
                  onClick={handleOTP}
                >
                  Login
                </button>
              </div>
                <p className="sub-text">A 6 digit one-time password has been sent to your entered number</p>
            </div>
              } */}
            </div>
          </div>
        </div>
        {createProfile && 
        
        <div  style={{top: '80px'}} className="flex relative content-center items-center justify-center">
          <div className="w-full  px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded-l border-0">

            
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0" style={{maxWidth: '423px'}}>
              <h5 className="text-2xl font-bold mb-1">Create Your Profile</h5>
              <form>
                  <div className="relative flex flex-wrap items-stretch w-full mb-3">
                    <label
                      className="block text-sm font-bold my-3"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full input-primary pl-2 py-13 focus:outline-none"
                      onChange={handleFirstValid}
                      onKeyDown={isFormValid}
                      value={firstName}
                      placeholder="e.g. Dwight"
                    />
                    {firstName &&
                    <span style={{top: '54px', right: '9px'}} className="z-10  leading-snug font-normal absolute text-center text-blueGray-300 bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1">
                      <i className="icon-check text-green-active disabled:display-none"></i>
                    </span>
                    }
                    <label
                      className="block text-sm font-bold my-3"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full input-primary pl-2 py-13 focus:outline-none"
                      onChange={handleLastValid}
                      onKeyDown={isFormValid}
                      value={lastName}
                      placeholder="e.g. Schrute"
                    />
                    {lastName &&
                    <span style={{top: '145px', right: '9px'}} className="z-10 leading-snug font-normal absolute text-center text-blueGray-300 bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1">
                      <i className="icon-check text-green-active disabled:display-none"></i>
                    </span>
                    }
                    <label
                      className="block text-sm font-bold my-3"
                    >
                      Date Of Birth
                    </label>
                    <input
                      type="text"
                      className="w-full input-primary pl-2 py-13 focus:outline-none"
                      onChange={handleDOBValid}
                      onKeyDown={isFormValid}
                      value={dob}
                      placeholder="e.g. 11/11/1990"
                    />
                    {dobValid &&
                    <span style={{top: '236px', right: '9px'}} className="z-10  leading-snug font-normal absolute text-center text-blueGray-300 bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1">
                      <i className="icon-check text-green-active disabled:display-none"></i>
                    </span>
                    }
                    <label
                      className="block text-sm font-bold my-3"
                    >
                      Gender
                    </label>
                   
                    {/* <input
                      type="text"
                      className="w-full input-primary pl-2 py-13 focus:outline-none"
                      onChange={handleGender}
                      onKeyDown={isFormValid}
                      value={gender}
                      placeholder="e.g."
                    /> */}
                    <select
                      type="text"
                      className="w-full input-primary pl-2 py-16-px focus:outline-none"
                      onChange={handleGender}
                      onKeyDown={isFormValid}
                      value={gender}
                      placeholder="e.g."

                    >
                      <option>Female</option>
                      <option>Male</option>
                      <option>Non-binary</option>
                      <option>N/A</option>
                    </select>
                    {gender &&
                    <span style={{top: '327px', right: '20px'}} className="z-10 leading-snug font-normal absolute text-center text-blueGray-300 bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1">
                      <i className="icon-check text-green-active disabled:display-none"></i>
                    </span>
                    }
                    <label
                      className="block text-sm font-bold my-3"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      className="w-full input-primary pl-2 py-13 focus:outline-none mb-6"
                      onChange={handleEmail}
                      onKeyDown={isFormValid}
                      value={email}
                      placeholder="e.g. dwight@dundermifflin.com"
                    />
                    {emailValid &&
                    <span style={{top: '418px', right: '9px'}} className="z-10 leading-snug font-normal absolute text-center text-blueGray-300 bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1">
                      <i className="icon-check text-green-active disabled:display-none"></i>
                    </span>
                    }
                    </div>


                </form>
              <div className="text-center mt-6">
                <Link href="/dashboard">

                
                <button
                  className="bg-primary text-white active:bg-tertiary disabled:bg-secondary text-sm font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="button"
                  disabled={!formValid}
                  onClick={handleCreateProfile}
                >
                  Create Profile
                </button>
                </Link>
              </div>
            </div>
              
            </div>
          </div>
        </div>
        }
        
      </div>
    </>
  );
}

Login.layout = Auth;