import React, { useState, useEffect } from "react";
// import Repeat from 'react-repeat-component';
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import validator from "validator";
import isEmail from "validator/lib/isEmail";
import isDate from "validator/lib/isDate";
import ConnectDeviceModal from "../components/modal/ConnectDevice";
import DependentProfileModal from "../components/modal/DependentProfile";
import UploadDocumentModal from "../components/modal/UploadDocument";
import Sidebar from "../components/Sidebar/Sidebar";
import DashboardTabs from "../components/Navbars/DasboardTabs";
import { createPopper } from "@popperjs/core";
// layout for page

import Dashboard from "layouts/Dashboard.js";
// import { isToastIdValid } from "react-toastify/dist/utils";

export default function DashboardLanding() {
  // Connect Device Modal
  const customStyles = {
    content: {
      top: "66px",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translateX(-50%)",
      backgroundColor: "rgb(247, 247, 247)",
      padding: "0",
      overflow: "visible",
      maxWidth: "843px",
    },
    overlay: {
      backgroundColor: "rgba(0,0,0,.5)",
    },
  };
  Modal.setAppElement("#__next");

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  function closeModalDependent() {
    setIsOpen(false);
  }
  function openSettings() {
    setOpenTab(3);
  }
  function openUpload() {
    setOpenTab(2);
  }
  function openProfile() {
    setOpenTab(1);
  }

  const [deviceConnected, isConnectFormValid] = React.useState(false);
  const [connectSuccess, isConnected] = React.useState(false);
  const [notConnected, isDeviceConnected] = React.useState(true);
  const [pin, setPin] = React.useState("");
  const [id, setID] = React.useState("");
  const [validID, isIDValid] = React.useState(false);
  const [validPin, isPinValid] = React.useState(false);

  const inputPin = (event) => {
    setPin(event.target.value);
    console.log(pin.length);
    if (event.target.value.length === 6) {
      isPinValid(true);
      if (validID) {
        isConnectFormValid(true);
      }
    }
  };
  const inputID = (event) => {
    setID(event.target.value);
    console.log(id.length);
    if (event.target.value.length === 8) {
      isIDValid(true);
      if (validPin) {
        isConnectFormValid(true);
      }
    }
  };

  const connectDevice = () => {
    isConnected(true);
    isDeviceConnected(false);
    setConnect(false);
  };

  const setConnectFalse = () => {
    setConnect(false);
  };
  const setConnectTrue = () => {
    setConnect(true);
  };

  // Add Dependent Profile
  const [notDependent, startDependent] = React.useState(true);
  const [dependentProfileValid, isDependentValid] = React.useState(true);

  const checkValidProfile = () => {
    if (firstNameDependent && lastNameDependent && dobDependent && genderDependent && emailDependent && dependentEmaillValid && phoneDependent ) {
      isDependentValid(false)
      console.log('here')
      console.log(dependentProfileValid)
    }
  }

  const addDependentProfile = () => {
    setDependentOpen(true)
  }

  const [dependentModalIsOpen, setDependentOpen] = React.useState(false);

  function closeDependentModal() {
    setDependentOpen(false);
  }

   //Dependent Profile Details
   const [dependentSuccess, setDependentSuccess] = React.useState(false);
   const [firstNameDependent, setFirstNameDependent] = React.useState("");
   const [lastNameDependent, setLastNameDependent] = React.useState("");
   const [dobDependent, setDobDependent] = React.useState("");
   const [genderDependent, setGenderDependent] = React.useState("");
   const [emailDependent, setEmailDependent] = React.useState("");
   const [phoneDependent, setPhoneDependent] = React.useState("");
   const [idDependent, setIdDependent] = React.useState("");
   const [pinDependent, setPinDependent] = React.useState("");

   const createdDependent = () => {
    setDependentSuccess(true)
    startDependent(false)
   }

   const inputIDDependent = (event) => {
    setIdDependent(event.target.value);
    checkValidProfile()
   }
   const inputPinDependent = (event) => {
    setPinDependent(event.target.value);
    checkValidProfile()
   }
   const handleFirstDependent = (event) => {
    setFirstNameDependent(event.target.value);
    checkValidProfile()
   }
   const handleLastDependent = (event) => {
    setLastNameDependent(event.target.value);
    checkValidProfile()
   }
   const inputDobDependent = (event) => {
    setDobDependent(event.target.value);
    checkValidProfile()
   }
   const handlePhoneDependent = (event) => {
    setPhoneDependent(event.target.value);
    checkValidProfile()
   }
   let [dependentEmaillValid, isDependentEmailValid] = useState();

   const handleEmailDependent = (event) => {
    if (isEmail(event.target.value)) {
      isDependentEmailValid(true);
    }
    setEmailDependent(event.target.value);
   }
   const handleGenderDependent = (event) => {
    setGenderDependent(event.target.value);
   }
   // End Dependent Profile


   // Documents Section 
   const [noDocuments, startDocumentUpload] = useState(true);

   const uploadDocument = () => {
    setDocumentOpen(true)
  }

  function closeDocumentModal() {
    setDocumentOpen(false);
  }

  const saveDocument = () => {
    startDocumentUpload(false)
    setDocumentOpen(false);
  }

  const [DocumentUploadIsOpen, setDocumentOpen] = React.useState(false);


  // Toast
  const saved = () =>
    toast.success("Information auto saved", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const [openTab, setOpenTab] = React.useState(1);

  const [emptyState, setDashboardState] = useState(true);
  const [uiState, setUIState] = useState(true);

  const [isShowing, setIsShowing] = useState(false);

  //Settings
  let [activeButton, isActiveButton] = useState(true);
  let [deleteValid, setDelete] = useState("");

  const toggleActiveButton = () => {
    if (activeButton) {
      isActiveButton(false);
    }
    if (!activeButton) {
      isActiveButton(true);
    }
  };

  const handleDelete = (event) => {
    if (event.target.value === firstName + " " + lastName) {
      setDelete(true);
    }

    console.log(firstName + lastName);
  };

  let [connectButton, setConnect] = useState(true);
  let [disabledPhone, setDisabledPhone] = useState(true);

  const enablePhone = () => {
    setDisabledPhone(false);
    setPhone("916 867-5309");
  };

  let [firstName, setFirstName] = useState("Dwight");
  let [lastName, setLastName] = useState("Schrute");

  let [dob, setDOB] = useState("11/11/1990");
  let [dobValid, isDOBValid] = useState("");

  let [gender, setGender] = useState("Male");
  let [phone, setPhone] = useState("");

  let [email, setEmail] = useState("dwight@dundermifflin.com");
  let [emailValid, isEmailValid] = useState("");

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  const startMedicalProfile = () => {
    setDashboardState(false);
  };
  const toggleUIState = () => {
    setUIState(false);
  };

  const handleFirstValid = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastValid = (event) => {
    setLastName(event.target.value);
  };
  const handleDOBValid = (event) => {
    if (isDate(event.target.value, { format: "MM/DD/YYYY" })) {
      isDOBValid(true);
      console.log("dob valid");
    }
    setDOB(event.target.value);
  };
  const handleGender = (event) => {
    setGender(event.target.value);
  };
  const handleEmail = (event) => {
    if (isEmail(event.target.value)) {
      isEmailValid(true);
    }
    setEmail(event.target.value);
  };

  const handlePhoneUpdate = (event) => {
    setPhone(event.target.value);
  };

  //Dropdowns
  const [dropdownDosageShow, setDropdownDosageShow] = React.useState(false);
  const btnDropdownRefDosage = React.createRef();
  const popoverDropdownRefDosage = React.createRef();
  const openDosagePopover = () => {
    createPopper(
      btnDropdownRefDosage.current,
      popoverDropdownRefDosage.current,
      {
        placement: "bottom-start",
      }
    );
    setDropdownDosageShow(true);
  };
  const closeDosagePopover = () => {
    setDropdownDosageShow(false);
  };

  const [dropdownFrequencyShow, setDropdownFrequencyShow] = React.useState(false);
  const btnDropdownRefFrequency = React.createRef();
  const popoverDropdownRefFrequency = React.createRef();
  const openFrequencyPopover = () => {
    createPopper(
      btnDropdownRefFrequency.current,
      popoverDropdownRefFrequency.current,
      {
        placement: "bottom-start",
      }
    );
    setDropdownFrequencyShow(true);
  };
  const closeFrequencyPopover = () => {
    setDropdownFrequencyShow(false);
  };

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Device Connect Modal"
        // className="Modal"
        // overlayClassName="Overlay"
      >
        <ConnectDeviceModal
          notConnected={notConnected}
          closeModal={closeModal}
          inputID={inputID}
          id={id}
          inputPin={inputPin}
          pin={pin}
          connectDevice={connectDevice}
          deviceConnected={deviceConnected}
          connectSuccess={connectSuccess}
        />
      </Modal>
      <Modal
        isOpen={dependentModalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeDependentModal}
        style={customStyles}
        contentLabel="Dependent Profile Modal"
        // className="Modal"
        // overlayClassName="Overlay"
      >
        <DependentProfileModal
         notDependent={notDependent} 
         createDependent={createdDependent}
         closeDependentModal={closeDependentModal}
         inputIDDependent={inputIDDependent}
        inputPinDependent={inputPinDependent}
        handleFirstDependent={handleFirstDependent}
        inputDobDependent={inputDobDependent}
        handleLastDependent={handleLastDependent}
        handleGenderDependent={handleGenderDependent}
        handlePhoneDependent={handlePhoneDependent}
        handleEmailDependent={handleEmailDependent}
        dependentSuccess={dependentSuccess}
        firstNameDependent={firstNameDependent}
        lastNameDependent={lastNameDependent}
        dobDependent={dobDependent}
        genderDependent={genderDependent}
        emailDependent={emailDependent}
        phoneDependent={phoneDependent}
        idDependent={idDependent}
        pinDependent={pinDependent}
        dependentProfileValid={dependentProfileValid}
        />
      </Modal>
      <Modal
        isOpen={DocumentUploadIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeDocumentModal}
        style={customStyles}
        contentLabel="Dependent Profile Modal"
        // className="Modal"
        // overlayClassName="Overlay"
      >
        <UploadDocumentModal
        closeDocumentModal={closeDocumentModal}
        saveDocument={saveDocument}
        />
      </Modal>
      <div className="flex h-full">
        <section className="profile-section min-w-239-px pr-4">
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
          <Sidebar
            openSettings={openSettings}
            newProfile={addDependentProfile}
            // signOut={signOut}
          ></Sidebar>
        </section>
        <section className="information-section w-full h-full">
          {emptyState && (
            <div className="flex flex-col justify-center max-w-370-px items-center mx-auto mt-10 h-full pb-38-vh">
              <img src="/img/girl.svg" alt="" />
              <h2 className="h2 text-2xl font-medium font-dark">
                Let's create your medical profile
              </h2>
              <button
                className="button-dark-green text-md font-bold mt-6"
                onClick={startMedicalProfile}
              >
                Create Profle
              </button>
            </div>
          )}

          {!emptyState && (
            <div className="fade-in-dashboard">
              <div className="flex container justify-between">
                <div className="tab-wrapper w-full bg-dashboard mb-4">
                  <DashboardTabs
                    openSettings={openSettings}
                    openUpload={openUpload}
                    openProfile={openProfile}
                    setConnectFalse={setConnectFalse}
                    setConnectTrue={setConnectTrue}
                    openTab={openTab}
                  ></DashboardTabs>
                </div>
                {connectButton && (
                  <button
                    className="connect-device-button text-red-primary flex items-center font-medium"
                    onClick={openModal}
                  >
                    Connect a device
                    <i className="icon-Plus2x icon-md relative text-red-primary ml-2"></i>
                  </button>
                )}
              </div>
              <div className="relative flex flex-col min-w-0 break-word w-full mb-6">
                <div className="flex-auto">
                  {uiState && (
                    <div className="tab-content tab-space">
                      <div
                        className={openTab === 1 ? "block" : "hidden"}
                        id="link1"
                      >
                        <div className="container flex">
                          <div className="w-full pr-4 md:w-4/12 lg:4/12">
                            <div className="card-wrapper">
                              <div className="title-wrapper flex justify-between items-center">
                                <div className="flex items-center">
                                  <img
                                    src="/img/medical-condition.svg"
                                    alt=""
                                  />
                                  <h3 className="h3 font-medium ml-2">
                                    Medical Condition
                                  </h3>
                                </div>
                                <button className="add-card-button">
                                  <i className="icon-Plus2x icon-md text-green-primary"></i>
                                </button>
                              </div>
                              <div className="card card-medical mt-2">
                                <label className="block text-gray-primary text-xs font-normal mb-3">
                                  Condition Name
                                </label>
                                <input
                                  type="text"
                                  className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                                  placeholder="e.g. Diabetes"
                                />
                                <label className="block text-gray-primary text-xs font-normal my-3">
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
                                  <h3 className="h3 font-medium ml-2">
                                    Allergies
                                  </h3>
                                </div>
                                <button className="add-card-button">
                                  <i className="icon-Plus2x icon-md text-green-primary"></i>
                                </button>
                              </div>
                              <div className="card card-medical mt-2">
                                <label className="block text-gray-primary text-xs font-normal mb-3">
                                  Name
                                </label>
                                <input
                                  type="text"
                                  className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                                  placeholder="e.g. Amoxicillin"
                                />
                                <label className="block text-gray-primary text-xs font-normal my-3">
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
                                  <h3 className="h3 font-medium ml-2">
                                    Medication
                                  </h3>
                                </div>
                                <button className="add-card-button">
                                  <i className="icon-Plus2x icon-md text-green-primary"></i>
                                </button>
                              </div>
                              <div className="card card-medical mt-2">
                                <label className="block text-gray-primary text-xs font-normal mb-3">
                                  Medication Name
                                </label>
                                <input
                                  type="text"
                                  className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                                  placeholder="e.g. Captopril"
                                />
                                <label className="block text-gray-primary text-xs font-normal my-3">
                                  Special Note
                                </label>
                                <input
                                  type="text"
                                  className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                                  placeholder="e.g. Taking for high blood pressure"
                                />
                                <div className="flex items-center justify-between mt-3">
                                  <h3 className="text-xs text-gray-primary">
                                    Currently Taking
                                  </h3>
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
                                  style={{
                                    display: !isShowing ? "block" : "none",
                                  }}
                                  className="add-medication text-green-primary text-xs mt-4"
                                  onClick={toggle}
                                >
                                  Add More Details
                                  <i className="icon-Plus2x relative top-1 ml-1 icon-xs text-green-primary"></i>
                                </button>
                                <button
                                  style={{
                                    display: isShowing ? "block" : "none",
                                  }}
                                  className="add-medication text-green-primary text-xs mt-4"
                                  onClick={toggle}
                                >
                                  Show Less
                                  <i className="icon-Plus2x relative top-1 ml-1 icon-xs text-green-primary"></i>
                                </button>
                                <div
                                  style={{
                                    display: isShowing ? "block" : "none",
                                  }}
                                >
                                  <div className="container">
                                    <div className="flex flex-wrap">
                                      <div className="w-1/2 pr-2">
                                        <label className="block text-gray-primary text-xs font-normal my-3">
                                          Ammount
                                        </label>
                                        <input
                                          type="text"
                                          className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                                          placeholder="e.g 200"
                                        />
                                      </div>

                                      <div className="w-1/2 pl-2">
                                        <label className="block text-gray-primary text-xs font-normal my-3">
                                          Dosage
                                        </label>
                                        <input
                                          type="text"
                                          className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                                          placeholder="Unit"
                                          onClick={() => {
                                            dropdownDosageShow
                                              ? closeDosagePopover()
                                              : openDosagePopover();
                                          }}
                                        />
                                        <div
                                          ref={popoverDropdownRefDosage}
                                          className={
                                            (dropdownDosageShow
                                              ? "block "
                                              : "hidden ") +
                                            "bg-blueGray-500 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 bg-white absolute min-w-48"
                                          }
                                        >
                                          <a
                                            href="#pablo"
                                            className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-primary"
                                            onClick={(e) => e.preventDefault()}
                                          >
                                            Action
                                          </a>
                                          <a
                                            href="#pablo"
                                            className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-primary"
                                            onClick={(e) => e.preventDefault()}
                                          >
                                            Another action
                                          </a>
                                          <a
                                            href="#pablo"
                                            className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-primary"
                                            onClick={(e) => e.preventDefault()}
                                          >
                                            Something else here
                                          </a>
                                          <a
                                            href="#pablo"
                                            className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-primary"
                                            onClick={(e) => e.preventDefault()}
                                          >
                                            Seprated link
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="container">
                                    <div className="flex flex-wrap">
                                      <div className="w-1/2 pr-2">
                                        <label className="block text-gray-primary text-xs font-normal my-3">
                                          Times
                                        </label>
                                        <input
                                          type="text"
                                          className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                                          placeholder="e.g. Twice"
                                        />
                                      </div>

                                      <div className="w-1/2 pl-2">
                                        <label className="block text-gray-primary text-xs font-normal my-3">
                                          Frequency
                                        </label>
                                        <input
                                          type="text"
                                          className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                                          placeholder="e.g. Daily"
                                          onClick={() => {
                                            dropdownFrequencyShow
                                              ? closeFrequencyPopover()
                                              : openFrequencyPopover();
                                          }}
                                        />
                                        <div
                                          ref={popoverDropdownRefFrequency}
                                          className={
                                            (dropdownFrequencyShow
                                              ? "block "
                                              : "hidden ") +
                                            "bg-blueGray-500 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 bg-white absolute min-w-48"
                                          }
                                        >
                                          <a
                                            href="#pablo"
                                            className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-primary"
                                            onClick={(e) => e.preventDefault()}
                                          >
                                            Action
                                          </a>
                                          <a
                                            href="#pablo"
                                            className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-primary"
                                            onClick={(e) => e.preventDefault()}
                                          >
                                            Another action
                                          </a>
                                          <a
                                            href="#pablo"
                                            className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-primary"
                                            onClick={(e) => e.preventDefault()}
                                          >
                                            Something else here
                                          </a>
                                          <a
                                            href="#pablo"
                                            className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-primary"
                                            onClick={(e) => e.preventDefault()}
                                          >
                                            Seprated link
                                          </a>
                                        </div>
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
                                  <h3 className="h3 font-medium ml-2">
                                    Emergency Contact
                                  </h3>
                                </div>
                                <button className="add-card-button">
                                  <i className="icon-Plus2x icon-md text-green-primary"></i>
                                </button>
                              </div>
                              <div className="card card-medical mt-2">
                                <label className="block text-gray-primary text-xs font-normal mb-3">
                                  Name
                                </label>
                                <input
                                  type="text"
                                  className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                                  placeholder="Michael Scott"
                                />
                                <label className="block text-gray-primary text-xs font-normal my-3">
                                  Email Address
                                </label>
                                <input
                                  type="text"
                                  className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                                  placeholder="e.g. michael@dunder.com"
                                />
                                <label className="block text-gray-primary text-xs font-normal my-3">
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
                                  <h3 className="h3 font-medium ml-2">
                                    Insurance
                                  </h3>
                                </div>
                                <button className="add-card-button">
                                  <i className="icon-Plus2x icon-md text-green-primary"></i>
                                </button>
                              </div>
                              <div className="card card-medical mt-2">
                                <label className="block text-gray-primary text-xs font-normal mb-3">
                                  Carrier Name
                                </label>
                                <input
                                  type="text"
                                  className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                                  placeholder="e.g. Kaiser Permanente"
                                />
                                <label className="block text-gray-primary text-xs font-normal my-3">
                                  Insurance Company Name
                                </label>
                                <input
                                  type="text"
                                  className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                                  placeholder="e.g. Kaiser Permanente"
                                />
                                <label className="block text-gray-primary text-xs font-normal my-3">
                                  Plan No.
                                </label>
                                <input
                                  type="text"
                                  className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                                  placeholder="e.g. 26346346"
                                />
                                <label className="block text-gray-primary text-xs font-normal my-3">
                                  Policy No.
                                </label>
                                <input
                                  type="text"
                                  className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                                  placeholder="e.g. 23452345"
                                />
                                <label className="block text-gray-primary text-xs font-normal my-3">
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
                                  <h3 className="h3 font-medium ml-2">
                                    Preferred Hospital
                                  </h3>
                                </div>
                                <button className="add-card-button">
                                  <i className="icon-Plus2x icon-md text-green-primary"></i>
                                </button>
                              </div>
                              <div className="card card-medical mt-2">
                                <label className="block text-gray-primary text-xs font-normal mb-3">
                                  Hosipital Name
                                </label>
                                <input
                                  type="text"
                                  className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                                  placeholder="e.g. Scranton Hospital"
                                />
                                <label className="block text-gray-primary text-xs font-normal my-3">
                                  Address
                                </label>
                                <input
                                  type="text"
                                  className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                                  placeholder="e.g. 123 Main St. Scranton, PA"
                                />
                                <label className="block text-gray-primary text-xs font-normal my-3">
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
                                  <h3 className="h3 font-medium ml-2">
                                    Primary Caregiver
                                  </h3>
                                </div>
                                <button className="add-card-button">
                                  <i className="icon-Plus2x icon-md text-green-primary"></i>
                                </button>
                              </div>
                              <div className="card card-medical mt-2">
                                <label className="block text-gray-primary text-xs font-normal mb-3">
                                  Name
                                </label>
                                <input
                                  type="text"
                                  className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                                  placeholder="e.g. Jim Halpert"
                                />
                                <label className="block text-gray-primary text-xs font-normal my-3">
                                  Email Address
                                </label>
                                <input
                                  type="text"
                                  className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                                  placeholder="e.g. jim@dunder.com"
                                />
                                <label className="block text-gray-primary text-xs font-normal my-3">
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
                      <div
                        className={openTab === 2 ? "block" : "hidden"}
                        id="link2"
                      >
                        {noDocuments && (
                          <div className="flex flex-col justify-center max-w-370-px items-center mx-auto mt-10 h-full pb-38-vh">
                            <img src="/img/girl.svg" alt="" />
                            <h2 className="h2 text-2xl font-medium font-dark">
                              You don't have any documents yet
                            </h2>
                            <button
                              className="button-dark-green px-10 text-md font-bold mt-6"
                              onClick={uploadDocument}
                            >
                             Upload Document
                            </button>
                          </div>
                        )}
                        {!noDocuments && (
                          <div className="flex mx-auto mt-10 h-full pb-100-vh">
                          <div className="card-wrapper fb-487">
                          <div className="title-wrapper flex justify-between items-center">
                            <div className="flex items-center">
                              <img
                                src="/img/medical-condition.svg"
                                alt=""
                              />
                              <h3 className="h3 font-medium ml-2">
                                Documents
                              </h3>
                            </div>
                            <button className="add-card-button">
                              <i className="icon-Plus2x icon-md text-green-primary"></i>
                            </button>
                          </div>
                          <div className="card card-medical mt-2">
                            <h6 className="block text-gray-primary text-xs font-normal mb-2 ml-4">
                              Title
                            </h6>
                            <div className="flex justify-between">
                              <div className="flex">
                                {/* <img src="/img/allergies.svg" alt="" /> */}
                                <h4 className="h4 text-green-primary mb-4">Recent ECG</h4>
                              </div>
                              <div className="icon-wrapper">
                                <button className="edit-card">
                                  <i className="icon-edit text-green-secondary text-xs mr-1"></i>
                                </button>
                                <button className="delete-card">
                                  <i className="icon-delete text-red-secondary text-xs"></i>
                                </button>
                              </div>
                            </div>
                            <h6 className="block text-gray-primary text-xs font-normal mb-2 ml-4">
                              Title
                            </h6>
                            <div className="flex justify-between">
                              <div className="flex">
                                {/* <img src="/img/allergies.svg" alt="" /> */}
                                <h4 className="h4 text-green-primary mb-4">this_is_a_document_title_02.png</h4>
                              </div>
                              <div className="icon-wrapper">
                                <button className="edit-card">
                                  <i className="icon-edit text-green-secondary text-xs mr-1"></i>
                                </button>
                                <button className="delete-card">
                                  <i className="icon-delete text-red-secondary text-xs"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        </div>
                        )}
                      </div>
                      <div
                        className={openTab === 3 ? "block" : "hidden"}
                        id="link3"
                      >
                        <div className="container flex">
                          <div className="card-wrapper fb-423 h-full">
                            <div className="card p-24">
                              <div className="relative flex flex-wrap items-stretch w-full mb-3">
                                <div className="profile-wrapper flex items-center">
                                  <img
                                    className="profile-settings mr-4"
                                    src="/img/dwight.jpeg"
                                    alt=""
                                  />
                                  <button className="image-button active:bg-primary mh-40 mr-3">
                                    Upload new image
                                  </button>
                                  <button className="delete-image-button mh-40">
                                    Delete
                                  </button>
                                </div>
                                <label className="block text-sm font-regular font-grey my-settings">
                                  First Name
                                </label>
                                <input
                                  type="text"
                                  className="w-full input-primary pl-2 py-13 focus:outline-none"
                                  onChange={handleFirstValid}
                                  value={firstName}
                                  placeholder="e.g. Dwight"
                                />
                                <label className="block text-xs font-regular font-grey my-settings">
                                  Last Name
                                </label>
                                <input
                                  type="text"
                                  className="w-full input-primary pl-2 py-13 focus:outline-none"
                                  onChange={handleLastValid}
                                  value={lastName}
                                  placeholder="e.g. Schrute"
                                />
                                <label className="block text-xs font-regular font-grey my-settings">
                                  Date Of Birth
                                </label>
                                <input
                                  type="text"
                                  className="w-full input-primary pl-2 py-13 focus:outline-none"
                                  onChange={handleDOBValid}
                                  value={dob}
                                  placeholder="e.g. 11/11/1990"
                                />
                                <label className="block text-xs font-regular font-grey my-settings">
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

                                <label className="block text-xs font-regular font-grey my-settings">
                                  Email
                                </label>
                                <input
                                  type="text"
                                  className="w-full input-primary pl-2 py-13 focus:outline-none"
                                  onChange={handleEmail}
                                  value={email}
                                  placeholder="e.g. dwight@dundermifflin.com"
                                />
                                <div className="wrapper w-full flex items-end justify-between">
                                  <label className="block text-xs font-regular font-grey my-settings">
                                    Login Phone Number
                                  </label>
                                  <button
                                    className="change-button"
                                    onClick={enablePhone}
                                  >
                                    Update Login Phone
                                  </button>
                                </div>
                                <input
                                  type="text"
                                  className="w-full input-primary pl-2 py-13 focus:outline-none"
                                  onChange={handlePhoneUpdate}
                                  value={phone}
                                  disabled={disabledPhone}
                                  placeholder="(916) 867-5309"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="fb-576">
                            <div className="card-wrapper w-full ml-4">
                              <div className="card p-24">
                                <div className="relative flex flex-wrap items-stretch w-full">
                                  <div className="flex w-full justify-between items-center mb-4">
                                    <div className="wrapper flex">
                                      <h2 className="h2 text-2xl font-regular">
                                        Deactivate Profile
                                      </h2>
                                      {activeButton && (
                                        <button className="active-button ml-4">
                                          Active
                                        </button>
                                      )}
                                      {!activeButton && (
                                        <button className="inactive-button ml-4">
                                          Deactivated
                                        </button>
                                      )}
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
                                  <p className="p text-md font-regular mb-6">
                                    If you deactivate your account, your profile
                                    details will be disabled. If the QR on your
                                    devices is scanned, no information will be
                                    visable to the medical service provider.
                                  </p>
                                  <p className="p text-md font-regular mb-6">
                                    It will not impact your dependent accounts
                                  </p>
                                  <p className="p text-md font-medium text-red-primary">
                                    Please note you will be still charged if you
                                    have premium subscription. You can cancel
                                    premium subscription below.
                                  </p>
                                </div>
                              </div>
                              <div className="wrapper w-full mt-4">
                                <div className="card p-24">
                                  <div className="relative flex flex-wrap items-stretch w-full mb-3">
                                    <div className="flex w-full justify-between items-center mb-4">
                                      <div className="wrapper flex">
                                        <h2 className="h2 text-2xl font-regular">
                                          Premium Subscription
                                        </h2>
                                      </div>
                                    </div>
                                    <div className="flex justify-between w-full mb-6">
                                      <div className="wrapper">
                                        <p className="p font-normal text-sm mb-2">
                                          Next Billing Date
                                        </p>
                                        <p className="p font-bold text-md">
                                          April 01, 2022
                                        </p>
                                      </div>
                                      <div className="wrapper">
                                        <p className="p font-normal text-right text-sm mb-2">
                                          You'll Pay
                                        </p>
                                        <p className="p font-bold text-md">
                                          $5/Month
                                        </p>
                                      </div>
                                    </div>
                                    <div className="flex justify-between w-full items-end mb-6">
                                      <div className="wrapper">
                                        <p className="p font-normal text-sm mb-2">
                                          Payment Method
                                        </p>
                                        <p className="p font-bold text-md">
                                          **** **** **** 1234
                                        </p>
                                      </div>
                                      <div className="wrapper">
                                        <button className=" text-green-primary font-bold">
                                          Update Payment Method
                                        </button>
                                      </div>
                                    </div>
                                    <button className="settings-button-cancel font-semibold">
                                      Cancel Subscription
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div className="wrapper w-full mt-4">
                                <div className="card p-24">
                                  <div className="relative flex flex-wrap items-stretch w-full mb-6">
                                    <h2 className="h2 text-2xl font-regular mb-4">
                                      Delete Profile
                                    </h2>
                                    <p className="p text-md font-regular mb-6 text-red-primary">
                                      All your and dependent profile information
                                      will be deleted. If the QR on your devices
                                      is scanned, no information will be visible
                                      to the medical service provider
                                    </p>
                                    <input
                                      type="text"
                                      className="w-full input-primary pl-2 py-13 mw-343 focus:outline-none ph-text-sm"
                                      placeholder="Type full name to delete this account"
                                      onChange={handleDelete}
                                    />
                                  </div>
                                  <button
                                    className="settings-button active:bg-primary disabled:bg-inactive font-semibold"
                                    disabled={!deleteValid}
                                    // onClick={handleDelete}
                                  >
                                    Permanently Delete Account
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {!uiState && (
                    <div className="tab-content tab-space">
                      <div
                        className={openTab === 1 ? "block" : "hidden"}
                        id="link1"
                      >
                        <div className="container flex">
                          <div className="w-full pr-4 md:w-4/12 lg:4/12">
                            <div className="card-wrapper">
                              <div className="title-wrapper flex justify-between items-center">
                                <div className="flex items-center">
                                  <img
                                    src="/img/medical-condition.svg"
                                    alt=""
                                  />
                                  <h3 className="h3 font-medium ml-2">
                                    Medical Condition
                                  </h3>
                                </div>
                                <button className="add-card-button">
                                  <i className="icon-Plus2x icon-md text-green-primary"></i>
                                </button>
                              </div>
                              <div className="card card-medical mt-2">
                                <div className="flex justify-between">
                                  <label className="block text-gray-primary text-xs font-normal mb-3">
                                    Condition Name
                                  </label>
                                  <div className="icon-wrapper">
                                    <button className="edit-card">
                                      <i className="icon-edit text-green-secondary text-xxs mr-1"></i>
                                    </button>
                                    <button className="delete-card">
                                      <i className="icon-delete text-red-secondary text-xxs"></i>
                                    </button>
                                  </div>
                                </div>
                                <h5 className="h5 text-green-tertiary font-medium">
                                  Diabetes
                                </h5>
                                <label className="block text-gray-primary text-xs font-normal my-3">
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
                                  <h3 className="h3 font-medium ml-2">
                                    Allergies
                                  </h3>
                                </div>
                                <button className="add-card-button">
                                  <i className="icon-Plus2x icon-md text-green-primary"></i>
                                </button>
                              </div>
                              <div className="card card-medical mt-2">
                                <div className="flex justify-between">
                                  <label className="block text-gray-primary text-xs font-normal mb-3">
                                    Name
                                  </label>
                                  <div className="icon-wrapper">
                                    <button className="edit-card">
                                      <i className="icon-edit text-green-secondary text-xxs mr-1"></i>
                                    </button>
                                    <button className="delete-card">
                                      <i className="icon-delete text-red-secondary text-xxs"></i>
                                    </button>
                                  </div>
                                </div>
                                <h5 className="h5 text-green-tertiary font-medium">
                                  Peanut
                                </h5>
                                <label className="block text-gray-primary text-xs font-normal my-3">
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
                                  <h3 className="h3 font-medium ml-2">
                                    Medication
                                  </h3>
                                </div>
                                <button
                                  className="add-card-button"
                                  onClick={saved}
                                >
                                  <i className="icon-Plus2x icon-md text-green-primary"></i>
                                </button>
                              </div>
                              <div className="card card-medical mt-2">
                                <div className="flex justify-between">
                                  <label className="block text-gray-primary text-xs font-normal mb-3">
                                    Medicaiton Name
                                  </label>
                                  <div className="icon-wrapper">
                                    <button className="edit-card">
                                      <i className="icon-edit text-green-secondary text-xxs mr-1"></i>
                                    </button>
                                    <button className="delete-card"
                                    onc>
                                      <i className="icon-delete text-red-secondary text-xxs"></i>
                                    </button>
                                  </div>
                                </div>
                                <h5 className="h5 text-green-tertiary font-medium">
                                  Amoxycillan
                                </h5>
                                <label className="block text-gray-primary text-xs font-normal my-3">
                                  Special Note
                                </label>
                                <p className="p text-sm">
                                  This is a special note
                                </p>
                                <div className="flex items-center justify-between mt-3">
                                  <h3 className="text-xs text-gray-primary">
                                    Currently Taking
                                  </h3>
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
                                  style={{
                                    display: !isShowing ? "block" : "none",
                                  }}
                                  className="add-medication text-green-primary text-xs mt-4"
                                  onClick={toggle}
                                >
                                  Add More Details
                                  <i className="icon-Plus2x relative top-1 ml-1 icon-xs text-green-primary"></i>
                                </button>
                                <button
                                  style={{
                                    display: isShowing ? "block" : "none",
                                  }}
                                  className="add-medication text-green-primary text-xs mt-4"
                                  onClick={toggle}
                                >
                                  Show Less
                                  <i className="icon-Plus2x relative top-1 ml-1 icon-xs text-green-primary"></i>
                                </button>
                                <div
                                  style={{
                                    display: isShowing ? "block" : "none",
                                  }}
                                >
                                  <div className="container">
                                    <div className="flex flex-wrap">
                                      <div className="w-1/2 pr-2">
                                        <label className="block text-gray-primary text-xs font-normal my-3">
                                          Ammount
                                        </label>
                                        <input
                                          type="text"
                                          className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                                          placeholder="e.g 200"
                                        />
                                      </div>

                                      <div className="w-1/2 pl-2">
                                        <label className="block text-gray-primary text-xs font-normal my-3">
                                          Dosage
                                        </label>
                                        <input
                                          type="text"
                                          className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                                          placeholder="Unit"
                                          onClick={() => {
                                            dropdownDosageShow
                                              ? closeDosagePopover()
                                              : openDosagePopover();
                                          }}
                                        />
                                        <div
                                          ref={popoverDropdownRefDosage}
                                          className={
                                            (dropdownDosageShow
                                              ? "block "
                                              : "hidden ") +
                                            "bg-blueGray-500 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 bg-white absolute min-w-48"
                                          }
                                        >
                                          <option
                                            href="#pablo"
                                            className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-primary"
                                            onClick={(e) => e.preventDefault()}
                                          >
                                            Action
                                          </option>
                                          <option
                                            href="#pablo"
                                            className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-primary"
                                            onClick={(e) => e.preventDefault()}
                                          >
                                            Another action
                                          </option>
                                          <option
                                            href="#pablo"
                                            className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-primary"
                                            onClick={(e) => e.preventDefault()}
                                          >
                                            Something else here
                                          </option>
                                          <option
                                            href="#pablo"
                                            className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-primary"
                                            onClick={(e) => e.preventDefault()}
                                          >
                                            Seprated link
                                          </option>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="container">
                                    <div className="flex flex-wrap">
                                      <div className="w-1/2 pr-2">
                                        <label className="block text-gray-primary text-xs font-normal my-3">
                                          Times
                                        </label>
                                        <input
                                          type="text"
                                          className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                                          placeholder="e.g. Twice"
                                        />
                                      </div>

                                      <div className="w-1/2 pl-2">
                                        <label className="block text-gray-primary text-xs font-normal my-3">
                                          Frequency
                                        </label>
                                        <input
                                          type="text"
                                          className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                                          placeholder="e.g. Daily"
                                          onClick={() => {
                                            dropdownFrequencyShow
                                              ? closeFrequencyPopover()
                                              : openFrequencyPopover();
                                          }}
                                        />
                                        <div
                                          ref={popoverDropdownRefFrequency}
                                          className={
                                            (dropdownFrequencyShow
                                              ? "block "
                                              : "hidden ") +
                                            "bg-blueGray-500 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 bg-white absolute min-w-48"
                                          }
                                        >
                                          <option
                                            href="#pablo"
                                            className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-primary"
                                            onClick={(e) => e.preventDefault()}
                                          >
                                            Action
                                          </option>
                                          <option
                                            href="#pablo"
                                            className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-primary"
                                            onClick={(e) => e.preventDefault()}
                                          >
                                            Another action
                                          </option>
                                          <option
                                            href="#pablo"
                                            className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-primary"
                                            onClick={(e) => e.preventDefault()}
                                          >
                                            Something else here
                                          </option>
                                          <option
                                            href="#pablo"
                                            className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-primary"
                                            onClick={(e) => e.preventDefault()}
                                          >
                                            Seprated link
                                          </option>
                                        </div>
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
                                  <h3 className="h3 font-medium ml-2">
                                    Emergency Contact
                                  </h3>
                                </div>
                                <button className="add-card-button">
                                  <i className="icon-Plus2x icon-md text-green-primary"></i>
                                </button>
                              </div>
                              <div className="card card-medical mt-2">
                                <div className="flex justify-between">
                                  <label className="block text-gray-primary text-xs font-normal mb-3">
                                    Name
                                  </label>
                                  <div className="icon-wrapper">
                                    <button className="edit-card">
                                      <i className="icon-edit text-green-secondary text-xxs mr-1"></i>
                                    </button>
                                    <button className="delete-card">
                                      <i className="icon-delete text-red-secondary text-xxs"></i>
                                    </button>
                                  </div>
                                </div>
                                <h5 className="h5 text-green-tertiary font-medium">
                                  Michael Scott
                                </h5>
                                <label className="block text-gray-primary text-xs font-normal my-3">
                                  Email Adddress
                                </label>
                                <h5 className="h5 text-green-tertiary font-medium">
                                  michael@dunder.com
                                </h5>
                                <label className="block text-gray-primary text-xs font-normal my-3">
                                  Phone
                                </label>
                                <h5 className="h5 text-green-tertiary font-medium">
                                  (123) 456-7890
                                </h5>
                              </div>
                            </div>
                            <div className="card-wrapper">
                              <div className="title-wrapper flex justify-between items-center">
                                <div className="flex items-center">
                                  <img src="/img/insurance.svg" alt="" />
                                  <h3 className="h3 font-medium ml-2">
                                    Insurance
                                  </h3>
                                </div>
                                <button className="add-card-button">
                                  <i className="icon-Plus2x icon-md text-green-primary"></i>
                                </button>
                              </div>
                              <div className="card card-medical mt-2">
                                <div className="flex justify-between">
                                  <label className="block text-gray-primary text-xs font-normal mb-3">
                                    Carrier Name
                                  </label>
                                  <div className="icon-wrapper">
                                    <button className="edit-card">
                                      <i className="icon-edit text-green-secondary text-xxs mr-1"></i>
                                    </button>
                                    <button className="delete-card">
                                      <i className="icon-delete text-red-secondary text-xxs"></i>
                                    </button>
                                  </div>
                                </div>
                                <h5 className="h5 text-green-tertiary font-medium">
                                  Dunder Mifflin
                                </h5>
                                <label className="block text-gray-primary text-xs font-normal my-3">
                                  Insurance Company Name
                                </label>
                                <h5 className="h5 text-green-tertiary font-medium">
                                  The Office
                                </h5>
                                <label className="block text-gray-primary text-xs font-normal my-3">
                                  Plan No.
                                </label>
                                <h5 className="h5 text-green-tertiary font-medium">
                                  XXXXXXXX
                                </h5>
                                <label className="block text-gray-primary text-xs font-normal my-3">
                                  Policy No.
                                </label>
                                <h5 className="h5 text-green-tertiary font-medium">
                                  XXXXXXXX
                                </h5>
                                <label className="block text-gray-primary text-xs font-normal my-3">
                                  Group No.
                                </label>
                                <h5 className="h5 text-green-tertiary font-medium">
                                  XXXXXXXX
                                </h5>
                              </div>
                            </div>
                            <div className="card-wrapper">
                              <div className="title-wrapper flex justify-between items-center">
                                <div className="flex items-center">
                                  <img src="/img/hospital.svg" alt="" />
                                  <h3 className="h3 font-medium ml-2">
                                    Preferred Hospital
                                  </h3>
                                </div>
                                <button className="add-card-button">
                                  <i className="icon-Plus2x icon-md text-green-primary"></i>
                                </button>
                              </div>
                              <div className="card card-medical mt-2">
                                <div className="flex justify-between">
                                  <label className="block text-gray-primary text-xs font-normal mb-3">
                                    Hospital Name
                                  </label>
                                  <div className="icon-wrapper">
                                    <button className="edit-card">
                                      <i className="icon-edit text-green-secondary text-xxs mr-1"></i>
                                    </button>
                                    <button className="delete-card">
                                      <i className="icon-delete text-red-secondary text-xxs"></i>
                                    </button>
                                  </div>
                                </div>
                                <h5 className="h5 text-green-tertiary font-medium">
                                  Dunder Mifflin Hospital
                                </h5>
                                <label className="block text-gray-primary text-xs font-normal my-3">
                                  Address
                                </label>
                                <h5 className="h5 text-green-tertiary font-medium">
                                  1725 Slough Avenue, Scranton, PA.
                                </h5>
                                <label className="block text-gray-primary text-xs font-normal my-3">
                                  Phone
                                </label>
                                <h5 className="h5 text-green-tertiary font-medium">
                                  (911) 867-5309
                                </h5>
                              </div>
                            </div>
                            <div className="card-wrapper">
                              <div className="title-wrapper flex justify-between items-center">
                                <div className="flex items-center">
                                  <img src="/img/care-giver.svg" alt="" />
                                  <h3 className="h3 font-medium ml-2">
                                    Primary Caregiver
                                  </h3>
                                </div>
                                <button className="add-card-button">
                                  <i className="icon-Plus2x icon-md text-green-primary"></i>
                                </button>
                              </div>
                              <div className="card card-medical mt-2">
                                <div className="flex justify-between">
                                  <label className="block text-gray-primary text-xs font-normal mb-3">
                                    Name
                                  </label>
                                  <div className="icon-wrapper">
                                    <button className="edit-card">
                                      <i className="icon-edit text-green-secondary text-xxs mr-1"></i>
                                    </button>
                                    <button className="delete-card">
                                      <i className="icon-delete text-red-secondary text-xxs"></i>
                                    </button>
                                  </div>
                                </div>
                                <h5 className="h5 text-green-tertiary font-medium">
                                  Michael Scott
                                </h5>

                                <label className="block text-gray-primary text-xs font-normal my-3">
                                  Email Address
                                </label>
                                <h5 className="h5 text-green-tertiary font-medium">
                                  michael@dunder.com
                                </h5>

                                <label className="block text-gray-primary text-xs font-normal my-3">
                                  Phone
                                </label>
                                <h5 className="h5 text-green-tertiary font-medium">
                                  (123) 456-7890
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className={openTab === 2 ? "block" : "hidden"}
                        id="link2"
                      >
                        <p>Placeholder for documents page</p>
                      </div>
                      <div
                        className={openTab === 3 ? "block" : "hidden"}
                        id="link3"
                      >
                        <div className="container flex">
                          <div className="card-wrapper fb-423 h-full">
                            <div className="card p-24">
                              <div className="relative flex flex-wrap items-stretch w-full mb-3">
                                <div className="profile-wrapper flex items-center">
                                  <img
                                    className="profile-settings mr-4"
                                    src="/img/dwight.jpeg"
                                    alt=""
                                  />
                                  <button className="image-button active:bg-primary mh-40 mr-3">
                                    Upload new image
                                  </button>
                                  <button className="delete-image-button mh-40">
                                    Delete
                                  </button>
                                </div>
                                <label className="block text-xs font-regular font-grey my-settings">
                                  First Name
                                </label>
                                <input
                                  type="text"
                                  className="w-full input-primary pl-2 py-13 focus:outline-none"
                                  onChange={handleFirstValid}
                                  value={firstName}
                                  placeholder="e.g. Dwight"
                                />
                                <label className="block text-xs font-regular font-grey my-settings">
                                  Last Name
                                </label>
                                <input
                                  type="text"
                                  className="w-full input-primary pl-2 py-13 focus:outline-none"
                                  onChange={handleLastValid}
                                  value={lastName}
                                  placeholder="e.g. Schrute"
                                />
                                <label className="block text-xs font-regular font-grey my-settings">
                                  Date Of Birth
                                </label>
                                <input
                                  type="text"
                                  className="w-full input-primary pl-2 py-13 focus:outline-none"
                                  onChange={handleDOBValid}
                                  value={dob}
                                  placeholder="e.g. 11/11/1990"
                                />
                                <label className="block text-xs font-regular font-grey my-settings">
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

                                <label className="block text-xs font-regular font-grey my-settings">
                                  Email
                                </label>
                                <input
                                  type="text"
                                  className="w-full input-primary pl-2 py-13 focus:outline-none"
                                  onChange={handleEmail}
                                  value={email}
                                  placeholder="e.g. dwight@dundermifflin.com"
                                />
                                <div className="wrapper flex w-full items-end justify-between">
                                  <label className="block text-xs font-regular font-grey my-settings">
                                    Login Phone Number
                                  </label>
                                  <button
                                    className="change-button"
                                    onClick={enablePhone}
                                  >
                                    Update Login Phone
                                  </button>
                                </div>
                                <input
                                  type="text"
                                  className="w-full input-primary pl-2 py-13 focus:outline-none"
                                  onChange={handlePhoneUpdate}
                                  value={phone}
                                  disabled={disabledPhone}
                                  placeholder="(916) 867-5309"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="fb-576">
                            <div className="card-wrapper w-full ml-4">
                              <div className="card p-24">
                                <div className="relative flex flex-wrap items-stretch w-full">
                                  <div className="flex w-full justify-between items-center mb-4">
                                    <div className="wrapper flex">
                                      <h2 className="h2 text-2xl font-regular">
                                        Deactivate Profile
                                      </h2>
                                      {activeButton && (
                                        <button className="active-button ml-4">
                                          Active
                                        </button>
                                      )}
                                      {!activeButton && (
                                        <button className="inactive-button ml-4">
                                          Deactivated
                                        </button>
                                      )}
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
                                  <p className="p text-md font-regular mb-6">
                                    If you deactivate your account, your profile
                                    details will be disabled. If the QR on your
                                    devices is scanned, no information will be
                                    visable to the medical service provider.
                                  </p>
                                  <p className="p text-md font-regular mb-6">
                                    It will not impact your dependent accounts
                                  </p>
                                  <p className="p text-md font-medium text-red-primary">
                                    Please note you will be still charged if you
                                    have premium subscription. You can cancel
                                    premium subscription below.
                                  </p>
                                </div>
                              </div>
                              <div className="wrapper w-full mt-4">
                                <div className="card">
                                  <div className="relative flex flex-wrap items-stretch w-full mb-3">
                                    <div className="flex w-full justify-between items-center mb-4">
                                      <div className="wrapper flex">
                                        <h2 className="h2 text-2xl font-regular">
                                          Premium Subscription
                                        </h2>
                                      </div>
                                    </div>
                                    <div className="flex justify-between w-full mb-6">
                                      <div className="wrapper">
                                        <p className="p font-normal text-sm mb-2">
                                          Next Billing Date
                                        </p>
                                        <p className="p font-bold text-md">
                                          April 01, 2022
                                        </p>
                                      </div>
                                      <div className="wrapper">
                                        <p className="p font-normal text-right text-sm mb-2">
                                          You'll Pay
                                        </p>
                                        <p className="p font-bold text-md">
                                          $5/Month
                                        </p>
                                      </div>
                                    </div>
                                    <div className="flex justify-between w-full items-end mb-6">
                                      <div className="wrapper">
                                        <p className="p font-normal text-sm mb-2">
                                          Payment Method
                                        </p>
                                        <p className="p font-bold text-md">
                                          **** **** **** 1234
                                        </p>
                                      </div>
                                      <div className="wrapper">
                                        <button className="text-green-primary font-bold">
                                          Update Payment Method
                                        </button>
                                      </div>
                                    </div>
                                    <button className="settings-button-cancel font-semibold">
                                      Cancel Subscription
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div className="wrapper w-full mt-4">
                                <div className="card p-24">
                                  <div className="relative flex flex-wrap items-stretch w-full mb-6">
                                    <h2 className="h2 text-2xl font-regular mb-4">
                                      Delete Profile
                                    </h2>
                                    <p className="p text-md font-regular mb-6 text-red-primary">
                                      All your and dependent profile information
                                      will be deleted. If the QR on your devices
                                      is scanned, no information will be visible
                                      to the medical service provider
                                    </p>
                                    <input
                                      type="text"
                                      className="w-full input-primary pl-2 py-13 mw-343 focus:outline-none ph-text-sm"
                                      placeholder="Type full name to delete this account"
                                      onChange={handleDelete}
                                    />
                                  </div>
                                  <button
                                    className="settings-button active:bg-primary disabled:bg-inactive font-semibold"
                                    disabled={!deleteValid}
                                    // onClick={handleDelete}
                                  >
                                    Permanently Delete Account
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </>
  );
}

DashboardLanding.layout = Dashboard;
