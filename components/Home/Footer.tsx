"use client";
import React, { useEffect, useState } from "react";
import { Loader2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getAppDetails } from "@/lib/actions/users.actions";

interface AppDetails {
  terms: string;
  shipping: string;
  refund: string;
  name: string;
  logo: string;
  favicon: string;
  email: string;
  phone: string;
  facebook_link: string;
  instagram_link: string;
  whatsapp_link: string;
}

const Footer = () => {
  const [width, setWidth] = useState<number>(0);
  const [appDetails, setAppDetails] = useState<AppDetails | null>(null);

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const fetchAppDetails = async () => {
    const { data } = await getAppDetails();
    if (!data) return null;
    setAppDetails(data);
  };

  useEffect(() => {
    fetchAppDetails();
  }, []);

  if (!appDetails)
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2Icon className="size-4 animate-spin" />
      </div>
    );

  return (
    <>
      {/* 🌊 Wave Top Shape */}
      <div className="w-full overflow-hidden leading-[0]">
        <svg
          className="block w-full h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 112"
          preserveAspectRatio="none"
        >
          {/* Filled main wave */}
          <path
            d="M0,64 C80,16 180,16 260,56 C340,96 432,96 512,48 L512,112 L0,112 Z"
            fill="#2a2552"
          />
          {/* White highlight wave line */}
          <path
            d="M0,64 C80,16 180,16 260,56 C340,96 432,96 512,48"
            fill="none"
            stroke="#ffffff"
            strokeWidth="3"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* 🌌 Footer Section */}
      <footer
        id="footer"
        className="bg-[#2a2552] w-full h-full p-6 sm:p-10 flex flex-col text-white"
      >
        {/* --- Top Section --- */}
        <div className="flex flex-col sm:flex-wrap md:flex-row items-start justify-between gap-10">
          {/* 📍 Location */}
          <div className="flex flex-col gap-2 flex-1 min-w-[250px]">
            <h1 className="font-mono text-2xl sm:text-3xl">LOCATION</h1>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3791.9375963497077!2d77.63294822937205!3d10.288953248223544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b075ea7b03954e5%3A0x2cc8b1d04c027abc!2sPannaikadu%20-%20Thandikudi%20Rd%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1758359844758!5m2!1sen!2sin"
              width="100%"
              height="150"
              className="border-0 rounded-md"
              loading="lazy"
            ></iframe>
          </div>

          {/* 📄 Other Pages */}
          <div className="flex flex-col gap-2 min-w-[200px]">
            <h1 className="font-mono text-2xl sm:text-3xl uppercase">
              Other Pages
            </h1>
            <div className="mt-3 flex flex-col">
              <Link href={"/shipping-policies"} className="w-fit">
                <p className="text-sm underline mt-2 hover:text-gray-200 transition">
                  Shipping Policy
                </p>
              </Link>
              <Link href={"/terms-conditions"} className="w-fit">
                <p className="text-sm underline mt-2 hover:text-gray-200 transition">
                  Terms & Conditions
                </p>
              </Link>
              <Link href={"/refund-policy"} className="w-fit">
                <p className="text-sm underline mt-2 hover:text-gray-200 transition">
                  Refund Policy
                </p>
              </Link>
              <Link href={"/privacy-policy"} className="w-fit">
                <p className="text-sm underline mt-2 hover:text-gray-200 transition">
                  Privacy Policy
                </p>
              </Link>
            </div>
          </div>

          {/* ☎️ Contact */}
          <div className="flex flex-col gap-2 flex-1 min-w-[200px]">
            <h1 className="font-mono text-2xl sm:text-3xl">CONTACT US</h1>
            <p className="text-sm mt-2">
              Call: +91 {appDetails?.phone.slice(0, 5)}{" "}
              {appDetails?.phone.slice(5, 10)}
            </p>
            <p className="text-sm mt-2">Write: {appDetails?.email}</p>
            <p className="text-sm mt-2">
              Find Us: 3/347A Pannaikadu Main Road, Thandikudi, Dindigul
            </p>
          </div>

          {/* 📱 Follow Us */}
          <div className="flex flex-col gap-2 flex-1 min-w-[200px]">
            <h1 className="font-mono text-2xl sm:text-3xl">FOLLOW US</h1>
            <div className="flex gap-3 mt-3">
              <Link
                href={appDetails?.whatsapp_link || ""}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:scale-105 transition"
              >
                <Image
                  src="/assets/images/whatsapp-ogo.png"
                  alt="whatsapp"
                  width={30}
                  height={30}
                  className="rounded-md"
                />
              </Link>
              <Link
                href={appDetails?.instagram_link || ""}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:scale-105 transition"
              >
                <Image
                  src="/assets/images/instagram.png"
                  alt="instagram"
                  width={30}
                  height={30}
                  className="rounded-md"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/20 my-8"></div>

        {/* ⚙️ Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <h1 className="text-sm sm:text-base">
            Copyright © 2025{" "}
            <Link href={"/"} className="font-semibold underline">
              BRUNDHAVAN
            </Link>{" "}
            | All Rights Reserved
          </h1>
          <h1 className="text-sm sm:text-base">
            Made by{" "}
            <Link
              href={"https://solvixsoftworks.com/"}
              target="_blank"
              className="font-semibold underline"
            >
              SolvixSoftworks
            </Link>
          </h1>
        </div>
      </footer>
    </>
  );
};

export default Footer;
