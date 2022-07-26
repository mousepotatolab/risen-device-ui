import React, { useEffect } from "react";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebarmain";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";
import Router, { withRouter, useRouter } from 'next/router'
import { getAdminToken } from "services/AdminService";

export default function Admin({ children }) {
  const router = useRouter();
  useEffect(async () => {
    if (!(await getAdminToken())) {
      Router.push({pathname: "/admin/login"})
      return null;
    }
  }, [router.isReady])
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <div className="px-4 md:px-10 mx-auto w-full">
          {children}
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
