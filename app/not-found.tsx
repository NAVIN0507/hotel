"use client"
import { Loader2Icon } from 'lucide-react'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'
 
export default function NotFound() {
  useEffect(()=>{
    setTimeout(()=>{
      return redirect("/")
    } , 2000)
  } , [])
  return (
    <div className='flex w-full items-center justify-center min-h-screen'>
      <Loader2Icon className='size-10 animate-spin text-yellow-500'/>
    </div>
  )
}