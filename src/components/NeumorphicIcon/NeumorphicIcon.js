import React from "react"
import styles from "./NeumorphicIcon.module.css"

const NeumorphicIcon = props => {
  return (
    <div className={styles.iconContainer}>
      <span className={styles.icon}>
        <a target="__blank" href={props.linkUrl}>
          <img src={props.imgSrc} alt={props.altText} />
        </a>
        {props.tooltipText && (
          <span className={styles.tooltip}>{props.tooltipText}</span>
        )}
      </span>
    </div>
  )
}

export default NeumorphicIcon
