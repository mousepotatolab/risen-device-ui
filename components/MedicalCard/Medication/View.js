import React, { useEffect, useState } from "react";
import Router, { withRouter, useRouter } from 'next/router'

function MedicationView({ item, onEditCard, toggleActiveMedication, activeMedication }) {
    return (
        <>
            {item && (<div className="card card-medical mt-2">
                <div className="flex justify-between">
                    <label className="block text-gray-primary text-xs font-normal mb-3">
                        Medicaiton Name
                    </label>
                    <div className="icon-wrapper">
                        <button className="edit-card" onClick={() => onEditCard("medication", item)}>
                            <i className="icon-edit text-green-secondary text-xxs mr-1"></i>
                        </button>
                        <button className="delete-card">
                            <i className="icon-delete text-red-secondary text-xxs"></i>
                        </button>
                    </div>
                </div>
                <h5 className="h5 text-green-tertiary font-medium">
                    {item.name}
                </h5>
                <label className="block text-gray-primary text-xs font-normal my-3">
                    Special Note
                </label>
                <p className="p text-sm">
                    {item.special_note}
                </p>
                <div className="flex items-center justify-between mt-3">
                    <h3 className="text-xs text-gray-primary">
                        Currently Taking
                    </h3>
                    <input
                        className="react-switch-checkbox"
                        id={`react-switch-new`}
                        type="checkbox"
                        defaultChecked={item.is_taking}
                        disabled={true}
                    />
                    <label
                        className="react-switch-label"
                        htmlFor={`react-switch-new`}
                    >
                        <span className={`react-switch-button`} />
                    </label>
                </div>
                <button
                    style={{
                        display: activeMedication.indexOf(item.id) < 0 ? "block" : "none",
                    }}
                    className="add-medication text-green-primary text-xs mt-4"
                    onClick={() => toggleActiveMedication(item, "active")}
                >
                    Add More Details
                    <i className="icon-Plus2x relative top-1 ml-1 icon-xs text-green-primary"></i>
                </button>
                <button
                    style={{
                        display: activeMedication.indexOf(item.id) > -1 ? "block" : "none",
                    }}
                    className="add-medication text-green-primary text-xs mt-4"
                    onClick={() => toggleActiveMedication(item, "remove")}
                >
                    Show Less
                    <i className="icon-Plus2x relative top-1 ml-1 icon-xs text-green-primary"></i>
                </button>
                <div
                    style={{
                        display: activeMedication.indexOf(item.id) > -1 ? "block" : "none",
                    }}
                >
                    <div className="container">
                        <div className="flex flex-wrap">
                        <div className="w-1/2 pr-2">
                                <label className="block text-gray-primary text-xs font-normal my-3">
                                    Dosage
                                </label>
                                <input
                                    type="text"
                                    className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                                    placeholder="Unit"
                                    defaultValue={item.dosage}
                                    disabled={true}
                                />
                                {/* <div
                                    // ref={popoverDropdownRefDosage}
                                    className={
                                        (dropdownDosageShow
                                            ? "block "
                                            : "hidden ") +
                                        "bg-blueGray-500 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 bg-white absolute min-w-48"
                                    }
                                >
                                    <option
                                        href="#pablo"
                                        className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-primary"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        Action
                                    </option>
                                    <option
                                        href="#pablo"
                                        className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-primary"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        Another action
                                    </option>
                                    <option
                                        href="#pablo"
                                        className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-primary"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        Something else here
                                    </option>
                                    <option
                                        href="#pablo"
                                        className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-primary"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        Seprated link
                                    </option>
                                </div> */}
                            </div>
                            <div className="w-1/2 pl-2">
                                <label className="block text-gray-primary text-xs font-normal my-3">
                                    Amount
                                </label>
                                <input
                                    type="text"
                                    className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                                    placeholder="e.g 200"
                                    defaultValue={item.amount}
                                    disabled={true}
                                />
                            </div>

                            
                        </div>
                    </div>
                    <div className="container">
                        <div className="flex flex-wrap">
                            <div className="w-1/2 pr-2">
                                <label className="block text-gray-primary text-xs font-normal my-3">
                                    Frequency
                                </label>
                                <input
                                    type="text"
                                    className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                                    placeholder="e.g. Daily"
                                    defaultValue={item.frequency}
                                    disabled={true}
                                // onClick={() => {
                                //     dropdownFrequencyShow
                                //         ? closeFrequencyPopover()
                                //         : openFrequencyPopover();
                                // }}
                                />
                                {/* <div
                                    // ref={popoverDropdownRefFrequency}
                                    className={
                                        (dropdownFrequencyShow
                                            ? "block "
                                            : "hidden ") +
                                        "bg-blueGray-500 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 bg-white absolute min-w-48"
                                    }
                                >
                                    <option
                                        href="#pablo"
                                        className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-primary"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        Action
                                    </option>
                                    <option
                                        href="#pablo"
                                        className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-primary"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        Another action
                                    </option>
                                    <option
                                        href="#pablo"
                                        className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-primary"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        Something else here
                                    </option>
                                    <option
                                        href="#pablo"
                                        className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-primary"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        Seprated link
                                    </option>
                                </div> */}
                            </div>
                            <div className="w-1/2 pl-2">
                                <label className="block text-gray-primary text-xs font-normal my-3">
                                    Times
                                </label>
                                <input
                                    type="text"
                                    className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                                    placeholder="e.g. Twice"
                                    defaultValue={item.times}
                                    disabled={true}
                                />
                            </div>


                        </div>
                    </div>
                </div>
            </div>)}
        </>
    );
}

export default MedicationView;
