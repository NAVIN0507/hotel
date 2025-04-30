import BentoGrid from '@/components/AllRooms/BentoGrid'
import Hero from '@/components/AllRooms/Hero'
import React from 'react'

const page = () => {
  return (
  <>
  <main className='p-4 flex flex-col gap-10 mb-20'>
    <Hero/>
    <BentoGrid/>
  </main>
  </>
  )
}

export default page