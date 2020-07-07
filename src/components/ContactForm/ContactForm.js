import React from 'react'
import styles from './ContactForm.module.css';

const ContactForm = () => {
  return (
    <form className={styles.form} method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <input type="text" name="name" id="name" placeholder="Name" />
      <input
        type="text"
        name="subject"
        id="subject"
        placeholder="Subject"
      />
      <input type="email" name="email" id="email" placeholder="E-mail" />
      <textarea
        rows="13"
        id="body"
        name="body"
        placeholder="Message"
      ></textarea>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default ContactForm
