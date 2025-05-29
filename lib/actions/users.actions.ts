"use server"
import axios from "axios"
export const login = async(email:string , password : string)=>{
    const {data} = await axios.post("https://zenpose.solvixsoftworks.com/api/login" , {
        email:email,
        password:password
    })   

    if(!data){
        return console.log("Error")
    }
   return {
    success:true,
    message:"Logged In",
    data:data
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