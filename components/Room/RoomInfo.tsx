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
}

const RoomInfo = ({ id }: { id: string }) => {
  const [roomDetails, setroomDetails] = useState<RoomProps | null>(null);
  const [userToken, setuserToken] = useState("");
  const router =  useRouter();
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
    const [addAct , setAddAct] = useState<AddAct | null>(null);
    const fetchAddAct =  async() =>{
      const {data}  = await getAdditionalActivites();
      if(!data) return null;
      setAddAct(data)
    }
    
    
    
  // Format datetime from "YYYY-MM-DDTHH:mm" to "YYYY-MM-DD HH:mm:ss"
  function formatDateTime(input: string) {
    if (!input) return "";
    return input.replace("T", " ") + ":00";
  }

  // Calculate total price: (base price + selected extras) * number of nights
  const totalPrice = useMemo(() => {
    if (!roomDetails || !addAct) return 0;

    const basePrice = Number(roomDetails.price) || 0;

    // Calculate extras price from addAct based on selected checkboxes
    let extrasPrice = 0;
    // helper to normalize keys like 'Jeep Safari' -> 'jeep_safari'
    const normalize = (s: string) =>
      s?.toString().toLowerCase().replace(/\s+/g, "_").replace(/[^a-z0-9_]/g, "");

    Object.entries(addAct).forEach(([key, value]) => {
      const prop = normalize(key);
      if ((bookingDetails as any)[prop] === true) {
        extrasPrice += Number(value) || 0;
      }
    });

    // Compute number of nights (at least 1)
    let nights = 1;
    if (bookingDetails.check_in && bookingDetails.check_out) {
      const inDate = new Date(bookingDetails.check_in);
      const outDate = new Date(bookingDetails.check_out);
      const diff = outDate.getTime() - inDate.getTime();
      if (diff > 0) {
        nights = Math.max(1, Math.ceil(diff / (1000 * 60 * 60 * 24)));
      }
    }

    return (basePrice + extrasPrice) * nights;
  }, [bookingDetails, roomDetails, addAct]);

  useEffect(() => {
    const rawToken = localStorage.getItem("user_token");
    const authtoken = rawToken?.replace(/^"(.*)"$/, "$1") || null;
    setuserToken(authtoken ?? "");

    const fetchRoom = async () => {
      const room = await fetchAllRoomByID(id);
      if(room.success===false || !room.data){
        return redirect("/")
      }
      setroomDetails(room.data);
      
      setBookingDetails((prev) => ({
        ...prev,
        token: authtoken || "",
        room_categories_id: room.data?.id ?? null,
      }));
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

// Step 1: Remove HTML tags
let cleanText = aboutRawText.replace(/<[^>]*>/g, "");

// Step 2: Split using &nbsp; as divider (each becomes a new bullet)
const sentences = cleanText
  .split(/&nbsp;+/g) // split by one or more &nbsp;
  .map((s) => s.trim()) // remove extra spaces
  .filter(Boolean); // remove empty entries

  const checkInRules = roomDetails?.check_in_rules;
  const checkInruleList = checkInRules
    ?.match(/<li>(.*?)<\/li>/g)
    ?.map((item) => item.replace(/<\/?li>/g, ""));
  const checkoutRules = roomDetails?.check_out_rules;
  const checkOutruleList = checkoutRules
    ?.match(/<li>(.*?)<\/li>/g)
    ?.map((item) => item.replace(/<\/?li>/g, ""));

  const onClick = async () => {
    try {
      // Validation checks
      const totalGuests = bookingDetails.adult_count + bookingDetails.child_count;
      
      // Check if room capacity is exceeded
      if (roomDetails && totalGuests > roomDetails.capability) {
        toast.error(
          `Room capacity exceeded! Maximum ${roomDetails.capability} guests allowed. You selected ${totalGuests} guests.`,
          { position: "top-center" }
        );
        return;
      }

      // Check if at least one guest is selected
      if (totalGuests === 0) {
        toast.error("Please select at least one guest (adult or child)", {
          position: "top-center",
        });
        return;
      }

      // Check if dates are selected
      if (!bookingDetails.check_in || !bookingDetails.check_out) {
        toast.error("Please select check-in and check-out dates", {
          position: "top-center",
        });
        return;
      }

      // Check if check-out is after check-in
      const checkIn = new Date(bookingDetails.check_in);
      const checkOut = new Date(bookingDetails.check_out);
      if (checkOut <= checkIn) {
        toast.error("Check-out date must be after check-in date", {
          position: "top-center",
        });
        return;
      }

      // Check if guest details are provided (for non-logged-in users)
      if (!userToken) {
        const { name, email, phone, address } = bookingDetailsWithoutToken.customer_data;
        
        if (!name || !email || !phone || !address) {
          toast.error("Please fill in all customer details", {
            position: "top-center",
          });
          return;
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          toast.error("Please enter a valid email address", {
            position: "top-center",
          });
          return;
        }

        // Basic phone validation (10 digits)
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone.replace(/\s/g, ""))) {
          toast.error("Please enter a valid 10-digit phone number", {
            position: "top-center",
          });
          return;
        }
      }

      if (userToken) {
        // Logged-in flow
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
          router.push(addBooking.data.redirect_url)
        } else {
          toast.error(addBooking.message || "Error in booking", {
            position: "top-center",
          });
          console.error("Error in token-based booking");
        }
      } else {
        // Guest flow
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
          toast.success(addBooking.message , {
            position:"top-center"
          });
          router.push(addBooking.data.redirect_url)
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
    }
  };

  // Function to format date for display
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
    updateWidth(); // Get initial width

    window.addEventListener("resize", updateWidth); // Listen for resize
    return () => window.removeEventListener("resize", updateWidth);
  }, []);
  
  if(!addAct) return null
  return (
    <>
      {width < 768 ? (
        <>
          <MobileRoomInfo id={id} />{" "}
        </>
      ) : (
        <>
          <section className="flex flex-col gap-4 pl-10 pr-10 mt-10">
            <div className="flex gap-1 items-center justify-between">
              <div className="flex flex-col gap-1">
              
                <h1 className="text-6xl font-mono text-[#45443F]">
                  {roomDetails?.name}
                </h1>
              </div>
              <div className="flex gap-16 mt-10">
                <div className="flex flex-col gap-1 items-center justify-center">
                  <InspectionPanel color="#5C5C5C" width={40} height={40} />
                  <p className="text-[#5C5C5C]">{roomDetails?.square_ft}M2</p>
                </div>
                <div className="flex flex-col gap-1 items-center justify-center">
                  <UsersRound color="#5C5C5C" width={40} height={40} />
                  <p className="text-[#5C5C5C]">
                    1-{roomDetails?.capability} PERSON
                  </p>
                </div>
                <div className="flex flex-col gap-1 items-center justify-center">
                  <BedDouble color="#5C5C5C" width={40} height={40} />
                  <p className="text-[#5C5C5C]">{roomDetails?.beds} BEDS</p>
                </div>
              </div>
            </div>

            <div className="flex gap-5 mt-10">
              <div className="w-12/12 p-7 rounded-lg h-full border border-[#D7D7D7] flex flex-col gap-2">
                <div className="flex flex-col gap-4">
                  <h1 className="font-mono text-4xl uppercase text-[#45443F]">
                    ABOUT STAY
                  </h1>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
  {sentences.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>
                </div>
                <div className="w-full mt-10 p-1 h-1 border-b border-[#D7D7D7]" />
                <div className="mt-10">
                  <h1 className="font-mono text-4xl uppercase text-[#45443F]">
                    services & AMENITIES
                  </h1>
                  <div className="grid md:grid-cols-3 gap-5 mt-10">
                    {roomDetails?.services.length !== 0 ? (
                      roomDetails?.services.map((service, index) => (
                        <div
                          className="p-7 rounded-lg bg-[#F6F5F5] flex gap-3 text-black text-sm"
                          key={index}
                        >
                          <Image
                            src={service.icon_pic}
                            alt="services"
                            width={20}
                            height={20}
                          />
                          {service.service_name}
                        </div>
                      ))
                    ) : (
                      <div className="p-7 rounded-lg bg-[#F6F5F5] flex gap-3 text-black text-md items-center justify-center">
                        No services availabel for this Room.
                      </div>
                    )}
                  </div>
                </div>
                <div className="w-full mt-10 p-1 h-1 border-b border-[#D7D7D7]" />
                <div className="mt-10">
                  <h1 className="font-mono text-4xl uppercase text-[#45443F]">
                    ROOM RULES
                  </h1>
                  <div className="flex gap-30 mt-7 pl-5">
                    <div>
                      <h3 className="text-[#3A3A3A]">Check In</h3>
                      {checkInruleList?.map((rule, i) => (
                        <p className="flex gap-1 text-[#3A3A3A]" key={i}>
                          <Dot />
                          {rule}
                        </p>
                      ))}
                    </div>
                    <div>
                      <h3 className="text-[#3A3A3A]">Check Out</h3>
                      {checkOutruleList?.map((rule, i) => (
                        <p className="flex gap-1 text-[#3A3A3A]" key={i}>
                          <Dot />
                          {rule}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 mt-10 pl-5 leading-relaxed text-[#3A3A3A]">
                    <div
                      className=""
                      dangerouslySetInnerHTML={{
                        __html: roomDetails?.room_rules || "",
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="w-5/12 flex flex-col gap-4 h-fit">
                {/* START PRICE SECTION */}
                <div className="w-full h-fit rounded-lg p-7 bg-[#011D38]">
                  <h1 className="text-white text-center text-xl -mt-3">
                    STARTS FROM{" "}
                    <span className="font-mono text-5xl">
                      {roomDetails?.price}
                    </span>
                    /PER NIGHT
                  </h1>
                </div>
                {!userToken && (
                  <div className="w-full h-fit rounded-lg p-6 bg-[#011D38] pb-10">
                    <h1 className="font-mono text-2xl text-white">
                      ENTER YOUR DETAILS
                    </h1>

                    {/* Name */}
                    <div className="flex flex-col gap-2 mt-4 border-b border-[#D0D0D0] mb-2">
                      <label className="text-[#C5C5C5] text-sm">Name *</label>
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
                        className="text-white mb-2 bg-transparent outline-none"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2 mt-4 border-b border-[#D0D0D0] mb-2">
                      <label className="text-[#C5C5C5] text-sm">Email *</label>
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
                        className="text-white mb-2 bg-transparent outline-none"
                      />
                    </div>

                    {/* Address */}
                    <div className="flex flex-col gap-2 mt-4 border-b border-[#D0D0D0] mb-2">
                      <label className="text-[#C5C5C5] text-sm">Address *</label>
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
                        className="text-white mb-2 bg-transparent outline-none"
                      />
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-2 mt-4 border-b border-[#D0D0D0] mb-2">
                      <label className="text-[#C5C5C5] text-sm">Phone *</label>
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
                        className="text-white mb-2 bg-transparent outline-none"
                      />
                    </div>
                  </div>
                )}

                {/* BOOKING FORM */}
                <div className="w-full h-fit rounded-lg p-6 bg-[#011D38] pb-10">
                  <h1 className="font-mono text-2xl text-white">
                    BOOK THIS ROOM
                  </h1>

                  {/* Check In - Elegant Date Field */}
                  <div className="mt-6">
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
                        style={{
                          colorScheme: "dark",
                        }}
                      />
                      {bookingDetails.check_in && (
                        <div className="mt-2 pl-3 text-xs text-[#AA9061] font-medium">
                          {formatDateForDisplay(bookingDetails.check_in)}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Check Out - Elegant Date Field */}
                  <div className="mt-6">
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
                        style={{
                          colorScheme: "dark",
                        }}
                      />
                      {bookingDetails.check_out && (
                        <div className="mt-2 pl-3 text-xs text-[#AA9061] font-medium">
                          {formatDateForDisplay(bookingDetails.check_out)}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Adults Count */}
                  <div className="flex flex-col gap-2 mt-6 border-b border-[#D0D0D0] mb-2">
                    <label className="text-[#C5C5C5]">ADULTS COUNT (18+) *</label>
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
                      className="text-white mb-2 bg-transparent outline-none"
                    />
                  </div>

                  {/* Children Count */}
                  <div className="flex flex-col gap-2 mt-4 border-b border-[#D0D0D0] mb-2">
                    <label className="text-[#C5C5C5]">
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
                      className="text-white mb-2 bg-transparent outline-none"
                    />
                  </div>
                  
                  {/* Guest capacity indicator */}
                  <div className="mt-2 text-xs text-[#AA9061]">
                    Total guests: {bookingDetails.adult_count + bookingDetails.child_count} / {roomDetails?.capability || 0} (Max capacity)
                  </div>
                </div>

                {/* EXTRAS SECTION */}
                <div className="w-full h-fit rounded-lg p-6 bg-[#011D38]">
                  <h1 className="font-mono text-2xl text-white">ADD EXTRA</h1>

                  {/* Special Food Menu */}
                  <div className="flex flex-col gap-2 mt-4 border-b border-[#D0D0D0] mb-2">
                    <label className="text-[#C5C5C5]">SPECIAL FOOD MENU</label>
                    <select
                      value={bookingDetails.special_food_menu[0] ?? ""}
                      onChange={(e) =>
                        setBookingDetails({
                          ...bookingDetails,
                          special_food_menu: [Number(e.target.value)],
                        })
                      }
                      className="text-white mb-2 bg-transparent outline-none"
                    >
                      {foodMenu &&
                        Object.entries(foodMenu).map(([key, value]) => (
                          <option key={key} value={key} className="text-black">
                            {value}
                          </option>
                        ))}
                    </select>
                  </div>

                  {/* Activities */}
                  <div className="flex flex-col gap-2 mt-4 border-b border-[#D0D0D0] mb-2">
                    <label className="text-[#C5C5C5]">ACTIVITIES & GAMES</label>
                    <select
                      value={bookingDetails.activities[0] ?? ""}
                      onChange={(e) =>
                        setBookingDetails({
                          ...bookingDetails,
                          activities: [Number(e.target.value)],
                        })
                      }
                      className="text-white mb-2 bg-transparent outline-none"
                    >
                      {activites &&
                        Object.entries(activites).map(([key, value]) => (
                          <option key={key} value={key} className="text-black">
                            {value}
                          </option>
                        ))}
                    </select>
                  </div>

                  {/* Checkboxes */}
                    <div className="flex flex-col gap-2 mt-7">
  {Object.entries(addAct)
    .filter(([key]) => {
      const normalize = (s: string) =>
        s?.toString().toLowerCase().replace(/\s+/g, "_").replace(/[^a-z0-9_]/g, "");
      const roomServiceNames =
        roomDetails?.services?.map((s) => normalize(s.service_name)) || [];
      return roomServiceNames.includes(normalize(key));
    })
    .map(([key, value], idx) => {
      const propName = key.toString().toLowerCase().replace(/\s+/g, "_").replace(/[^a-z0-9_]/g, "");
      return (
      <div className="flex items-center justify-between" key={idx}>
        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            checked={Boolean((bookingDetails as any)[propName])}
            onChange={(e) =>{
              setBookingDetails((prev) => ({
                ...prev,
                [propName]: e.target.checked,
              }))
            }
            }
            className="w-4 h-4"
          />
          <label className="text-[#C5C5C5] capitalize">{key.replace(/_/g, ' ')}</label>
        </div>
        <p className="text-[#C5C5C5]">₹ {value}</p>
      </div>
      )
    })}
</div>

                  {/* Footer and Total */}
                  <div className="w-full p-1 h-1 border-b border-[#D0D0D0] mt-3" />
                  <div className="flex items-center justify-between mt-3">
                    <p className="text-lg text-white">TOTAL</p>
                    <p className="text-[#C5C5C5]">₹ {totalPrice}</p>
                  </div>

                  {/* Submit */}
                  <button
                    className="w-full p-5 bg-[#AA9061] h-20 rounded-xl text-white mt-4"
                    onClick={onClick}
                  >
                    BOOK NOW
                  </button>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default RoomInfo;
