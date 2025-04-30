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
   <section className='w-full h-full p-2 mx-auto'>

    <div className='flex flex-col gap-2 mx-auto items-center justify-center'>
    <div className='flex flex-col md:flex-row'>
        <div className='relative'>
            <Image
            src={"/assets/feature_section.jpg"}
            alt='feature_section'
            width={500}
            height={500}
            className='w-[800px] h-[400px] object-cover rounded-lg mt-10 ml-10'
            />
            <div className='w-9/12 p-6 h-10 bg-white absolute -mt-14 ml-[225px] rounded-full'>
            <div className='flex gap-1 -mt-5 ml-10'>
                <h1 className='font-mono text-xl'>STARTS FROM  <span className='text-3xl'>1499 </span> /PER NIGHT</h1>
                <button className='w-[150px] h-10 ml-10 bg-[#AA9061] rounded-full text-white'>EXPLORE</button>
            </div>
            </div>
        </div>
        <div className='md:w-4/12 h-[400px] bg-[#011D38] p-7 md:ml-14 mt-10 rounded-2xl'>
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
           <div className='md:w-4/12 h-[400px] bg-[#011D38] p-7 md:ml-4  mt-10 rounded-2xl'>
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
            className='w-[800px] h-[400px] object-cover rounded-lg mt-10 ml-5'
            />
        </div>
     
    </div>
       <div className='flex md:flex-row flex-col'>
        <div>
            <Image
            src={"/assets/feature_section.jpg"}
            alt='feature_section'
            width={500}
            height={500}
            className='w-[800px] h-[400px] object-cover rounded-lg mt-10 ml-10'
            />
        </div>
        <div className=' md:w-4/12 h-[400px] bg-[#011D38] p-7 md:ml-14 mt-10 rounded-2xl'>
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