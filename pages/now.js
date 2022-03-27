import React from "react";
import styles from "../styles/Home.module.css";
import Link2 from "next/link";
import Head from "next/head";

const Now = () => {
  return (
    <div>
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
      <h1>Currently i am working on Dashboard</h1>
    </div>
  );
};

export default Now;
