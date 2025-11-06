"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { InfiniteMovingPills } from '../ui/infinite-moving-cards'
import { BedDouble, InspectionPanel, UsersRound } from 'lucide-react';
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
const BentoGrid = ({width}:{width:number}) => {
  const [room_categories, setroom_categories] = useState<Array<RoomCategories> | null>(null);
  useEffect(()=>{
    const fetchRooms = async()=>{
      const rooms =  await fetchAllRoomCategories();
      setroom_categories(rooms.data)
    }
    fetchRooms();
  } , [])

  return (
   <section className='w-full h-full   flex items-center justify-center'>

    <div className='flex flex-col gap-2 items-center justify-center  '>
    
{room_categories?.map((rooms, index) => {
  const isRotate = index % 2 === 0;
  const isMobile = width < 768;

  return isMobile ? (
    <MobileViewRoomCard key={rooms.id} index={index} {...rooms} />
  ) : (
    <Link href={`/room/${rooms.id}`}>
    <RoomCard key={rooms.id} index={index} c={isRotate} {...rooms} />
    </Link>
  );
})}

    </div>
   
   </section>
  )
}

export default BentoGrid