import React from "react"
import styles from "./NeumorphicIcon.module.css"

const NeumorphicIcon = props => {
  return (
    <>
      <span className={styles.icon}>
        <a target="__blank" href={props.linkUrl}>
          <img src={props.imgSrc} alt={props.altText} />
        </a>
        {props.tooltip && (
          <span className={styles.tooltip}>{props.tooltipText}</span>
        )}
      </span>
    </>
  )
}

export default NeumorphicIcon
