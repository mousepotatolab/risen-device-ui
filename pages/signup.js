import React, {useState, useEffect} from "react";
import Link from "next/link";
import isEmail from 'validator/lib/isEmail'
import isDate from 'validator/lib/isDate'
import OtpInput from "react-otp-input";
const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();

import { userSignup, verifyUserOtp, storeUserToken, storeUserProfile } from "../services/UserService";
// layout for page

import Auth from "layouts/Auth.js";
import Router, { withRouter, useRouter } from 'next/router'

export default function Signup() {
  const router = useRouter();

  //Handle OTP
  let [OTPstate, setOTP] = useState("")
  let [otpError, setOtpError] = useState(false)
  let [phoneError, setPhoneError] = useState(false)
  let [loading, setLoading] = useState(false)

  const handleChangeOTP = (event) => {
    if (event.length === 6) {
      isOtpValid(true)
    }
    setOTP(event)
  }


  let [phone, setPhone] = useState("")
  let [createProfile, setCreateProfile] = useState("")
  let [signUp, setSignUp] = useState(true)
  let [otpUp, setOTPUp] = useState("")

  let [valid, isValid] = useState(true)
  let [otpValid, isOtpValid] = useState("")

  let [firstName, setFirstName] = useState("")
  let [lastName, setLastName] = useState("")

  let [dob, setDOB] = useState("")
  let [dobValid, isDOBValid] = useState("")


  let [gender, setGender] = useState("Female")


  let [email, setEmail] = useState("")
  let [emailValid, isEmailValid] = useState("")
  let [profileValid, isProfileValid] = useState("")
  let [formValid, setFormValid] = useState("")

  const setPhoneNum = (event) => {
    setPhone(event.target.value)
    isValid(validatePhoneNumber(event.target.value))
  }

  const handleVerifyOtp = (event) => {
    if (!OTPstate) {
      return false;
    }
    setLoading(true)
    verifyUserOtp({otp: OTPstate, phone}).then(
      (result) => {
        if (result.success) {
          setCreateProfile(true)
          setSignUp(false)
          setOTPUp(false)
          setLoading(false)
          storeUserToken(result.token);
        } else {
          setOtpError(true);
          setLoading(false)
        }
      },
      (err) => {
        setOtpError(true);
        setLoading(false)
      }
    )
    
  }


  const handleOTPUp = (event) => {
    if(!validatePhoneNumber(phone)) {
      return false;
    }
    setLoading(true)
    userSignup({phone}).then(
      (result) => {
        if (result.success) {
          setOTPUp(true)
          setSignUp(false)
          setLoading(false)
        } else {
          setLoading(false)
          setPhoneError(result.message);
        }
        
      },
      (err) => {
        setLoading(false)
      }
    )
  }

  useEffect(() => {
    isFormValid();
  }, [firstName]);
  useEffect(() => {
    isFormValid();
  }, [lastName]);
  useEffect(() => {
    isFormValid();
  }, [dob]);
  useEffect(() => {
    isFormValid();
  }, [gender]);
  useEffect(() => {
    isFormValid();
  }, [email]);

  const handleFirstValid = (event) => {
    setFirstName(event.target.value);
  }
  const handleLastValid = (event) => {
    setLastName(event.target.value)
  }
  const handleDOBValid = (event) => {
    isDOBValid(false)
    setDOB(event.target.value)
    if(isDate(event.target.value, {format: "MM/DD/YYYY"})) {
      isDOBValid(true)
      console.log("dob valid")
    }
  }
  const handleGender = (event) => {
    setGender(event.target.value)
  }
  const handleEmail= (event) => {
    isEmailValid(false)
    if(isEmail(event.target.value)) {
      isEmailValid(true)
    }
    setEmail(event.target.value)
  }

  const isFormValid = () => {
    setFormValid(false)
    if(emailValid && dobValid && gender && dob && firstName && lastName) {
      setFormValid(true)
    }
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

  const handleCreateProfile = () => {
    console.log(firstName, lastName, gender, dob, email)
    if (!(firstName && lastName && gender && dob && email)) {
        return false;
    }

    const obj = {firstName, lastName, gender, dob, email};
    storeUserProfile(obj).then(
      (result) => {
        if (result.success) {
          Router.push({
            pathname: '/dashboard'
          })
        }
      }
    )
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
                    {!valid && (<span style={{fontSize: '14px', color: '#FF3B30'}}>Please enter a valid phone number</span>)}
                    {phoneError && (<span style={{fontSize: '14px', color: '#FF3B30'}}>The phone number is already exist</span>)}
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
                      {!loading && (<>Send One-Time Password</>)}
                      {loading && (<>Processing</>)}
                    </button>
                  </div>
                </form>
              </div>
              }
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
                hasErrored={otpError}
                inputStyle={"otp-single"}
                errorStyle={"otp-error"}
                // separator={<span>-</span>}
              />
              {otpError && (<span style={{fontSize: '13px', color: '#FF3B30'}}>The one-time password you have entered is not correct</span>)}
              <div className="text-center mt-6">
                <button
                  className="bg-primary text-white active:bg-tertiary disabled:bg-secondary text-sm font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="button"
                  disabled={!otpValid}
                  onClick={handleVerifyOtp}
                >
                  {!loading && (<>Login</>)}
                  {loading && (<>Processing</>)}
                </button>
              </div>
                <p className="sub-text">A 6 digit one-time password has been sent to your entered number</p>
            </div>
              }
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
                      onKeyDown={handleFirstValid}
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
                      onKeyDown={handleLastValid}
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
                      onKeyDown={handleDOBValid}
                      value={dob}
                      placeholder="e.g. 11/30/1990"
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
                      onKeyDown={handleGender}
                      value={gender}
                      placeholder="e.g."

                    >
                      <option value="Female">Female</option>
                      <option value="Male">Male</option>
                      <option value="Non-binary">Non-binary</option>
                      <option value="N/A">N/A</option>
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
                      onKeyDown={handleEmail}
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
                <button
                  className="bg-primary text-white active:bg-tertiary disabled:bg-secondary text-sm font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="button"
                  disabled={!formValid}
                  onClick={handleCreateProfile}
                >
                  Create Profile
                </button>
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

Signup.layout = Auth;