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
import { forgotPassword, userLogin } from "@/lib/actions/users.actions"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { Check, X } from "lucide-react"
import ShowToast from "@/components/error"

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string()
})

const SignIn = () => {
  const router = useRouter();
  const [isLoading, setisLoading] = useState(false)
  const [reset_email, setreset_email] = useState("");
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  })
  
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setisLoading(true);
    const logins = await userLogin(values.email, values.password);
    if (!logins.success) {
      ShowToast({
        title: logins.message,
        description: "Signed In Cancelled",
        type: "danger",
        icon: <X className="p-1 rounded-full w-7 h-7" />
      })
    } else {
      ShowToast({
        title: "Signed In",
        description: "Signed In Successfully",
        type: "success",
        icon: <Check className="p-1 rounded-full w-7 h-7" />
      })

      localStorage.setItem("user_token", JSON.stringify(logins.data?.token));
      router.push("/")
    }
    setisLoading(false);
  }
  
  const handleResetPassowrd = async () => {
    const result = await forgotPassword(reset_email);
    if (result.success) {
      router.push("/sign-in")
      toast.success("Reset Mail has been sent to your email")
    }
  }
  
  return (
    <section className='flex flex-col md:flex-row md:items-center md:justify-center md:min-h-screen md:p-6 lg:p-8'>
      <div className='flex flex-col md:flex-row w-full max-w-7xl md:h-[95vh] lg:h-[90vh] gap-0 md:gap-6'>
        
        {/* Image Section - Left side on desktop, bottom on mobile */}
        <div className='w-full h-64 sm:h-80 md:w-[45%] lg:w-1/2 md:h-full rounded-xl overflow-hidden order-2 md:order-1 max-sm:min-h-screen'>
          <Image
            src={"/assets/images/sign-up-login.jpg"}
            alt="feature section"
            width={800}
            height={800}
            className='w-full h-full object-cover max-sm:w-screen max-sm:h-screen '
          />
        </div>
        
        {/* Form Section */}
        <div className='w-full md:w-[55%] lg:w-1/2 flex items-center justify-center p-4 sm:p-6 md:p-4 lg:p-6 order-1 md:order-2'>
          <div className='w-full max-w-lg p-4 sm:p-6 md:p-6 lg:p-8 rounded-lg border border-gray-300'>
            {/* Logo/Title */}
            <h1 className='font-mono text-[#b79464] text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center uppercase mb-6 sm:mb-8 md:mb-6 lg:mb-8'>
              Brundhavan Gardens
            </h1>
          
            
            {/* Form */}
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 sm:space-y-6 md:space-y-5 lg:space-y-6">
                {/* Email Field */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input 
                          placeholder="Enter Your Email" 
                          {...field} 
                          className="p-4 sm:p-5 md:p-5 lg:p-6 border border-gray-300 focus-within:border-gray-300 text-sm sm:text-base"
                        />
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
                        <Input 
                          placeholder="Enter Your Password" 
                          type="password" 
                          {...field} 
                          className="p-4 sm:p-5 md:p-5 lg:p-6 border border-gray-300 text-sm sm:text-base" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                {/* Remember Me & Forgot Password */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-2">
                  <div className="flex gap-2 text-gray-500 items-center">
                    <input 
                      type="checkbox" 
                      className="w-4 h-4 sm:w-5 sm:h-5 accent-[#b79464] text-white flex-shrink-0"
                    />
                    <p className="text-xs sm:text-sm md:text-sm lg:text-base">Remember me</p>
                  </div>
                  
                  <Dialog>
                    <DialogTrigger>
                      <p className="text-gray-500 underline cursor-pointer text-xs sm:text-sm md:text-sm lg:text-base whitespace-nowrap">
                        Forgot Password?
                      </p>
                    </DialogTrigger>
                    <DialogContent className="w-[90vw] max-w-md">
                      <DialogHeader>
                        <DialogTitle className="font-normal text-gray-700 text-base sm:text-lg">
                          Forgot Password?
                        </DialogTitle>
                      </DialogHeader>
                      <input 
                        placeholder="Enter Your Email" 
                        className="p-3 sm:p-4 rounded-lg border border-gray-300 focus-within:border-gray-300 text-sm sm:text-base" 
                        value={reset_email} 
                        onChange={(e) => setreset_email(e.target.value)}
                      />
                      <Button 
                        className="bg-[#b79464] hover:bg-[#b79464] hover:text-white cursor-pointer text-white w-full h-12 sm:h-14 text-base sm:text-lg" 
                        onClick={handleResetPassowrd}
                      >
                        Verify Your E-Mail
                      </Button>
                    </DialogContent>
                  </Dialog>
                </div>
                
                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="bg-[#b79464] hover:bg-[#b79464] hover:text-white cursor-pointer text-white w-full h-12 sm:h-14 md:h-12 lg:h-16 text-base sm:text-lg md:text-lg lg:text-xl" 
                  disabled={isLoading}
                >
                  {isLoading ? "Logging In..." : "Log In"}
                </Button>
              </form>
            </Form>
            
            {/* Sign Up Link */}
            <p className="mt-6 sm:mt-8 md:mt-6 lg:mt-8 text-gray-500 text-xs sm:text-sm lg:text-base text-center">
              Don't Have an Account? {" "}
              <Link href={"/sign-up"}>
                <span className="underline">SignUp</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignIn 