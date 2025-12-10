// app/(auth)/reset-password/page.tsx
'use client'

import React, { Suspense } from 'react'
import PasswordResetForm from '@/components/PasswordResetForm'

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen">
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#b79464] mx-auto"></div>
            <p className="mt-2 text-gray-600">Loading...</p>
          </div>
        </div>
      }>
        <PasswordResetForm />
      </Suspense>
    </div>
  )
}
