import React from "react"
import { Link } from "gatsby"
import styles from "./TopNavBar.module.css"
import resume from "../../assets/docs/RossBaker-Resume.pdf"

const TopNavBar = () => {

  const activeStyle = { color: 'rgb(26, 188, 156)'}

  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link to="/" activeStyle={activeStyle}>Home</Link>
        </li>
        <li>
          <Link to="/work" activeStyle={activeStyle}>Work</Link>
        </li>
        <li>
          <Link to="/about" activeStyle={activeStyle}>About</Link>
        </li>
        <li>
          <Link to="/contact" activeStyle={activeStyle}>Contact</Link>
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

export default TopNavBar
