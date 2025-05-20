import Image from 'next/image'
import React from 'react'
import { InfiniteMovingPills } from '../ui/infinite-moving-cards'
const activityItems = [
  { label: "JEEP SAFARI" },
  { label: "TRUCKING" },
  { label: "RAFTING" },
  { label: "CAMPING" },
];
const BentoGrid = () => {
  return (
   <section className='w-full h-full p-2 mx-auto lg:pl-18'>
    <p className='text-[#5C5C5C] text-center'>ROOMS AND COTTAGES</p>
    <div className='flex gap-2 items-center justify-center mt-4 mb-4'>
<div className="w-20 mr-2  hidden lg:block ml-10 h-0 border border-gray-500" />
<h1 className='text-[#5C5C5C] font-mono text-5xl'>DISCOVER OUR ROOMS</h1>
<div className="w-20 hidden lg:block  ml-2 h-0 border border-gray-500" />
    </div>
    <div className='flex flex-col gap-2 mx-auto items-center justify-center'>
    <div className='flex flex-col md:flex-row'>
        <div>
            <Image
            src={"/assets/images/feature_section.jpg"}
            alt='feature_section'
            width={500}
            height={500}
            className='w-[1000px] h-[350px] object-cover rounded-lg mt-10 ml-10'
            />
        </div>
        <div className='md:w-3/12 h-[350px] bg-[#011D38] p-7 md:ml-14 mt-10 rounded-2xl'>
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
       <div className='flex flex-col md:flex-row'>
           <div className='md:w-3/12 h-[350px] bg-[#011D38] p-7 md:ml-10 mt-10 rounded-2xl'>
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
            src={"/assets/images/feature_section.jpg"}
            alt='feature_section'
            width={500}
            height={500}
            className='w-[1000px] h-[350px] object-cover rounded-lg mt-10 ml-10'
            />
        </div>
     
    </div>
       <div className='flex md:flex-row flex-col'>
        <div>
            <Image
            src={"/assets/images/feature_section.jpg"}
            alt='feature_section'
            width={500}
            height={500}
            className='w-[1000px] h-[350px] object-cover rounded-lg mt-10 ml-10'
            />
        </div>
        <div className=' md:w-3/12 h-[350px] bg-[#011D38] p-7 md:ml-14 mt-10 rounded-2xl'>
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
    <div className='flex flex-col md:flex-row gap-4 items-center justify-center mt-7 pl-30 pr-30 mx-auto'>
        <div className= 'w-[300px] md:w-7/12 h-full p-10 rounded-md bg-[#011D38] text-white'>
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
      src={"/assets/images/feature_section.jpg"}
      alt='feature_section'
      width={500}  
        height={500}
        className='w-[800px] h-[300px] object-cover rounded-lg'
      />
        </div>
        </div>
         <div className='w-[300px] md:w-7/12 h-full p-10  text-white  rounded-md bg-[#011D38]'>
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
      src={"/assets/images/feature_section.jpg"}
      alt='feature_section'
      width={500}  
        height={500}
        className='w-[800px] h-[300px] object-cover rounded-lg'
      />
        </div>
        </div>
        </div>
   </section>
  )
}

export default BentoGrid