import React, {useState} from "react";
// import ReactDOM from "react-dom";
// import Modal from "react-modal";
// layout for page

import Mobile from "layouts/Mobile.js";
// import { isToastIdValid } from "react-toastify/dist/utils";

export default function MobileLanding() {

    const [isShowing, setIsShowing] = useState(false);

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

    const filterCondition = () => {
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

      if(isCondition) {
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

    const toggle = () => {
        setIsShowing(!isShowing);
      };
    
      return (
          <>
         
    <div className="container flex flex-col">
      <div className="w-full mt-4">
        <div className="mobile-profile flex justify-between">
          <div className="profile-info">
            <img src="/img/primaryFull.svg" alt="" className="small-logo"/>
            <h6 className="h6 text-xs text-gray-primary mt-4 mb-1">Name</h6>
            <h1 className="h1 text-md font-bold text-black">Dwight Schrute</h1>
            <div className="flex w-full justify-evenly mb-6">
              <div className="flex flex-col">
              <h6 className="h6 text-xs text-gray-primary mt-4 mb-1">Age</h6>
              <h2 className="h2 text-md font-bold text-black">52</h2>
              </div>
              <div className="flex flex-col ml-40">
              <h6 className="h6 text-xs text-gray-primary mt-4 mb-1">DOB</h6>
              <h2 className="h2 text-md font-bold text-black">11/11/1970</h2>
              </div>
            </div>
            <h6 className="h6 text-xs text-gray-primary mb-2">Quick Filter</h6>
        
          </div>
          <div className="profile-settings">
            <img src="/img/dwight.jpeg" alt="" className="profile-settings mt-2" />
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
          <button className="add-card-button">
            <i className="icon-Plus2x icon-md text-green-primary"></i>
          </button>
        </div>
        <div className="card card-medical mt-2">
          <div className="flex justify-between">
            <label className="block text-gray-primary text-xs font-normal mb-3">
              Condition Name
            </label>
          </div>
          <h5 className="h5 text-green-tertiary font-medium">
            Diabetes
          </h5>
          <label className="block text-gray-primary text-xs font-normal my-3">
            Special Note
          </label>
          <p className="p text-sm text-black-primary">Type II diabetes</p>
        </div>
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
          <button className="add-card-button">
            <i className="icon-Plus2x icon-md text-green-primary"></i>
          </button>
        </div>
        <div className="card card-medical mt-2">
          <div className="flex justify-between">
            <label className="block text-gray-primary text-xs font-normal mb-3">
              Name
            </label>
          </div>
          <h5 className="h5 text-green-tertiary font-medium">
            Peanut
          </h5>
          <label className="block text-gray-primary text-xs font-normal my-3">
            Special Note
          </label>
          <p className="p text-sm text-black-primary">Allergic to Peanuts</p>
        </div>
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
          <button
            className="add-card-button"
          >
            <i className="icon-Plus2x icon-md text-green-primary"></i>
          </button>
        </div>
        <div className="card card-medical mt-2">
          <div className="flex justify-between">
            <label className="block text-gray-primary text-xs font-normal mb-3">
              Medicaiton Name
            </label>
          </div>
          <h5 className="h5 text-green-tertiary font-medium">
            Amoxycillan
          </h5>
          <label className="block text-gray-primary text-xs font-normal my-3">
            Special Note
          </label>
          <p className="p text-sm text-black-primary">
            This is a special note
          </p>
          <div className="flex items-center justify-between mt-3">
            <h3 className="text-xs text-gray-primary">
              Currently Taking
            </h3>
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
                </div>
              </div>
            </div>
          </div>
        </div>
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
          <button className="add-card-button">
            <i className="icon-Plus2x icon-md text-green-primary"></i>
          </button>
        </div>
        <div className="card card-medical mt-2">
          <div className="flex justify-between">
            <label className="block text-gray-primary text-xs font-normal mb-3">
              Name
            </label>
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
          <button className="add-card-button">
            <i className="icon-Plus2x icon-md text-green-primary"></i>
          </button>
        </div>
        <div className="card card-medical mt-2">
          <div className="flex justify-between">
            <label className="block text-gray-primary text-xs font-normal mb-3">
              Carrier Name
            </label>
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
          <button className="add-card-button">
            <i className="icon-Plus2x icon-md text-green-primary"></i>
          </button>
        </div>
        <div className="card card-medical mt-2">
          <div className="flex justify-between">
            <label className="block text-gray-primary text-xs font-normal mb-3">
              Hospital Name
            </label>
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
           <button className="add-card-button">
             <i className="icon-Plus2x icon-md text-green-primary"></i>
           </button>
         </div>
         <div className="card card-medical mt-2">
           <div className="flex justify-between">
             <label className="block text-gray-primary text-xs font-normal mb-3">
               Name
             </label>
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
      )}
     
    </div>
  </div>
  </>
      )
}

MobileLanding.layout = Mobile;
