// @ts-ignore
import React from 'react';
// Swiper Imports
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
// CSS Imports
import classes from './Lectures.module.css';

function Lectures() {
  return (
    <div className={classes.container}>
      <Swiper
        className={classes.swiperContainer}
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={0}
        slidesPerView={0}
        navigation={{
          prevEl: `.${classes.swiperButtonPrev}`,
          nextEl: `.${classes.swiperButtonNext}`,
        }}
        pagination={{ 
          el: `.${classes.swiperPagination}`, 
          clickable: true 
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide className={classes.slide}>Slide 1</SwiperSlide>
        <SwiperSlide className={classes.slide}>Slide 2</SwiperSlide>
        <SwiperSlide className={classes.slide}>Slide 3</SwiperSlide>
        <SwiperSlide className={classes.slide}>Slide 4</SwiperSlide>
      </Swiper>

      {/* Controls Wrapper (with Navigation Buttons and Pagination) */}
      <div className={classes.controlsWrapper}>
        {/* Previous Button */}
        <div className={`swiper-button-prev ${classes.swiperButtonPrev} `} />
        {/* Pagination */}
        <div className={classes.swiperPagination}></div>
        {/* Next Button */}
        <div className={`swiper-button-next ${classes.swiperButtonNext}`} />
      </div>
    </div>
  );
}

export default Lectures;