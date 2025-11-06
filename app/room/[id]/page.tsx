import Footer from '@/components/Room/Footer'
import Hero from '@/components/Room/Hero'
import NavBar from '@/components/Room/NavBar'
import OtherRooms from '@/components/Room/OtherRooms'
import RoomInfo from '@/components/Room/RoomInfo'
import { fetchAllRoomByID , fetchAllRoomCategories } from '@/lib/actions/users.actions'
import { redirect } from 'next/navigation'
import React from 'react'
export async function generateStaticParams() {
  // fetch all rooms once (assuming your API gives all room IDs)
  const rooms = await fetchAllRoomCategories(); 

  // return array of params for each [id]
  return rooms.data.map((room: any) => ({
    id: room.id.toString(),
  }));
}

const page = async({params}:{params:{id:string}}) => {

  const room   =await fetchAllRoomByID(params.id);
  if(!room.data || room==null){
    return redirect('/')
  }
  const numberRoomId =  Number(params.id)
  
  const roomDetails = await fetchAllRoomByID(params.id);
  const allRooms = await fetchAllRoomCategories()
  return (
    <>
   <main className='p-4 flex flex-col gap-10 mb-20'>
    <NavBar/>
    <Hero {...roomDetails.data}/>
    <RoomInfo id={params.id}/>
    <OtherRooms roomProps={allRooms.data} currRoomId={numberRoomId }/>
   </main>
   <Footer/>
   </>
  )
}

export default page


