import React from 'react';
import { motion } from 'framer-motion';
import { events } from '../data/events';
import { Calendar, MapPin } from 'lucide-react';
import { Particles } from "../components/ui/particles";

const Events = () => {
  return (
    <div className='relative'>

      {/* HERO */}
      <section className="w-screen bg-black text-center pt-20 pb-10 relative overflow-hidden">

        {/*  PARTICLES (FIXED BACKGROUND) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Particles
            className="w-full h-full"
            quantity={window.innerWidth < 768 ? 40 : 100}
            ease={60}
            size={0.6}
            staticity={40}
          />
        </div>

        {/* CONTENT */}
        <div className="max-w-4xl mx-auto px-4 relative z-10">

          <h1 className="text-5xl md:text-6xl font-Gadey text-white tracking-wide">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-cyan-400">
              Events
            </span>
          </h1>

          <p className="mt-3 text-lg md:text-2xl font-ByteBounce text-gray-400">
            Workshops, hackathons, and meetups to level up your skills.
          </p>

        </div>
      </section>

      {/* EVENTS */}
      <section className="pt-6 pb-24 bg-[#000000] relative">

        <div className="container mx-auto px-6">

          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-FFMOON text-center text-gray-200 mb-10"
          >
            <div className="absolute inset-0 z-0 pointer-events-none">
          <Particles
            className="w-full h-full"
            quantity={window.innerWidth < 768 ? 40 : 100}
            ease={60}
            size={0.6}
            staticity={40}
          />
        </div>
            Upcoming{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-400">
              Events
            </span>
          </motion.h2>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}

                className="group relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/30 transition-all duration-500"
              >

                {/* GLOW BACKGROUND */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-br from-black to-black blur-xl"></div>

                {/* IMAGE */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6 relative z-10">

                  <h3 className="text-xl font-Alphacorsa text-white mb-3 tracking-wide">
                    {event.title}
                  </h3>

                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                    <Calendar className="w-4 h-4 text-blue-400" />
                    {event.date}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                    <MapPin className="w-4 h-4 text-pink-500" />
                    {event.location}
                  </div>

                  <p className="text-sm text-gray-400 leading-relaxed">
                    {event.description}
                  </p>

                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
