"use client"
import React, { useEffect, useState, useMemo } from 'react'
import { BedDouble, Dot, InspectionPanel, UsersRound, Calendar, Clock, Check } from 'lucide-react';
import { addBookingWithToken, fetchAllRoomByID, getActivites, getAdditionalActivites, getFoodMenu } from '@/lib/actions/users.actions';
import Image from 'next/image';
import { toast } from "sonner";
import { redirect, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { boolean } from 'zod';



interface BookingDetails {
  token: string;
  room_categories_id: number;
  check_in: string;
  check_out: string;
  adult_count: number;
  child_count: number;
  special_food_menu: boolean;
  activities: boolean;
  extra_bed: boolean;

  total: number;
}


type AddAct = {
  [key: string]: number;
}


const MobileRoomInfo = ({ id }: { id: string }) => {
  const [roomDetails, setroomDetails] = useState<RoomProps | null>(null);
  const [userToken, setuserToken] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const [bookingDetails, setBookingDetails] = useState<BookingDetails>({
    token: "",
    room_categories_id: Number(id),
    check_in: "",
    check_out: "",
    adult_count: 0,
    child_count: 0,
    special_food_menu: false,
    activities: false,
    extra_bed: false,
    total: 0,
  });

  const [addAct, setAddAct] = useState<AddAct | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchAddAct = async () => {
    const { data } = await getAdditionalActivites();
    if (!data) return null;
    setAddAct(data);
  };


  function formatDateTime(input: string) {
    if (!input) return "";
    return input;
  }

  // Calculate number of nights
  const numberOfNights = useMemo(() => {
    if (!bookingDetails.check_in || !bookingDetails.check_out) return 1;
    const inDate = new Date(bookingDetails.check_in);
    const outDate = new Date(bookingDetails.check_out);
    const diff = outDate.getTime() - inDate.getTime();
    if (diff > 0) {
      return Math.max(1, Math.ceil(diff / (1000 * 60 * 60 * 24)));
    }
    return 1;
  }, [bookingDetails.check_in, bookingDetails.check_out]);

  // Calculate total price: (base price + per-night extras) * number of nights + one-time extras
  const totalPrice = useMemo(() => {
    if (!roomDetails || !addAct) return 0;

    const basePrice = Number(roomDetails.price) || 0;

    const normalize = (s: string) =>
      s?.toString().toLowerCase().replace(/\s+/g, "_").replace(/[^a-z0-9_]/g, "");

    // Get the list of services available for this room
    const roomServiceNames =
      roomDetails?.services?.map((s) => normalize(s.service_name)) || [];

    let perNightExtras = 0;
    let oneTimeExtras = 0;

    // Only process addAct entries that match room services
    Object.entries(addAct).forEach(([key, value]) => {
      const normalizedKey = normalize(key);
      const price = Number(value) || 0;

      // Only include if this service is available for the room AND selected by user
      if (
        roomServiceNames.includes(normalizedKey) &&
        (bookingDetails as any)[normalizedKey] === true
      ) {
        // Extra bed is ALWAYS a one-time charge, never per night
        // Check if key starts with "extra_bed" to handle variations like "extra_bed1", "extra_bed2", etc.
        if (normalizedKey.startsWith("extra_bed")) {
          oneTimeExtras += price;
        } else {
          // All other extras are charged per night
          perNightExtras += price;
        }
      }
    });

    const roomTotal = basePrice * numberOfNights;
    const extrasTotal = perNightExtras * numberOfNights;

    return roomTotal + extrasTotal + oneTimeExtras;
  }, [bookingDetails, roomDetails, addAct, numberOfNights]);

  useEffect(() => {
    const rawToken = localStorage.getItem("user_token");
    const authtoken = rawToken?.replace(/^"(.*)"$/, "$1") || null;
    setuserToken(authtoken ?? "");

    const fetchRoom = async () => {
      try {
        const room = await fetchAllRoomByID(id);
        if (room.success === false || !room.data) {
          return redirect("/");
        }
        setroomDetails(room.data);

        setBookingDetails((prev) => ({
          ...prev,
          token: authtoken || "",
          room_categories_id: room.data?.id ?? null,
        }));
      } finally {
        setIsLoading(false);
      }
    };
    fetchRoom();
    fetchAddAct();
  }, [id]);

  const [foodMenu, setfoodMenu] = useState<number[] | null>(null);
  useEffect(() => {
    const wantFoodMenu = async () => {
      const foodMenu = await getFoodMenu();
      if (!foodMenu) return null;
      setfoodMenu(foodMenu.data);
    };
    wantFoodMenu();
  }, []);

  const [activites, setactivites] = useState<number[] | null>(null);
  useEffect(() => {
    const wantActivites = async () => {
      const activites = await getActivites();
      if (!activites) return null;
      setactivites(activites.data);
    };
    wantActivites();
  }, []);

  const aboutRawText = roomDetails?.about_stay || "";
  let cleanText = aboutRawText.replace(/<[^>]*>/g, "");
  const sentences = cleanText
    .split(/&nbsp;+/g)
    .map((s) => s.trim())
    .filter(Boolean);

  const checkInRules = roomDetails?.check_in_rules;
  const checkInruleList = checkInRules
    ?.match(/<li>(.*?)<\/li>/g)
    ?.map((item) => item.replace(/<\/?li>/g, ""));
  const checkoutRules = roomDetails?.check_out_rules;
  const checkOutruleList = checkoutRules
    ?.match(/<li>(.*?)<\/li>/g)
    ?.map((item) => item.replace(/<\/?li>/g, ""));

  const onClick = async () => {
    if (isSubmitting) return;

    try {
      setIsSubmitting(true);
      const totalGuests = bookingDetails.adult_count + bookingDetails.child_count;

      if (roomDetails && totalGuests > roomDetails.capability) {
        toast.error(
          `Room capacity exceeded! Maximum ${roomDetails.capability} guests allowed. You selected ${totalGuests} guests.`,
          { position: "top-center" }
        );
        return;
      }

      if (totalGuests === 0) {
        toast.error("Please select at least one guest (adult or child)", {
          position: "top-center",
        });
        return;
      }

      if (!bookingDetails.check_in || !bookingDetails.check_out) {
        toast.error("Please select check-in and check-out dates", {
          position: "top-center",
        });
        return;
      }

      const checkIn = new Date(bookingDetails.check_in);
      const checkOut = new Date(bookingDetails.check_out);
      if (checkOut <= checkIn) {
        toast.error("Check-out date must be after check-in date", {
          position: "top-center",
        });
        return;
      }



      if (userToken) {
        const formattedBookingDetails = {
          ...bookingDetails,
          check_in: formatDateTime(bookingDetails.check_in),
          check_out: formatDateTime(bookingDetails.check_out),
          total: totalPrice,
          token: userToken,
        };

        const addBooking = await addBookingWithToken(formattedBookingDetails);

        if (addBooking.success) {
          toast.success("Booking successful!", {
            position: "top-center",
          });
          router.push(addBooking.data.redirect_url);
        } else {
          toast.error(addBooking.message || "Error in booking", {
            position: "top-center",
          });
          console.error("Error in token-based booking");
        }
      }

    } catch (error: any) {
      toast.error("Unexpected error occurred. Please try again.", {
        position: "top-center",
      });
      console.error("Booking error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatDateForDisplay = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return date.toLocaleDateString("en-US", options);
  };

  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  if (!addAct || isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-[#011D38] border-t-transparent rounded-full animate-spin"></div>
          <p className="text-[#45443F] font-mono">Loading room details...</p>
        </div>
      </div>
    );
  }
  return (
    <section className='p-5 flex flex-col gap-4 -mt-20'>
      <div className='flex items-center justify-between gap-4 p-10'>
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
      <div className='flex flex-col items-center justify-center text-center'>
        <h3 className='text-[#5C5C5C]'>HOME / ROOMS / {roomDetails?.name}</h3>
        <h1 className='text-6xl font-mono text-[#45443F]'>{roomDetails?.name}</h1>
      </div>
      {/* BOOKING FORM */}
      <div className="w-full flex flex-col gap-4 h-fit">
        {/* START PRICE SECTION */}
        <div className="w-full h-fit rounded-lg p-7 bg-[#011D38]">
          <h1 className="text-white text-center text-xl -mt-3">
            STARTS FROM <span className="font-mono text-5xl">{roomDetails?.price}</span>/PER NIGHT
          </h1>
        </div>
        {!userToken && (
          <div>
            <Link href={"/sign-in"}>
              <Button className="w-full p-4 h-20 text-2xl bg-[#AA9061] text-white hover:bg-[#AA9061] hover:text-white">
                Login to Book this Room
              </Button>
            </Link>
          </div>
        )}
        {/* Booking Form */}
        {userToken && (
          <div className="w-full h-fit rounded-2xl p-6 bg-[#011D38] shadow-lg">
            <h1 className="font-mono text-2xl text-white mb-6 tracking-wide">
              BOOK THIS ROOM
            </h1>

            <div className="space-y-6">
              {/* Check In */}
              <div>
                <label className="text-[#C5C5C5] text-sm font-medium mb-3 block">
                  CHECK IN *
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                    <Calendar className="h-5 w-5 text-[#AA9061] group-hover:text-[#C5C5C5] transition-colors duration-200" />
                  </div>
                  <input
                    type="date"
                    value={bookingDetails.check_in}
                    onChange={(e) =>
                      setBookingDetails({
                        ...bookingDetails,
                        check_in: e.target.value,
                      })
                    }
                    className="w-full pl-10 pr-4 py-3 bg-gradient-to-r from-[#1a2f4a] to-[#2a3f5a] border border-[#3a4f6a] rounded-xl text-white placeholder-[#8a9aaa] focus:outline-none focus:ring-2 focus:ring-[#AA9061] focus:border-transparent transition-all duration-200 hover:border-[#AA9061] shadow-inner"
                    style={{ colorScheme: "dark" }}
                  />
                  {bookingDetails.check_in && (
                    <div className="mt-2 pl-3 text-xs text-[#AA9061] font-medium">
                      {formatDateForDisplay(bookingDetails.check_in)}
                    </div>
                  )}
                </div>
              </div>

              {/* Check Out */}
              <div>
                <label className="text-[#C5C5C5] text-sm font-medium mb-3 block">
                  CHECK OUT *
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                    <Calendar className="h-5 w-5 text-[#AA9061] group-hover:text-[#C5C5C5] transition-colors duration-200" />
                  </div>
                  <input
                    type="date"
                    value={bookingDetails.check_out}
                    onChange={(e) =>
                      setBookingDetails({
                        ...bookingDetails,
                        check_out: e.target.value,
                      })
                    }
                    className="w-full pl-10 pr-4 py-3 bg-gradient-to-r from-[#1a2f4a] to-[#2a3f5a] border border-[#3a4f6a] rounded-xl text-white placeholder-[#8a9aaa] focus:outline-none focus:ring-2 focus:ring-[#AA9061] focus:border-transparent transition-all duration-200 hover:border-[#AA9061] shadow-inner"
                    style={{ colorScheme: "dark" }}
                  />
                  {bookingDetails.check_out && (
                    <div className="mt-2 pl-3 text-xs text-[#AA9061] font-medium">
                      {formatDateForDisplay(bookingDetails.check_out)}
                    </div>
                  )}
                </div>
              </div>

              {/* Nights Display */}
              {bookingDetails.check_in && bookingDetails.check_out && (
                <div className="bg-gradient-to-r from-[#1a2f4a] to-[#2a3f5a] rounded-xl p-4 border border-[#3a4f6a]">
                  <div className="flex justify-between items-center">
                    <span className="text-[#C5C5C5] text-sm">
                      Total Nights
                    </span>
                    <span className="text-[#AA9061] font-semibold text-lg">
                      {numberOfNights} {numberOfNights === 1 ? "Night" : "Nights"}
                    </span>
                  </div>
                </div>
              )}

              {/* Adults Count */}
              <div>
                <label className="text-[#C5C5C5] text-sm font-medium mb-3 block">
                  ADULTS COUNT (18+) *
                </label>
                <Input
                  type="number"
                  min="0"
                  max={roomDetails?.capability}
                  value={bookingDetails.adult_count}
                  onChange={(e) => {
                    const value = e.target.value === "" ? 0 : Number(e.target.value);
                    const clampedValue = Math.max(0, Math.min(value, roomDetails?.capability || 999));
                    setBookingDetails({
                      ...bookingDetails,
                      adult_count: clampedValue,
                    });
                  }}
                  className="w-full px-4 py-3 bg-gradient-to-r from-[#1a2f4a] to-[#2a3f5a] border border-[#3a4f6a] h-12 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#AA9061] transition-all duration-200 hover:border-[#AA9061]"
                />
              </div>

              {/* Children Count */}
              <div>
                <label className="text-[#C5C5C5] text-sm font-medium mb-3 block">
                  CHILDREN COUNT (0-17)
                </label>
                <Input
                  type="number"

                  max={roomDetails?.capability}
                  value={bookingDetails.child_count}
                  onChange={(e) =>
                    setBookingDetails({
                      ...bookingDetails,
                      child_count: Number(e.target.value),
                    })
                  }
                  className="w-full px-4 py-3 bg-gradient-to-r from-[#1a2f4a] to-[#2a3f5a] border border-[#3a4f6a] h-12 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#AA9061] transition-all duration-200 hover:border-[#AA9061]"
                />
              </div>

              {/* Guest capacity indicator */}
              <div className="bg-gradient-to-r from-[#1a2f4a] to-[#2a3f5a] rounded-xl p-4 border border-[#3a4f6a]">
                <div className="flex justify-between items-center">
                  <span className="text-[#C5C5C5] text-sm">Total Guests</span>
                  <span
                    className={`font-semibold text-lg transition-colors duration-300 ${bookingDetails.adult_count + bookingDetails.child_count >
                      (roomDetails?.capability || 0)
                      ? "text-red-400"
                      : "text-[#AA9061]"
                      }`}
                  >
                    {bookingDetails.adult_count + bookingDetails.child_count} /{" "}
                    {roomDetails?.capability || 0}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
        {userToken && (

          <div className="w-full h-fit rounded-2xl p-6 bg-[#011D38] shadow-lg">
            <h1 className="font-mono text-2xl text-white mb-6 tracking-wide">
              ADD EXTRA
            </h1>

            <div className="space-y-5">
              {/* Special Food Menu */}
              <div>
                <label className="text-[#C5C5C5] text-sm font-medium mb-3 block">
                  SPECIAL FOOD MENU
                </label>
                <div className="w-full px-4 py-3 flex  gap-3 bg-gradient-to-r items-center from-[#1a2f4a] to-[#2a3f5a] border border-[#3a4f6a] rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#AA9061] transition-all duration-200 hover:border-[#AA9061] cursor-pointer">
                  <input type="checkbox" name="" id="" className="w-5 h-5"
                    onChange={(e) => {
                      setBookingDetails({
                        ...bookingDetails,
                        special_food_menu: true
                      })
                    }}
                  />
                  <p>Food Required ?</p>
                </div>
              </div>

              {/* Activities */}
              <div>
                <label className="text-[#C5C5C5] text-sm font-medium mb-3 block">
                  ACTIVITIES & GAMES
                </label>
                <div className="w-full px-4 py-3 flex  gap-3 bg-gradient-to-r items-center from-[#1a2f4a] to-[#2a3f5a] border border-[#3a4f6a] rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#AA9061] transition-all duration-200 hover:border-[#AA9061] cursor-pointer">
                  <input type="checkbox" name="" id="" className="w-5 h-5"
                    onClick={() => {
                      setBookingDetails({
                        ...bookingDetails,
                        activities: true
                      })
                    }}
                  />
                  <p>Activites Required ?</p>
                </div>
              </div>

              {/* Additional Services Checkboxes */}
              <div className="space-y-4 pt-4">
                {Object.entries(addAct)
                  .filter(([key]) => {
                    const normalize = (s: string) =>
                      s
                        ?.toString()
                        .toLowerCase()
                        .replace(/\s+/g, "_")
                        .replace(/[^a-z0-9_]/g, "");
                    const roomServiceNames =
                      roomDetails?.services?.map((s) =>
                        normalize(s.service_name)
                      ) || [];
                    return roomServiceNames.includes(normalize(key));
                  })
                  .map(([key, value], idx) => {
                    const propName = key
                      .toString()
                      .toLowerCase()
                      .replace(/\s+/g, "_")
                      .replace(/[^a-z0-9_]/g, "");
                    return (
                      <div
                        className="group flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-[#1a2f4a] to-[#2a3f5a] border border-[#3a4f6a] transition-all duration-300 hover:border-[#AA9061] hover:shadow-lg cursor-pointer"
                        key={idx}
                        onClick={() =>
                          setBookingDetails((prev) => ({
                            ...prev,
                            [propName]: !Boolean((prev as any)[propName]),
                          }))
                        }
                      >
                        <div className="flex gap-3 items-center">
                          <div
                            className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-300 ${Boolean((bookingDetails as any)[propName])
                              ? "bg-[#AA9061] border-[#AA9061]"
                              : "border-[#5a6f8a] group-hover:border-[#AA9061]"
                              }`}
                          >
                            {Boolean((bookingDetails as any)[propName]) && (
                              <Check className="w-3 h-3 text-white" />
                            )}
                          </div>
                          <label className="text-[#C5C5C5] capitalize cursor-pointer group-hover:text-white transition-colors duration-300">
                            {key.replace(/_/g, " ")}
                          </label>
                        </div>
                        <p className="text-[#AA9061] font-semibold">₹ {value}</p>
                      </div>
                    );
                  })}
              </div>
            </div>

            {/* Total Section */}
            <div className="mt-8 pt-6 border-t border-[#3a4f6a]">
              <div className="flex items-center justify-between mb-6">
                <div className="flex flex-col gap-1">
                  <p className="text-2xl text-white font-semibold">TOTAL</p>
                  <p className="text-xs text-[#C5C5C5]">
                    For {numberOfNights} {numberOfNights === 1 ? "night" : "nights"}
                  </p>
                </div>
                <p className="text-3xl text-[#AA9061] font-bold">₹ {totalPrice}</p>
              </div>

              {/* Book Now Button */}
              <button
                className="w-full py-5 bg-gradient-to-r from-[#AA9061] to-[#c0a575] rounded-xl text-white font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 relative overflow-hidden group"
                onClick={onClick}
                disabled={isSubmitting || !userToken}
              >
                <span className="relative z-10">
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Processing...
                    </span>
                  ) : (
                    <>
                      {!userToken ? "Sign In to Create Booking" : "BOOK NOW"}
                    </>

                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#c0a575] to-[#AA9061] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>

        )}
      </div>

      <div className='flex gap-5 mt-10'>
        <div className='w-12/12 p-7 rounded-lg h-full border border-[#D7D7D7] flex flex-col gap-2'>
          <div className='flex flex-col gap-4'>
            <h1 className='font-mono text-4xl uppercase text-[#45443F]'>ABOUT STAY</h1>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
              {sentences.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className='w-full mt-10 p-1 h-1 border-b border-[#D7D7D7]' />
          <div className='mt-10'>
            <h1 className='font-mono text-4xl uppercase text-[#45443F]'>services & AMENITIES</h1>
            <div className='grid md:grid-cols-3 gap-5 mt-10'>
              {roomDetails?.services.length !== 0 ? roomDetails?.services.map((service, index) => (
                <div className='p-7 rounded-lg bg-[#F6F5F5] flex gap-3 text-black text-sm' key={index}>
                  <Image
                    src={service.icon_pic}
                    alt={service.icon_alt}
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
            <div className='flex max-sm:flex-col gap-30 max-sm:gap-10 mt-7 pl-5'>
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

          </div>
        </div>
      </div>
    </section>
  )
}

export default MobileRoomInfo