import { BedDouble, InspectionPanel, UsersRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MobileViewRoomCard = ({
  id,
  name,
  description,
  pictures,
  price,
  square_ft,
  capability,
  beds,
}: RoomCategoriesProps) => {
  return (
    <Link href={`/room/${id}`} className="block w-full">
      <div className="w-full rounded-xl p-4 sm:p-6 mt-4 bg-[#011D38] text-white shadow-lg hover:scale-[1.01] transition-transform duration-300">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between">
          <h1 className="font-mono uppercase text-2xl sm:text-3xl md:text-4xl tracking-wide">
            {name}
          </h1>
        </div>

        {/* Description */}
        <p
          className="text-[#C1C1C1] text-xs sm:text-sm md:text-base mt-3 sm:mt-4 leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: description || "",
          }}
        />

        {/* Info Section */}
        <div className="flex flex-wrap items-center justify-around sm:justify-between gap-5 sm:gap-8 p-5 sm:p-8 md:p-10 mt-3 sm:mt-4">
          <div className="flex flex-col items-center gap-2">
            <InspectionPanel className="w-8 h-8 sm:w-10 sm:h-10" color="#ffffff" />
            <p className="text-white text-xs sm:text-sm md:text-base">
              {square_ft}M²
            </p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <UsersRound className="w-8 h-8 sm:w-10 sm:h-10" color="#ffffff" />
            <p className="text-white text-xs sm:text-sm md:text-base text-center">
              1–{capability}
            </p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <BedDouble className="w-8 h-8 sm:w-10 sm:h-10" color="#ffffff" />
            <p className="text-white text-xs sm:text-sm md:text-base">
              {beds} Beds
            </p>
          </div>
        </div>

        {/* Image + Overlay Section */}
        <div className="relative mt-5 sm:mt-8 overflow-hidden rounded-xl">
          {/* Room Image */}
          <Image
            src={pictures[0]}
            alt="room"
            width={800}
            height={400}
            className="w-full h-48 sm:h-64 md:h-72 object-cover transition-transform duration-500 hover:scale-105"
          />

          {/* Dark gradient overlay */}
          <div className="absolute inset-0 from-black/70 via-black/20 to-transparent rounded-xl"></div>

          {/* Price + Button overlay */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] sm:w-[80%] bg-white/90 backdrop-blur-md rounded-full p-1 shadow-lg flex  items-center justify-between gap-2 sm:gap-4">
            <h1 className="font-mono text-black text-xs  text-center">
              STARTS FROM{" "}
              <span className="text-lg font-bold">{price}</span> / PER NIGHT
            </h1>
            <button className="bg-[#AA9061] hover:bg-[#967b4e] text-white rounded-full px-4 sm:px-6 py-2 text-xs sm:text-sm transition-colors">
              EXPLORE
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MobileViewRoomCard;
