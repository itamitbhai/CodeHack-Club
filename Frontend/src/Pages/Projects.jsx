"use client";

const ProjectsComingSoon = () => {
  return (
    <section className="relative w-screen min-h-screen flex items-center justify-center bg-[#050b12] overflow-hidden px-6">

      {/* Content */}
      <div className="text-center relative z-10">
        
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
        <span className="text-white ">Our</span> <span className="text-emerald-400">Projects</span>
        </h2>

        <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
          Exciting projects are currently under development.
          Stay tuned for something amazing 🚀
        </p>

        <div className="inline-block px-10 py-4 rounded-full 
          bg-emerald-400/10 
          border border-emerald-400/30 
          backdrop-blur-md
          hover:scale-105
          transition duration-500"
        >
          <span className="text-emerald-400 text-xl font-semibold tracking-wide">
            🚀 Coming Soon
          </span>
        </div>
      </div>

      {/* Floating 3D Balls */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-20 left-20 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl animate-float1"></div>

        <div className="absolute bottom-32 right-24 w-40 h-40 bg-teal-500/20 rounded-full blur-3xl animate-float2"></div>

        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl animate-float3"></div>

      </div>
    </section>
  );
};

export default ProjectsComingSoon;
