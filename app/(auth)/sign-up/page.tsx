"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
const formSchema = z.object({
  email: z.string().email("Invalid email address"),
password: z.string().min(6, "Password must be at least 6 characters long"),
name: z.string().min(2, "Name must be at least 2 characters long"), 
username: z.string().min(2, "Username must be at least 2 characters long"),
  phone: z.string().min(10, "Phone number must be at least 10 characters long"),
  address:z.string()

})

import Image from 'next/image'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Check, Eye, Mail, NotebookPen, Phone, User, X } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { userRegister } from "@/lib/actions/users.actions"
import ShowToast from "@/components/error"

const SignUp = () => {
  const [isSubmitting, setisSubmitting] = useState(false)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email:"",
          password:"",
          name:"",
          username:"",
          phone:"",
          address:""
        },
      })
     async  function onSubmit(values: z.infer<typeof formSchema>) {
      setisSubmitting(true)
      const regitation = await userRegister({
        name:values.name,
        email:values.email,
        phone:values.phone,
        address:values.address,
        password:values.password
      })
      if(!regitation.success){
        ShowToast({
          title:regitation.message,
          description:"Signed up Cancelled",
          type:"danger",
          icon:<X className="p-1  rounded-full w-7 h-7"/>
        })
      }
      else{
        ShowToast({
          title:"Signed Up",
          description:"Verification Mail Has ben sent to your Email",
          type:"success",
          icon:<Check className="p-1  rounded-full w-7 h-7"/>
        })
      }
      setisSubmitting(false)
        
      }
  return (
<section className='flex gap-2 '>

<div className='w-full max-sm:mt-20 max-sm:- md:w-6/12 flex items-center justify-center p-10'>
<div className='w-full md:w-11/12 p-8 rounded-lg border border-gray-300 -mt-5'>
<h1 className='font-mono text-[#b79464] text-5xl text-center uppercase'>Brindhavan</h1>
<div className='flex flex-col gap-2 items-center justify-center mt-7'>
        <h1 className='flex uppercase gap-2 text-xl font-mono'> <div className="w-20 mt-4 hidden lg:block mr-2 h-0 border border-[#b79464] " /><span className="text-[#b79464] font-semibold">Explore Brindhavan</span> <div className="w-20 mt-4 hidden lg:block ml-2 h-0 border border-[#b79464]" /></h1>
    </div>
<div className="mt-10">
<Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              
              <FormControl>
              <div className="flex gap-2">

                <Input placeholder="Enter Your Name" {...field} className="p-8 border border-gray-300 focus-within:border-gray-300"/>
                <div className="p-4 border border-gray-300 rounded-md">
                    <NotebookPen className="text-gray-500"/>
                  </div>
                </div>
              </FormControl>
           
              <FormMessage />
            </FormItem>
          )}
        />
    
        
         <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              
              <FormControl>
                <div className="flex gap-2">
               
                <Input placeholder="Enter Your Phone Number" {...field} className="p-8 border border-gray-300 focus-within:border-gray-300"/>
                <h1 className="border border-gray-300 rounded-md p-4 flex items-center justify-center text-gray-500"><Phone/></h1>
                
            </div>
              </FormControl>
           
              <FormMessage />
            </FormItem>
          )}
        />
           <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              
              <FormControl>
                <div className="flex gap-2">
                 
                <Textarea placeholder="Enter Your Address" {...field} className="p-8 border border-gray-300 focus-within:border-gray-300" rows={7}/>
                <div className="p-4 border border-gray-300 rounded-md flex items-center justify-center">
                    <NotebookPen className="text-gray-500"/>
                  </div>
                </div>

              </FormControl>
           
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              
              <FormControl>
              <div className="flex gap-2">
                  
                <Input placeholder="Enter Your E-Mail" {...field} className="p-8 border border-gray-300 focus-within:border-gray-300"/>
                <div className="p-4 border border-gray-300 rounded-md text-gray-500">
                    <Mail/>
                  </div>
                </div>
              </FormControl>
           
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
             
              <FormControl>
              <div className="flex gap-2">
                  
                <Input placeholder="Enter Your Password" type="password" {...field} className="p-8 border border-gray-300 focus-within:border-gray-300"/>
                <div className="p-4 border border-gray-300 rounded-md text-gray-500">
                    <Eye/>
                  </div>
                </div>
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
       
        <Button type="submit" className="bg-[#b79464] hover:bg-[#b79464] hover:text-white cursor-pointer text-white w-full h-16 text-xl" disabled={isSubmitting}>{isSubmitting ? 'Registering...' :'Register'}</Button>
      </form>
    </Form>

</div>
<p className="mt-8 text-gray-500">Already Have an account ? <Link href={"/sign-in"}> <span className="underline">SignIn</span></Link></p>
</div>
</div>
<div className='h-40 w-11/12 sticky sm:top-0 sm:min-h-screen sm:flex-1 hidden md:block p-4'>
<Image
src={"/assets/images/feature_section.jpg"}
alt="feature section"
width={100}
height={100}
className='h-full w-full rounded-xl  object-fill'

/>
</div>
</section>
  )
}

export default SignUp