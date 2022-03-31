import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




const data = [
  {
    avatar: AVTR1,
    name: 'B1Q',
    review: 'Yes, he make good site very good'
  },
  {
    avatar: AVTR2,
    name: 'Zoso',
    review: 'Good work, paid him to send me irn bru'
  },
  {
    avatar: AVTR3,
    name: 'Leaf',
    review: 'I have portfolio now'
  },
  {
    avatar: AVTR4,
    name: 'Terra',
    review: 'Boop the snoot'
  },
]






const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar}/>
          </div>
          <h5 className='client__name'>{name}</h5>
          <small className='client__review'>{review}</small>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials