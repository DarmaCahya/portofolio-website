import { EXPERIENCE_ITEMS } from "@/data/portfolio";
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-12 md:py-16 border-b border-[#1b2230] bg-[#0c0e13]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
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
            Rekam jejak pengalaman kerja profesional, perkembangan peran internal, dan kontribusi proyek nyata di lingkungan tim pengembang.
          </p>
        </div>

        {/* Timeline Container with Left Main Connecting Line */}
        <div className="relative border-l-2 border-[#1e2738] ml-2 sm:ml-4 pl-6 sm:pl-10 space-y-12">
          {EXPERIENCE_ITEMS.map((item, cIdx) => (
            <div key={cIdx} className="relative group">
              {/* Main Company Node Bullet */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#38bdf8] border-4 border-[#0c0e13] ring-2 ring-[#38bdf8]/40 shadow-sm" />

              {/* Company Header */}
              <div className="mb-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded bg-[#161f2e] text-[#38bdf8] border border-[#233147]">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#f8fafc]">
                      {item.company}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono text-[#94a3b8]">
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#131722] border border-[#202737]">
                      <Calendar className="w-3.5 h-3.5 text-[#38bdf8]" />
                      <span className="text-[#e2e8f0] font-semibold">{item.totalPeriod}</span>
                    </div>
                    <div className="flex items-center gap-1.5 hidden sm:flex">
                      <MapPin className="w-3.5 h-3.5 text-[#64748b]" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#94a3b8] mt-2 max-w-3xl leading-relaxed">
                  {item.overallDescription}
                </p>
              </div>

              {/* Nested Roles Timeline (Connecting line between roles in the same company) */}
              <div className="relative border-l-2 border-[#1b2333] ml-3 sm:ml-4 pl-5 sm:pl-8 space-y-6 pt-2">
                {item.roles.map((role, rIdx) => (
                  <div key={rIdx} className="relative p-5 sm:p-6 rounded-xl bg-[#11141c] border border-[#1e2536] hover:border-[#2f3b52] transition-all space-y-4 shadow-sm">
                    
                    {/* Role Bullet Node on Sub-line */}
                    <div className="absolute -left-[27px] sm:-left-[39px] top-7 w-3 h-3 rounded-full bg-[#1e2738] border-2 border-[#38bdf8] group-hover:bg-[#38bdf8] transition-colors" />

                    {/* Role Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#1b2231] pb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#182030] text-[#38bdf8] border border-[#253248]">
                            {role.type}
                          </span>
                          <span className="text-xs font-mono text-[#64748b]">
                            {role.period}
                          </span>
                        </div>
                        <h4 className="text-lg font-semibold text-[#f8fafc]">
                          {role.roleTitle}
                        </h4>
                      </div>

                      {role.description && (
                        <p className="text-xs text-[#94a3b8] sm:max-w-xs italic">
                          {role.description}
                        </p>
                      )}
                    </div>

                    {/* Bullets List */}
                    <div className="space-y-2">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-[#64748b] flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-[#38bdf8]" />
                        <span>Kontribusi &amp; Tanggung Jawab:</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {role.bullets.map((bullet, bIdx) => (
                          <div
                            key={bIdx}
                            className="p-2.5 rounded-lg bg-[#0e1118] border border-[#1a2130] flex items-start gap-2 text-xs text-[#cbd5e1] leading-relaxed"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981] shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="pt-2 flex flex-wrap items-center gap-1.5">
                      <span className="text-[11px] font-mono text-[#64748b] mr-1">Stack:</span>
                      {role.techStack.map((tech) => (
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
          ))}
        </div>

      </div>
    </section>
  );
}
