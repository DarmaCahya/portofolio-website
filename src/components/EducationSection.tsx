import { GraduationCap, Award, BookOpen, ExternalLink, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { EDUCATION_DATA, CERTIFICATIONS_DATA } from "@/data/portfolio";

export default function EducationSection() {
  return (
    <section id="education" className="py-12 md:py-16 border-b border-[#1b2230] bg-[#0c0e13]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2 text-xs font-mono tracking-widest uppercase text-[#64748b]">
              <span>05</span>
              <span className="text-[#334155]">/</span>
              <span>Academic &amp; Certifications</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#f8fafc]">
              Pendidikan &amp; Sertifikasi.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#94a3b8] max-w-md">
            Latar belakang akademis di Telkom University, Bandung beserta program pengembangan kompetensi dan sertifikasi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Education & Academic Projects (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {EDUCATION_DATA.map((edu, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-7 rounded-xl bg-[#11141c] border border-[#1e2536] hover:border-[#2a3449] transition-all space-y-4"
              >
                {/* Institution Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#1b2231]">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#38bdf8] mb-1">
                      <GraduationCap className="w-4 h-4 text-amber-400" />
                      <span>{edu.institution}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-[#f8fafc]">
                      {edu.degree}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono text-[#94a3b8]">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#64748b]" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed">
                  {edu.description}
                </p>

                {/* Relevant Coursework */}
                <div className="space-y-2 pt-1">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#64748b] flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-[#38bdf8]" />
                    <span>Focus Coursework</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="text-xs font-mono px-2 py-0.5 rounded bg-[#161d2b] text-[#cbd5e1] border border-[#232c3f]"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Academic Projects */}
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#64748b]">
                    Academic Projects &amp; Research:
                  </div>
                  <div className="space-y-2">
                    {edu.academicProjects.map((ap, apIdx) => (
                      <div
                        key={apIdx}
                        className="p-3 rounded-lg bg-[#0e1118] border border-[#1a2130] space-y-1"
                      >
                        <div className="flex items-center justify-between text-xs font-semibold text-[#f1f5f9]">
                          <span>{ap.title}</span>
                        </div>
                        <p className="text-xs text-[#94a3b8]">{ap.description}</p>
                        <div className="flex flex-wrap gap-1 pt-1">
                          {ap.tech.map((t) => (
                            <span key={t} className="text-[10px] font-mono text-[#38bdf8] bg-[#141b27] px-1.5 py-0.5 rounded border border-[#222e42]">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Right Column: Certifications & Specialized Programs (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-xl bg-[#11141c] border border-[#1e2536] space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#1b2231]">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#f8fafc]">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>Sertifikasi &amp; Program Cohort</span>
                </div>
                <span className="text-xs font-mono text-[#64748b]">0{CERTIFICATIONS_DATA.length}</span>
              </div>

              <div className="space-y-3">
                {CERTIFICATIONS_DATA.map((cert, cIdx) => (
                  <div
                    key={cIdx}
                    className="p-3 rounded-lg bg-[#0e1118] border border-[#1b2231] hover:border-[#283247] transition-all space-y-1"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-xs font-semibold text-[#f8fafc] leading-snug">
                        {cert.title}
                      </h4>
                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#38bdf8] hover:text-white transition-colors shrink-0"
                          title="Lihat Kredensial Sertifikat"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono text-[#94a3b8]">
                      <span>{cert.issuer}</span>
                      {cert.period && <span className="text-[#64748b]">{cert.period}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
