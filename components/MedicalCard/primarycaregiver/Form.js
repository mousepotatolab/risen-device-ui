import React, { useState } from "react";
import Router, { withRouter, useRouter } from 'next/router'
import OutsideClickHandler from 'react-outside-click-handler';

function PrimaryCaregiverForm({ item, handleOutsideClick, handleFormInput, checkValidEmail, checkValidPhone }) {

    return (
        <>
            {item && (<OutsideClickHandler
                onOutsideClick={() => {
                    handleOutsideClick("caregiver", item)
                }}
            >
                <div className="card card-medical mt-4">
                    <label className="block text-gray-primary text-xs font-normal mb-3">
                        Name
                    </label>
                    <input
                        type="text"
                        className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                        placeholder="e.g. Jim Halpert"
                        defaultValue={item.name}
                        onChange={handleFormInput("caregiver", "name",  item)}
                    />
                    <label className="block text-gray-primary text-xs font-normal my-3">
                        Email Address
                    </label>
                    <input
                        type="text"
                        className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                        placeholder="e.g. jim@dunder.com"
                        defaultValue={item.email}
                        onBlur={checkValidEmail}
                        onChange={handleFormInput("caregiver", "email",  item)}
                        onKeyUp={handleFormInput("caregiver", "email",  item)}
                    />
                    <label className="block text-gray-primary text-xs font-normal my-3">
                        Phone
                    </label>
                    <input
                        type="text"
                        className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                        placeholder="e.g.(916) 835-8551"
                        defaultValue={item.phone}
                        onBlur={checkValidPhone}
                        onChange={handleFormInput("caregiver", "phone",  item)}
                        onKeyUp={handleFormInput("caregiver", "phone",  item)}
                    />
                </div>
            </OutsideClickHandler>)}
        </>
    );
}

export default PrimaryCaregiverForm;
