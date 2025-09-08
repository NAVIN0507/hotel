"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from 'next/image'

import { InfiniteMovingPills } from '../ui/infinite-moving-cards'
import featureSectionImg from '@/public/assets/images/feature_section.jpg'; // adjust if path is different


const activityItems = [
  { label: "JEEP SAFARI" },
  { label: "TRUCKING" },
  { label: "RAFTING" },
  { label: "CAMPING" },
];
const MobileBentoGrid = () => {
  return (
    <div className="flex flex-col items-center py-10 px-5 bg-gray-50 font-serif text-gray-800">
      {/* Header for the section */}
      <div className="flex items-center mb-2 w-full max-w-xs justify-center">
        <span className="flex-grow h-px bg-gray-300 mx-2"></span>
        <p className="text-xs text-gray-600 tracking-widest uppercase whitespace-nowrap font-sans">
          ROOMS AND COTTAGES
        </p>
        <span className="flex-grow h-px bg-gray-300 mx-2"></span>
      </div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl mt-0 mb-10 text-center uppercase tracking-wide text-gray-800">
        DISCOVER OUR ROOMS
      </h1>

      <div className="relative h-fit p-4 bg-cover bg-center rounded-md bg-hero w-full">
      
        {/* Content box */}
        <div className="relative z-10 bg-[#011D38]/90 w-full h-fit p-5 mt-40 rounded-xl">
          <h1 className="text-center uppercase text-white text-2xl font-mono font-bold tracking-wide">
            Wood House
          </h1>
            <p className="text-[#C1C1C1] text-center mt-5 leading-relaxed text-sm">
            Spoil yourself with the assortment in cuisine and taste. Explore & Investigate the wide
            range of food you&apos;d be honored with no place else.
          </p>
          <button className="bg-[#D4AF37] hover:bg-[#b9982e] text-white px-6 py-2 rounded-full w-full text-center justify-center items-center flex mx-auto mt-4 transition-all">
            Know more
          </button>
        </div>
      </div>
      <div className='flex flex-col md:flex-row gap-4 items-center justify-center mt-7 p-4 '>
        <div className= 'w-[400px] h-full p-5 rounded-md bg-[#011D38] text-white'>
        <div className='flex flex-col'>
        <p className='text-[10px]'>ACTIVITIES & GAMES</p>
        <h1 className='uppercase font-mono text-4xl leading-relaxed -mt-3'>Unwind to Nature</h1>
        <p className='text-[10px] text-[#C1C1C1]'>Nestled in the centre of Kodaikanal, we offer the perfect adventurous retreat. Numerous exhilarating activities are available at our opulent resort, guaranteeing you and your loved ones an experience they won’t soon forget.</p>
           <InfiniteMovingPills
        items={activityItems}
        direction="right"
        speed="slow"
        className='p-5'
      />
      <Image
      src={featureSectionImg}
      alt='feature_section'
      width={500}  
        height={500}
        className='w-[800px] h-[300px] object-cover rounded-lg'
      />
        </div>
        </div>
         <div className= 'w-[400px] h-full p-5 rounded-md bg-[#011D38] text-white'>
          <div className='flex flex-col'>
        <p className='text-[10px]'>ACTIVITIES & GAMES</p>
        <h1 className='uppercase font-mono text-4xl leading-relaxed -mt-3'>Unwind to Nature</h1>
        <p className='text-[10px] text-[#C1C1C1]'>Nestled in the centre of Kodaikanal, we offer the perfect adventurous retreat. Numerous exhilarating activities are available at our opulent resort, guaranteeing you and your loved ones an experience they won’t soon forget.</p>
           <InfiniteMovingPills
        items={activityItems}
        direction="right"
        speed="slow"
        className='p-5'
      />
       <Image
      src={featureSectionImg}
      alt='feature_section'
      width={500}  
        height={500}
        className='w-[800px] h-[300px] object-cover rounded-lg'
      />
        </div>
        </div>
        </div>
    </div>
  );
};

export default MobileBentoGrid;
