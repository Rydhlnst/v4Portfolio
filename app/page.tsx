import DiagonalBanner from "@/components/Landing-page/DiagonalBanner";
import HeroSection from "@/components/Landing-page/HeroSection";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection/>
      <DiagonalBanner degree={30} left={"95%"} top={"35%"}/>
      <DiagonalBanner degree={-10} top={"90%"} className=""/>
    </div>
  );
}
