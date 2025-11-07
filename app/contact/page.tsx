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
        <h1 className="text-[#45443F] text-5xl font-mono">CONTACT US</h1>
        <div className="p-20 max-sm:p-10 flex flex-col gap-10 -mt-5 leading-6 text-center">
            <p>
                You may contact us using the information below: Merchant Legal entity name: Brundhavan Garden Registered Address: 3/347A, PANNAIKADU MAIN ROAD, Thandigudi, Dindigul, Tamil Nadu, 624216 Tandigudi SO TAMIL NADU 624216 Operational Address: 3/347A, PANNAIKADU MAIN ROAD, Thandigudi, Dindigul, Tamil Nadu, 624216 Tandigudi SO TAMIL NADU 624216 Telephone No: 9360275607 E-Mail ID: brundhavangarden@gmail.com
            </p>
        </div>
      </div>
    </section>
  );
};
