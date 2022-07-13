import React, { useEffect, useState } from "react";
import Router, { withRouter, useRouter } from 'next/router'

function PrimaryCaregiverView({ item, onEditCard, caregiverHover, openDeleteModalItem }) {
    return (
        <>
            {item && (
                <div className="card card-medical mt-4">
                    <div className="flex justify-between">
                        <label className="block text-gray-primary text-xs font-normal mb-3">
                            Name
                        </label>
                        <div className="icon-wrapper">
                            <button className="edit-card" onClick={() => onEditCard("caregiver", item)}>
                                {caregiverHover && (
                                    <i className="icon-edit fade-in-icons text-green-secondary text-base mr-1"></i>
                                )}
                            </button>
                            <button onClick={() => openDeleteModalItem(item, "caregiver")} className="delete-card">
                                {caregiverHover && (
                                    <i className="icon-delete fade-in-icons text-red-secondary text-base"></i>
                                )}
                            </button>
                        </div>
                    </div>
                    <h5 className="h5 text-green-tertiary font-medium">
                        {item.name}
                    </h5>

                    <label className="block text-gray-primary text-xs font-normal my-3">
                        Email Address
                    </label>
                    <h5 className="h5 text-green-tertiary font-medium">
                        {item.email}
                    </h5>

                    <label className="block text-gray-primary text-xs font-normal my-3">
                        Phone
                    </label>
                    <h5 className="h5 text-green-tertiary font-medium">
                        {item.phone}
                    </h5>
                </div>)}
        </>
    );
}

export default PrimaryCaregiverView;
