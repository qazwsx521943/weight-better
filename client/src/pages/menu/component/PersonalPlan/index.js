import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MenuCard from './MenuCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';




function PersonalPlan() {

    return (
        <div style={{height:'100vh'}}>
        <Swiper
      spaceBetween={20}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
      <MenuCard/>
      
      </SwiperSlide>

      <SwiperSlide>
      <MenuCard/>
      </SwiperSlide>

      <SwiperSlide>
      <MenuCard/>

      </SwiperSlide>
      <SwiperSlide>
      <MenuCard/>

      </SwiperSlide>
      ...
    </Swiper>
    </div>
    )
}

export default PersonalPlan
