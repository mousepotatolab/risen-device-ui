import React, {useState} from "react";
import Router, { withRouter, useRouter } from 'next/router'
import { baseapiurl } from "services/config";

function Sidebar({openSettings, user, activeuser, setActiveuser, loadInfoByUser, newProfile,
  setValidProfileText}) {
  const router = useRouter();
  // const [openTab, setOpenTab] = React.useState(1);
  const logout = () => {
    localStorage.clear();
    Router.push({
      pathname: '/login'
    })
  }

  const handleActiveUser = (id) => {
    setValidProfileText("")
    setActiveuser(id);
    loadInfoByUser(id, true);
  }
  return (
    <>
      {user && (<div className="container">
                <div className="flex flex-col">
                    <img src="/img/primaryFull.svg" alt="" className="logo mb-8" />
                    <div className="flex mb-6">
                        <div className="profile-photo mr-2">
                            <img src={baseapiurl + 'download/' + user.profile.image} alt="" className="profile" />
                        </div>
                        <div className="profile-info">
                            <h3 className="h3 font-medium">{(user.profile && user.profile.firstName) + ' ' + (user && user.profile && user.profile.lastName)}</h3>
                            <h5 className="h5 text-xs text-gray-primary">Primary Account</h5>
                        </div>
                    </div>
                    <div className="flex justify-between mb-6">
                      <p className="p text-xs font-normal">Medical Profiles</p>
                      <i onClick={newProfile} className="icon-Plus2x icon-sm text-green-primary"></i>
                    </div>
                    <div className="wrapper profile-tab"
                    onClick={()=> handleActiveUser(user.id)}
                    >
                      <button className={"flex w-full mb-2 " + (activeuser == user.id ? "active-profile" : "inactive-profile")}>
                        <img src={baseapiurl + 'download/' + user.profile.image} alt="proflie" className="profile-sm mr-2" />
                        <h5 className="h5 profile-name text-sm">{(user && user.profile && user.profile.firstName) + ' ' + (user && user.profile && user.profile.lastName)}</h5>
                      </button>
                    </div>
                    {user && user.child && user.child.map(p => (
                    <div
                    onClick={() => handleActiveUser(p.id)}
                    key={p.id} className="wrapper profile-tab-last">
                      <button className={"flex w-full " + (activeuser == p.id ? "active-profile" : "inactive-profile")}>
                        <img src={baseapiurl + 'download/' + p.image} alt="proflie" className="profile-sm mr-2" />
                        <h5 className="h5 profile-name text-sm">{p.firstName + ' ' + p.lastName}</h5>
                      </button>
                    </div>))}
                    <div className="wrapper">
                      <button onClick={newProfile} className="add-profile-button w-full font-medium flex items-center">
                        Add New Profile <i className=" ml-3 icon-Plus2x text-green-primary"></i>
                      </button>
                    </div>
                </div>
                <div className="wrapper fixed-bottom">
                  <div className="flex mb-4"><img src="/img/settings.svg" alt="settings-icon"></img><button onClick={openSettings} className="h5 font-medium ml-2">Settings</button> </div>
                  <div onClick={logout} className="flex cursor-pointer"><img src="/img/logout.svg" alt="logout-icon"></img> <h5 className="h5 font-medium ml-2">Sign Out</h5> </div>
                </div>
            </div>)}
    </>
  );
}

export default Sidebar;
