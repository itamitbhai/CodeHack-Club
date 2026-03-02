import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import faqData from "../data/FAQ";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const toggleFAQ = (id) => {
    setActiveIndex(activeIndex === id ? null : id);
  };

  const visibleFAQs = showAll ? faqData : faqData.slice(0, 5);

  return (
    <div
      className="min-h-screen w-screen bg-gradient-to-br from-black via-slate-900 to-black px-6 py-20"
      style={{ perspective: "1000px" }}
    >
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h1 className="font-FFMOON text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center pt-10 text-white mb-10 leading-tight">

          <span className="block sm:hidden text-blue-600">
            FAQ <span className="text-white">s</span>
          </span>

          <span className="hidden sm:block">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </span>

        </h1>

        {/* FAQ Boxes */}
        <div className="space-y-6">
          {visibleFAQs.map((faq) => (
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

        {/* View More Button */}
        {faqData.length > 5 && (
          <div className="text-center mt-5">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 text-black rounded-xl font-semibold transition-all duration-300 shadow-lg"
            >
              {showAll ? "View Less" : "View More"}
            </button>
          </div>
        )}

      </div>
    </div>
  );
}