"use client";
import { Particles } from "../components/ui/particles";


const ProjectsComingSoon = () => {
  return (
    <section className="relative w-screen min-h-screen flex items-center justify-center bg-[black] overflow-hidden px-6">

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

      {/* Content */}
      <div className="text-center relative z-10">
        
        <h2 className="font-FFMOON text-4xl md:text-6xl font-bold mb-6">
        <span className=" text-white ">Our</span> <span className="text-blue-600">Projects</span>
        </h2>

        <p className="text-gray-400 text-3xl mb-10 max-w-xl mx-auto font-ByteBounce ">
          Exciting projects are currently under development.
          Stay tuned for something amazing.
        </p>

        <div className="inline-block px-10 py-4 rounded-full 
          bg-blue-400/10 
          border border-blue-800/70 
          backdrop-blur-md
          hover:scale-105
          transition duration-500"
        >
          <span className="text-white text-xl font-Kapilar tracking-wide">
          Coming Soon
          </span>
        </div>
      </div>

      {/* Floating 3D Balls */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-float1"></div>

        <div className="absolute bottom-32 right-24 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-float2"></div>

        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-float3"></div>

      </div>
    </section>
  );
};

export default ProjectsComingSoon;
