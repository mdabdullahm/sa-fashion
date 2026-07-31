import AboutSection from "@/components/home/AboutSection";
import BrandsSection from "@/components/home/BrandsSection";
import Heritage from "@/components/home/Heritage";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <main className="md:pt-48">
      <Hero/>
      <Heritage/>
      <AboutSection/>
      <BrandsSection/>
    </main>
  );
}
