import React, {useState} from "react";

// layout for page

import Dashboard from "layouts/Dashboard.js";

export default function DashboardLanding() {
    const [openTab, setOpenTab] = React.useState(1);

  return (
    <>
    
      <div className="flex h-full">
        <section className="profile-section min-w-239-px">
            <div className="container">
                <div className="flex flex-col">
                    <img src="/img/logo.svg" alt="" className="logo mb-4" />
                    <div className="flex">
                        <div className="profile-photo mr-1">
                            <img src="/img/dwight.jpeg" alt="" className="profile" />
                        </div>
                        <div className="profile-info">
                            <h3 className="h3 font-medium">Dwight Schrute</h3>
                            <h5 className="h5 text-xs text-gray-primary">Primary Account</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="information-section w-full h-full">
        <div className="tab-wrapper bg-dashboard mb-4">
        <ul
            className="flex mb-0 list-none flex-wrap p-1 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold px-5 py-3 rounded block leading-normal " +
                  (openTab === 1
                    ? "text-dash-tabs bg-white shadow-tab"
                    : "text-dash-tabs-inactive bg-dashboard")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Medical Profile
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold px-5 py-3  rounded block leading-normal " +
                  (openTab === 2
                    ? "text-dash-tabs bg-white shadow-tab"
                    : "text-dash-tabs-inactive bg-dashboard")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Documents
              </a>
            </li>
            <li className="-mb-px last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold px-5 py-3  rounded block leading-normal " +
                  (openTab === 3
                    ? "text-dash-tabs bg-white shadow-tab"
                    : "text-dash-tabs-inactive bg-dashboard")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Settings
              </a>
            </li>
        </ul>
          </div>

          <div className="relative flex flex-col min-w-0 break-word w-full mb-6">
            <div className="flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <div className="container flex">
                  <div className="w-full pr-4 md:w-4/12 lg:4/12">
                      <div className="card-wrapper">
                          <div className="title-wrapper flex justify-between items-center">
                              <h3 className="h3 font-medium"><i className="icon-check text-green-active"></i>Medical Condition</h3>
                              <i className="icon-check text-green-active"></i>
                          </div>
                          <div className="card card-medical mt-2">
                          <label
                            className="block text-gray-primary text-xs font-normal my-3"
                            >
                            Condition Name
                            </label>
                            <input
                            type="text"
                            className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                            placeholder="e.g. Diabetes"
                            />
                          <label
                            className="block text-gray-primary text-xs font-normal my-3"
                            >
                            Special Note
                            </label>
                            <input
                            type="text"
                            className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                            placeholder="e.g. Taking insuline daily"
                            />
                          </div>
                      </div>
                  </div>
                  <div className="w-full pr-4 md:w-4/12 lg:4/12">
                      <div className="card-wrapper">
                      <div className="title-wrapper flex justify-between items-center">
                              <h3 className="h3 font-medium"><i className="icon-check text-green-active"></i>Allergies</h3>
                              <i className="icon-check text-green-active"></i>
                          </div>
                          <div className="card card-medical mt-2">
                          <label
                            className="block text-gray-primary text-xs font-normal my-3"
                            >
                            Name
                            </label>
                            <input
                            type="text"
                            className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                            placeholder="e.g. Amoxicillin"
                            />
                          <label
                            className="block text-gray-primary text-xs font-normal my-3"
                            >
                            Special Note
                            </label>
                            <input
                            type="text"
                            className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                            placeholder="e.g. Allergic to Amoxicillin"
                            />
                          </div>
                      </div>
                  </div>
                  <div className="w-full pr-4 md:w-4/12 lg:4/12">
                      <div className="card-wrapper">
                      <div className="title-wrapper flex justify-between items-center">
                              <h3 className="h3 font-medium"><i className="icon-check text-green-active"></i>Medication</h3>
                              <i className="icon-check text-green-active"></i>
                          </div>
                          <div className="card card-medical mt-2">
                          <label
                            className="block text-gray-primary text-xs font-normal my-3"
                            >
                            Medication Name
                            </label>
                            <input
                            type="text"
                            className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                            placeholder="e.g. Captopril"
                            />
                          <label
                            className="block text-gray-primary text-xs font-normal my-3"
                            >
                            Special Note
                            </label>
                            <input
                            type="text"
                            className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                            placeholder="e.g. Taking for high blood pressure"
                            />
                            <div className="flex items-center justify-between mt-3">
                            <h3 className="text-xs font-medium text-gray-primary">Currently Taking</h3>
                            <input
                                className="react-switch-checkbox"
                                id={`react-switch-new`}
                                type="checkbox"
                            />
                            <label
                                className="react-switch-label"
                                htmlFor={`react-switch-new`}
                            >
                                <span className={`react-switch-button`} />
                            </label>
                            </div>
                            
                          </div>
                      </div>
                  </div>
                  <div className="w-full  md:w-4/12 lg:4/12">
                  <div className="card-wrapper">
                      <div className="title-wrapper flex justify-between items-center">
                              <h3 className="h3 font-medium"><i className="icon-check text-green-active"></i>Emergency Contact</h3>
                              <i className="icon-check text-green-active"></i>
                          </div>
                          <div className="card card-medical mt-2">
                          <label
                            className="block text-gray-primary text-xs font-normal my-3"
                            >
                            Medication Name
                            </label>
                            <input
                            type="text"
                            className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                            placeholder="e.g. Captopril"
                            />
                          <label
                            className="block text-gray-primary text-xs font-normal my-3"
                            >
                            Special Note
                            </label>
                            <input
                            type="text"
                            className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                            placeholder="e.g. Taking for high blood pressure"
                            />
                            <label
                            className="block text-gray-primary text-xs font-normal my-3"
                            >
                            Special Note
                            </label>
                            <input
                            type="text"
                            className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                            placeholder="e.g. Taking for high blood pressure"
                            />
                            
                          </div>
                      </div>
                      <div className="card-wrapper">
                      <div className="title-wrapper flex justify-between items-center">
                              <h3 className="h3 font-medium"><i className="icon-check text-green-active"></i>Insurance</h3>
                              <i className="icon-check text-green-active"></i>
                          </div>
                          <div className="card card-medical mt-2">
                          <label
                            className="block text-gray-primary text-xs font-normal my-3"
                            >
                            Medication Name
                            </label>
                            <input
                            type="text"
                            className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                            placeholder="e.g. Captopril"
                            />
                          <label
                            className="block text-gray-primary text-xs font-normal my-3"
                            >
                            Special Note
                            </label>
                            <input
                            type="text"
                            className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                            placeholder="e.g. Taking for high blood pressure"
                            />
                           <label
                            className="block text-gray-primary text-xs font-normal my-3"
                            >
                            Special Note
                            </label>
                            <input
                            type="text"
                            className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                            placeholder="e.g. Taking for high blood pressure"
                            />
                            <label
                            className="block text-gray-primary text-xs font-normal my-3"
                            >
                            Special Note
                            </label>
                            <input
                            type="text"
                            className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                            placeholder="e.g. Taking for high blood pressure"
                            />
                            <label
                            className="block text-gray-primary text-xs font-normal my-3"
                            >
                            Special Note
                            </label>
                            <input
                            type="text"
                            className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                            placeholder="e.g. Taking for high blood pressure"
                            />
                            
                          </div>
                      </div>
                      <div className="card-wrapper">
                      <div className="title-wrapper flex justify-between items-center">
                              <h3 className="h3 font-medium"><i className="icon-check text-green-active"></i>Preferred Hospital</h3>
                              <i className="icon-check text-green-active"></i>
                          </div>
                          <div className="card card-medical mt-2">
                          <label
                            className="block text-gray-primary text-xs font-normal my-3"
                            >
                            Medication Name
                            </label>
                            <input
                            type="text"
                            className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                            placeholder="e.g. Captopril"
                            />
                          <label
                            className="block text-gray-primary text-xs font-normal my-3"
                            >
                            Special Note
                            </label>
                            <input
                            type="text"
                            className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                            placeholder="e.g. Taking for high blood pressure"
                            />
                          <label
                            className="block text-gray-primary text-xs font-normal my-3"
                            >
                            Special Note
                            </label>
                            <input
                            type="text"
                            className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                            placeholder="e.g. Taking for high blood pressure"
                            />
                            
                          </div>
                      </div>
                      <div className="card-wrapper">
                      <div className="title-wrapper flex justify-between items-center">
                              <h3 className="h3 font-medium"><i className="icon-check text-green-active"></i>Primary Caregiver</h3>
                              <i className="icon-check text-green-active"></i>
                          </div>
                          <div className="card card-medical mt-2">
                          <label
                            className="block text-gray-primary text-xs font-normal my-3"
                            >
                            Medication Name
                            </label>
                            <input
                            type="text"
                            className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                            placeholder="e.g. Captopril"
                            />
                          <label
                            className="block text-gray-primary text-xs font-normal my-3"
                            >
                            Special Note
                            </label>
                            <input
                            type="text"
                            className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                            placeholder="e.g. Taking for high blood pressure"
                            />
                          <label
                            className="block text-gray-primary text-xs font-normal my-3"
                            >
                            Special Note
                            </label>
                            <input
                            type="text"
                            className="w-full input-primary pl-2 focus:outline-none ph-text-sm"
                            placeholder="e.g. Taking for high blood pressure"
                            />
                            
                            
                          </div>
                      </div>
                  </div>
                </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <p>
                    Placeholder for documents page
                  </p>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <p>
                    Placeholder for Settings
                  </p>
                </div>
              </div>
            </div>
            </div>
        </section>
      </div>
    </>
  );
}

DashboardLanding.layout = Dashboard;