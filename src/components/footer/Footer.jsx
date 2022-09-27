import React from "react";
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'

export const Footer = () => {
    return (
      <footer>
        <a href="teste" className="footer__logo">Felipe Yamaoka</a>

        <ul className="permalinks">
          <li><a href="#home">Início</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#experience">Experiência</a></li>
          <li><a href="#services">Serviços</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonials">Depoimentos</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/felipeyamaoka/" target='_blank' rel="noreferrer"><BsLinkedin /></a>
          <a href="https://api.whatsapp.com/send?phone=5515981008092" target='_blank' rel="noreferrer"><BsWhatsapp /></a>
        </div>

        <div className="footer__copyright">
          <small>&copy; Felipe de S. Yamaoka. All rights reserved</small>
        </div>
      </footer>
    )
}
