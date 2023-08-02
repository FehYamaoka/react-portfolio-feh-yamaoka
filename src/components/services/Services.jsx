import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';

export const Services = () => {
  return (
    <section id='services'>
      <h5>O que eu ofereço</h5>
      <h2>Serviços</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>DevOps</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Configuração e gerenciamento de ambientes de desenvolvimento e produção.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Automação de implantação e integração contínua (CI/CD).</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Monitoramento e análise de desempenho.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Gestão de contêineres e orquestração.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Gerenciamento de infraestrutura como código (IaC).</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Planejamento e execução de migrações de infraestrutura.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Segurança e conformidade.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Desenvolvimento Web</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Desenvolvimento de sites e aplicativos web.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Desenvolvimento de comércio eletrônico.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Desenvolvimento de temas e templates.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Integração de APIs.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Otimização de desempenho.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Desenvolvimento responsivo.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Desenvolvimento de aplicações web progressivas (PWA).</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Integração de sistemas de gerenciamento de conteúdo (CMS).</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Sistemas de Informação</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Sistemas de Informação Transacionais.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Sistemas de Informações Gerenciais.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Sistemas de Apoio à Decisão.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Sistemas de Informações Executivas.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Desenvolvimento de Sistemas Empresariais.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Desenvolvimento de Sistemas de Saúde Eletrônica (eHealth).</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Desenvolvimento de Sistemas de Gestão de Recursos Humanos (RH).</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>ERP (Enterprise Resource Planning).</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};
