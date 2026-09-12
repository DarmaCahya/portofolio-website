import { EDUCATION_DATA, CERTIFICATIONS_DATA } from "@/data/portfolio";
import { GraduationCap, Award, ExternalLink, Calendar, MapPin } from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="py-20 md:py-24 border-b border-[#1c202c] bg-[#0d0f14]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3 text-xs font-mono tracking-widest uppercase text-[#38bdf8]">
              <span>Pendidikan &amp; Sertifikasi</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#f3f4f6]">
              Latar Belakang Akademis.
            </h2>
          </div>
          <p className="text-sm text-[#9ca3af] max-w-md font-sans leading-relaxed">
            Pendidikan formal jenjang sarjana informatika, program akselerasi industri, dan sertifikasi keahlian web.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Education (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {EDUCATION_DATA.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-xl bg-[#111319] border border-[#1c202c] hover:border-[#262c3d] transition-colors space-y-5"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#1c202c]">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <GraduationCap className="w-4 h-4 text-[#38bdf8]" />
                      <span className="text-xs font-mono text-[#38bdf8] font-semibold">
                        S1 Informatika
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#f3f4f6]">
                      {edu.institution}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-[#6b7280]">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#9ca3af] leading-relaxed">
                  {edu.description}
                </p>

                {/* Academic Projects */}
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#6b7280]">
                    Proyek Akademis Utama:
                  </div>
                  <div className="space-y-2.5">
                    {edu.academicProjects.map((proj, pIdx) => (
                      <div key={pIdx} className="p-3 rounded-lg bg-[#161922] border border-[#232938] space-y-1">
                        <div className="text-xs font-semibold text-[#f3f4f6]">
                          {proj.title}
                        </div>
                        <p className="text-xs text-[#9ca3af] leading-relaxed">
                          {proj.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Certifications & Programs (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-xl bg-[#111319] border border-[#1c202c] space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-[#1c202c]">
                <Award className="w-4 h-4 text-[#38bdf8]" />
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#f3f4f6]">
                  Sertifikasi &amp; Program Mentorship
                </h3>
              </div>

              <div className="space-y-3">
                {CERTIFICATIONS_DATA.map((cert, cIdx) => (
                  <div
                    key={cIdx}
                    className="p-3 rounded-lg bg-[#161922] border border-[#232938] flex items-center justify-between gap-3 text-xs"
                  >
                    <div className="space-y-1">
                      <div className="font-semibold text-[#e5e7eb]">
                        {cert.title}
                      </div>
                      <div className="font-mono text-[#6b7280] text-[11px]">
                        {cert.issuer} {cert.period ? `· ${cert.period}` : ""}
                      </div>
                    </div>

                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded bg-[#111319] text-[#38bdf8] hover:text-white border border-[#232938] shrink-0 transition-colors"
                        title="Lihat Sertifikat"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
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
