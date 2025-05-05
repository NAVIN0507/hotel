"use client"
import React from 'react';
import { motion } from 'framer-motion';

const specials = [
    {
        title: 'CUSTOMIZABLE MENU',
        subtitle: 'EAT WHAT YOU LOVE',
        description:
            'Immerse yourself in elegance with live music, expertly crafted food, and exceptional service.',
    },
    {
        title: 'PRIVATE DINING EXPERIENCE',
        subtitle: 'FOR SPECIAL MOMENTS',
        description:
            'Host memorable events with personalized service and an intimate atmosphere.',
    },
    {
        title: 'SEASONAL SPECIALS',
        subtitle: 'TASTE THE SEASONS',
        description:
            'Enjoy curated seasonal dishes that highlight fresh, local ingredients.',
    },
];

const SpecialSection: React.FC = () => {
    return (
        <section className="py-16 px-4 bg-white lg:p-20">
            <div className="max-w-7xl mx-auto ">
                <h2 className="text-5xl font-mono text-gray-700 flex gap-2">
                    WHAT’S SPECIAL WITH US?
                    <div className="w-20 mt-7 hidden lg:block ml-10 h-0 border border-gray-500" />
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-16 px-6 ">
                    {specials.map((item, idx) => (
                        <motion.div
                            key={idx}
                            whileHover="hover"
                            initial="rest"
                            animate="rest"
                            className="relative h-[400px] rounded-xl bg-hero text-white bg-gray-100 shadow-xl group cursor-pointer overflow-hidden transition-all duration-500"
                        >
                            <motion.div
                                variants={{
                                    rest: { y: 0 },
                                    hover: { y: -10 },
                                }}
                                transition={{ duration: 0.4, ease: 'easeInOut' }}
                                className="absolute flex flex-col items-start bottom-20 px-6 w-full"
                            >
                                <p className="text-sm text-white tracking-widest uppercase mb-1">
                                    {item.subtitle}
                                </p>
                                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                            </motion.div>

                            <motion.div
                                variants={{
                                    rest: { opacity: 1, y: 0 },
                                    hover: { opacity: 1, y: -5 },
                                }}
                                transition={{ duration: 0.4, ease: 'easeInOut' }}
                                className="absolute bottom-6 px-6 text-white text-sm text-center"
                            >
                                <p>{item.description}</p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SpecialSection;
