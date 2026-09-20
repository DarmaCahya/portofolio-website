"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    setIsNavigating(true);
    const timer = setTimeout(() => setIsNavigating(false), 600);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      <div key={pathname} className="relative w-full min-h-screen">
        {/* Creative Cyber Top Scanner Progress Bar */}
        <motion.div
          initial={{ scaleX: 0, opacity: 1 }}
          animate={{ scaleX: 1, opacity: [1, 1, 0] }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] as const }}
          style={{ originX: 0 }}
          className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#38bdf8] via-[#818cf8] to-[#38bdf8] z-[100] shadow-[0_0_12px_#38bdf8]"
        />

        {/* Creative Shimmer Overlay Beam (Entrance Flash) */}
        <motion.div
          initial={{ opacity: 0.6, y: "-100%" }}
          animate={{ opacity: 0, y: "100%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="pointer-events-none fixed inset-0 z-[90] bg-gradient-to-b from-[#38bdf8]/10 via-[#818cf8]/5 to-transparent backdrop-blur-[1px]"
        />

        {/* Main Content Motion Container */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.99, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -20, scale: 0.99, filter: "blur(6px)" }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
          className="w-full flex-1"
        >
          {children}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
