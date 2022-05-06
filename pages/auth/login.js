import React, {useState} from "react";
import Link from "next/link";
import validator from 'validator'
import OtpInput from "react-otp-input";

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



  const handlePhoneChange = (event) => {
    console.log(phone)
    setPhone(event.target.value)
    isValid(validatePhoneNumber(event.target.value))
  }
  

  const handleOTP = (event) => {
  }
  const handleOTPIn = (event) => {
    validatePhoneNumber()
    setSignIn(false)
    setOTPIn(true)
  }


  let validatePhoneNumber = (event) => {
    console.log(phone)
    const isValidPhoneNumber = validator.isMobilePhone(phone)
    console.log(isValidPhoneNumber)
    return (isValidPhoneNumber)
  }


  return (
    <>
    
      <div className="container mx-auto px-4 h-full">

        <div className="sign-in-wrapper absolute w-full flex mt-4 justify-center items-center">
          
        <h6 className="text-xs font-medium mr-3">Don't have an account?</h6>
        <Link href="signup">
        <button 
        className="bg-primary font-medium text-white text-xs px-3 py-2 rounded"
        >
        Sign Up</button>
        </Link>
        
        </div>
        
        
        <div  style={{top: '193px'}} className="flex relative content-center items-center justify-center">
          <div className="w-full  px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded-l border-0">
              {signIn && 
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
              }
              {otpIn && 
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
            </div>
          </div>
        </div>
       
        
      </div>
    </>
  );
}

Login.layout = Auth;
