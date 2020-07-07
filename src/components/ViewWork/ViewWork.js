import React from "react"
import styles from "./ViewWork.module.css"
import { Link } from "gatsby"

const ViewWork = props => {
  return (
    <div className={styles.container}>
      <h2>View my Work</h2>
      <Link to="/work">
        <button className={styles.button}>Here.</button>
      </Link>
      {props.children}
    </div>
  )
}

export default ViewWork