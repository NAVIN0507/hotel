'use client'
import BentoGrid from '@/components/AllRooms/BentoGrid'
import Hero from '@/components/AllRooms/Hero'
import MobileViewRoomCard from '@/components/AllRooms/MobileViewRoomCard'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { fetchUserDetails } from '@/lib/actions/users.actions'
import { toast } from 'sonner'
import { LogOut } from 'lucide-react'
    const MobileSidebar = ({ isOpen, onClose }:{isOpen:boolean , onClose:()=>void}) => {
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
  const handleLogout  = ()=>{
    localStorage.removeItem("user_token")
    toast.success("Logged Out Successfully")
    router.refresh()
  }
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl text-black font-semibold">BRUNDHAVAN</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="block px-4 py-2 text-black   rounded-md transition-colors"
                  onClick={onClose}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/aboutus"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                  onClick={onClose}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="https://portal.brundhavangarden.com/portal"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                  onClick={onClose}
                >
                  Portal
                </a>
              </li>
              <li>
                <a
                  href="/allrooms"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                  onClick={onClose}
                >
                  Rooms
                </a>
              </li>
          
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t">
            <Link href={user ? `` :"/sign-in"}>
            <button className="w-full  text-black border border-gray-400  py-2 px-4 rounded-full hover:bg-gray-400 transition-colors flex gap-2 items-center justify-center">
              {user ? `HI ${user.name}` : "SignIn/Up"}
              {user && (
                <LogOut className="size-4" onClick={()=>{
                  handleLogout()
                  onClose()
                  router.replace("/")
                }}/>
              )}
            </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

// Mobile Menu Button Component
const MobileMenuButton = ({ onClick }:{onClick:()=>void}) => {
  return (
    <button
      onClick={onClick}
      className="fixed top-6 left-6 z-30 p-3 bg-white/10 rounded-full shadow-lg lg:hidden hover:shadow-xl transition-shadow"
    >
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  );
};
const Page = () => {
  const [width, setWidth] = useState<number>(0);
  
    useEffect(() => {
      const updateWidth = () => setWidth(window.innerWidth);
      updateWidth(); // Get initial width
  
      window.addEventListener("resize", updateWidth); // Listen for resize
      return () => window.removeEventListener("resize", updateWidth);
    }, []);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);
  return (
  <>
        <MobileSidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      
      {/* Mobile Menu Button */}
      
      <MobileMenuButton onClick={openSidebar} />
  <main className='p-4 flex flex-col gap-10 mb-20'>
    <Hero/>
    <BentoGrid width={width}/>
  
  </main>
  </>
  )
}

export default Page