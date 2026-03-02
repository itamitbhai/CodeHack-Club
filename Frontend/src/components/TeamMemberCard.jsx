import React from "react";

const TeamMemberCard = ({ member }) => {
  return (
    <div
      className="group bg-gradient-to-br from-white via-yellow-100 to-yellow-200 rounded-xl p-6 text-center
      shadow-sm transition-all duration-300
      hover:shadow-lg "
    >
      {/* Rounded Image */}
      <div className="flex justify-center mb-4">
        <img
          src={member.image}
          alt={member.name}
          className="w-50 h-50 rounded-full object-cover
          border-2 border-white
          transition-transform duration-500
          group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <h3 className="text-base font-semibold text-gray-900">
        {member.name}
      </h3>

      <p className="text-xs text-gray-500 font-semibold mt-1  ">
        {member.role}
      </p>

      <p className="text-xs text-gray-600 mt-2 leading-relaxed line-clamp-2">
        {member.bio}
      </p>
    </div>
  );
};

export default TeamMemberCard;
