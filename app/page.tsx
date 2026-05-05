import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ScrollScrubSection from "./components/ScrollScrubSection";
import LivePropsSection from "./components/LivePropsSection";
import FeaturesSection from "./components/FeaturesSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-[#050508] min-h-screen">
      <Navbar />
      <HeroSection />
      <ScrollScrubSection />
      <LivePropsSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </main>
  );
}
