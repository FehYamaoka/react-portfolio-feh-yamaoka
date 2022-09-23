import React from 'react';
import './testimonials.css';
import avatar1 from '../../assets/avatar1.jpg';
import avatar2 from '../../assets/avatar2.jpg';
import avatar3 from '../../assets/avatar3.jpg';
import avatar4 from '../../assets/avatar4.jpg';

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper Styles
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'

const data = [
  {
    image: avatar1,
    name: 'Amanda Cristina',
    testimonial:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius mollitia tenetur esse aliquid quibusdam nemo explicabo, enim voluptates ut exercitationem repudiandae porro? Aspernatur cumque impedit non perferendis, libero ad debitis!',
  },
  {
    image: avatar2,
    name: 'Rodrigo Lemos',
    testimonial:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius mollitia tenetur esse aliquid quibusdam nemo explicabo, enim voluptates ut exercitationem repudiandae porro? Aspernatur cumque impedit non perferendis, libero ad debitis!',
  },
  {
    image: avatar3,
    name: 'Rodrigo Lemos',
    testimonial:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius mollitia tenetur esse aliquid quibusdam nemo explicabo, enim voluptates ut exercitationem repudiandae porro? Aspernatur cumque impedit non perferendis, libero ad debitis!',
  },
  {
    image: avatar4,
    name: 'Rodrigo Lemos',
    testimonial:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius mollitia tenetur esse aliquid quibusdam nemo explicabo, enim voluptates ut exercitationem repudiandae porro? Aspernatur cumque impedit non perferendis, libero ad debitis!',
  },
];

export const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Feedback de clientes</h5>
      <h2>Avaliação</h2>

      <Swiper
        className='container testimonials__container'
        modules={[ Pagination ]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ image, name, testimonial }, index) => {
          return (
            <SwiperSlide key={index} className='testimonial'>
              <div className='client__avatar'>
                <img src={image} alt='avatar do cliente' />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{testimonial}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
