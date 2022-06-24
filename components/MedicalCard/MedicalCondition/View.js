import React, { useEffect, useState } from "react";
import Router, { withRouter, useRouter } from 'next/router'

function MedicalConditionView({ item, onEditCard }) {
    useEffect(() => {
        console.log(item, "qq")
    }, [])
    return (
        <>
            {item && (<div className="card card-medical mt-2">
                <div className="flex justify-between">
                    <label className="block text-gray-primary text-xs font-normal mb-3">
                        Condition Name
                    </label>
                    <div className="icon-wrapper">
                        <button className="edit-card" onClick={() => onEditCard("medicalcondition", item)}>
                            <i className="icon-edit text-green-secondary text-xxs mr-1"></i>
                        </button>
                        <button className="delete-card">
                            <i className="icon-delete text-red-secondary text-xxs"></i>
                        </button>
                    </div>
                </div>
                <h5 className="h5 text-green-tertiary font-medium">
                    {item.condition_name}
                </h5>
                <label className="block text-gray-primary text-xs font-normal my-3">
                    Special Note
                </label>
                <p className="p text-sm">{item.special_note}</p>
            </div>)}
        </>
    );
}

export default MedicalConditionView;
