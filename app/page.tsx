"use client";

import { useState , useEffect } from "react";
import Hero from "../components/Home/Hero";
import AboutUsSection from "../components/Home/Aboutus";
import SpecialSection from "@/components/Home/FeatureSectio";
import BentoGrid from "@/components/AllRooms/BentoGrid";
import Amunities from "@/components/Home/Amunities";
import Testimonials from "@/components/Home/Testimonials";
import FAQ from "@/components/Home/FAQ";
import Footer from "@/components/Home/Footer";
import { useRouter } from "next/navigation";
import { fetchUserDetails } from "@/lib/actions/users.actions";
import Link from "next/link";
import { HomeIcon, House, Info, LayoutDashboard, LogOut } from "lucide-react";
import { toast } from "sonner";
import Activities from "@/components/Home/Activities";

// Mobile Sidebar Component
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
  const sidebarItems = [
    {label:"Home" , href:"/"  ,icon :HomeIcon},
    {label:"About Us" , href:"/aboutus"  ,icon :Info},
    {label:"Portal" , href:"https://portal.brundhavangarden.com/portal"  ,icon : LayoutDashboard},
    {label:"Rooms" , href:"/allrooms"  ,icon : House}
  ]
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
            <ul className="space-y-7 p-5">
           {sidebarItems.map((item)=>(
            <div className="flex flex-row gap-3">
              <Link href={item.href} className="flex gap-3">
              <item.icon className="size-5"/>
              <li>{item.label}</li>
              </Link>
            </div>
           ))}
          
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t">
            <Link href={user ? `` :"/sign-in"}>
            <button className="w-full  text-black border border-gray-400  py-2 px-4 rounded-full  transition-colors flex gap-2 items-center justify-between">
              {user ? `HI ${user.name}` : "SignIn/Up"}
              {user && (
                <div className="">
                <LogOut className="size-5" onClick={()=>{
                  handleLogout()
                  onClose()
                  router.replace("/")
                }}/>
                </div>
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

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);
    const [width, setWidth] = useState<number>(0);
    
      useEffect(() => {
        const updateWidth = () => setWidth(window.innerWidth);
        updateWidth(); // Get initial width
    
        window.addEventListener("resize", updateWidth); // Listen for resize
        return () => window.removeEventListener("resize", updateWidth);
      }, []);

  return (
    <>
      {/* Mobile Sidebar */}
      <MobileSidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      
      {/* Mobile Menu Button */}
      
      <MobileMenuButton onClick={openSidebar} />

      {/* Main content */}
      <main className="flex flex-col space-y-4 sm:space-y-20 md:space-y-24 lg:space-y-28 xl:space-y-32 p-3">
        <Hero />
        <SpecialSection />
        <AboutUsSection />
        <BentoGrid width={width}  isHome/>
        {/* <Activities/> */}
        <Amunities />
        <Testimonials />
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}