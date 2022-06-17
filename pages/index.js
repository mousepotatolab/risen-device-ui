import React, {useState} from "react";
import Router, { withRouter, useRouter } from 'next/router'
import { getToken } from "../services/UserService";

// layout for page

import Auth from "layouts/Auth.js";

export default function Index() {
  if(getToken()) {
    Router.push({
      pathname: '/dashboard'
    })
  } else {
    Router.push({
      pathname: '/login'
    })
  }
  return false;
}

Index.layout = Auth;
