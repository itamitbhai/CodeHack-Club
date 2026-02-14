import React from 'react'
import { Const } from 'three/tsl'
import { motion } from 'framer-motion'
import { events } from '../data/events'
import { Calendar, MapPin } from 'lucide-react'

const  Events =() => {
  return (
    <div className=''>
       <section className="w-screen bg-black top-0 text-center pt-30 pb-16">
         <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
              Our <span className="text-emerald-400">Events</span>
           </h1>

           <p className="mt-6 text-lg text-gray-400">
             Workshops, hackathons, and meetups to level up your skills.


            </p>
         </div>
       </section>
       <section className="py-24 bg-[#030712]">
      <div className="container mx-auto px-6">

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-200 mb-16"
        >
          Upcoming <span className="text-green-400">Events</span>
        </motion.h2>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        
          
          {events.map((event, index) => (
  <motion.div
    key={event.title}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.15, duration: 0.5 }}
    className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-green-400/50 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300"
  >
    {/* Image */}
    <div className="h-48 overflow-hidden">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
      />
    </div>

    {/* Content */}
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-200 mb-4">
        {event.title}
      </h3>

      <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
        <Calendar className="w-4 h-4 text-green-400" />
        {event.date}
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
        <MapPin className="w-4 h-4 text-green-400" />
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
  )
}

export default Events
