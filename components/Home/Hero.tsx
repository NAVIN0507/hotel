"use client"

import { fetchUserDetails } from "@/lib/actions/users.actions";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


const Hero = () => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const rawToken = localStorage.getItem("user_token");
    const token = rawToken?.replace(/^"(.*)"$/, "$1");
    if (token) {
      fetchUserDetails(token).then((res) => {
        if (res.success) {
          setUser(res.data);
        }
      });
    }
  }, []);

  const handleNavigation = (path: string) => {
    router.push(path);
  };

    return (
        <section className="relative h-screen bg-cover bg-center bg-hero  rounded-2xl">
            {/* Overlay (optional) */}
            <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>

            {/* Navbar */}
         <nav className="absolute top-0 left-0 w-full z-20 flex justify-between items-center max-sm:flex-col max-sm:gap-4 max-sm:text-center px-10 py-6 text-white">

  {/* Left Navigation */}
  <ul className="hidden md:flex gap-30 uppercase text-sm tracking-wide">
    <li><a href="/" className="hover:text-yellow-300 hover:underline">Home</a></li>
    <li><a href="/aboutus" className="hover:text-yellow-300 hover:underline">About Us</a></li>
    <li><a href="https://portal.brundhavangarden.com" className="hover:text-yellow-300 hover:underline">Portal</a></li>
  </ul>

  {/* Center Logo (centered only on mobile) */}
  <div className="text-2xl font-bold font-mono text-yellow-400 tracking-widest max-sm:mx-auto">
    BRUNDHAVAN
  </div>

  {/* Right Navigation */}
  <ul className="hidden md:flex gap-30 uppercase text-sm tracking-wide font-sans">
    <li><a href="/allrooms" className="hover:text-yellow-300 hover:underline font-sans">Rooms</a></li>
    <li><a href="/" className="hover:text-yellow-300 hover:underline font-sans">Contact</a></li>
    <li
      className="cursor-pointer border border-white px-5 py-2 rounded-full bg-white/10 hover:bg-white hover:text-black transition-all"
      onClick={() => {
        const destination = user ? "/" : "/sign-in";
        router.push(destination);
      }}
    >
      {user ? "My Profile" : "Sign-In/Up"}
    </li>
  </ul>

</nav>


            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
                <p className="uppercase tracking-widest text-sm mb-4">Relax on the most peaceful place – on Kodaikanal</p>
                <h1 className="text-5xl md:text-6xl  font-semibold font-mono uppercase leading-tight">
                    Stay Comfort<br />and Feel Comfort
                </h1>

                {/* Buttons */}
                <div className="mt-8 flex ">
                  <Link href={"/allrooms"} className="px-8 pr-20 cursor-pointer border border-white rounded-full inset-0 bg-white/20 text-white hover:bg-white hover:text-black transition flex items-center justify-center">
                    <button >
                        Explore
                    </button>
                    </Link>
                    <Link href="/allrooms">
            <button className="px-6 py-2 sm:px-8 sm:py-3 flex items-center gap-2 max-sm:-ml-16 sm:-ml-16  rounded-full bg-yellow-400 text-white hover:bg-yellow-300 transition text-sm sm:text-base">
              Check Rooms <ArrowRightIcon className="w-5 sm:w-7" />
            </button>
          </Link>
                </div>
            </div>
        </section>

    )
}

export default Hero