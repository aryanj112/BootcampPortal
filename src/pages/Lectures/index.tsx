// @ts-ignore
import React from 'react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

function Lectures() {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide className = "slide">Slide 1</SwiperSlide>
        <SwiperSlide className = "slide">Slide 2</SwiperSlide>
        <SwiperSlide className = "slide">Slide 3</SwiperSlide>
        <SwiperSlide className = "slide">Slide 4</SwiperSlide>
      
      </Swiper>

    </div>

  )
}

export default Lectures