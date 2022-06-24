import React, { useState } from "react";
import Router, { withRouter, useRouter } from 'next/router'
import OutsideClickHandler from 'react-outside-click-handler';

function MedicalConditionForm({ item, handleOutsideClick, handleFormInput }) {
    
    return (
        <>
            {item && (<OutsideClickHandler
                onOutsideClick={() => {
                    handleOutsideClick("medicalcondition", item)
                }}
            >
                <div className="card card-medical mt-2">
                    <label className="block text-gray-primary text-xs font-normal mb-3">
                        Condition Name
                    </label>
                    <input
                        type="text"
                        className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                        placeholder="e.g. Diabetes"
                        defaultValue={item.condition_name}
                        onChange={handleFormInput("medicalcondition", "condition_name", item)}
                    />
                    <label className="block text-gray-primary text-xs font-normal my-3">
                        Special Note
                    </label>
                    <input
                        type="text"
                        className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                        placeholder="e.g. Taking insuline daily"
                        defaultValue={item.special_note}
                        onChange={handleFormInput("medicalcondition", "special_note", item)}
                    />
                </div>
            </OutsideClickHandler>)}
        </>
    );
}

export default MedicalConditionForm;
