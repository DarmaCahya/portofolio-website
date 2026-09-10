"use client";

import { useState } from "react";
import Link from "next/link";
import { PROJECTS, Project } from "@/data/portfolio";
import { ExternalLink, ArrowRight, ArrowUpRight, Search, Filter, QrCode, HeartPulse, Layers } from "lucide-react";
import ProjectDetailModal from "./ProjectDetailModal";

interface ProjectsSectionProps {
  isHomePage?: boolean;
}

export default function ProjectsSection({ isHomePage = true }: ProjectsSectionProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const displayProjects = isHomePage
    ? PROJECTS.filter((p) => p.featured)
    : PROJECTS;

  const featuredProject = displayProjects.find((p) => p.id === "bni-ventures-duluin") || displayProjects[0];
  const secondaryProject = displayProjects.find((p) => p.id === "qr-hunt") || displayProjects[1];
  const editorialProject = displayProjects.find((p) => p.id === "medika-one") || displayProjects[2];
  const remainingProjects = displayProjects.filter(
    (p) => !["bni-ventures-duluin", "qr-hunt", "medika-one"].includes(p.id)
  );

  return (
    <section id="projects" className="py-12 md:py-16 border-b border-[#1b2230] abstract-pattern-bg">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2 text-xs font-mono tracking-widest uppercase text-[#64748b]">
              <span>03</span>
              <span className="text-[#334155]">/</span>
              <span>Selected Work</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#f8fafc]">
              {isHomePage ? "Things I've built." : "All Projects & Experiments."}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#94a3b8] max-w-md">
            {isHomePage
              ? "Sekilas proyek pilihan mencakup aplikasi web produksi, platform klien corporate, dan sistem integrasi API."
              : "Koleksi lengkap proyek produksi, aplikasi freelance, hasil tugas akhir, dan eksperimen otomasi."}
          </p>
        </div>

        {/* PROJECTS COLLECTION WITH ASYMMETRIC / EDITORIAL LAYOUTS */}
        <div className="space-y-8">

          {/* 1. LARGE FEATURED PROJECT: BNI Ventures & Duluin Platforms */}
          {featuredProject && (
            <div className="rounded-xl bg-[#10141d] border border-[#202737] hover:border-[#2d3950] transition-all overflow-hidden group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                
                {/* Left Column: Project Info */}
                <div className="lg:col-span-7 p-5 sm:p-7 flex flex-col justify-between space-y-5">
                  <div className="space-y-3.5">
                    <div className="flex items-center gap-3">
                      <span className="px-2.5 py-0.5 rounded bg-[#182030] text-[#38bdf8] text-xs font-mono border border-[#253248]">
                        Utama / Production
                      </span>
                      <span className="text-xs font-mono text-[#64748b]">
                        {featuredProject.category}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-semibold text-[#f8fafc] group-hover:text-white transition-colors">
                      {featuredProject.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                      {featuredProject.description}
                    </p>

                    {/* Key Contributions */}
                    <div className="space-y-1.5 pt-1">
                      <div className="text-xs font-mono uppercase tracking-wider text-[#cbd5e1]">
                        Pengembangan Kunci:
                      </div>
                      <ul className="space-y-1 text-xs text-[#94a3b8]">
                        {featuredProject.keyContributions.slice(0, 3).map((contrib, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-emerald-400 font-mono mt-0.5">↳</span>
                            <span>{contrib}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {featuredProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono px-2 py-0.5 rounded bg-[#161c28] text-[#cbd5e1] border border-[#232c3f]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Actions */}
                  <div className="pt-3 border-t border-[#1c2332] flex items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(featuredProject)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[#f1f5f9] hover:text-[#38bdf8] font-medium transition-colors"
                    >
                      <span>Detail Studi Kasus</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>

                    <span className="text-xs font-mono text-[#64748b]">Duluin Group</span>
                  </div>
                </div>

                {/* Right Column: UI Wireframe Simulation */}
                <div className="lg:col-span-5 bg-[#0b0e14] p-5 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-[#1f2738]">
                  <div className="rounded-lg bg-[#121620] border border-[#232c3f] p-3.5 text-xs font-mono space-y-2.5 shadow-inner">
                    <div className="flex items-center justify-between pb-2 border-b border-[#1c2332] text-[#64748b]">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#ef4444]/60" />
                        <span className="w-2 h-2 rounded-full bg-[#f59e0b]/60" />
                        <span className="w-2 h-2 rounded-full bg-[#10b981]/60" />
                      </div>
                      <span className="text-[10px] text-[#94a3b8]">bni-ventures.co.id</span>
                    </div>

                    <div className="p-2.5 rounded bg-[#151a26] border border-[#253047] space-y-1">
                      <div className="flex items-center justify-between text-xs font-semibold text-[#f1f5f9]">
                        <span>BNI Ventures Portal</span>
                        <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/40">Connected API</span>
                      </div>
                      <p className="text-[11px] text-[#94a3b8]">Integrasi antarmuka frontend dengan RESTful API</p>
                    </div>

                    <div className="p-2.5 rounded bg-[#121622] border border-[#1e2738] text-[11px] text-[#94a3b8] flex items-center justify-between">
                      <span>Whistleblowing System (WBS)</span>
                      <span className="text-[#64748b]">Secure Report</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* 2 & 3. TWO-COLUMN ASYMMETRIC GRID: QR Hunt & MedikaOne */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* QR Hunt (7 Cols) */}
            {secondaryProject && (
              <div className="lg:col-span-7 rounded-xl bg-[#10141d] border border-[#202737] hover:border-[#2d3950] p-5 sm:p-7 flex flex-col justify-between transition-all group">
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase text-[#38bdf8]">
                      {secondaryProject.category}
                    </span>
                    <span className="text-xs font-mono text-[#64748b]">
                      {secondaryProject.role}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-[#f8fafc] group-hover:text-white transition-colors">
                    {secondaryProject.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                    {secondaryProject.description}
                  </p>

                  <div className="p-3 rounded-lg bg-[#0b0e14] border border-[#1d2434] font-mono text-xs flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <QrCode className="w-4 h-4 text-[#38bdf8]" />
                      <span className="text-[#f1f5f9] text-xs">qrhunt.communal.id</span>
                    </div>
                    <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                      Live
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {secondaryProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2 py-0.5 rounded bg-[#161c28] text-[#cbd5e1] border border-[#232c3f]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[#1c2332] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(secondaryProject)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#f1f5f9] hover:text-[#38bdf8] transition-colors"
                  >
                    <span>Lihat Detail</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-xs font-mono text-[#64748b]">Freelance</span>
                </div>
              </div>
            )}

            {/* MedikaOne (5 Cols) */}
            {editorialProject && (
              <div className="lg:col-span-5 rounded-xl bg-[#10141d] border border-[#202737] hover:border-[#2d3950] p-5 sm:p-7 flex flex-col justify-between transition-all group">
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase text-[#10b981]">
                      {editorialProject.category}
                    </span>
                    <span className="text-xs font-mono text-[#64748b]">
                      {editorialProject.role}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-[#f8fafc] group-hover:text-white transition-colors">
                    {editorialProject.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                    {editorialProject.description}
                  </p>

                  <div className="p-3 rounded-lg bg-[#0b0e14] border border-[#1d2434] flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-2 text-[#cbd5e1]">
                      <HeartPulse className="w-4 h-4 text-emerald-400" />
                      <span>medikaone.com</span>
                    </div>
                    <span className="text-emerald-400">Responsive UI</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {editorialProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2 py-0.5 rounded bg-[#161c28] text-[#cbd5e1] border border-[#232c3f]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[#1c2332] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(editorialProject)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#f1f5f9] hover:text-[#10b981] transition-colors"
                  >
                    <span>Lihat Detail</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-xs font-mono text-[#64748b]">HealthTech UI</span>
                </div>
              </div>
            )}

          </div>

          {/* Remaining Projects (Shown on full projects page or remaining list) */}
          {remainingProjects.length > 0 && (
            <div className="space-y-4 pt-2">
              <div className="text-xs font-mono uppercase tracking-wider text-[#64748b]">
                Proyek &amp; Eksperimen Tambahan:
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {remainingProjects.map((p) => (
                  <div
                    key={p.id}
                    className="rounded-xl bg-[#0f121a] border border-[#1e2637] hover:border-[#2a354c] p-5 flex flex-col justify-between space-y-3 transition-all"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs font-mono text-[#64748b]">
                        <span className="text-[#38bdf8]">{p.category}</span>
                        <span>{p.role}</span>
                      </div>
                      <h4 className="text-base font-semibold text-[#f8fafc]">
                        {p.name}
                      </h4>
                      <p className="text-xs text-[#94a3b8]">
                        {p.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {p.tags.map((t) => (
                          <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#161c28] text-[#cbd5e1] border border-[#232c3f]">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedProject(p)}
                      className="inline-flex items-center gap-1 text-xs font-mono text-[#cbd5e1] hover:text-white pt-2 transition-colors"
                    >
                      <span>Lihat Detail Proyek</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA Link to Dedicated Projects Page on Home Page */}
          {isHomePage && (
            <div className="pt-6 flex justify-center">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-md bg-[#131822] text-[#f1f5f9] border border-[#273248] hover:bg-[#1a2130] hover:border-[#384869] font-mono text-xs uppercase tracking-wider transition-all shadow-sm group"
              >
                <span>Lihat Semua Proyek &amp; Eksperimen ({PROJECTS.length})</span>
                <ArrowRight className="w-4 h-4 text-[#38bdf8] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          )}

        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
