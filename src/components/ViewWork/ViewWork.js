import React from "react"
import styles from "./ViewWork.module.css"
import newTabIcon from '../../assets/icons/icons8-new-tab.svg'

const ViewWork = props => {
  return (
    <div className={styles.container}>
      <h2>View my Work</h2>
        <a href="https://github.com/r0ss26" target="__blank"><button className={styles.button}>Here<img src={newTabIcon} /></button></a>
      {props.children}
    </div>
  )
}

export default ViewWork