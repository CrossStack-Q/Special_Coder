import React from "react";
// import styles from "../styles/blog.module.css";
import styles from "../styles/trial.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import Head from "next/head";
import * as fs from "fs";

// Step 1: collect all blog data from blogdata directory

// Step 2: Iterate through them and display them

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);

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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="./assets/blog.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./assets/blog.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="./assets/blog.png"
        />
        <link rel="shortcut icon" href="./assets/blog.png" />
        {/* <script src='./sc.js' ></script> */}
      </Head>
      <div>
        <main className={styles.main}>
          <div className="blogs">
            <div className={styles.grid}>
              {blogs.map((blogitem) => {
                return (
                  <>
                    <Link
                      href={`/blogpost/${blogitem.slug}`}
                      key={blogitem.slug}
                    >
                      <a className={styles.card}>
                        <h2>{blogitem.title}</h2>
                        <p>{blogitem.metadesc.substr(0, 70)}</p>
                      </a>
                    </Link>
                  </>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata");
  let myfile;
  let allBlogs = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    myfile = await fs.promises.readFile("blogdata/" + item, "utf-8");

    allBlogs.push(JSON.parse(myfile));
  }

  return {
    props: { allBlogs }, // will be passed to the page component as props
  };
}

export default Blog;
