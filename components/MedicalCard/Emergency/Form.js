import React, { useState } from "react";
import Router, { withRouter, useRouter } from 'next/router'
import OutsideClickHandler from 'react-outside-click-handler';

function EmergencyForm({ item, handleOutsideClick, handleFormInput, checkValidEmail, checkValidPhone }) {

    return (
        <>
            {item && (<OutsideClickHandler
                onOutsideClick={() => {
                    handleOutsideClick("emergency", item)
                }}
            >
                <div className="card card-medical mt-4">
                    <label className="block text-gray-primary text-xs font-normal mb-3">
                        Name
                    </label>
                    <input
                        type="text"
                        className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                        placeholder="Michael Scott"
                        defaultValue={item.name}
                        onChange={handleFormInput('emergency', 'name', item)}
                        onKeyUp={handleFormInput('emergency', 'name', item)}
                    />
                    <label className="block text-gray-primary text-xs font-normal my-3 mt-4">
                        Email Address
                    </label>
                    <input
                        type="text"
                        className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                        placeholder="e.g. michael@dunder.com"
                        defaultValue={item.email}
                        onBlur={checkValidEmail}
                        onChange={handleFormInput('emergency', 'email', item)}
                        onKeyUp={handleFormInput('emergency', 'email', item)}
                    />
                    <label className="block text-gray-primary text-xs font-normal my-3 mt-4">
                        Phone
                    </label>
                    <input
                        type="text"
                        className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                        placeholder="e.g. (123) 456-7890"
                        defaultValue={item.phone}
                        onBlur={checkValidPhone}
                        onChange={handleFormInput('emergency', 'phone', item)}
                        onKeyUp={handleFormInput('emergency', 'phone', item)}
                    />
                </div>
            </OutsideClickHandler>)}
        </>
    );
}

export default EmergencyForm;
