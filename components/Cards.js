import React from 'react'
import { Container } from 'reactstrap'

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow , Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

export default function Cards() {
  return (
    <Container>
      <h2 className='text-light text-center my-5'>NFTs</h2>
      <p className='text-light text-center mb-5 font-bold'>Possíveis NFTs🪐 que você pode adquirir</p>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"3"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        autoplay={{ delay: 700 }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="images/img1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/img2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/img3.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/img4.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/img5.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/img6.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/img7.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/img8.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/img9.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/img10.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/img11.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/img12.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/img13.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/img14.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/img15.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/img16.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/img17.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/img18.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/img19.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/img20.png" />
        </SwiperSlide>

      </Swiper>    
    </Container>
  )
}
