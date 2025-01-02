import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-twilight via-twilight/95 to-darkText">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <Footer />
    </div>
  );
};

export default Index;