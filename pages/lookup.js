import React, {useEffect, useState} from "react";
import { useRouter } from 'next/router'
import { lookupDevice } from "../services/UserService";
// import ReactDOM from "react-dom";
// import Modal from "react-modal";
// layout for page



import Mobile from "layouts/Mobile.js";
import { baseapiurl } from "services/config";
// import { isToastIdValid } from "react-toastify/dist/utils";

export default function MobileLanding() {

    const [isShowing, setIsShowing] = useState(false);
    const [key, setKey] = useState(1);

    const [condition, conditionFilter] = useState(true)
    const [isCondition, conditionBool] = useState(false)
    
    const [allergies, allergiesFilter] = useState(true)
    const [isAllergies, allergiesBool] = useState(false)

    const [medication, medicationFilter] = useState(true)
    const [isMedication, medicationBool] = useState(false)

    const [contact, contactFilter] = useState(true)
    const [isContact, contactBool] = useState(false)

    const [insurance, insuranceFilter] = useState(true)
    const [isInsurance, insuranceBool] = useState(false)

    const [hospital, hospitalFilter] = useState(true)
    const [isHospital, hospitalBool] = useState(false)

    const [caregiver,caregiverFilter] = useState(true)
    const [isCaregiver,caregiverBool] = useState(false)

    const [document ,documentFilter] = useState(true)
    const [isDocument ,documentBool] = useState(false)

    
    const [enterPin ,isPinValid] = useState(false)
    let [pin, setPIN] = useState("")
    let [id, setID] = useState("")
    let mockPIN = "123456"
    let [valid, isValid] = useState("")
    let [data, setData] = useState(null)

    const router = useRouter();
    
    useEffect(() => {
      if (router.query.deviceID) {
        setID(router.query.deviceID);
      }
    }, [router.isReady])
    
    const validatePIN = (event) => {
      setPIN(event.target.value)

      if (event.target.value.length === 6) {
        isValid(true)
      }
    }
    const clearModal = () => {
      if (!(id && pin)) {
        return false;
      }

      lookupDevice({id, pin}).then(
        (result) => {
          if ("data" in result) {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
            isPinValid(true)
            setData({...result.data});
          }
        }
      )
     
    }

    let [isFiltered, filtered] = useState(false)

    const filterCondition = () => {
      filtered(true)
      conditionFilter(true)
      conditionBool(true)
      allergiesFilter(false)
      medicationFilter(false)
      contactFilter(false)
      insuranceFilter(false)
      hospitalFilter(false)
      caregiverFilter(false)
      documentFilter(false)

      allergiesBool(false)
      medicationBool(false)
      insuranceBool(false)
      contactBool(false)
      caregiverBool(false)
      hospitalBool(false)
      documentBool(false)

      if(isCondition) {
        filtered(false)
        conditionBool(false)
        conditionFilter(true)
        allergiesFilter(true)
        medicationFilter(true)
        contactFilter(true)
        insuranceFilter(true)
        hospitalFilter(true)
        caregiverFilter(true)
        documentFilter(true)
      }
    }
    const filterAllergies = () => {
      filtered(true)
      conditionFilter(false)
      allergiesFilter(true)
      allergiesBool(true)
      medicationFilter(false)
      contactFilter(false)
      insuranceFilter(false)
      hospitalFilter(false)
      caregiverFilter(false)
      documentFilter(false)

      conditionBool(false)
      medicationBool(false)
      insuranceBool(false)
      contactBool(false)
      caregiverBool(false)
      hospitalBool(false)
      documentBool(false)

      if(isAllergies) {
        filtered(false)
        allergiesBool(false)
        conditionFilter(true)
        allergiesFilter(true)
        medicationFilter(true)
        contactFilter(true)
        insuranceFilter(true)
        hospitalFilter(true)
        caregiverFilter(true)
        documentFilter(true)
      }
    }
    const filterMedication = () => {
      filtered(true)
      conditionFilter(false)
      allergiesFilter(false)
      medicationFilter(true)
      medicationBool(true)
      contactFilter(false)
      insuranceFilter(false)
      hospitalFilter(false)
      caregiverFilter(false)
      documentFilter(false)

      conditionBool(false)
      allergiesBool(false)
      insuranceBool(false)
      contactBool(false)
      caregiverBool(false)
      hospitalBool(false)
      documentBool(false)

      if(isMedication) {
        filtered(false)
        medicationBool(false)
        conditionFilter(true)
        allergiesFilter(true)
        medicationFilter(true)
        contactFilter(true)
        insuranceFilter(true)
        hospitalFilter(true)
        caregiverFilter(true)
        documentFilter(true)
      }
    }
    const filterContact = () => {
      filtered(true)
      conditionFilter(false)
      allergiesFilter(false)
      medicationFilter(false)
      contactFilter(true)
      contactBool(true)
      insuranceFilter(false)
      hospitalFilter(false)
      caregiverFilter(false)
      documentFilter(false)

      conditionBool(false)
      allergiesBool(false)
      medicationBool(false)
      insuranceBool(false)
      caregiverBool(false)
      hospitalBool(false)
      documentBool(false)

      if(isContact) {
        filtered(false)
        contactBool(false)
        conditionFilter(true)
        allergiesFilter(true)
        medicationFilter(true)
        contactFilter(true)
        insuranceFilter(true)
        hospitalFilter(true)
        caregiverFilter(true)
        documentFilter(true)
      }
    }
    const filterInsurance = () => {
      filtered(true)
      conditionFilter(false)
      allergiesFilter(false)
      medicationFilter(false)
      contactFilter(false)
      insuranceFilter(true)
      insuranceBool(true)
      hospitalFilter(false)
      caregiverFilter(false)
      documentFilter(false)

      conditionBool(false)
      allergiesBool(false)
      medicationBool(false)
      contactBool(false)
      caregiverBool(false)
      hospitalBool(false)
      documentBool(false)

      if(isInsurance) {
        filtered(false)
        insuranceBool(false)
        conditionFilter(true)
        allergiesFilter(true)
        medicationFilter(true)
        contactFilter(true)
        insuranceFilter(true)
        hospitalFilter(true)
        caregiverFilter(true)
        documentFilter(true)
      }
    }
    const filterHospital = () => {
      filtered(true)
      conditionFilter(false)
      allergiesFilter(false)
      medicationFilter(false)
      contactFilter(false)
      insuranceFilter(false)
      hospitalFilter(true)
      hospitalBool(true)
      caregiverFilter(false)
      documentFilter(false)

      conditionBool(false)
      allergiesBool(false)
      medicationBool(false)
      insuranceBool(false)
      contactBool(false)
      caregiverBool(false)
      documentBool(false)

      if(isHospital) {
        filtered(false)
        hospitalBool(false)
        conditionFilter(true)
        allergiesFilter(true)
        medicationFilter(true)
        contactFilter(true)
        insuranceFilter(true)
        hospitalFilter(true)
        caregiverFilter(true)
        documentFilter(true)
      }
    }
    const filterCaregiver = () => {
      filtered(true)
      conditionFilter(false)
      allergiesFilter(false)
      medicationFilter(false)
      contactFilter(false)
      insuranceFilter(false)
      hospitalFilter(false)
      caregiverFilter(true)
      caregiverBool(true)
      documentFilter(false)

      conditionBool(false)
      allergiesBool(false)
      medicationBool(false)
      insuranceBool(false)
      contactBool(false)
      hospitalBool(false)
      documentBool(false)

      if(isCaregiver) {
        filtered(false)
        caregiverBool(false)
        conditionFilter(true)
        allergiesFilter(true)
        medicationFilter(true)
        contactFilter(true)
        insuranceFilter(true)
        hospitalFilter(true)
        caregiverFilter(true)
        documentFilter(true)
      }
    }
    const filterDocuments = () => {
      filtered(true)
      conditionFilter(false)
      allergiesFilter(false)
      medicationFilter(false)
      contactFilter(false)
      insuranceFilter(false)
      hospitalFilter(false)
      caregiverFilter(false)
      documentFilter(true)
      documentBool(true)
      conditionBool(false)
      allergiesBool(false)
      medicationBool(false)
      insuranceBool(false)
      contactBool(false)
      caregiverBool(false)
      hospitalBool(false)

      if(isDocument) {
        filtered(false)
        documentBool(false)
        conditionFilter(true)
        allergiesFilter(true)
        medicationFilter(true)
        contactFilter(true)
        insuranceFilter(true)
        hospitalFilter(true)
        caregiverFilter(true)
        documentFilter(true)
      }
    }

    const toggle = (p) => {
         p.isShowing = !p.isShowing
         setKey(new Date().valueOf())
      };
    
      return (
          <>
         {!enterPin && (
        <div className="w-full h-full fixed z-50 min-h-full left-0 top-0 bg-grey-primary">
          <div className="bg-white h-full-mobile flex flex-col items-center my-4 mx-4 px-4">
          <img src="/img/primaryFull.svg" alt="Risen Logo" className="medium-logo mt-8"/>
          <div className="relative mt-16">
            <div className="before-circle-green">
              <img src="/img/heart-rate.svg" alt="Heart Beat Icon" className=" pin-heart" />
            </div>
          </div>
          <h6 className="h6 text-green-primary font-medium mt-20">Please Enter PIN To Access Profile</h6>
          <h6 className="h6 text-black font-regular mt-2 text-sm">PIN can be found behind the medical device</h6>
          <div className="relative">

            <label
              className="block text-blueGray-600 text-xs font-regular self-start mb-2 mt-10"
              htmlFor="grid-password"
              >
              Enter PIN
            </label>
            <input
              type="tel"
              className="w-full input-primary pl-4 py-13 focus:outline-none relative mb-6"
              // onChange={setPhoneNum}
              onKeyUp={validatePIN}
              // onChange={() => {}}
              // value={phone}
              placeholder="Enter 6 digit number"
              />
              {valid &&
            <span style={{top: '72px', right: '9px'}} className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 bg-transparent text-lg rounded text-base items-center justify-center w-8 pl-2 py-1">
              <i className="icon-check text-green-active disabled:display-none"></i>
            </span>
            }
            <button
              className="bg-primary text-white active:bg-tertiary disabled:bg-secondary text-sm font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
              type="button"
              disabled={!valid}
              onClick={clearModal}
              >
              View Profile
            </button>
          </div>
          </div>
          
        </div>
      )}
      {enterPin && data && (
         <div key={key} className="fade-in-dashboard">

      
         <div className="container flex flex-col">
           
           <div className="w-full mt-4">
             <div className="mobile-profile flex justify-between">
               <div className="profile-info">
                 <img src="/img/primaryFull.svg" alt="" className="small-logo"/>
                 <h6 className="h6 text-xs text-gray-primary mt-4 mb-1">Name</h6>
                 <h1 className="h1 text-md font-bold text-black">{data.profile.firstName + ' ' + data.profile.lastName}</h1>
                 <div className="flex w-full mb-6">
                   <div className="flex flex-col mr-6">
                   <h6 className="h6 text-xs text-gray-primary mt-4 mb-1">Age</h6>
                   <h2 className="h2 text-md font-bold text-black">{data.profile.age}</h2>
                   </div>
                   <div className="flex flex-col ml-40">
                   <h6 className="h6 text-xs text-gray-primary mt-4 mb-1">DOB</h6>
                   <h2 className="h2 text-md font-bold text-black">{data.profile.dob}</h2>
                   </div>
                 </div>
                 {!isFiltered && (
                   <h6 className="h6 text-xs text-gray-primary mb-2">Quick Filter</h6>
                 )}
                 {isFiltered && (
                   <h6 className="h6 text-xs text-gray-primary mb-2">Quick Filter (Tap again to view all information)</h6>
                 )}
             
               </div>
               <div className="profile-mobile">
                 <img src={baseapiurl + "/download/" + data.profile.image} alt="" className="profile-mobile mt-2" />
               </div>
             </div>
             <div className="filter-wrapper flex w-full justify-between mb-6">
             <button className="filter-button"
             onClick={filterCondition}
             >
             {condition && (
                <img
                src="/img/medical-condition.svg"
                alt=""
                className="filter-img"
              />
             )}
             {!condition && (
                <img
                src="/img/medical-conditionInactive.svg"
                alt=""
                className="filter-img"
              />
             )}
     
             </button>
             <button className="filter-button"
             onClick={filterAllergies}
             >
             {allergies && (
                 <img
                 src="/img/allergies.svg"
                 alt=""
                 className="filter-img"
               />
             )}
             {!allergies && (
                 <img
                 src="/img/allergiesInactive.svg"
                 alt=""
                 className="filter-img"
               />
             )}
           
             </button>
             <button className="filter-button"
             onClick={filterMedication}
             >
             {medication && (
                <img
                src="/img/medication.svg"
                alt=""
                className="filter-img"
              />
             )}
             {!medication && (
                <img
                src="/img/medicationInactive.svg"
                alt=""
                className="filter-img"
              />
             )}
            
             </button>
             <button className="filter-button"
             onClick={filterContact}
             >
             {contact && (
                 <img
                 src="/img/contact.svg"
                 alt=""
                 className="filter-img"
               />
             )}
             {!contact && (
                 <img
                 src="/img/contactInactive.svg"
                 alt=""
                 className="filter-img"
               />
             )}
           
             </button>
             <button className="filter-button"
             onClick={filterInsurance}
             >
             {insurance && (
               <img
               src="/img/insurance.svg"
               alt=""
               className="filter-img"
             />
             )}  
             {!insurance && (
               <img
               src="/img/insuranceInactive.svg"
               alt=""
               className="filter-img"
             />
             )}  
            
             </button>
             <button className="filter-button"
             onClick={filterHospital}
             >
             {hospital && (
                 <img
                 src="/img/hospital.svg"
                 alt=""
                 className="filter-img"
               />
             )}
             {!hospital && (
                 <img
                 src="/img/hospitalInactive.svg"
                 alt=""
                 className="filter-img"
               />
             )}
           
             </button>
             <button className="filter-button"
             onClick={filterCaregiver}
             >
             {caregiver && (
                <img
                src="/img/care-giver.svg"
                alt=""
                className="filter-img"
              />
             )}
             {!caregiver && (
                <img
                src="/img/care-giverInactive.svg"
                alt=""
                className="filter-img"
              />
             )}
            
             </button>
             <button className="filter-button"
             onClick={filterDocuments}
             >
             {document && (
                 <img
                 src="/img/document.svg"
                 alt=""
                 className="filter-img"
               />
             )}
             {!document && (
                 <img
                 src="/img/documentInactive.svg"
                 alt=""
                 className="filter-img"
               />
             )}
     
             </button>
              
             </div>
           </div>
         <div className="w-full">
           {condition && (
             <div className="card-wrapper">
             <div className="title-wrapper flex justify-between items-center">
               <div className="flex items-center">
                 <img
                   src="/img/medical-condition.svg"
                   alt=""
                 />
                 <h3 className="h3 font-medium ml-2 text-black-primary">
                   Medical Condition
                 </h3>
               </div>
             </div>
             {data.medicalProfiles && data.medicalProfiles.medicalcondition.map(p => (
             <div className="card card-medical mt-2">
               <div className="flex justify-between">
                 <label className="block text-gray-primary text-xs font-normal mb-3">
                   Condition Name
                 </label>
               </div>
               <h5 className="h5 text-green-tertiary font-medium">
                 {p.condition_name}
               </h5>
               <label className="block text-gray-primary text-xs font-normal my-3">
                 Special Note
               </label>
               <p className="p text-sm text-black-primary">{p.special_note || '.'}</p>
             </div>))}
           </div>
           )}
           
         </div>
         <div className="w-full">
           {allergies && (
             <div className="card-wrapper">
             <div className="title-wrapper flex justify-between items-center">
               <div className="flex items-center">
                 <img src="/img/allergies.svg" alt="" />
                 <h3 className="h3 font-medium ml-2 text-black-primary">
                   Allergies
                 </h3>
               </div>
             </div>
             {data.medicalProfiles && data.medicalProfiles.allergies.map(p => (
             <div className="card card-medical mt-2">
               <div className="flex justify-between">
                 <label className="block text-gray-primary text-xs font-normal mb-3">
                   Name
                 </label>
               </div>
               <h5 className="h5 text-green-tertiary font-medium">
                 {p.name}
               </h5>
               <label className="block text-gray-primary text-xs font-normal my-3">
                 Special Note
               </label>
               <p className="p text-sm text-black-primary">{p.special_note || '.'}</p>
             </div>))}
           </div>
           )}
           
         </div>
         <div className="w-full">
           {medication && (
             <div className="card-wrapper">
             <div className="title-wrapper flex justify-between items-center">
               <div className="flex items-center">
                 <img src="/img/medication.svg" alt="" />
                 <h3 className="h3 font-medium ml-2 text-black-primary">
                   Medication
                 </h3>
               </div>
               
             </div>
             {data.medicalProfiles && data.medicalProfiles.medication.map(p => (
             <div className="card card-medical mt-2">
               <div className="flex justify-between">
                 <label className="block text-gray-primary text-xs font-normal mb-3">
                   Medicaiton Name
                 </label>
               </div>
               <h5 className="h5 text-green-tertiary font-medium">
                 {p.name}
               </h5>
               <label className="block text-gray-primary text-xs font-normal my-3">
                 Special Note
               </label>
               <p className="p text-sm text-black-primary">
                 {p.special_note || '.'}
               </p>
               {p.is_taking && (<div className="flex items-center justify-between mt-3">
                 <h3 className="text-xs text-gray-primary">
                   Currently Taking
                 </h3>
               </div>)}
               <button
                 style={{
                   display: !p.isShowing ? "block" : "none",
                 }}
                 className="add-medication text-green-primary text-xs mt-4"
                 onClick={() => toggle(p)}
               >
                 Show More Details
                 <i className="icon-Plus2x relative top-1 ml-1 icon-xs text-green-primary"></i>
               </button>
               <button
                 style={{
                   display: p.isShowing ? "block" : "none",
                 }}
                 className="add-medication text-green-primary text-xs mt-4"
                 onClick={() => toggle(p)}
               >
                 Show Less
                 <i className="icon-Plus2x relative top-1 ml-1 icon-xs text-green-primary"></i>
               </button>
               <div
                 style={{
                   display: p.isShowing ? "block" : "none",
                 }}
               >
                 <div className="container">
                   <div className="flex flex-wrap">
                   <div className="w-1/2 pr-2">
                       <label className="block text-gray-primary text-xs font-normal my-3">
                         Dosage
                       </label>
                       <h6 className=" text-black-primary text-sm">{p.dosage}</h6>
                     </div>
                     <div className="w-1/2 pl-2">
                       <label className="block text-gray-primary text-xs font-normal my-3">
                         Amount
                       </label>
                       <h6 className=" text-black-primary text-sm">{p.amount}</h6>
                     </div>
     
                    
                   </div>
                 </div>
                 <div className="container">
                   <div className="flex flex-wrap">
                   <div className="w-1/2 pr-2">
                       <label className="block text-gray-primary text-xs font-normal my-3">
                         Frequency
                       </label>
                       <h6 className=" text-black-primary text-sm">{p.frequency}</h6>
                     </div>
                     <div className="w-1/2 pl-2">
                       <label className="block text-gray-primary text-xs font-normal my-3">
                         Times
                       </label>
                       <h6 className=" text-black-primary text-sm">{p.times}</h6>
                     </div>                
                   </div>
                 </div>
               </div>
             </div>))}
           </div>
           )}
           
         </div>
         <div className="w-full">
           {contact && (
             <div className="card-wrapper">
             <div className="title-wrapper flex justify-between items-center">
               <div className="flex items-center">
                 <img src="/img/contact.svg" alt="" />
                 <h3 className="h3 font-medium ml-2 text-black-primary">
                   Emergency Contact
                 </h3>
               </div>
             </div>
             {data.medicalProfiles && data.medicalProfiles.emergency.map(p => (
             <div className="card card-medical mt-2">
               <div className="flex justify-between">
                 <label className="block text-gray-primary text-xs font-normal mb-3">
                   Name
                 </label>
               </div>
               <h5 className="h5 text-green-tertiary font-medium">
                 {p.name}
               </h5>
               <label className="block text-gray-primary text-xs font-normal my-3">
                 Email Adddress
               </label>
               <h5 className="h5 text-green-tertiary font-medium">
                 {p.email}
               </h5>
               <label className="block text-gray-primary text-xs font-normal my-3">
                 Phone
               </label>
               <h5 className="h5 text-green-tertiary font-medium">
                 {p.phone}
               </h5>
             </div>))}
           </div>
           )}
           {insurance && (
             <div className="card-wrapper">
             <div className="title-wrapper flex justify-between items-center">
               <div className="flex items-center">
                 <img src="/img/insurance.svg" alt="" />
                 <h3 className="h3 font-medium ml-2 text-black-primary">
                   Insurance
                 </h3>
               </div>
               
             </div>
             {data.medicalProfiles && data.medicalProfiles.insurance.map(p => (
             <div className="card card-medical mt-2">
               <div className="flex justify-between">
                 <label className="block text-gray-primary text-xs font-normal mb-3">
                   Carrier Name
                 </label>
               </div>
               <h5 className="h5 text-green-tertiary font-medium">
                 {p.carrier}
               </h5>
               <label className="block text-gray-primary text-xs font-normal my-3">
                 Insurance Company Name
               </label>
               <h5 className="h5 text-green-tertiary font-medium">
                 {p.company}
               </h5>
               <label className="block text-gray-primary text-xs font-normal my-3">
                 Plan No.
               </label>
               <h5 className="h5 text-green-tertiary font-medium">
                 {p.plan}
               </h5>
               <label className="block text-gray-primary text-xs font-normal my-3">
                 Policy No.
               </label>
               <h5 className="h5 text-green-tertiary font-medium">
                 {p.policy}
               </h5>
               <label className="block text-gray-primary text-xs font-normal my-3">
                 Group No.
               </label>
               <h5 className="h5 text-green-tertiary font-medium">
                 {p.group}
               </h5>
             </div>))}
           </div>
           )}
           {hospital && (
             <div className="card-wrapper">
             <div className="title-wrapper flex justify-between items-center">
               <div className="flex items-center">
                 <img src="/img/hospital.svg" alt="" />
                 <h3 className="h3 font-medium ml-2 text-black-primary">
                   Preferred Hospital
                 </h3>
               </div>
             </div>
             {data.medicalProfiles && data.medicalProfiles.hospital.map(p => (
             <div className="card card-medical mt-2">
               <div className="flex justify-between">
                 <label className="block text-gray-primary text-xs font-normal mb-3">
                   Hospital Name
                 </label>
               </div>
               <h5 className="h5 text-green-tertiary font-medium">
                 {p.name}
               </h5>
               <label className="block text-gray-primary text-xs font-normal my-3">
                 Address
               </label>
               <h5 className="h5 text-green-tertiary font-medium">
                 {p.address}
               </h5>
               <label className="block text-gray-primary text-xs font-normal my-3">
                 Phone
               </label>
               <h5 className="h5 text-green-tertiary font-medium">
                 {p.phone}
               </h5>
             </div>))}
           </div>
           )}
           {caregiver && (
              <div className="card-wrapper">
              <div className="title-wrapper flex justify-between items-center">
                <div className="flex items-center">
                  <img src="/img/care-giver.svg" alt="" />
                  <h3 className="h3 font-medium ml-2 text-black-primary">
                    Primary Caregiver
                  </h3>
                </div>
              </div>
              {data.medicalProfiles && data.medicalProfiles.caregiver.map(p => (
              <div className="card card-medical mt-2">
                <div className="flex justify-between">
                  <label className="block text-gray-primary text-xs font-normal mb-3">
                    Name
                  </label>
                </div>
                <h5 className="h5 text-green-tertiary font-medium">
                  {p.name}
                </h5>
      
                <label className="block text-gray-primary text-xs font-normal my-3">
                  Email Address
                </label>
                <h5 className="h5 text-green-tertiary font-medium">
                  {p.email}
                </h5>
      
                <label className="block text-gray-primary text-xs font-normal my-3">
                  Phone
                </label>
                <h5 className="h5 text-green-tertiary font-medium">
                   {p.phone}
                </h5>
              </div>))}
            </div>
           )}
            {document && (
               <div className="card-wrapper">
               <div className="title-wrapper flex justify-between items-center">
                 <div className="flex items-center">
                   <img
                     src="/img/medical-condition.svg"
                     alt=""
                   />
                   <h3 className="h3 font-medium ml-2 text-black-primary">
                     Documents
                   </h3>
                 </div>
                 {/* <button className="add-card-button" onClick={uploadDocument}>
                   <i className="icon-Plus2x icon-md text-green-primary"></i>
                 </button> */}
               </div>
               <div className="card card-medical mt-2">
                 {/* {activeuserInfo && activeuserInfo.documents && activeuserInfo.documents.map(p =>  */}
                   <>
                   <h6 className="block text-gray-primary text-xs font-normal mb-2">
                     Title
                   </h6>
                   <div className="flex justify-between">
                     <div className="flex items-start">
                       <img className="relative top-4px mr-2" src="/img/attachmentmobile.svg" alt="" />
                     <h4 className="h4 text-green-primary mb-4">Recent ECG</h4>
                     </div>
                   </div>
                   <h6 className="block text-gray-primary text-xs font-normal mb-2">
                     Title
                   </h6>
                   <div className="flex justify-between">
                     <div className="flex items-start">
                       <img className="relative top-4px mr-2" src="/img/attachmentmobile.svg" alt="" />
                     <h4 className="h4 text-green-primary mb-4">Recent ECG</h4>
                     </div>
                   </div>
                   </>
                
               </div>
             </div>
            )}
         </div>
       </div>
       </div>
      )}
     
  </>
      )
}

MobileLanding.layout = Mobile;
