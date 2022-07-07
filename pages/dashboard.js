import React, { useState, useEffect } from "react";
// import Repeat from 'react-repeat-component';
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import isEmail from "validator/lib/isEmail";
import isDate from "validator/lib/isDate";
import ConnectDeviceModal from "../components/modal/ConnectDevice";
import DependentProfileModal from "../components/modal/DependentProfile";
import UploadDocumentModal from "../components/modal/UploadDocument";
import Sidebar from "../components/Sidebar/Sidebar";
import DashboardTabs from "../components/Navbars/DasboardTabs";
import { createPopper } from "@popperjs/core";
import OutsideClickHandler from 'react-outside-click-handler';
import MedicalConditionForm from "../components/MedicalCard/MedicalCondition/Form";
import MedicalConditionView from "../components/MedicalCard/MedicalCondition/View";
import AllergiesForm from "../components/MedicalCard/Allergies/Form";
import AllergiesView from "../components/MedicalCard/Allergies/View";
import MedicationForm from "../components/MedicalCard/Medication/Form";
import MedicationView from "../components/MedicalCard/Medication/View";
import EmergencyForm from "../components/MedicalCard/Emergency/Form";
import EmergencyView from "../components/MedicalCard/Emergency/View";
import InsuranceForm from "../components/MedicalCard/insurance/Form";
import InsuranceView from "../components/MedicalCard/insurance/View";
import PrimaryCaregiverForm from "../components/MedicalCard/primarycaregiver/Form";
import PrimaryCaregiverView from "../components/MedicalCard/primarycaregiver/View";
import Profile from "../components/Profile";

import { baseapiurl } from "services/config";

const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();

// layout for page

import {
  getUserInfo, createMedicalProfile, updateMedicalProfile, createEmptyField, getUserInfoById,
  updateProfileInfo, createDependentProfile
} from "../services/UserService";

