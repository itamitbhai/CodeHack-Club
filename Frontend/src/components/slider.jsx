import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

import slide_image_1 from "../assets/club-logo.jpeg";
import slide_image_2 from "../assets/Tech-Head.jpg";
import slide_image_3 from "../assets/Sneha_Kumari.jpeg";
import slide_image_4 from "../assets/club-logo.jpeg";
import slide_image_5 from "../assets/club-logo.jpeg";
import slide_image_6 from "../assets/club-logo.jpeg";

function TeamSwiper() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20 bg-black">

      {/* Heading */}
      <h1 className="text-center text-4xl font-bold text-white mb-16">
        Leadership
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
          depth: 120,
          modifier: 2.5,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="teamSwiper"
      >
        {[
          slide_image_1,
          slide_image_2,
          slide_image_3,
          slide_image_4,
          slide_image_5,
          slide_image_6,
        ].map((img, index) => (
          <SwiperSlide
            key={index}
            className="w-[280px] sm:w-[320px] h-[380px]"
          >
            <div className="bg-[#0b1220] rounded-2xl overflow-hidden shadow-xl border border-white/10">
              <img
                src={img}
                alt="slide"
                className="w-full h-[250px] object-cover"
              />
              <div className="p-5 text-center">
                <h3 className="text-white font-semibold">
                  Team Member {index + 1}
                </h3>
                <p className="text-emerald-400 text-sm">
                  Role Name
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TeamSwiper;