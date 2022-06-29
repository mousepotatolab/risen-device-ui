import React, { useState } from "react";
import Router, { withRouter, useRouter } from 'next/router'
import OutsideClickHandler from 'react-outside-click-handler';

function InsuranceForm({ item, handleOutsideClick, handleFormInput }) {

    return (
        <>
            {item && (<OutsideClickHandler
                onOutsideClick={() => {
                    handleOutsideClick("insurance", item)
                }}
            >
                <div className="card card-medical mt-4">
                    <label className="block text-gray-primary text-xs font-normal mb-3">
                        Carrier Name
                    </label>
                    <input
                        type="text"
                        className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                        placeholder="e.g. Kaiser Permanente"
                        defaultValue={item.carrier}
                        onChange={handleFormInput("insurance", "carrier",  item)}
                        onKeyUp={handleFormInput("insurance", "carrier",  item)}
                    />
                    <label className="block text-gray-primary text-xs font-normal my-3">
                        Insurance Company Name
                    </label>
                    <input
                        type="text"
                        className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                        placeholder="e.g. Kaiser Permanente"
                        defaultValue={item.company}
                        onChange={handleFormInput("insurance", "company",  item)}
                        onKeyUp={handleFormInput("insurance", "company",  item)}
                    />
                    <label className="block text-gray-primary text-xs font-normal my-3">
                        Plan No.
                    </label>
                    <input
                        type="text"
                        className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                        placeholder="e.g. 26346346"
                        defaultValue={item.plan}
                        onChange={handleFormInput("insurance", "plan",  item)}
                        onKeyUp={handleFormInput("insurance", "plan",  item)}
                    />
                    <label className="block text-gray-primary text-xs font-normal my-3">
                        Policy No.
                    </label>
                    <input
                        type="text"
                        className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                        placeholder="e.g. 23452345"
                        defaultValue={item.policy}
                        onChange={handleFormInput("insurance", "policy",  item)}
                        onKeyUp={handleFormInput("insurance", "policy",  item)}
                    />
                    <label className="block text-gray-primary text-xs font-normal my-3">
                        Group No.
                    </label>
                    <input
                        type="text"
                        className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                        placeholder="e.g. 2345346"
                        defaultValue={item.group}
                        onChange={handleFormInput("insurance", "group",  item)}
                        onKeyUp={handleFormInput("insurance", "group",  item)}
                    />
                </div>
            </OutsideClickHandler>)}
        </>
    );
}

export default InsuranceForm;
