import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#0c0e12] text-[#f1f5f9] font-sans selection:bg-[#252f44] selection:text-[#f8fafc]">
        {children}
      </body>
    </html>
  );
}
