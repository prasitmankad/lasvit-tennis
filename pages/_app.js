import React from "react";
import "../styles/index.css";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import store from "../modules/store";
import "../configureAmplify";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      <Component {...pageProps} />
    </Provider>
  );
}

const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);
