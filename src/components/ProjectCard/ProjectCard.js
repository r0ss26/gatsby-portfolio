import React from "react"
import NeumorphicContainer from "../NeumorphicContainer/NeumorphicContainer"
import styles from "./ProjectCard.module.css"

const ProjectCard = props => {
  return (
    <div className={styles.container}>
      <NeumorphicContainer>
        <div className={styles.content}>
          <div>
            <a href={props.codeSrc} target="_bank">
              <button className={styles.button}>CODE &lt; /&gt;</button>
            </a>
            <a href={props.demoSrc} target="_bank">
              <button className={styles.fill}>SITE</button>
            </a>
          </div>
          <div>
            <div className={styles.title}>{props.title}</div>
            <p className={styles.description}>{props.description}</p>
          </div>
          <a href={props.demoSrc} target="__blank" className={styles.projectImg}>
            <img className={styles.image} alt="" src={props.imgSrc} />
            <div className={styles.overlay}>
              <div className={styles.text}>DEMO</div>
            </div>
          </a>
        </div>
      </NeumorphicContainer>
    </div>
  )
}

export default ProjectCard
