import React, {useState} from "react";

function ConnectDeviceModal({notConnected, closeModal, inputID,
    id, inputPin, pin, connectDevice, deviceConnected, connectSuccess}) {
  return (
    <>
      {!connectSuccess &&
        <div className="flex w-full justify-between connect-modal relative">
        <button className="absolute close-modal-button"
        onClick={closeModal}
        >
            <img src="/img/close.svg" alt="" />
        </button>
          <img src="./img/connect-device.svg" className="w-200 mt-72 ml-12" alt="" />
          <div className="card w-full ml-12 p-connect fb-407 relative">
            <h6 className="text-sm font-medium text-green-primary mb-1">Connect Device</h6>
            <h6 className="text-sm font-regular mb-4">Device ID and PIN can be found behind your device</h6>
            <form>

          <label
            className="block text-gray-primary text-xs font-normal my-3"
            >
            Device ID
            </label>
            <input
            type="text"
            className="w-full input-primary pl-2 focus:outline-none ph-text-sm py-4"
            placeholder="Enter 8 digit ID"
            onChange={inputID}
            value={id}
            />
          <label
            className="block text-gray-primary text-xs font-normal my-3"
            >
            Device PIN
            </label>
            <input
            type="text"
            className="w-full input-primary pl-2 focus:outline-none ph-text-sm py-4"
            placeholder="Enter 6 digit PIN"
            onChange={inputPin}
            value={pin}
            />
            <button 
            className="py-4 w-full text-md font-bold mt-10 bg-primary disabled:bg-inactive" 
            onClick={connectDevice}
            disabled={!deviceConnected}
            >Connect Device</button>
          </form>
          </div>

        </div>
          }
        {connectSuccess && 
          <div className="flex flex-col mw-423 w-full items-center connect-modal relative">
            <img src="/img/success.svg" className="w-200 mx-12 mb-2" alt="" />
            <h5 className="text-md font-semibold text-green-primary mb-2">Success!</h5>
            <p className="text-sm text-center px-4">Your medical device has been successfully connected to your profile!</p>
            <button 
            className="py-4 border-r-4 shadow-button w-full text-md font-bold mt-4 bg-primary" 
            onClick={closeModal}
            >Continue</button>
          </div>
        }
    </>
  );
}

export default ConnectDeviceModal;
