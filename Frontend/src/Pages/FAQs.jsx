import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import faqData from "../data/FAQ";
import { Particles } from "../components/ui/particles";
import { RainbowButton } from "../components/ui/rainbow-button";



export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const toggleFAQ = (id) => {
    setActiveIndex(activeIndex === id ? null : id);
  };

  const visibleFAQs = showAll ? faqData : faqData.slice(0, 5);

  return (
    <div
      className="min-h-screen w-screen bg-linear-to-br to-black px-6 py-20"
      style={{ perspective: "1000px" }}
    >
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h1 className="font-FFMOON text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center pt-10 text-white mb-10 leading-tight">

          <span className="block sm:hidden text-blue-600">
            FAQ <span className="text-white">s</span>
          </span>

          <span className="hidden sm:block">
            Frequently  <span className="text-blue-600"> Asked Questions</span>
          </span>

        </h1>

        {/* Particles Background */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                  <Particles
                    className="w-full h-full"
                    quantity={window.innerWidth < 768 ? 40 : 100}
                    ease={60}
                    size={0.6}
                    staticity={40}
                  />
                </div>

        {/* FAQ Boxes */}
        <div className="space-y-4 font-ByteBounce ">
          {visibleFAQs.map((faq) => (
            <motion.div
              key={faq.id}
              whileHover={{ scale: 1.02 }}
              className="bg-blue-900/10 backdrop-blur-lg border py-2 border-white/30 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:border-blue-600 shadow-xl"
              onClick={() => toggleFAQ(faq.id)}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-3xl md:text-3xl font-semibold text-blue-500">
                  {faq.question}
                </h2>
                <span className="text-blue-600 text-2xl font-bold">
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
                    className="text-white text-xl  leading-relaxed overflow-hidden"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        {faqData.length > 4 && (
          <div className="text-center mt-4 ">
            <RainbowButton
              onClick={() => setShowAll(!showAll)}
              className="px-8 h-12  text-white w-full  rounded-xl font-semibold transition-all duration-300 shadow-lg"
            >
              {showAll ? "View Less" : "View More"}
            </RainbowButton>
          </div>
        )}

      </div>
    </div>
  );
}