import React from 'react'

const NavBar = () => {
  return (
    <header className='w-full h-full bg-[#00000040] p-5 rounded-full'>
       <nav className='flex items-center justify-between w-full h-full'>
          <ul className="hidden md:flex gap-30 uppercase text-sm tracking-wide ">
                    <li><a href="/" className="text-white hover:underline">Home</a></li>
                    <li><a href="/about" className="text-white hover:underline">About Us</a></li>
                    <li><a href="#" className="text-white hover:underline">Activities</a></li>
                </ul>
                <div className="text-2xl font-bold font-mono text-yellow-400 tracking-widest">BRUNDHAVAN</div>
                <ul className='hidden md:flex gap-30 uppercase text-sm tracking-wide font-sans'>
                    <li><a href="#" className="text-white hover:underline font-sans">Rooms</a></li>
                    <li><a href="#" className="text-white hover:underline font-sans">Contact</a></li>
                    <li>        <a href="#" className="border border-white px-5 py-2 rounded-full bg-white/10  hover:bg-white hover:text-black transition-all inset-0 ">
                        Book Now
                    </a></li>
                </ul>
       </nav>
    </header>
  )
}

export default NavBar