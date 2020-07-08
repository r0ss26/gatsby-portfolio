import React from "react"
import NeumorphicContainer from "../NeumorphicContainer/NeumorphicContainer"
import Tag from "../Tag/Tag"

import styles from "./ProjectCard.module.css"

const ProjectCard = props => {
  return (
    <div className={styles.container}>
      <NeumorphicContainer>
        <div className={styles.content}>
          <div>
            <a href={props.codeSrc} target="__blank">
              <button className={styles.button}>CODE &lt; /&gt;</button>
            </a>
            <a href={props.demoSrc} target="__blank">
              <button className={styles.fill}>SITE</button>
            </a>
            {props.tags && (
              <div className={styles.tagsContainer}>
                {props.tags.split(', ').map((tag) => (
                  <Tag tagName={tag} />
                ))}
              </div>)}
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
