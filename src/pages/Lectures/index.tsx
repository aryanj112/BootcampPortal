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
        spaceBetween={20}
        slidesPerView={2.5}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide className={classes.slide}>Slide 1</SwiperSlide>
        <SwiperSlide className={classes.slide}>Slide 2</SwiperSlide>
        <SwiperSlide className={classes.slide}>Slide 3</SwiperSlide>
        <SwiperSlide className={classes.slide}>Slide 4</SwiperSlide>
      
      </Swiper>

    </div>

  )
}

export default Lectures