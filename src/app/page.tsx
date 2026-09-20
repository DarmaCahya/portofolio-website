import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TechStackSection from "@/components/TechStackSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#090a0d] text-[#e5e7eb]">
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <TechStackSection />
        <ProjectsSection isHomePage={true} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
