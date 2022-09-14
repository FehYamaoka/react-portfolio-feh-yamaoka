import React from "react";
import './about.css';
import Smartphone from '../../assets/smartphone.png'
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from 'react-icons/vsc'

export const About = () => {
    return (
      <section id="about">
        <h5>Conheça mais</h5>
        <h2>Sobre mim</h2>

        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <figure>
                <img src={Smartphone} alt="Link: https://www.flaticon.com/br/icones-gratis/telefone - Telefone ícones criados por khld939 - Flaticon" />
              </figure>
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon"/>
                <h5>Experiência</h5>
                <small>3+ anos na área de desenvolvimento</small>
              </article>

              <article className="about__card">
                <FiUsers className="about__icon"/>
                <h5>Clientes</h5>
                <small>37+ clientes pelo mundo</small>
              </article>

              <article className="about__card">
                <VscFolderLibrary className="about__icon"/>
                <h5>Projetos</h5>
                <small>60+ projetos completos</small>
              </article>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non maiores vero fugiat natus, quos iusto eum? Adipisci laudantium ipsam voluptas provident, inventore, facilis unde libero voluptatem eius dignissimos incidunt est?
            </p>

            <a href="#contact" className="btn btn-primary">Vamos conversar</a>

          </div>
        </div>
      </section>
    )
}
