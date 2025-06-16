import Hero from "../components/Home/Hero";
import AboutUsSection from "../components/Home/Aboutus";
import SpecialSection from "@/components/Home/FeatureSectio";
import BentoGrid from "@/components/Home/BentoGrid";
import Amunities from "@/components/Home/Amunities";
import Testimonials from "@/components/Home/Testimonials";
import FAQ from "@/components/Home/FAQ";
import Footer from "@/components/Home/Footer";

export default function Home() {
  return (
    <>
      {/* Main content */}
      <main className="flex flex-col space-y-4 sm:space-y-20 md:space-y-24 lg:space-y-28 xl:space-y-32  p-3">
        <Hero />
        <SpecialSection />
        <AboutUsSection />
        <BentoGrid />
        <Amunities />
        <Testimonials />
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
