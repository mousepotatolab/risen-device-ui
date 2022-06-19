import React, {useEffect, useState} from "react";
import Router, { withRouter, useRouter } from 'next/router'
import { getToken } from "../services/UserService";

// layout for page

import Auth from "layouts/Auth.js";

export default function Index() {
  const router = useRouter();

  useEffect(async () => {
    if(!router.isReady) return;
    if(await getToken()) {
      router.push({
        pathname: '/dashboard'
      })
    } else {
      router.push({
        pathname: '/login'
      })
    }
  }, [])
  
  return null;
}