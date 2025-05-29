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
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { userLogin } from "@/lib/actions/users.actions"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { Check } from "lucide-react"
const formSchema = z.object({
  email: z.string().email("Invalid email address"),
password: z.string()
})
const SignIn = () => {
  const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email:"",
          password:""
        },
      })
    async  function onSubmit(values: z.infer<typeof formSchema>) {
  const logins = await userLogin(values.email,values.password);
  if(logins.success){
    toast.success("Successfully Signed In", {
      duration: 5000,
      position: "top-center",
      icon: <Check width={20} height={20} className="rounded-full object-fill" />,
      style: {
        background: "#4ade80", // Tailwind green-400 hex
        color: "white",
        fontWeight: "bold",
        border: "none",
      },
    });
    localStorage.setItem("user_token", JSON.stringify(logins.data?.token));
     console.log(logins.data)
     router.push("/")
  }
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
            <Dialog>
  <DialogTrigger>  <p className="text-gray-500 underline cursor-pointer">Forgot Password ?</p></DialogTrigger>
  <DialogContent>
  <DialogHeader>
    <DialogTitle className="font-normal text-gray-700">Forgot Password ?</DialogTitle>
  </DialogHeader>
  <input placeholder="Enter Your Email"  className="p-4 rounded-lg border border-gray-300 focus-within:border-gray-300"/>
  <Button className="bg-[#b79464] hover:bg-[#b79464] hover:text-white cursor-pointer text-white w-full h-16 text-xl">Verify Your E-Mail</Button>
  </DialogContent>
</Dialog>
          
        </div>
        <Button type="submit" className="bg-[#b79464] hover:bg-[#b79464] hover:text-white cursor-pointer text-white w-full h-16 text-xl">Log In</Button>
      </form>
    </Form>

</div>
<p className="mt-8 text-gray-500">Don't Have an Account ? <Link href={"/sign-up"}> <span className="underline">SignUp</span> </Link></p>
</div>
</div>
</section>
  )
}

export default SignIn