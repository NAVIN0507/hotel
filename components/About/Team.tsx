"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const specials = [
       {
        title: 'KEVIN GRAY',
        description:
            'GENERAL HOTEL MAANGER',
    },
       {
        title: 'KEVIN GRAY',
        description:
            'GENERAL HOTEL MAANGER',
    },
       {
        title: 'KEVIN GRAY',
        description:
            'GENERAL HOTEL MAANGER',
    },
    {
        title: 'KEVIN GRAY',
        description:
            'GENERAL HOTEL MAANGER',
    },
];

const SpecialSection: React.FC = () => {
    return (
        <section className="py-16 px-4 bg-white lg:p-20">
            <div className="max-w-7xl mx-auto ">
                <h2 className="text-5xl font-mono text-center items-center justify-center text-gray-700 flex gap-2">
                    MEET OUR TEAM
                    
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4   gap-10 mt-16 px-6 ">
                  {specials.map((special, index) => (
                   <div className='flex flex-col gap-2' key={index}>
                    <Image
                    src={'/assets/images/feature_section.jpg'}
                    alt='alt'
                    width={300}
                    height={300}
                    className='rounded-xl object-contain'
                    />
                    <h1 className='text-3xl font-mono text-[#45443F]'>{special.title}</h1>
                    <h3 className='text-[#5C5C5C] -mt-2'>{special.description}</h3>
                   </div>
                  ))}
                </div>
            </div>
        </section>
    );
};

export default SpecialSection;
