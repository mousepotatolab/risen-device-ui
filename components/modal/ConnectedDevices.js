import React, { useState } from "react";
import Modal from "react-modal";
import DeleteModal from "./Delete";

function ConnectedDevicesModal({ closeDeviceModal, toggleActiveDeviceButton, activeuserInfo,
    deleteDevice, setDeleteDeviceItem, deleteDeviceModalIsOpen,
    setDeleteDeviceModalIsOpen }) {
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

    const closeSuccessModal = () => {
        setDeleteDeviceModalIsOpen(false)
    }

    const openDeleteModal = (item) => {
        setDeleteDeviceItem(item);
        setDeleteDeviceModalIsOpen(true)
    }


    return (
        <>
        <Modal
            isOpen={deleteDeviceModalIsOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeSuccessModal}
            style={customStyles}
            contentLabel="Delete Item Modal"
            // className="Modal"
            // overlayClassName="Overlay"
        >
            <DeleteModal
                closeDeleteModal={closeSuccessModal}
                handleDelete={deleteDevice}
            />
        </Modal>
            <div className="flex flex-col w-590 p-40">
                <button className="absolute close-modal-button"
                    onClick={closeDeviceModal}
                >
                    <img src="/img/close.svg" alt="" />
                </button>
                <h5 className="h5 text-green-primary font-semibold text-sm mb-2">All Connected Devices</h5>
                <h6 className="h6 text-xs text-red-primary mb-6">If you temporarily disable a device, no information can be retrieved after QR scan. If you delete a device, it will be permanently deleted.</h6>
                <div className="flex flex-wrap">
                    <div className="card-wrapper flex p-0 w-full">
                        <div className="title-wrapper flex justify-between items-center">

                        </div>
                        {activeuserInfo && activeuserInfo.devices.map(p => (<div className="card mr-4 fb-237 card-medical mt-2">
                            <div className="flex justify-between">
                                <label className="block text-gray-primary text-xs font-normal mb-3">
                                    Device ID
                                </label>
                                <div className="icon-wrapper">

                                    <button onClick={() => openDeleteModal(p)} className="delete-card">
                                        <i className="icon-delete text-red-secondary text-md"></i>
                                    </button>
                                </div>
                            </div>
                            <h5 className="h5 text-green-tertiary font-medium">
                                {p.deviceID}
                            </h5>
                            <label className="block text-gray-primary text-xs font-normal my-3">
                                Device PIN
                            </label>
                            <h5 className="h5 text-green-tertiary font-medium">
                                {p.devicePin}
                            </h5>
                            <div className="flex items-center mt-6 justify-between">
                                <h6 className="h6 text-xs font-grey">Temporarily Disable Device</h6>
                                <input
                                    className="react-switch-checkbox"
                                    id={`react-switch-new-device${p.id}`}
                                    type="checkbox"
                                    onClick={() => toggleActiveDeviceButton(p)}
                                    checked={p.isdisable}
                                />
                                <label
                                    className="react-switch-label"
                                    htmlFor={`react-switch-new-device${p.id}`}
                                >
                                    <span className={`react-switch-button`} />
                                </label>
                            </div>
                        </div>))}
                    </div>
                </div>

            </div>
        </>
    );
}

export default ConnectedDevicesModal;