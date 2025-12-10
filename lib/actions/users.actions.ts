// "use server"
import axios, { AxiosError } from "axios"
import { data } from "framer-motion/client"
import createAxiosInstance from "./axiosInstance";
import { any, string } from "zod"
import { toast } from "sonner";

function extractErrorMessages(payload: any, fieldPrefix = ""): void {
  // No payload
  if (payload == null) {
    toast.error("Unknown error", { id: `error-unknown-${Date.now()}` });
    return;
  }

  // If already a string
  if (typeof payload === "string") {
    const key = fieldPrefix || `error-${Date.now()}`;
    toast.error(payload, { id: key });
    return;
  }

  // If it's an array, show each item as separate toast
  if (Array.isArray(payload)) {
    payload.forEach((item, index) => {
      if (typeof item === "string") {
        const key = fieldPrefix 
          ? `${fieldPrefix}-${index}` 
          : `error-${index}-${Date.now()}`;
        toast.error(item, { id: key });
      } else {
        extractErrorMessages(item, `${fieldPrefix}-${index}`);
      }
    });
    return;
  }

  // If it's an object, process each field
  if (typeof payload === "object") {
    for (const key of Object.keys(payload)) {
      const value = payload[key];
      const currentPrefix = fieldPrefix ? `${fieldPrefix}-${key}` : key;

      // Empty string or null: show generic invalid message
      if (value === "" || value === null) {
        toast.error(`${key} is invalid`, { id: `${currentPrefix}-invalid` });
        continue;
      }

      if (typeof value === "string") {
        if (value.trim()) {
          toast.error(value, { id: currentPrefix });
        }
      } else if (Array.isArray(value)) {
        // e.g. { check_in: ["can't be blank", "must be a date"] }
        value.forEach((v, idx) => {
          if (typeof v === "string") {
            toast.error(v, { id: `${currentPrefix}-${idx}` });
          } else {
            extractErrorMessages(v, `${currentPrefix}-${idx}`);
          }
        });
      } else if (typeof value === "object") {
        // nested object => recurse
        extractErrorMessages(value, currentPrefix);
      } else {
        // fallback to stringifying
        toast.error(String(value), { id: currentPrefix });
      }
    }
    return;
  }

  // fallback
  try {
    toast.error(JSON.stringify(payload), { id: `error-fallback-${Date.now()}` });
  } catch {
    toast.error(String(payload), { id: `error-fallback-${Date.now()}` });
  }
}

export const userRegister = async({name , email , password , phone , address }:RegisterProps)=>{

    try {
        const { data}  = await axios.post("https://portal.brundhavangarden.com/api/auth/register" , {
            name:name,
            email:email,
            phone:phone,
            address:address,
            password:password,
            password_confirmation:password
        } , {
          headers:{
            "Accept":"application/json",
            "Content-Type":"application/json"
          }
        })
        if(!data){
            return {
                success:false,
                message:'Regitration Canceled',
                data:null
            }
        }
        return {
            success:true,
            message:'Registration SuccessFull',
            data:data
        }
    } catch (err:any) {
      let message = "Network or server error";
    let payload: any = null;

    if (axios.isAxiosError(err)) {
      const axiosErr = err as AxiosError;
      payload = axiosErr.response?.data ?? axiosErr.toJSON?.() ?? null;

      if (payload) {
        if (payload.errors || payload.error) {
          // Show all error toasts
          extractErrorMessages(payload.errors ?? payload.error);
          message = "Validation errors occurred";
        } else if (typeof payload === "object" && payload.message) {
          message = String(payload.message);
          toast.error(message, { id: `error-response-${Date.now()}` });
        } else {
          extractErrorMessages(payload);
          message = "An error occurred";
        }
      } else if (axiosErr.message) {
        message = axiosErr.message;
        toast.error(message, { id: `error-network-${Date.now()}` });
      }
    } else {
      message = err?.message || "An unexpected error occurred";
      toast.error(message, { id: `error-unknown-${Date.now()}` });
    }
    
    return {
      success: false,
      message,
      data: payload,
    };
    }
}

