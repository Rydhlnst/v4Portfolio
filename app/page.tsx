import AboutSection from "@/components/Landing-page/AboutSection";
import HeroSection from "@/components/Landing-page/HeroSection";
import OurWorksSection from "@/components/Landing-page/OurWorksSection";
import Testimonials from "../components/Landing-page/Testimonial";
import FeaturesSection from "@/components/Landing-page/FeaturesSection";
import CallToActionSection from "@/components/Landing-page/CallToAction";
import FaqSection from "@/components/Landing-page/FAQSection";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection/>
      <AboutSection/>
      <OurWorksSection/>
      <Testimonials/>
      <FeaturesSection/>
      <FaqSection/>
      <CallToActionSection/>
    </div>
  );
}
