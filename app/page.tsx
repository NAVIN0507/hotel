import Image from "next/image";
import Hero from "../components/Home/Hero";
import AboutUsSection from "../components/Home/Aboutus";
import SpecialSection from "@/components/Home/FeatureSectio";
import BentoGrid from "@/components/Home/BentoGrid";



export default function Home() {
  return (
  <main className="p-4 flex flex-col gap-10">
<Hero/>
<SpecialSection/>
<AboutUsSection/>
<BentoGrid/>
  </main>
  );
} 
