import { Target, Eye } from "lucide-react";


const About = () => {
  return (
    <div className="flex flex-col min-h-screen w-screen bg-[#0b0f17] text-white">
      
      {/* MAIN CONTENT */}
      <main className="flex-grow">

        {/* Hero Section */}
        <section className="py-28 text-center px-6">
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

        {/* Why Join Us */}
        <section className="py-28 bg-[#050b12] px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Why <span className="text-emerald-400">Join Us?</span>
            </h2>

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
                  className="bg-[#0d1623] border border-[#1f2a3a] rounded-2xl p-8 hover:border-emerald-400/40 transition-all duration-300"
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

        {/* Faculty Coordinator */}
        <section className="py-24 bg-black px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
              Faculty <span className="text-teal-400">Coordinator</span>
            </h2>

            <div className="rounded-xl border border-white/10 bg-gradient-to-br from-[#0f172a] to-[#0b1220] p-8 hover:border-teal-400/40 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-white mb-2">
                Prof Bhawesh Kumar
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
        </section>

        {/* Journey Section */}
        <section className="py-24 bg-black px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-10">
              Club <span className="text-teal-400">Journey</span>
            </h2>

            <div className="space-y-10 border-l border-white/10 pl-8">
              <div>
                <p className="text-teal-400 font-medium text-sm mb-2">
                  2026 — The Beginning
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Founded by passionate students to build a strong technical community.
                </p>
              </div>

              <div>
                <p className="text-teal-400 font-medium text-sm mb-2">
                  Vision Phase
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Conducting coding meetups, workshops, and collaborative projects.
                </p>
              </div>

              <div>
                <p className="text-teal-400 font-medium text-sm mb-2">
                  Growing Community
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Expanding members and preparing for inter-college hackathons.
                </p>
              </div>

              <div>
                <p className="text-teal-400 font-medium text-sm mb-2">
                  The Future Ahead
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Becoming a nationally recognized technical club and open-source contributor.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      {/* <Footer /> */}
    </div>
  );
};

export default About;
