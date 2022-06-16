import React, { useState, useEffect } from "react";
import Link from "next/link";
import validator from 'validator'
import OtpInput from "react-otp-input";
const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();

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
  let [signIn, setSignIn] = useState(true)
  let [otpIn, setOTPIn] = useState("")

  let [valid, isValid] = useState("")
  let [otpValid, isOtpValid] = useState("")

  let [createProfile, setCreateProfile] = useState("")
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


  const handleOTP = (event) => {
  }
  const handleOTPIn = (event) => {
    validatePhoneNumber(phone)
    setSignIn(false)
    setOTPIn(true)
  }


  let validatePhoneNumber = (value) => {
    if (!value) {
      return false;
    }
    try {
      let isValidPhoneNumber = phoneUtil.isValidNumberForRegion(phoneUtil.parse(String(value), 'US'), 'US');
      return isValidPhoneNumber
    } catch (error) {
      return false;
    }
  }


  return (
    <>

      <div className="container mx-auto px-4 h-full">

        <div className="sign-in-wrapper absolute w-full flex mt-8 justify-end items-center" style={{ maxWidth: '423px', left: '0' }}>

          <h6 className="text-md font-medium mr-3">Don't have an account?</h6>
          <Link href="signup">
            <button
              className="bg-primary font-medium text-white text-md px-4 py-2 rounded"
            >
              Sign Up</button>
          </Link>

        </div>


        <div style={{ top: '193px' }} className="flex relative content-center items-center justify-center">
          <div className="w-full  px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded-l border-0">
              {signIn &&
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0" style={{ maxWidth: '423px' }}>
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
                      <span style={{ top: '34px', left: '9px' }} className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1">
                        <i className="icon-phone-lg text-green-primary disabled:text-green-secondary" disabled={!valid}></i>
                      </span>
                      <input
                        type="tel"
                        className="w-full input-primary pl-8 px-8 py-13 focus:outline-none"
                        // onChange={setPhoneNum}
                        onKeyUp={setPhoneNum}
                        // onChange={() => {}}
                        // value={phone}
                        placeholder="123 456 7890"
                      />
                      {valid &&
                        <span style={{ top: '32px', right: '9px' }} className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1">
                          <i className="icon-check text-green-active disabled:display-none"></i>
                        </span>
                      }
                      {!valid &&
                        <span style={{ top: '32px', right: '9px' }} className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1">
                          <i className="icon-check text-red-active disabled:display-none"></i>
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
              }
              {otpIn &&
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0" style={{ maxWidth: '423px' }}>
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
                    <Link href="/dashboard">
                      <button
                        className="bg-primary text-white active:bg-tertiary disabled:bg-secondary text-sm font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                        type="button"
                        disabled={!otpValid}
                        onClick={handleOTP}
                      >
                        Login
                      </button>
                    </Link>

                  </div>
                </div>
              }

              {createProfile &&

                <div style={{ top: '80px' }} className="flex relative content-center items-center justify-center">
                  <div className="w-full  px-4">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded-l border-0">


                      <div className="flex-auto px-4 lg:px-10 py-10 pt-0" style={{ maxWidth: '423px' }}>
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
                              <span style={{ top: '54px', right: '9px' }} className="z-10  leading-snug font-normal absolute text-center text-blueGray-300 bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1">
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
                              <span style={{ top: '145px', right: '9px' }} className="z-10 leading-snug font-normal absolute text-center text-blueGray-300 bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1">
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
                              <span style={{ top: '236px', right: '9px' }} className="z-10  leading-snug font-normal absolute text-center text-blueGray-300 bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1">
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
                              <span style={{ top: '327px', right: '20px' }} className="z-10 leading-snug font-normal absolute text-center text-blueGray-300 bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1">
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
                              <span style={{ top: '418px', right: '9px' }} className="z-10 leading-snug font-normal absolute text-center text-blueGray-300 bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1">
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
          </div>
        </div>


      </div>
    </>
  );
}

Login.layout = Auth;
