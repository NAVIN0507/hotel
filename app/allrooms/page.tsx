'use client'
import BentoGrid from '@/components/AllRooms/BentoGrid'
import Hero from '@/components/AllRooms/Hero'
import MobileViewRoomCard from '@/components/AllRooms/MobileViewRoomCard'
import React, { useEffect, useState } from 'react'

const Page = () => {
  const [width, setWidth] = useState<number>(0);
  
    useEffect(() => {
      const updateWidth = () => setWidth(window.innerWidth);
      updateWidth(); // Get initial width
  
      window.addEventListener("resize", updateWidth); // Listen for resize
      return () => window.removeEventListener("resize", updateWidth);
    }, []);
  return (
  <>
  <main className='p-4 flex flex-col gap-10 mb-20'>
    <Hero/>
    <BentoGrid width={width}/>
  
  </main>
  </>
  )
}

export default Page