import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
   <section className='max-w-screen'>
    <div className='flex gap-2'>
        <Image
        src={"/assets/images/hero_bg.jpg"}
        alt="hero"
        width={1000}
        height={1000}
        className='rounded-2xl'
        />
        <div className='h-full relative'>
          <Image
        src={"/assets/images//hero_bg.jpg"}
        alt="hero"
        width={1000}
        height={1000}
        className='rounded-2xl h-[550px] z-1'
        />
       <button className="absolute bottom-4 left-4  bg-white/50 text-white/95 text-sm px-4 py-2 rounded-full opacity-80 hover:opacity-100">
              ▶  PLAY VIDEO
            </button>
        </div>
    </div>
   </section>
  )
}

export default Hero