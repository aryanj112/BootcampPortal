// @ts-ignore
import React from 'react';
// Swiper Imports
import { Navigation, A11y, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

// CSS Imports
import './Lectures.css';

function Lectures() {

  return (
    <div className='container'>
      <h1>Lectures</h1>
      <Swiper
        className="swiper_container"
        effect={'coverflow'}
        grabCursor={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[EffectCoverflow, Navigation, A11y]}
        onSlideChange={() => console.log('Slide changed')}
      >
        <SwiperSlide className='slide'>Slide 1</SwiperSlide>
        <SwiperSlide className='slide'>Slide 2</SwiperSlide>
        <SwiperSlide className='slide'>Slide 3</SwiperSlide>
        <SwiperSlide className='slide'>Slide 4</SwiperSlide>
        <SwiperSlide className='slide'>Slide 5</SwiperSlide>
        <SwiperSlide className='slide'>Slide 6</SwiperSlide>
        <SwiperSlide className='slide'>Slide 7</SwiperSlide>
        <SwiperSlide className='slide'>Slide 8</SwiperSlide>

      <div className="swiper-button-prev slider-arrow"/>
      <div className="swiper-button-next slider-arrow"/>

      </Swiper>
    </div>
  );
}

export default Lectures;