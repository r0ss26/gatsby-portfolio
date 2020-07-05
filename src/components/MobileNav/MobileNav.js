import React, { useState } from 'react'
import NeumorphicIcon from '../NeumorphicIcon/NeumorphicIcon'
import menuIcon from '../../icons/icons8-menu.svg'
import styles from './MobileNav.module.css'

import closeIcon from '../../icons/icons8-multiply-100.png'


const MobileNav = () => {

  const [navState, setNavState] = useState({isOpen: false})

  const handleClick = () => {
    setNavState({isOpen: !navState.isOpen})
  };


  return (
    <>
      <div className={styles.icon} onClick={handleClick}><NeumorphicIcon className={styles.icon} imgSrc={menuIcon} /></div>
      <div className={`${styles.slider}`}>
        <nav className={`${styles.mobileMenu} + ${navState.isOpen ? '' : styles.hidden}`}>
          <ul>
            <li onClick={handleClick}><NeumorphicIcon imgSrc={closeIcon}/></li>
            <li>HOME</li>
            <li>BLOG</li>
            <li>RESUME</li>
            <li>CONTACT</li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default MobileNav
