import React, { useEffect, useState } from "react";
import Router, { withRouter, useRouter } from 'next/router'

function MedicationView({ item, onEditCard, toggleActiveMedication, activeMedication, medicationHover}) {
    return (
        <>
            {item && (<div className="card card-medical mt-4">
                <div className="flex justify-between">
                    <label className="block text-gray-primary text-xs font-normal mb-3">
                        Medicaiton Name
                    </label>

                        <div className="icon-wrapper">
                        <button className="edit-card" onClick={() => onEditCard("medication", item)}>
                    {medicationHover && (
                            <i className="icon-edit fade-in-icons text-green-secondary text-base mr-1"></i>
                        )}
                        </button>
                        <button className="delete-card">
                        {medicationHover && (
                            <i className="icon-delete fade-in-icons text-red-secondary text-base"></i>
                            )}
                        </button>
                    </div>
                </div>
                <h5 className="h5 text-green-tertiary font-medium">
                    {item.name}
                </h5>
                <label className="block text-gray-primary text-xs font-normal my-3 mt-4">
                    Special Note
                </label>
                <p className="p text-sm">
                    {item.special_note || '.'}
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
                                <label className="block text-gray-primary text-xs font-normal my-3 mt-4">
                                    Dosage
                                </label>
                                <h5 className="h5 text-green-tertiary font-medium">
                                    {item.dosage}
                                </h5>
                            </div>
                            <div className="w-1/2 pl-2">
                                <label className="block text-gray-primary text-xs font-normal my-3 mt-4">
                                    Amount
                                </label>
                                <h5 className="h5 text-green-tertiary font-medium">
                                    {item.amount}
                                </h5>
                            </div>

                            
                        </div>
                    </div>
                    <div className="container">
                        <div className="flex flex-wrap">
                            <div className="w-1/2 pr-2">
                                <label className="block text-gray-primary text-xs font-normal my-3 mt-4">
                                    Frequency
                                </label>
                                <h5 className="h5 text-green-tertiary font-medium">
                                    {item.frequency}
                                </h5>
                            </div>
                            <div className="w-1/2 pl-2">
                                <label className="block text-gray-primary text-xs font-normal my-3 mt-4">
                                    Times
                                </label>
                                <h5 className="h5 text-green-tertiary font-medium">
                                    {item.times}
                                </h5>
                            </div>


                        </div>
                    </div>
                </div>
            </div>)}
        </>
    );
}

export default MedicationView;
