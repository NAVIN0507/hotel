import Hero from '@/components/Room/Hero'
import NavBar from '@/components/Room/NavBar'
import React from 'react'

const page = () => {
  return (
   <main className='p-4 flex flex-col gap-10 mb-20'>
    <NavBar/>
    <Hero/>
   </main>
  )
}

export default page