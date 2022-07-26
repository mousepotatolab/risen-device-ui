import React, { useEffect, useState } from "react";
// layout for page
import Router, { withRouter, useRouter } from 'next/router'
import Admin from "layouts/Admin.js";
import { getUserList } from "services/AdminService";

export default function Users() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    getUserList().then(
        (result) => {
            if ("data" in result) {
                setUsers(result.data)
            }
        }
    )
  
  }, [])
    
  const viewChildUser = (userid) => {
    Router.push({pathname: "/admin/child", query: {
        userid
    }})
  }

  return (
    <>
      <div className="flex flex-wrap">
        <div class="rounded-t mb-0 px-4 py-3 border-0 bg-white mt-5 w-full">
          <div class="flex flex-wrap items-center">
              <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 class="font-semibold text-lg text-blueGray-700">All User List</h3>
              </div>
          </div>
        </div>
        <div class="block w-full overflow-x-auto shadow-md bg-white">
            <table class="items-center w-full bg-transparent border-collapse">
            <thead>
                <tr>
                    <th
                        class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                        Date</th>
                    <th
                        class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                        Name</th>
                    <th
                        class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                        Phone</th>
                    <th
                        class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                        Child User</th>
                    <th
                        class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                        Connected Device</th>
                    <th
                        class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                        Action</th>
                </tr>
            </thead>
            <tbody>
                {users && users.map(p => (<tr>
                    <td
                        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {p.createDate}
                    </td>
                    <td
                        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {p.name}
                    </td>
                    <td
                        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {p.phone}
                    </td>
                    <td
                        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {p.childUsers}
                    </td>
                    <td
                        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {p.connectedDevices}
                    </td>
                    <td>
                        <button class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" type="button"
                        onClick={() => viewChildUser(p.userid)}>View Child User</button>
                    </td>
                </tr>))}
            </tbody>
            </table>
        </div>
      </div>
    </>
  );
}

Users.layout = Admin;
