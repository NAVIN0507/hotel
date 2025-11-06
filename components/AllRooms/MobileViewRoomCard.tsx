import { BedDouble, InspectionPanel, UsersRound } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MobileViewRoomCard = ({id,
    name,
    description,
    pictures,
    price,
    square_ft,
    capability,
    beds , c , index}:RoomCategoriesProps) => {
  return (
    <Link href={`/room/${id}`}>
   <div className="w-full rounded-xl p-4 mt-4 h-full bg-[#011D38]  text-white">
  {/* Header */}
  <div className="flex">
    <h1 className="font-mono uppercase ml-1 text-4xl">{name}</h1>
  </div>

  {/* Description */}
  <p className="text-[#C1C1C1] text-sm mt-3">{description}</p>

  {/* Info Section */}
  <div className="flex p-10 items-center justify-between -mt-5">
    <div className="flex flex-col items-center gap-2">
      <InspectionPanel color="#ffffff" width={40} height={40} />
      <p className="text-white">{square_ft}M2</p>
    </div>
    <div className="flex flex-col items-center gap-2">
      <UsersRound color="#ffffff" width={40} height={40} />
      <p className="text-white text-center">{capability}</p>
    </div>
    <div className="flex flex-col items-center gap-2">
      <BedDouble color="#ffffff" width={40} height={40} />
      <p className="text-white">{beds} Beds</p>
    </div>
  </div>

  {/* Image + Price Tag */}
  <div className="relative mt-5">
    {/* Image */}
    <Image
      src={pictures[index]}
      alt="room"
      width={400}
      height={250}
      className="rounded-xl w-full h-[250px] object-cover"
    />

    {/* Price Tag */}
    <div className="absolute -mt-14  left-1/2 -translate-x-1/2 w-full bg-white rounded-full p-2 shadow-lg flex items-center justify-between ">
      <h1 className="font-mono text-black text-sm sm:text-base">
        STARTS FROM <span className="text-lg font-bold">{price}</span> /PER NIGHT
      </h1>
      <button className="bg-[#AA9061] text-white rounded-full px-5 py-2 text-sm">
        EXPLORE
      </button>
    </div>
  </div>
</div>
</Link>
  )
}

export default MobileViewRoomCard