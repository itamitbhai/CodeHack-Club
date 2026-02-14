import React from "react";
import { motion } from "framer-motion";
import TeamCard from "../components/TeamCard";
import { coreTeam } from "../data/coreTeam";
import TeamMemberCard from "../components/TeamMemberCard";
import { coreMembers } from "../data/coreMembers";



const TeamHero = () => {
  return (
    <div className="min-h-screen pt-16 overflow-x-hidden">
        <section className="w-screen bg-black top-0 text-center pt-28 pb-16">
         <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
              Our <span className="text-emerald-400">Team</span>
           </h1>

           <p className="mt-6 text-lg text-gray-400">
              The passionate people driving CodeClub forward.
            </p>
         </div>
       </section>
        <section className="py-20 bg-[#111318]">
          <div className="max-w-7xl mx-auto px-6">
             <h2 className="text-3xl font-bold text-white mb-12 text-center">
                 Leadership
             </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                 {coreTeam.map((member) => (
                     <TeamCard key={member.name} member={member} />
                   ))}
               </div>
            </div>
        </section>

        <section className="py-20 bg-black">
            <div className="max-w-6xl mx-auto px-6">
                  <h2 className="text-2xl font-bold text-white mb-10 text-center">
                      Core Members
                  </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {coreMembers.map((member) => (
                     <TeamMemberCard key={member.name} member={member} />
                   ))}
                </div>
          </div>
        </section>



    </div>

  );
};

export default TeamHero;
