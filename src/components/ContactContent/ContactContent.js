import React from 'react'

import SocialIcons from '../SocialIcons/SocialIcons';
import ContactForm from '../ContactForm/ContactForm'
import styles from './ContactContent.module.css'

const ContactContent = () => {
  return (
    <>
      <main className={styles.container}>
        <div className={styles.text}>
          <h2 className={styles.title}>Get in touch...</h2>
          <p>I would love to hear about any exciting projects!</p>  
        </div>
        <div>
          <ContactForm />
        </div>
        <div>
          <SocialIcons />
        </div>
      </main>
    </>
  )
}

export default ContactContent
