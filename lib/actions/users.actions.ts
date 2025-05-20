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