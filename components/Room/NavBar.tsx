"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { fetchUserDetails } from "@/lib/actions/users.actions";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Rooms", href: "/allrooms" },
    { label: "About Us", href: "/aboutus" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300  -mt-4 ${
        scrolled
          ? "bg-white/90 shadow-lg backdrop-blur-md"
          : "bg-white/40 backdrop-blur-lg"
      } rounded-full border border-white/20 w-[90%] sm:w-[85%] md:w-[70%] lg:w-[60%]`}
    >
      <div className="flex items-center justify-between px-5 sm:px-8 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={"/assets/images/Brundhavan_word_logo.png"}
            alt="Brundhavan Garden"
            width={35}
            height={35}
            className="rounded-full"
          />
          <span className="font-serif text-[#011D38] text-lg font-semibold tracking-wide">
            Brundhavan
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[#011D38] text-sm uppercase tracking-wider font-medium hover:text-[#D4AF37] transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Book Now Button */}
        <div className="hidden md:flex">
          <Link
            href="/sign-in"
            className="bg-[#D4AF37] hover:bg-[#bfa031] text-white text-sm px-5 py-2 rounded-full uppercase tracking-wider font-semibold transition-all duration-300"
          >
            {!user ?  "Sign In/Up" : user.name}
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#011D38]"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-6 bg-white/95 backdrop-blur-lg rounded-b-3xl border-t border-gray-200">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#011D38] text-sm uppercase tracking-wider hover:text-[#D4AF37] transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
         
        </div>
      )}
    </nav>
  );
};

export default Navbar;
