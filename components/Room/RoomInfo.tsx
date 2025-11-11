"use client";
import {
  addBookingWithoutToken,
  addBookingWithToken,
  fetchAllRoomByID,
  getActivites,
  getAdditionalActivites,
  getFoodMenu,
} from "@/lib/actions/users.actions";
import {
  BedDouble,
  Calendar,
  Dot,
  InspectionPanel,
  UsersRound,
  Check,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import MobileRoomInfo from "./MobileRoomInfo";
import { redirect, useRouter } from "next/navigation";

interface BookingDetails {
  token: string;
  room_categories_id: number;
  check_in: string;
  check_out: string;
  adult_count: number;
  child_count: number;
  special_food_menu: number[];
  activities: number[];
  extra_bed: boolean;
  fire_camp: boolean;
  jeep_safari: boolean;
  total: number;
}

interface BookingDetailsWithoutToken {
  room_categories_id: number;
  check_in: string;
  check_out: string;
  adult_count: number;
  child_count: number;
  special_food_menu: number[];
  activities: number[];
  extra_bed: boolean;
  fire_camp: boolean;
  jeep_safari: boolean;
  total: number;
  customer_data: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
}

type AddAct = {
  [key: string]: number;
};

const RoomInfo = ({ id }: { id: string }) => {
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
    special_food_menu: [1],
    activities: [1],
    extra_bed: false,
    fire_camp: false,
    jeep_safari: false,
    total: 0,
  });
  const [bookingDetailsWithoutToken, setbookingDetailsWithoutToken] =
    useState<BookingDetailsWithoutToken>({
      room_categories_id: Number(id),
      check_in: "",
      check_out: "",
      adult_count: 0,
      child_count: 0,
      special_food_menu: [],
      activities: [],
      extra_bed: false,
      fire_camp: false,
      jeep_safari: false,
      total: 0,
      customer_data: {
        name: "",
        email: "",
        address: "",
        phone: "",
      },
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
    return input.replace("T", " ") + ":00";
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

  // Calculate total price: (base price + selected extras) * number of nights
  const totalPrice = useMemo(() => {
    if (!roomDetails || !addAct) return 0;

    const basePrice = Number(roomDetails.price) || 0;

    // Calculate extras price from addAct based on selected checkboxes
    let extrasPrice = 0;
    const normalize = (s: string) =>
      s?.toString().toLowerCase().replace(/\s+/g, "_").replace(/[^a-z0-9_]/g, "");

    Object.entries(addAct).forEach(([key, value]) => {
      const prop = normalize(key);
      if ((bookingDetails as any)[prop] === true) {
        extrasPrice += Number(value) || 0;
      }
    });

    return (basePrice + extrasPrice) * numberOfNights;
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

      if (!userToken) {
        const { name, email, phone, address } =
          bookingDetailsWithoutToken.customer_data;

        if (!name || !email || !phone || !address) {
          toast.error("Please fill in all customer details", {
            position: "top-center",
          });
          return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          toast.error("Please enter a valid email address", {
            position: "top-center",
          });
          return;
        }

        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone.replace(/\s/g, ""))) {
          toast.error("Please enter a valid 10-digit phone number", {
            position: "top-center",
          });
          return;
        }
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
      } else {
        const formattedBookingDetailsWithoutToken = {
          ...bookingDetailsWithoutToken,
          check_in: formatDateTime(bookingDetails.check_in),
          check_out: formatDateTime(bookingDetails.check_out),
          child_count: bookingDetails.child_count,
          adult_count: bookingDetails.adult_count,
          extra_bed: bookingDetails.extra_bed,
          fire_camp: bookingDetails.fire_camp,
          jeep_safari: bookingDetails.jeep_safari,
          special_food_menu: bookingDetails.special_food_menu,
          activities: bookingDetails.activities,
          total: totalPrice,
        };

        const addBooking = await addBookingWithoutToken(
          formattedBookingDetailsWithoutToken
        );

        if (addBooking.success) {
          toast.success(addBooking.message, {
            position: "top-center",
          });
          router.push(addBooking.data.redirect_url);
        } else {
          toast.error(addBooking.message, {
            position: "top-center",
          });
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
    <>
      {width < 768 ? (
        <MobileRoomInfo id={id} />
      ) : (
        <section className="flex flex-col gap-4 pl-10 pr-10 mt-10">
          {/* Header Section with Animation */}
          <div className="flex gap-1 items-center justify-between opacity-0 animate-fadeInUp">
            <div className="flex flex-col gap-1">
              <h1 className="text-6xl font-mono text-[#45443F] tracking-tight">
                {roomDetails?.name}
              </h1>
            </div>
            <div className="flex gap-16 mt-10">
              <div className="group flex flex-col gap-2 items-center justify-center transition-transform duration-300 hover:scale-110">
                <div className="p-3 rounded-xl bg-[#F6F5F5] transition-colors duration-300 group-hover:bg-[#011D38]">
                  <InspectionPanel
                    className="transition-colors duration-300 text-[#5C5C5C] group-hover:text-white"
                    width={40}
                    height={40}
                  />
                </div>
                <p className="text-[#5C5C5C] text-sm font-medium">
                  {roomDetails?.square_ft}M²
                </p>
              </div>
              <div className="group flex flex-col gap-2 items-center justify-center transition-transform duration-300 hover:scale-110">
                <div className="p-3 rounded-xl bg-[#F6F5F5] transition-colors duration-300 group-hover:bg-[#011D38]">
                  <UsersRound
                    className="transition-colors duration-300 text-[#5C5C5C] group-hover:text-white"
                    width={40}
                    height={40}
                  />
                </div>
                <p className="text-[#5C5C5C] text-sm font-medium">
                  1-{roomDetails?.capability} PERSON
                </p>
              </div>
              <div className="group flex flex-col gap-2 items-center justify-center transition-transform duration-300 hover:scale-110">
                <div className="p-3 rounded-xl bg-[#F6F5F5] transition-colors duration-300 group-hover:bg-[#011D38]">
                  <BedDouble
                    className="transition-colors duration-300 text-[#5C5C5C] group-hover:text-white"
                    width={40}
                    height={40}
                  />
                </div>
                <p className="text-[#5C5C5C] text-sm font-medium">
                  {roomDetails?.beds} BEDS
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-5 mt-10">
            {/* Left Content Section */}
            <div className="w-7/12 p-8 rounded-2xl h-full border border-[#D7D7D7] flex flex-col gap-2 shadow-sm hover:shadow-md transition-shadow duration-300">
              {/* About Stay */}
              <div className="flex flex-col gap-4">
                <h1 className="font-mono text-4xl uppercase text-[#45443F] tracking-wide">
                  ABOUT STAY
                </h1>
                <ul className="list-none pl-0 space-y-3 text-gray-700 leading-relaxed">
                  {sentences.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 opacity-0 animate-fadeInUp"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <Check className="w-5 h-5 text-[#011D38] mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full mt-10 h-px bg-gradient-to-r from-transparent via-[#D7D7D7] to-transparent" />

              {/* Services & Amenities */}
              <div className="mt-10">
                <h1 className="font-mono text-4xl uppercase text-[#45443F] tracking-wide">
                  SERVICES & AMENITIES
                </h1>
                <div className="grid md:grid-cols-3 gap-4 mt-10">
                  {roomDetails?.services.length !== 0 ? (
                    roomDetails?.services.map((service, index) => (
                      <div
                        className="group p-5 rounded-xl bg-[#F6F5F5] flex gap-3 items-center text-black text-sm font-medium transition-all duration-300  hover:scale-105 cursor-pointer opacity-0 animate-fadeInUp"
                        key={index}
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        <div className="w-6 h-6 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                          <Image
                            src={service.icon_pic}
                            alt={service.service_name}
                            width={24}
                            height={24}
                            className="object-contain  transition-all duration-300"
                          />
                        </div>
                        <span>{service.service_name}</span>
                      </div>
                    ))
                  ) : (
                    <div className="col-span-3 p-7 rounded-xl bg-[#F6F5F5] flex items-center justify-center text-[#5C5C5C] text-md">
                      No services available for this room.
                    </div>
                  )}
                </div>
              </div>

              <div className="w-full mt-10 h-px bg-gradient-to-r from-transparent via-[#D7D7D7] to-transparent" />

              {/* Room Rules */}
              <div className="mt-10">
                <h1 className="font-mono text-4xl uppercase text-[#45443F] tracking-wide">
                  ROOM RULES
                </h1>
                <div className="flex gap-20 mt-7 pl-5">
                  <div className="flex-1">
                    <h3 className="text-[#3A3A3A] font-semibold mb-3 text-lg">
                      Check In
                    </h3>
                    {checkInruleList?.map((rule, i) => (
                      <p
                        className="flex gap-2 items-center text-[#3A3A3A] mb-2"
                        key={i}
                      >
                        <Dot className="w-5 h-5 text-[#011D38]" />
                        <span>{rule}</span>
                      </p>
                    ))}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[#3A3A3A] font-semibold mb-3 text-lg">
                      Check Out
                    </h3>
                    {checkOutruleList?.map((rule, i) => (
                      <p
                        className="flex gap-2 items-center text-[#3A3A3A] mb-2"
                        key={i}
                      >
                        <Dot className="w-5 h-5 text-[#011D38]" />
                        <span>{rule}</span>
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-1 mt-10 pl-5 leading-relaxed text-[#3A3A3A]">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: roomDetails?.room_rules || "",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Right Booking Section */}
            <div className="w-5/12 flex flex-col gap-5 h-fit sticky top-4">
              {/* Price Card */}
              <div className="w-full h-fit rounded-2xl p-8 bg-gradient-to-br from-[#011D38] to-[#023059] shadow-xl transform transition-all duration-300 hover:scale-[1.02]">
                <div className="text-white text-center">
                  <p className="text-sm uppercase tracking-widest mb-2 text-gray-300">
                    Starts From
                  </p>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="font-mono text-6xl font-bold">
                      ₹{roomDetails?.price}
                    </span>
                    <span className="text-gray-300">/night</span>
                  </div>
                </div>
              </div>

              {/* Guest Details Form */}
              {!userToken && (
                <div className="w-full h-fit rounded-2xl p-6 bg-[#011D38] shadow-lg">
                  <h1 className="font-mono text-2xl text-white mb-6 tracking-wide">
                    ENTER YOUR DETAILS
                  </h1>

                  <div className="space-y-5">
                    {/* Name Input */}
                    <div className="group">
                      <label className="text-[#C5C5C5] text-sm font-medium mb-2 block">
                        Name *
                      </label>
                      <input
                        type="text"
                        value={bookingDetailsWithoutToken.customer_data.name}
                        onChange={(e) =>
                          setbookingDetailsWithoutToken((prev) => ({
                            ...prev,
                            customer_data: {
                              ...prev.customer_data,
                              name: e.target.value,
                            },
                          }))
                        }
                        placeholder="Enter your Name"
                        className="w-full px-4 py-3 bg-transparent border-b-2 border-[#3a4f6a] text-white outline-none transition-all duration-300 focus:border-[#AA9061] placeholder-[#6a7f9a]"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="group">
                      <label className="text-[#C5C5C5] text-sm font-medium mb-2 block">
                        Email *
                      </label>
                      <input
                        type="email"
                        value={bookingDetailsWithoutToken.customer_data.email}
                        onChange={(e) =>
                          setbookingDetailsWithoutToken((prev) => ({
                            ...prev,
                            customer_data: {
                              ...prev.customer_data,
                              email: e.target.value,
                            },
                          }))
                        }
                        placeholder="Enter your E-Mail"
                        className="w-full px-4 py-3 bg-transparent border-b-2 border-[#3a4f6a] text-white outline-none transition-all duration-300 focus:border-[#AA9061] placeholder-[#6a7f9a]"
                      />
                    </div>

                    {/* Address Input */}
                    <div className="group">
                      <label className="text-[#C5C5C5] text-sm font-medium mb-2 block">
                        Address *
                      </label>
                      <input
                        type="text"
                        value={bookingDetailsWithoutToken.customer_data.address}
                        onChange={(e) =>
                          setbookingDetailsWithoutToken((prev) => ({
                            ...prev,
                            customer_data: {
                              ...prev.customer_data,
                              address: e.target.value,
                            },
                          }))
                        }
                        placeholder="Enter your Address"
                        className="w-full px-4 py-3 bg-transparent border-b-2 border-[#3a4f6a] text-white outline-none transition-all duration-300 focus:border-[#AA9061] placeholder-[#6a7f9a]"
                      />
                    </div>

                    {/* Phone Input */}
                    <div className="group">
                      <label className="text-[#C5C5C5] text-sm font-medium mb-2 block">
                        Phone *
                      </label>
                      <input
                        type="text"
                        value={bookingDetailsWithoutToken.customer_data.phone}
                        onChange={(e) =>
                          setbookingDetailsWithoutToken((prev) => ({
                            ...prev,
                            customer_data: {
                              ...prev.customer_data,
                              phone: e.target.value,
                            },
                          }))
                        }
                        placeholder="Enter your Phone Number"
                        className="w-full px-4 py-3 bg-transparent border-b-2 border-[#3a4f6a] text-white outline-none transition-all duration-300 focus:border-[#AA9061] placeholder-[#6a7f9a]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Booking Form */}
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
                        type="datetime-local"
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
                        type="datetime-local"
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
                    <input
                      type="number"
                      min={0}
                      max={roomDetails?.capability || 10}
                      value={bookingDetails.adult_count}
                      onChange={(e) =>
                        setBookingDetails({
                          ...bookingDetails,
                          adult_count: Number(e.target.value),
                        })
                      }
                      className="w-full px-4 py-3 bg-gradient-to-r from-[#1a2f4a] to-[#2a3f5a] border border-[#3a4f6a] rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#AA9061] transition-all duration-200 hover:border-[#AA9061]"
                    />
                  </div>

                  {/* Children Count */}
                  <div>
                    <label className="text-[#C5C5C5] text-sm font-medium mb-3 block">
                      CHILDREN COUNT (0-17)
                    </label>
                    <input
                      type="number"
                      min={0}
                      max={roomDetails?.capability || 10}
                      value={bookingDetails.child_count}
                      onChange={(e) =>
                        setBookingDetails({
                          ...bookingDetails,
                          child_count: Number(e.target.value),
                        })
                      }
                      className="w-full px-4 py-3 bg-gradient-to-r from-[#1a2f4a] to-[#2a3f5a] border border-[#3a4f6a] rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#AA9061] transition-all duration-200 hover:border-[#AA9061]"
                    />
                  </div>

                  {/* Guest capacity indicator */}
                  <div className="bg-gradient-to-r from-[#1a2f4a] to-[#2a3f5a] rounded-xl p-4 border border-[#3a4f6a]">
                    <div className="flex justify-between items-center">
                      <span className="text-[#C5C5C5] text-sm">Total Guests</span>
                      <span
                        className={`font-semibold text-lg transition-colors duration-300 ${
                          bookingDetails.adult_count + bookingDetails.child_count >
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

              {/* Extras Section */}
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
                    <select
                      value={bookingDetails.special_food_menu[0] ?? ""}
                      onChange={(e) =>
                        setBookingDetails({
                          ...bookingDetails,
                          special_food_menu: [Number(e.target.value)],
                        })
                      }
                      className="w-full px-4 py-3 bg-gradient-to-r from-[#1a2f4a] to-[#2a3f5a] border border-[#3a4f6a] rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#AA9061] transition-all duration-200 hover:border-[#AA9061] cursor-pointer"
                    >
                      {foodMenu &&
                        Object.entries(foodMenu).map(([key, value]) => (
                          <option key={key} value={key} className="bg-[#011D38]">
                            {value}
                          </option>
                        ))}
                    </select>
                  </div>

                  {/* Activities */}
                  <div>
                    <label className="text-[#C5C5C5] text-sm font-medium mb-3 block">
                      ACTIVITIES & GAMES
                    </label>
                    <select
                      value={bookingDetails.activities[0] ?? ""}
                      onChange={(e) =>
                        setBookingDetails({
                          ...bookingDetails,
                          activities: [Number(e.target.value)],
                        })
                      }
                      className="w-full px-4 py-3 bg-gradient-to-r from-[#1a2f4a] to-[#2a3f5a] border border-[#3a4f6a] rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#AA9061] transition-all duration-200 hover:border-[#AA9061] cursor-pointer"
                    >
                      {activites &&
                        Object.entries(activites).map(([key, value]) => (
                          <option key={key} value={key} className="bg-[#011D38]">
                            {value}
                          </option>
                        ))}
                    </select>
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
                                className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-300 ${
                                  Boolean((bookingDetails as any)[propName])
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
                    disabled={isSubmitting}
                  >
                    <span className="relative z-10">
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Processing...
                        </span>
                      ) : (
                        "BOOK NOW"
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#c0a575] to-[#AA9061] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        /* Custom scrollbar for better aesthetics */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: #011d38;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #023059;
        }
      `}</style>
    </>
  );
};

export default RoomInfo;