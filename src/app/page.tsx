import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TechStackSlider from "@/components/TechStackSlider";
import TechStackSection from "@/components/TechStackSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import PhilosophySection from "@/components/PhilosophySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0c0e12] text-[#f1f5f9]">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <TechStackSlider />
        <TechStackSection />
        <ProjectsSection isHomePage={true} />
        <ExperienceSection />
        <EducationSection />
        <PhilosophySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
