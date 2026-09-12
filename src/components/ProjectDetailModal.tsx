"use client";

import { useEffect } from "react";
import { X, ExternalLink, CheckCircle2, Layers } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { Project } from "@/data/portfolio";

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl bg-[#11151e] border border-[#263147] shadow-2xl p-6 sm:p-8 space-y-6 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#1f2738]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#94a3b8] mb-1">
              <span>{project.category}</span>
              <span>•</span>
              <span className="text-[#38bdf8]">{project.role}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#f8fafc]">
              {project.name}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-md bg-[#161c27] hover:bg-[#202838] text-[#94a3b8] hover:text-white border border-[#232c3f] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Narrative & Context */}
        <div className="space-y-4 text-sm text-[#94a3b8] leading-relaxed">
          <p className="text-base text-[#cbd5e1] font-normal">
            {project.longDescription}
          </p>
        </div>

        {/* Metrics/Stats if available */}
        {project.stats && project.stats.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-lg bg-[#0d1017] border border-[#1b2230]">
            {project.stats.map((st) => (
              <div key={st.label} className="space-y-1">
                <div className="text-[11px] font-mono uppercase text-[#64748b]">{st.label}</div>
                <div className="text-lg font-semibold text-[#f1f5f9] font-mono">{st.value}</div>
              </div>
            ))}
          </div>
        )}

        {/* Key Frontend Contributions */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#cbd5e1]">
            <Layers className="w-3.5 h-3.5 text-[#38bdf8]" />
            <span>Kontribusi Utama &amp; Hasil Pengembangan</span>
          </div>
          <ul className="space-y-2.5">
            {project.keyContributions.map((contrib, idx) => (
              <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{contrib}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies Used */}
        <div className="space-y-2 pt-2">
          <div className="text-xs font-mono uppercase text-[#64748b]">Teknologi &amp; Framework</div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-2.5 py-1 rounded bg-[#171d29] text-[#cbd5e1] border border-[#263248]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-4 pt-4 border-t border-[#1f2738]">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-wider rounded bg-[#f1f5f9] text-[#0c0e12] hover:bg-white transition-colors"
            >
              <span>Kunjungi Website Live</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-wider rounded bg-[#161c28] text-[#cbd5e1] border border-[#273349] hover:bg-[#202737] hover:text-white transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Kode Sumber (Repository)</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
