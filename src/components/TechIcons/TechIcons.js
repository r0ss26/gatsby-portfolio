import React from 'react'
import styles from './TechIcons.module.css'
import NeumorphicIcon from '../NeumorphicIcon/NeumorphicIcon'

import htmlIcon from "../../assets/icons/tech/icons8-html-5.svg"
import cssIcon from "../../assets/icons/tech/icons8-css3.svg"
import jsIcon from "../../assets/icons/tech/icons8-javascript-logo.svg"
import rubyIcon from "../../assets/icons/tech/icons8-ruby-programming-language.svg"
import nodeIcon from "../../assets/icons/tech/icons8-nodejs-128.png"
import reactIcon from "../../assets/icons/tech/icons8-react.png"

const TechIcons = () => {
  return (
    <div className={styles.tech}>
      <div>Some of the technologies I use daily</div>
      <NeumorphicIcon
        tooltip
        tooltipText="React"
        imgSrc={reactIcon}
        altText="React Logo"
      />
      <NeumorphicIcon
        tooltip
        tooltipText="JavaScript"
        imgSrc={jsIcon}
        altText="JavaScript Logo"
      />
      <NeumorphicIcon
        tooltip
        tooltipText="Ruby"
        imgSrc={rubyIcon}
        altText="Ruby Logo"
      />
      <NeumorphicIcon
        tooltip
        tooltipText="Node.js"
        imgSrc={nodeIcon}
        altText="Node.js Logo"
      />
      <NeumorphicIcon
        tooltip
        tooltipText="HTML5"
        imgSrc={htmlIcon}
        altText="HTML5 Logo"
      />
      <NeumorphicIcon
        tooltip
        tooltipText="CSS3"
        imgSrc={cssIcon}
        altText="CSS3 Logo"
      />
    </div>
  )
}

export default TechIcons
