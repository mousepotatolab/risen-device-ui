import React, {useState} from "react";
import Router, { withRouter, useRouter } from 'next/router'
import { adminLogin, storeAdminToken } from "../../services/AdminService";
// layout for page

import AdminAuth from "layouts/AdminAuth.js";

export default function Login() {
  const [loginValue, setLoginValue] = useState({username: "", password: ""})
  const [errorMessage, setErrorMessage] = useState("")
  const handleLoginValue = (key) => (e) => {
    setLoginValue({ ...loginValue, [key]: e.target.value });
  }

  const onSubmit = () => {
    setErrorMessage("")
    const { username, password} = loginValue;

    if (!(username && password)) {
      setErrorMessage("Incorrect username or password")
    }

    adminLogin({username, password}).then(
      (result) => {
        if (result.token && result.user) {
          storeAdminToken(result);
          Router.push({
            pathname: '/admin/dashboard'
          })
        } else {
          setErrorMessage("Incorrect username or password")
        }
      }
    )
  }

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-8/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="flex-auto px-10 lg:px-10 py-10 pt-2">
                <div className="text-blueGray-400 text-center mb-3 font-bold">
                    Sign in
                </div>
                <form>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      onKeyUp={handleLoginValue("username")}
                      onChange={handleLoginValue("username")}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Username"
                    />
                    {errorMessage && (<p style={{color: 'red'}}>{errorMessage}</p>)}
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      onKeyUp={handleLoginValue("password")}
                      onChange={handleLoginValue("password")}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                    />
                  </div>
                  <div className="text-center mt-6">
                    <button
                      onClick={onSubmit}
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Login.layout = AdminAuth;
