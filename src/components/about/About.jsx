import React from 'react';
import './about.css';
import Smartphone from '../../assets/smartphone.png';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

export const About = () => {
  return (
    <section id='about'>
      <h5>Conheça mais</h5>
      <h2>Sobre mim</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <figure>
              <img
                src={Smartphone}
                alt='Link: https://www.flaticon.com/br/icones-gratis/telefone - Telefone ícones criados por khld939 - Flaticon'
              />
            </figure>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experiência</h5>
              <small>3+ anos na área de desenvolvimento</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clientes</h5>
              <small>37+ clientes pelo mundo</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projetos</h5>
              <small>60+ projetos completos</small>
            </article>
          </div>

          <p>
            Desenvolvedor de Software, com experiência de atuação em grandes projetos de empresas
            multinacionais. Iniciando no desenvolvimento em 2020, me reconheço como entusiasta em
            novas tecnologias do mercado, com aprendizado adquirido dia após dia. Possuo foco em
            desenvolvimento com Javascript, TypeScript, ReactJS, React Native, NodeJS dentre outras
            tecnologias que uso para criar aplicações Web/Mobile de alto nível e valor. Me considero
            ágil e consistente em aprender uma nova tecnologia e alta adaptabilidade às mudanças,
            pronto para superar qualquer desafio.
          </p>

          <a href='#contact' className='btn btn-primary'>
            Vamos conversar
          </a>
        </div>
      </div>
    </section>
  );
};
