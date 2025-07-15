import AboutSection from "@/components/Landing-page/AboutSection";
import HeroSection from "@/components/Landing-page/HeroSection";
import OurWorksSection from "@/components/Landing-page/OurWorksSection";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection/>
      <AboutSection/>
      <OurWorksSection/>
    </div>
  );
}
