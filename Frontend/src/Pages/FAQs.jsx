import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import faqData from "../data/FAQ"

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (id) => {
    setActiveIndex(activeIndex === id ? null : id);
  };

  return (
    <div
      className="min-h-screen w-screen bg-gradient-to-br from-black via-slate-900 to-black px-6 py-20"
      style={{ perspective: "1000px" }}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Frequently Asked <span className="text-teal-400">Questions</span>
        </h1>

        <div className="space-y-6">
          {faqData.map((faq) => (
            <motion.div
              key={faq.id}
              whileHover={{ scale: 1.02 }}
              className="bg-slate-900/60 backdrop-blur-lg border border-white/10 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:border-teal-400/40 shadow-xl"
              onClick={() => toggleFAQ(faq.id)}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-lg md:text-xl font-semibold text-white">
                  {faq.question}
                </h2>
                <span className="text-teal-400 text-2xl font-bold">
                  {activeIndex === faq.id ? "-" : "+"}
                </span>
              </div>

              <AnimatePresence>
                {activeIndex === faq.id && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-400 mt-4 leading-relaxed overflow-hidden"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
