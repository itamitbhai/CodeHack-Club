import { Target, Eye } from "lucide-react";
import TiltCard from "@/components/TiltCard";
import Faculty from '../assets/image/boy.jpg'
import { Particles } from "../components/ui/particles";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen w-screen bg-[black] text-white">
      <main className="grow">

        {/* Hero Section */}
        <section className="py-28 text-center px-6">
          <h1 className="font-FFMOON text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-blue-600">Club</span>
          </h1>
          <p className="text-gray-400 font-ByteBounce text-2xl max-w-2xl mx-auto">
            Learn about our mission, vision, and the people behind the community.
          </p>
        </section>

        {/* Mission & Vision Section */}
        <section className=" pb-36 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

            {/* Mission Card */}
            <TiltCard>
              <div className="bg-gray-800/30 border border-blue-600 rounded-2xl p-10 hover:border-cyan-100 transition duration-300">
                <div className="w-14 h-14 rounded-xl bg-blue-400/10 flex items-center justify-center mb-6">
                  <Target className="text-blue-600 w-6 h-6" />
                </div>

                <h2 className="font-FFMOON text-blue-600 text-2xl font-semibold mb-4">
                  Our Mission
                </h2>

                <p className="text-gray-400 font-ByteBounce text-xl leading-relaxed">
                  To create a vibrant ecosystem where students can learn, build, and grow as developers. 
                  We aim to bridge the gap between academic learning and industry-ready skills through 
                 real-world projects, and collaborative hackathons.
                </p>

                <div className="absolute top-30 right-10 w-30 h-30 bg-blue-600 rounded-full blur-3xl animate-float2"></div>
                
              </div>
            </TiltCard>

            {/* Vision Card */}
            <TiltCard>
              <div className="bg-gray-800/30 border border-blue-600 rounded-2xl p-10 hover:border-cyan-100 transition duration-300">
                <div className="w-14 h-14 rounded-xl bg-blue-400/10 flex items-center justify-center mb-6">
                  <Eye className="text-blue-600 w-6 h-6" />
                </div>

                <h2 className="font-FFMOON text-blue-600 text-2xl font-semibold mb-4">
                  Our Vision
                </h2>

                <p className="text-gray-400 leading-relaxed font-ByteBounce text-xl">
                  To be the go-to community for aspiring technologists in our college — a space 
                  where innovation is nurtured, ideas are celebrated, and every student feels 
                  empowered to build something meaningful with code.
                </p>

                <div className="absolute top-30 right-10 w-30 h-30 bg-blue-600 rounded-full blur-3xl animate-float2"></div>

              </div>
            </TiltCard>

          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-28 bg-[black] px-6">

          <div className="max-w-6xl mx-auto">
            <h2 className="font-FFMOON text-4xl md:text-5xl font-bold text-center mb-16">
              Why <span className="text-blue-600">Join Us</span>
            </h2>

            <div className="grid  grid-cols-1 md:grid-cols-3 gap-8 ">

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
                  className="bg-gray-800/20 border border-[#284672] rounded-2xl p-8 hover:border-blue-600 transition-all duration-300"
                >
                  <h3 className="text-blue-600 text-3xl  font-semibold mb-2 font-ByteBounce ">
                    {item.title}
                  </h3>
                  <p className="text-gray-400  font-mono text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
              

              
            </div>
          </div>

          
        </section>

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

        {/* Faculty Coordinator */}
        <section className="py-24 bg-black px-6 relative overflow-hidden">

          {/* PARTICLES BACKGROUND */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <Particles
              className="w-full h-full"
              quantity={window.innerWidth < 768 ? 40 : 100}
              ease={60}
              size={0.9}
              staticity={40}
            />
          </div>

          {/* CONTENT */}
          <div className="max-w-lg mx-auto relative z-10">
            <h2 className="font-FFMOON text-3xl md:text-4xl font-bold text-center text-white mb-16">
              Faculty <span className="text-blue-600">Coordinator</span>
            </h2>

            <TiltCard>
              <div className="rounded-xl border border-white/30 bg-linear-to-br  to-[#0b1220] p-8 hover:border-blue-800 transition-all duration-300">

                <div className="flex justify-center mb-6">
                  <img
                    src={Faculty}
                    className="w-75 h-75 rounded-xl object-cover border border-white/30"
                  />
                </div>

                <h3 className="text-2xl font-Orbitron text-teal-500  text-center">
                  Prof. <span className="text-blue-600"> Bhawesh Kumar</span>
                </h3>

                <p className="text-white font-ByteBounce text-2xl text-center">
                  Assistant Professor
                </p>
                        
                <p className="text-gray-400 text-center font-mono"> Prof. Bhawesh brings 10+ years of industry and academic experience, guiding the club's
                  technical direction and mentoring students for competitive programming and research.
                </p>

              </div>
            </TiltCard>
          </div>

        </section>

        {/* Journey Section (unchanged) */}
        <section className="py-24 bg-black px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-FFMOON text-3xl font-bold text-white mb-10">
              Club <span className="text-blue-600">Journey</span>
            </h2>

            <div className="space-y-10 border-l border-white/10 pl-8">
              <div>
                <p className="text-blue-600 font-ByteBounce text-3xl ">
                  2026 — The Beginning
                </p>
                <p className="text-gray-400 font-mono leading-relaxed">
                  Founded by passionate students to build a strong technical Coding community.
                </p>
              </div>

              <div>
                <p className="text-blue-600 font-ByteBounce text-3xl">
                  Vision Phase
                </p>
                <p className="text-gray-400 font-mono leading-relaxed">
                  Conducting coding meetups, workshops, and collaborative projects.
                </p>
              </div>

              <div>
                <p className="text-blue-600 font-ByteBounce text-3xl">
                  Growing Community
                </p>
                <p className="text-gray-400 font-mono leading-relaxed">
                  Expanding members and preparing for inter-college hackathons.
                </p>
              </div>

              <div>
                <p className="text-blue-600 font-ByteBounce text-3xl">
                  The Future Ahead
                </p>
                <p className="text-gray-400 font-mono leading-relaxed">
                  Becoming a nationally recognized technical club and open-source contributor.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default About;
