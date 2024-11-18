// @ts-ignore
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

function Lectures() {
  return (
    <div className = "slides">
      <Swiper
        modules={[Navigation, EffectCoverflow]} // Pass the modules here
        navigation={true} // Enable navigation arrows
        effect={'coverflow'} // Use the coverflow effect
        grabCursor={true} // Add a grab cursor effect
        centeredSlides={true} // Center the active slide
        slidesPerView={'auto'} // Auto-size slides
        loop={true} // Enable looping
        coverflowEffect={{
          rotate: 50, // Slide rotation angle
          stretch: 0, // Space between slides
          depth: 100, // Depth for the 3D effect
          modifier: 1, // Intensity of the effect
          slideShadows: true, // Enable shadow for 3D illusion
        }}
      >
        <SwiperSlide>
          <div className = "lecture-slide">Slide 1</div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className = "lecture-slide">Slide 2</div>
        </SwiperSlide>

        <SwiperSlide>
          <div className = "lecture-slide">Slide 3</div>
        </SwiperSlide>

        <SwiperSlide>
          <div className = "lecture-slide">Slide 4</div>
        </SwiperSlide>

        <SwiperSlide>
          <div className = "lecture-slide">Slide 5</div>
        </SwiperSlide>

      </Swiper>



    </div>
  )
}

export default Lectures