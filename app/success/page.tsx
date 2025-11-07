"use client";

import { Suspense } from "react";
import SuccessPageContent from "./SuccessPageContent";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessPageContent />
    </Suspense>
  );
}
