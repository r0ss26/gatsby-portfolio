import React from 'react'
import { Link } from 'gatsby';
import styles from './SharedNav.module.css';
import resume from '../../assets/docs/RossBaker-Resume.pdf'

const SharedNav = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li><Link to="/" >Home</Link></li>
        <li><Link to="/about" >About</Link></li>
        <li><Link to="/contact" >Contact</Link></li>
        <li><a href={resume} target="__blank" >Resume</a></li>
        <li><Link to="/blog" >Blog</Link></li>
      </ul>
    </nav>
  )
}

export default SharedNav
