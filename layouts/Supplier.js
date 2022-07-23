import React, { useEffect } from "react";

// components
import { getSupplierToken } from "../services/SupplierService";
import SupplierNavbar from "components/Navbars/SupplierNavbar.js";
import SupplierSidebar from "components/Sidebar/SupplierSidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";
import Router, { withRouter, useRouter } from 'next/router'

export default function Supplier({ children }) {
  const router = useRouter();
  useEffect(async () => {
    if (!(await getSupplierToken())) {
      Router.push({pathname: "/supplier/login"})
      return null;
    }
  }, [router.isReady])
  return (
    <>
      <SupplierSidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <SupplierNavbar />
        {/* Header */}
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
