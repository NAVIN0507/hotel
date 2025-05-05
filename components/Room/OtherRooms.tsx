import { Dot } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const OtherRooms = () => {
  return (
   <section className='pl-10 pr-10 mt-10'>
    <h1 className='font-mono text-4xl text-[#45443F]'>OTHER ROOMS</h1>
     <div className='grid md:grid-cols-3 mt-10 gap-5'>
    {[1 , 2 , 3].map((room) => (
        <div className='flex flex-col gap-2'>
           
            <div className='relative'>
                <Image
                src={"/assets/images/feature_section.jpg"}
                alt='room'
                width={400}
                height={400}
                className='w-[450px] h-[350px] rounded-xl'
                />
                <div className='absolute -mt-10 ml-5'>
                     <h1 className='text-white text-center text-xl -mt-3'>STARTS FROM <span className='font-mono text-5xl'>1499</span>/PER NIGHT</h1>
                </div>
            </div>
            <h1 className='mt-5 font-mono text-4xl text-[#45443F]'>FAMILY STAY</h1>
            <h2 className='text-[#5C5C5C] flex gap-1'>55M2 <Dot/> 1-6 PERSON <Dot/> 2 BEDS</h2>
        </div>
    ))}
    </div>
   </section>
  )
}

export default OtherRooms