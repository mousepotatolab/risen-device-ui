import React, {useState} from "react";
// import Repeat from 'react-repeat-component';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

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

    const toggle = () => {
      setIsShowing(!isShowing);
    };

    const startMedicalProfile = () => {
      setDashboardState(false)
    }
    const toggleUIState = () => {
      setUIState(false)
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
                    <img src="/img/primary.svg" alt="" className="logo mb-4" />
                    <div className="flex">
                        <div className="profile-photo mr-1">
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
            <img src="/img/girl.png" alt="" />
            <h2 className="h2 text-lg font-medium font-dark">Let's create your medical profile</h2>
            <button 
            className="button-dark-green text-md mt-6"
            onClick={startMedicalProfile}
            >Create Profle</button>
          </div>
        }
        
        {!emptyState &&
        <div className="fade-in-dashboard">
        
        <div className="flex justify-between">

       
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
                          text
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
                <p>
                  Placeholder for Settings
                </p>
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
                          text
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
                <p>
                  Placeholder for Settings
                </p>
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