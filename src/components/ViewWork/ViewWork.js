import React from "react"
import styles from "./ViewWork.module.css"

const ViewWork = props => {
  return (
    <div className={styles.container}>
      <h2>View my Work</h2>
      <button className={styles.button}>Here.</button>
      {props.children}
    </div>
  )
}

export default ViewWork

// judah
// github
// lincoln moraga
