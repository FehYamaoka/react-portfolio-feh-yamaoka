import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

export const Experience = () => {
  return (
    <section id='experience'>
      <h5>Minhas Habilidades</h5>
      <h2>Minha Experiência</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Front-end</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>NodeJS</h4>
                <small className='text-light'>Experiência - 1 ano</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>SQL</h4>
                <small className='text-light'>Experiência - 1 ano</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>PostgreSQL</h4>
                <small className='text-light'>Experiência - 3 anos</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Experiência - 6 meses</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>Docker</h4>
                <small className='text-light'>Experiência - 6 meses</small>
              </div>
            </article>
          </div>
        </div>

        <div className='experience__backend'>
          <h3>Back-end</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experiência - 3 anos</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experiência - 3 anos</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experiência - 2 anos</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experiência - 3 anos</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Experiência - 1 ano</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>React Native</h4>
                <small className='text-light'>Experiência - 1 ano</small>{' '}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
