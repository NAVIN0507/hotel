"use client";

import { useSearchParams } from "next/navigation";
import { BadgeIndianRupee, CheckCircle2 } from "lucide-react";

export default function SuccessPageContent() {
  const params = useSearchParams();

  const message = params.get("message") || "Payment Successful";
  const paymentId = params.get("payment_id");
  const orderId = params.get("order_id");

  return (
    <div className="h-screen flex flex-col items-center justify-center px-4 text-center">
      <div className="border w-16 h-16 flex items-center justify-center rounded-full border-green-500">
        <CheckCircle2 className="size-8 text-green-500" />
      </div>

      <h1 className="mt-6 text-2xl font-semibold text-green-600">
        {message}
      </h1>

      {paymentId && (
        <p className="mt-2 text-gray-600">
          Payment ID: <span className="font-semibold">{paymentId}</span>
        </p>
      )}

      {orderId && (
        <p className="mt-1 text-gray-600">
          Order ID: <span className="font-semibold">{orderId}</span>
        </p>
      )}

      <a
        href="/"
        className="mt-6 inline-block px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all"
      >
        Go to Home
      </a>
    </div>
  );
}
