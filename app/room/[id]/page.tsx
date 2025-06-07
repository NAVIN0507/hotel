import Footer from '@/components/Room/Footer'
import Hero from '@/components/Room/Hero'
import NavBar from '@/components/Room/NavBar'
import OtherRooms from '@/components/Room/OtherRooms'
import RoomInfo from '@/components/Room/RoomInfo'
import React from 'react'

const page = () => {
  return (
    <>
   <main className='p-4 flex flex-col gap-10 mb-20'>
    <NavBar/>
    <Hero/>
    <RoomInfo/>
    <OtherRooms/>
   </main>
   <Footer/>
   </>
  )
}
export async function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
  ];
}

export default page