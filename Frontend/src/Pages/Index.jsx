import {
  ArrowRight,
  Calendar,
  Code,
  Trophy,
  Users,
  GitBranch,
  MapPin,
  Zap,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { events } from "../data/events";
import TeamCard from "../components/TeamCard";
import { coreTeam } from "../data/coreTeam";
import { Globe } from "@/components/ui/globe";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { cn } from "../lib/utils.js";
import { TypingAnimation } from "@/components/ui/typing-animation";



const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

const Hero = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-screen h-dvh flex items-center justify-center bg-[#030712] overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:40px_40px] opacity-40"></div>

        {/* Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-black"></div>

        {/* Cinematic Globe (Half Hidden Bottom) */}
        <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
          <div
            className="
              w-[900px] h-[900px]
              md:w-[1100px] md:h-[1100px]
              lg:w-[1400px] lg:h-[1400px]
              translate-y-1/2
              opacity-90
            "
          >
            <Globe />
          </div>
        </div>

        {/* Content ye hai */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="group relative mx-auto flex items-center justify-center rounded-full px-1 py-4 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] md:mb-60 mb-25 w-78">
            <span
              className={cn(
                "animate-gradient absolute inset-0 block h-full w-full rounded-[inherit] bg-gradient-to-r from-[#ffaa40] via-[#ff0077] to-[#ffaa40] bg-[length:300%_100%] p-[2px]"
              )}
              style={{
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "destination-out",
                mask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                maskComposite: "subtract",
                WebkitClipPath: "padding-box",
              }}
            />

        {/* Badge */}
        <div className="inline-flex items-center gap-2 
          bg-blue-600/10 border border-blue-500/40 
          rounded-full px-4 py-2 mb-6">
          <Zap className="w-4 h-4 text-blue-600" />
          <span className="text-blue-600 text-sm font-medium">
            CodeHack Coding Club
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl 
          font-FFMOON tracking-tight 
          text-gray-200 leading-tight">
          Build <span className="text-blue-600">Code</span> Debug
        </h1>

</section>
          
          <div className="flex flex-col gap-8 mb-100">
          <div className="">
            <TypingAnimation
              duration={180}
              className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-mono text-center"
            >
              We are a community of passionate developers building the future
              through code, collaboration, and creativity.
            </TypingAnimation>
          </div>

          <div className="flex items-center justify-center">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-20">
            <Link 
              to="/join"
              className="px-8 py- h-14 w-60  text-red-600 bg-black border border-blue-600 font-semibold rounded-xl flex items-center gap-2 justify-center shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300 font-mono"
            >
              Join the Club
              <ArrowRight className="w-4 h-4 text-red-600" />
            </Link>

            <Link
              to="/events"
              className="px-8 py-4 h-14 w-60 bg-black text-gray-200 font-semibold rounded-xl flex items-center gap-2 justify-center border border-gray-700 hover:border-blue-600 transition-all duration-300 font-mono"
            >
              View Events
              <Calendar className="w-4 h-4" />
            </Link>
          </div>
          </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT WE DO ================= */}
      <section className="py-24 bg-[black]">
        <div className="container mx-auto px-6">
          <motion.h2
            {...fadeUp}
            className="text-3xl md:text-4xl font-bold text-center text-gray-200 mb-16 font-FFMOON"
          >
            What We <span className="text-blue-600">Do</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Code,
                title: "Workshops",
                desc: "Hands-on sessions on trending technologies and frameworks.",
              },
              {
                icon: Trophy,
                title: "Hackathons",
                desc: "48-hour build events with prizes and mentors.",
              },
              {
                icon: Users,
                title: "Projects",
                desc: "Collaborative projects solving real-world problems.",
              },
              {
                icon: GitBranch,
                title: "Open Source",
                desc: "Contributing to global open source initiatives.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-gray-900 rounded-2xl border border-gray-800 p-8 text-center hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500/20 transition-colors duration-300">
                  <item.icon className="w-7 h-7 text-blue-400" />
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

      {/* ================= TEAM ================= */}
      <section className="py-24 bg-[black]">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <motion.h2
              {...fadeUp}
              className="text-xl md:text-4xl font-bold text-gray-200 font-FFMOON"
            >
              Core <span className="text-blue-600">Team</span>
            </motion.h2>

            <Link
              to="/team"
              className="text-blue-400 text-sm font-medium inline-flex items-center gap-2 hover:gap-3 transition-all duration-300"
            >
              Meet Everyone
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreTeam.map((member, i) => (
              <TeamCard key={member.name} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= EVENTS ================= */}
      <section className="py-24 bg-[black]">
        <div className="container mx-auto px-6">
          <motion.h2
            {...fadeUp}
            className="text-3xl md:text-4xl font-bold text-center text-gray-200 mb-16 font-FFMOON"
          >
            Upcoming <span className="text-blue-600">Events</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-200 mb-4">
                    {event.title}
                  </h3>

                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                    <Calendar className="w-4 h-4 text-blue-400" />
                    {event.date}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                    <MapPin className="w-4 h-4 text-blue-400" />
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
    </>
  );
};

export default Hero;
