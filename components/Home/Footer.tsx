"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from 'next/image'
import Link from "next/link";
import { FacebookIcon, Instagram, MessageCircle , Facebook } from "lucide-react";

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
   <footer id="footer" className='bg-[#E9E9E9] w-full h-full p-10'>
    <div className='flex items-center justify-between gap-4'>
    <div className='flex flex-col gap-1'>
        <h1 className='font-mono text-3xl'>LOCATION</h1>
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3791.9375963497077!2d77.63294822937205!3d10.288953248223544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b075ea7b03954e5%3A0x2cc8b1d04c027abc!2sPannaikadu%20-%20Thandikudi%20Rd%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1758359844758!5m2!1sen!2sin" width="250" height="150" className="border:0;" loading="lazy"></iframe>
       
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
       <div className='w-10 h-10 rounded-full'>
        <MessageCircle className="size-10"/>
       </div>
        <div className='w-10 h-10 rounded-full'>
          <Instagram className="size-10"/>
        </div>
         <div className='w-10 h-10 rounded-full'>
          <Facebook className="size-10"/>
         </div>
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