import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/data/portfolio";
import { ArrowLeft, ExternalLink, CheckCircle2, Sparkles, UserCheck, Layers, ArrowRight, Code2, Globe } from "lucide-react";

interface ProjectDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const resolvedParams = await params;
  const project = PROJECTS.find((p) => p.id === resolvedParams.id);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.name} — Darma Cahya Portfolio`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const resolvedParams = await params;
  const project = PROJECTS.find((p) => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

  const relatedProjects = PROJECTS.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <div className="flex min-h-screen flex-col bg-[#090a0d] text-[#e5e7eb]">
      <main className="flex-1 pt-24">
        
        {/* Top Header Banner */}
        <div className="border-b border-[#1c202c] bg-section-linear-1 bg-grid-pattern relative overflow-hidden py-12 md:py-16">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_30%,#090a0d_95%)] pointer-events-none" />

          <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 space-y-6">
            
            {/* Back Link */}
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#9ca3af] hover:text-[#38bdf8] transition-colors py-1 px-3 rounded-md bg-[#111319]/80 border border-[#1c202c]"
            >
              <ArrowLeft className="w-4 h-4 text-[#38bdf8]" />
              <span>← Kembali ke Projects</span>
            </Link>

            {/* Badges & Category */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#161922] text-[#38bdf8] border border-[#232938] font-semibold">
                {project.category}
              </span>
              <span className="text-xs font-mono text-[#6b7280]">|</span>
              <span className="text-xs font-mono text-[#cbd5e1] flex items-center gap-1.5">
                <UserCheck className="w-3.5 h-3.5 text-[#38bdf8]" />
                {project.role}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#f3f4f6] max-w-4xl leading-tight">
              {project.name}
            </h1>

            {/* Tagline */}
            <p className="text-sm sm:text-base text-[#9ca3af] max-w-3xl leading-relaxed">
              {project.description}
            </p>

            {/* Action Links */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#38bdf8] hover:bg-[#7dd3fc] text-[#090a0d] font-mono text-xs font-semibold transition-all shadow-lg hover:shadow-cyan-500/20"
                >
                  <span>Kunjungi Live Website</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#111319] hover:bg-[#161922] text-[#f3f4f6] border border-[#232938] font-mono text-xs font-medium transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span>Repository GitHub</span>
                </a>
              )}
            </div>

          </div>
        </div>

        {/* Content Body Grid */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Main Column: Full Case Study & Technical Details (8 cols) */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Overview Block */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#111319]/90 border border-[#1c202c] backdrop-blur-sm space-y-4 shadow-xl">
                <h2 className="text-base sm:text-lg font-mono font-bold text-[#f3f4f6] flex items-center gap-2.5 border-b border-[#1c202c] pb-3">
                  <Sparkles className="w-4 h-4 text-[#38bdf8]" />
                  <span>Gambaran Umum &amp; Arsitektur Project</span>
                </h2>
                <p className="text-sm text-[#cbd5e1] leading-relaxed whitespace-pre-line font-sans">
                  {project.longDescription || project.description}
                </p>
              </div>

              {/* Key Contributions List */}
              {project.keyContributions && project.keyContributions.length > 0 && (
                <div className="p-6 sm:p-8 rounded-2xl bg-[#111319]/90 border border-[#1c202c] backdrop-blur-sm space-y-5 shadow-xl">
                  <h2 className="text-base sm:text-lg font-mono font-bold text-[#f3f4f6] flex items-center gap-2.5 border-b border-[#1c202c] pb-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Kontribusi Pengembang &amp; Eksekusi Teknis</span>
                  </h2>
                  <div className="space-y-3">
                    {project.keyContributions.map((contrib, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-[#161922] border border-[#232938] flex items-start gap-3.5 text-xs sm:text-sm text-[#cbd5e1] leading-relaxed"
                      >
                        <span className="text-[#38bdf8] font-mono font-semibold shrink-0 mt-0.5">0{idx + 1}.</span>
                        <span>{contrib}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack Used */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#111319]/90 border border-[#1c202c] backdrop-blur-sm space-y-4 shadow-xl">
                <h2 className="text-base sm:text-lg font-mono font-bold text-[#f3f4f6] flex items-center gap-2.5 border-b border-[#1c202c] pb-3">
                  <Layers className="w-4 h-4 text-[#38bdf8]" />
                  <span>Teknologi &amp; Tools yang Digunakan</span>
                </h2>
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-3 py-1.5 rounded-lg bg-[#161922] text-[#cbd5e1] border border-[#232938]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Project Sidebar Meta Info (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Metadata Card */}
              <div className="p-6 rounded-2xl bg-[#111319]/90 border border-[#1c202c] backdrop-blur-sm space-y-4 font-mono text-xs shadow-xl">
                <div className="pb-3 border-b border-[#1c202c] font-semibold text-[#f3f4f6] text-sm">
                  Ringkasan Informasi Project
                </div>

                <div className="space-y-3 text-[#9ca3af]">
                  <div className="flex justify-between py-1.5 border-b border-[#1c202c]">
                    <span className="text-[#6b7280]">Kategori:</span>
                    <span className="text-[#f3f4f6] font-medium">{project.category}</span>
                  </div>

                  <div className="flex justify-between py-1.5 border-b border-[#1c202c]">
                    <span className="text-[#6b7280]">Peran Pengembang:</span>
                    <span className="text-[#38bdf8] font-medium">{project.role}</span>
                  </div>

                  {project.stats && project.stats.map((st, sIdx) => (
                    <div key={sIdx} className="flex justify-between py-1.5 border-b border-[#1c202c]">
                      <span className="text-[#6b7280]">{st.label}:</span>
                      <span className="text-[#f3f4f6] font-medium">{st.value}</span>
                    </div>
                  ))}
                </div>

                {project.liveUrl && (
                  <div className="pt-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#161922] text-[#38bdf8] border border-[#232938] hover:bg-[#1e2430] font-semibold transition-colors"
                    >
                      <span>Buka Live Website</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>

              {/* Related Projects Navigation */}
              <div className="p-6 rounded-2xl bg-[#111319]/90 border border-[#1c202c] backdrop-blur-sm space-y-4 shadow-xl">
                <div className="font-mono font-semibold text-[#f3f4f6] text-xs uppercase tracking-wider">
                  Projects Lainnya:
                </div>
                <div className="space-y-3">
                  {relatedProjects.map((rel) => (
                    <Link
                      key={rel.id}
                      href={`/projects/${rel.id}`}
                      className="block p-3.5 rounded-xl bg-[#161922] border border-[#232938] hover:border-[#38bdf8]/50 transition-all group"
                    >
                      <div className="text-xs font-semibold text-[#f3f4f6] group-hover:text-[#38bdf8] transition-colors flex items-center justify-between">
                        <span>{rel.name}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#6b7280] group-hover:text-[#38bdf8] transition-transform group-hover:translate-x-0.5" />
                      </div>
                      <div className="text-[10px] font-mono text-[#6b7280] mt-1">
                        {rel.category}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Contact CTA */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
