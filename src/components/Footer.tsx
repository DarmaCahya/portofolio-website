"use client";

import { ArrowUp, Coffee } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 bg-[#090b0e] text-[#64748b] text-xs font-mono">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-3">
        
        {/* Left Copyright */}
        <div className="flex items-center gap-2">
          <span>&copy; {new Date().getFullYear()} {PERSONAL_INFO.displayName}.</span>
          <span className="text-[#334155]">•</span>
          <span>All rights reserved.</span>
        </div>

        {/* Center / Subtle Developer Note */}
        <div className="flex items-center gap-1.5 text-[#94a3b8]">
          <span>Built with Next.js &middot; TypeScript &middot; caffeine</span>
          <Coffee className="w-3.5 h-3.5 text-[#f59e0b] opacity-80" />
        </div>

        {/* Right Back to Top */}
        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-1 text-[#94a3b8] hover:text-[#f1f5f9] transition-colors p-1"
          aria-label="Scroll to top"
        >
          <span>Ke atas</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
}
