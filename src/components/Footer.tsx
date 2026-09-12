import Link from "next/link";
import { PERSONAL_INFO } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="py-10 bg-[#090a0d] border-t border-[#1c202c] text-xs font-mono text-[#6b7280]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          © {new Date().getFullYear()} {PERSONAL_INFO.fullName}. Hak Cipta Dilindungi.
        </div>
        <div className="flex items-center gap-6">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#e5e7eb] transition-colors"
          >
            GitHub
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#e5e7eb] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:text-[#e5e7eb] transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
