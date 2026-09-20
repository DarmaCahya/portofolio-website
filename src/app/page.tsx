import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TechStackSection from "@/components/TechStackSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col bg-[#090a0d] text-[#e5e7eb]">
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <ProjectsSection isHomePage={true} />
      <ContactSection />
    </div>
  );
}
