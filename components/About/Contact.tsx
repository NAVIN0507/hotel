import React from 'react'

const Contact = () => {
  return (
   <section className='mx-auto mt-32'>
    <div className='flex flex-col gap-2 items-center justify-center'>
        <h1 className='flex gap-2 text-6xl font-mono text-[#45443F]'> <div className="w-20 mt-7 hidden lg:block mr-2 h-0 border border-gray-500" /> STAY WITH US  <div className="w-20 mt-7 hidden lg:block ml-2 h-0 border border-gray-500" /></h1>
    </div>

    <div className='flex mt-20 md:flex-row flex-col gap-7'>
        <button className='w-[300px] text-white h-[60px] cursor-pointer bg-[#AA9061] rounded-md'>EXPLORE ROOMS</button>
        <button className='w-[300px] text-black h-[60px] border border-gray-600 cursor-pointer rounded-md'>EXPLORE ROOMS</button>
    </div>
   </section>
  )
}

export default Contact