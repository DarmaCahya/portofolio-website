import { GraduationCap, Briefcase, CheckCircle2, Award } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";

export default function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-16 border-b border-[#1b2230] bg-[#0c0e13]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Section Header Label */}
        <div className="flex items-center gap-2 mb-3 text-xs font-mono tracking-widest uppercase text-[#64748b]">
          <span>01</span>
          <span className="text-[#334155]">/</span>
          <span>Personal Narrative</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Narrative Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#f8fafc]">
              A little about me.
            </h2>

            {/* Introduction Paragraphs */}
            <div className="space-y-3.5 text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
              <p>
                Halo! Nama saya <strong className="text-[#f1f5f9] font-medium">I Made Darma Cahya Adyatma</strong> (akrab dipanggil <strong className="text-[#f1f5f9] font-medium">Darma Cahya</strong>). Saya adalah lulusan <strong className="text-[#cbd5e1] font-medium">S1 Informatika dari Telkom University, Bandung</strong> (2021–2025) dengan minat besar pada pengembangan aplikasi web.
              </p>

              <p>
                Saat ini saya bekerja sebagai <strong className="text-[#cbd5e1] font-medium">Website Developer di Duluin Group, Bandung</strong>. Dalam perjalanan profesional saya, fokus dan spesialisasi saya berpusat pada <strong className="text-[#38bdf8] font-medium">Frontend Development</strong> — membangun antarmuka web yang responsif, intuitif, cepat, serta mudah dipelihara menggunakan stack modern seperti <strong className="text-[#cbd5e1] font-medium">React, Next.js, TypeScript, dan Tailwind CSS</strong>.
              </p>

              <p>
                Meskipun fokus utama saya di bidang frontend, saya memiliki pengalaman fullstack &amp; backend yang solid (Laravel, Express.js, REST API, serta lulusan Bangkit Academy 2024 Cloud Computing Cohort by Google, GoTo, Traveloka). Pemahaman menyeluruh ini membantu saya merancang arsitektur komponen frontend yang selaras dengan struktur API backend.
              </p>
            </div>

            {/* Core Competency Highlights */}
            <div className="pt-2">
              <div className="text-xs font-mono uppercase tracking-wider text-[#cbd5e1] mb-2.5">
                Spesialisasi &amp; Focus Area:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-[#cbd5e1]">
                <div className="p-2.5 rounded bg-[#11151e] border border-[#1e2738] flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Frontend Architecture &amp; UI</span>
                </div>
                <div className="p-2.5 rounded bg-[#11151e] border border-[#1e2738] flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Responsive &amp; Mobile-First Layouts</span>
                </div>
                <div className="p-2.5 rounded bg-[#11151e] border border-[#1e2738] flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>REST API Client Integration</span>
                </div>
                <div className="p-2.5 rounded bg-[#11151e] border border-[#1e2738] flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Performance &amp; Clean Code</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Highlights & Education Box (5 Cols) */}
          <div className="lg:col-span-5 space-y-3.5">
            
            {/* Education Card */}
            <div className="p-4 rounded-xl bg-[#11151e] border border-[#20293a] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#38bdf8]">
                <GraduationCap className="w-4 h-4 text-amber-400" />
                <span>Pendidikan Formal</span>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#f8fafc]">
                  Telkom University, Bandung
                </h3>
                <p className="text-xs text-[#94a3b8] font-mono mt-0.5">
                  S1 Informatika · 2021 – 2025
                </p>
              </div>
              <p className="text-xs text-[#cbd5e1] leading-relaxed">
                Fokus studi: Sistem Basis Data, Analisis &amp; Perancangan Perangkat Lunak, Pemrograman Web Lanjut.
              </p>
            </div>

            {/* Current Career Status */}
            <div className="p-4 rounded-xl bg-[#11151e] border border-[#20293a] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#10b981]">
                <Briefcase className="w-4 h-4 text-emerald-400" />
                <span>Posisi Saat Ini</span>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#f8fafc]">
                  Website Developer (PKWT)
                </h3>
                <p className="text-xs text-[#94a3b8] font-mono mt-0.5">
                  Duluin Group — Bandung (Jan 2026 – Present)
                </p>
              </div>
              <p className="text-xs text-[#cbd5e1] leading-relaxed">
                Mengembangkan platform web BNI Ventures, Satu Creative, Whistleblowing System, serta 10+ corporate profiles.
              </p>
            </div>

            {/* Program Milestones Badges */}
            <div className="p-3.5 rounded-xl bg-[#0f121a] border border-[#1b2230] space-y-2 text-xs font-mono">
              <div className="text-[#64748b] uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>Program &amp; Sertifikasi</span>
              </div>
              <div className="space-y-1.5 text-[#cbd5e1] text-[11px]">
                <div className="flex items-center justify-between">
                  <span>Bangkit Academy 2024</span>
                  <span className="text-[#64748b] text-[10px]">Cloud Computing</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Telkom Indonesia Digistar</span>
                  <span className="text-[#64748b] text-[10px]">Backend Mentee</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
