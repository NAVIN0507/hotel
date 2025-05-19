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

})

import Image from 'next/image'
import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
const SignUp = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email:"",
          password:"",
          name:"",
          username:"",
          phone:""
        },
      })
      function onSubmit(values: z.infer<typeof formSchema>) {
       
        console.log(values)
      }
  return (
<section className='flex gap-2 '>

<div className='w-full max-sm:mt-20 max-sm:- md:w-1/2 flex items-center justify-center'>
<div className='w-full md:w-9/12 p-8 rounded-lg border border-gray-300'>
<h1 className='font-mono text-[#b79464] text-5xl text-center uppercase'>Brindhavan</h1>
<div className='flex flex-col gap-2 items-center justify-center mt-7'>
        <h1 className='flex uppercase gap-2 text-xl font-mono'> <div className="w-20 mt-4 hidden lg:block mr-2 h-0 border border-[#b79464] " /><span className="text-[#b79464] font-semibold">Explore Brindhavan</span> <div className="w-20 mt-4 hidden lg:block ml-2 h-0 border border-[#b79464]" /></h1>
    </div>
<div className="mt-10">
<Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              
              <FormControl>
                <Input placeholder="Enter Your Email" {...field} className="p-8 border border-gray-300 focus-within:border-gray-300"/>
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
                <Input placeholder="Enter Your Email" {...field} className="p-8 border border-gray-300 focus-within:border-gray-300"/>
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
                <Input placeholder="Enter Your Email" {...field} className="p-8 border border-gray-300 focus-within:border-gray-300"/>
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
                <Input placeholder="Enter Your Email" {...field} className="p-8 border border-gray-300 focus-within:border-gray-300"/>
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
                <Input placeholder="Enter Your Password" type="password" {...field}  className="p-8 border border-gray-300" />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
       
        <Button type="submit" className="bg-[#b79464] hover:bg-[#b79464] hover:text-white cursor-pointer text-white w-full h-16 text-xl">Register</Button>
      </form>
    </Form>

</div>
<p className="mt-8 text-gray-500">Already Have an account ? <span className="underline">SignIn</span></p>
</div>
</div>
<div className='sticky h-40 w-full pr-10 sm:top-0 sm:min-h-screen sm:flex-1 hidden md:block'>
<Image
src={"/assets/images/feature_section.jpg"}
alt="feature section"
fill
className=' object-fill'

/>
</div>
</section>
  )
}

export default SignUp