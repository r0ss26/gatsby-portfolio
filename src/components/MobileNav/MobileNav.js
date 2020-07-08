import React, { useState } from "react"
import NeumorphicIcon from "../NeumorphicIcon/NeumorphicIcon"
import menuIcon from "../../assets/icons/icons8-menu.svg"
import styles from "./MobileNav.module.css"
import { Link } from "gatsby"

import resume from "../../assets/docs/RossBaker-Resume.pdf"
import closeIcon from "../../assets/icons/icons8-multiply-100.png"

const MobileNav = () => {
  const [navState, setNavState] = useState({ isOpen: false })

  const handleClick = () => {
    setNavState({ isOpen: !navState.isOpen })
  }

  return (
    <>
      <button className={styles.icon} onClick={handleClick}>
        <NeumorphicIcon
          altText="Open Navigation Menu"
          className={styles.icon}
          imgSrc={menuIcon}
        />
      </button>
      <nav
        className={`${styles.mobileMenu} + ${
          navState.isOpen ? styles.slideup : styles.slidedown
        }`}
      >
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>
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
          <li>
            <button name="Mobile Navigation Menu" onClick={handleClick}>
              <NeumorphicIcon
                altText="Close Navigation Menu"
                imgSrc={closeIcon}
              />
            </button>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default MobileNav
