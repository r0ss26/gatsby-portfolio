import React from "react"
import styles from "./AboutText.module.css"

const AboutText = () => {
  return (
    <div className={styles.about}>
      <div className={styles.aboutTitle}>A bit about me...</div>
      <div>
        <p>
          I am a software engineer based in Sydney,
          Australia with industry experience building
          innovative full-stack web applications. I have
          a passion for solving interesting
          problems with code.
        </p>
        <p>
          I enjoy using code to build solutions, solve problems and be creative.
          Utilising whichever language, stack or framework is best for the job.
        </p>
      </div>
    </div>
  )
}

export default AboutText
