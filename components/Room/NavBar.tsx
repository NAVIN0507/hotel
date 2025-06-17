"use client"

import { fetchUserDetails } from "@/lib/actions/users.actions";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


const NavBar = () => {
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
    <header className='w-full h-full bg-[#00000040] p-4 rounded-full'>
       <nav className='flex items-center justify-between w-full h-full pl-2'>
          <ul className="hidden md:flex gap-30 uppercase text-lg tracking-wide ">
                    <li><a href="/" className="text-white hover:underline">Home</a></li>
                    <li><a href="/aboutus" className="text-white hover:underline">About Us</a></li>
                    <li><a href="https://portal.brundhavangarden.com" className="text-white hover:underline">Portal</a></li>
                </ul>
                <div className="text-2xl font-bold font-mono text-yellow-400 tracking-widest">BRUNDHAVAN</div>
                <ul className='hidden md:flex gap-30 uppercase text-lg tracking-wide font-sans'>
                    <li><a href="/allrooms" className="text-white hover:underline font-sans">Rooms</a></li>
                    <li><a href="/" className="text-white hover:underline font-sans">Contact</a></li>
                    <li>        <a href={user ? "/" :'/sign-in'} className="border border-white px-5 text-white  py-2 rounded-full bg-white/10 transition-all inset-0 ">
                        {user ? 'My Profile' :'Sign-In/Up'}
                    </a></li>
                </ul>
       </nav>
    </header>
  )
}

export default NavBar