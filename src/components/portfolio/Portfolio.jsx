import React from 'react';
import './portfolio.css';
import image1 from '../../assets/portfolio1.jpg';

const data = [
  {
    id: 1,
    image: image1,
    title: 'Project in progress',
    github: 'https://github.com',
    demo: 'https://dribbble.com',
  },
];

export const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Meus trabalhos recentes</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title} />
                <h3>Projeto em desenvolvimento</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn'>
                    Github
                  </a>
                  <a
                    href={demo}
                    className='btn btn-primary'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Demonstração
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
