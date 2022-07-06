import React from "react";

function ConnectedDevicesModal({closeDeviceModal, toggleActiveDeviceButton}) {
  return (
    <>
    <div className="flex flex-col w-570 p-40">
    <button className="absolute close-modal-button"
        onClick={closeDeviceModal}
        >
            <img src="/img/close.svg" alt="" />
        </button>
        <h5 className="h5 text-green-primary font-semibold text-sm mb-2">All Connected Devices</h5>
        <h6 className="h6 text-xs text-red-primary mb-6">If you temporarily disable a device, no information can be retrieved after QR scan. If you delete a device, it will be permanently deleted.</h6>
        <div className="flex flex-wrap">
            {/* <div className="card-wrapper p-0 mr-4 w-full mw-232">
                <div className="title-wrapper flex justify-between items-center">
               
                </div>
                <div className="card card-medical mt-2">
                <div className="flex justify-between">
                    <label className="block text-gray-primary text-xs font-normal mb-3">
                    Device ID
                    </label>
                    <div className="icon-wrapper">
                    
                    <button className="delete-card">
                        <i className="icon-delete text-red-secondary text-xxs"></i>
                    </button>
                    </div>
                </div>
                <h5 className="h5 text-green-tertiary font-medium">
                    12345678
                </h5>
                <label className="block text-gray-primary text-xs font-normal my-3">
                    Device PIN
                </label>
                <h5 className="h5 text-green-tertiary font-medium">
                    123456
                </h5>
                <div className="flex items-center mt-6">
                <h6 className="h6 text-xs font-grey">Temporarily Disable Device</h6>
                <input
                className="react-switch-checkbox"
                id={`react-switch-new-settings`}
                type="checkbox"
                onClick={toggleActiveDeviceButton}
                />
                <label
                className="react-switch-label"
                htmlFor={`react-switch-new-settings`}
                >
                <span className={`react-switch-button`} />
                </label>
                </div>
                </div>
            </div>
            <div className="card-wrapper p-0 w-full mw-232">
                <div className="title-wrapper flex justify-between items-center">
               
                </div>
                <div className="card card-medical mt-2">
                <div className="flex justify-between">
                    <label className="block text-gray-primary text-xs font-normal mb-3">
                    Device ID
                    </label>
                    <div className="icon-wrapper">
                    
                    <button className="delete-card">
                        <i className="icon-delete text-red-secondary text-xxs"></i>
                    </button>
                    </div>
                </div>
                <h5 className="h5 text-green-tertiary font-medium">
                    12345678
                </h5>
                <label className="block text-gray-primary text-xs font-normal my-3">
                    Device PIN
                </label>
                <h5 className="h5 text-green-tertiary font-medium">
                    123456
                </h5>
                <div className="flex items-center mt-6">
                <h6 className="h6 text-xs font-grey">Temporarily Disable Device</h6>
                <input
                className="react-switch-checkbox"
                id={`react-switch-new-settings`}
                type="checkbox"
                onClick={toggleActiveDeviceButton}
                />
                <label
                className="react-switch-label"
                htmlFor={`react-switch-new-settings`}
                >
                <span className={`react-switch-button`} />
                </label>
                </div>
                </div>
            </div> */}
            <div className="card-wrapper p-0 w-full mw-232">
                <div className="title-wrapper flex justify-between items-center">
               
                </div>
                <div className="card card-medical mt-2">
                <div className="flex justify-between">
                    <label className="block text-gray-primary text-xs font-normal mb-3">
                    Device ID
                    </label>
                    <div className="icon-wrapper">
                    
                    <button className="delete-card">
                        <i className="icon-delete text-red-secondary text-xxs"></i>
                    </button>
                    </div>
                </div>
                <h5 className="h5 text-green-tertiary font-medium">
                    12345678
                </h5>
                <label className="block text-gray-primary text-xs font-normal my-3">
                    Device PIN
                </label>
                <h5 className="h5 text-green-tertiary font-medium">
                    123456
                </h5>
                <div className="flex items-center mt-6 justify-between">
                <h6 className="h6 text-xs font-grey">Temporarily Disable Device</h6>
                <input
                className="react-switch-checkbox"
                id={`react-switch-new-device`}
                type="checkbox"
                onClick={toggleActiveDeviceButton}
                />
                <label
                className="react-switch-label"
                htmlFor={`react-switch-new-device`}
                >
                <span className={`react-switch-button`} />
                </label>
                </div>
                </div>
            </div>
        </div>

    </div>
    </>
  );
}

export default ConnectedDevicesModal;