import React, { useRef } from "react";
import { Github, Linkedin } from "lucide-react";

const TeamCard = ({ member }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    //  Softer tilt
    const rotateX = -(y - rect.height / 2) / 12;
    const rotateY = (x - rect.width / 2) / 12;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.03)
    `;
  };

  const resetTilt = () => {
    cardRef.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      className="
        bg-[#0b1220] 
        border border-white/10 
        rounded-2xl 
        p-5 sm:p-6 
        text-center 
        w-[260px] sm:w-[280px]   /* 🔥 Smaller width */
        transition-all duration-500 ease-out
        hover:border-blue-600/70 
        hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]
      "
      style={{
        transformStyle: "preserve-3d",
        transition: "transform 0.3s cubic-bezier(.03,.98,.52,.99)",
      }}
    >
      {/* Avatar */}
      <div className="flex justify-center mb-5">
        <div
          className="
            w-32 h-32 
            sm:w-36 sm:h-36 
            rounded-xl
            overflow-hidden 
            border border-white/10
          "
          style={{ transform: "translateZ(30px)" }}
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* Name */}
      <h3
        className="text-base sm:text-lg font-semibold text-white mb-1"
        style={{ transform: "translateZ(25px)" }}
      >
        {member.name}
      </h3>

      {/* Role */}
      <p
        className="text-emerald-400 text-sm font-medium mb-3"
        style={{ transform: "translateZ(20px)" }}
      >
        {member.role}
      </p>

      {/* Bio */}
      <p
        className="text-gray-400 text-xs leading-relaxed mb-5"
        style={{ transform: "translateZ(15px)" }}
      >
        {member.bio}
      </p>

      {/* Social Icons */}
      <div
        className="flex justify-center gap-4 text-gray-500"
        style={{ transform: "translateZ(25px)" }}
      >
        <a
          href={member.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <Github size={18} />
        </a>
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-emerald-400 transition"
        >
          <Linkedin size={18} />
        </a>
      </div>
    </div>
  );
};

export default TeamCard;
