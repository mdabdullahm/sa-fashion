import AboutSection from "@/components/home/AboutSection";
import Brands from "@/components/home/Brands";
import CTA from "@/components/home/CTA";
import Heritage from "@/components/home/Heritage";
import Hero from "@/components/home/Hero";
import Licensing from "@/components/home/Licensing";
import ProductionFacilities from "@/components/home/ProductionFacilities";

export default function Home() {
  return (
    <main className="md:pt-48">
      <Hero/>
      <Heritage/>
      <AboutSection/>
      <ProductionFacilities/>
      <Licensing/>
      <Brands/>
      <CTA/>
    </main>
  );
}
