
import { ArrowRight, Calendar, Zap, Code, Trophy, Users, GitBranch } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {  MapPin } from "lucide-react";

import { events } from "../data/events";
import TeamCard from "../components/TeamCard";
import { coreTeam } from "../data/coreTeam";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

const Hero = () => {
  return (
    <>
      <section className="relative w-screen h-[100dvh] flex items-center justify-center bg-[#030712] overflow-hidden">

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:40px_40px] opacity-40"></div>

        <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 via-transparent to-black"></div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm mb-8">
            <Zap className="w-4 h-4" />
            Open for new members
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-gray-200">
            Build. <span className="text-green-400">Code.</span> Innovate.
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            We are a community of passionate developers, designers, and innovators
            building the future through code, collaboration, and creativity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <Link
              to="/join"
              className="px-8 py-4 bg-green-500 text-black font-semibold rounded-xl flex items-center gap-2 justify-center shadow-lg shadow-green-500/20 hover:shadow-green-500/40 hover:scale-105 transition-all duration-300"
            >
              Join the Club
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/events"
              className="px-8 py-4 bg-gray-800 text-gray-200 font-semibold rounded-xl flex items-center gap-2 justify-center border border-gray-700 hover:border-green-400 transition-all duration-300"
            >
              View Events
              <Calendar className="w-4 h-4" />
            </Link>

          </div>
        </div>
      </section>

      <section className="py-24 bg-[#030712]">

        <div className="container mx-auto px-6">

          <motion.h2
            {...fadeUp}
            className="text-3xl md:text-4xl font-bold text-center text-gray-200 mb-16"
          >
            What We <span className="text-green-400">Do</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              { icon: Code, title: "Workshops", desc: "Hands-on sessions on trending technologies and frameworks." },
              { icon: Trophy, title: "Hackathons", desc: "48-hour build events with prizes and mentors." },
              { icon: Users, title: "Projects", desc: "Collaborative projects solving real-world problems." },
              { icon: GitBranch, title: "Open Source", desc: "Contributing to global open source initiatives." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-gray-900 rounded-2xl border border-gray-800 p-8 text-center hover:border-green-400/50 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300 group"
              >

                <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500/20 transition-colors duration-300">
                  <item.icon className="w-7 h-7 text-green-400" />
                </div>

                <h3 className="text-lg font-semibold text-gray-200 mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.desc}
                </p>

              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* events section hai ye */}
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

    {/* team ka section */}
        <section className="py-24 bg-[#030712]">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="flex items-center justify-between mb-12">

          <motion.h2
            {...fadeUp}
            className="text-3xl md:text-4xl font-bold text-gray-200"
          >
            Core <span className="text-green-400">Team</span>
          </motion.h2>

          <Link
            to="/team"
            className="text-green-400 text-sm font-medium inline-flex items-center gap-2 hover:gap-3 transition-all duration-300"
          >
            Meet Everyone
            <ArrowRight className="w-4 h-4" />
          </Link>

        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreTeam.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>

      </div>
    </section>

    </>
  );
};

export default Hero;
