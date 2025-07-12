"use client"
import React, { useEffect, useState, useMemo } from 'react'
import { BedDouble, Dot, InspectionPanel, UsersRound, Calendar, Clock } from 'lucide-react';
import { addBookingWithoutToken, addBookingWithToken, fetchAllRoomByID } from '@/lib/actions/users.actions';
import Image from 'next/image';


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

interface BookingDetailsWithoutToken{
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
  customer_data:{
    name:string;
    email:string;
    phone:string;
    address:string;
  }
}

const MobileRoomInfo = ({ id }: { id: string }) => {
    const [roomDetails, setroomDetails] = useState<RoomProps | null>(null);
    const [userToken, setuserToken] = useState("")
    const [bookingDetails, setBookingDetails] = useState<BookingDetails>({
      token: "",
      room_categories_id: Number(id),
      check_in: '',
      check_out: '',
      adult_count: 0,
      child_count: 0,
      special_food_menu: 'South Indian',
      activities: 'Cricket',
      extra_bed: false,
      fire_camp: false,
      jeep_safari: false,
      total: 0
    });
    const [bookingDetailsWithoutToken, setbookingDetailsWithoutToken] = useState<BookingDetailsWithoutToken>({
      room_categories_id:Number(id),
      check_in:'',
      check_out:'',
      adult_count:0,
      child_count:0,
      special_food_menu:'South Indian',
      activities:'Cricket',
      extra_bed:false,
      fire_camp:false,
      jeep_safari:false,
      total:0,
      customer_data:{
        name:'',
        email:'',
        address:'',
        phone:''
      }
    })

    function formatDateTime(input: string) {
      if (!input) return "";
      return input.replace("T", " ") + ":00";
    }
  
    const totalPrice = useMemo(() => {
      if (!roomDetails) return 0;
  
     
      const basePrice = (bookingDetails.adult_count > 0 || bookingDetails.child_count > 0) ? 1499 : roomDetails.price;
  
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
      try {
        if (userToken) {
        
          const formattedBookingDetails = {
            ...bookingDetails,
            check_in: formatDateTime(bookingDetails.check_in),
            check_out: formatDateTime(bookingDetails.check_out),
            total: totalPrice,
            token: userToken,
          };
          console.log(formattedBookingDetails)
    
          const addBooking = await addBookingWithToken(formattedBookingDetails);
    
          if (addBooking.success) {
            alert("✅ Booking Created Successfully!");
            console.log("Booking success with token");
          } else {
            alert("❌ Booking Failed");
            console.error("Error in token-based booking");
          }
        } else {
          // Guest flow
          const formattedBookingDetailsWithoutToken = {
            ...bookingDetailsWithoutToken,
            check_in: formatDateTime(bookingDetails.check_in),
            check_out: formatDateTime(bookingDetails.check_out),
            child_count:bookingDetails.child_count,
            adult_count:bookingDetails.adult_count,
            total: totalPrice,
          };
  
          console.log(formattedBookingDetailsWithoutToken)
    
          const addBooking = await addBookingWithoutToken(formattedBookingDetailsWithoutToken);
    
          if (addBooking.success) {
            alert("✅ Booking Created Successfully!");
            console.log("Booking success without token");
          } else {
            alert("❌ Booking Failed");
            console.error("Error in non-token-based booking");
          }
         }
      } catch (error) {
        console.error("Unexpected Error:", error);
        alert("⚠️ Something went wrong. Please try again.");
      }
    };
  
    // Function to format date for display
    const formatDateForDisplay = (dateString: string) => {
      if (!dateString) return "";
      const date = new Date(dateString);
      const options: Intl.DateTimeFormatOptions = {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      };
      return date.toLocaleDateString('en-US', options);
    };
  
  return (
    <div>MobileRoomInfo</div>
  )
}

export default MobileRoomInfo