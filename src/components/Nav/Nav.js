import React from "react"
import { Link } from "gatsby"
import styles from "./Nav.module.css"
import resume from '../../assets/docs/RossBaker-Resume.pdf'

const Nav = () => {
  return (
    <nav className={styles.homeNav}>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
