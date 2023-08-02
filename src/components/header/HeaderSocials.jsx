import React from "react"
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FiDribbble } from 'react-icons/fi';
import { BsWhatsapp } from 'react-icons/bs'

export const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/felipeyamaoka/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
      <a href="https://github.com/FehYamaoka" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      <a href="https://api.whatsapp.com/send?phone=5515981008092" target="_blank" rel="noopener noreferrer"><BsWhatsapp /></a>
    </div>
  )
}
