import { motion } from "framer-motion";

const TeamCard = ({ member, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-green-400/50 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300"
    >
      {/* Image */}
      <div className="h-60 overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6 text-center">
        <h3 className="text-lg font-semibold text-gray-200 mb-1">
          {member.name}
        </h3>
        <p className="text-sm text-green-400 mb-2">
          {member.role}
        </p>
        <p className="text-sm text-gray-400">
          {member.bio}
        </p>
      </div>
    </motion.div>
  );
};

export default TeamCard;
