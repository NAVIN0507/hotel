"use client";
import React from "react";
import { motion } from "framer-motion";

const specials = [
  {
    title: "CUSTOMIZABLE MENU",
    subtitle: "EAT WHAT YOU LOVE",
    description:
      "Immerse yourself in elegance with live music, expertly crafted food, and exceptional service.",
  },
  {
    title: "PRIVATE DINING EXPERIENCE",
    subtitle: "FOR SPECIAL MOMENTS",
    description:
      "Host memorable events with personalized service and an intimate atmosphere.",
  },
  {
    title: "SEASONAL SPECIALS",
    subtitle: "TASTE THE SEASONS",
    description:
      "Enjoy curated seasonal dishes that highlight fresh, local ingredients.",
  },
  {
    title: "SEASONAL SPECIALS",
    subtitle: "TASTE THE SEASONS",
    description:
      "Enjoy curated seasonal dishes that highlight fresh, local ingredients.",
  },
];

const SpecialSection: React.FC = () => {
  return (
    <section className="py-4 px-4 sm:px-6 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono text-gray-700 flex flex-col lg:flex-row gap-4 lg:gap-2">
          WHAT’S SPECIAL WITH US?
          <div className="w-20 h-0 border border-gray-500 hidden lg:block mt-6 ml-6" />
        </h2>

        <div className="mt-4 overflow-x-auto">
          <div className="flex gap-8 w-max px-1 snap-x snap-mandatory scroll-smooth">
            {specials.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover="hover"
                initial="rest"
                animate="rest"
                className="snap-center shrink-0 w-[280px] sm:w-[300px] md:w-[350px] h-[400px] bg-hero-f  text-black shadow-lg group cursor-pointer overflow-hidden relative rounded-2xl object-cover"
              >
                <motion.div
                  variants={{ rest: { y: 0 }, hover: { y: -10 } }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute flex flex-col items-start bottom-24 sm:bottom-20 px-5 sm:px-6 w-full"
                >
                  <p className="text-xs sm:text-sm text-white tracking-widest uppercase mb-1">
                    {item.subtitle}
                  </p>
                  <h3 className="text-lg sm:text-xl md:text-2xl text-white font-bold">
                    {item.title}
                  </h3>
                </motion.div>

                <motion.div
                  variants={{ rest: { y: 0 }, hover: { y: -5 } }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute bottom-6 px-5 sm:px-6 text-xs sm:text-sm text-white"
                >
                  <p>{item.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialSection;
