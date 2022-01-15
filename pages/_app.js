import '../styles/globals.css'
import Header from "./src/components/Header/header";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
          <title>Moodle</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
