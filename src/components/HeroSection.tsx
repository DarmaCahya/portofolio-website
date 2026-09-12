"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { PERSONAL_INFO } from "@/data/portfolio";

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  // Mouse & Touch interactive position lerp
  useEffect(() => {
    let animationFrameId: number;
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let isMouseActive = false;
    let time = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      mouseX = (e.clientX - centerX) / (rect.width / 2);
      mouseY = (e.clientY - centerY) / (rect.height / 2);
      isMouseActive = true;
    };

    const handleMouseLeave = () => {
      isMouseActive = false;
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    const animate = () => {
      time += 0.02;

      if (isMouseActive) {
        const targetX = mouseX * 30;
        const targetY = mouseY * 25;
        currentX += (targetX - currentX) * 0.08;
        currentY += (targetY - currentY) * 0.08;
      } else {
        const waveX = Math.sin(time * 0.8) * 18;
        const waveY = Math.cos(time * 0.6) * 15;
        currentX += (waveX - currentX) * 0.05;
        currentY += (waveY - currentY) * 0.05;
      }

      if (bgRef.current) {
        const tiltX = (currentY / 25) * 5;
        const tiltY = -(currentX / 30) * 5;
        bgRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0px) scale(1.1) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative pt-28 pb-20 md:pt-36 md:pb-24 border-b border-[#1c202c] bg-[#090a0d] overflow-hidden select-none"
    >
      {/* Prominent Interactive 3D Carbon Hexagonal Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full pointer-events-none transition-transform ease-out duration-100 will-change-transform"
        style={{
          backgroundImage: `url('/hero-carbon-bg.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.75,
          filter: "contrast(1.15) brightness(0.9)",
        }}
      />

      {/* Balanced Soft Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#090a0d]/80 via-[#090a0d]/40 to-[#090a0d] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#090a0d_90%)] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Intro (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Name & Role Title */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#f3f4f6] leading-[1.1] drop-shadow-md">
                {PERSONAL_INFO.fullName}
              </h1>
              <div className="flex items-center gap-3">
                <p className="text-lg sm:text-2xl font-mono text-[#38bdf8] font-semibold tracking-tight">
                  Frontend Developer
                </p>
                <span className="text-[#475569]">•</span>
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#9ca3af]">
                  <Icon icon="lucide:map-pin" className="w-3.5 h-3.5 text-[#38bdf8]" />
                  <span>Bandung, Indonesia</span>
                </div>
              </div>
            </div>

            {/* Intro Paragraph */}
            <p className="text-sm sm:text-base text-[#d1d5db] leading-relaxed max-w-2xl font-sans drop-shadow">
              Pengembang web yang berfokus membangun antarmuka frontend yang responsif, mengonsumsi API backend, serta menjaga kualitas koding dan struktur antarmuka yang rapi.
            </p>

            {/* Metadata Pills */}
            <div className="pt-1 flex flex-wrap items-center gap-4 text-xs font-mono text-[#cbd5e1]">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#090a0d]/80 border border-[#232938] backdrop-blur-sm">
                <Icon icon="lucide:graduation-cap" className="w-4 h-4 text-[#38bdf8]" />
                <span>S1 Informatika — Telkom University</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#090a0d]/80 border border-[#232938] backdrop-blur-sm">
                <Icon icon="lucide:briefcase" className="w-4 h-4 text-emerald-400" />
                <span>Website Developer</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#232938]/80">
              <a
                href="/#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#38bdf8] hover:bg-[#7dd3fc] text-[#090a0d] font-semibold text-xs font-mono transition-all shadow-lg hover:shadow-cyan-500/20"
              >
                <span>Lihat Karya &amp; Proyek</span>
                <Icon icon="lucide:arrow-down-right" className="w-4 h-4" />
              </a>

              <a
                href="/#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#090a0d]/80 hover:bg-[#161922] text-[#e5e7eb] border border-[#262c3d] text-xs font-mono transition-colors backdrop-blur-sm"
              >
                <Icon icon="lucide:mail" className="w-4 h-4 text-[#9ca3af]" />
                <span>Kontak &amp; Email</span>
              </a>
            </div>

          </div>

          {/* Right Column: Clean Personal Photo Frame (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm rounded-xl overflow-hidden bg-[#111319]/90 border border-[#232938] shadow-2xl backdrop-blur-md group">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={PERSONAL_INFO.photoPath}
                  alt={PERSONAL_INFO.fullName}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
