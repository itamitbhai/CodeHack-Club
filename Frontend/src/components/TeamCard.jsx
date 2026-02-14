
// import React from "react";

// const TeamCard = ({ member }) => {
//   return (
//     <div
//       className="bg-gradient-to-b from-[#0f172a] to-[#0b1220]
//       border border-white/10 rounded-2xl p-6 text-center
//       transition-all duration-500 hover:border-emerald-400/40
//       hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]"
//     >
//       {/* Avatar */}
//       <div className="flex justify-center mb-4">
//         <img
//           src={member.image}
//           alt={member.name}
//           className="w-20 h-20 rounded-full object-cover border border-white/10"
//         />
//       </div>

//       {/* Name */}
//       <h3 className="text-lg font-semibold text-white mb-1">
//         {member.name}
//       </h3>

//       {/* Role */}
//       <p className="text-emerald-400 text-sm mb-3">
//         {member.role}
//       </p>

//       {/* Bio */}
//       <p className="text-gray-400 text-xs leading-relaxed">
//         {member.bio}
//       </p>
//     </div>
//   );
// };

// export default TeamCard;


import React from "react";
import { Github, Linkedin } from "lucide-react";

const TeamCard = ({ member }) => {
  return (
    <div className="bg-[#0b1220] border border-white/10 rounded-2xl 
      p-8 text-center transition-all duration-300
      hover:border-emerald-400/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.12)]">

      {/* Avatar */}
      <div className="flex justify-center mb-6">
        <div className="w-24 h-24 rounded-full bg-[#111827] flex items-center justify-center border border-white/10">
          <img
            src={member.image}
            alt={member.name}
            className="w-20 h-20 rounded-full object-cover"
          />
        </div>
      </div>

      {/* Name */}
      <h3 className="text-lg font-semibold text-white mb-1">
        {member.name}
      </h3>

      {/* Role */}
      <p className="text-emerald-400 text-sm font-medium mb-4">
        {member.role}
      </p>

      {/* Bio */}
      <p className="text-gray-400 text-sm leading-relaxed mb-6">
        {member.bio}
      </p>

      {/* Social Icons */}
      <div className="flex justify-center gap-4 text-gray-500">
        <a href="#" className="hover:text-emerald-400 transition">
          <Github size={18} />
        </a>
        <a href="#" className="hover:text-emerald-400 transition">
          <Linkedin size={18} />
        </a>
      </div>
    </div>
  );
};

export default TeamCard;
