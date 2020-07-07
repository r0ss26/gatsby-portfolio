import React from 'react'
import styles from './AboutText.module.css';

const AboutText = () => {
  return (
    <div className={styles.about}>
      <div className={styles.aboutTitle}>A bit about me...</div>
      <div>
        <p>
          I am a software developer in the process of completing a coding
          bootcamp (Diploma of Information Technology) at Coder Academy
          Sydney, Australia.
        </p>
        <p>
          I enjoy using code to build solutions, solve problems and be
          creative. Utilising whichever language, stack or framework is best
          for the job.
        </p>
      </div>
    </div>
  )
}

export default AboutText
