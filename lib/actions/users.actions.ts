// "use server"
import axios, { AxiosError } from "axios"
import { data } from "framer-motion/client"
import createAxiosInstance from "./axiosInstance";
import { string } from "zod"
// export const login = async(email:string , password : string)=>{
//     const {data} = await axios.post("https://zenpose.solvixsoftworks.com/api/login" , {
//         email:email,
//         password:password
//     })   

//     if(!data){
//         return console.log("Error")
//     }
//    return {
//     success:true,
//     message:"Logged In",
//     data:data
//    }
// }   

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
            throw new Error("Error from registration")
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
    } catch (error:any) {
      console.log(error.message)
        return{
           
               success:false,
                message:'Regitration Canceled',
                data:error
        }
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
    } catch (error:any) {
        return {
            success:false,
            message:'Login Failed',
            data:error.message
        }
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
  } catch (error) {
    return{
      success:false,
      message:"Internal server error",
      data:null
    }
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
fire_camp,
jeep_safari,
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
      fire_camp,
      jeep_safari,
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
  } catch (error:any) {
     return{
      success:false,
      message:`${error?.message}`,
      data:data
    }
  }
}
export const addBookingWithoutToken = async({
  room_categories_id,
  check_in,
  check_out,
  adult_count,
  child_count,
  special_food_menu,
  activities,
  extra_bed,
  fire_camp,
  jeep_safari,
  total,
  customer_data:{
    name,
    email,
    address, 
    phone
  }
  }:BookingDetailsWithoutToken)=>{
    try {
      const {data} = await axios.post("https://portal.brundhavangarden.com/api/room-booking" , {
        
        room_categories_id,
        check_in,
        check_out,
        adult_count,
        child_count,
        special_food_menu,
        activities,
        extra_bed,
        fire_camp,
        jeep_safari,
        total,
        customer_data:{
          name,
          email,
          address,
          phone
        }
    } , {
      headers:{
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
        message:"Booking Created successfully",
        data:data
      }
    } catch (error) {
       return{
        success:false,
        message:"Internal server error",
        data:data
      }
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

