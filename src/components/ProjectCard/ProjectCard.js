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
          <div>
            <img alt="" className={styles.projectImg} src={props.imgSrc} />
          </div>
        </div>
      </NeumorphicContainer>
    </div>
  )
}

export default ProjectCard
