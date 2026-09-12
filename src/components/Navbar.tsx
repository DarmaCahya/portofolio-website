"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { PERSONAL_INFO } from "@/data/portfolio";

const NAV_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#090a0d]/90 backdrop-blur-md border-b border-[#1c202c] py-3 shadow-lg"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between">
        {/* Left: Brand Identity */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-sm font-semibold tracking-tight text-[#f3f4f6] hover:text-white transition-colors"
        >
          <span className="w-2.5 h-2.5 rounded-sm bg-[#38bdf8] group-hover:scale-110 transition-transform" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#e5e7eb]">
            {PERSONAL_INFO.displayName}
          </span>
        </Link>

        {/* Right Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6 text-xs font-mono">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#9ca3af] hover:text-[#38bdf8] transition-colors py-1 relative font-medium"
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
          className="md:hidden p-2 text-[#9ca3af] hover:text-white rounded-md bg-[#111319] border border-[#232938]"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <Icon icon="lucide:x" className="w-4 h-4" /> : <Icon icon="lucide:menu" className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d0f14] border-b border-[#1c202c] px-6 py-5 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3 font-mono text-xs">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#9ca3af] hover:text-[#38bdf8] py-1 font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-mono text-[#f3f4f6] bg-[#161922] border border-[#262c3d] rounded-md hover:border-[#38bdf8]/50 transition-colors"
            >
              <span>{PERSONAL_INFO.email}</span>
              <Icon icon="lucide:arrow-up-right" className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
