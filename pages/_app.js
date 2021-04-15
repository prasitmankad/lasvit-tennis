import "../styles/index.css";
//import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Layout> */}
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      {/* TODO: Header components here */}
      <Component {...pageProps} />
      {/* </Layout> */}
    </>
  );
}

export default MyApp;
