import {
  ArrowRight,
  Calendar,
  Code,
  Trophy,
  Users,
  GitBranch,
  MapPin,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { events } from "../data/events";
import TeamCard from "../components/TeamCard";
import { coreTeam } from "../data/coreTeam";
import { Globe } from "@/components/ui/globe";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { Particles } from "../components/ui/particles";
import { HexagonPattern } from "../components/ui/hexagon-pattern";
import { cn } from "@/lib/utils";
import { Meteors } from '../components/ui/meteors';


const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Hero = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative  w-screen min-h-screen flex items-center justify-center bg-[black] overflow-hidden">
        
        <HexagonPattern
          hexagons={[
            [1, 1],
            [4, 4],
            [2, 2],
            [3, 4],
            [5, 4],
            [8, 2],
            [6, 3],
            [8, 5],
            [10, 10],
          ]}
          className={cn(
            "absolute inset-0",
            "opacity-100",
            "mask-[radial-gradient(600px_circle_at_center,white,transparent)]",
            "skew-y-6"
          )}
        />

        {/* Globe */}
        <div className="absolute inset-0 z-10 flex items-end justify-center pointer-events-none">
          <div className="w-[900px] h-[900px] md:w-[1100px] md:h-[1100px] lg:w-[1300px] lg:h-[1300px] translate-y-1/2 opacity-100">
            <Globe />
          </div>
        </div>

        {/* Content */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/40 rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-blue-500" />
            <span className="text-blue-400 text-sm font-medium">
              CodeHack Coding Club
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-FFMOON text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-gray-200 leading-tight">
            Build <span className="text-blue-600">Code</span> Debug
          </h1>

          {/* Typing Text */}
          <div className="mt-8">
            <TypingAnimation
              duration={180}
              className="text-gray-300 text-2xl md:text-4xl max-w-2xl mx-auto font-ByteBounce"
            >
              Powered by logic, driven by innovation CodeHack, Government Engineering College Palamu.
            </TypingAnimation>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-10">
  
          {/* REGISTER BUTTON */}
          <motion.div whileHover="hover">
            <Link
              to="/register"
              className="px-8 py-4 h-14 w-60 bg-black font-FFMOON text-blue-600 border border-blue-600 font-semibold rounded-xl flex items-center gap-2 justify-center shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300"
            >
              Register

              <motion.span
                animate={{ x: [0, 6, 0] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="flex items-center"
              >
                <ArrowRight className="w-4 h-4" />
              </motion.span>

            </Link>
          </motion.div>

          {/* EVENTS BUTTON */}
          <Link
            to="/events"
            className="px-8 py-4 h-14 w-60 bg-black font-FFMOON text-gray-200 font-semibold rounded-xl flex items-center gap-2 justify-center border border-gray-700 hover:border-blue-600 transition-all duration-300"
          >
            View Events
            <Calendar className="w-4 h-4" />
          </Link>

        </div>
        </motion.div>
      </section>

      {/* ================= WHAT WE DO ================= */}
      <section className="relative py-24 bg-black overflow-hidden">

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

        <div className="container relative z-10 mx-auto px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="font-FFMOON text-3xl md:text-4xl font-bold text-center text-gray-200 mb-16"
          >
            What We <span className="text-blue-600">Do</span>
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Code, title: "Workshops", desc: "Hands-on tech sessions." },
              { icon: Trophy, title: "Hackathons", desc: "48-hour build events." },
              { icon: Users, title: "Projects", desc: "Real-world collaborations." },
              { icon: GitBranch, title: "Open Source", desc: "Global contributions." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-gray-800/40 rounded-2xl border border-gray-600 p-8 text-center hover:border-blue-600 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-7 h-7 text-blue-600" />
                </div>

                <h3 className="flex items-center justify-center text-sm md:text-lg font-Alphacorsa text-gray-200 mb-3">
                  {item.title}
                </h3>

                <p className="text-sm font-mono text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CORE TEAM ================= */}
      <section className="relative py-24 bg-black">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Particles
          className="w-full h-full"
          quantity={window.innerWidth < 768 ? 40 : 100}
          ease={60}
          size={0.6}
          staticity={40}
        />
      </div>

        <div className="container mx-auto px-6">
          <h2 className="font-FFMOON text-3xl md:text-4xl font-bold text-center text-gray-200 mb-12">
            Core <span className="text-blue-500">Team</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
            {coreTeam.map((member, i) => (
              <TeamCard key={member.name} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= UPCOMING EVENTS ================= */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="font-FFMOON text-3xl md:text-4xl font-bold text-center text-gray-200 mb-16">
            Upcoming <span className="text-blue-500">Events</span>
          </h2>

          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <Particles
              className="w-full h-full"
              quantity={window.innerWidth < 768 ? 40 : 100}
              ease={60}
              size={0.6}
              staticity={40}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/30 transition-all duration-500"
                
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-Alphacorsa text-gray-200 mb-4">
                    {event.title}
                  </h3>

                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                    <Calendar className="w-4 h-4 text-pink-500" />
                    {event.date}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                    <MapPin className="w-4 h-4 text-blue-400" />
                    {event.location}
                  </div>

                  <p className="text-sm text-gray-400">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;