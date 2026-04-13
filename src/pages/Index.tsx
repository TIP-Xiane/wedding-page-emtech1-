import Navbar from "@/components/wedding/Navbar";
import HeroSection from "@/components/wedding/HeroSection";
import StorySection from "@/components/wedding/StorySection";
import ProgrammeSection from "@/components/wedding/ProgrammeSection";
import LocationSection from "@/components/wedding/LocationSection";
import AttireSection from "@/components/wedding/AttireSection";
import RSVPSection from "@/components/wedding/RSVPSection";
import Footer from "@/components/wedding/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <StorySection />
      <ProgrammeSection />
      <LocationSection />
      <AttireSection />
      <RSVPSection />
      <Footer />
    </div>
  );
};

export default Index;
