"use client";

import Image from "next/image";

export interface TechItem {
  name: string;
  category: string;
  slug: string;
  color: string;
}

const ROW_1_TECH: TechItem[] = [
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
];

const ROW_2_TECH: TechItem[] = [
  { name: "Go (Golang)", category: "Language", slug: "go", color: "00ADD8" },
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
  { name: "Google Cloud", category: "Cloud", slug: "googlecloud", color: "4285F4" },
];

export default function TechStackSection() {
  const row1Items = [...ROW_1_TECH, ...ROW_1_TECH];
  const row2Items = [...ROW_2_TECH, ...ROW_2_TECH];

  return (
    <section id="skills" className="py-20 md:py-24 border-b border-[#1c202c] bg-section-linear-2 bg-dot-pattern relative overflow-hidden select-none">
      {/* Edge Gradient Mask */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#090a0d_95%)] pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3 text-xs font-mono tracking-widest uppercase text-[#38bdf8]">
              <span>Keahlian &amp; Tools</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#f3f4f6]">
              Teknologi &amp; Toolkit.
            </h2>
          </div>
          <p className="text-sm text-[#9ca3af] max-w-md font-sans leading-relaxed">
            Kumpulan bahasa pemrograman, framework, basis data, dan peralatan yang pernah saya gunakan.
          </p>
        </div>
      </div>

      {/* Marquee Rows Container */}
      <div className="relative z-10 space-y-4 py-2">
        {/* Left & Right Edge Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#0d0f14] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#0d0f14] to-transparent z-10 pointer-events-none" />

        {/* BARIS 1: Bergerak dari KIRI ke KANAN */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee-ltr flex items-center gap-4 py-1">
            {row1Items.map((tech, idx) => (
              <div
                key={`r1-${tech.slug}-${idx}`}
                className="group flex items-center gap-3 px-4 py-3 rounded-xl bg-[#111319]/90 border border-[#1c202c] hover:border-[#38bdf8]/50 hover:bg-[#161922] backdrop-blur-sm transition-all duration-300 shadow-sm shrink-0 cursor-pointer"
              >
                <div className="relative w-6 h-6 flex items-center justify-center shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color}`}
                    alt={`${tech.name} logo`}
                    className="w-5 h-5 object-contain group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-mono font-medium text-[#e5e7eb] group-hover:text-[#38bdf8] transition-colors">
                    {tech.name}
                  </span>
                  <span className="text-[10px] font-mono text-[#6b7280]">
                    {tech.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BARIS 2: Bergerak dari KANAN ke KIRI */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee-rtl flex items-center gap-4 py-1">
            {row2Items.map((tech, idx) => (
              <div
                key={`r2-${tech.slug}-${idx}`}
                className="group flex items-center gap-3 px-4 py-3 rounded-xl bg-[#111319]/90 border border-[#1c202c] hover:border-[#38bdf8]/50 hover:bg-[#161922] backdrop-blur-sm transition-all duration-300 shadow-sm shrink-0 cursor-pointer"
              >
                <div className="relative w-6 h-6 flex items-center justify-center shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color}`}
                    alt={`${tech.name} logo`}
                    className="w-5 h-5 object-contain group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-mono font-medium text-[#e5e7eb] group-hover:text-[#38bdf8] transition-colors">
                    {tech.name}
                  </span>
                  <span className="text-[10px] font-mono text-[#6b7280]">
                    {tech.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
