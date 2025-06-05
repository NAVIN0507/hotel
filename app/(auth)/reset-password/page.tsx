// app/(auth)/reset-password/page.tsx
'use client'

import React, { Suspense } from 'react'
import PasswordResetForm from '@/components/PasswordResetForm'

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PasswordResetForm />
    </Suspense>
  )
}
