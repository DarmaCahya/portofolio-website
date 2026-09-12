"use client";

import Image from "next/image";

export interface TechItem {
  name: string;
  category: string;
  slug: string;
  color: string;
}

export const TECH_STACK_LOGOS: TechItem[] = [
  { name: "React", category: "Frontend", slug: "react", color: "61DAFB" },
  { name: "Next.js", category: "Framework", slug: "nextdotjs", color: "ffffff" },
  { name: "TypeScript", category: "Language", slug: "typescript", color: "3178C6" },
  { name: "JavaScript", category: "Language", slug: "javascript", color: "F7DF1E" },
  { name: "HTML5", category: "Frontend", slug: "html5", color: "E34F26" },
  { name: "CSS3", category: "Frontend", slug: "css3", color: "1572B6" },
  { name: "Tailwind CSS", category: "Styling", slug: "tailwindcss", color: "06B6D4" },
  { name: "Bootstrap", category: "Styling", slug: "bootstrap", color: "7952B3" },
  { name: "Node.js", category: "Runtime", slug: "nodedotjs", color: "5FA04E" },
  { name: "Express.js", category: "Backend", slug: "express", color: "ffffff" },
  { name: "Laravel", category: "Backend", slug: "laravel", color: "FF2D20" },
  { name: "Python", category: "Language", slug: "python", color: "3776AB" },
  { name: "FastAPI", category: "Backend", slug: "fastapi", color: "009688" },
  { name: "Go", category: "Language", slug: "go", color: "00ADD8" },
  { name: "MySQL", category: "Database", slug: "mysql", color: "4479A1" },
  { name: "PostgreSQL", category: "Database", slug: "postgresql", color: "4169E1" },
  { name: "MongoDB", category: "Database", slug: "mongodb", color: "47A248" },
  { name: "Docker", category: "DevOps", slug: "docker", color: "2496ED" },
  { name: "Git", category: "Tools", slug: "git", color: "F05032" },
  { name: "GitHub", category: "Tools", slug: "github", color: "ffffff" },
  { name: "Postman", category: "API Tools", slug: "postman", color: "FF6C37" },
  { name: "Bruno", category: "API Tools", slug: "bruno", color: "F68B1F" },
  { name: "Katalon", category: "Testing", slug: "katalon", color: "00ADEE" },
  { name: "Selenium", category: "Testing", slug: "selenium", color: "43B02A" },
  { name: "n8n", category: "Automation", slug: "n8n", color: "FF6584" },
];

export default function TechStackSlider() {
  // Duplicate array so marquee loops infinitely without gaps
  const marqueeItems = [...TECH_STACK_LOGOS, ...TECH_STACK_LOGOS];

  return (
    <div className="w-full py-6 bg-[#0b0d11] border-b border-[#1b2230] relative overflow-hidden select-none">
      {/* Header Badge */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-[11px] font-mono tracking-wider uppercase text-[#64748b]">
          <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
          <span>Tech Stack & Toolkit</span>
          <span className="text-[#334155]">•</span>
          <span className="text-[#38bdf8]">25 Worked Technologies</span>
        </div>
        <div className="text-[10px] font-mono text-[#64748b] hidden sm:block">
          [ Hover to pause slider ]
        </div>
      </div>

      {/* Gradient Fades on Edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#0b0d11] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#0b0d11] to-transparent z-10 pointer-events-none" />

      {/* Infinite Moving Marquee (Left to Right) */}
      <div className="flex overflow-hidden">
        <div className="animate-marquee-ltr flex items-center gap-3 py-2 px-2">
          {marqueeItems.map((tech, idx) => (
            <div
              key={`${tech.slug}-${idx}`}
              className="group relative flex items-center gap-3 px-4 py-2.5 rounded-lg bg-[#11141c] border border-[#1e2535] hover:border-[#38bdf8]/50 hover:bg-[#161c28] transition-all duration-300 shadow-sm shrink-0 cursor-pointer"
            >
              {/* Brand Logo */}
              <div className="relative w-6 h-6 flex items-center justify-center shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color}`}
                  alt={`${tech.name} logo`}
                  className="w-5 h-5 object-contain group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback if image fails to load
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
              </div>

              {/* Text Information */}
              <div className="flex flex-col">
                <span className="text-xs font-mono font-medium text-[#e2e8f0] group-hover:text-white transition-colors">
                  {tech.name}
                </span>
                <span className="text-[10px] font-mono text-[#64748b] group-hover:text-[#94a3b8] transition-colors">
                  {tech.category}
                </span>
              </div>

              {/* Subtle top indicator bar on hover */}
              <div className="absolute top-0 left-3 right-3 h-[2px] bg-transparent group-hover:bg-[#38bdf8] rounded-full transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
