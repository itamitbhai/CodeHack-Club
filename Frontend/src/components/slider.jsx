import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

import slide_image_1 from "../assets/club-logo.jpeg";
import slide_image_2 from "../assets/club-logo.jpeg";
import slide_image_3 from "../assets/club-logo.jpeg";
import slide_image_4 from "../assets/club-logo.jpeg";
import slide_image_5 from "../assets/club-logo.jpeg";
import slide_image_6 from "../assets/club-logo.jpeg";
import slide_image_7 from "../assets/club-logo.jpeg";

function TeamSwiper() {
  return (
    <div className="max-w-[124rem] mx-auto px-4 py-16 bg-gray-100">
      
      {/* Heading */}
      <h1 className="text-center text-4xl font-bold mb-10">
        Flower Gallery
      </h1>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="relative h-[52rem] py-8"
      >
        {[slide_image_1,
          slide_image_2,
          slide_image_3,
          slide_image_4,
          slide_image_5,
          slide_image_6,
          slide_image_7].map((img, index) => (
          <SwiperSlide
            key={index}
            className="w-[37rem] h-[42rem] max-[500px]:w-[28rem] max-[500px]:h-[36rem]"
          >
            <img
              src={img}
              alt="slide"
              className="w-full h-full rounded-3xl object-cover"
            />
          </SwiperSlide>
        ))}

        {/* Controls */}
        <div className="flex items-center justify-center mt-8 relative">

          {/* Prev */}
          <div className="swiper-button-prev !left-[42%] max-[990px]:!left-[30%] max-[450px]:!left-[20%] 
                          bg-white w-14 h-14 rounded-full flex items-center justify-center 
                          shadow-lg">
            <ion-icon name="arrow-back-outline" class="text-2xl text-gray-800"></ion-icon>
          </div>

          {/* Next */}
          <div className="swiper-button-next !left-[58%] max-[990px]:!left-[70%] max-[450px]:!left-[80%] 
                          bg-white w-14 h-14 rounded-full flex items-center justify-center 
                          shadow-lg">
            <ion-icon name="arrow-forward-outline" class="text-2xl text-gray-800"></ion-icon>
          </div>

          {/* Pagination */}
          <div className="swiper-pagination !bottom-4 !w-[15rem]"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default TeamSwiper;
