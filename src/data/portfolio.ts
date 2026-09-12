export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  role: string;
  tags: string[];
  keyContributions: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  layoutType: 'large' | 'horizontal' | 'editorial' | 'compact';
  stats?: { label: string; value: string }[];
}

export interface TechCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    note: string;
  }[];
}

export interface ExperienceRole {
  roleTitle: string;
  period: string;
  type: string;
  description?: string;
  bullets: string[];
  techStack: string[];
}

export interface ExperienceItem {
  company: string;
  totalPeriod: string;
  location: string;
  overallDescription: string;
  roles: ExperienceRole[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  description: string;
  coursework: string[];
  academicProjects: {
    title: string;
    description: string;
    tech: string[];
  }[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  period?: string;
  credentialUrl?: string;
  category: 'program' | 'dicoding';
}

export interface PhilosophyItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
}

export const PERSONAL_INFO = {
  name: "Darma Cahya",
  fullName: "I Made Darma Cahya Adyatma",
  displayName: "Darma Cahya",
  title: "Web Developer - Frontend Developer",
  education: "S1 Informatika — Telkom University, Bandung (2021–2025)",
  location: "Bandung, Indonesia",
  timezone: "WIB (UTC+7)",
  availability: "Available for opportunities",
  email: "imdarmacahya@gmail.com",
  phone: "+62 896-9732-5196",
  github: "https://github.com/DarmaCahya",
  linkedin: "https://linkedin.com/in/darmacahya",
  headline: "Informatics graduate specializing in Frontend Development & Responsive Web Interfaces.",
  subheadline:
    "Web developer with hands-on experience building fast, maintainable web applications, connecting complex backend APIs, and crafting intuitive user interfaces.",
  photoPath: "/darma-profile.jpeg",
};

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: "Telkom University",
    degree: "S1 Informatika (Bachelor of Informatics)",
    period: "Sep 2021 — Mei 2025",
    location: "Bandung, Indonesia",
    description:
      "Studi akademis berfokus pada rekayasa perangkat lunak, arsitektur aplikasi web, dan manajemen basis data. Lulus dengan fondasi pemrograman yang kuat.",
    coursework: [
      "Database Systems",
      "Software Analysis and Design",
      "Advanced Web Programming",
      "Algorithms & Data Structures",
    ],
    academicProjects: [
      {
        title: "BrewFest — Coffee Competition Platform",
        description:
          "Mengembangkan backend website kompetisi penilai kopi dengan Express.js & MySQL, serta pengujian otomatis Selenium E2E.",
        tech: ["Express.js", "MySQL", "Selenium"],
      },
      {
        title: "SDGS Carbon Ranger Project",
        description:
          "Pengumpulan data lapangan dan pembangunan antarmuka sistem web klasifikasi SDGS Multiclass.",
        tech: ["HTML", "CSS", "Bootstrap"],
      },
      {
        title: "SME Cybersecurity Survey Web App",
        description:
          "Website survei tugas akhir akademis untuk pengumpulan data keamanan siber pada UMKM.",
        tech: ["React.js", "Node.js", "Tailwind CSS"],
      },
    ],
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    title: "Bangkit Academy 2024 — Cloud Computing Cohort",
    issuer: "Google, GoTo, Traveloka",
    period: "Feb 2024 — Jun 2024",
    category: "program",
  },
  {
    title: "Telkom Indonesia Digistar Program — Backend Developer Mentee",
    issuer: "PT Telkom Indonesia",
    period: "Agu 2024 — Okt 2024",
    category: "program",
  },
  {
    title: "Basic JavaScript Programming",
    issuer: "Dicoding Indonesia",
    credentialUrl: "https://www.dicoding.com/certificates/07Z60R73MZQR",
    category: "dicoding",
  },
  {
    title: "Basic Web Programming",
    issuer: "Dicoding Indonesia",
    credentialUrl: "https://www.dicoding.com/certificates/0LZ020LG0X65",
    category: "dicoding",
  },
  {
    title: "Basic Git and GitHub",
    issuer: "Dicoding Indonesia",
    credentialUrl: "https://www.dicoding.com/certificates/MRZMEQO13PYQ",
    category: "dicoding",
  },
];

