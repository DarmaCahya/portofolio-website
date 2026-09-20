"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 16, scale: 0.98, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -16, scale: 0.98, filter: "blur(8px)" }}
        transition={{
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative w-full flex-1"
      >
        {/* Creative Cyber Top Scanner Progress Bar (Runs under Navbar) */}
        <motion.div
          initial={{ scaleX: 0, opacity: 1 }}
          animate={{ scaleX: 1, opacity: [1, 1, 0] }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ originX: 0 }}
          className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#38bdf8] via-[#818cf8] to-[#38bdf8] z-[100] shadow-[0_0_12px_#38bdf8]"
        />

        {/* Creative Shimmer Beam Overlay */}
        <motion.div
          initial={{ opacity: 0.5, y: "-100%" }}
          animate={{ opacity: 0, y: "100%" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="pointer-events-none fixed inset-0 z-[40] bg-gradient-to-b from-[#38bdf8]/10 via-[#818cf8]/5 to-transparent backdrop-blur-[1px]"
        />

        {children}
      </motion.div>
    </AnimatePresence>
  );
}

