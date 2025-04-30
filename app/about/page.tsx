import AboutCard from '@/components/About/AboutCard'
import Contact from '@/components/About/Contact'
import Hero from '@/components/About/Hero'
import Story from '@/components/About/Story'
import SpecialSection from '@/components/About/Team'
import TestimonialsSection from '@/components/About/Testimonial'
import React from 'react'

const page = () => {
  return (
   <>
   <main className='p-4 flex flex-col gap-10 mb-20'>
    <Hero/>
    <Story/>
    <AboutCard/>
    <SpecialSection/>
    <TestimonialsSection/>
    <Contact/>
   </main>
   </>
  )
}

export default page