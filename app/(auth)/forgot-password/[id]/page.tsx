"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"



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
import Link from "next/link"
const formSchema = z.object({
  confirmPassword: z.string().email("Invalid email address"),
password: z.string().min(6, "Password must be at least 6 characters long"),
})
const SignIn = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          confirmPassword:"",
          password:""
        },
      })
      function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
      }
  return (
<section className='flex gap-2 '>
<div className='h-40 w-11/12  sm:top-0 sm:min-h-screen sm:flex-1 hidden md:block p-4'>
<Image
src={"/assets/images/feature_section.jpg"}
alt="feature section"
width={100}
height={100}
className='h-full w-full rounded-xl  object-fill'

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
          name="password"
          render={({ field }) => (
            <FormItem>
              
              <FormControl>
                <Input placeholder="Enter Your New Password" type="password" {...field} className="p-8 border border-gray-300 focus-within:border-gray-300"/>
              </FormControl>
           
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
             
              <FormControl>
                <Input placeholder="Confirm Password" type="password" {...field}  className="p-8 border border-gray-300" />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-[#b79464] hover:bg-[#b79464] hover:text-white cursor-pointer text-white w-full h-16 text-xl">Reset Password</Button>
      </form>
    </Form>

</div>

</div>
</div>
</section>
  )
}

export default SignIn