"use client";

import { useSearchParams } from "next/navigation";
import { XCircle } from "lucide-react";

export default function FailedPageContent() {
  const params = useSearchParams();

  const message = params.get("message") || "Payment Failed";
  const errorCode = params.get("error_code");
  const paymentId = params.get("payment_id");
  const orderId = params.get("order_id");

  return (
    <div className="h-screen flex flex-col items-center justify-center px-4 text-center">
      <div className="border w-16 h-16 flex items-center justify-center rounded-full border-red-500">
        <XCircle className="size-8 text-red-500" />
      </div>

      <h1 className="mt-6 text-2xl font-semibold text-red-600">
        {message}
      </h1>

      {errorCode && (
        <p className="mt-2 text-gray-600">
          Error Code: <span className="font-semibold">{errorCode}</span>
        </p>
      )}

      {paymentId && (
        <p className="mt-1 text-gray-600">
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
        className="mt-6 inline-block px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
      >
        Try Again
      </a>
    </div>
  );
}
