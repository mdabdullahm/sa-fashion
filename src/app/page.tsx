import BrandsGrid from "@/components/brands/BrandsGrid";
import AboutSection from "@/components/home/AboutSection";
import CTA from "@/components/home/CTA";
import Heritage from "@/components/home/Heritage";
import Hero from "@/components/home/Hero";
import Licensing from "@/components/home/Licensing";

export default function Home() {
  return (
    <main className="md:pt-48">
      <Hero/>
      <Heritage/>
      <AboutSection/>
      <Licensing/>
      <BrandsGrid/>
      <CTA/>
    </main>
  );
}
