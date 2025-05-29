"use server"
import axios from "axios"
import { data } from "framer-motion/client"
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
        throw new Error(error.message)
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
        })

        if(!data){
            throw new Error("Error from login from catch ")
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
        throw new Error("Error from login from catch ")
        return {
            success:false,
            message:'Login Failed',
            data:error.message
        }
    }
}