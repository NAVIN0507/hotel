import Footer from "@/components/Home/Footer";
import Hero from "@/components/Home/Hero";
import { getAppDetails } from "@/lib/actions/users.actions";
import React from "react";

const page = () => {
  return (
    <div className="space-y-5">
        <div className="p-4">
      <Hero />
      </div>
      <RefundPolicy />
      <Footer />
    </div>
  );
};

export default page;

const RefundPolicy = async () => {
  const { data } = await getAppDetails();

  return (
    <section className="mx-auto mt-10">
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-[#45443F] text-5xl font-mono">TERMS & CONDITIONS</h1>
        <div className="p-20 max-sm:p-10 flex flex-col gap-10 -mt-5">
          <div
            className="text-[#3A3A3A] leading-relaxed text-lg max-sm:text-sm space-y-4"
            dangerouslySetInnerHTML={{
              __html: data?.terms || "<p>No refund policy found.</p>",
            }}
          />
        </div>
      </div>
    </section>
  );
};
