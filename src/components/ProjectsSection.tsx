"use client";

import { useState } from "react";
import Link from "next/link";
import { PROJECTS, Project } from "@/data/portfolio";
import { ArrowRight, ExternalLink, Search, Sparkles, Layers, Code2, Globe } from "lucide-react";
import ProjectDetailModal from "./ProjectDetailModal";

interface ProjectsSectionProps {
  isHomePage?: boolean;
}

export default function ProjectsSection({ isHomePage = true }: ProjectsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedModalProject, setSelectedModalProject] = useState<Project | null>(null);

  const categories = [
    "All",
    "Company Profile",
    "Template Fullstack & CMS",
    "Platform Fintek & Korporat",
    "Platform Presensi Event",
    "Teknologi Kesehatan",
    "Proyek Capstone Bangkit",
    "Platform Akademis & Internal",
    "Otomasi & AI Workflow",
  ];

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
    <section id="projects" className="py-20 md:py-24 border-b border-[#1c202c] bg-section-linear-3 bg-grid-pattern relative overflow-hidden">
      {/* Subtle Radial Gradient Vignette Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#090a0d_90%)] pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3 text-xs font-mono tracking-widest uppercase text-[#38bdf8]">
              <span>Featured Projects</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#f3f4f6]">
              {isHomePage ? "Projects Terpilih." : "Koleksi Lengkap Portofolio."}
            </h2>
          </div>
          <p className="text-sm text-[#9ca3af] max-w-md font-sans leading-relaxed">
            {isHomePage
              ? "Studi kasus aplikasi web produksi, website company profile, template Next.js fullstack, dan pengintegrasian API."
              : "Arsip project produksi, template fullstack, aplikasi freelance, dan eksperimen otomasi."}
          </p>
        </div>

        {/* Filter & Search Bar (Only on full archive page) */}
        {!isHomePage && (
          <div className="mb-10 space-y-4">
            <div className="relative max-w-md">
              <Search className="w-4 h-4 text-[#6b7280] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cari nama project atau teknologi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-[#111319]/90 border border-[#1c202c] backdrop-blur-sm text-xs font-mono text-[#e5e7eb] placeholder-[#6b7280] focus:outline-none focus:border-[#38bdf8] transition-colors"
              />
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs font-mono px-3 py-1.5 rounded-md border transition-all ${
                    selectedCategory === cat
                      ? "bg-[#161922] text-[#38bdf8] border-[#38bdf8]/50 font-semibold"
                      : "bg-[#111319]/90 text-[#9ca3af] border-[#1c202c] hover:text-white"
                  }`}
                >
                  {cat === "All" ? "Semua Projects" : cat}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* CLEAN, UNCLUTTERED COMPACT CARD GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-[#111319]/90 border border-[#1c202c] hover:border-[#38bdf8]/50 backdrop-blur-sm overflow-hidden flex flex-col justify-between transition-all duration-300 group shadow-lg"
            >
              <div>
                {/* PREVIEW HEADER BANNER */}
                <div className="relative aspect-[16/10] w-full bg-[#161922] border-b border-[#1c202c] overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#161922] via-[#0d0f14] to-[#111319] group-hover:scale-105 transition-transform duration-500" />
                  
                  <div className="relative z-10 p-4 text-center space-y-2">
                    <div className="w-10 h-10 mx-auto rounded-xl bg-[#1f2430] border border-[#2d3446] flex items-center justify-center text-[#38bdf8] shadow-md group-hover:border-[#38bdf8]/60 transition-colors">
                      {project.category.includes("Company Profile") ? (
                        <Globe className="w-5 h-5 text-emerald-400" />
                      ) : project.category.includes("Fullstack") ? (
                        <Code2 className="w-5 h-5 text-[#38bdf8]" />
                      ) : (
                        <Layers className="w-5 h-5 text-indigo-400" />
                      )}
                    </div>
                    <span className="inline-block text-[10px] font-mono tracking-wider uppercase text-[#9ca3af] bg-[#090a0d]/90 px-2.5 py-0.5 rounded-full border border-[#1c202c]">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* CARD BODY CONTENT (CLEAN & CONCISE) */}
                <div className="p-5 space-y-3">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-[#f3f4f6] group-hover:text-[#38bdf8] transition-colors leading-snug">
                      {project.name}
                    </h3>
                    <div className="text-[11px] font-mono text-[#6b7280]">
                      Peran: <span className="text-[#cbd5e1]">{project.role}</span>
                    </div>
                  </div>

                  <p className="text-xs text-[#9ca3af] leading-relaxed line-clamp-3 font-sans">
                    {project.description}
                  </p>

                  {/* TECH STACK PILLS */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#161922] text-[#cbd5e1] border border-[#232938]"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 text-[#6b7280]">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* CARD FOOTER ACTIONS */}
              <div className="p-5 pt-0 flex items-center justify-between gap-3 text-xs font-mono">
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#161922] border border-[#232938] text-[#f3f4f6] hover:text-[#38bdf8] hover:border-[#38bdf8]/40 font-semibold transition-colors"
                >
                  <span>Detail Project</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#38bdf8]" />
                </Link>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#38bdf8] hover:underline font-semibold text-[11px]"
                  >
                    <span>Live Web</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA to Full Archive if on Homepage */}
        {isHomePage && (
          <div className="pt-10 flex justify-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#161922] text-[#f3f4f6] border border-[#262c3d] hover:border-[#38bdf8]/50 font-mono text-xs uppercase tracking-wider transition-all shadow-md"
            >
              <span>Buka Seluruh Arsip Projects ({PROJECTS.length})</span>
              <ArrowRight className="w-4 h-4 text-[#38bdf8]" />
            </Link>
          </div>
        )}

      </div>

      <ProjectDetailModal
        project={selectedModalProject}
        onClose={() => setSelectedModalProject(null)}
      />
    </section>
  );
}
