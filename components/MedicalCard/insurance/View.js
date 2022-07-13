import React, { useEffect, useState } from "react";
import Router, { withRouter, useRouter } from 'next/router'

function InsuranceView({ item, onEditCard, insuranceHover, openDeleteModalItem }) {
    return (
        <>
            {item && (<div className="card card-medical mt-4">
                <div className="flex justify-between">
                    <label className="block text-gray-primary text-xs font-normal mb-3">
                        Carrier Name
                    </label>
                    <div className="icon-wrapper">
                        <button className="edit-card" onClick={() => onEditCard("insurance", item)}>
                            {insuranceHover && (
                                <i className="icon-edit fade-in-icons text-green-secondary text-base mr-1"></i>
                            )}
                        </button>
                        <button onClick={() => openDeleteModalItem(item, "insurance")} className="delete-card">
                            {insuranceHover && (
                                <i className="icon-delete fade-in-icons text-red-secondary text-base"></i>
                            )}
                        </button>
                    </div>
                </div>
                <h5 className="h5 text-green-tertiary font-medium">
                    {item.carrier}
                </h5>
                <label className="block text-gray-primary text-xs font-normal my-3">
                    Insurance Company Name
                </label>
                <h5 className="h5 text-green-tertiary font-medium">
                    {item.company}
                </h5>
                <label className="block text-gray-primary text-xs font-normal my-3">
                    Plan No.
                </label>
                <h5 className="h5 text-green-tertiary font-medium">
                    {item.plan}
                </h5>
                <label className="block text-gray-primary text-xs font-normal my-3">
                    Policy No.
                </label>
                <h5 className="h5 text-green-tertiary font-medium">
                    {item.policy}
                </h5>
                <label className="block text-gray-primary text-xs font-normal my-3">
                    Group No.
                </label>
                <h5 className="h5 text-green-tertiary font-medium">
                    {item.group}
                </h5>
            </div>)}
        </>
    );
}

export default InsuranceView;
