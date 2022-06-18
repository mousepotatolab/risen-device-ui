import React from "react";

// components


export default function Mobile({ children }) {
  return (
    <>
      <main>
        <div className="flex h-full min-h-screen w-full px-4 py-4 bg-grey-primary">

        <section className="relative w-full h-full h-auto px-4  bg-white mh-96">
          {children}
        </section>
            </div>
      </main>
    </>
  );
}