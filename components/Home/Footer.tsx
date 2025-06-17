"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from 'next/image'
import Link from "next/link";

const Footer = () => {
    const [width, setWidth] = useState<number>(0);
    
      useEffect(() => {
        const updateWidth = () => setWidth(window.innerWidth);
        updateWidth(); // Get initial width
    
        window.addEventListener("resize", updateWidth); // Listen for resize
        return () => window.removeEventListener("resize", updateWidth);
      }, []);
  return (
    <>
    {width < 768 ? (<>
    
    </>) :(<>
   <footer className='bg-[#E9E9E9] w-full h-full p-10'>
    <div className='flex items-center justify-between gap-4'>
    <div className='flex flex-col gap-1'>
        <h1 className='font-mono text-3xl'>LOCATION</h1>
        <Image
        src={"/assets/images/map1.png"}
        alt='map'
        width={200}
        height={200}
        />
        <p className='underline mt-6 hover:cursor-pointer'>VIEW LARGER MAP</p>
    </div>
    <div className='flex flex-col gap-1'>
        <h1 className='font-mono text-3xl'>CUSTOMER CARE</h1>
        <p className='text-sm underline mt-4'>Track Orders</p>
        <p className='text-sm underline mt-2'>Shipping Policy</p>
        <p className='text-sm underline mt-2'>Terms & Conditions</p>
        <p className='text-sm underline mt-2'>Privacy Policy</p>
         <p className='text-sm underline mt-2'>Refund Policy</p>
        </div>
           <div className='flex flex-col gap-1 -mt-18'>
        <h1 className='font-mono text-3xl'>CONTACT US</h1>
        <p className='text-sm mt-2'>Call: 99999 99999</p>
        <p className='text-sm mt-2'>Write: Solvix@Gmail.com</p>
        <p className='text-sm mt-2'>Find Us: Xxxx , Xxx , Dindigul , Tamil Nadu</p>
        
        </div>
           <div className='flex flex-col gap-1 -mt-28'>
        <h1 className='font-mono text-3xl'>FOLLOW US</h1>
        <div className='flex gap-4 mt-2'>
       <div className='w-10 h-10 rounded-full bg-black '></div>
        <div className='w-10 h-10 rounded-full bg-black '></div>
         <div className='w-10 h-10 rounded-full bg-black '></div>
       </div>
        </div>
    </div>
    <div className='flex items-center justify-between mt-24'>

        <h1>Copyright © 2025 <Link href={"/"}> BRUNDHAVAN </Link> | All Rights Reserved</h1>
      <h1>Made by <Link href={"https://solvixsoftworks.com/"}>SolvixSoftworks</Link>  </h1>
    </div>
   </footer>
   </>)}
   </>
  )
}

export default Footer