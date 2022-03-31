import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4c8x3gr', 'template_sekvwzp', form.current, 'WFa5mkkTLeza_f7V-')

    e.target.reset()

  };
  
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>mackenziedboss1@gmail.com</h5>
            <a href="mailto:mackenziedboss1@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Business Email</h4>
            <h5>skyquakestudios@gmail.com</h5>
            <a href="mailto:skyquakestudios@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <BsLinkedin className='contact__option-icon'/>
            <h4>Linkedin</h4>
            <h5>mackenziedboss1@gmail.com</h5>
            <a href="https://uk.linkedin.com/" target="_blank">Send a message</a>
          </article>

        </div>
        {/*END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact