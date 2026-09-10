"use client";

import { useState } from "react";
import { Mail, Copy, Check, ArrowUpRight, Clock, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PERSONAL_INFO } from "@/data/portfolio";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-12 md:py-20 border-b border-[#1b2230] bg-[#0b0d12]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Section Header Label */}
        <div className="flex items-center gap-2 mb-3 text-xs font-mono tracking-widest uppercase text-[#64748b]">
          <span>06</span>
          <span className="text-[#334155]">/</span>
          <span>Initiate Contact</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main CTA block */}
          <div className="lg:col-span-8 space-y-5">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[#f8fafc] leading-tight">
              Have something worth building?
            </h2>

            <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed max-w-xl">
              Saya selalu tertarik dengan produk web yang menarik, tantangan frontend, serta peluang untuk membangun sesuatu yang bermanfaat.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#f1f5f9] text-[#0c0e12] font-medium text-xs sm:text-sm hover:bg-white transition-all shadow-sm active:scale-[0.98]"
              >
                <Mail className="w-4 h-4" />
                <span>Get in touch</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#141822] text-[#cbd5e1] border border-[#232c3f] hover:bg-[#1a2130] hover:text-white font-mono text-xs transition-all active:scale-[0.98]"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Email disalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#94a3b8]" />
                    <span>Salin email</span>
                  </>
                )}
              </button>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#141822] text-[#cbd5e1] border border-[#232c3f] hover:bg-[#1a2130] hover:text-white font-mono text-xs transition-all"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#141822] text-[#cbd5e1] border border-[#232c3f] hover:bg-[#1a2130] hover:text-white font-mono text-xs transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>

          {/* Right Info Box */}
          <div className="lg:col-span-4 p-5 rounded-xl bg-[#11141c] border border-[#1e2536] space-y-3.5 text-xs font-mono">
            <div className="text-[#64748b] uppercase tracking-wider text-[11px] pb-2 border-b border-[#1c2331]">
              Availability &amp; Location
            </div>

            <div className="space-y-2.5 text-[#94a3b8]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span className="text-[#cbd5e1]">{PERSONAL_INFO.availability}</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#64748b] shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#64748b] shrink-0" />
                <span>{PERSONAL_INFO.timezone}</span>
              </div>
            </div>

            <div className="pt-2 border-t border-[#1c2331] text-[11px] text-[#64748b] leading-relaxed">
              Email langsung:{" "}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-[#cbd5e1] underline hover:text-white"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
