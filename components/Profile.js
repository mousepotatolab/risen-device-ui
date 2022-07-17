import React, { useState } from "react";
import Router, { withRouter, useRouter } from 'next/router'
import OutsideClickHandler from 'react-outside-click-handler';
import Modal from "react-modal";
import CropImg from "./image/CropImg";
import ImgPreview from "./image/ImgPreview";
import { updateProfileImage, deleteProfileImageData } from "../services/UserService";
import { baseapiurl } from "services/config";
import DeleteModal from "./modal/Delete";

function Profile({ activeuserInfo, user, handleOutsideClick, handleFormInput, disabledPhone,
    enablePhone, activeuser, setActiveuserInfo, setUser }) {
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

    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [cropModal, setCropModal] = useState(false);
    const [croppedImage, setCroppedImage] = useState(null);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [rotation, setRotation] = useState(0);
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    const [imgData, setImgData] = useState(null);
    const onUploadImage = (e) => {
       if (e.target.files.length == 1) {
        setImgData(e.target.files[0])
       }
       if (e.target.files[0]) {
        const reader = new FileReader();
        reader.addEventListener('load', () => {
          setImgData(reader.result);
          setCropModal(true);
        });
        reader.readAsDataURL(e.target.files[0]);
      }
    }

    const updateImage = async () => {
        let blob = await fetch(croppedImage).then(r => r.blob());
        let metadata = {
            type: 'image/jpeg'
        };
        let file = new File([blob], "file.jpg", metadata);
        const formdata = new FormData();
        formdata.append("image", file);
        formdata.append("userid", activeuserInfo.id);
        updateProfileImage(formdata).then(
            result => {
                if ("filename" in result.data && result.data.filename) {
                    setCropModal(false);
                    if (user.id != activeuserInfo.id) {
                        const found = user.child.find(p => p.id == activeuserInfo.id);
                        const index = user.child.indexOf(found);
                        user.child[index].image = result.data.filename;
                    }
                    activeuserInfo.profile.image = result.data.filename;
                    setActiveuserInfo({...activeuserInfo})
                    user.key = new Date().getMilliseconds()
                    setUser({ ...user });
                    setCroppedImage(null);
                }
            }
        )
    }

    const closeDeleteModal = () => {
        setDeleteModalOpen(false)
    }

    const openDeleteModal = (item) => {
        setDeleteModalOpen(true)
    }

    const deleteProfileImage = () => {
        deleteProfileImageData(activeuserInfo.id).then(
            (result) => {
                if (user.id != activeuserInfo.id) {
                    const found = user.child.find(p => p.id == activeuserInfo.id);
                    const index = user.child.indexOf(found);
                    user.child[index].image = result.filename;
                }
                activeuserInfo.profile.image = result.filename;
                setActiveuserInfo({...activeuserInfo})
                user.key = new Date().getMilliseconds()
                setUser({ ...user });
                closeDeleteModal();
            }
        )
    }

    return (
        <>
            {activeuserInfo &&
                (<div className="card-wrapper fb-423 h-full">
                     <Modal
                        isOpen={deleteModalOpen}
                        // onAfterOpen={afterOpenModal}
                        onRequestClose={closeDeleteModal}
                        style={customStyles}
                        contentLabel="Delete Item Modal"
                        // className="Modal"
                        // overlayClassName="Overlay"
                    >
                        <DeleteModal
                            closeDeleteModal={closeDeleteModal}
                            handleDelete={deleteProfileImage}
                        />
                    </Modal>
                    <OutsideClickHandler
                        onOutsideClick={() => {
                            handleOutsideClick("profile", activeuserInfo)
                        }}
                    >
                        <div className="card p-24">
                            <div className="relative flex flex-wrap items-stretch w-full mb-3">
                                <div className="profile-wrapper flex items-center">
                                    <img
                                        className="profile-settings mr-4"
                                        src={baseapiurl + 'uploads/' + activeuserInfo.profile.image}
                                        alt=""
                                    />
                                    <button onClick={() => {
                                        document.getElementById("profileimage").click();
                                    }} className="image-button active:bg-primary mh-40 mr-3">
                                        Upload new image
                                    </button>
                                    {activeuserInfo.profile.image != 'noimage.png' && (<button onClick={openDeleteModal} className="delete-image-button mh-40">
                                        Delete
                                    </button>)}
                                </div>
                                <label className="block text-sm font-regular font-grey my-settings">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full input-primary pl-2 py-13 focus:outline-none"
                                    defaultValue={activeuserInfo.profile.firstName}
                                    placeholder="e.g. Dwight"
                                    onChange={handleFormInput("profile", "firstName", activeuserInfo)}
                                />
                                <label className="block text-xs font-regular font-grey my-settings">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full input-primary pl-2 py-13 focus:outline-none"
                                    defaultValue={activeuserInfo.profile.lastName}
                                    placeholder="e.g. Schrute"
                                    onChange={handleFormInput("profile", "lastName", activeuserInfo)}
                                />
                                <label className="block text-xs font-regular font-grey my-settings">
                                    Date Of Birth
                                </label>
                                <input
                                    type="text"
                                    className="w-full input-primary pl-2 py-13 focus:outline-none"
                                    defaultValue={activeuserInfo.profile.dob}
                                    placeholder="e.g. 11/11/1990"
                                    onChange={handleFormInput("profile", "dob", activeuserInfo)}
                                />
                                <label className="block text-xs font-regular font-grey my-settings">
                                    Gender
                                </label>
                                <select
                                    type="text"
                                    className="w-full input-primary pl-2 py-16-px focus:outline-none"
                                    defaultValue={activeuserInfo.profile.gender}
                                    placeholder="e.g."
                                    onChange={handleFormInput("profile", "gender", activeuserInfo)}
                                >
                                    <option value="Female">Female</option>
                                    <option value="Male">Male</option>
                                    <option value="Non-binary">Non-binary</option>
                                    <option value="N/A">N/A</option>
                                </select>

                                <label className="block text-xs font-regular font-grey my-settings">
                                    Email
                                </label>
                                <input
                                    type="text"
                                    className="w-full input-primary pl-2 py-13 focus:outline-none"
                                    onChange={handleFormInput("profile", "email", activeuserInfo)}
                                    defaultValue={activeuserInfo.profile.email}
                                    placeholder="e.g. dwight@dundermifflin.com"
                                />
                                {user && activeuser && user.id == activeuser && (<>
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
                                        onChange={handleFormInput("profile", "phone", activeuserInfo)}
                                        defaultValue={activeuserInfo.phone}
                                        disabled={disabledPhone}
                                        placeholder="(916) 867-5309" /></>)}
                            </div>
                        </div>
                    </OutsideClickHandler>
                    <input type="file" 
                    onChange={onUploadImage}
                    id="profileimage" style={{visibility: "hidden"}}/>
                    <Modal
                        isOpen={cropModal}
                        // onAfterOpen={afterOpenModal}
                        // onRequestClose={closeSuccessModal}
                        style={customStyles}
                        contentLabel="Delete Item Modal"
                        // className="Modal"
                        // overlayClassName="Overlay"
                    >
                        <div className='image-crop'>
                            {!croppedImage && (<CropImg
                                imgData={imgData}
                                setCroppedImage={setCroppedImage}
                                crop={crop} 
                                rotation={rotation} 
                                zoom={zoom} 
                                setCrop={setCrop}
                                setRotation={setRotation} 
                                setZoom={setZoom} 
                                setCroppedAreaPixels={setCroppedAreaPixels}
                                setCropModal={setCropModal}
                                croppedAreaPixels={croppedAreaPixels}
                            />)}

                            {croppedImage && 
                            <ImgPreview 
                                setCropModal={setCropModal}
                                croppedImage={croppedImage}
                                setCroppedImage={setCroppedImage}
                                updateImage={updateImage}
                            />}
                        </div>
                    </Modal>
                </div>
                )}
        </>
    );
}

export default Profile;
