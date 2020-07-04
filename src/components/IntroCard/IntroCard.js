import React from 'react';
import Typewriter from 'typewriter-effect';
import styles from './IntroCard.module.css';

const IntroCard = () => {
  return (
    <div className={styles.leftAlign}>
      <span>Hey,</span><br /> 
      <span>I'm Ross.</span><br />
      <span>
        <Typewriter
          options={{loop: true, delay: 100}}
          onInit={typewriter => {
            typewriter.start()
              .typeString('Developer.')
              .deleteAll()
              .pauseFor(1000)
              .deleteAll()
              .typeString('Creative.')
              .pauseFor(1000)
              .deleteAll()
              .typeString('Blogger.')
              .pauseFor(1000)
        }} />
      </span>
    </div>
  )
};

export default IntroCard;
