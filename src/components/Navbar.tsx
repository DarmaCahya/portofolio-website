"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#0c0e12]/90 backdrop-blur-md border-b border-[#1c2331] py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between">
        {/* Left: Identity */}
        <Link
          href="/"
          className="group flex items-center gap-2 text-sm font-semibold tracking-tight text-[#f1f5f9] hover:text-white transition-colors"
        >
          <span className="inline-block w-2 h-2 rounded-sm bg-[#38bdf8] group-hover:bg-[#f1f5f9] transition-colors" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#cbd5e1] group-hover:text-[#f1f5f9]">
            {PERSONAL_INFO.displayName}
          </span>
        </Link>

        {/* Right Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {/* Status Indicator */}
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#141821] border border-[#222b3d] text-xs font-mono text-[#cbd5e1]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] text-[#94a3b8]">{PERSONAL_INFO.availability}</span>
          </div>

          {/* Nav Items */}
          <nav className="flex items-center gap-5 lg:gap-6 text-xs sm:text-sm">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#94a3b8] hover:text-[#f1f5f9] transition-colors font-medium relative py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#94a3b8] hover:text-white rounded-md bg-[#141821] border border-[#222b3d]"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e1117] border-b border-[#202838] px-4 py-4 space-y-3">
          <div className="flex items-center gap-2 pb-2 border-b border-[#1c2331] text-xs font-mono text-[#94a3b8]">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
            <span>{PERSONAL_INFO.availability}</span>
          </div>
          <nav className="flex flex-col space-y-2.5 pt-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#94a3b8] hover:text-white text-sm py-1 font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="w-full flex items-center justify-center gap-2 py-2 text-xs font-mono text-[#f1f5f9] bg-[#1a2233] border border-[#2b374f] rounded-md"
            >
              <span>{PERSONAL_INFO.email}</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
