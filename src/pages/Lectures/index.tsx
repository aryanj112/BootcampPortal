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
    <div className="footerAddition">
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
      <div className="footer">
          <div className="footer-section">
          <h2>CONTACT INFORMATION</h2>
          <h3>KIMBER: martinezkimber03@gmail.com</h3>
          <h3>EVELYN: ejiang2@terpmail.umd.edu</h3>
          </div>
          <div className="footer-section">
          <h2>CLASS DETAILS</h2>
          <h3>TIME: Tues 7:00 - 8:00 PM</h3>
          <h3>LOCATION: CSI 1121</h3>
          </div>
      </div>
    </div>
  );
}

export default Lectures;