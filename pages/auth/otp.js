import React, {useState} from "react";
import Link from "next/link";
import validator from 'validator'

// layout for page

import Auth from "layouts/Auth.js";

export default function Login() {

  let [phone, setPhone] = useState("")
  let [valid, isValid] = useState("")
  const handlePhoneChange = (event) => {
    console.log(phone)
    setPhone(event.target.value)
    isValid(validatePhoneNumber(event.target.value))
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
        <div  style={{top: '193px'}} className="flex relative content-center items-center justify-center">
          <div className="w-full  px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded-l border-0">
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
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
                  </div>


                  <div className="text-center mt-6">
                    <button
                      className="bg-primary text-white active:bg-tertiary disabled:bg-secondary text-sm font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                      disabled={!valid}
                      onClick={validatePhoneNumber}
                    >
                      Send One-Time Password
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Login.layout = Auth;
