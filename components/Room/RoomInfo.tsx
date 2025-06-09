"use client"
import React, { useEffect, useState, useMemo } from 'react'
import { BedDouble, Dot, InspectionPanel, UsersRound } from 'lucide-react';
import { addBookingWithToken, fetchAllRoomByID } from '@/lib/actions/users.actions';
import Image from 'next/image';

// interface RoomProps {
//   id: string;
//   name: string;
//   square_ft: number;
//   capability: number;
//   beds: number;
//   price: number; // base price per night
//   about_stay: string;
//   check_in_rules: string;
//   check_out_rules: string;
//   room_rules: string;
//   services: {
//     icon_pic: string;
//     service_name: string;
//   }[];
// }

interface BookingDetails {
  token: string;
  room_categories_id: number;
  check_in: string;
  check_out: string;
  adult_count: number;
  child_count: number;
  special_food_menu: string;
  activities: string;
  extra_bed: boolean;
  fire_camp: boolean;
  jeep_safari: boolean;
  total: number;
}

const RoomInfo = ({ id }: { id: string }) => {
  const [roomDetails, setroomDetails] = useState<RoomProps | null>(null);
  const [userToken, setuserToken] = useState("")
  const [bookingDetails, setBookingDetails] = useState<BookingDetails>({
    token: "",
    room_categories_id: Number(id),
    check_in: '',
    check_out: '',
    adult_count: 0,
    child_count: 0,
    special_food_menu: '',
    activities: '',
    extra_bed: false,
    fire_camp: false,
    jeep_safari: false,
    total: 0
  });

  // Format datetime from "YYYY-MM-DDTHH:mm" to "YYYY-MM-DD HH:mm:ss"
  function formatDateTime(input: string) {
    if (!input) return "";
    return input.replace("T", " ") + ":00";
  }

  const totalPrice = useMemo(() => {
    if (!roomDetails) return 0;

    // Base price: 1499 if at least 1 adult or child, else roomDetails.price (fallback)
    const basePrice = (bookingDetails.adult_count > 0 || bookingDetails.child_count > 0) ? 1499 : roomDetails.price;

    // Extra services price
    const extrasCount = [
      bookingDetails.extra_bed,
      bookingDetails.fire_camp,
      bookingDetails.jeep_safari,
    ].filter(Boolean).length;

    const extrasPrice = extrasCount * 299;

    return basePrice + extrasPrice;
  }, [
    bookingDetails.adult_count,
    bookingDetails.child_count,
    bookingDetails.extra_bed,
    bookingDetails.fire_camp,
    bookingDetails.jeep_safari,
    roomDetails,
  ]);

  useEffect(() => {
    const rawToken = localStorage.getItem("user_token");
    const authtoken = rawToken?.replace(/^"(.*)"$/, '$1') || null;
    setuserToken(authtoken ?? "");

    const fetchRoom = async () => {
      const room = await fetchAllRoomByID(id);
      setroomDetails(room.data);
      setBookingDetails((prev) => ({
        ...prev,
        token: authtoken || "",
        room_categories_id: room.data?.id ?? null,
      }));
    };
    fetchRoom();
  }, [id]);

  const aboutRawText = roomDetails?.about_stay;
  const plainText = aboutRawText?.replace(/<[^>]+>/g, '');
  const checkInRules = roomDetails?.check_in_rules
  const checkInruleList = checkInRules?.match(/<li>(.*?)<\/li>/g)?.map(item =>
    item.replace(/<\/?li>/g, '')
  );
  const checkoutRules = roomDetails?.check_out_rules
  const checkOutruleList = checkoutRules?.match(/<li>(.*?)<\/li>/g)?.map(item =>
    item.replace(/<\/?li>/g, '')
  );

  const onClick = async () => {
    // Format check_in and check_out before sending
    const formattedBookingDetails = {
      ...bookingDetails,
      check_in: formatDateTime(bookingDetails.check_in),
      check_out: formatDateTime(bookingDetails.check_out),
      total: totalPrice,
    };

    console.log(formattedBookingDetails);

    const addBooking = await addBookingWithToken(formattedBookingDetails);
    if (addBooking.success) {
      alert("Booking Created");
      console.log(addBooking.data)
    }
    else {
      alert("Booking is Not Created");
      console.log(addBooking.data)
    }
  }

  return (
    <section className='flex flex-col gap-4 pl-10 pr-10 mt-10'>
      <div className='flex gap-1 items-center justify-between'>
        <div className='flex flex-col gap-1'>
          <h3 className='text-[#5C5C5C]'>HOME / ROOMS / {roomDetails?.name}</h3>
          <h1 className='text-6xl font-mono text-[#45443F]'>{roomDetails?.name}</h1>
        </div>
        <div className='flex gap-16 mt-10'>
          <div className='flex flex-col gap-1 items-center justify-center'>
            <InspectionPanel color='#5C5C5C' width={40} height={40} />
            <p className='text-[#5C5C5C]'>{roomDetails?.square_ft}M2</p>
          </div>
          <div className='flex flex-col gap-1 items-center justify-center'>
            <UsersRound color='#5C5C5C' width={40} height={40} />
            <p className='text-[#5C5C5C]'>{roomDetails?.capability} PERSON</p>
          </div>
          <div className='flex flex-col gap-1 items-center justify-center'>
            <BedDouble color='#5C5C5C' width={40} height={40} />
            <p className='text-[#5C5C5C]'>{roomDetails?.beds} BEDS</p>
          </div>
        </div>
      </div>

      <div className='flex gap-5 mt-10'>
        <div className='w-12/12 p-7 rounded-lg h-full border border-[#D7D7D7] flex flex-col gap-2'>
          <div className='flex flex-col gap-4'>
            <h1 className='font-mono text-4xl uppercase text-[#45443F]'>ABOUT STAY</h1>
            <p className='mt-2 text-[#3A3A3A]'>
              {plainText}
            </p>
          </div>
          <div className='w-full mt-10 p-1 h-1 border-b border-[#D7D7D7]' />
          <div className='mt-10'>
            <h1 className='font-mono text-4xl uppercase text-[#45443F]'>services & AMENITIES</h1>
            <div className='grid md:grid-cols-3 gap-5 mt-10'>
              {roomDetails?.services.length !== 0 ? roomDetails?.services.map((service, index) => (
                <div className='p-7 rounded-lg bg-[#F6F5F5] flex gap-3 text-black text-sm' key={index}>
                  <Image
                    src={service.icon_pic}
                    alt='services'
                    width={20}
                    height={20}
                  />
                  {service.service_name}
                </div>
              )) : (
                <div className='p-7 rounded-lg bg-[#F6F5F5] flex gap-3 text-black text-md items-center justify-center'>
                  No services availabel for this Room.
                </div>
              )}
            </div>
          </div>
          <div className='w-full mt-10 p-1 h-1 border-b border-[#D7D7D7]' />
          <div className='mt-10'>
            <h1 className='font-mono text-4xl uppercase text-[#45443F]'>ROOM RULES</h1>
            <div className='flex gap-30 mt-7 pl-5'>
              <div>
                <h3 className='text-[#3A3A3A]'>Check In</h3>
                {checkInruleList?.map((rule, i) => (
                  <p className='flex gap-1 text-[#3A3A3A]' key={i}><Dot />{rule}</p>
                ))}
              </div>
              <div>
                <h3 className='text-[#3A3A3A]'>Check Out</h3>
                {checkOutruleList?.map((rule, i) => (
                  <p className='flex gap-1 text-[#3A3A3A]' key={i}><Dot />{rule}</p>
                ))}
              </div>
            </div>
            <div className='flex flex-col gap-1 mt-10 pl-5 leading-relaxed text-[#3A3A3A]'>
              <div
                className=""
                dangerouslySetInnerHTML={{ __html: roomDetails?.room_rules || "" }}
              />
            </div>
          </div>
        </div>

        <div className="w-5/12 flex flex-col gap-4 h-fit">
          {/* START PRICE SECTION */}
          <div className="w-full h-fit rounded-lg p-7 bg-[#011D38]">
            <h1 className="text-white text-center text-xl -mt-3">
              STARTS FROM <span className="font-mono text-5xl">{roomDetails?.price}</span>/PER NIGHT
            </h1>
          </div>

          {/* BOOKING FORM */}
          <div className="w-full h-fit rounded-lg p-6 bg-[#011D38] pb-10">
            <h1 className="font-mono text-2xl text-white">BOOK THIS ROOM</h1>

            {/* Check In */}
            <div className="flex flex-col gap-2 mt-4 border-b border-[#D0D0D0] mb-2">
              <label className="text-[#C5C5C5] text-sm">CHECK IN</label>
              <input
                type="datetime-local"
                value={bookingDetails.check_in}
                onChange={(e) =>
                  setBookingDetails({ ...bookingDetails, check_in: e.target.value })
                }
                className="text-white mb-2 bg-transparent outline-none"
              />
            </div>

            {/* Check Out */}
            <div className="flex flex-col gap-2 mt-4 border-b border-[#D0D0D0] mb-2">
              <label className="text-[#C5C5C5] text-sm">CHECK OUT</label>
              <input
                type="datetime-local"
                value={bookingDetails.check_out}
                onChange={(e) =>
                  setBookingDetails({ ...bookingDetails, check_out: e.target.value })
                }
                className="text-white mb-2 bg-transparent outline-none"
              />
            </div>

            {/* Adults Count */}
            <div className="flex flex-col gap-2 mt-4 border-b border-[#D0D0D0] mb-2">
              <label className="text-[#C5C5C5]">ADULTS COUNT (18+)</label>
              <input
                type="number"
                min={0}
                value={bookingDetails.adult_count}
                onChange={(e) =>
                  setBookingDetails({ ...bookingDetails, adult_count: Number(e.target.value) })
                }
                className="text-white mb-2 bg-transparent outline-none"
              />
            </div>

            {/* Children Count */}
            <div className="flex flex-col gap-2 mt-4 border-b border-[#D0D0D0] mb-2">
              <label className="text-[#C5C5C5]">CHILDREN COUNT (0-17)</label>
              <input
                type="number"
                min={0}
                value={bookingDetails.child_count}
                onChange={(e) =>
                  setBookingDetails({ ...bookingDetails, child_count: Number(e.target.value) })
                }
                className="text-white mb-2 bg-transparent outline-none"
              />
            </div>
          </div>

          {/* EXTRAS SECTION */}
          <div className="w-full h-fit rounded-lg p-6 bg-[#011D38]">
            <h1 className="font-mono text-2xl text-white">ADD EXTRA</h1>

            {/* Special Food Menu */}
            <div className="flex flex-col gap-2 mt-4 border-b border-[#D0D0D0] mb-2">
              <label className="text-[#C5C5C5]">SPECIAL FOOD MENU</label>
              <select
                value={bookingDetails.special_food_menu}
                onChange={(e) =>
                  setBookingDetails({ ...bookingDetails, special_food_menu: e.target.value })
                }
                className="text-white mb-2 bg-transparent outline-none"
              >
                <option value="NORTH INDIAN" className="text-black">NORTH INDIAN</option>
                <option value="SOUTH INDIAN" className="text-black">SOUTH INDIAN</option>
              </select>
            </div>

            {/* Activities */}
            <div className="flex flex-col gap-2 mt-4 border-b border-[#D0D0D0] mb-2">
              <label className="text-[#C5C5C5]">ACTIVITIES & GAMES</label>
              <select
                value={bookingDetails.activities}
                onChange={(e) =>
                  setBookingDetails({ ...bookingDetails, activities: e.target.value })
                }
                className="text-white mb-2 bg-transparent outline-none"
              >
                <option value="BASKET BALL" className="text-black">BASKET BALL</option>
                <option value="CRICKET" className="text-black">CRICKET</option>
              </select>
            </div>

            {/* Checkboxes */}
            <div className="flex flex-col gap-2 mt-7">
              {[
                { label: 'ADD EXTRA BED (1)', key: 'extra_bed' },
                { label: 'FIRE CAMP ARRANGEMENTS', key: 'fire_camp' },
                { label: 'JEEP SAFARI', key: 'jeep_safari' },
              ].map((item) => (
                <div className="flex items-center justify-between" key={item.key}>
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      checked={bookingDetails[item.key as keyof typeof bookingDetails] as boolean}
                      onChange={(e) =>
                        setBookingDetails({
                          ...bookingDetails,
                          [item.key]: e.target.checked,
                        })
                      }
                      className="w-4 h-4 mt-1"
                    />
                    <label className="text-[#C5C5C5]">{item.label}</label>
                  </div>
                  <p className="text-[#C5C5C5]">₹ 299</p>
                </div>
              ))}
            </div>

            {/* Footer and Total */}
            <div className="w-full p-1 h-1 border-b border-[#D0D0D0] mt-3" />
            <div className="flex items-center justify-between mt-3">
              <p className="text-lg text-white">TOTAL</p>
              <p className="text-[#C5C5C5]">₹ {totalPrice}</p>
            </div>

            {/* Submit */}
            <button className="w-full p-5 bg-[#AA9061] h-20 rounded-xl text-white mt-4" onClick={onClick}>
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RoomInfo
