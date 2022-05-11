import React, {useState} from "react";
// import Repeat from 'react-repeat-component';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import validator from 'validator'
  import isEmail from 'validator/lib/isEmail'
  import isDate from 'validator/lib/isDate'

// layout for page

import Dashboard from "layouts/Dashboard.js";

export default function DashboardLanding() {
    // Toast
    const saved = () => toast.success('Information auto saved', {
                          position: "top-center",
                          autoClose: 5000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          });

    const [openTab, setOpenTab] = React.useState(1);

    const [emptyState, setDashboardState] = useState(true)
    const [uiState, setUIState] = useState(true)

    const [isShowing, setIsShowing] = useState(false);


    //Settings 
    let [activeButton, isActiveButton] = useState(true)

    const toggleActiveButton = () => {
      if (activeButton) {
        isActiveButton(false)
      }
      if (!activeButton) {
        isActiveButton(true)
      }
    }

    let [firstName, setFirstName] = useState("Dwight")
  let [lastName, setLastName] = useState("Schrute")

  let [dob, setDOB] = useState("11/11/1990")
  let [dobValid, isDOBValid] = useState("")


  let [gender, setGender] = useState("Male")


  let [email, setEmail] = useState("dwight@dundermifflin.com")
  let [emailValid, isEmailValid] = useState("")

    const toggle = () => {
      setIsShowing(!isShowing);
    };

    const startMedicalProfile = () => {
      setDashboardState(false)
    }
    const toggleUIState = () => {
      setUIState(false)
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

  return (
    <>
    
      <div className="flex h-full">
        <section className="profile-section min-w-239-px">
        <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
            <div className="container">
                <div className="flex flex-col">
                    <img src="/img/primaryFull.svg" alt="" className="logo mb-8" />
                    <div className="flex">
                        <div className="profile-photo mr-2">
                            <img src="/img/dwight.jpeg" alt="" className="profile" />
                        </div>
                        <div className="profile-info">
                            <h3 className="h3 font-medium">Dwight Schrute</h3>
                            <h5 className="h5 text-xs text-gray-primary">Primary Account</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="information-section w-full h-full">
        
        {emptyState && 
          <div className="flex flex-col justify-center max-w-340-px items-center mx-auto mt-10 h-full pb-38-vh">
            <img src="/img/girl.svg" alt="" />
            <h2 className="h2 text-2xl font-medium font-dark">Let's create your medical profile</h2>
            <button 
            className="button-dark-green text-md font-bold mt-6"
            onClick={startMedicalProfile}
            >Create Profle</button>
          </div>
        }
        
        {!emptyState &&
        <div className="fade-in-dashboard">
        
        <div className="flex container justify-between">

       
        <div className="tab-wrapper w-full bg-dashboard mb-4">
        <ul
            className="flex mb-0 list-none flex-wrap p-1 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold px-5 py-3 rounded block leading-normal " +
                  (openTab === 1
                    ? "text-dash-tabs bg-white shadow-tab"
                    : "text-dash-tabs-inactive bg-dashboard")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Medical Profile
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold px-5 py-3  rounded block leading-normal " +
                  (openTab === 2
                    ? "text-dash-tabs bg-white shadow-tab"
                    : "text-dash-tabs-inactive bg-dashboard")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Documents
              </a>
            </li>
            <li className="-mb-px last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold px-5 py-3  rounded block leading-normal " +
                  (openTab === 3
                    ? "text-dash-tabs bg-white shadow-tab"
                    : "text-dash-tabs-inactive bg-dashboard")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Settings
              </a>
            </li>
        </ul>
          </div>
          <button className="connect-device-button text-red-primary flex items-center font-medium">Connect a device<i className="icon-Plus2x icon-md relative text-red-primary ml-2"></i></button>
          </div>      
          <div className="relative flex flex-col min-w-0 break-word w-full mb-6">
            <div className="flex-auto">

            {uiState && 
              <div className="tab-content tab-space">
              <div className={openTab === 1 ? "block" : "hidden"} id="link1">
              <div className="container flex">
                <div className="w-full pr-4 md:w-4/12 lg:4/12">
                    <div className="card-wrapper">
                        <div className="title-wrapper flex justify-between items-center">
                        <div className="flex items-center">
                              <img src="/img/medical-condition.svg" alt="" />
                              <h3 className="h3 font-medium ml-2">Medical Condition</h3>
                            </div>
                            <button className="add-card-button">
                              <i className="icon-Plus2x icon-md text-green-primary"></i>
                         </button>
                        </div>
                        <div className="card card-medical mt-2">
                        <label
                          className="block text-gray-primary text-xs font-normal my-3"
                          >
                          Condition Name
                          </label>
                          <input
                          type="text"
                          className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                          placeholder="e.g. Diabetes"
                          />
                        <label
                          className="block text-gray-primary text-xs font-normal my-3"
                          >
                          Special Note
                          </label>
                          <input
                          type="text"
                          className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                          placeholder="e.g. Taking insuline daily"
                          />
                        </div>
                    </div>
                </div>
                <div className="w-full pr-4 md:w-4/12 lg:4/12">
                    <div className="card-wrapper">
                    <div className="title-wrapper flex justify-between items-center">
                    <div className="flex items-center">
                              <img src="/img/allergies.svg" alt="" />
                              <h3 className="h3 font-medium ml-2">Allergies</h3>
                            </div>
                            <button className="add-card-button">
                              <i className="icon-Plus2x icon-md text-green-primary"></i>
                         </button>
                        </div>
                        <div className="card card-medical mt-2">
                        <label
                          className="block text-gray-primary text-xs font-normal my-3"
                          >
                          Name
                          </label>
                          <input
                          type="text"
                          className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                          placeholder="e.g. Amoxicillin"
                          />
                        <label
                          className="block text-gray-primary text-xs font-normal my-3"
                          >
                          Special Note
                          </label>
                          <input
                          type="text"
                          className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                          placeholder="e.g. Allergic to Amoxicillin"
                          />
                        </div>
                    </div>
                </div>
                <div className="w-full pr-4 md:w-4/12 lg:4/12">
                    <div className="card-wrapper">
                    <div className="title-wrapper flex justify-between items-center">
                      <div className="flex items-center">
                          <img src="/img/medication.svg" alt="" />
                          <h3 className="h3 font-medium ml-2">Medication</h3>
                        </div>
                        <button className="add-card-button">
                              <i className="icon-Plus2x icon-md text-green-primary"></i>
                         </button>
                        </div>
                        <div className="card card-medical mt-2">
                        <label
                          className="block text-gray-primary text-xs font-normal my-3"
                          >
                          Medication Name
                          </label>
                          <input
                          type="text"
                          className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                          placeholder="e.g. Captopril"
                          />
                        <label
                          className="block text-gray-primary text-xs font-normal my-3"
                          >
                          Special Note
                          </label>
                          <input
                          type="text"
                          className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                          placeholder="e.g. Taking for high blood pressure"
                          />
                          <div className="flex items-center justify-between mt-3">
                          <h3 className="text-xs font-medium text-gray-primary">Currently Taking</h3>
                          <input
                              className="react-switch-checkbox"
                              id={`react-switch-new`}
                              type="checkbox"
                              onClick={toggleUIState}
                          />
                          <label
                              className="react-switch-label"
                              htmlFor={`react-switch-new`}
                          >
                              <span className={`react-switch-button`} />
                          </label>
                          </div>
                            <button style={{ display: !isShowing ? "block" : "none" }} className="add-medication text-green-primary text-xs mt-4" onClick={toggle}>Add More Details<i className="icon-Plus2x relative top-1 ml-1 icon-xs text-green-primary"></i></button>
                            <button style={{ display: isShowing ? "block" : "none" }} className="add-medication text-green-primary text-xs mt-4" onClick={toggle}>Show Less<i className="icon-Plus2x relative top-1 ml-1 icon-xs text-green-primary"></i></button>
                          <div style={{ display: isShowing ? "block" : "none" }}>
                          <div className="container">
                          <div className="flex flex-wrap">
                            <div className="w-1/2 pr-2">
                            <label
                          className="block text-gray-primary text-xs font-normal my-3"
                          >
                          Dosage
                          </label>
                          <input
                          type="text"
                          className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                          placeholder="Unit"
                          />
                            </div>
                          
                          
                          <div className="w-1/2 pl-2">
                          <label
                          className="block text-gray-primary text-xs font-normal my-3"
                          >
                          Ammount
                          </label>
                          <input
                          type="text"
                          className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                          placeholder="e.g. mg"
                          />
                          </div>
                           </div>
                          </div>
                          <div className="container">
                            <div className="flex flex-wrap">
                            <div className="w-1/2 pr-2">
                            <label
                          className="block text-gray-primary text-xs font-normal my-3"
                          >
                          Frequency
                          </label>
                          <input
                          type="text"
                          className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                          placeholder="e.g. Twice"
                          />
                            </div>
                          
                          
                          <div className="w-1/2 pl-2">
                          <label
                          className="block text-gray-primary text-xs font-normal my-3"
                          >
                          Times
                          </label>
                          <input
                          type="text"
                          className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                          placeholder="e.g. Daily"
                          />
                          </div>
                            </div>
                          </div>
                          </div>
                        </div>
                    </div>
                </div>
                <div className="w-full  md:w-4/12 lg:4/12">
                <div className="card-wrapper">
                    <div className="title-wrapper flex justify-between items-center">
                            <div className="flex items-center">
                              <img src="/img/contact.svg" alt="" />
                              <h3 className="h3 font-medium ml-2">Emergency Contact</h3>
                            </div>
                            <button className="add-card-button">
                              <i className="icon-Plus2x icon-md text-green-primary"></i>
                         </button>
                        </div>
                        <div className="card card-medical mt-2">
                        <label
                          className="block text-gray-primary text-xs font-normal my-3"
                          >
                          Name
                          </label>
                          <input
                          type="text"
                          className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                          placeholder="Michael Scott"
                          />
                        <label
                          className="block text-gray-primary text-xs font-normal my-3"
                          >
                          Email Address
                          </label>
                          <input
                          type="text"
                          className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                          placeholder="e.g. michael@dunder.com"
                          />
                          <label
                          className="block text-gray-primary text-xs font-normal my-3"
                          >
                          Phone
                          </label>
                          <input
                          type="text"
                          className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                          placeholder="e.g. (123) 456-7890"
                          />
                          
                        </div>
                    </div>
                    <div className="card-wrapper">
                    <div className="title-wrapper flex justify-between items-center">
                      <div className="flex items-center">
                        <img src="/img/insurance.svg" alt="" />
                        <h3 className="h3 font-medium ml-2">Insurance</h3>
                      </div>
                      <button className="add-card-button">
                              <i className="icon-Plus2x icon-md text-green-primary"></i>
                         </button>
                        </div>
                        <div className="card card-medical mt-2">
                        <label
                          className="block text-gray-primary text-xs font-normal my-3"
                          >
                          Carrier Name
                          </label>
                          <input
                          type="text"
                          className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                          placeholder="e.g. Kaiser Permanente"
                          />
                        <label
                          className="block text-gray-primary text-xs font-normal my-3"
                          >
                          Insurance Company Name
                          </label>
                          <input
                          type="text"
                          className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                          placeholder="e.g. Kaiser Permanente"
                          />
                         <label
                          className="block text-gray-primary text-xs font-normal my-3"
                          >
                          Plan No.
                          </label>
                          <input
                          type="text"
                          className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                          placeholder="e.g. 26346346"
                          />
                          <label
                          className="block text-gray-primary text-xs font-normal my-3"
                          >
                          Policy No.
                          </label>
                          <input
                          type="text"
                          className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                          placeholder="e.g. 23452345"
                          />
                          <label
                          className="block text-gray-primary text-xs font-normal my-3"
                          >
                          Group No.
                          </label>
                          <input
                          type="text"
                          className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                          placeholder="e.g. 2345346"
                          />
                          
                        </div>
                    </div>
                    <div className="card-wrapper">
                    <div className="title-wrapper flex justify-between items-center">
                        <div className="flex items-center">
                          <img src="/img/hospital.svg" alt="" />
                          <h3 className="h3 font-medium ml-2">Preferred Hospital</h3>
                        </div>
                        <button className="add-card-button">
                              <i className="icon-Plus2x icon-md text-green-primary"></i>
                         </button>
                        </div>
                        <div className="card card-medical mt-2">
                        <label
                          className="block text-gray-primary text-xs font-normal my-3"
                          >
                          Hosipital Name
                          </label>
                          <input
                          type="text"
                          className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                          placeholder="e.g. Scranton Hospital"
                          />
                        <label
                          className="block text-gray-primary text-xs font-normal my-3"
                          >
                          Address
                          </label>
                          <input
                          type="text"
                          className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                          placeholder="e.g. 123 Main St. Scranton, PA"
                          />
                        <label
                          className="block text-gray-primary text-xs font-normal my-3"
                          >
                          Phone
                          </label>
                          <input
                          type="text"
                          className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                          placeholder="e.g. (916) 835-8765"
                          />
                          
                        </div>
                    </div>
                    <div className="card-wrapper">
                    <div className="title-wrapper flex justify-between items-center">
                      <div className="flex items-center">
                          <img src="/img/care-giver.svg" alt="" />
                          <h3 className="h3 font-medium ml-2">Primary Caregiver</h3>
                        </div>
                            <button className="add-card-button">
                              <i className="icon-Plus2x icon-md text-green-primary"></i>
                            </button>
                        </div>
                        <div className="card card-medical mt-2">
                        <label
                          className="block text-gray-primary text-xs font-normal my-3"
                          >
                          Name
                          </label>
                          <input
                          type="text"
                          className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                          placeholder="e.g. Jim Halpert"
                          />
                        <label
                          className="block text-gray-primary text-xs font-normal my-3"
                          >
                          Email Address
                          </label>
                          <input
                          type="text"
                          className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                          placeholder="e.g. jim@dunder.com"
                          />
                        <label
                          className="block text-gray-primary text-xs font-normal my-3"
                          >
                          Phone
                          </label>
                          <input
                          type="text"
                          className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                          placeholder="e.g.(916) 835-8551"
                          />
                          
                          
                        </div>
                    </div>
                </div>
              </div>
              </div>
              <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <p>
                  Placeholder for documents page
                </p>
              </div>
              <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                <div className="container flex">
                  <div className="card-wrapper fb-423 mh-632">
                    <div className="card">
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
                      value={firstName}
                      placeholder="e.g. Dwight"
                    />
                    <label
                      className="block text-sm font-bold my-3"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full input-primary pl-2 py-13 focus:outline-none"
                      onChange={handleLastValid}
                      value={lastName}
                      placeholder="e.g. Schrute"
                    />
                    <label
                      className="block text-sm font-bold my-3"
                    >
                      Date Of Birth
                    </label>
                    <input
                      type="text"
                      className="w-full input-primary pl-2 py-13 focus:outline-none"
                      onChange={handleDOBValid}
                      value={dob}
                      placeholder="e.g. 11/11/1990"
                    />
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
                      value={gender}
                      placeholder="e.g."

                    >
                      <option>Female</option>
                      <option>Male</option>
                      <option>Non-binary</option>
                      <option>N/A</option>
                    </select>
                    
                    <label
                      className="block text-sm font-bold my-3"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      className="w-full input-primary pl-2 py-13 focus:outline-none mb-6"
                      onChange={handleEmail}
                      value={email}
                      placeholder="e.g. dwight@dundermifflin.com"
                    />
                   
                    </div>
                    </div>
                  </div>
                  <div className="fb-576">
                  <div className="card-wrapper w-full ml-4">
                    <div className="card">
                    <div className="relative flex flex-wrap items-stretch w-full mb-6">
                    <div className="flex w-full justify-between items-center mb-4">
                    <div className="wrapper flex">
                    <h2 className="h2 text-2xl font-regular">Deactivate Profile</h2>
                    {activeButton &&
                      <button className="active-button ml-4">Active</button>
                    }
                    {!activeButton &&
                      <button className="inactive-button ml-4">Deactivated</button>
                    }
                    </div>
                    <input
                              className="react-switch-checkbox"
                              id={`react-switch-new-settings`}
                              type="checkbox"
                              onClick={toggleActiveButton}
                          />
                          <label
                              className="react-switch-label"
                              htmlFor={`react-switch-new-settings`}
                          >
                              <span className={`react-switch-button`} />
                          </label>
                    </div>
                    <p className="p text-md font-regular mb-6">If you deactivate your account, your profile details will be disabled. If the QR on your devices is scanned, no information will be visable to the medical service provider.</p>
                    <p className="p text-md font-regular mb-6">It will not impact your dependent accounts</p>
                    <p className="p text-md font-medium mb-6 text-red-primary">Please note you will be still charged if you have premium subscription. You can cancel premium subscription below.</p>

                    <h2 className="h2 text-2xl font-regular mb-4">Delete Profile</h2>
                    <p className="p text-md font-regular mb-6 text-red-primary">All your and dependent profile information will be deleted. If the QR on your devices is scanned, no information will be visible to the medical service provider</p>
                    <input
                          type="text"
                          className="w-full input-primary pl-2 py-13 mw-343 focus:outline-none ph-text-sm"
                          placeholder="Type full name to delete this account"
                          />
                      
                    </div>
                    <button className="settings-button font-semibold">Delete Profile</button>
                    </div>
                  </div>
                  <div className="card-wrapper w-full ml-4">
                    <div className="card">
                    <div className="relative flex flex-wrap items-stretch w-full mb-3">
                    <div className="flex w-full justify-between items-center mb-4">
                    <div className="wrapper flex">
                    <h2 className="h2 text-2xl font-regular">Premium Subscription</h2>
                   
                    </div>
                    </div>
                    <div className="flex justify-between w-full mb-6">
                      <div className="wrapper">
                        <p className="p font-normal text-sm mb-2">Next Billing Date</p>
                        <p className="p font-bold text-md">April 01, 2022</p>
                      </div>
                      <div className="wrapper">
                      <p className="p font-normal text-right text-sm mb-2">You'll Pay</p>
                        <p className="p font-bold text-md">$5/Month</p>
                      </div>
                    </div>
                    <div className="flex justify-between w-full items-end mb-6">
                      <div className="wrapper">
                        <p className="p font-normal text-sm mb-2">Payment Method</p>
                        <p className="p font-bold text-md">**** **** **** 1234</p>
                      </div>
                      <div className="wrapper">
                      <button className="change-button text-green-primary font-bold">Change</button>
                      </div>
                    </div>
                    <button className="settings-button font-semibold">Cancel</button>
                    </div>
                    </div>
                  </div>
                  </div>
                  
                </div>
              </div>
            </div>
            }
              
            {!uiState && 
              <div className="tab-content tab-space">
              <div className={openTab === 1 ? "block" : "hidden"} id="link1">
              <div className="container flex">
                <div className="w-full pr-4 md:w-4/12 lg:4/12">
                    <div className="card-wrapper">
                        <div className="title-wrapper flex justify-between items-center">
                        <div className="flex items-center">
                              <img src="/img/medical-condition.svg" alt="" />
                              <h3 className="h3 font-medium ml-2">Medical Condition</h3>
                            </div>
                            <button className="add-card-button">
                              <i className="icon-Plus2x icon-md text-green-primary"></i>
                         </button>
                        </div>
                        <div className="card card-medical mt-2">
                        <label
                          className="block text-gray-primary text-xs font-normal my-3"
                          >
                          Condition Name
                          </label>
                        <h5 className="h5 text-green-tertiary font-medium">Diabetes</h5>
                        <label
                          className="block text-gray-primary text-xs font-normal my-3"
                          >
                          Special Note
                          </label>
                          <p className="p text-sm">Type II diabetes</p>
                        </div>
                    </div>
                </div>
                <div className="w-full pr-4 md:w-4/12 lg:4/12">
                    <div className="card-wrapper">
                    <div className="title-wrapper flex justify-between items-center">
                    <div className="flex items-center">
                              <img src="/img/allergies.svg" alt="" />
                              <h3 className="h3 font-medium ml-2">Allergies</h3>
                            </div>
                            <button className="add-card-button">
                              <i className="icon-Plus2x icon-md text-green-primary"></i>
                         </button>
                        </div>
                        <div className="card card-medical mt-2">
                        <label
                          className="block text-gray-primary text-xs font-normal my-3"
                          >
                          Name
                          </label>
                          <h5 className="h5 text-green-tertiary font-medium">Peanut</h5>
                        <label
                          className="block text-gray-primary text-xs font-normal my-3"
                          >
                          Special Note
                          </label>
                          <p className="p text-sm">Allergic to Peanuts</p>
                        </div>
                    </div>
                </div>
                <div className="w-full pr-4 md:w-4/12 lg:4/12">
                    <div className="card-wrapper">
                    <div className="title-wrapper flex justify-between items-center">
                      <div className="flex items-center">
                          <img src="/img/medication.svg" alt="" />
                          <h3 className="h3 font-medium ml-2">Medication</h3>
                        </div>
                        <button 
                        className="add-card-button"
                        onClick={saved}>
                              <i className="icon-Plus2x icon-md text-green-primary"></i>
                         </button>
                         
                        </div>
                        <div className="card card-medical mt-2">
                        <label
                          className="block text-gray-primary text-xs font-normal my-3"
                          >
                          Medication Name
                          </label>
                          <h5 className="h5 text-green-tertiary font-medium">Amoxycillan</h5>
                        <label
                          className="block text-gray-primary text-xs font-normal my-3"
                          >
                          Special Note
                          </label>
                          <p className="p text-sm">This is a special note</p>
                          <div className="flex items-center justify-between mt-3">
                          <h3 className="text-xs font-medium text-gray-primary">Currently Taking</h3>
                          <input
                              className="react-switch-checkbox"
                              id={`react-switch-new`}
                              type="checkbox"
                              onClick={toggleUIState}
                          />
                          <label
                              className="react-switch-label"
                              htmlFor={`react-switch-new`}
                          >
                              <span className={`react-switch-button`} />
                          </label>
                          </div>
                            <button
                            style={{ display: !isShowing ? "block" : "none" }} 
                            className="add-medication text-green-primary text-xs mt-4" 
                            onClick={toggle}
                            >Add More Details<i className="icon-Plus2x relative top-1 ml-1 icon-xs text-green-primary"></i></button>
                            <button style={{ display: isShowing ? "block" : "none" }} 
                            className="add-medication text-green-primary text-xs mt-4" 
                            onClick={toggle}
                            >Show Less<i className="icon-Plus2x relative top-1 ml-1 icon-xs text-green-primary"></i></button>
                          <div style={{ display: isShowing ? "block" : "none" }}>
                          <div className="container">
                          <div className="flex flex-wrap">
                            <div className="w-1/2 pr-2">
                            <label
                          className="block text-gray-primary text-xs font-normal my-3"
                          >
                          Dosage
                          </label>
                          <input
                          type="text"
                          className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                          placeholder="Unit"
                          />
                            </div>
                          
                          
                          <div className="w-1/2 pl-2">
                          <label
                          className="block text-gray-primary text-xs font-normal my-3"
                          >
                          Ammount
                          </label>
                          <input
                          type="text"
                          className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                          placeholder="e.g. mg"
                          />
                          </div>
                           </div>
                          </div>
                          <div className="container">
                            <div className="flex flex-wrap">
                            <div className="w-1/2 pr-2">
                            <label
                          className="block text-gray-primary text-xs font-normal my-3"
                          >
                          Frequency
                          </label>
                          <input
                          type="text"
                          className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                          placeholder="e.g. Twice"
                          />
                            </div>
                          
                          
                          <div className="w-1/2 pl-2">
                          <label
                          className="block text-gray-primary text-xs font-normal my-3"
                          >
                          Times
                          </label>
                          <input
                          type="text"
                          className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                          placeholder="e.g. Daily"
                          />
                          </div>
                            </div>
                          </div>
                          </div>
                        </div>
                    </div>
                </div>
                <div className="w-full  md:w-4/12 lg:4/12">
                <div className="card-wrapper">
                    <div className="title-wrapper flex justify-between items-center">
                            <div className="flex items-center">
                              <img src="/img/contact.svg" alt="" />
                              <h3 className="h3 font-medium ml-2">Emergency Contact</h3>
                            </div>
                            <button className="add-card-button">
                              <i className="icon-Plus2x icon-md text-green-primary"></i>
                         </button>
                        </div>
                        <div className="card card-medical mt-2">
                        <label
                          className="block text-gray-primary text-xs font-normal my-3"
                          >
                          Name
                          </label>
                          <h5 className="h5 text-green-tertiary font-medium">Michael Scott</h5>
                        <label
                          className="block text-gray-primary text-xs font-normal my-3"
                          >
                          Email Adddress
                          </label>
                          <h5 className="h5 text-green-tertiary font-medium">michael@dunder.com</h5>
                          <label
                          className="block text-gray-primary text-xs font-normal my-3"
                          >
                          Phone
                          </label>
                          <h5 className="h5 text-green-tertiary font-medium">(123) 456-7890</h5>
                          
                        </div>
                    </div>
                    <div className="card-wrapper">
                    <div className="title-wrapper flex justify-between items-center">
                      <div className="flex items-center">
                        <img src="/img/insurance.svg" alt="" />
                        <h3 className="h3 font-medium ml-2">Insurance</h3>
                      </div>
                      <button className="add-card-button">
                              <i className="icon-Plus2x icon-md text-green-primary"></i>
                         </button>
                        </div>
                        <div className="card card-medical mt-2">
                        <label
                          className="block text-gray-primary text-xs font-normal my-3"
                          >
                          Carrier Name
                          </label>
                          <h5 className="h5 text-green-tertiary font-medium">Dunder Mifflin</h5>
                        <label
                          className="block text-gray-primary text-xs font-normal my-3"
                          >
                          Insurance Company Name
                          </label>
                          <h5 className="h5 text-green-tertiary font-medium">The Office</h5>
                         <label
                          className="block text-gray-primary text-xs font-normal my-3"
                          >
                          Plan No.
                          </label>
                          <h5 className="h5 text-green-tertiary font-medium">XXXXXXXX</h5>
                          <label
                          className="block text-gray-primary text-xs font-normal my-3"
                          >
                          Policy No.
                          </label>
                          <h5 className="h5 text-green-tertiary font-medium">XXXXXXXX</h5>
                          <label
                          className="block text-gray-primary text-xs font-normal my-3"
                          >
                          Group No.
                          </label>
                          <h5 className="h5 text-green-tertiary font-medium">XXXXXXXX</h5>
                          
                        </div>
                    </div>
                    <div className="card-wrapper">
                    <div className="title-wrapper flex justify-between items-center">
                        <div className="flex items-center">
                          <img src="/img/hospital.svg" alt="" />
                          <h3 className="h3 font-medium ml-2">Preferred Hospital</h3>
                        </div>
                        <button className="add-card-button">
                              <i className="icon-Plus2x icon-md text-green-primary"></i>
                         </button>
                        </div>
                        <div className="card card-medical mt-2">
                        <label
                          className="block text-gray-primary text-xs font-normal my-3"
                          >
                          Hosipital Name
                          </label>
                          <h5 className="h5 text-green-tertiary font-medium">Dunder Mifflin Hospital</h5>
                        <label
                          className="block text-gray-primary text-xs font-normal my-3"
                          >
                          Address
                          </label>
                          <h5 className="h5 text-green-tertiary font-medium">1725 Slough Avenue, Scranton, PA.</h5>
                        <label
                          className="block text-gray-primary text-xs font-normal my-3"
                          >
                          Phone
                          </label>
                          <h5 className="h5 text-green-tertiary font-medium">(911) 867-5309</h5>

                          
                        </div>
                    </div>
                    <div className="card-wrapper">
                    <div className="title-wrapper flex justify-between items-center">
                      <div className="flex items-center">
                          <img src="/img/care-giver.svg" alt="" />
                          <h3 className="h3 font-medium ml-2">Primary Caregiver</h3>
                        </div>
                            <button className="add-card-button">
                              <i className="icon-Plus2x icon-md text-green-primary"></i>
                            </button>
                        </div>
                        <div className="card card-medical mt-2">
                        <label
                          className="block text-gray-primary text-xs font-normal my-3"
                          >
                          Name
                          </label>
                          <h5 className="h5 text-green-tertiary font-medium">Michael Scott</h5>

                        <label
                          className="block text-gray-primary text-xs font-normal my-3"
                          >
                          Email Address
                          </label>
                          <h5 className="h5 text-green-tertiary font-medium">michael@dunder.com</h5>

                        <label
                          className="block text-gray-primary text-xs font-normal my-3"
                          >
                          Phone
                          </label>
                          <h5 className="h5 text-green-tertiary font-medium">(123) 456-7890</h5>

                          
                          
                        </div>
                    </div>
                </div>
              </div>
              </div>
              <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <p>
                  Placeholder for documents page
                </p>
              </div>
              <div className={openTab === 3 ? "block" : "hidden"} id="link3">
              <div className="container flex">
                  <div className="card-wrapper fb-423 mh-632">
                    <div className="card">
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
                      value={firstName}
                      placeholder="e.g. Dwight"
                    />
                    <label
                      className="block text-sm font-bold my-3"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full input-primary pl-2 py-13 focus:outline-none"
                      onChange={handleLastValid}
                      value={lastName}
                      placeholder="e.g. Schrute"
                    />
                    <label
                      className="block text-sm font-bold my-3"
                    >
                      Date Of Birth
                    </label>
                    <input
                      type="text"
                      className="w-full input-primary pl-2 py-13 focus:outline-none"
                      onChange={handleDOBValid}
                      value={dob}
                      placeholder="e.g. 11/11/1990"
                    />
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
                      value={gender}
                      placeholder="e.g."

                    >
                      <option>Female</option>
                      <option>Male</option>
                      <option>Non-binary</option>
                      <option>N/A</option>
                    </select>
                    
                    <label
                      className="block text-sm font-bold my-3"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      className="w-full input-primary pl-2 py-13 focus:outline-none mb-6"
                      onChange={handleEmail}
                      value={email}
                      placeholder="e.g. dwight@dundermifflin.com"
                    />
                   
                    </div>
                    </div>
                  </div>
                  <div className="fb-576">
                  <div className="card-wrapper w-full ml-4">
                    <div className="card">
                    <div className="relative flex flex-wrap items-stretch w-full mb-6">
                    <div className="flex w-full justify-between items-center mb-4">
                    <div className="wrapper flex">
                    <h2 className="h2 text-2xl font-regular">Deactivate Profile</h2>
                    {activeButton &&
                      <button className="active-button ml-4">Active</button>
                    }
                    {!activeButton &&
                      <button className="inactive-button ml-4">Deactivated</button>
                    }
                    </div>
                    <input
                              className="react-switch-checkbox"
                              id={`react-switch-new-settings`}
                              type="checkbox"
                              onClick={toggleActiveButton}
                          />
                          <label
                              className="react-switch-label"
                              htmlFor={`react-switch-new-settings`}
                          >
                              <span className={`react-switch-button`} />
                          </label>
                    </div>
                    <p className="p text-md font-regular mb-6">If you deactivate your account, your profile details will be disabled. If the QR on your devices is scanned, no information will be visable to the medical service provider.</p>
                    <p className="p text-md font-regular mb-6">It will not impact your dependent accounts</p>
                    <p className="p text-md font-medium mb-6 text-red-primary">Please note you will be still charged if you have premium subscription. You can cancel premium subscription below.</p>

                    <h2 className="h2 text-2xl font-regular mb-4">Delete Profile</h2>
                    <p className="p text-md font-regular mb-6 text-red-primary">All your and dependent profile information will be deleted. If the QR on your devices is scanned, no information will be visible to the medical service provider</p>
                    <input
                          type="text"
                          className="w-full input-primary pl-2 py-13 mw-343 focus:outline-none ph-text-sm"
                          placeholder="Type full name to delete this account"
                          />
                      
                    </div>
                    <button className="settings-button font-semibold">Delete Profile</button>
                    </div>
                  </div>
                  <div className="card-wrapper w-full ml-4">
                    <div className="card">
                    <div className="relative flex flex-wrap items-stretch w-full mb-3">
                    <div className="flex w-full justify-between items-center mb-4">
                    <div className="wrapper flex">
                    <h2 className="h2 text-2xl font-regular">Premium Subscription</h2>
                   
                    </div>
                    </div>
                    <div className="flex justify-between w-full mb-6">
                      <div className="wrapper">
                        <p className="p font-normal text-sm mb-2">Next Billing Date</p>
                        <p className="p font-bold text-md">April 01, 2022</p>
                      </div>
                      <div className="wrapper">
                      <p className="p font-normal text-right text-sm mb-2">You'll Pay</p>
                        <p className="p font-bold text-md">$5/Month</p>
                      </div>
                    </div>
                    <div className="flex justify-between w-full items-end mb-6">
                      <div className="wrapper">
                        <p className="p font-normal text-sm mb-2">Payment Method</p>
                        <p className="p font-bold text-md">**** **** **** 1234</p>
                      </div>
                      <div className="wrapper">
                      <button className="change-button text-green-primary font-bold">Change</button>
                      </div>
                    </div>
                    <button className="settings-button font-semibold">Cancel</button>
                    </div>
                    </div>
                  </div>
                  </div>
                  
                </div>
              </div>
            </div>
            }  
            </div>
            </div>
            </div>
        }
        
        </section>
      </div>
    </>
  );
}

DashboardLanding.layout = Dashboard;