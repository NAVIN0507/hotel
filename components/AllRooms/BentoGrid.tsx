"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { fetchAllRoomCategories } from '@/lib/actions/users.actions';
import RoomCard from './RoomCard';
import MobileViewRoomCard from './MobileViewRoomCard';
const activityItems = [
  { label: "JEEP SAFARI" },
  { label: "TRUCKING" },
  { label: "RAFTING" },
  { label: "CAMPING" },
];

import Image from 'next/image';

const BentoGrid = ({width , isHome}:{width:number;isHome?:boolean}) => {
  
  const [room_categories, setroom_categories] = useState<Array<RoomCategories> | null>(null);
  useEffect(()=>{
    const fetchRooms = async()=>{
      const rooms =  await fetchAllRoomCategories();
      setroom_categories(rooms.data)
    }
    fetchRooms();
  } , [])

  return (
    <>
   <section className='w-full h-full   flex items-center justify-center'>

    <div className='flex flex-col gap-2 items-center justify-center  '>
          {isHome && (
      <>
        <p className='text-[#5C5C5C] text-center'>ROOMS AND COTTAGES</p>
    <div className='flex gap-2 items-center justify-center mt-4 mb-4'>
<div className="w-20 mr-2  hidden lg:block ml-10 h-0 border border-gray-500" />
<h1 className='text-[#5C5C5C] font-mono text-5xl'>DISCOVER OUR ROOMS</h1>
<div className="w-20 hidden lg:block  ml-2 h-0 border border-gray-500" />
    </div>
    </>
    )}
    
{room_categories?.map((rooms, index) => {

  const isRotate = index % 2 === 0;
  const isMobile = width < 768;

  return isMobile ? (

    <MobileViewRoomCard key={rooms.id} index={index} {...rooms} isHome />
  ) : (
    
    <Link href={`/room/${rooms.id}`} className='pl-10'>
    <RoomCard key={rooms.id} index={index} c={isRotate} {...rooms} />
    </Link>

  );
})}

    </div>

   </section>
  </>
  )
}

export default BentoGrid