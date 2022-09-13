import React from "react";
import "./header.css";
import { CTA } from './CTA';
import ME from '../../assets/me.png';
import { HeaderSocials } from "./HeaderSocials";

export const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Olá, Eu sou o</h5>
        <h1>Felipe Yamaoka</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className="scroll__down">Role para baixo</a>
      </div>
    </header>
  )
};
