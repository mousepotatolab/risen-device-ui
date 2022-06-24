import React, { useState } from "react";
import Router, { withRouter, useRouter } from 'next/router'
import OutsideClickHandler from 'react-outside-click-handler';

function AllergiesForm({ item, handleOutsideClick, handleFormInput }) {

    return (
        <>
            {item && (<OutsideClickHandler
                onOutsideClick={() => {
                    handleOutsideClick("allergies", item)
                }}
            >
                <div className="card card-medical mt-2">
                    <label className="block text-gray-primary text-xs font-normal mb-3">
                        Name
                    </label>
                    <input
                        type="text"
                        className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                        placeholder="e.g. Amoxicillin"
                        defaultValue={item.name}
                        onChange={handleFormInput('allergies', 'name', item)}
                    />
                    <label className="block text-gray-primary text-xs font-normal my-3">
                        Special Note
                    </label>
                    <input
                        type="text"
                        className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                        placeholder="e.g. Allergic to Amoxicillin"
                        defaultValue={item.special_note}
                        onChange={handleFormInput('allergies', 'special_note', item)}
                    />
                </div>
            </OutsideClickHandler>)}
        </>
    );
}

export default AllergiesForm;
