import React, { useState, useEffect } from "react";
import styles from "../../styles/BlogPost.module.css";
import { useRouter } from "next/router";
import * as fs from "fs"; 

// Step 1: Find the file correspondinng to the slug

// Step 2: populate them inside the page.

const Slug = (props) => {
  function createMarkup(c) {
    return {__html: c};
  }


  const router = useRouter();
  const [blog, setBlog] = useState(props.myBlog);
  

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{blog && blog.title}</h1>
        <hr />
        {blog &&<div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}
      </main>
    </div>
  );
};


 




export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'AI Computational Gastronomy Framework'} },
      { params: { slug: 'Approximation of elliptic eigen value problems'} },
      { params: { slug: 'Autonomous Last Mile Vehicle'} },
      { params: { slug: 'Brain correlates of affective states in autism'} },
      { params: { slug: 'Caste, Gender and Urban Space'} },
      { params: { slug: 'Evaluating state preparation algorithms for quantum circuits'} },
      { params: { slug: 'Improving Last Mile connectivity from public transport'} },
      { params: { slug: 'Knowledge and Data in Election Analysis'} },
      { params: { slug: 'Object Detection in Sculptural Arts'} },
      { params: { slug: 'Saliency Detection in Multi-object Images'} },
    ],
    fallback: true // false or 'blocking'
  };
}






export async function getStaticProps(context) {
  const { slug } = context.params;

  let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`,'utf-8')

  return {
    props: { myBlog: JSON.parse(myBlog) }, // will be passed to the page component as props
  };
}

export default Slug;
