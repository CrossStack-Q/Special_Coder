import React from "react";
import styles from "../styles/about.module.css";
import Head from "next/head";

const About = () => {
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
      <div className={styles.container}>
        <h1 className={styles.center}>About Hunting Coder</h1>
        <h2>Introduction</h2>
        <div className={styles.aboutl}>
          {/* <Image className={styles.myImg} src="/homeing.png" width={158} height={158}/> */}
          <img
            className={styles.myImg}
            src="/homeing.png"
            alt=""
            width={158}
            height={158}
          />
          <p className={styles.aboutl1}>
            My name is Anurag and I am a developer based in The India. This is my first next app . In this app i made blog web  app.In which blogs are coming from backend and mounting here. MongoDB is not connected with it which means data is hard coded i can configure it easily i had my pending work due to which, focusing on another projects is essential. I am
            very open to anything and to be busy with Web Development, App
            Development,Data Science. I also trying new operating system. Lastly
            I have quite some experience with Python, Kotlin and JS. For all
            enquiries professional or otherwise, please contact my email
            addressed in this document!
          </p>
        </div>
        <div className="mail1">
        <p className={styles.description}>
          Email: 
          {/* <code className={styles.code}>a Coder</code> */}
          <a className={styles.red} href="mailto:someone@example.com">
            {" "}
            crossrehk@gmail.com
          </a>
        </p>
        </div>
      </div>
    </>
  );
};

export default About;
