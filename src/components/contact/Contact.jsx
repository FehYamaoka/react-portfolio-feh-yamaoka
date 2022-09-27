import React, { useRef } from "react";
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsLinkedin } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com'

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ql2ha3q', 'template_rz3zazp', form.current, 'GTtLFR8jN_kX1_2bS');

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Agende seu horário</h5>
      <h2>Entre em contato</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>fehyamaoka@gmail.com</h5>
            <a href="mailto:fehyamaoka@gmail.com" target='_blank' rel="noreferrer">Envie uma mensagem</a>
          </article>

          <article className="contact__option">
            <BsLinkedin className="contact__option-icon" />
            <h4>LInkedin</h4>
            <h5>Felipe Yamaoka</h5>
            <a href="https://www.linkedin.com/in/felipeyamaoka/" target='_blank' rel="noreferrer">Envie uma mensagem</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>(15) 98100-8092</h5>
            <a href="https://api.whatsapp.com/send?phone=5515981008092" target='_blank' rel="noreferrer">Envie uma mensagem</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Seu nome completo' required />
          <input type='email' name='email' placeholder='Seu Email' required />
          <textarea name='message' rows='7' placeholder='Sua mensagem' required></textarea>
          <button type='submit' className='btn btn-primary'>Envie uma mensagem</button>
        </form>
      </div>
    </section>
  )
}
