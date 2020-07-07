import React from "react"
import styles from "./AboutContent.module.css"

import TechIcons from '../TechIcons/TechIcons'
import AboutText from '../AboutText/AboutText'

import undraw from "../../assets/img/undraw_digital_nomad_9kgl.svg"

const About = () => {
  return (
    <main className={styles.container}>
      <TechIcons />
      <AboutText />
      <div className={styles.image}>
        <img alt="" src={undraw} />
      </div>
    </main>
  )
}

export default About
