import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PERSONAL_INFO } from "@/data/portfolio";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 border-b border-[#1b2230] bg-[#0b0d12]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Full-width Editorial Contact Box */}
        <div className="relative rounded-2xl bg-[#10141d] border border-[#1e2738] p-8 sm:p-12 lg:p-14 overflow-hidden shadow-2xl abstract-pattern-bg">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#38bdf8]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative space-y-6 max-w-3xl">
            {/* Section Label */}
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#64748b]">
              <span>06</span>
              <span className="text-[#334155]">/</span>
              <span className="text-[#38bdf8]">Initiate Contact</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#f8fafc] leading-tight">
              Have something worth building?
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed max-w-2xl">
              Saya selalu terbuka untuk berdiskusi tentang proyek aplikasi web, tantangan frontend development, maupun peluang kolaborasi yang bermanfaat. Mari terhubung!
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              {/* Primary Email Button */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#f1f5f9] text-[#0c0e12] font-semibold text-sm hover:bg-white transition-all shadow-md active:scale-[0.98]"
              >
                <Mail className="w-4 h-4 text-[#0c0e12]" />
                <span>{PERSONAL_INFO.email}</span>
                <ArrowUpRight className="w-4 h-4 text-[#0c0e12]" />
              </a>

              {/* LinkedIn Link */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-[#141923] text-[#cbd5e1] border border-[#242f44] hover:bg-[#1b2230] hover:text-white font-mono text-xs transition-all active:scale-[0.98]"
              >
                <LinkedinIcon className="w-4 h-4 text-[#0077b5]" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>

              {/* GitHub Link */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-[#141923] text-[#cbd5e1] border border-[#242f44] hover:bg-[#1b2230] hover:text-white font-mono text-xs transition-all active:scale-[0.98]"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
