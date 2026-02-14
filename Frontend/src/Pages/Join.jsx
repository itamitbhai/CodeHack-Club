import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Heart, BookOpen, Send, Code, Sparkles, Rocket, CheckCircle2 } from "lucide-react";

const JoinUs = () => {
  const [formType, setFormType] = useState("member");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    branch: "",
    year: "1st Year",
    skills: "",
    reason: ""
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
      color: "emerald"
    },
    { 
      key: "volunteer", 
      label: "Volunteer", 
      icon: <Heart size={18} />,
      description: "Help organize events",
      color: "rose"
    },
    { 
      key: "mentor", 
      label: "Mentor", 
      icon: <BookOpen size={18} />,
      description: "Guide & teach others",
      color: "blue"
    },
  ];

  const currentTab = tabs.find(t => t.key === formType);

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-6 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="relative z-10 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-12 text-center max-w-lg shadow-2xl"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/50"
          >
            <CheckCircle2 className="w-12 h-12 text-white" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
              Welcome Aboard! 🎉
            </h2>
            <p className="text-gray-300 text-lg mb-2">
              Thanks for applying as a{" "}
              <span className="text-emerald-400 font-bold">{formType}</span>.
            </p>
            <p className="text-gray-400">
              We've received your application and will review it soon.
              Check your email for updates!
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            onClick={() => setSubmitted(false)}
            className="mt-8 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 rounded-xl text-white font-medium transition-all duration-300"
          >
            Submit Another Application
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-6 relative overflow-hidden w-screen">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium">Applications Open</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-black mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white via-emerald-200 to-white bg-clip-text text-transparent">
              Join Our
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-400 bg-clip-text text-transparent">
              Coding Club
            </span>
          </h1>
          
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Build amazing projects, collaborate with peers, and level up your coding skills together.
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-8 mt-10">
            {[
              { label: "Members", value: "500+" },
              { label: "Projects", value: "150+" },
              { label: "Events", value: "50+" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-emerald-400">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.key}
              onClick={() => setFormType(tab.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative group px-8 py-4 rounded-2xl font-semibold transition-all duration-300 overflow-hidden
              ${
                formType === tab.key
                  ? "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/50"
                  : "bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10"
              }`}
            >
              <div className="relative z-10 flex items-center gap-3">
                {tab.icon}
                <div className="text-left">
                  <div className="text-sm font-bold">{tab.label}</div>
                  <div className={`text-xs ${formType === tab.key ? "text-emerald-100" : "text-gray-500"}`}>
                    {tab.description}
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Form Card */}
        <AnimatePresence mode="wait">
          <motion.form
            key={formType}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4 }}
            onSubmit={handleSubmit}
            className="bg-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 md:p-12 shadow-2xl space-y-6"
          >
            {/* Form Header */}
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/10">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                {currentTab.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Apply as {currentTab.label}
                </h3>
                <p className="text-gray-400 text-sm">{currentTab.description}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Full Name *</label>
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Email Address *</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Branch *</label>
                <input
                  required
                  type="text"
                  name="branch"
                  value={formData.branch}
                  onChange={handleChange}
                  placeholder="e.g. Computer Science"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Year *</label>
                <select
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="1st Year" className="bg-slate-800">1st Year</option>
                  <option value="2nd Year" className="bg-slate-800">2nd Year</option>
                  <option value="3rd Year" className="bg-slate-800">3rd Year</option>
                  <option value="4th Year" className="bg-slate-800">4th Year</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Skills & Technologies</label>
              <input
                type="text"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                placeholder="e.g. React, Python, UI/UX, Machine Learning"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">
                Why do you want to {formType === "mentor" ? "mentor" : formType === "volunteer" ? "volunteer" : "join"}? *
              </label>
              <textarea
                required
                rows={5}
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                placeholder={`Tell us what motivates you to ${
                  formType === "mentor"
                    ? "share your knowledge and mentor others"
                    : formType === "volunteer"
                    ? "volunteer and help organize events"
                    : "become part of our coding community"
                }...`}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 resize-none"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-3
              bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700
              text-white font-bold py-4 rounded-xl transition-all duration-300
              shadow-lg shadow-emerald-500/50 hover:shadow-emerald-500/70 group"
            >
              <Rocket size={20} className="group-hover:translate-x-1 transition-transform" />
              Submit Application
              <Send size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <p className="text-center text-gray-500 text-sm">
              By submitting, you agree to our community guidelines and code of conduct.
            </p>
          </motion.form>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default JoinUs;