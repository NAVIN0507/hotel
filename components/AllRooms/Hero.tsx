"use client";

import { fetchUserDetails } from "@/lib/actions/users.actions";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Hero = () => {
  const [user, setUser] = useState<User | null>(null);

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

  return (
    <section className="relative h-screen bg-cover bg-center rounded-2xl bg-hero w-full ">
      <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full px-4 sm:px-10 py-4 sm:py-6 flex items-center justify-between text-white">
        {/* Left Menu (hidden on mobile) */}
        <ul className="hidden md:flex gap-40 uppercase text-sm tracking-wide">
          <li><a href="/" className="hover:text-yellow-300 hover:underline">Home</a></li>
          <li><a href="/about" className="hover:text-yellow-300 hover:underline">About Us</a></li>
          <li><a href="#" className="hover:text-yellow-300 hover:underline">Activities</a></li>
        </ul>

        {/* Logo (centered on mobile) */}
        <div className="text-xl sm:text-2xl font-bold font-mono text-yellow-400 tracking-widest absolute left-1/2 transform ml-50 max-sm:ml-0 -translate-x-1/2 md:static md:transform-none max-sm:mt-4">
          BRUNDHAVAN
        </div>

        {/* Right Menu (hidden on mobile) */}
        <ul className="hidden md:flex gap-30 uppercase text-sm tracking-wide font-sans items-center">
          <li><a href="#" className="hover:text-yellow-300 hover:underline">Rooms</a></li>
          <li><a href="#" className="hover:text-yellow-300 hover:underline">Contact</a></li>
          <Link href={user ? "/my-profile" : "/sign-in"}>
            <li>
              <a className="border border-white px-5 py-2 rounded-full bg-white/10 hover:bg-white hover:text-black transition-all">
                {user ? "My Profile" : "Sign-In/Up"}
              </a>
            </li>
          </Link>
        </ul>
      </nav>

      {/* Hero Content */}
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
  );
};

export default Hero;
