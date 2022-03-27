import Navbar from "../components/Navbar";
import "../styles/globals.css";
import Head from "next/head";
// import '../styles/style.css'

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Head>
        <title>Hunting Coder</title>
        <meta
          name="description"
          content="Blogs from Anurag Sharma every week"
        />
        <meta
          name="keyword"
          content="Currently working on logistics model dashboard"
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="icon" type="image/png" href="./assets/blog.png" />
        {/* <script src='./sc.js' ></script> */}
      </Head>
    <Navbar></Navbar>
    <Component {...pageProps} />
  </>)
}

export default MyApp;
