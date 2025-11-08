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
  address: z.string()
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
      email: "",
      password: "",
      name: "",
      username: "",
      phone: "",
      address: ""
    },
  })
  
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setisSubmitting(true)
    const regitation = await userRegister({
      name: values.name,
      email: values.email,
      phone: values.phone,
      address: values.address,
      password: values.password
    })
    if (!regitation.success) {
      ShowToast({
        title: regitation.message,
        description: "Signed up Cancelled",
        type: "danger",
        icon: <X className="p-1 rounded-full w-7 h-7" />
      })
    } else {
      ShowToast({
        title: "Signed Up",
        description: "Verification Mail Has been sent to your Email",
        type: "success",
        icon: <Check className="p-1 rounded-full w-7 h-7" />
      })
    }
    setisSubmitting(false)
  }
  
  return (
    <section className='flex flex-col md:flex-row md:items-center md:justify-center md:min-h-screen md:p-6 lg:p-8'>
      <div className='flex flex-col md:flex-row w-full max-w-7xl md:h-[95vh] lg:h-[90vh] gap-0 md:gap-6'>
        
        {/* Form Section */}
        <div className='w-full md:w-[55%] lg:w-1/2 flex items-center justify-center p-4 sm:p-6 md:p-4 lg:p-6'>
          <div className='w-full max-w-lg p-4 sm:p-6 md:p-6 lg:p-8 rounded-lg border border-gray-300'>
            {/* Logo/Title */}
            <h1 className='font-mono text-[#b79464] text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center uppercase mb-3 sm:mb-4 md:mb-3 lg:mb-4'>
              Brundhavan Gardens
            </h1>
            
            {/* Subtitle with decorative lines */}
            <div className='flex flex-col gap-2 items-center justify-center mb-4 sm:mb-6 md:mb-4 lg:mb-6'>
              <h1 className='flex uppercase gap-2 text-sm sm:text-base md:text-lg lg:text-xl font-mono items-center'>
                <div className="w-12 sm:w-16 lg:w-20 h-0 border border-[#b79464] hidden sm:block" />
                <span className="text-[#b79464] font-semibold whitespace-nowrap">Explore Brundhavan</span>
                <div className="w-12 sm:w-16 lg:w-20 h-0 border border-[#b79464] hidden sm:block" />
              </h1>
            </div>
            
            {/* Form */}
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 sm:space-y-4 md:space-y-3 lg:space-y-4">
                {/* Name Field */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="flex gap-2">
                          <Input 
                            placeholder="Enter Your Name" 
                            {...field} 
                            className="p-3 sm:p-4 md:p-4 lg:p-5 border border-gray-300 focus-within:border-gray-300 text-sm sm:text-base h-fit"
                          />
                          <div className="p-2 sm:p-3 md:p-3 lg:p-4 border border-gray-300 rounded-md flex items-center justify-center flex-shrink-0">
                            <NotebookPen className="text-gray-500 w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6"/>
                          </div>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                {/* Phone Field */}
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="flex gap-2">
                          <Input 
                            placeholder="Enter Your Phone Number" 
                            {...field} 
                            className="p-3 sm:p-4 md:p-4 lg:p-5 border border-gray-300 focus-within:border-gray-300 text-sm sm:text-base h-fit"
                          />
                          <div className="border border-gray-300 rounded-md p-2 sm:p-3 md:p-3 lg:p-4 flex items-center justify-center text-gray-500 flex-shrink-0">
                            <Phone className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6"/>
                          </div>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                {/* Address Field */}
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="flex gap-2">
                          <Textarea 
                            placeholder="Enter Your Address" 
                            {...field} 
                            className="p-3 sm:p-4 md:p-4 lg:p-5 border border-gray-300 focus-within:border-gray-300 text-sm sm:text-base resize-none" 
                            rows={3}
                          />
                          <div className="p-2 sm:p-3 md:p-3 lg:p-4 border border-gray-300 rounded-md flex items-center justify-center flex-shrink-0">
                            <NotebookPen className="text-gray-500 w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6"/>
                          </div>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                {/* Email Field */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="flex gap-2">
                          <Input 
                            placeholder="Enter Your E-Mail" 
                            {...field} 
                            className="p-3 sm:p-4 md:p-4 lg:p-5 border border-gray-300 focus-within:border-gray-300 text-sm sm:text-base h-fit"
                          />
                          <div className="p-2 sm:p-3 md:p-3 lg:p-4 border border-gray-300 rounded-md text-gray-500 flex items-center justify-center flex-shrink-0">
                            <Mail className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6"/>
                          </div>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                {/* Password Field */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="flex gap-2">
                          <Input 
                            placeholder="Enter Your Password" 
                            type="password" 
                            {...field} 
                            className="p-3 sm:p-4 md:p-4 lg:p-5 border border-gray-300 focus-within:border-gray-300 text-sm sm:text-base h-fit"
                          />
                          <div className="p-2 sm:p-3 md:p-3 lg:p-4 border border-gray-300 rounded-md text-gray-500 flex items-center justify-center flex-shrink-0">
                            <Eye className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6"/>
                          </div>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="bg-[#b79464] hover:bg-[#b79464] hover:text-white cursor-pointer text-white w-full h-10 sm:h-12 md:h-12 lg:h-14 text-sm sm:text-base md:text-lg lg:text-xl" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Creating...' : 'Create your Account'}
                </Button>
              </form>
            </Form>
            
            {/* Sign In Link */}
            <p className="mt-4 sm:mt-6 md:mt-4 lg:mt-6 text-gray-500 text-xs sm:text-sm lg:text-base text-center">
              Already Have an account? {" "}
              <Link href={"/sign-in"}>
                <span className="underline">SignIn</span>
              </Link>
            </p>
          </div>
        </div>
        
        {/* Image Section - Right side on desktop, bottom on mobile */}
        <div className='w-full h-64 sm:h-80 md:w-[45%] lg:max-h-fit lg:w-1/2 md:h-full rounded-xl overflow-hidden'>
          <Image
            src={"/assets/images/sign-up-login.jpg"}
            alt="feature section"
            width={800}
            height={800}
            className='w-full h-full object-cover'
          />
        </div>
      </div>
    </section>
  )
}

export default SignUp