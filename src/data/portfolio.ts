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
  imagePath?: string;
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

export const PERSONAL_INFO = {
  name: "Darma Cahya",
  fullName: "I Made Darma Cahya Adyatma",
  displayName: "Darma Cahya",
  title: "Frontend Developer & Web Developer",
  education: "S1 Informatika — Telkom University (2021–2025)",
  location: "Bandung, Indonesia",
  timezone: "WIB (UTC+7)",
  email: "imdarmacahya@gmail.com",
  phone: "+62 896-9732-5196",
  github: "https://github.com/DarmaCahya",
  linkedin: "https://linkedin.com/in/darmacahya",
  headline: "Lulusan S1 Informatika berfokus pada Frontend Development & Antarmuka Web Responsif.",
  subheadline:
    "Pengembang web dengan pengalaman langsung membangun aplikasi web cepat, mengintegrasikan API kompleks, dan mengutamakan kualitas antarmuka serta struktur kode yang rapi.",
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
    description: "Stack utama untuk membangun antarmuka pengguna web modern & responsif",
    skills: [
      { name: "React", note: "Siklus hidup komponen, state management, custom hooks" },
      { name: "Next.js", note: "App Router, SSR/SSG, route handlers, performa" },
      { name: "TypeScript", note: "Pengontrolan tipe ketat, definisi interface" },
      { name: "JavaScript", note: "ESNext+, async/await, manipulasi DOM" },
      { name: "HTML & CSS", note: "Struktur semantik, flexbox, grid, aksesibilitas" },
    ],
  },
  {
    title: "Styling & Frameworks",
    description: "Peralatan ekosistem desain antarmuka responsif",
    skills: [
      { name: "Tailwind CSS", note: "Utility-first layout, custom design tokens, breakpoints" },
      { name: "Bootstrap", note: "Prototyping cepat & refaktorisasi sistem" },
      { name: "Responsive UI", note: "Pendekatan mobile-first & kompatibilitas peramban" },
    ],
  },
  {
    title: "Backend & Database",
    description: "Pengembangan backend, arsitektur basis data, & API",
    skills: [
      { name: "Laravel", note: "Arsitektur MVC, Blade, migrasi basis data" },
      { name: "Express.js", note: "Pembuatan RESTful API, middleware, routing" },
      { name: "Python & FastAPI", note: "Pengembangan API asinkron" },
      { name: "Go (Golang)", note: "Layanan backend ringan berkinerja tinggi" },
      { name: "MySQL & PostgreSQL", note: "Skema relasional, optimasi query" },
      { name: "MongoDB", note: "Penyimpanan dokumen NoSQL" },
    ],
  },
  {
    title: "Tools & DevOps",
    description: "Peralatan harian, otomasi, deployment, & pengujian",
    skills: [
      { name: "Hostinger", note: "Setup server, deployment Laravel, domain & database" },
      { name: "Git & GitHub", note: "Kontrol versi, branching, PR code review" },
      { name: "Docker", note: "Kontainerisasi & isolasi lingkungan dev" },
      { name: "Postman & Bruno", note: "Pengujian kontrak API" },
      { name: "n8n", note: "Otomasi workflow & webhook integrasi" },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "journal-medika-one",
    name: "Journal Medika One",
    category: "Health Technology",
    featured: true,
    layoutType: "editorial",
    description:
      "Portal jurnal dan publikasi ilmiah kesehatan MedikaOne yang terintegrasi dengan REST API menggunakan Next.js, Tailwind CSS, dan TanStack Query.",
    longDescription:
      "Journal Medika One merupakan platform jurnal ilmiah medis (journal.medikaone.com) untuk publikasi artikel dan riset kesehatan. Saya bertindak sebagai Frontend Developer yang membangun antarmuka web menggunakan Next.js, Tailwind CSS, serta mengintegrasikan REST API backend menggunakan TanStack Query (React Query) untuk penanganan fetching data, caching, dan sinkronisasi status secara efisien.",
    role: "Frontend Developer",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "TanStack Query", "REST API"],
    stats: [
      { label: "Live Site", value: "journal.medikaone.com" },
      { label: "Role", value: "Frontend Developer" },
    ],
    keyContributions: [
      "Membangun antarmuka portal jurnal ilmiah medis yang responsif dan terstruktur menggunakan Next.js & Tailwind CSS.",
      "Mengintegrasikan REST API backend menggunakan TanStack Query (React Query) untuk caching, fetching, dan pengelolaan state data jurnal secara real-time.",
      "Mengoptimalkan performa pemuatan publikasi ilmiah dan kenyamanan perambanan artikel medis.",
    ],
    liveUrl: "https://journal.medikaone.com/",
  },
  {
    id: "prims-sultra",
    name: "PRIMS SULTRA — Next.js Fullstack Client Template Platform",
    category: "Fullstack Web & CMS Template",
    featured: true,
    layoutType: "large",
    description:
      "Pengembangan arsitektur template platform client fullstack menggunakan Next.js yang mencakup portal publik perusahaan dan dashboard CMS Administrator lengkap.",
    longDescription:
      "Dibuat dari nol sebagai template kustom berkinerja tinggi untuk proyek klien. Menggabungkan portal depan publik responsif (beranda, galeri aktivitas, layanan, rekrutmen, berita) dan Dashboard Admin CMS komprehensif untuk pengelolaan artikel, pencatatan leads/pesan, manajemen layanan, dan activity log.",
    role: "Fullstack Developer & UI/UX",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Fullstack", "CMS Admin Dashboard"],
    stats: [
      { label: "Role", value: "Fullstack Dev & UI/UX" },
      { label: "Scope", value: "Public Portal + CMS Admin" },
    ],
    keyContributions: [
      "Merancang UI/UX antarmuka portal publik responsif & dashboard Administrator CMS modern.",
      "Membangun arsitektur Next.js fullstack dengan manajemen konten artikel, galeri, dan leads tracking.",
      "Menyediakan sistem template siap pakai untuk berbagai proyek web klien perusahaan.",
    ],
    githubUrl: "https://github.com/DarmaCahya",
  },
  {
    id: "laravel-client-company-profiles",
    name: "Corporate Company Profile Suite (Laravel & Hostinger)",
    category: "Company Profile",
    featured: true,
    layoutType: "horizontal",
    description:
      "Pengembangan dan deployment rangkaian website company profile perusahaan berbasis Laravel, MySQL, dan deployment full setup di server Hostinger.",
    longDescription:
      "Mengembangkan berbagai situs company profile untuk klien korporat (PT. Satria Enam Putra Perkasa, Sentro Care, Nooren, SAUCA, PT. Soffalux Berkah Jaya, PT. Coway International, Elang Security Nusantara, JGR Garmen, SUTA, Nawa Multi Parts). Proses mencakup UI/UX design, koding Laravel & MySQL, serta penyiapan deployment penuh di Hostinger.",
    role: "Web Developer (UI/UX, Coding & Deployment)",
    tags: ["Laravel", "MySQL", "Hostinger", "Tailwind CSS", "UI/UX Design", "SEO"],
    stats: [
      { label: "Stack", value: "Laravel & MySQL" },
      { label: "Deploy", value: "Hostinger Setup" },
    ],
    keyContributions: [
      "Merancang UI/UX antarmuka responsif dan ramah SEO sesuai identitas brand masing-masing klien.",
      "Membangun sistem web company profile menggunakan Laravel & MySQL database.",
      "Melakukan deployment full setup di server Hostinger (konfigurasi domain, database, dan environment).",
    ],
  },
  {
    id: "bni-ventures-duluin",
    name: "BNI Ventures & Corporate Portals",
    category: "Fintech & Corporate Platforms",
    featured: true,
    layoutType: "editorial",
    description:
      "Pengintegrasian antarmuka frontend dan platform web korporat untuk BNI Ventures, Satu Creative dashboard, dan sistem operasional internal.",
    longDescription:
      "Mengintegrasikan antarmuka frontend dengan API backend untuk portal BNI Ventures, merancang platform Satu Creative (landing page + dashboard operasional internal), serta mengembangkan Whistleblowing System (WBS) dengan fitur manajemen kasus terenkripsi.",
    role: "Website Developer",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST API"],
    stats: [
      { label: "Role", value: "Website Developer" },
      { label: "Impact", value: "15+ Platforms" },
    ],
    keyContributions: [
      "Mengintegrasikan antarmuka frontend dengan API backend untuk BNI Ventures.",
      "Merancang platform Satu Creative (landing page + dashboard operasional internal).",
      "Mengembangkan Whistleblowing System (WBS) dengan manajemen kasus terenkripsi.",
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
      "Aplikasi web presensi event komunal yang memungkinkan peserta memindai QR code langsung melalui browser tanpa hambatan autentikasi.",
    longDescription:
      "Mengembangkan aplikasi pemindaian presensi ringan dan sangat responsif untuk manajemen event (qrhunt.communal.id). Peserta memindai QR code secara langsung dari browser mereka.",
    role: "Frontend Developer (Freelance)",
    tags: ["Next.js", "React", "REST API", "Tailwind CSS"],
    stats: [
      { label: "Live Site", value: "qrhunt.communal.id" },
      { label: "Performance", value: "Instant Scan" },
    ],
    keyContributions: [
      "Membangun scanner QR instan berbasis browser yang teroptimasi untuk perangkat seluler.",
      "Merancang alur verifikasi tanpa perlu registrasi akun.",
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
      "Landing page dan portal informasi responsif untuk aplikasi layanan kesehatan MedikaOne.",
    longDescription:
      "MedikaOne memerlukan landing page kesehatan yang dapat dipercaya dengan fokus pada struktur informasi, aksesibilitas layanan, dan responsivitas antar perangkat.",
    role: "Frontend Developer (Freelance)",
    tags: ["React", "Responsive UI", "Tailwind CSS", "SEO"],
    stats: [
      { label: "Live Site", value: "medikaone.com" },
      { label: "Focus", value: "HealthTech UI" },
    ],
    keyContributions: [
      "Mengimplementasikan tata letak responsif dan aset media yang cepat dimuat.",
      "Menata struktur HTML semantik dan alur navigasi pengguna yang jernih.",
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
      "Aplikasi AI berbasis seluler pendeteksi kesegaran buah melalui analisis gambar, dengan backend Express.js di Google Cloud Platform.",
    longDescription:
      "Dikembangkan sebagai proyek capstone Bangkit Academy 2024. Membangun layanan backend menggunakan Express.js dan menyediakannya di Google Cloud Platform.",
    role: "Cloud Computing / Backend Dev",
    tags: ["Express.js", "GCP", "REST API", "Node.js"],
    stats: [
      { label: "Cohort", value: "Bangkit 2024" },
    ],
    keyContributions: [
      "Membangun Express.js API untuk penanganan validasi payload gambar dan inferensi AI.",
      "Menghubungkan endpoint cloud di Google Cloud Platform.",
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
      "Sistem backend dan portal penilaian juri untuk kompetisi kopi, dengan pengujian otomatis Selenium.",
    longDescription:
      "Mengembangkan sistem backend untuk juri mengevaluasi entri kompetisi kopi. Fitur mencakup otentikasi juri dan pengujian otomatis E2E menggunakan Selenium.",
    role: "Backend Developer",
    tags: ["Express.js", "MySQL", "Selenium", "Automated Testing"],
    keyContributions: [
      "Membangun otentikasi juri dan model data nilai peserta.",
      "Menulis skrip pengujian otomatis Selenium untuk pengujian fitur utama.",
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
      "Workflow otomatisasi n8n untuk menganalisis konten media sosial kompetitor via Apify scraping dan insight AI.",
    longDescription:
      "Merancang workflow ekstraksi data otomatis menggunakan n8n dan Apify untuk mengumpulkan metrik sosial media dan mengespor hasil ke Google Sheets.",
    role: "Automation Developer",
    tags: ["n8n", "Apify", "AI Extraction", "Google Sheets"],
    keyContributions: [
      "Merancang trigger scraping otomatisasi dengan retry logic.",
      "Mengintegrasikan prompt AI untuk pelaporan insight konten.",
    ],
  },
];
