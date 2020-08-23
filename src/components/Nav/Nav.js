import React from "react"
import { Link } from "gatsby"
import styles from "./Nav.module.css"

const Nav = () => {
  return (
    <nav className={styles.homeNav}>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <a href={resume} target="__blank">
            Resume
          </a>
        </li>
        <li>
          <a href="https://medium.com/@rossabaker">Blog</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
