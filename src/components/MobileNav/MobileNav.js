import React, { useState } from "react"
import NeumorphicIcon from "../NeumorphicIcon/NeumorphicIcon"
import menuIcon from "../../assets/icons/icons8-menu.svg"
import styles from "./MobileNav.module.css"
import { Link } from "gatsby"

import closeIcon from "../../assets/icons/icons8-multiply-100.png"

const MobileNav = () => {
  const [navState, setNavState] = useState({ isOpen: false })

  const handleClick = () => {
    setNavState({ isOpen: !navState.isOpen })
  }

  return (
    <>
      <div className={styles.icon} onClick={handleClick}>
        <NeumorphicIcon className={styles.icon} imgSrc={menuIcon} />
      </div>
      <nav
        className={`${styles.mobileMenu} + ${
          navState.isOpen ? styles.slideup : styles.slidedown
        }`}
      >
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="#">Resume</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li onClick={handleClick}>
            <NeumorphicIcon imgSrc={closeIcon} />
          </li>
        </ul>
      </nav>
    </>
  )
}

export default MobileNav
