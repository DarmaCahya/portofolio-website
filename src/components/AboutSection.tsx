"use client";

import { Icon } from "@iconify/react";
import { PERSONAL_INFO } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section id="about" className="py-20 md:py-24 border-b border-[#1c202c] bg-section-linear-1 bg-grid-pattern relative overflow-hidden">
      {/* Subtle radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_30%,#090a0d_95%)] pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-3 text-xs font-mono tracking-widest uppercase text-[#38bdf8]"
        >
          <span>About Me</span>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start"
        >
          {/* Left Narrative Column (7 Cols) */}
          <motion.div variants={itemVariants} className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#f3f4f6]">
              Pendekatan &amp; Pengalaman.
            </h2>

            {/* Concise Narrative Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-[#9ca3af] leading-relaxed">
              <p>
                Saya <strong className="text-[#f3f4f6]">I Made Darma Cahya Adyatma</strong> (dikenal sebagai <strong className="text-[#f3f4f6]">Darma Cahya</strong>), lulusan <strong className="text-[#e5e7eb]">S1 Informatika Telkom University, Bandung</strong>.
              </p>

              <p>
                Saya memiliki beberapa pengalaman sebagai <strong className="text-[#f3f4f6]">Website Developer</strong> dalam membangun berbagai situs web produksi dan aplikasi web. Spesialisasi saya berfokus pada pengembangan antarmuka <strong className="text-[#38bdf8]">Frontend (Next.js, React, TypeScript, Tailwind CSS)</strong> serta pengalaman menggunakan <strong className="text-[#38bdf8]">Laravel</strong> dalam pembuatan website <strong className="text-[#f3f4f6]">Company Profile</strong> perusahaan dan sistem informasi klien.
              </p>
            </div>

            {/* Focus List */}
            <div className="pt-4 border-t border-[#1c202c]">
              <div className="text-xs font-mono uppercase tracking-wider text-[#6b7280] mb-3">
                Fokus Utama Pengembangan:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-[#cbd5e1]">
                <div className="flex items-center gap-2 text-[#9ca3af] hover:text-[#38bdf8] transition-colors">
                  <span className="text-[#38bdf8]">→</span>
                  <span>Laravel &amp; Corporate Company Profiles</span>
                </div>
                <div className="flex items-center gap-2 text-[#9ca3af] hover:text-[#38bdf8] transition-colors">
                  <span className="text-[#38bdf8]">→</span>
                  <span>Frontend Architecture &amp; Modular UI</span>
                </div>
                <div className="flex items-center gap-2 text-[#9ca3af] hover:text-[#38bdf8] transition-colors">
                  <span className="text-[#38bdf8]">→</span>
                  <span>Responsive &amp; Mobile-First Layouts</span>
                </div>
                <div className="flex items-center gap-2 text-[#9ca3af] hover:text-[#38bdf8] transition-colors">
                  <span className="text-[#38bdf8]">→</span>
                  <span>REST API Integration &amp; Clean Code</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column Cards (5 Cols) */}
          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-5">
            
            {/* Education Summary */}
            <motion.div
              whileHover={{ y: -4, borderColor: "rgba(56, 189, 248, 0.4)" }}
              transition={{ duration: 0.3 }}
              className="p-5 rounded-xl bg-[#111319]/90 border border-[#1c202c] backdrop-blur-sm space-y-2 transition-colors shadow-lg"
            >
              <div className="text-xs font-mono uppercase tracking-wider text-[#38bdf8] flex items-center gap-2">
                <Icon icon="lucide:graduation-cap" className="w-4 h-4 text-[#38bdf8]" />
                <span>Pendidikan Akademis</span>
              </div>
              <h3 className="text-sm font-semibold text-[#f3f4f6]">
                Telkom University, Bandung
              </h3>
              <p className="text-xs font-mono text-[#6b7280]">
                S1 Informatika · 2021 – 2025
              </p>
              <p className="text-xs text-[#9ca3af] leading-relaxed pt-1">
                Studi rekayasa perangkat lunak, sistem basis data, dan pemrograman web.
              </p>
            </motion.div>

            {/* Certification Milestones */}
            <motion.div
              whileHover={{ y: -4, borderColor: "rgba(56, 189, 248, 0.4)" }}
              transition={{ duration: 0.3 }}
              className="p-4 rounded-xl bg-[#111319]/90 border border-[#1c202c] backdrop-blur-sm space-y-2 text-xs font-mono shadow-lg transition-colors"
            >
              <div className="text-[#6b7280] text-[11px] uppercase tracking-wider flex items-center gap-1.5 pb-2 border-b border-[#1c202c]">
                <Icon icon="lucide:award" className="w-3.5 h-3.5 text-[#9ca3af]" />
                <span>Program &amp; Mentorship</span>
              </div>
              <div className="space-y-2 text-[#cbd5e1] text-[11px] pt-1">
                <div className="flex items-center justify-between">
                  <span>Bangkit Academy 2024</span>
                  <span className="text-[#6b7280]">Cloud Computing</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Telkom Indonesia Digistar</span>
                  <span className="text-[#6b7280]">Backend Mentee</span>
                </div>
              </div>
            </motion.div>

          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}

