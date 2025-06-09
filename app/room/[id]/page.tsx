import Footer from '@/components/Room/Footer'
import Hero from '@/components/Room/Hero'
import NavBar from '@/components/Room/NavBar'
import OtherRooms from '@/components/Room/OtherRooms'
import RoomInfo from '@/components/Room/RoomInfo'
import { fetchAllRoomByID } from '@/lib/actions/users.actions'
import React from 'react'

const page = async({params}:{params:{id:string}}) => {
  const roomDetails = await fetchAllRoomByID(params.id);
  return (
    <>
   <main className='p-4 flex flex-col gap-10 mb-20'>
    <NavBar/>
    <Hero {...roomDetails.data}/>
    <RoomInfo id={await(params.id)}/>
    <OtherRooms/>
   </main>
   <Footer/>
   </>
  )
}

export default page