import Dashboard from "layouts/Dashboard.js";
import { compose } from "redux";
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
    setConnectFalse();
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

  const addDependentProfile = () => {
    setFirstNameDependent("");
    setLastNameDependent("");
    setDobDependent("");
    setGenderDependent("Female");
    setEmailDependent("");
    setPhoneDependent("");
    setIdDependent("");
    setPinDependent("");
    isDependentEmailValid(false);
    isDependentDobValid(false);
    isDependentPhoneValid(false);
    setDependentOpen(true);
  }

  const [dependentModalIsOpen, setDependentOpen] = React.useState(false);

  function closeDependentModal() {
    setDependentSuccess(false);
    setDependentOpen(false);
  }

   //Dependent Profile Details
   const [dependentSuccess, setDependentSuccess] = React.useState(false);
   const [firstNameDependent, setFirstNameDependent] = React.useState("");
   const [lastNameDependent, setLastNameDependent] = React.useState("");
   const [dobDependent, setDobDependent] = React.useState("");
   const [genderDependent, setGenderDependent] = React.useState("Female");
   const [emailDependent, setEmailDependent] = React.useState("");
   const [phoneDependent, setPhoneDependent] = React.useState("");
   const [idDependent, setIdDependent] = React.useState("");
   const [pinDependent, setPinDependent] = React.useState("");

   const createdDependent = (e) => {
     e.preventDefault();
    if (!dependentProfileValid) {
      const obj = {
        firstName: firstNameDependent,
        lastName: lastNameDependent,
        email: emailDependent,
        gender: genderDependent,
        phone: phoneDependent,
        dob: dobDependent,
        deviceId: idDependent,
        devicePin: pinDependent
      };
      createDependentProfile(obj).then(
        (res) => {
          if (res.message) {
            error(res.message);
          } else {
            loadData();
            setDependentSuccess(true)
            startDependent(false)
          }
        }
      )
    } 
   
   }

  useEffect(() => {
    checkValidProfile();
  }, [firstNameDependent]);
  useEffect(() => {
    checkValidProfile();
  }, [lastNameDependent]);
  useEffect(() => {
    checkValidProfile();
  }, [dobDependent]);
  useEffect(() => {
    checkValidProfile();
  }, [genderDependent]);
  useEffect(() => {
    checkValidProfile();
  }, [emailDependent]);
  useEffect(() => {
    checkValidProfile();
  }, [phoneDependent]);

  let [dependentEmaillValid, isDependentEmailValid] = useState(false);
  let [dependentPhoneValid, isDependentPhoneValid] = useState(false);
  let [dependentDobValid, isDependentDobValid] = useState(false);

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
  }
  const handleLastDependent = (event) => {
    setLastNameDependent(event.target.value);
  }
  const inputDobDependent = (event) => {
    isDependentDobValid(false);
    if(isDate(event.target.value, {format: "MM/DD/YYYY"})) {
      isDependentDobValid(true);
    }
    setDobDependent(event.target.value);
  }
  const handlePhoneDependent = (event) => {
    isDependentPhoneValid(false);
    if (validatePhoneNumber(event.target.value)) {
      isDependentPhoneValid(true);
    }
    setPhoneDependent(event.target.value);
  }


   const handleEmailDependent = (event) => {
    isDependentEmailValid(false);
    if (isEmail(event.target.value)) {
      isDependentEmailValid(true);
    }
    setEmailDependent(event.target.value);
   }
   const handleGenderDependent = (event) => {
    setGenderDependent(event.target.value);
   }

   const checkValidProfile = () => {
    isDependentValid(true)
    if (firstNameDependent && lastNameDependent && dobDependent && genderDependent && dependentDobValid
        && emailDependent && dependentEmaillValid && phoneDependent && dependentPhoneValid) {
      isDependentValid(false)
    }
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

  const [DocumentUploadIsOpen, setDocumentOpen] = React.useState(false);


  // Toast
  const saved = () =>
    toast.success("Information auto saved", {
      position: "top-center",
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const error = () =>
    toast.error("Successfully deleted", {
      position: "top-center",
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const [openTab, setOpenTab] = React.useState(1);

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
  };

  // service call
  const [user, setUser] = useState();
  const [activeuserInfo, setActiveuserInfo] = useState();
  const [activeMedication, setActiveMedication] = useState([])
  const [activeDoseUnit, setActiveDoseUnit] = useState(null)
  const [activeFrequency, setActiveFrequency] = useState(null)
  const [activeuser, setActiveuser] = useState(null)
  const [activeCardInput, setActiveCardInput] = useState(null);
  const [files, setFiles] = useState([]);

  const validatePhoneNumber = (value) => {
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

  const startMedicalProfile = () => {
    createMedicalProfile({ userid: activeuser }).then(p => {
      loadInfoByUser(activeuser);
    })
  };

  const toggleActiveMedication = (item, type) => {
    console.log(item, type)
    if (type == "active") {
      if (activeMedication.indexOf(item.id) < 0) {
        setActiveMedication([item.id, ...activeMedication])
      }
    } else {
      activeMedication.splice(activeMedication.indexOf(item), 1);
      setActiveMedication([...activeMedication]);
    }
  }

  const toggleActiveDoseUnit = (p) => {
    if (activeDoseUnit == p.id) {
      setActiveDoseUnit(null);
    } else {
      setActiveDoseUnit(p.id);
    }
  }

  const toggleActiveFrequency = (p) => {
    if (activeFrequency == p.id) {
      setActiveFrequency(null);
    } else {
      setActiveFrequency(p.id);
    }
  }

  const loadData = async () => {
    const result = await getUserInfo();
    if ("data" in result) {
      result.data.key = new Date().getMilliseconds()
      setUser(result.data);
      setActiveuser(result.data.id);
      setActiveuserInfo(result.data);
    }
  }

  const loadInfoByUser = async (userid) => {
    const result = await getUserInfoById(userid);
    if ("data" in result) {
      setActiveuserInfo({ ...result.data });
      user.key = new Date().getMilliseconds()
      setUser({ ...user });
    }
  };

  useEffect(() => {
    loadData();
  }, [])

  const setClientSide = (profiletype, property, item, value) => {
    const found = activeuserInfo.medicalProfiles[profiletype].find(p => p.id == item.id);
    const index = found ? activeuserInfo.medicalProfiles[profiletype].indexOf(found) : -1;
    if (index > -1) {
      activeuserInfo.medicalProfiles[profiletype][index][property] = value;
      user.key = new Date().getMilliseconds()
      setUser({ ...user });
    }
  }


  const createMedicalEmptyField = (profiletype) => {
    if (activeuserInfo.medicalProfiles) {
      const items = activeuserInfo.medicalProfiles[profiletype];
      const lastIndex = items.length - 1;
      const {id, edit, ...item} = items[lastIndex];
      if (!(Object.values(item).every(p => p == ""))) {
        createEmptyField({ profiletype, userid: activeuser }).then(p => {
           if ("success" in p && p.success) {
            p.data.edit = false;
            onEditCard(profiletype, p.data);
            activeuserInfo.medicalProfiles[profiletype].push({...p.data});
            setActiveuserInfo({...activeuserInfo})
           }
        })
      }
    }
  };

  const checkIfObjectEmpty = (items) => {
    const {id, edit, ...item} = items;
    return Object.values(item).every(q => q == "");
  }

  const setEditFalse = (items) => {
    if (activeCardInput) {
      const profileitem = activeuserInfo.medicalProfiles[activeCardInput.profiletype];
      const found = profileitem.find(p => p.id === activeCardInput.item.id);
      if (found) {
        const index = profileitem.indexOf(found);
        if (items) {
          for (const item of items) {
            activeuserInfo.medicalProfiles[activeCardInput.profiletype][index][item.field] = item.value;
          }
        }
        activeuserInfo.medicalProfiles[activeCardInput.profiletype][index].edit = false;
        if (checkIfObjectEmpty(profileitem[index])) {
          if (profileitem.length == 1) {
            activeuserInfo.medicalProfiles[activeCardInput.profiletype][index].edit = true;
          } else {
            activeuserInfo.medicalProfiles[activeCardInput.profiletype].splice(index, 1);
          }
        }
        setActiveuserInfo({ ...activeuserInfo });
      }
    }
  }

  const handleOutsideClick = (type, item) => {

    if (activeCardInput && activeCardInput.profiletype == type && activeCardInput.item.id == item.id) {
        if (type == "profile") {
          if (activeCardInput.items.length > 0) {
            // setEditFalse(activeCardInput.items);
            updateProfileInfo({items: activeCardInput.items, userid: activeuserInfo.id}).then(
              (result) => {
                if ("success" in result) {
                  saved();
                } else if ("message" in result) {
                  error(result.message);
                }
              }
            )
            setActiveCardInput(null);
          }
        } else {
          if (activeCardInput.items.length > 0) {
            setEditFalse(activeCardInput.items);
            updateMedicalProfile({
              profiletype: activeCardInput.profiletype,
              id: activeCardInput.item.id,
              userid: activeuser,
              items: activeCardInput.items
            }).then(
              (result) => {
                if (result.success) {
                  saved();
                  // loadInfoByUser(activeuser);
                }
              }
            )
            setActiveCardInput(null);
          } else {
            setEditFalse(activeCardInput.items);
            setActiveCardInput(null);
          }
        }
    }
  }

  const checkValidEmail = (e) => {
    if (!(isEmail(e.target.value))) {
      error("Please enter a valid email address");
    }
  };

  const checkValidPhone = (e) => {
    if(!(validatePhoneNumber(e.target.value))) {
      error("Please enter a valid phone number");
    }
  };

  const handleFormInput = (profiletype, property, item, ischeckbox = false, itemvalue = null) => (e) => {
    const value = itemvalue ? itemvalue : (ischeckbox ? e.target.checked : e.target.value);
    const isEnterKey = e.key === 'Enter';
    if (isEnterKey) {
      handleOutsideClick(profiletype, item);
      return false;
    }
    // console.log(isEnterKey, "[[")
    if (property == "email") {
      if (!(isEmail(value))) {
        return false;
      }
    }

    if (property == "phone") {
      if(!(validatePhoneNumber(e.target.value))) {
        return false;
      }
    }
    if (!activeCardInput) {
      setActiveCardInput({
        profiletype,
        item,
        items: [{
            field: property,
            value: value
        }]
      })
    } else if (activeCardInput.profiletype == profiletype) {
      const found = activeCardInput.items.find(p => p.field == property);
      if (found) {
        const index = activeCardInput.items.indexOf(found);
        activeCardInput.items[index].value = value;
        setActiveCardInput({...activeCardInput});
      } else {
        activeCardInput.items.push({field: property, value});
        setActiveCardInput({...activeCardInput});
      }
    }
    if (itemvalue) {
      setActiveDoseUnit(null)
      setActiveFrequency(null)
      setClientSide(profiletype, property, item, value);
    }
  }

  const onEditCard = (profiletype, item) => {
      item.edit = true;
      setActiveCardInput({
        profiletype,
        item,
        items: []
      })
      user.key = new Date().getMilliseconds()
      setUser({ ...user });
      
  };

  // useEffect(() => {
  //   const keyUpHandler = event => {
  //     console.log('User pressed: ', event.key);

  //     if (event.key == 'Enter') {
  //       event.preventDefault();
  //       console.log(activeCardInput, "klm")
  //       setEditFalse();
  //     }
  //   };

  //   document.addEventListener('keyup', keyUpHandler);

  //   return () => {
  //     document.removeEventListener('keyup', keyUpHandler);
  //   };
  // }, []);

  // Card Hovers for Edit
  const [medicationHover, setHoverMedication] = useState(false);
  const [conditionHover, setHoverCondition] = useState(false);
  const [allergiesHover, setHoverAllergies] = useState(false);
  const [contactHover, setHoverContact] = useState(false);
  const [insuranceHover, setHoverInsurance] = useState(false);
  const [caregiverHover, setHoverCaregiver] = useState(false);
  // const [medicationHover, setHoverMedication] = useState(false);
  
  const handleMouseMedication = () => {
    setHoverMedication(true)
  }

  const handleMouseOutMedication = () => {
    setHoverMedication(false)
  }
  const handleMouseCondition = () => {
    setHoverCondition(true)
  }

  const handleMouseOutCondition = () => {
    setHoverCondition(false)
  }
  const handleMouseAllergies = () => {
    setHoverAllergies(true)
  }

  const handleMouseOutAllergies = () => {
    setHoverAllergies(false)
  }
  const handleMouseContact = () => {
    setHoverContact(true)
  }

  const handleMouseOutContact = () => {
    setHoverContact(false)
  }
  const handleMouseInsurance = () => {
    setHoverInsurance(true)
  }

  const handleMouseOutInsurance = () => {
    setHoverInsurance(false)
  }
  const handleMouseCaregiver = () => {
    setHoverCaregiver(true)
  }

  const handleMouseOutCaregiver = () => {
    setHoverCaregiver(false)
  }

  const dosageUnit = ["Pills", "Drops", "Pieces", "cc", "ml", "mg"];
  const frequencyUnit = ["Hourly", "Daily", "Weekly", "Every 2 Week", "Monthly", "Every 3 Month", "Every 6 Month"];
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
        setFiles={setFiles}
        files={files}
        />
      </Modal>
      <div className="flex h-full">
        <section className="profile-section min-w-239-px pr-4">
          <ToastContainer
            position="top-center"
            autoClose={5000}
            closeButton={false}
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
            user={user}
            activeuser={activeuser}
            setActiveuser={setActiveuser}
            loadInfoByUser={loadInfoByUser}
            newProfile={addDependentProfile}
          // signOut={signOut}
          ></Sidebar>
        </section>
        <section className="information-section w-full h-full">
          {(!activeuserInfo || !activeuserInfo.medicalProfiles) && (
            <div className="flex flex-col justify-center max-w-340-px items-center mx-auto mt-10 h-full pb-38-vh">
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

          {activeuserInfo && activeuserInfo.medicalProfiles && (
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
                  <div className="tab-content tab-space">
                    <div
                      className={openTab === 1 ? "block" : "hidden"}
                      id="link1"
                    >
                      <div className="container flex">
                        
                          <div className="w-full pr-4 md:w-4/12 lg:4/12">
                            <div className="card-wrapper" onMouseEnter={handleMouseCondition} onMouseLeave={handleMouseOutCondition}>
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
                                <button className="add-card-button"
                                  onClick={() => createMedicalEmptyField("medicalcondition")}
                                >
                                  <i className="icon-Plus2x icon-md text-green-primary"></i>
                                </button>
                              </div>
                              {activeuserInfo.medicalProfiles && activeuserInfo.medicalProfiles.medicalcondition.map(p => (
                              <>
                              {p.edit == true && <MedicalConditionForm
                                  item={p}
                                  handleOutsideClick={handleOutsideClick}
                                  handleFormInput={handleFormInput}
                              />}
                                {p.edit == false && <MedicalConditionView 
                                item={p}
                                onEditCard={onEditCard}
                                conditionHover={conditionHover}
                                handleMouseMedication={handleMouseCondition}
                                  handleMouseOutMedication={handleMouseOutCondition}
                                />}</>
                              ))}
                            </div>
                          </div>

                        <div className="w-full pr-4 md:w-4/12 lg:4/12">
                          <div className="card-wrapper" onMouseEnter={handleMouseAllergies} onMouseLeave={handleMouseOutAllergies}>
                            <div className="title-wrapper flex justify-between items-center">
                              <div className="flex items-center">
                                <img src="/img/allergies.svg" alt="" />
                                <h3 className="h3 font-medium ml-2">
                                  Allergies
                                </h3>
                              </div>
                              <button className="add-card-button"
                                onClick={() => createMedicalEmptyField("allergies")}
                              >
                                <i className="icon-Plus2x icon-md text-green-primary"></i>
                              </button>
                            </div>
                            {activeuserInfo.medicalProfiles && activeuserInfo.medicalProfiles.allergies.map(p => 
                            <>
                              {p.edit == true && <AllergiesForm 
                                item={p}
                                handleOutsideClick={handleOutsideClick}
                                handleFormInput={handleFormInput}
                            />}
                            {p.edit == false && <AllergiesView 
                                item={p}
                                handleOutsideClick={handleOutsideClick}
                                handleFormInput={handleFormInput}
                                onEditCard={onEditCard}
                                allergiesHover={allergiesHover}
                            />}
                            </>
                            )}
                          </div>
                        </div>
                        <div className="w-full pr-4 md:w-4/12 lg:4/12">
                          <div className="card-wrapper" onMouseEnter={handleMouseMedication} onMouseLeave={handleMouseOutMedication}>
                            <div className="title-wrapper flex justify-between items-center">
                              <div className="flex items-center">
                                <img src="/img/medication.svg" alt="" />
                                <h3 className="h3 font-medium ml-2">
                                  Medication
                                </h3>
                              </div>
                              <button className="add-card-button"
                                onClick={() => createMedicalEmptyField("medication")}
                              >
                                <i className="icon-Plus2x icon-md text-green-primary"></i>
                              </button>
                            </div>
                            {activeuserInfo.medicalProfiles && activeuserInfo.medicalProfiles.medication.map(p => 
                              <>
                                {p.edit == true && <MedicationForm
                                  item={p}
                                  handleOutsideClick={handleOutsideClick}
                                  handleFormInput={handleFormInput}
                                  toggleActiveDoseUnit={toggleActiveDoseUnit}
                                  toggleActiveFrequency={toggleActiveFrequency}
                                  toggleActiveMedication={toggleActiveMedication}
                                  activeMedication={activeMedication}
                                  activeFrequency={activeFrequency}
                                  activeDoseUnit={activeDoseUnit}
                                  dosageUnit={dosageUnit}
                                  frequencyUnit={frequencyUnit}
                                  handleMouseMedication={handleMouseMedication}
                                  handleMouseOutMedication={handleMouseOutMedication}
                                />}
                                  {p.edit == false && <MedicationView
                                  item={p}
                                  handleOutsideClick={handleOutsideClick}
                                  handleFormInput={handleFormInput}
                                  activeMedication={activeMedication}
                                  onEditCard={onEditCard}
                                  toggleActiveMedication={toggleActiveMedication}
                                  handleMouseMedication={handleMouseMedication}
                                  handleMouseOutMedication={handleMouseOutMedication}
                                  medicationHover={medicationHover}
                                />}
                              </>
                            )}
                          </div>
                        </div>
                        <div className="w-full  md:w-4/12 lg:4/12">
                          <div className="card-wrapper" onMouseEnter={handleMouseContact} onMouseLeave={handleMouseOutContact}>
                            <div className="title-wrapper flex justify-between items-center">
                              <div className="flex items-center">
                                <img src="/img/contact.svg" alt="" />
                                <h3 className="h3 font-medium ml-2">
                                  Emergency Contact
                                </h3>
                              </div>
                              <button className="add-card-button"
                                onClick={() => createMedicalEmptyField("emergency")}
                              >
                                <i className="icon-Plus2x icon-md text-green-primary"></i>
                              </button>
                            </div>
                            {activeuserInfo.medicalProfiles && activeuserInfo.medicalProfiles.emergency.map(p => (
                            <>
                              {p.edit == true && <EmergencyForm 
                                item={p}
                                handleFormInput={handleFormInput}
                                handleOutsideClick={handleOutsideClick}
                                checkValidEmail={checkValidEmail}
                                checkValidPhone={checkValidPhone}
                              />}
                              {p.edit == false && <EmergencyView 
                                item={p}
                                onEditCard={onEditCard}
                                contactHover={contactHover}
                              />}
                            </>
                            ))}
                          </div>
                          <div className="card-wrapper" onMouseEnter={handleMouseInsurance} onMouseLeave={handleMouseOutInsurance}>
                            <div className="title-wrapper flex justify-between items-center">
                              <div className="flex items-center">
                                <img src="/img/insurance.svg" alt="" />
                                <h3 className="h3 font-medium ml-2">
                                  Insurance
                                </h3>
                              </div>
                              <button className="add-card-button"
                                onClick={() => createMedicalEmptyField("insurance")}
                              >
                                <i className="icon-Plus2x icon-md text-green-primary"></i>
                              </button>
                            </div>
                            {activeuserInfo.medicalProfiles && activeuserInfo.medicalProfiles.insurance.map(p => 
                              <>
                                {p.edit == true && (<InsuranceForm 
                                  item={p}
                                  handleFormInput={handleFormInput}
                                  handleOutsideClick={handleOutsideClick}
                                />)}

                                {p.edit == false && (
                                  <InsuranceView 
                                    item={p}
                                    onEditCard={onEditCard}
                                    insuranceHover={insuranceHover}
                                  />
                                )}
                              </>
                            )}
                          </div>
                          <div className="card-wrapper" onMouseEnter={handleMouseCaregiver} onMouseLeave={handleMouseOutCaregiver}>
                            <div className="title-wrapper flex justify-between items-center">
                              <div className="flex items-center">
                                <img src="/img/care-giver.svg" alt="" />
                                <h3 className="h3 font-medium ml-2">
                                  Primary Caregiver
                                </h3>
                              </div>
                              <button className="add-card-button"
                                onClick={() => createMedicalEmptyField("caregiver")}
                              >
                                <i className="icon-Plus2x icon-md text-green-primary"></i>
                              </button>
                            </div>
                            {activeuserInfo.medicalProfiles && activeuserInfo.medicalProfiles.caregiver.map(p => (
                              <>
                                {p.edit == true && (<PrimaryCaregiverForm
                                  item={p}
                                  handleFormInput={handleFormInput}
                                  handleOutsideClick={handleOutsideClick}
                                  checkValidEmail={checkValidEmail}
                                  checkValidPhone={checkValidPhone}
                                />)}
                                {p.edit == false && (
                                  <PrimaryCaregiverView 
                                    item={p}
                                    onEditCard={onEditCard}
                                    caregiverHover={caregiverHover}
                                  />
                                )}
                              </>
                            ))}
                          </div>
                        </div>
                      </div>
                      </div>
                      <div
                        className={openTab === 2 ? "block" : "hidden"}
                        id="link2"
                      >
                        {!activeuserInfo.documents && (
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
                        {activeuserInfo.documents && (
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
                            <button className="add-card-button" onClick={uploadDocument}>
                              <i className="icon-Plus2x icon-md text-green-primary"></i>
                            </button>
                          </div>
                          <div className="card card-medical mt-2">
                            {activeuserInfo && activeuserInfo.documents && activeuserInfo.documents.map(p => 
                              <><h6 className="block text-gray-primary text-xs font-normal mb-2 ml-4">
                                Title
                              </h6>
                              <div className="flex justify-between">
                                <div className="flex">
                                  {/* <img src="/img/allergies.svg" alt="" /> */}
                                  <a target="_blank" href={baseapiurl + 'uploads/' + p.filename}><h4 className="h4 text-green-primary mb-4">{p.title}</h4></a>
                                </div>
                                <div className="icon-wrapper">
                                  <button className="edit-card">
                                    <i className="icon-edit text-green-secondary text-xs mr-1"></i>
                                  </button>
                                  <button className="delete-card">
                                    <i className="icon-delete text-red-secondary text-xs"></i>
                                  </button>
                                </div>
                              </div></>
                            )}
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
                          <Profile 
                            activeuserInfo={activeuserInfo} 
                            user={user} 
                            handleOutsideClick={handleOutsideClick} 
                            handleFormInput={handleFormInput} 
                            disabledPhone={disabledPhone} 
                            enablePhone={enablePhone}
                            activeuser={activeuser}
                          />
                          <div className="fb-576">
                          <div className="card-wrapper w-full ml-4">
                            {user && activeuser && user.id == activeuser && (<div className="card p-24">
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
                            </div>)}
                            {/* {user && activeuser && user.id == activeuser && (<div className="wrapper w-full mt-4">
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
                            </div>)} */}
                            <div className="wrapper w-full mt-4">
                              <div className="card p-24">
                                <div className="relative flex flex-wrap items-stretch w-full mb-6">
                                  <h2 className="h2 text-2xl font-regular mb-4">
                                    Delete Profile
                                  </h2>
                                  {activeuserInfo.id == user.id && (<p className="p text-md font-regular mb-6 text-red-primary">
                                    All your and dependent profile information
                                    will be deleted. If the QR on your devices
                                    is scanned, no information will be visible
                                    to the medical service provider
                                  </p>)}
                                  {activeuserInfo.id != user.id && (<p className="p text-md font-regular mb-6 text-red-primary">
                                    All profile information
                                    will be deleted. If the QR on your devices
                                    is scanned, no information will be visible
                                    to the medical service provider
                                  </p>)}
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
