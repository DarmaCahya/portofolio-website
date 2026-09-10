import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Projects — Darma Cahya",
  description: "Koleksi lengkap proyek pengembangan web, sistem enterprise, aplikasi freelance, dan eksperimen antarmuka oleh Darma Cahya.",
};

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0c0e12] text-[#f1f5f9]">
      <Navbar />
      <main className="flex-1 pt-24">
        {/* Page Top Header Bar */}
        <div className="border-b border-[#1b2230] bg-[#090b0e] py-8">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 space-y-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#94a3b8] hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Kembali ke Beranda</span>
            </Link>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#f8fafc]">
              All Projects &amp; Work
            </h1>
            <p className="text-sm text-[#94a3b8] max-w-2xl">
              Kumpulan seluruh studi kasus aplikasi web produksi, integrasi sistem enterprise untuk BNI Ventures &amp; Duluin Group, aplikasi freelance (QR Hunt, MedikaOne), proyek capstone Bangkit Academy, dan eksperimen otomasi.
            </p>
          </div>
        </div>

        {/* Full Projects Showcase */}
        <ProjectsSection isHomePage={false} />

        {/* Contact CTA */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
