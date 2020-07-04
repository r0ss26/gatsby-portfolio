import React from 'react'

import styles from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={styles.homeNav}>
      <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#" target="_blank">Resume</a></li>
        <li><a href="#">Blog</a></li>
      </ul>
    </nav>
  )
}

export default Nav
