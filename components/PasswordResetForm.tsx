'use client'

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useSearchParams, useRouter } from "next/navigation"
import { resetPassword } from "@/lib/actions/users.actions"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Form, FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form"
import Image from "next/image"
import { useEffect, useState } from "react"

const formSchema = z.object({
  confirmPassword: z.string().min(6, "Confirm Password must be at least 6 characters long"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
})

export default function PasswordResetForm() {
  const searchparams = useSearchParams();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      confirmPassword: "",
      password: ""
    },
  })

  useEffect(() => {
    setMounted(true);
    // Get parameters from URL - works better with static hosting
    const urlParams = new URLSearchParams(window.location.search);
    const emailParam = urlParams.get("email") || searchparams.get("email");
    const tokenParam = urlParams.get("token") || searchparams.get("token");
    
    setEmail(emailParam);
    setToken(tokenParam);

    if (!emailParam || !tokenParam) {
      setError("Invalid reset link. Please check your email for the correct link.");
    }
  }, [searchparams]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!email || !token) {
      setError("Missing email or token. Please use the link from your email.");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const reseting_password = await resetPassword({
        email: email,
        token: token,
        password: values.password,
        confirmPassword: values.confirmPassword
      });

      if (reseting_password.success) {
        // Use window.location for better static hosting compatibility
        window.location.href = "/sign-in";
      } else {
        setError(reseting_password.message || "Failed to reset password. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (!mounted) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#b79464] mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <section className='flex gap-2'>
      <div className='h-40 w-11/12 sm:top-0 sm:min-h-screen sm:flex-1 hidden md:block p-4'>
        <Image
          src={"/assets/images/feature_section.jpg"}
          alt="feature section"
          width={100}
          height={100}
          className='h-full w-full rounded-xl object-fill'
        />
      </div>
      <div className='w-full max-sm:mt-20 md:w-1/2 flex items-center justify-center'>
        <div className='w-full md:w-9/12 p-8 rounded-lg border border-gray-300'>
          <h1 className='font-mono text-[#b79464] text-5xl text-center uppercase'>Brindhavan</h1>
          <div className="mt-10">
            {error && (
              <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Enter Your New Password" type="password" {...field} className="p-8 border border-gray-300" />
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
                        <Input placeholder="Confirm Password" type="password" {...field} className="p-8 border border-gray-300" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  disabled={isSubmitting || !email || !token}
                  className="bg-[#b79464] hover:bg-[#b79464] hover:text-white cursor-pointer text-white w-full h-16 text-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Resetting..." : "Reset Password"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  )
}
