"use client"

import { fetchUserDetails } from "@/lib/actions/users.actions";
import { Home, Info, DoorOpen, Bed, Phone, LogOut, X, User, ChevronRight } from 'lucide-react';
import {toast} from "sonner";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const MobileSidebar = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [activeItem, setActiveItem] = useState<string>('');

  useEffect(() => {
    // Note: In production, replace with your actual auth logic
    // Using in-memory state instead of localStorage for demo
    const mockUser = null; // Set to { name: "John" } to test logged-in state
    setUser(mockUser);
  }, []);

  const handleLogout = () => {
    setUser(null);
    // In production: clear auth tokens and redirect
    console.log('Logged out');
  };

  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/aboutus', label: 'About Us', icon: Info },
    { href: 'https://portal.brundhavangarden.com/portal', label: 'Portal', icon: DoorOpen, external: true },
    { href: '/allrooms', label: 'Rooms', icon: Bed },
    { href: '/contact', label: 'Contact', icon: Phone },
  ];

  return (
    <>
      {/* Backdrop with blur effect */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Sidebar with glassmorphism */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-gradient-to-br from-white/95 to-gray-50/95 backdrop-blur-xl shadow-2xl transform transition-transform duration-500 ease-out z-50 lg:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header with close button */}
          <div className="relative p-6 border-b border-gray-200/50">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  BRUNDHAVAN
                </h2>
                <p className="text-xs text-gray-500 mt-1">Garden Resort</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-200/50 transition-all duration-200 active:scale-95"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* User Profile Section */}
          {user && (
            <div className="p-6 bg-gradient-to-r from-gray-50 to-gray-100/50">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold shadow-lg">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="text-sm text-gray-500">Welcome back,</p>
                  <p className="font-semibold text-gray-800">{user.name}</p>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Links with modern styling */}
          <nav className="flex-1 p-4 overflow-y-auto">
            <ul className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeItem === item.label;
                
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      className={`group flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-200 ${
                        isActive
                          ? 'bg-gradient-to-r from-gray-800 to-gray-700 text-white shadow-lg scale-[1.02]'
                          : 'text-gray-700 hover:bg-gray-100/80 hover:translate-x-1'
                      }`}
                      onClick={(e) => {
                        if (!item.external) {
                          setActiveItem(item.label);
                          onClose();
                        }
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg transition-colors ${
                          isActive 
                            ? 'bg-white/20' 
                            : 'bg-gray-100 group-hover:bg-gray-200'
                        }`}>
                          <Icon className={`w-5 h-5 ${
                            isActive ? 'text-white' : 'text-gray-700'
                          }`} />
                        </div>
                        <span className="font-medium">{item.label}</span>
                      </div>
                      <ChevronRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                        isActive ? 'text-white' : 'text-gray-400'
                      }`} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer with modern button */}
          <div className="p-6 border-t border-gray-200/50 bg-gradient-to-t from-gray-50/50 to-transparent">
            <button
              onClick={() => {
                if (user) {
                  handleLogout();
                  onClose();
                } else {
                  // Navigate to sign in
                  console.log('Navigate to sign in');
                }
              }}
              className={`w-full py-3.5 px-4 rounded-xl font-medium transition-all duration-200 flex gap-2 items-center justify-center shadow-lg hover:shadow-xl active:scale-95 ${
                user
                  ? 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700'
                  : 'bg-gradient-to-r from-gray-800 to-gray-700 text-white hover:from-gray-700 hover:to-gray-600'
              }`}
            >
              {user ? (
                <>
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </>
              ) : (
                <>
                  <User className="w-4 h-4" />
                  <Link href={"/sign-in"}>
                  <span>Sign In / Sign Up</span>
                  </Link>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
// Mobile Menu Button Component
const MobileMenuButton = ({ onClick }: { onClick: () => void }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed top-9 left-7 z-30 p-2 bg-gradient-to-br from-white/95 to-gray-50/95 backdrop-blur-lg rounded-2xl shadow-lg lg:hidden hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border border-white/50 group"
      aria-label="Open menu"
    >
      <div className="relative w-6 h-6">
        {/* Top line */}
        <span
          className={`absolute left-0 w-6 h-0.5 bg-gradient-to-r from-gray-800 to-gray-600 rounded-full transition-all duration-300 ${
            isHovered ? 'top-2 w-5' : 'top-1'
          }`}
        />
        
        {/* Middle line */}
        <span
          className={`absolute left-0 top-1/2 -translate-y-1/2 h-0.5 bg-gradient-to-r from-gray-800 to-gray-600 rounded-full transition-all duration-300 ${
            isHovered ? 'w-6' : 'w-5'
          }`}
        />
        
        {/* Bottom line */}
        <span
          className={`absolute left-0 w-6 h-0.5 bg-gradient-to-r from-gray-800 to-gray-600 rounded-full transition-all duration-300 ${
            isHovered ? 'bottom-2 w-4' : 'bottom-1'
          }`}
        />
      </div>

      {/* Ripple effect on click */}
      <span className="absolute inset-0 rounded-2xl bg-gray-200 opacity-0 group-active:opacity-20 transition-opacity duration-200" />
    </button>
  );
};

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

 const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);
  return (
    <>
      <MobileSidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      
      {/* Mobile Menu Button */}
      
      <MobileMenuButton onClick={openSidebar} />
  <header className="w-full h-full bg-[#2a2552] p-4 rounded-2xl relative max-sm:p-10">
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
    <ul className="hidden md:flex gap-30 uppercase text-lg tracking-wide font-sans items-center justify-center ">
      <li><Link href="/allrooms" className="text-white hover:underline font-sans">Rooms</Link></li>
      <li><Link href="/contact" className="text-white hover:underline font-sans">Contact</Link></li>
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
</>
  )
}

export default NavBar
