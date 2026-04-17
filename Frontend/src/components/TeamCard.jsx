import React, { useRef } from "react";
import { Github, Linkedin, User2 } from "lucide-react";

const TeamCard = ({ member }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

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
        relative overflow-hidden
        backdrop-blur-md sm:backdrop-blur-xl
        border border-blue-600
        rounded-2xl
        p-5 sm:p-6 m-10
        text-center
        w-[260px] sm:w-[280px]
        mx-auto
        shadow-lg shadow-black/20
        transition-all duration-500 ease-out
        hover:border-blue-600
        
      "
      style={{
        transformStyle: "preserve-3d",
        transition: "transform 0.3s cubic-bezier(.03,.98,.52,.99)",
      }}
    >
      {/* Blue Blur Light */}
      <div className="
          absolute -top-10 -left-5
          w-40 h-40 sm:w-52 sm:h-52
          bg-blue-600
          rounded-full
          blur-[70px] sm:blur-[120px]
          opacity-50 sm:opacity-70
          ">
        </div>

      {/* Purple Blur Light */}
      <div className="
        absolute -bottom-20 -right-20
        w-40 h-40 sm:w-52 sm:h-52
        bg-purple-500
        rounded-full
        blur-[70px] sm:blur-[120px]
        opacity-50 sm:opacity-70
      "></div>

      {/* Avatar */}
      <div className="flex justify-center mb-5 relative z-10">
        <div
          className="
            w-56 h-56
            sm:w-56 sm:h-56
            rounded-xl
            overflow-hidden
            border border-white/20
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

      <h3
        className="text-base sm:text-lg font-Hackdaddy text-white mb-1 relative z-10"
        style={{ transform: "translateZ(25px)" }}
      >
        {member.name}
      </h3>

      <p
        className="text-blue-600 text-sm font-mono font-bold mb-3 relative z-10"
        style={{ transform: "translateZ(20px)" }}
      >
        {member.role}
      </p>

      <p
        className="text-gray-300 text-xs font-light leading-relaxed mb-5 relative z-10"
        style={{ transform: "translateZ(15px)" }}
      >
        {member.bio}
      </p>

      <div
        className="flex justify-center gap-10 text-gray-400 relative z-10"
        style={{ transform: "translateZ(25px)" }}
      >
        <a
          href={member.User2}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition cursor-pointer"
        >
          <User2 size={18} />
        </a>

        <a
          href={member.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition cursor-pointer"
        >
          <Github size={18} />
        </a>

        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-500 transition cursor-pointer"
        >
          <Linkedin size={18} />
        </a>
      </div>
    </div>
  );
};

export default TeamCard;