import { Target, Eye } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="h-screen w-screen bg-[#0b0f17] text-white">

      {/* Hero Section */}
      <section className="py-28 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          About <span className="text-emerald-400">CodeClub</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Learn about our mission, vision, and the people behind the community.
        </p>
      </section>

      {/* Mission & Vision Section */}
      <section className="pb-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          {/* Mission Card */}
          <div className="bg-[#111827] border border-gray-800 rounded-2xl p-10 hover:border-emerald-400/40 transition duration-300">

            <div className="w-14 h-14 rounded-xl bg-emerald-400/10 flex items-center justify-center mb-6">
              <Target className="text-emerald-400 w-6 h-6" />
            </div>

            <h2 className="text-2xl font-semibold mb-4">
              Our Mission
            </h2>

            <p className="text-gray-400 leading-relaxed">
              To create a vibrant ecosystem where students can learn, build, and grow as developers. 
              We aim to bridge the gap between academic learning and industry-ready skills through 
              hands-on workshops, real-world projects, and collaborative hackathons.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-[#111827] border border-gray-800 rounded-2xl p-10 hover:border-emerald-400/40 transition duration-300">

            <div className="w-14 h-14 rounded-xl bg-emerald-400/10 flex items-center justify-center mb-6">
              <Eye className="text-emerald-400 w-6 h-6" />
            </div>

            <h2 className="text-2xl font-semibold mb-4">
              Our Vision
            </h2>

            <p className="text-gray-400 leading-relaxed">
              To be the go-to community for aspiring technologists in our college — a space 
              where innovation is nurtured, ideas are celebrated, and every student feels 
              empowered to build something meaningful with code.
            </p>
          </div>

        </div>
      </section>



        <section className="py-28 bg-[#050b12] text-white">
         <div className="max-w-6xl mx-auto px-6">

           {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Why <span className="text-emerald-400">Join Us?</span>
          </h2>

            {/* Cards */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {[
           {
             title: "Learn by Doing",
              desc: "Build real projects, not just follow tutorials. Apply what you learn immediately.",
           },
          {
           title: "Network & Collaborate",
           desc: "Connect with like-minded peers, seniors, and industry professionals.",
          },
         {
           title: "Boost Your Resume",
           desc: "Open source contributions, hackathon wins, and project experience that stands out.",
          },
         {
           title: "Mentorship",
           desc: "Get guidance from experienced seniors and faculty who've been through it all.",
          },
         {
           title: "Hackathon Ready",
           desc: "Participate in inter-college and national-level hackathons as a team.",
          },
         {
           title: "Free Resources",
           desc: "Access curated learning paths, DSA notes, and interview prep material.",
          },
         ].map((item) => (
          <div
            key={item.title}
            className="bg-[#0d1623] border border-[#1f2a3a] rounded-2xl p-8 
                     hover:border-emerald-400/40 
                     transition-all duration-300"
          >
           <h3 className="text-lg font-semibold mb-3">
             {item.title}
           </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              {item.desc}
            </p>
         </div>
         ))}

         </div>

         </div>
       </section>
<section className="py-24 bg-black">
  <div className="container mx-auto px-6">
    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
      Faculty <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Coordinator</span>
    </h2>

    {/* Card */}
    <div className="max-w-3xl mx-auto">
      <div className="rounded-xl border border-white/10 bg-gradient-to-br from-[#0f172a] to-[#0b1220] p-8 hover:border-teal-400/40 transition-all duration-300">
        
        {/* Icon Circle */}
        <div className="w-14 h-14 rounded-xl bg-teal-500/10 flex items-center justify-center mb-6">
          <svg
            className="w-6 h-6 text-teal-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A9 9 0 1118 9m-9 9h.01" />
          </svg>
        </div>

        {/* Content */}
        <h3 className="text-2xl font-semibold text-white mb-2">
          Prof Bhawesh kumar
        </h3>

        <p className="text-teal-400 font-medium mb-4">
          Associate Professor, Department of Computer Science
        </p>

        <p className="text-gray-400 leading-relaxed">
          Prof. Bhawesh brings 15+ years of industry and academic experience, guiding the club's
          technical direction and mentoring students for competitive programming and research.
        </p>
      </div>
    </div>
  </div>
</section>
<section className="py-24 bg-black">
  <div className="container mx-auto px-6">
    <div className="max-w-3xl mx-auto">

      {/* Heading */}
      <div className="flex items-center gap-3 mb-10">
        <svg
          className="w-6 h-6 text-teal-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
        </svg>
        <h2 className="text-3xl font-bold text-white">
          Club <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Journey</span>
        </h2>
      </div>

      {/* Timeline */}
      <div className="space-y-10 border-l border-white/10 pl-8">

        {/* 2026 */}
        <div>
          <p className="text-teal-400 font-medium text-sm mb-2">2026 — The Beginning</p>
          <p className="text-gray-400 leading-relaxed">
            Founded by a group of passionate students with a vision to build a strong technical
            community focused on collaboration, innovation, and real-world learning.
          </p>
        </div>

        {/* Vision Phase */}
        <div>
          <p className="text-teal-400 font-medium text-sm mb-2">Vision Phase</p>
          <p className="text-gray-400 leading-relaxed">
            Conducting our first coding meetups, workshops, and collaborative projects to
            create a culture of hands-on learning and teamwork.
          </p>
        </div>

        {/* Growth */}
        <div>
          <p className="text-teal-400 font-medium text-sm mb-2">Growing Community</p>
          <p className="text-gray-400 leading-relaxed">
            Expanding our member base, organizing internal hackathons, and preparing teams
            for inter-college technical competitions.
          </p>
        </div>

        {/* Future */}
        <div>
          <p className="text-teal-400 font-medium text-sm mb-2">The Future Ahead</p>
          <p className="text-gray-400 leading-relaxed">
            Our goal is to become a nationally recognized technical club, contribute to
            open-source projects, and create industry-ready developers.
          </p>
        </div>

      </div>
    </div>
  </div>
</section>




    </div>
  );
};

export default About;
