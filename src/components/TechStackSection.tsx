"use client";

import { useState } from "react";
import { TECH_CATEGORIES } from "@/data/portfolio";
import { Terminal } from "lucide-react";

export default function TechStackSection() {
  const [activeSkill, setActiveSkill] = useState<{ name: string; note: string; category: string } | null>({
    name: "Next.js",
    note: "App Router, SSR/SSG, route handlers, performance optimization",
    category: "Frontend & Core",
  });

  return (
    <section className="py-12 md:py-16 border-b border-[#1b2230] bg-[#0b0d11] halftone-pattern-bg">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2 text-xs font-mono tracking-widest uppercase text-[#64748b]">
              <span>02</span>
              <span className="text-[#334155]">/</span>
              <span>Capabilities</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#f8fafc]">
              Technologies I work with.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#94a3b8] max-w-md">
            Teknologi dan tools yang biasa saya gunakan untuk membangun antarmuka web yang cepat, responsif, dan terstruktur.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TECH_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="p-4 rounded-lg bg-[#11141c] border border-[#1e2535] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-[#1b212e]">
                  <h3 className="text-xs font-mono font-medium uppercase tracking-wider text-[#e2e8f0]">
                    {category.title}
                  </h3>
                  <span className="text-[10px] font-mono text-[#64748b]">
                    0{category.skills.length}
                  </span>
                </div>
                <p className="text-xs text-[#94a3b8] mb-3 line-clamp-2">
                  {category.description}
                </p>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => {
                    const isSelected = activeSkill?.name === skill.name;
                    return (
                      <button
                        key={skill.name}
                        type="button"
                        onClick={() =>
                          setActiveSkill({
                            name: skill.name,
                            note: skill.note,
                            category: category.title,
                          })
                        }
                        className={`text-xs font-mono px-2 py-1 rounded transition-all text-left border ${
                          isSelected
                            ? "bg-[#253046] text-[#f8fafc] border-[#38bdf8]/50 shadow-sm"
                            : "bg-[#141822] text-[#cbd5e1] border-[#202737] hover:border-[#2f3a4f] hover:text-white"
                        }`}
                      >
                        {skill.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Active Skill Inspector Detail Block */}
        {activeSkill && (
          <div className="mt-6 p-3.5 rounded-lg bg-[#121622] border border-[#232c3f] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-start sm:items-center gap-2.5">
              <div className="p-1.5 rounded bg-[#182030] text-[#38bdf8] border border-[#26334a] mt-0.5 sm:mt-0">
                <Terminal className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[#f1f5f9] text-xs">
                    {activeSkill.name}
                  </span>
                  <span className="text-[#64748b]">·</span>
                  <span className="text-[#94a3b8]">{activeSkill.category}</span>
                </div>
                <p className="text-[#cbd5e1] mt-0.5 font-sans text-xs">
                  {activeSkill.note}
                </p>
              </div>
            </div>

            <div className="text-[10px] text-[#64748b] shrink-0 self-end sm:self-center">
              [Klik tag untuk inspect detail]
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
