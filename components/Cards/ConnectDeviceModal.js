import React, {useState, useEffect} from "react";
import Modal from 'react-modal';

// components


export default function ConnectDeviceModal() {

  // Connect Device Modal 
  const customStyles = {
    content: {
      top: '66px',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translateX(-50%)',
      backgroundColor: 'rgb(247, 247, 247)',
      padding: '0',
      overflow: 'visible',
      maxWidth: '843px',
    },
    overlay: {
      backgroundColor: 'rgba(0,0,0,.5)'
    }
  };
  Modal.setAppElement('#__next');

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }

  const [deviceConnected, isConnectFormValid] = React.useState(false)
    const [connectSuccess, isConnected] = React.useState(false)
    const [notConnected, isDeviceConnected] = React.useState(true)
    const [pin, setPin] = React.useState("")
    const [id, setID] = React.useState("")
    const [validID, isIDValid] = React.useState(false)
    const [validPin, isPinValid] = React.useState(false)
    let [connectButton, setConnect] = useState(true)

    const inputPin = (event) => {
      setPin(event.target.value)
      console.log(pin.length)
      if (event.target.value.length === 6) {
        isPinValid(true)
        if (validID) {
          isConnectFormValid(true)
        }
      }
    }
    const inputID = (event) => {
      setID(event.target.value)
      console.log(id.length)
      if (event.target.value.length === 8) {
        isIDValid(true)
        if (validPin) {
          isConnectFormValid(true)
        }
      }
    }

    const connectDevice = () => {
      isConnected(true)
      isDeviceConnected(false)
      setConnect(false)
    }


  return (
    <>
       <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        // className="Modal"
        // overlayClassName="Overlay"
      >
        {notConnected &&
        <div className="flex w-full justify-between connect-modal relative">
        <button className="absolute close-modal-button"
        onClick={closeModal}
        >
            <img src="/img/close.svg" alt="" />
        </button>
          <img src="./img/connectDevice.png" className="w-200 mt-72 ml-12" alt="" />
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
            className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
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
            className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
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
            <img src="/img/connectSuccess.png" className="w-200 mx-12 mb-2" alt="" />
            <h5 className="text-md font-semibold text-green-primary mb-2">Success!</h5>
            <p className="text-sm text-center px-4">Your medical device has been successfully connected to your profile!</p>
            <button 
            className="py-4 border-r-4 shadow-button w-full text-md font-bold mt-4 bg-primary" 
            onClick={closeModal}
            >Continue</button>
          </div>
        }
      </Modal>
    </>
  );
}
