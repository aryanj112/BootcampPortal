// @ts-ignore
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/swiper-bundle.min.css';


function Lectures() {
  return (
    <div>
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
          <div style={{ height: '300px', background: '#f00' }}>Slide 1</div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div style={{ height: '300px', background: '#0f0' }}>Slide 2</div>
        </SwiperSlide>


      </Swiper>



    </div>
  )
}

export default Lectures