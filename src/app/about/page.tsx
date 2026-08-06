import AboutContent from "@/components/about/AboutContent";
import AboutHero from "@/components/about/AboutHero";

export default function page() {
  return (
    <div className="md:pt-48">
      <AboutHero/>
      <AboutContent/>
    </div>
  )
}
