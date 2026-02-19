import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Heart,
  BookOpen,
  Send,
  Rocket,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const JoinUs = () => {
  const [formType, setFormType] = useState("member");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    branch: "",
    year: "1st Year",
    skills: "",
    reason: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const tabs = [
    {
      key: "member",
      label: "Member",
      icon: <User size={18} />,
      description: "Join our tech community",
    },
    {
      key: "volunteer",
      label: "Volunteer",
      icon: <Heart size={18} />,
      description: "Help organize events",
    },
    {
      key: "mentor",
      label: "Mentor",
      icon: <BookOpen size={18} />,
      description: "Guide & teach others",
    },
  ];

  const currentTab = tabs.find((t) => t.key === formType);

  /* ================= SUCCESS SCREEN ================= */
  if (submitted) {
    return (
      <div className="min-h-screen w-screen flex items-center justify-center bg-[#030712] px-6 pt-28">
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 text-center max-w-md w-full"
        >
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-emerald-500 flex items-center justify-center">
            <CheckCircle2 className="text-white w-10 h-10" />
          </div>

          <h2 className="text-3xl font-bold text-white mb-3">
            Application Submitted 🎉
          </h2>
          <p className="text-gray-400 mb-6">
            Thanks for applying as a{" "}
            <span className="text-emerald-400 font-semibold">
              {formType}
            </span>
            . We'll contact you soon.
          </p>

          <button
            onClick={() => setSubmitted(false)}
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl transition"
          >
            Apply Again
          </button>
        </motion.div>
      </div>
    );
  }

  /* ================= MAIN FORM ================= */

  return (
    <section className="min-h-screen w-screen bg-[#030712] pt-28 pb-20 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium">
              Applications Open
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Join Our <span className="text-emerald-400">Coding Club</span>
          </h1>

          <p className="text-gray-400 max-w-xl mx-auto">
            Build projects, collaborate with developers, and grow your coding
            journey with us.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFormType(tab.key)}
              className={`px-6 py-3 rounded-xl transition-all duration-300 text-sm font-medium
              ${
                formType === tab.key
                  ? "bg-emerald-600 text-white"
                  : "bg-white/5 text-gray-400 hover:bg-white/10"
              }`}
            >
              <div className="flex items-center gap-2">
                {tab.icon}
                {tab.label}
              </div>
            </button>
          ))}
        </div>

        {/* Form */}
        <AnimatePresence mode="wait">
          <motion.form
            key={formType}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onSubmit={handleSubmit}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <InputField
                label="Full Name *"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <InputField
                label="Email Address *"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <InputField
                label="Branch *"
                name="branch"
                value={formData.branch}
                onChange={handleChange}
              />

              <div>
                <label className="text-sm text-gray-300">Year *</label>
                <select
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className="w-full mt-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-emerald-500 outline-none"
                >
                  <option className="bg-[#030712]">1st Year</option>
                  <option className="bg-[#030712]">2nd Year</option>
                  <option className="bg-[#030712]">3rd Year</option>
                  <option className="bg-[#030712]">4th Year</option>
                </select>
              </div>
            </div>

            <InputField
              label="Skills"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
            />

            <div>
              <label className="text-sm text-gray-300">
                Why do you want to join? *
              </label>
              <textarea
                required
                rows={4}
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className="w-full mt-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-emerald-500 outline-none resize-none"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
            >
              <Rocket size={18} />
              Submit Application
              <Send size={16} />
            </motion.button>
          </motion.form>
        </AnimatePresence>
      </div>
    </section>
  );
};

/* Reusable Input Component */
const InputField = ({ label, name, value, onChange, type = "text" }) => (
  <div>
    <label className="text-sm text-gray-300">{label}</label>
    <input
      required
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full mt-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-emerald-500 outline-none"
    />
  </div>
);

export default JoinUs;
