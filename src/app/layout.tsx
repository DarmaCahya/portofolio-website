import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import AudioPlayer from "@/components/AudioPlayer";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Darma Cahya — Frontend-focused Web Developer",
  description:
    "Frontend-focused Web Developer who enjoys building things that feel good to use. Specializing in responsive interfaces, performance, and clean frontend architecture.",
  keywords: [
    "Darma Cahya",
    "Frontend Developer",
    "Web Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Indonesia",
  ],
  authors: [{ name: "Darma Cahya" }],
  openGraph: {
    title: "Darma Cahya — Frontend-focused Web Developer",
    description:
      "Frontend-focused Web Developer who enjoys building things that feel good to use.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${plusJakartaSans.variable} ${jetBrainsMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#090a0d] text-[#e5e7eb] font-sans selection:bg-[#1e293b] selection:text-[#f8fafc]">
        {children}
        {/* Persistent Background Music Player across all routes */}
        <AudioPlayer />
      </body>
    </html>
  );
}
