import React, { useState, useEffect } from "react";
// layout for page

import Admin from "layouts/Admin.js";
import { getDashboardData } from "services/AdminService";

export default function Dashboard() {

  const [data, setData] = useState(null);
  const [users, setUsers] = useState(null);
  useEffect(() => {
    getDashboardData().then(
        (result) => {
            if (result) {
              const {recentUsers, ...data} = result;
              setData(data);
              setUsers(recentUsers);
            }
        }
    )
  
  }, [])

  return (
    <>
      <div className="flex flex-wrap">
        <div class="w-full lg:w-6/12 mt-3 px-4">
            <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                        <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                            <h5 class="text-blueGray-400 uppercase font-bold text-xs">Total User</h5>
                            <span class="font-semibold text-xl text-blueGray-700">{data && data.totaluser}</span>
                        </div>
                        <div class="relative w-auto pl-4 flex-initial">
                            <div
                                class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500">
                                <i class="fas fa-users"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full lg:w-6/12 mt-3 px-4">
            <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                        <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                            <h5 class="text-blueGray-400 uppercase font-bold text-xs">LAST WEEK NEW USER</h5><span
                                class="font-semibold text-xl text-blueGray-700">{data && data.lastweekuser}</span>
                        </div>
                        <div class="relative w-auto pl-4 flex-initial">
                            <div
                                class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-orange-500">
                                <i class="fas fa-users"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full lg:w-6/12 mt-3 px-4">
            <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                        <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                            <h5 class="text-blueGray-400 uppercase font-bold text-xs">LAST MONTH NEW USER</h5><span
                                class="font-semibold text-xl text-blueGray-700">{data && data.lastmonthuser}</span>
                        </div>
                        <div class="relative w-auto pl-4 flex-initial">
                            <div
                                class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-pink-500">
                                <i class="fas fa-users"></i></div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
        <div class="w-full lg:w-6/12 mt-3 px-4">
            <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                        <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                            <h5 class="text-blueGray-400 uppercase font-bold text-xs">LAST YEAR NEW USER</h5>
                            <span class="font-semibold text-xl text-blueGray-700">{data && data.lastyearuser}</span>
                        </div>
                        <div class="relative w-auto pl-4 flex-initial">
                            <div
                                class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-lightBlue-500">
                                <i class="fas fa-users"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full lg:w-6/12 mt-3 px-4">
            <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                        <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                            <h5 class="text-blueGray-400 uppercase font-bold text-xs">Total Devices</h5>
                            <span class="font-semibold text-xl text-blueGray-700">{data && data.totaldevices}</span>
                        </div>
                        <div class="relative w-auto pl-4 flex-initial">
                            <div
                                class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500">
                                <i class="fas fa-users"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full lg:w-6/12 mt-3 px-4">
            <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                        <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                            <h5 class="text-blueGray-400 uppercase font-bold text-xs">Total Connected Devices</h5><span
                                class="font-semibold text-xl text-blueGray-700">{data && data.totalconnecteddevice}</span>
                        </div>
                        <div class="relative w-auto pl-4 flex-initial">
                            <div
                                class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-orange-500">
                                <i class="fas fa-users"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="rounded-t mb-0 px-4 py-3 border-0 bg-white mt-5 w-full">
          <div class="flex flex-wrap items-center">
              <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 class="font-semibold text-lg text-blueGray-700">Recent User List</h3>
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
              </tr>))}
          </tbody>
        </table>
      </div>
    </div>
   
    </>
  );
}

Dashboard.layout = Admin;