export const TECH_CATEGORIES: TechCategory[] = [
  {
    title: "Frontend & Core",
    description: "Primary stack for building modern, responsive user interfaces",
    skills: [
      { name: "React", note: "Component lifecycle, state management, custom hooks" },
      { name: "Next.js", note: "App Router, SSR/SSG, route handlers, performance" },
      { name: "TypeScript", note: "Strict typing, interface definitions, type safety" },
      { name: "JavaScript", note: "ESNext+, asynchronous patterns, DOM manipulation" },
      { name: "HTML & CSS", note: "Semantic layout structure, flexbox, grid, accessibility" },
    ],
  },
  {
    title: "Styling & Frameworks",
    description: "Utility tools for precise, modern design implementation",
    skills: [
      { name: "Tailwind CSS", note: "Utility-first layout, custom design tokens, responsive breakpoints" },
      { name: "Bootstrap", note: "Rapid prototyping, legacy system refactoring" },
      { name: "Responsive UI", note: "Mobile-first approach, cross-browser compatibility" },
    ],
  },
  {
    title: "Backend & Database",
    description: "API design, backend languages, and server architecture",
    skills: [
      { name: "Laravel", note: "MVC architecture, Blade templates, database migrations" },
      { name: "Express.js", note: "RESTful API creation, middleware, route handling" },
      { name: "Python & FastAPI", note: "Async API development, data validation, clean architecture" },
      { name: "Go (Golang)", note: "Concurrent routines, lightweight backend services" },
      { name: "MySQL & PostgreSQL", note: "Relational schemas, query optimization, data modeling" },
      { name: "MongoDB", note: "Document store, flexible JSON schema indexing" },
    ],
  },
  {
    title: "Tools & DevOps",
    description: "Daily developer tools, containers, testing, and automation",
    skills: [
      { name: "Git & GitHub", note: "Version control, feature branching, PR reviews" },
      { name: "Docker", note: "Containerization, environment isolation, Docker Compose" },
      { name: "Postman & Bruno", note: "API contract testing, environment variables, collection suites" },
      { name: "Selenium & Katalon", note: "Automated end-to-end testing, UI test scripts" },
      { name: "n8n", note: "Workflow automation, webhooks, third-party integrations" },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "bni-ventures-duluin",
    name: "BNI Ventures & Corporate Portals",
    category: "Fintech & Corporate Platforms",
    featured: true,
    layoutType: "large",
    description:
      "Frontend integration and web platforms for BNI Ventures, Satu Creative dashboard, and corporate web systems at Duluin Group.",
    longDescription:
      "As a Website Developer at Duluin Group, I built and integrated frontend interfaces for high-profile clients including BNI Ventures. Work included building interactive dashboards, landing pages (Satu Creative, Workin), Whistleblowing System (WBS) with case management, and company profiles for clients such as PT. SEPP, Baksya, Elang Security, PT. Coway International, and PT. Soffalux.",
    role: "Website Developer (PKWT)",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST API"],
    stats: [
      { label: "Role", value: "Website Developer" },
      { label: "Impact", value: "15+ Platforms" },
    ],
    keyContributions: [
      "Integrated frontend interfaces with backend APIs for BNI Ventures ensuring seamless data communication.",
      "Designed and developed Satu Creative platform (landing page + internal workflow dashboard).",
      "Engineered Whistleblowing System (WBS) with secure report submission, case tracking, and administrative oversight.",
      "Revamped Duluin Career Page and built SKI One Service public portal & management dashboard.",
    ],
    liveUrl: "https://duluin.com",
    githubUrl: "https://github.com/DarmaCahya",
  },
  {
    id: "qr-hunt",
    name: "QR Hunt",
    category: "Event Attendance Platform",
    featured: true,
    layoutType: "horizontal",
    description:
      "A communal event web app enabling participants to scan QR codes for instant attendance tracking without authentication friction.",
    longDescription:
      "Developed a lightweight, highly responsive attendance scanning application for event management (qrhunt.communal.id). Participants scan backend-generated QR codes directly from their browsers for instant verification.",
    role: "Frontend Developer (Freelance)",
    tags: ["Next.js", "React", "REST API", "Tailwind CSS"],
    stats: [
      { label: "Live Site", value: "qrhunt.communal.id" },
      { label: "Performance", value: "Instant Scan" },
    ],
    keyContributions: [
      "Built instant browser-based QR scanner interface optimized for mobile viewports.",
      "Created frictionless attendee verification flow without mandatory account registration.",
    ],
    liveUrl: "https://qrhunt.communal.id",
    githubUrl: "https://github.com/DarmaCahya",
  },
  {
    id: "medika-one",
    name: "MedikaOne",
    category: "Health Technology",
    featured: true,
    layoutType: "editorial",
    description:
      "A responsive landing page and information portal for MedikaOne health application.",
    longDescription:
      "MedikaOne required a clean, trustworthy healthcare landing page focusing on information structure, service accessibility, and cross-device responsiveness.",
    role: "Frontend Developer (Freelance)",
    tags: ["React", "Responsive UI", "Tailwind CSS", "SEO"],
    stats: [
      { label: "Live Site", value: "medikaone.com" },
      { label: "Focus", value: "HealthTech UI" },
    ],
    keyContributions: [
      "Implemented responsive layouts and fast-loading media assets.",
      "Structured semantic HTML and clear patient navigation paths.",
    ],
    liveUrl: "https://medikaone.com",
    githubUrl: "https://github.com/DarmaCahya",
  },
  {
    id: "freshbite-bangkit",
    name: "FreshBite — Fruit Quality Detector",
    category: "Bangkit Capstone Project",
    featured: false,
    layoutType: "compact",
    description:
      "Mobile-based AI application detecting fruit freshness via image analysis, with Express.js backend on Google Cloud Platform.",
    longDescription:
      "Developed as the capstone project for Bangkit Academy 2024 (by Google, GoTo, Traveloka). I built the backend service using Express.js and deployed it to Google Cloud Platform to handle photo uploads and model predictions.",
    role: "Cloud Computing / Backend Dev",
    tags: ["Express.js", "GCP", "REST API", "Node.js"],
    stats: [
      { label: "Cohort", value: "Bangkit 2024" },
    ],
    keyContributions: [
      "Built Express.js API handling image payload validation and inference routing.",
      "Deployed and connected cloud endpoints on Google Cloud Platform.",
    ],
    githubUrl: "https://github.com/SryoAjii/FreshBite-Bangkit-Capstone",
  },
  {
    id: "brewfest-coffee",
    name: "BrewFest — Coffee Competition Platform",
    category: "Academic / Internal Platform",
    featured: false,
    layoutType: "compact",
    description:
      "Backend system and judge evaluation portal for coffee entry scoring, with automated Selenium test coverage.",
    longDescription:
      "Developed the backend system for judges to evaluate coffee competition entries. Features included authentication, event scoring workflow, and E2E automated test suites using Selenium.",
    role: "Backend Developer",
    tags: ["Express.js", "MySQL", "Selenium", "Automated Testing"],
    keyContributions: [
      "Built judge authentication and scoring data models.",
      "Authored Selenium automated test suites covering authentication and edge-case inputs.",
    ],
    githubUrl: "https://github.com/DarmaCahya/Coffee-Event/tree/master",
  },
  {
    id: "apify-n8n-automation",
    name: "Social Media Competitor AI Scraper",
    category: "Automation & AI Workflow",
    featured: false,
    layoutType: "compact",
    description:
      "n8n automation workflow analyzing competitor social media content via Apify scraping and AI content insights.",
    longDescription:
      "Engineered an automated data extraction workflow using n8n and Apify actors to gather social media metrics, process content with AI model prompts, and export reporting tables to Google Sheets.",
    role: "Automation Developer",
    tags: ["n8n", "Apify", "AI Extraction", "Google Sheets"],
    keyContributions: [
      "Designed automated scraping workflow triggers with error retry logic.",
      "Integrated AI summary prompts for content sentiment and engagement reporting.",
    ],
  },
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    company: "Duluin Group — Bandung",
    totalPeriod: "Okt 2024 — 8 Okt 2026",
    location: "Bandung, Indonesia",
    overallDescription:
      "Pengembang web utama yang membangun aplikasi web klien, dashboard operasional internal, dan portal korporat. Mengalami peningkatan posisi dari Frontend Intern hingga Website Developer (PKWT).",
    roles: [
      {
        roleTitle: "Website Developer (PKWT)",
        period: "Feb 2025 — 8 Okt 2026",
        type: "Full-time Contract (PKWT)",
        description: "Bertanggung jawab atas pengintegrasian frontend dan pengembangan sistem web korporat klien besar seperti BNI Ventures dan platform internal.",
        bullets: [
          "Pengintegrasian antarmuka frontend dengan API backend untuk portal BNI Ventures.",
          "Merancang dan membangun platform Satu Creative (landing page + dashboard operasional internal).",
          "Mengembangkan Whistleblowing System (WBS) dengan fitur manajemen kasus dan pelaporan terenkripsi.",
          "Membangun portal publik & dashboard manajemen SKI One Service serta merombak Halaman Karir Duluin.",
          "Mengirimkan website performa tinggi & SEO friendly untuk 10+ klien termasuk PT. SEPP, Baksya, Elang Security, JGR Garmen, PT. Soffalux, PT. Coway International, SUTA, dan Nawa Multi Parts.",
        ],
        techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Laravel", "REST API"],
      },
      {
        roleTitle: "Frontend Website Developer Intern",
        period: "Okt 2024 — Jan 2025",
        type: "Internship",
        description: "Mengembangkan antarmuka landing page responsif dan membantu pengintegrasian API awal untuk berbagai proyek agensi.",
        bullets: [
          "Mengembangkan antarmuka landing page responsif untuk berbagai klien agensi.",
          "Membangun komponen UI modular dan template tata letak yang digunakan di seluruh tim dev.",
        ],
        techStack: ["React", "Next.js", "Tailwind CSS", "JavaScript", "HTML/CSS"],
      },
    ],
  },
  {
    company: "PukulEnam — Bandung",
    totalPeriod: "Sep 2024 — Jun 2025",
    location: "Bandung / Remote",
    overallDescription:
      "Pengembangan web fullstack remote dan frontend intern untuk proyek klien dan platform internal.",
    roles: [
      {
        roleTitle: "Remote Fullstack Developer & Frontend Intern",
        period: "Sep 2024 — Jun 2025",
        type: "Contract / Remote Internship",
        bullets: [
          "Mengembangkan antarmuka frontend proyek SatriaBIPA menggunakan HTML, CSS, dan Tailwind CSS.",
          "Membangun sistem news crawler terintegrasi database dan dashboard React untuk proyek Talas.",
          "Membuat platform web statis untuk pemesanan tur Bali menggunakan React.js.",
          "Mengembangkan aplikasi web adopsi anjing menggunakan Laravel.",
        ],
        techStack: ["React.js", "Tailwind CSS", "Laravel", "JavaScript", "HTML/CSS"],
      },
    ],
  },
  {
    company: "Telkom Indonesia",
    totalPeriod: "Agu 2024 — Okt 2024",
    location: "Bandung, Indonesia",
    overallDescription:
      "Mentee Backend Developer pada Digistar Program oleh PT Telkom Indonesia.",
    roles: [
      {
        roleTitle: "Backend Developer Mentee (Digistar Program)",
        period: "Agu 2024 — Okt 2024",
        type: "Mentorship Program",
        bullets: [
          "Membangun dan mendokumentasikan RESTful API untuk katalog produk PADI UMKM menggunakan Express.js & MongoDB.",
          "Melakukan pengujian endpoint API dengan Postman untuk memastikan integritas data request/response.",
        ],
        techStack: ["Express.js", "MongoDB", "Postman", "Node.js"],
      },
    ],
  },
  {
    company: "Bangkit Academy by Google, GoTo, Traveloka",
    totalPeriod: "Feb 2024 — Jun 2024",
    location: "Bandung, Indonesia",
    overallDescription:
      "Spesialisasi komputasi awan (Cloud Computing Cohort) Bangkit Academy.",
    roles: [
      {
        roleTitle: "Cloud Computing Cohort",
        period: "Feb 2024 — Jun 2024",
        type: "Academy Program",
        bullets: [
          "Mengembangkan REST API backend menggunakan Express.js yang terhubung dengan resource Google Cloud Platform.",
          "Menyelesaikan kurikulum arsitektur cloud praktis dan pengembangan backend.",
        ],
        techStack: ["Google Cloud Platform", "Express.js", "Node.js", "REST API"],
      },
    ],
  },
];

export const PHILOSOPHY_PRINCIPLES: PhilosophyItem[] = [
  {
    number: "01",
    title: "Keep it useful",
    tagline: "Good UI should solve a problem, not just look impressive.",
    description:
      "Flashy visual effects are pointless if users can't achieve their goal quickly. Every element on screen needs a clear functional purpose.",
  },
  {
    number: "02",
    title: "Make it responsive",
    tagline: "Interfaces should work naturally across different screen sizes.",
    description:
      "Responsiveness means rethinking layouts, touch targets, and reading rhythm so the experience feels native on both mobile viewports and large desktop monitors.",
  },
  {
    number: "03",
    title: "Keep it maintainable",
    tagline: "Reusable components and predictable architecture matter.",
    description:
      "Code is read far more often than it is written. Clean component boundaries, clear prop types, and structured folder hierarchies make long-term maintenance seamless.",
  },
  {
    number: "04",
    title: "Sweat the details",
    tagline: "Small interactions and spacing make a big difference.",
    description:
      "Subtle hover cues, balanced typography scales, fast loading feedback, and consistent optical alignment transform average sites into polished products.",
  },
];
