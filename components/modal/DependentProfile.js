import React, {useState} from "react";

function DependentProfileModal({notDependent, closeDependentModal, inputIDDependent, inputPinDependent, handleFirstDependent, inputDobDependent, handleLastDependent, handleGenderDependent,
handlePhoneDependent, handleEmailDependent, dependentSuccess, dependentProfileValid,
firstNameDependent, lastNameDependent, dobDependent, genderDependent, emailDependent, phoneDependent, idDependent, pinDependent, createDependent}) {

      const [hasDevice, deviceActivate] = React.useState(false);

      const toggleActiveDependent = () => {
        if (hasDevice) {
          deviceActivate(false)
        }
        if (!hasDevice) {
          deviceActivate(true)
        }
      }

     

  return (
    <>
      {notDependent &&
        <div className="flex w-full flex-col justify-between connect-modal relative">
        <button className="absolute close-modal-button"
        onClick={closeDependentModal}
        >
            <img src="/img/close.svg" alt="" />
        </button>
          <div className="card w-full p-connect relative">
            <div className="flex justify-between">
            <div className="wrapper">

            <h6 className="text-sm font-medium text-green-primary mb-1">Create New Profile</h6>
            <h6 className="text-sm font-regular mb-4">You can add medical profile of your family members</h6>
            </div>
            <div className="wrapper flex">
              <h6 className="h6 text-green-primary mr-4">I have a device</h6>
            <input
              className="react-switch-checkbox"
              id={`react-switch-new-dependent`}
              type="checkbox"
              onClick={toggleActiveDependent}
            />
            <label
              className="react-switch-label"
              htmlFor={`react-switch-new-dependent`}
            >
              <span className={`react-switch-button`} />
            </label>
            </div>
            </div>
            <form>
          <div className="flex">

          <div className="flex mr-8 flex-col">
          <label
            className="block text-gray-primary text-xs font-normal my-3"
            >
            First Name
            </label>
            <input
            type="text"
            className="w-343 input-primary pl-2 focus:outline-none ph-text-sm"
            placeholder="e.g. Dwight"
            onChange={handleFirstDependent}
            value={firstNameDependent}
            />
          <label
            className="block text-gray-primary text-xs font-normal my-3"
            >
            Date Of Birth
            </label>
            <input
            type="text"
            className="w-343 input-primary pl-2 focus:outline-none ph-text-sm"
            placeholder="11/12/1980"
            onChange={inputDobDependent}
            value={dobDependent}
            />
          <label
            className="block text-gray-primary text-xs font-normal my-3"
            >
            Email Address
            </label>
            <input
            type="text"
            className="w-343 input-primary pl-2 focus:outline-none ph-text-sm"
            placeholder="e.g. dwight@dundermifflin.com"
            onChange={handleEmailDependent}
            value={emailDependent}
            />
            </div>
            <div className="flex flex-col">
          <label
            className="block text-gray-primary text-xs font-normal my-3"
            >
            Last Name
            </label>
            <input
            type="text"
            className="w-343 input-primary pl-2 focus:outline-none ph-text-sm"
            placeholder="e.g. Schrute"
            onChange={handleLastDependent}
            value={lastNameDependent}
            />
          <label
            className="block text-gray-primary text-xs font-normal my-3"
            >
            Gender
            </label>
            <select
              type="text"
              className="w-full input-primary pl-2 py-16-px focus:outline-none"
              onChange={handleGenderDependent}
              value={genderDependent}
              placeholder="e.g."
            >
              <option>Female</option>
              <option>Male</option>
              <option>Non-binary</option>
              <option>N/A</option>
            </select>
          <label
            className="block text-gray-primary text-xs font-normal my-3"
            >
            Phone Number
            </label>
            <input
            type="text"
            className="w-343 input-primary pl-2 focus:outline-none ph-text-sm"
            placeholder="e.g. 123 456 7890"
            onChange={handlePhoneDependent}
            value={phoneDependent}
            />
            </div>
            </div>
            {hasDevice && (
              <div className="fade-in-dashboard">
              
            <div className="mt-10">
            <h6 className="text-sm font-medium text-green-primary mb-1">Device will be connected to this profile</h6>
            <h6 className="text-sm font-regular mb-4">Device ID and PIN can be found on the back of your device</h6>
            </div>
           
              <div className="flex">
              <div className="w-full">
  
            <label
              className="block text-gray-primary text-xs font-normal my-3"
              >
              Device ID
              </label>
              <input
              type="text"
              className="w-343 input-primary pl-2 focus:outline-none ph-text-sm"
              placeholder="Enter 8 digit ID"
              onChange={inputIDDependent}
              value={idDependent}
              />
              </div>
              <div className="w-full">
  
            <label
              className="block text-gray-primary text-xs font-normal my-3"
              >
              Device PIN
              </label>
              <input
              type="text"
              className="w-343 input-primary pl-2 focus:outline-none ph-text-sm"
              placeholder="Enter 6 digit PIN"
              onChange={inputPinDependent}
              value={pinDependent}
              />
              </div>
              </div>
              </div>
            )}
            
            <button 
            className="py-4  w-343 text-md font-bold mt-10 bg-primary disabled:bg-inactive relative center" 
            onClick={createDependent}
            disabled={dependentProfileValid}
            >Create Profile</button>
          </form>
          </div>

        </div>
          }
        {dependentSuccess && 
          <div className="flex flex-col mw-423 w-full items-center connect-modal relative">
            <img src="/img/connectSuccess.png" className="w-200 mx-12 mb-2" alt="" />
            <h5 className="text-md font-semibold text-green-primary mb-2">Success!</h5>
            <p className="text-sm text-center px-4">Your medical profile has been successfully created!</p>
            <button 
            className="py-4 border-r-4 shadow-button w-full text-md font-bold mt-4 bg-primary" 
            onClick={closeDependentModal}
            >Continue</button>
          </div>
        }
    </>
  );
}

export default DependentProfileModal;
