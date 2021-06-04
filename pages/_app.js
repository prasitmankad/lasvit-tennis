import React from "react";
import "../styles/index.css";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import store from "../modules/store";
import "../configureAmplify";
// import the Head component for appending elements to the head of the page
import Head from "next/head";
import "../translations/i18n";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" /> {/* INTER FONT */}
        <Head>
          <link rel="shortcut icon" href="/images/favicon.ico" />{/* FAVICON */}
          <title>The Running Klub</title>{/* TODO: Make dynamic in future. */}
          <meta property="og:title" content="The Running Klub" key="title" />{/* TODO: Make dynamic in future. */}
        </Head>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);
