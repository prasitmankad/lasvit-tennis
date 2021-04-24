import React from "react";
import { Fragment } from "react";
import "../styles/index.css";
//import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      {/* <Layout> */}
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      <Component {...pageProps} />
      {/* </Layout> */}
    </React.Fragment>
  );
}

export default MyApp;
