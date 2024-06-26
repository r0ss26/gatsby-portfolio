import React from "react"
import { Link } from "gatsby"
import styles from "./TopNavBar.module.css"

const TopNavBar = () => {

  const activeStyle = { color: 'rgb(26, 188, 156)'}

  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link to="/" activeStyle={activeStyle}>Home</Link>
        </li>
        <li>
          <Link to="/about" activeStyle={activeStyle}>About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default TopNavBar
