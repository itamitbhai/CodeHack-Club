import React from "react";
import TeamCard from "../components/TeamCard";
import TeamMemberCard from "../components/TeamMemberCard";
import { coreTeam } from "../data/coreTeam";
import { coreMembers } from "../data/coreMembers";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel } from "swiper/modules";
import { Particles } from '../components/ui/particles';
import { Meteors } from '../components/ui/meteors';
import "swiper/css";
import "swiper/css/pagination";

const TeamHero = () => {
  return (
    <div className="relative  min-h-screen w-screen bg-black overflow-hidden">
      
      {/* Particles Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Particles
          className="w-full h-full"
          quantity={window.innerWidth < 768 ? 40 : 100}
          ease={60}
          size={0.6}
          staticity={40}
        />
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none">
        <Meteors />
      </div>
      

      {/* Content Wrapper */}
      <div className="relative z-10 ">
        

        {/* Hero */}
        <section className="text-center pt-28">
          <h1 className="font-Gadey text-5xl md:text-6xl font-bold text-white">
            Our <span className="text-blue-600">Team</span>
          </h1>
          <p className="mt-2 font-ByteBounce text-2xl text-gray-500">
            The passionate people driving Coding Club forward.
          </p>
        </section>

        {/* Leadership */}
        <section className="m-5 ">
          <div className="max-w-7xl mx-auto px-6 ">
            <h2 className="font-FFMOON text-3xl  font-bold text-white  text-center">
              Core <span className="text-blue-600">Team</span>
            </h2>

            <Swiper
              modules={[Autoplay, Mousewheel]}
              spaceBetween={30}
              grabCursor={true}
              mousewheel={{ forceToAxis: true }}
              loop={true}
              speed={800}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
            >
              {coreTeam.map((member) => (
                <SwiperSlide key={member.name}>
                  <TeamCard member={member} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* Core Members */}
        <section className="py-10">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-FFMOON text-2xl font-bold mb-10 text-white text-center">
              Core <span className="text-blue-600">Members</span>
            </h2>

            <Swiper
              modules={[Autoplay, Mousewheel]}
              spaceBetween={20}
              grabCursor={true}
              mousewheel={{ forceToAxis: true }}
              loop={true}
              speed={800}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
                1280: { slidesPerView: 5 },
              }}
            >
              {coreMembers.map((member) => (
                <SwiperSlide key={member.name}>
                  <TeamMemberCard member={member} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

      </div>
    </div>
  );
};

export default TeamHero;