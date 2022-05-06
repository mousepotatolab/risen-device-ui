import React from 'react';
import { useState } from 'react';
// const { verifyUserOTP, setPayload } = require("../../services/ApiCallService");
// import Router, { withRouter } from 'next/router'
// import { ToastContainer, toast } from 'react-toastify';

const OTPform = (props) => {
  
  const [OTPvalue, setOTPvalue] = useState({
    OTP_1: '',
    OTP_2: '',
    OTP_3: '',
    OTP_4: '',
    OTP_5: '',
    OTP_6: ''
  });

  const notify = (message) => toast(message);

  const handleOTP = (e) => {
    let value = e.target.value;
    if (value.length > 1) {
      value = value.slice(0, 1);
    }
    setOTPvalue({
      ...OTPvalue,
      [e.target.name]: value
    });
    console.log(e, "ooo")
    const fieldName = e.target.name;
    let fieldNumber = fieldName.split("_");
    fieldNumber = fieldNumber.length > 0 ? fieldNumber[fieldNumber.length - 1] : 0;
    if(!value && fieldNumber > 1) {
      e.target.previousSibling.focus();
    } else {
      if (fieldNumber > 0 && fieldNumber < 6 && value) {
        e.target.nextSibling.focus();
      }
    }
  };

  const verifyOTP = async (e) => {
    e.preventDefault();
    const value = OTPvalue;
    let otp = '';

    for (let i = 1; i < 7; i++) {
      if (value['OTP_' + i]) {
        otp += value['OTP_' + i];
      } else {
        break;
      }
    }
    try {
      const verify = await verifyUserOTP({phonenumber: props.phoneNumber, otp});
      if ("success" in verify && verify.success) {
        setPayload(verify.token, verify.user);
        Router.push({
          pathname: '/home'
        })
      } else {
        notify("Invalid OTP")
      }
    } catch (e) {

    }
  }

  const otpInput = (handleOTP) => {
    const otpCount = [1,2,3,4,5,6];
    return otpCount.map(p => {
      return (
        <input
          type= 'number'
          name= {'OTP_' + p}
          onChange={handleOTP}
          id={'OTP_' + p}
          key={'OTP_' + p}
          value={OTPvalue['OTP_' + p]}
        />
      )
    })
  }

  const isFormValid = () => {
    if (
      OTPvalue.OTP_1 === null ||
      OTPvalue.OTP_2 === null ||
      OTPvalue.OTP_3 === null ||
      OTPvalue.OTP_4 === null ||
      OTPvalue.OTP_5 === null ||
      OTPvalue.OTP_6 === null
    ) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <div className='otp-form'>
      <h3 className="otp-form-header">Please check text messages for one time password</h3>
      <p className='otp-form-title'>Enter one time password</p>
      <form action='submit'>
        <div className='otp-inputs'>
          {otpInput(handleOTP)}
        </div>

        <button
          className='otp-submit-btn'
          disabled={!isFormValid()}
          style={{
            backgroundColor: isFormValid() && '#5e6af2',
            borderColor: isFormValid() && '#5e6af2'
          }}
          onClick={verifyOTP}
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default OTPform;