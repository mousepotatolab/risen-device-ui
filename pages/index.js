import React, {useState} from "react";
import Router, { withRouter, useRouter } from 'next/router'

// layout for page

import Auth from "layouts/Auth.js";

export default function Index() {
  if(localStorage.getItem("risenusertoken")) {
    Router.push({
      pathname: '/home'
    })
  } else {
    Router.push({
      pathname: '/login'
    })
  }
  return false;
}

Index.layout = Auth;
