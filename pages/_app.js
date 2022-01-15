import '../styles/globals.css'
import Header from "./components/Header/header";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
          <title>School 4k</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
