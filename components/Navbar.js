import React from 'react'


import styles from "../styles/Home.module.css"; 

import Link2 from "next/link";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul className={styles.mainnav}>
          <Link2 href="/">
            <a>
              <li className={styles.navli}>Home</li>
            </a>
          </Link2>
          <Link2 href="/about">
            <a>
              <li className={styles.navli}>About</li>
            </a>
          </Link2>
          <Link2 href="/blog">
            <a>
              <li className={styles.navli}>Blog</li>
            </a>
          </Link2>
          <Link2 href="/contact">
            <a>
              <li className={styles.navli}>Contact</li>
            </a>
          </Link2>
          <Link2 href="/now">
            <a>
              <li className={styles.navli}>More_Over</li>
            </a>
          </Link2>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
