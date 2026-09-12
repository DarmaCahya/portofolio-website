"use client";

import { useState } from "react";
import Link from "next/link";
import { PROJECTS, Project } from "@/data/portfolio";
import { ArrowRight, ArrowUpRight, Search, ExternalLink, CheckCircle2, Layers } from "lucide-react";
import ProjectDetailModal from "./ProjectDetailModal";

interface ProjectsSectionProps {
  isHomePage?: boolean;
}

export default function ProjectsSection({ isHomePage = true }: ProjectsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedModalProject, setSelectedModalProject] = useState<Project | null>(null);

  // Categories list
  const categories = [
    "All",
    "Fintech & Corporate Platforms",
    "Event Attendance Platform",
    "Health Technology",
    "Bangkit Capstone Project",
    "Academic / Internal Platform",
    "Automation & AI Workflow",
  ];

  // Filter projects based on page type, search, and category
  const filteredProjects = PROJECTS.filter((project) => {
    if (isHomePage && !project.featured) return false;

    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;

    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

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
              {isHomePage ? "Things I've built." : "All Portfolio Projects."}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#94a3b8] max-w-md">
            {isHomePage
              ? "Kumpulan proyek pilihan mencakup aplikasi web produksi, platform klien corporate, dan sistem integrasi API."
              : "Koleksi lengkap proyek produksi, aplikasi freelance, hasil capstone akademis, dan eksperimen otomasi."}
          </p>
        </div>

        {/* Filter & Search Bar (Shown on Full Projects Page or when active) */}
        {!isHomePage && (
          <div className="mb-8 space-y-4">
            {/* Search Input */}
            <div className="relative max-w-md">
              <Search className="w-4 h-4 text-[#64748b] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cari berdasarkan nama proyek atau tech stack..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-[#11141c] border border-[#1e2536] text-xs font-mono text-[#e2e8f0] placeholder-[#64748b] focus:outline-none focus:border-[#38bdf8] transition-colors"
              />
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs font-mono px-3 py-1.5 rounded-md border transition-all ${
                    selectedCategory === cat
                      ? "bg-[#182030] text-[#38bdf8] border-[#38bdf8]/50 shadow-sm"
                      : "bg-[#11141c] text-[#94a3b8] border-[#1e2536] hover:border-[#2f3b52] hover:text-white"
                  }`}
                >
                  {cat === "All" ? "Semua Proyek" : cat}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* UNIFORM CLEAN CARDS GRID */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative rounded-xl bg-[#10141d] border border-[#1e2536] hover:border-[#38bdf8]/50 hover:bg-[#131926] p-6 flex flex-col justify-between transition-all duration-300 shadow-sm"
              >
                <div className="space-y-4">
                  {/* Top Category Badge & Action Header */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-[#161d2b] text-[#38bdf8] border border-[#232c3f] font-medium">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-mono text-[#64748b]">
                      {project.role}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-lg font-bold text-[#f8fafc] group-hover:text-[#38bdf8] transition-colors flex items-center justify-between">
                      <span>{project.name}</span>
                      <ArrowUpRight className="w-4 h-4 text-[#64748b] group-hover:text-[#38bdf8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#94a3b8] leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Key Contributions List */}
                  {project.keyContributions && project.keyContributions.length > 0 && (
                    <div className="space-y-1 pt-1">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-[#64748b]">
                        Poin Kunci:
                      </div>
                      <ul className="space-y-1 text-xs text-[#cbd5e1]">
                        {project.keyContributions.slice(0, 2).map((contrib, idx) => (
                          <li key={idx} className="flex items-start gap-1.5 text-[11px] text-[#94a3b8]">
                            <span className="text-emerald-400 font-mono mt-0.5">✓</span>
                            <span className="line-clamp-1">{contrib}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#161c28] text-[#cbd5e1] border border-[#202737]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Bottom Bar */}
                <div className="pt-4 mt-5 border-t border-[#1b2231] flex items-center justify-between text-xs font-mono">
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center gap-1.5 text-[#f1f5f9] hover:text-[#38bdf8] font-medium transition-colors"
                  >
                    <span>Detail Studi Kasus</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#38bdf8]" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => setSelectedModalProject(project)}
                    className="text-[#64748b] hover:text-[#cbd5e1] text-[11px] underline underline-offset-2"
                  >
                    Quick View
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 text-center rounded-xl bg-[#10141d] border border-[#1e2536] font-mono text-xs text-[#64748b]">
            Tidak ada proyek yang sesuai dengan kriteria pencarian.
          </div>
        )}

        {/* CTA Link to Full Projects List Page on Home Page */}
        {isHomePage && (
          <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#1b2230] mt-10">
            <p className="text-xs sm:text-sm font-mono text-[#94a3b8]">
              Menampilkan {filteredProjects.length} dari {PROJECTS.length} total proyek &amp; eksperimen.
            </p>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg bg-[#141a26] text-[#f1f5f9] border border-[#273248] hover:bg-[#1a2233] hover:border-[#38bdf8]/60 font-mono text-xs uppercase tracking-wider transition-all shadow-sm group"
            >
              <span>Buka List Portofolio Lengkap</span>
              <ArrowRight className="w-4 h-4 text-[#38bdf8] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}

      </div>

      {/* Quick View Modal */}
      <ProjectDetailModal
        project={selectedModalProject}
        onClose={() => setSelectedModalProject(null)}
      />
    </section>
  );
}
