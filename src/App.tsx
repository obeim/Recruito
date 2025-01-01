import Navbar from "./components/Navbar";
import BenefitsSection from "./sections/BenfitsSection";
import FAQSection from "./sections/FaqsSection";
import FeaturesSection from "./sections/FeaturesSection";
import HeroSection from "./sections/HeroSection";
import TestimonialSection from "./sections/TestimonialSection";
import TrustedSection from "./sections/TrustedSection";

function App() {
  return (
    <div>
      <img
        className="absolute top-0 right-0 z-0 w-1/2"
        src="hero_assets/docker-pattern-right3.png"
      />
      <img
        className="w-full object-fill h-[70vh] absolute top-0"
        src="hero_assets/hero_bg.png"
      />
      <div className="max-w-[1920px] mx-auto relative z-20">
        <Navbar />
        <HeroSection />
        <TrustedSection />
        <FeaturesSection />
        <BenefitsSection />
        <FAQSection />
        <TestimonialSection />
      </div>
    </div>
  );
}

export default App;
