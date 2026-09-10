import Image from "next/image";
import { ArrowRight, Mail, MapPin, GraduationCap, Code2 } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 tech-grid-pattern border-b border-[#1b2230]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Identity, Role, & Actions (7 Cols on md+) */}
          <div className="md:col-span-7 space-y-5">
            
            {/* Status & Location Pill */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#131822] border border-[#232c3f] text-[#cbd5e1]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>{PERSONAL_INFO.availability}</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#131822] border border-[#232c3f] text-[#94a3b8]">
                <MapPin className="w-3 h-3 text-[#64748b]" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

            {/* Name & Identity */}
            <div className="space-y-1.5">
              <div className="text-xs font-mono uppercase tracking-wider text-[#38bdf8] flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5" />
                <span>Personal Portfolio</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#f8fafc]">
                {PERSONAL_INFO.fullName}
              </h1>
              <p className="text-base sm:text-lg font-medium text-[#cbd5e1]">
                {PERSONAL_INFO.title}
              </p>
            </div>

            {/* Education Badge */}
            <div className="flex items-center gap-2 text-xs font-mono text-[#94a3b8] bg-[#11151e] border border-[#1e2738] px-3 py-2 rounded-md w-fit">
              <GraduationCap className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{PERSONAL_INFO.education}</span>
            </div>

            {/* Short Tagline */}
            <p className="text-sm text-[#94a3b8] leading-relaxed max-w-xl">
              {PERSONAL_INFO.subheadline}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#f1f5f9] text-[#0c0e12] font-medium text-xs sm:text-sm hover:bg-white transition-all shadow-sm active:scale-[0.98]"
              >
                <span>Lihat Karya Saya</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#131822] text-[#e2e8f0] border border-[#252f44] font-medium text-xs sm:text-sm hover:bg-[#1a2130] hover:border-[#374461] transition-all active:scale-[0.98]"
              >
                <Mail className="w-4 h-4 text-[#94a3b8]" />
                <span>Hubungi Saya</span>
              </a>
            </div>

          </div>

          {/* Right Column: Profile Image Card (5 Cols on md+) */}
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="relative w-full max-w-xs sm:max-w-sm">
              
              {/* Outer Decorative Frame */}
              <div className="relative rounded-xl bg-[#11151e] border border-[#232c3f] p-3 shadow-xl space-y-3">
                
                {/* Photo Box */}
                <div className="relative aspect-[4/5] w-full rounded-lg overflow-hidden bg-[#181f2c] border border-[#20293a]">
                  <Image
                    src={PERSONAL_INFO.photoPath}
                    alt={PERSONAL_INFO.fullName}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-center hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>

                {/* Developer Badge Footer */}
                <div className="p-2 rounded-lg bg-[#0e1118] border border-[#1b2230] flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#38bdf8]" />
                    <span className="text-[#cbd5e1]">{PERSONAL_INFO.displayName}</span>
                  </div>
                  <span className="text-[#64748b]">Bandung, ID</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
