"use client";
import React from "react";
import Image from "next/image";

const RoomCard = () => {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-10 bg-white">
      {/* Section Title */}
      <div className="text-center mb-6">
        <p className="uppercase tracking-widest text-xs text-gray-500">Rooms and Cottages</p>
        <h2 className="text-2xl md:text-3xl font-serif font-light text-gray-800 mt-2">
          <span className="inline-block border-t border-b border-gray-400 px-4 py-1">
            DISCOVER OUR ROOMS
          </span>
        </h2>
      </div>

      {/* Room Card */}
      <div className="relative w-[90%] max-w-sm rounded-xl overflow-hidden shadow-lg">
        <Image
          src="/room.jpg" // replace with your own image path
          alt="Wood House"
          width={500}
          height={400}
          className="object-cover w-full h-[300px]"
        />

        {/* Overlay */}
        <div className="absolute bottom-0 left-0 w-full bg-[#0D1B2A]/90 px-6 py-6 rounded-t-xl text-white">
          <h3 className="text-lg sm:text-xl font-semibold mb-2 tracking-wide">WOOD HOUSE</h3>
          <p className="text-sm mb-4 leading-relaxed font-light">
            Spoil Yourself With The Assortment In Cuisine And Taste. Explore & Investigate
            The Wide Range Of Food You’d Be Honored With No Place Else.
          </p>

          <button className="bg-[#D4AF37] text-sm text-white px-5 py-2 rounded-full font-medium tracking-wide hover:bg-[#c09d2e] transition-all">
            KNOW MORE →
          </button>
        </div>
      </div>

      {/* Dots (Pagination indicators like in your screenshot) */}
      <div className="mt-6 flex gap-1">
        <span className="w-2 h-2 rounded-full bg-black/90"></span>
        <span className="w-2 h-2 rounded-full bg-black/30"></span>
        <span className="w-2 h-2 rounded-full bg-black/30"></span>
      </div>
    </section>
  );
};

export default RoomCard;
