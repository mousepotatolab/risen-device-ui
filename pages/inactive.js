import React, {useEffect, useState} from "react";
import { useRouter } from 'next/router'
import { lookupDevice } from "../services/UserService";
// import ReactDOM from "react-dom";
// import Modal from "react-modal";
// layout for page



import Mobile from "layouts/Mobile.js";
import { baseapiurl } from "services/config";
// import { isToastIdValid } from "react-toastify/dist/utils";

export default function InactiveMobileLanding() {
    
      return (
          <>
            <div className="w-full h-full fixed z-50 min-h-full left-0 top-0 bg-grey-primary">
          <div className="bg-white h-full-mobile flex flex-col items-center my-4 mx-4 px-4">
          <img src="/img/primaryFull.svg" alt="Risen Logo" className="medium-logo mt-8"/>
          <img src="/img/inactive-profile.svg" alt="Risen Logo" className="w-200 mt-16"/>
          <h1 className="h1 text-xl font-medium text-green-primary mt-4">No Profile Connected</h1>
          <h6 className="h6 text-sm text-black mt-2 mb-1">Sorry no profile is yet connected with this QR</h6>
          </div>
          
        </div>
     
        </>
      )
}

InactiveMobileLanding.layout = Mobile;
