import { EXPERIENCE_ITEMS } from "@/data/portfolio";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-12 md:py-16 border-b border-[#1b2230] bg-[#0c0e13]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2 text-xs font-mono tracking-widest uppercase text-[#64748b]">
              <span>04</span>
              <span className="text-[#334155]">/</span>
              <span>Trajectory</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#f8fafc]">
              Experience &amp; Work.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#94a3b8] max-w-md">
            Pengalaman kerja profesional dan kontribusi proyek riil di lingkungan tim pengembang.
          </p>
        </div>

        {/* Editorial Experience Timeline Block */}
        <div className="space-y-6">
          {EXPERIENCE_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="relative p-5 sm:p-7 rounded-xl bg-[#11141c] border border-[#1e2536] hover:border-[#2a3449] transition-all"
            >
              {/* Top Row: Role, Company, Period */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-4 border-b border-[#1b2231]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#38bdf8] mb-1">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>{item.company}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#f8fafc]">
                    {item.role}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#94a3b8]">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#64748b]" />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#64748b]" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              {/* Middle: Summary description */}
              <p className="py-4 text-xs sm:text-sm text-[#cbd5e1] leading-relaxed">
                {item.description}
              </p>

              {/* Responsibilities / Impact Bullets */}
              <div className="space-y-2 pt-1">
                <div className="text-xs font-mono uppercase tracking-wider text-[#64748b]">
                  Pekerjaan &amp; Tanggung Jawab Kunci:
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {item.bullets.map((bullet, bIdx) => (
                    <div
                      key={bIdx}
                      className="p-2.5 rounded-lg bg-[#0e1118] border border-[#1a2130] flex items-start gap-2 text-xs text-[#94a3b8] leading-relaxed"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack tags */}
              <div className="pt-4 mt-4 border-t border-[#1b2231] flex flex-wrap items-center gap-1.5">
                <span className="text-xs font-mono text-[#64748b] mr-1.5">Environment:</span>
                {item.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2 py-0.5 rounded bg-[#161d2b] text-[#cbd5e1] border border-[#232c3f]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
