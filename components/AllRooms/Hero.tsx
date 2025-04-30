import { ArrowRightIcon } from 'lucide-react'


const Hero = () => {
    return (
        <section className="relative h-screen bg-cover bg-center bg-hero  rounded-2xl">
            {/* Overlay (optional) */}
            <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>

            {/* Navbar */}
            <nav className="absolute top-0 left-0 w-full z-20 flex justify-between items-center max-sm:text-center px-10 py-6 text-white">

                <ul className="hidden md:flex gap-30 uppercase text-sm tracking-wide ">
                    <li><a href="/" className="hover:text-yellow-300 hover:underline">Home</a></li>
                    <li><a href="/about" className="hover:text-yellow-300 hover:underline">About Us</a></li>
                    <li><a href="#" className="hover:text-yellow-300 hover:underline">Activities</a></li>
                </ul>
                <div className="text-2xl font-bold font-mono text-yellow-400 tracking-widest">BRUNDHAVAN</div>
                <ul className='hidden md:flex gap-30 uppercase text-sm tracking-wide font-sans'>
                    <li><a href="#" className="hover:text-yellow-300 hover:underline font-sans">Rooms</a></li>
                    <li><a href="#" className="hover:text-yellow-300 hover:underline font-sans">Contact</a></li>
                    <li>        <a href="#" className="border border-white px-5 py-2 rounded-full bg-white/10  hover:bg-white hover:text-black transition-all inset-0 ">
                        Book Now
                    </a></li>
                </ul>

            </nav>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
                <p className="uppercase tracking-widest text-sm mb-4">Rooms and cottages</p>
                <h1 className="text-5xl md:text-6xl  font-semibold font-mono uppercase leading-tight">
                    WE HAVE CURATED <br /> VILLAS & COTTAGES
                </h1>

                {/* Buttons */}
                <div className="mt-8 flex ">
                    <button className="px-8 pr-20 h-14 cursor-pointer border border-white rounded-full inset-0 bg-white/20 text-white hover:bg-white hover:text-black transition text-xl flex items-center justify-center text-center">
                        Explore →
                    </button>
                  
                </div>
            </div>
        </section>

    )
}

export default Hero