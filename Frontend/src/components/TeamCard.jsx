import React from "react";
import { Github, Linkedin } from "lucide-react";

const TeamCard = ({ member }) => {
  return (
    <div
      className="
      bg-[#0b1220] 
      border border-white/10 
      rounded-2xl 
      p-6 sm:p-8 
      text-center 
      transition-all duration-300
      hover:border-emerald-400/40 
      hover:shadow-[0_0_30px_rgba(16,185,129,0.12)]
      "
    >
      {/* Avatar */}
      <div className="flex justify-center mb-6">
        <div
          className="
          w-50 h-50 
          sm:w-52 sm:h-52 
          md:w-60 md:h-60 
          rounded-xl
          overflow-hidden 
          border border-white/10
          "
        >
          <img
            src={member.image}
            alt={member.name}
            className="
              w-full 
              h-full 
              object-cover 
              transition-transform duration-300 
              hover:scale-105
            "
          />
        </div>
      </div>

      {/* Name */}
      <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">
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
      <div className="flex justify-center gap-5 text-gray-500">
        <a
          href={member.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-emerald-400 transition"
        >
          <Github size={20} />
        </a>
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-emerald-400 transition"
        >
          <Linkedin size={20} />
        </a>
      </div>
    </div>
  );
};

export default TeamCard;
