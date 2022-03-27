import Head from "next/head";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
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
      {/* <Script src='./sc.js' strategy='lazyOnload'></Script> */}
      <main className={styles.main}>
        <h1 className={styles.title}>
          Blogs-{">"}
          <a href="https://github.com/CrossStack-Q">Special Coder</a>
        </h1>
        <div className={styles.imagewrap}>
          {/* <Image className={styles.myImg} src="/homeing.png" width={158} height={158}/> */}
          <img
            className={styles.myImg}
            src="/homeing.png"
            alt=""
            width={158}
            height={158}
          />
        </div>

        <p className={styles.description}>
          A blog for new coders by
          {/* <code className={styles.code}>a Coder</code> */}
          <a className={styles.blue} href="https://github.com/CrossStack-Q">
            {" "}
            a developer
          </a>
        </p>
        {/* <h2 className={styles.h2}>Latest Blogs</h2> */}
        {/* <div className="blogs">
          <div className="blogItem">
            <p className={styles.blogtil}>
              {" "}
              <b>How to learn javaScript in 2022?</b>
            </p>

            <p className={styles.blogtil1}>
              JavaScript is a language used to design logic for web JavaScript
              is a language used to design logic for web
            </p>
          </div>
        </div> */}
      </main>
    </div>
  );
}
