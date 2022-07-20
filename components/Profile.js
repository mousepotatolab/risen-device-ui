import React, { useState } from "react";
import Router, { withRouter, useRouter } from 'next/router'
import OutsideClickHandler from 'react-outside-click-handler';

function Profile({ activeuserInfo, user, handleOutsideClick, handleFormInput, disabledPhone, enablePhone,
    activeuser }) {

    return (
        <>
            {activeuserInfo &&
                (<div className="card-wrapper fb-423 h-full">
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
                                    className="w-full input-primary pl-2 py-16-px focus:outline-none"
                                    defaultValue={activeuserInfo.profile.firstName}
                                    placeholder="e.g. Dwight"
                                    onChange={handleFormInput("profile", "firstName", activeuserInfo)}
                                />
                                <label className="block text-xs font-regular font-grey my-settings">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full input-primary pl-2 py-16-px focus:outline-none"
                                    defaultValue={activeuserInfo.profile.lastName}
                                    placeholder="e.g. Schrute"
                                    onChange={handleFormInput("profile", "lastName", activeuserInfo)}
                                />
                                <label className="block text-xs font-regular font-grey my-settings">
                                    Date Of Birth
                                </label>
                                <input
                                    type="text"
                                    className="w-full input-primary pl-2   py-16-px focus:outline-none"
                                    defaultValue={activeuserInfo.profile.dob}
                                    placeholder="e.g. 11/11/1990"
                                    onChange={handleFormInput("profile", "dob", activeuserInfo)}
                                />
                                <label className="block text-xs font-regular font-grey my-settings">
                                    Gender
                                </label>
                                <select
                                    type="text"
                                    className="w-full input-primary pl-2 height-52-px py-16-px focus:outline-none"
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
                                    className="w-full input-primary pl-2 py-16-px focus:outline-none"
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
                                        className="w-full input-primary pl-2 py-16-px focus:outline-none"
                                        onChange={handleFormInput("profile", "phone", activeuserInfo)}
                                        defaultValue={activeuserInfo.phone}
                                        disabled={disabledPhone}
                                        placeholder="(916) 867-5309" /></>)}
                            </div>
                        </div>
                    </OutsideClickHandler>
                </div>
                )}
        </>
    );
}

export default Profile;
