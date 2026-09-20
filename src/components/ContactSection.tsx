"use client";

import { Icon } from "@iconify/react";
import { PERSONAL_INFO } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-section-linear-2 bg-stripe-pattern border-b border-[#1c202c] relative overflow-hidden">
      {/* Soft Vignette Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#090a0d_95%)] pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as const }}
          className="rounded-2xl bg-[#111319]/90 border border-[#232938] backdrop-blur-md p-8 sm:p-12 lg:p-16 text-center space-y-8 max-w-4xl mx-auto shadow-2xl relative overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#38bdf8]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Section Header */}
          <div className="space-y-4 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161922] border border-[#232938] text-xs font-mono text-[#38bdf8]">
              <Icon icon="lucide:message-square" className="w-3.5 h-3.5" />
              <span>Contact &amp; Discussion</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#f3f4f6]">
              Mari Berkolaborasi.
            </h2>

            <p className="text-sm sm:text-base text-[#9ca3af] leading-relaxed font-sans">
              Tertarik berdiskusi tentang project pengembangan frontend, pembuatan website company profile, atau integrasi API? Saya selalu terbuka untuk komunikasi profesional.
            </p>
          </div>

          {/* Contact Action Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4 max-w-3xl mx-auto text-xs font-mono">
            {/* Email */}
            <motion.a
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-4 rounded-xl bg-[#161922] border border-[#232938] hover:border-[#38bdf8]/50 text-[#e5e7eb] flex items-center justify-between group transition-all shadow-md"
            >
              <div className="flex items-center gap-3">
                <Icon icon="lucide:mail" className="w-4 h-4 text-[#38bdf8]" />
                <span>Email Saya</span>
              </div>
              <Icon icon="lucide:arrow-up-right" className="w-4 h-4 text-[#6b7280] group-hover:text-[#38bdf8] transition-colors" />
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-[#161922] border border-[#232938] hover:border-[#38bdf8]/50 text-[#e5e7eb] flex items-center justify-between group transition-all shadow-md"
            >
              <div className="flex items-center gap-3">
                <Icon icon="logos:linkedin" className="w-4 h-4" />
                <span>LinkedIn</span>
              </div>
              <Icon icon="lucide:arrow-up-right" className="w-4 h-4 text-[#6b7280] group-hover:text-[#38bdf8] transition-colors" />
            </motion.a>

            {/* GitHub */}
            <motion.a
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-[#161922] border border-[#232938] hover:border-[#38bdf8]/50 text-[#e5e7eb] flex items-center justify-between group transition-all shadow-md"
            >
              <div className="flex items-center gap-3">
                <Icon icon="logos:github-icon" className="w-4 h-4" />
                <span>GitHub Profil</span>
              </div>
              <Icon icon="lucide:arrow-up-right" className="w-4 h-4 text-[#6b7280] group-hover:text-[#38bdf8] transition-colors" />
            </motion.a>
          </div>

          <div className="pt-2 text-xs font-mono text-[#6b7280]">
            Atau hubungi via WhatsApp:{" "}
            <a
              href={`https://wa.me/${PERSONAL_INFO.phone.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#cbd5e1] hover:text-[#38bdf8] underline underline-offset-4"
            >
              {PERSONAL_INFO.phone}
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

