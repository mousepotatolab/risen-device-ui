import React, { useEffect, useState } from "react";
import Router, { withRouter, useRouter } from 'next/router'

function AllergiesView({ item, onEditCard, allergiesHover, openDeleteModalItem }) {
    return (
        <>
            {item && (<div className="card card-medical mt-4">
                <div className="flex justify-between">
                    <label className="block text-gray-primary text-xs font-normal mb-3">
                        Name
                    </label>
                    <div className="icon-wrapper">
                        <button className="edit-card" onClick={() => onEditCard("allergies", item)}>
                        {allergiesHover && (
                            <i className="icon-edit fade-in-icons text-green-secondary text-base mr-1"></i>
                        )}
                        </button>
                        <button onClick={() => openDeleteModalItem(item, "allergies")} className="delete-card">
                        {allergiesHover && (
                            <i className="icon-delete fade-in-icons text-red-secondary text-base"></i>
                        )}
                        </button>
                    </div>
                </div>
                <h5 className="h5 text-green-tertiary font-medium">
                    {item.name}
                </h5>
                <label className="block text-gray-primary text-xs font-normal my-3">
                    Special Note
                </label>
                <p className="p text-sm">{item.special_note || '.'}</p>
            </div>)}
        </>
    );
}

export default AllergiesView;
