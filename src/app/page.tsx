import AboutSection from "@/components/home/AboutSection";
import BrandsSection from "@/components/home/BrandsSection";
import Heritage from "@/components/home/Heritage";
import Hero from "@/components/home/Hero";
import Licensing from "@/components/home/Licensing";

export default function Home() {
  return (
    <main className="md:pt-48">
      <Hero/>
      <Heritage/>
      <AboutSection/>
      <BrandsSection/>
      <Licensing/>
    </main>
  );
}
