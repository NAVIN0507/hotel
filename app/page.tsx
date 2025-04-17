import Image from "next/image";
import Hero from "./components/Home/Hero";
import AboutUsSection from "./components/Home/Aboutus";

export default function Home() {
  return (
  <main className="p-4 flex flex-col gap-10">
<Hero/>
<AboutUsSection/>
  </main>
  );
}
