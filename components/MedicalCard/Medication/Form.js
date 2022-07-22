import React, { useState } from "react";
import Router, { withRouter, useRouter } from 'next/router'
import OutsideClickHandler from 'react-outside-click-handler';

function MedicationForm({ item, handleOutsideClick, handleFormInput,
    toggleActiveMedication, toggleActiveDoseUnit, toggleActiveFrequency,
    activeMedication, activeFrequency, activeDoseUnit, dosageUnit, frequencyUnit
     }) {

    return (
        <>
            {item && (<OutsideClickHandler
                onOutsideClick={() => {
                    handleOutsideClick("medication", item)
                }}
            >
                <div className="card card-medical mt-4">
                    <label className="block text-gray-primary text-xs font-normal mb-3">
                        Medication Name
                    </label>
                    <input
                        type="text"
                        className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                        placeholder="e.g. Captopril"
                        defaultValue={item.name}
                        onChange={handleFormInput('medication', 'name', item)}
                        onKeyUp={handleFormInput('medication', 'name', item)}
                    />
                    <label className="block text-gray-primary text-xs font-normal my-3 mt-4">
                        Special Note
                    </label>
                    <input
                        type="text"
                        className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                        placeholder="e.g. Taking for high blood pressure"
                        defaultValue={item.special_note}
                        onChange={handleFormInput('medication', 'special_note', item)}
                        onKeyUp={handleFormInput('medication', 'special_note', item)}
                    />
                    <div className="flex items-center justify-between mt-3">
                        <h3 className="text-xs text-gray-primary">
                            Currently Taking
                        </h3>
                        <input
                            className="react-switch-checkbox"
                            id={`react-switch-new${item.id}`}
                            type="checkbox"
                            onClick={handleFormInput('medication', 'is_taking', item, true)}
                            defaultChecked={item.is_taking}
                        />
                        <label
                            className="react-switch-label"
                            htmlFor={`react-switch-new${item.id}`}
                        >
                            <span className={`react-switch-button`} />
                        </label>
                        {activeFrequency && (
                            <input
                            type="text"
                            className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                            placeholder="e.g. Taking for high blood pressure"
                            defaultValue={item.special_note}
                            onChange={handleFormInput('medication', 'special_note', item)}
                            onKeyUp={handleFormInput('medication', 'special_note', item)}
                        />
                        )}
                        
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
                                    <label className="block text-gray-primary text-xs font-normal my-3 mt-4">
                                        Dosage
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                                        placeholder="Unit"
                                        defaultValue={item.dosage}
                                        onClick={() => {
                                            toggleActiveDoseUnit(item)
                                        }}
                                    />
                                    <div
                                        // ref={popoverDropdownRefDosage}
                                        className={
                                            (activeDoseUnit == item.id
                                                ? "block "
                                                : "hidden ") +
                                            "bg-blueGray-500 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 bg-white absolute min-w-48"
                                        }
                                    >
                                        {dosageUnit.map(d => (<a
                                            className="cursor-pointer text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-primary"
                                            onClick={handleFormInput("medication", "dosage", item, false, d)}
                                        >
                                            {d}
                                        </a>))}

                                    </div>
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
                                        onChange={handleFormInput('medication', 'amount', item)}
                                        onKeyUp={handleFormInput('medication', 'amount', item)}
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
                                        onClick={() => {
                                            toggleActiveFrequency(item)
                                        }}
                                        defaultValue={item.frequency}
                                    />
                                    <div
                                        // ref={popoverDropdownRefFrequency}
                                        className={
                                            (activeFrequency == item.id
                                                ? "block "
                                                : "hidden ") +
                                            "bg-blueGray-500 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 bg-white absolute min-w-48"
                                        }
                                    >
                                        {frequencyUnit.map(d => (<a
                                            className="cursor-pointer text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-primary"
                                            onClick={handleFormInput("medication", "frequency", item, false, d)}
                                        >
                                            {d}
                                        </a>))}
                                    </div>
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
                                        onChange={handleFormInput('medication', 'times', item)}
                                        onKeyUp={handleFormInput('medication', 'times', item)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </OutsideClickHandler>)}
        </>
    );
}

export default MedicationForm;
