import React from "react";

// components


export default function Dashboard({ children }) {
  return (
    <>
      <main>
        <div className="flex h-full min-h-screen p-dash bg-dashboard">

        <section className="relative w-full h-full h-auto">
          {children}
        </section>
            </div>
      </main>
    </>
  );
}