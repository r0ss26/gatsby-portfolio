import React from 'react'
import { Link } from 'gatsby';
import styles from './TopNavBar.module.css';
import resume from '../../assets/docs/RossBaker-Resume.pdf'

const TopNavBar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li><Link to="/" >Home</Link></li>
        <li><Link to="/work">Work</Link></li>
        <li><Link to="/about" >About</Link></li>
        <li><Link to="/contact" >Contact</Link></li>
        <li><a href={resume} target="__blank" >Resume</a></li>
        <li><a href="https://medium.com/@rossabaker">Blog</a></li>
      </ul>
    </nav>
  )
}

export default TopNavBar