export const  userLogin = async(email:string , password:string)=>{
    try {
        const {data} = await axios.post("https://portal.brundhavangarden.com/api/auth/login" , {
            email:email,
            password:password
        } , {
          headers:{
            "Accept":"application/json",
            "Content-Type":"application/json"
          }
        })

        if(!data){
        
            return {
                success:false,
                message:'Login Failed',
                data:'Login Failed'
            }
        }
        
        return{
            success:true,
            message:'Login SuccessFull',
            data:data
        }
    } catch (err:any) {
          let message = "Network or server error";
    let payload: any = null;

    if (axios.isAxiosError(err)) {
      const axiosErr = err as AxiosError;
      payload = axiosErr.response?.data ?? axiosErr.toJSON?.() ?? null;

      if (payload) {
        if (payload.errors || payload.error) {
          // Show all error toasts
          extractErrorMessages(payload.errors ?? payload.error);
          message = "Validation errors occurred";
        } else if (typeof payload === "object" && payload.message) {
          message = String(payload.message);
          toast.error(message, { id: `error-response-${Date.now()}` });
        } else {
          extractErrorMessages(payload);
          message = "An error occurred";
        }
      } else if (axiosErr.message) {
        message = axiosErr.message;
        toast.error(message, { id: `error-network-${Date.now()}` });
      }
    } else {
      message = err?.message || "An unexpected error occurred";
      toast.error(message, { id: `error-unknown-${Date.now()}` });
    }
    
    return {
      success: false,
      message,
      data: payload,
    };
    }
}
export const fetchUserDetails = async (token: string) => {
    if (!token || token === "undefined") {
      console.error("Invalid or missing token");
      return {
        success: false,
        message: "Token missing",
        data: null,
      };
    }
  
    try {
      const { data } = await axios.get("https://portal.brundhavangarden.com/api/user/details", { 
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      return {
        success: true,
        message: "User Details",
        data: data?.user ?? data,
      };
    } catch (error: any) {
      console.error("Error fetching user details:", error);
      return {
        success: false,
        message: error.response?.data?.message || "Login failed",
        data: null,
      };
    }
  };
  
export const forgotPassword = async(email:string)=>{
  if(!email){
    return{
      success:false,
      message:"Email is Required",
      data:null
    }
  }
  try {
    const {data}  = await axios.post("https://portal.brundhavangarden.com/api/auth/forgot-password", {
      email:email
    })

    if(!data){
      return{
        success:false,
        message:"Not Found",
        data:null
      }
    }
    return {
      success:true,
      message:`Reset password is sent to ${email}`,
      data:data
    }
  } catch (error) {
    return{
      success:false,
      message:"Internal Server Error",
      data:null
    }
  }
}


export const resetPassword = async({
  email , token , password , confirmPassword
}:ResetPassword)=>{
  try {
    const {data} =  await axios.post("https://portal.brundhavangarden.com/api/auth/reset-password" , {
      email:email,
      token:token,
      password:password,
      password_confirmation:confirmPassword
    })

    if(!data){
      return {
        success:false,
        message:"Sorry Some thing went wrong",
        data:null
      }
    }
    return {
      success:true,
      message:"Password Changed",
      data:data
    }
  } catch (err:any) {
        let message = "Network or server error";
    let payload: any = null;

    if (axios.isAxiosError(err)) {
      const axiosErr = err as AxiosError;
      payload = axiosErr.response?.data ?? axiosErr.toJSON?.() ?? null;

      if (payload) {
        if (payload.errors || payload.error) {
          // Show all error toasts
          extractErrorMessages(payload.errors ?? payload.error);
          message = "Validation errors occurred";
        } else if (typeof payload === "object" && payload.message) {
          message = String(payload.message);
          toast.error(message, { id: `error-response-${Date.now()}` });
        } else {
          extractErrorMessages(payload);
          message = "An error occurred";
        }
      } else if (axiosErr.message) {
        message = axiosErr.message;
        toast.error(message, { id: `error-network-${Date.now()}` });
      }
    } else {
      message = err?.message || "An unexpected error occurred";
      toast.error(message, { id: `error-unknown-${Date.now()}` });
    }
    
    return {
      success: false,
      message : err.message || message ,
      data: payload,
    };
  }
}

export const fetchAllRoomCategories = async()=>{
  try {
    const {data} = await axios.get("https://portal.brundhavangarden.com/api/room-categories");
    if(!data){
      return{
        success:false,
        message:"Sorry Some thing went wrong",
        data:null
      }
    }
    return {
      success:true,
      message:"Recived Ok",
      data:data
    }
  } catch (error) {
    return{
      success:false,
      message:"Internal Server Error",
      data:null
    }
  }
}


export const fetchAllRoomByID = async(id:string)=>{
  try {
    const {data} = await axios.get(`https://portal.brundhavangarden.com/api/room-categories/${id}`);
    if(!data){
      return{
        success:false,
        message:"Sorry some thing went wrong",
        data:null
      }
    }
    return {
      success:true,
      message:"",
      data:data
    }
  } catch (error) {
    return{
      success:false,
      message:"Internal server error",
      data:null
    }
  }
}



export const addBookingWithToken = async({
token,
room_categories_id,
check_in,
check_out,
adult_count,
child_count,
special_food_menu,
activities,
extra_bed,

total
}:BookingDetails)=>{
  try {
    const {data} = await axios.post("https://portal.brundhavangarden.com/api/room-booking" , {
      token,
      room_categories_id,
      check_in,
      check_out,
      adult_count,
      child_count,
      special_food_menu,
      activities,
      extra_bed,
   
      total
  } , {
    headers:{
      Authorization:`Bearer ${token}`,
      "Accept":"application/json",
      "Content-Type":"application/json"
    }
  })
    if(data?.errors){
      return{
        success:false,
        message:"Sorry some thing went wrong",
        data:data?.errors
      }
    }
    return {
      success:true,
      message:"Booking Created SuccessFully",
      data:data
    }
  } catch (err:any) {
      let message = "Network or server error";
    let payload: any = null;

    if (axios.isAxiosError(err)) {
      const axiosErr = err as AxiosError;
      payload = axiosErr.response?.data ?? axiosErr.toJSON?.() ?? null;

      if (payload) {
        if (payload.errors || payload.error) {
          // Show all error toasts
          extractErrorMessages(payload.errors ?? payload.error);
          message = "Validation errors occurred";
        } else if (typeof payload === "object" && payload.message) {
          message = String(payload.message);
          toast.error(message, { id: `error-response-${Date.now()}` });
        } else {
          extractErrorMessages(payload);
          message = "An error occurred";
        }
      } else if (axiosErr.message) {
        message = axiosErr.message;
        toast.error(message, { id: `error-network-${Date.now()}` });
      }
    } else {
      message = err?.message || "An unexpected error occurred";
      toast.error(message, { id: `error-unknown-${Date.now()}` });
    }
    
    return {
      success: false,
      message,
      data: payload,
    };
  }
}




export const getFoodMenu =  async()=>{
  try {
    const {data:foodMenu}  = await axios.get("https://portal.brundhavangarden.com/api/services/food-menu");
    if(!foodMenu) {
      return{
              success:false,
        message:"Food Menu not found",
        data:data
      }
    }
    return {
          success:true,
        message:"Data Found",
        data:foodMenu
    }
  } catch (error) {
    return{
      success:false,
        message:"Internal server error",
        data:data
    }
  }
}
export const getActivites =  async()=>{
  try {
    const {data:activities}  = await axios.get("https://portal.brundhavangarden.com/api/services/activities");
    if(!activities) {
      return{
              success:false,
        message:"Food Menu not found",
        data:data
      }
    }
    return {
          success:true,
        message:"Data Found",
        data:activities
    }
  } catch (error) {
    return{
      success:false,
        message:"Internal server error",
        data:data
    }
  }
}

type AppDetailsResponse =  {
success:boolean;
data:any;
message:string;
}

export const getAppDetails = async() : Promise<AppDetailsResponse> => {
  try {
    const {data:appDetails}  =  await axios.get("https://portal.brundhavangarden.com/api/services/app-details")
    if(!appDetails){
      return {  
      success:false,
        message:"App details not found",
        data:data
      }
    }
    return {
      success:true,
      data:appDetails,
      message:"Successfully fetched app details"
    }

  } catch (error) {
    return{
     success:false,
     data:undefined,
     message:"Internal server error" 
    }
  }
}

export const getAdditionalActivites = async() : Promise<AppDetailsResponse> => {
  try {
    const {data:appDetails}  =  await axios.get("https://portal.brundhavangarden.com/api/services/additionalactivities")
    if(!appDetails){
      return {  
      success:false,
        message:"App details not found",
        data:data
      }
    }
    return {
      success:true,
      data:appDetails,
      message:"Successfully fetched app details"
    }

  } catch (error) {
    return{
     success:false,
     data:undefined,
     message:"Internal server error" 
    }
  }
}

