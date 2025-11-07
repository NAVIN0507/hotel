"use client"
import { Loader2Icon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function NotFound() {
  const router = useRouter()

  useEffect(()=>{
    const t = setTimeout(()=>{
      router.push("/")
    }, 2000)
    return ()=> clearTimeout(t)
  }, [router])

  return (
    <div className='flex w-full items-center justify-center min-h-screen'>
      <Loader2Icon className='size-10 animate-spin text-yellow-500'/>
    </div>
  )
}