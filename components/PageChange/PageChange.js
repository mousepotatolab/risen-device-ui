import React from "react";

// reactstrap components
// import { Spinner } from "reactstrap";

// core components

export default function PageChange(props) {
  return (
    <div>
      <div
        className="bg-cover fixed z-40 w-full min-h-screen min-w-screen h-full top-0 left-0"
        style={{
          backgroundImage: "url('/img/bgLoading.png')",
        }}
      ></div>
      <div className="my-32 mx-auto max-w-sm text-center relative z-50 top-0">
        
       
      </div>
    </div>
  );
}
