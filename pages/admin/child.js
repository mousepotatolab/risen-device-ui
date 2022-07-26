import React, { useEffect, useState } from "react";
// layout for page
import Router, { withRouter, useRouter } from 'next/router'
import Admin from "layouts/Admin.js";
import { getChildByUserID } from "services/AdminService";

export default function Users() {
  const router = useRouter();
  const [users, setUsers] = useState([])
  useEffect(() => {
    const params = router.query;
    if (params.userid) {
        loadChildByUser(params.userid);
    }
  }, [router.isReady])

  const loadChildByUser = (userid) => {
    getChildByUserID(userid).then(
        (result) => {
            if ("data" in result) {
                setUsers(result.data);
            }
        }
    )
  }

  return (
    <>
      <div className="flex flex-wrap">
        <div class="rounded-t mb-0 px-4 py-3 border-0 bg-white mt-5 w-full">
          <div class="flex flex-wrap items-center">
              <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 class="font-semibold text-lg text-blueGray-700">Child User List</h3>
              </div>
          </div>
        </div>
        <div class="block w-full overflow-x-auto shadow-md bg-white">
            <table class="items-center w-full bg-transparent border-collapse">
            <thead>
                <tr>
                    <th
                        class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                        Name</th>
                    <th
                        class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                        Connected Device</th>
                   
                </tr>
            </thead>
            <tbody>
                {users && users.map(p => (<tr>
                    <td
                        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {p.name}
                    </td>
                    <td
                        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {p.connectedDevices}
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
