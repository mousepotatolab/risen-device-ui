import React, { useState } from "react";
import Router, { withRouter, useRouter } from 'next/router'
import OutsideClickHandler from 'react-outside-click-handler';

function EmergencyForm({ item, handleOutsideClick, handleFormInput }) {

    return (
        <>
            {item && (<OutsideClickHandler
                onOutsideClick={() => {
                    handleOutsideClick("emergency", item)
                }}
            >
                <div className="card card-medical mt-2">
                    <label className="block text-gray-primary text-xs font-normal mb-3">
                        Name
                    </label>
                    <input
                        type="text"
                        className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                        placeholder="Michael Scott"
                        defaultValue={item.name}
                        onChange={handleFormInput('emergency', 'name', item)}
                    />
                    <label className="block text-gray-primary text-xs font-normal my-3">
                        Email Address
                    </label>
                    <input
                        type="text"
                        className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                        placeholder="e.g. michael@dunder.com"
                        defaultValue={item.email}
                        onChange={handleFormInput('emergency', 'email', item)}
                    />
                    <label className="block text-gray-primary text-xs font-normal my-3">
                        Phone
                    </label>
                    <input
                        type="text"
                        className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                        placeholder="e.g. (123) 456-7890"
                        defaultValue={item.phone}
                        onChange={handleFormInput('emergency', 'phone', item)}
                    />
                </div>
            </OutsideClickHandler>)}
        </>
    );
}

export default EmergencyForm;
