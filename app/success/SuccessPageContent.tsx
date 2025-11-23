"use client";

import { useSearchParams } from "next/navigation";
import { BadgeIndianRupee, CheckCircle2, Home, Package } from "lucide-react";

export default function SuccessPageContent() {
  const params = useSearchParams();

  const message = params.get("message") || "Payment Successful";
  const paymentId = params.get("payment_id");
  const orderId = params.get("order_id");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-md w-full">
        {/* Success Icon with Animation */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-[#b79464]/20 rounded-full blur-xl animate-pulse"></div>
            <div className="relative w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-[#b79464] to-[#d4a574] shadow-lg">
              <CheckCircle2 className="size-10 text-white" strokeWidth={2.5} />
            </div>
          </div>
        </div>

        {/* Success Message */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {message}
          </h1>
          <p className="text-gray-600">
            Thank you for your booking. Your payment has been processed successfully.
          </p>
        </div>

        {/* Payment Details Card */}
        {(paymentId || orderId) && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8 space-y-4">
            {paymentId && (
              <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                <span className="text-sm text-gray-600 font-medium">Payment ID</span>
                <span className="text-sm font-semibold text-gray-900 font-mono">
                  {paymentId}
                </span>
              </div>
            )}

            {orderId && (
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 font-medium">Order ID</span>
                <span className="text-sm font-semibold text-gray-900 font-mono">
                  {orderId}
                </span>
              </div>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="/"
            className="flex-1 group relative overflow-hidden px-6 py-3.5 bg-[#b79464] hover:bg-[#a6844d] text-white rounded-xl font-medium transition-all duration-300 shadow-lg shadow-[#b79464]/25 hover:shadow-xl hover:shadow-[#b79464]/30 hover:-translate-y-0.5"
          >
            <span className="relative flex items-center justify-center gap-2">
              <Home className="size-4" />
              Go to Home
            </span>
          </a>
          
          <a
            href={`https://portal.brundhavangarden.com/portal/room-bookings/${orderId}`}
            className="flex-1 group px-6 py-3.5 border-2 border-[#b79464] text-[#b79464] hover:bg-[#b79464] hover:text-white rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5"
          >
            <span className="flex items-center justify-center gap-2">
              <Package className="size-4" />
              View Orders
            </span>
          </a>
        </div>

        {/* Additional Info */}
        <p className="text-center text-sm text-gray-500 mt-8">
          A confirmation email has been sent to your registered email address.
        </p>
      </div>
    </div>
  );
}