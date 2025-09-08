"use client"

import { fetchUserDetails } from "@/lib/actions/users.actions";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


const NavBar = () => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  console.log(user)
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
  <header className="w-full h-full bg-[#00000040] p-4 rounded-full relative max-sm:p-10">
  <nav className="flex items-center justify-between w-full h-full pl-2  relative">
    
    {/* Left nav */}
    <ul className="hidden md:flex gap-20 uppercase text-lg tracking-wide">
      <li><Link href="/" className="text-white hover:underline">Home</Link></li>
      <li><Link href="/aboutus" className="text-white hover:underline">About Us</Link></li>
      <li><a href="https://portal.brundhavangarden.com" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">Portal</a></li>
    </ul>

    {/* Center logo - centered only on mobile */}
    <div className="text-2xl font-bold font-mono text-yellow-400 tracking-widest 
                    md:static max-md:absolute max-md:left-1/2 max-md:-translate-x-1/2">
      BRUNDHAVAN
    </div>

    {/* Right nav */}
    <ul className="hidden md:flex gap-30 uppercase text-lg tracking-wide font-sans mt-3">
      <li><Link href="/allrooms" className="text-white hover:underline font-sans">Rooms</Link></li>
      <li><Link href="/" className="text-white hover:underline font-sans">Contact</Link></li>
      <li>
        <a
          href={user ? "/" : "/sign-in"}
          className="border border-white px-5 text-white py-2 rounded-full bg-white/10 transition-all"
        >
          {user ? `Hi ${user.name}` : "Sign-In/Up"}
        </a>
      </li>
    </ul>

  </nav>
</header>

  )
}

export default NavBar
