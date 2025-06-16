import { AmunitiesList, AmunitiesList2 } from '@/constants'
import { div } from 'framer-motion/client'
import React from 'react'

const Amunities = () => {
  return (
  <section className=' pl-14 pr-14'>
    <div className=' flex items-center justify-between gap-1 max-sm:text-center'>
        <div className='flex flex-col gap-1'>
            <p className='text-sm text-[#5C5C5C]'>AMUNITIES</p>
            <h1 className='flex gap-1 font-mono text-4xl text-[#45443F] max-sm:ml-8'><div className="w-20 mt-5  hidden lg:block  ml-5  h-0 border border-gray-500" /> MADE FOR</h1>
            <h1 className='font-mono text-4xl text-[#45443F]'>YOUR COMFORT</h1>
        </div>
        <div className='w-[300px] hidden md:block'>
            <p className='text-sm text-[#3A3A3A]'>Spoil yourself with the assortment in cuisine and taste. Explore & Investigate the wide range of food you'd be honored with no place else.
</p>
        </div>
    </div>
    <div className='grid grid-cols-2 md:grid-cols-4 gap-10 mt-20'>
        {AmunitiesList.map((item, index) => (
            <div className='flex flex-col gap-2 items-center justify-center'>
                <div className='w-24 h-16 bg-[#D9D9D9] '></div>
                <p className='text-[10px] uppercase text-[#5C5C5C] text-center'>{item}</p>
            </div>
        ))}
    </div>
     <div className=' grid-cols-1 md:grid-cols-4 gap-32 mt-10 ml-20 hidden md:grid'>
        {AmunitiesList.map((item, index) => (
         <div className='w-28 border  border-[#D7D7D7] flex items-center justify-center'></div>
        ))}
    </div>
     <div className='grid grid-cols-2 md:grid-cols-4 gap-10 mt-10'>
        {AmunitiesList2.map((item, index) => (
            <div className='flex flex-col gap-2 items-center justify-center'>
                <div className='w-24 h-16 bg-[#D9D9D9] '></div>
                <p className='text-[10px] uppercase text-[#5C5C5C] text-center'>{item}</p>
            </div>
        ))}
    </div>
  </section>
  )
}

export default Amunities