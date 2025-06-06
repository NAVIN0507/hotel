"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { InfiniteMovingPills } from '../ui/infinite-moving-cards'
import { BedDouble, InspectionPanel, UsersRound } from 'lucide-react';
import Link from 'next/link';
import { fetchAllRoomCategories } from '@/lib/actions/users.actions';
import RoomCard from './RoomCard';
const activityItems = [
  { label: "JEEP SAFARI" },
  { label: "TRUCKING" },
  { label: "RAFTING" },
  { label: "CAMPING" },
];
const BentoGrid = () => {
  const [room_categories, setroom_categories] = useState<Array<RoomCategories> | null>(null);
  useEffect(()=>{
    const fetchRooms = async()=>{
      const rooms =  await fetchAllRoomCategories();
      setroom_categories(rooms.data)
    }
    fetchRooms();
  } , [])
  console.log(room_categories);
  return (
   <section className='w-full h-full p-2 mx-auto'>

    <div className='flex flex-col gap-2 mx-auto items-center justify-center ml-10'>
    
    {room_categories?.map((rooms, index) => {
  const isRotate = index % 2 === 0; // true for even index
  return (
    <RoomCard c={isRotate} {...rooms} key={rooms.id} />
  );
})}

    {/* <div className='flex flex-col md:flex-row'>
      <Link href={"/room"}>
        <div className='relative'>
            <Image
            src={"/assets/images/feature_section.jpg"}
            alt='feature_section'
            width={500}
            height={500}
            className='w-[800px] h-[400px] object-cover rounded-lg mt-10 ml-10'
            />
            
            <div className='w-fit p-3 h-12 bg-white  absolute -mt-14 right-0 mr-5 rounded-full'>
            <div className='flex gap-1 items-center -mt-2'>
                <h1 className='font-mono text-[18px] -mt-2'>STARTS FROM  <span className='text-3xl'>1499 </span> /PER NIGHT</h1>
                <button className='w-[150px] h-10 ml-4 bg-[#AA9061] rounded-full text-white'>EXPLORE</button>
            </div>
            </div>
        </div>
        </Link>
        <div className='md:w-4/12 h-[400px] bg-[#011D38] p-7 md:ml-14 mt-10 rounded-2xl'>
       <div className='mt-10'>
        <h1 className='text-white font-mono text-3xl'>/01 WOOD HOUSE</h1>
        <p className='text-[#C1C1C1] text-sm mt-4'>Spoil yourself with the assortment in cuisine and taste. Explore & Investigate the wide range of food you'd be honored with no place else.
    </p>
   <div className='flex gap-16   mt-10'>
    <div className='flex flex-col gap-1 items-center justify-center'>
        <InspectionPanel  color='#ffffff' width={40} height={40}/>
        <p className='text-white'>55M2</p>
    </div>
      <div className='flex flex-col gap-1 items-center justify-center'>
        <UsersRound   color='#ffffff' width={40} height={40}/>
        <p className='text-white'>1-6 PERSON</p>
    </div>
      <div className='flex flex-col gap-1 items-center justify-center'>
        <BedDouble   color='#ffffff' width={40} height={40}/>
        <p className='text-white'>2 BEDS</p>
    </div>
   </div>
      </div>
    </div>
    </div>
      <div className='flex flex-col md:flex-row'>
          <div className='md:w-4/12 h-[400px] bg-[#011D38] p-7 ml-7 mt-10 rounded-2xl'>
       <div className='mt-10'>
        <h1 className='text-white font-mono text-3xl'>/01 WOOD HOUSE</h1>
        <p className='text-[#C1C1C1] text-sm mt-4'>Spoil yourself with the assortment in cuisine and taste. Explore & Investigate the wide range of food you'd be honored with no place else.
    </p>
   <div className='flex gap-16   mt-10'>
    <div className='flex flex-col gap-1 items-center justify-center'>
        <InspectionPanel  color='#ffffff' width={40} height={40}/>
        <p className='text-white'>55M2</p>
    </div>
      <div className='flex flex-col gap-1 items-center justify-center'>
        <UsersRound   color='#ffffff' width={40} height={40}/>
        <p className='text-white'>1-6 PERSON</p>
    </div>
      <div className='flex flex-col gap-1 items-center justify-center'>
        <BedDouble   color='#ffffff' width={40} height={40}/>
        <p className='text-white'>2 BEDS</p>
    </div>
   </div>
      </div>
    </div>
         <div className='relative'>
            <Image
            src={"/assets/images/feature_section.jpg"}
            alt='feature_section'
            width={500}
            height={500}
            className='w-[800px] h-[400px] object-cover rounded-lg mt-10 ml-10'
            />
            <div className='w-fit p-3 h-12 bg-white  absolute -mt-14 right-0 mr-5 rounded-full'>
            <div className='flex gap-1 items-center -mt-2'>
                <h1 className='font-mono text-[18px] -mt-2'>STARTS FROM  <span className='text-3xl'>1499 </span> /PER NIGHT</h1>
                <button className='w-[150px] h-10 ml-4 bg-[#AA9061] rounded-full text-white'>EXPLORE</button>
            </div>
            </div>
        </div>
      
    </div>
    <div className='flex flex-col md:flex-row'>
        <div className='relative'>
            <Image
            src={"/assets/images/feature_section.jpg"}
            alt='feature_section'
            width={500}
            height={500}
            className='w-[800px] h-[400px] object-cover rounded-lg mt-10 ml-10'
            />
            <div className='w-fit p-3 h-12 bg-white  absolute -mt-14 right-0 mr-5 rounded-full'>
            <div className='flex gap-1 items-center -mt-2'>
                <h1 className='font-mono text-[18px] -mt-2'>STARTS FROM  <span className='text-3xl'>1499 </span> /PER NIGHT</h1>
                <button className='w-[150px] h-10 ml-4 bg-[#AA9061] rounded-full text-white'>EXPLORE</button>
            </div>
            </div>
        </div>
        <div className='md:w-4/12 h-[400px] bg-[#011D38] p-7 md:ml-14 mt-10 rounded-2xl'>
       <div className='mt-10'>    
        <h1 className='text-white font-mono text-3xl'>/01 WOOD HOUSE</h1>
        <p className='text-[#C1C1C1] text-sm mt-4'>Spoil yourself with the assortment in cuisine and taste. Explore & Investigate the wide range of food you'd be honored with no place else.
    </p>
   <div className='flex gap-16   mt-10'>
    <div className='flex flex-col gap-1 items-center justify-center'>
        <InspectionPanel  color='#ffffff' width={40} height={40}/>
        <p className='text-white'>55M2</p>
    </div>
      <div className='flex flex-col gap-1 items-center justify-center'>
        <UsersRound   color='#ffffff' width={40} height={40}/>
        <p className='text-white'>1-6 PERSON</p>
    </div>
      <div className='flex flex-col gap-1 items-center justify-center'>
        <BedDouble   color='#ffffff' width={40} height={40}/>
        <p className='text-white'>2 BEDS</p>
    </div>
   </div>
      </div>
    </div>
    </div>
     <div className='flex flex-col md:flex-row'>
          <div className='md:w-4/12 h-[400px] bg-[#011D38] p-7 ml-7 mt-10 rounded-2xl'>
       <div className='mt-10'>
        <h1 className='text-white font-mono text-3xl'>/01 WOOD HOUSE</h1>
        <p className='text-[#C1C1C1] text-sm mt-4'>Spoil yourself with the assortment in cuisine and taste. Explore & Investigate the wide range of food you'd be honored with no place else.
    </p>
   <div className='flex gap-16   mt-10'>
    <div className='flex flex-col gap-1 items-center justify-center'>
        <InspectionPanel  color='#ffffff' width={40} height={40}/>
        <p className='text-white'>55M2</p>
    </div>
      <div className='flex flex-col gap-1 items-center justify-center'>
        <UsersRound   color='#ffffff' width={40} height={40}/>
        <p className='text-white'>1-6 PERSON</p>
    </div>
      <div className='flex flex-col gap-1 items-center justify-center'>
        <BedDouble   color='#ffffff' width={40} height={40}/>
        <p className='text-white'>2 BEDS</p>
    </div>
   </div>
      </div>
    </div>
        <div className='relative'>
            <Image
            src={"/assets/images/feature_section.jpg"}
            alt='feature_section'
            width={500}
            height={500}
            className='w-[800px] h-[400px] object-cover rounded-lg mt-10 ml-10'
            />
            <div className='w-fit p-3 h-12 bg-white  absolute -mt-14 right-0 mr-5 rounded-full'>
            <div className='flex gap-1 items-center -mt-2'>
                <h1 className='font-mono text-[18px] -mt-2'>STARTS FROM  <span className='text-3xl'>1499 </span> /PER NIGHT</h1>
                <button className='w-[150px] h-10 ml-4 bg-[#AA9061] rounded-full text-white'>EXPLORE</button>
            </div>
            </div>
        </div>
      
    </div> */}
    </div>
   
   </section>
  )
}

export default BentoGrid