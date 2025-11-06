"use client";
import { Dot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface RoomProps {
  id: number;
  name: string;
  price: number;
  square_ft: number;
  capability: number;
  beds: number;
  pictures: string[];
}

const OtherRooms = ({
  roomProps,
  currRoomId,
}: {
  roomProps: RoomProps[];
  currRoomId: number;
}) => {
  // Filter out the current room
  const otherRooms = roomProps.filter((room) => room.id !== currRoomId);

  return (
    <section className="px-6 md:px-10 mt-16">
      <h1 className="font-mono text-4xl text-[#45443F]">OTHER ROOMS</h1>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {otherRooms.map((room) => (
            <Link href={`/room/${room.id}`} key={room.id}>
          <div
            
            className="flex flex-col gap-3 group transition-transform hover:scale-[1.02]"
          >
            {/* Image + Price Overlay */}
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <Image
                src={room.pictures[0]}
                alt={room.name}
                width={450}
                height={350}
                className="w-full h-[350px] object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
              />
               <div className='absolute -mt-10 ml-5'>
                     <h1 className='text-white text-center text-xl -mt-3'>STARTS FROM <span className='font-mono text-5xl'>{room.price}</span>/PER NIGHT</h1>
                </div>
            </div>

            {/* Room Info */}
            <h2 className="mt-3 font-mono text-2xl text-[#45443F]">
              {room.name}
            </h2>
            <p className="text-[#5C5C5C] flex items-center gap-1 text-sm md:text-base">
              {room.square_ft} m² <Dot /> {room.capability} Person
              {room.capability > 1 ? "s" : ""} <Dot /> {room.beds} Bed
              {room.beds > 1 ? "s" : ""}
            </p>
          </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default OtherRooms;
