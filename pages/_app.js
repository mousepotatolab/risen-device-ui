import App from 'next/app';
import { wrapper } from '../store/store';
import { useStore } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import React from "react";
import ReactDOM from "react-dom";
import Head from "next/head";
import Router from "next/router";

import PageChange from "components/PageChange/PageChange.js";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "styles/tailwind.css";

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  document.body.classList.add("body-page-transition");
  ReactDOM.render(
    <PageChange path={url} />,
    document.getElementById("page-transition")
  );
});
Router.events.on("routeChangeComplete", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});


function MyApp({ Component, pageProps }) {
  const store = useStore((state) => state);
  const Layout = Component.layout || (({ children }) => <>{children}</>);

  return process.browser ? (
    <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
       <Layout>
          <Component {...pageProps} />
        </Layout>
    </PersistGate>
  ) : (
    <PersistGate persistor={store}>
       <Layout>
          <Component {...pageProps} />
        </Layout>
    </PersistGate>
  );
}

export default wrapper.withRedux(MyApp);