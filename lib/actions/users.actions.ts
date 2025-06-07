// "use server"
import axios from "axios"
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
      confirmPassword:confirmPassword
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