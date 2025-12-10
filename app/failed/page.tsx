"use client";

import { Suspense } from "react";
import FailedPageContent from "./FailedPageContent";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FailedPageContent />
    </Suspense>
  );
}
