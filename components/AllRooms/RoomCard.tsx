import { BedDouble, InspectionPanel, UsersRound } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const RoomCard = ({id,
    name,
    description,
    pictures,
    price,
    square_ft,
    capability,
    beds , c , index}:RoomCategoriesProps) => {
  return (
    <>
    {c ? (
    <div className='flex flex-col md:flex-row'>
    <Link href={`/room/${id}`}>
      <div className='relative'>
          <Image
          src={pictures[index]}
          alt='feature_section'
          width={500}
          height={500}
          className='w-[800px] h-[400px] object-cover rounded-lg mt-10 ml-10'
          />
          
          <div className='w-fit p-3 h-12 bg-white  absolute -mt-14 right-0 mr-5 rounded-full'>
          <div className='flex gap-1 items-center -mt-2'>
              <h1 className='font-mono text-[18px] -mt-2'>STARTS FROM  <span className='text-3xl'>{price} </span> /PER NIGHT</h1>
              <button className='w-[150px] h-10 ml-4 bg-[#AA9061] rounded-full text-white'>EXPLORE</button>
          </div>
          </div>
      </div>
      </Link>
      <div className='md:w-4/12 h-[400px] bg-[#011D38] p-7 md:ml-14 mt-10 rounded-2xl'>
     <div className='mt-10'>
      <h1 className='text-white font-mono text-3xl'>{name}</h1>
      <p className='text-[#C1C1C1] text-sm mt-4'>{description}
  </p>
 <div className='flex gap-16   mt-10'>
  <div className='flex flex-col gap-1 items-center justify-center'>
      <InspectionPanel  color='#ffffff' width={40} height={40}/>
      <p className='text-white'>{square_ft}M2</p>
  </div>
    <div className='flex flex-col gap-1 items-center justify-center'>
      <UsersRound   color='#ffffff' width={40} height={40}/>
      <p className='text-white'>{capability} PERSON</p>
  </div>
    <div className='flex flex-col gap-1 items-center justify-center'>
      <BedDouble   color='#ffffff' width={40} height={40}/>
      <p className='text-white'>{beds} BEDS</p>
  </div>
 </div>
    </div>
  </div>
  </div>
    ): (
        <div className='flex flex-col md:flex-row'>
        <div className='md:w-4/12 h-[400px] bg-[#011D38] p-7 ml-7 mt-10 rounded-2xl'>
     <div className='mt-10'>
      <h1 className='text-white font-mono text-3xl'>{name}</h1>
      <p className='text-[#C1C1C1] text-sm mt-4'>{description}
  </p>
 <div className='flex gap-16   mt-10'>
  <div className='flex flex-col gap-1 items-center justify-center'>
      <InspectionPanel  color='#ffffff' width={40} height={40}/>
      <p className='text-white'>{square_ft}M2</p>
  </div>
    <div className='flex flex-col gap-1 items-center justify-center'>
      <UsersRound   color='#ffffff' width={40} height={40}/>
      <p className='text-white'>{capability} PERSON</p>
  </div>
    <div className='flex flex-col gap-1 items-center justify-center'>
      <BedDouble   color='#ffffff' width={40} height={40}/>
      <p className='text-white'>{beds} BEDS</p>
  </div>
 </div>
    </div>
  </div>
       <div className='relative'>
        <Link href={`room/${id}`}>
          <Image
          src={pictures[index]}
          alt='feature_section'
          width={500}
          height={500}
          className='w-[800px] h-[400px] object-cover rounded-lg mt-10 ml-10'
          />
          </Link>
          <div className='w-fit p-3 h-12 bg-white  absolute -mt-14 right-0 mr-5 rounded-full'>
          <div className='flex gap-1 items-center -mt-2'>
              <h1 className='font-mono text-[18px] -mt-2'>STARTS FROM  <span className='text-3xl'>1499 </span> /PER NIGHT</h1>
              <button className='w-[150px] h-10 ml-4 bg-[#AA9061] rounded-full text-white'>EXPLORE</button>
          </div>
          </div>
      </div>
    
  </div>
    )}
  </>
  )
}

export default RoomCard