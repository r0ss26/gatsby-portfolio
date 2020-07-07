import React from "react"
import Typewriter from "typewriter-effect"
import styles from "./IntroCard.module.css"

const IntroCard = () => {
  return (
    <div className={styles.leftAlign}>
      <span>Hey,</span>
      <br />
      <span>I'm Ross.</span>
      <br />
      <span>
        <Typewriter
          options={{ delay: 100 }}
          onInit={typewriter => {
            typewriter
              .start()
              .typeString("Creator.")
              .deleteAll()
              .pauseFor(1000)
              .deleteAll()
              .typeString("Blogger.")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Developer.")
          }}
        />
      </span>
    </div>
  )
}

export default IntroCard
