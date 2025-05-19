"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
const formSchema = z.object({
  email: z.string().email("Invalid email address"),
password: z.string().min(6, "Password must be at least 6 characters long"),
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
const SignIn = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email:"",
          password:""
        },
      })
      function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }
  return (
<section className='flex gap-2 '>
<div className='sticky h-40 w-full pr-10 sm:top-0 sm:min-h-screen sm:flex-1 hidden md:block'>
<Image
src={"/assets/images/feature_section.jpg"}
alt="feature section"
fill
className=' object-fill'

/>
</div>
<div className='w-full max-sm:mt-20 max-sm:- md:w-1/2 flex items-center justify-center'>
<div className='w-full md:w-9/12 p-8 rounded-lg border border-gray-300'>
<h1 className='font-mono text-[#b79464] text-5xl text-center uppercase'>Brindhavan</h1>
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
        <div className="flex items-center justify-between gap-2 ml-2">
            <div className="flex gap-2 text-gray-500"><input type="checkbox" className="w-5 h-5 accent-[#b79464] text-white"/>  <p className="-mt-1">Remember me</p></div>
            <p className="text-gray-500 underline cursor-pointer">Forgot Password ?</p>
        </div>
        <Button type="submit" className="bg-[#b79464] hover:bg-[#b79464] hover:text-white cursor-pointer text-white w-full h-16 text-2xl">Log In</Button>
      </form>
    </Form>

</div>
<p className="mt-8 text-gray-500">Don't Have an Account ? <span className="underline">SignUp</span></p>
</div>
</div>
</section>
  )
}

export default SignIn