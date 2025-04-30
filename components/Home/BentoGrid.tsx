import Image from 'next/image'
import React from 'react'

const BentoGrid = () => {
  return (
   <section className='w-full h-full p-2'>
    <p className='text-[#5C5C5C] text-center'>ROOMS AND COTTAGES</p>
    <div className='flex gap-2 items-center justify-center mt-4 mb-4'>
<div className="w-20 mr-2  hidden lg:block ml-10 h-0 border border-gray-500" />
<h1 className='text-[#5C5C5C] font-mono text-5xl'>DISCOVER OUR ROOMS</h1>
<div className="w-20 hidden lg:block  ml-2 h-0 border border-gray-500" />
    </div>
    <div className='flex flex-col gap-2'>
    <div className='flex'>
        <div>
            <Image
            src={"/assets/feature_section.jpg"}
            alt='feature_section'
            width={500}
            height={500}
            className='w-[800px] h-[350px] object-cover rounded-lg mt-10 ml-10'
            />
        </div>
        <div className='w-3/12 h-[350px] bg-[#011D38] p-7 ml-10 mt-10 rounded-2xl'>
       <div className='mt-10'>
        <h1 className='text-white font-mono text-3xl'>WOOD HOUSE</h1>
        <p className='text-[#C1C1C1] text-sm mt-4'>Spoil yourself with the assortment in cuisine and taste. Explore & Investigate the wide range of food you'd be honored with no place else.
    </p>
    <button className="bg-[#b79464] hover:bg-[#a28252] text-white px-6 py-3 mt-8 -ml-2 rounded-full text-sm tracking-widest uppercase flex items-center gap-2">
                        Know More →
     </button>
      </div>
    </div>
    </div>
       <div className='flex'>
           <div className='w-3/12 h-[350px] bg-[#011D38] p-7 ml-10 mt-10 rounded-2xl'>
       <div className='mt-10'>
        <h1 className='text-white font-mono text-3xl'>WOOD HOUSE</h1>
        <p className='text-[#C1C1C1] text-sm mt-4'>Spoil yourself with the assortment in cuisine and taste. Explore & Investigate the wide range of food you'd be honored with no place else.
    </p>
    <button className="bg-[#b79464] hover:bg-[#a28252] text-white px-6 py-3 mt-8 -ml-2 rounded-full text-sm tracking-widest uppercase flex items-center gap-2">
                        Know More →
     </button>
      </div>
    </div>
        <div>
            <Image
            src={"/assets/feature_section.jpg"}
            alt='feature_section'
            width={500}
            height={500}
            className='w-[800px] h-[350px] object-cover rounded-lg mt-10 ml-10'
            />
        </div>
     
    </div>
       <div className='flex'>
        <div>
            <Image
            src={"/assets/feature_section.jpg"}
            alt='feature_section'
            width={500}
            height={500}
            className='w-[800px] h-[350px] object-cover rounded-lg mt-10 ml-10'
            />
        </div>
        <div className='w-3/12 h-[350px] bg-[#011D38] p-7 ml-10 mt-10 rounded-2xl'>
       <div className='mt-10'>
        <h1 className='text-white font-mono text-3xl'>WOOD HOUSE</h1>
        <p className='text-[#C1C1C1] text-sm mt-4'>Spoil yourself with the assortment in cuisine and taste. Explore & Investigate the wide range of food you'd be honored with no place else.
    </p>
    <button className="bg-[#b79464] hover:bg-[#a28252] text-white px-6 py-3 mt-8 -ml-2 rounded-full text-sm tracking-widest uppercase flex items-center gap-2">
                        Know More →
     </button>
      </div>
    </div>
    </div>
    </div>
   </section>
  )
}

export default BentoGrid