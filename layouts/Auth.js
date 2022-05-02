import React from "react";

// components


export default function Auth({ children }) {
  return (
    <>
      <main>
        <div className="flex h-full min-h-screen p-auth bg-secondary">

        <section className="relative w-55 h-auto bg-primary flex items-center">
          <div className="auth-wrapper">
            <div className="hr-icon-wrapper mb-6">
            <img className="hr-icon" src="/img/heart-rate.svg" alt="" />
            </div>
          <h1 className="text-6xl text-white max-w-330-px font-bold">Get proper help in an emergency medical situation</h1>
          </div>
          <div className="left-waves-container h-full">
            <img src="/img/Wave05.svg" alt="" className="left-top" />
            <img src="/img/Wave06.svg" alt="" className="left-left" />
            <img src="/img/Wave04.svg" alt="" className="left-bottom" />
          </div>
        </section>
        <section className="relative w-45 h-auto bg-white">
          <div className="right-waves-container h-full">
            <img src="/img/Wave01.svg" alt="" className="right-top" />
            <img src="/img/Wave02.svg" alt="" className="right-right" />
            <img src="/img/Wave03.svg" alt="" className="right-bottom" />
          </div>
          {children}
        </section>
            </div>
      </main>
    </>
  );
}
