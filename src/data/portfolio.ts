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
    title: "Frontend & Utama",
    description: "Rangkaian teknologi utama untuk membangun antarmuka pengguna web modern & responsif",
    skills: [
      { name: "React", note: "Siklus hidup komponen, state management, custom hooks" },
      { name: "Next.js", note: "App Router, SSR/SSG, route handlers, performa" },
      { name: "TypeScript", note: "Pengontrolan tipe ketat, definisi interface" },
      { name: "JavaScript", note: "ESNext+, async/await, manipulasi DOM" },
      { name: "HTML & CSS", note: "Struktur semantik, flexbox, grid, aksesibilitas" },
    ],
  },
  {
    title: "Styling & Framework",
    description: "Peralatan ekosistem desain antarmuka responsif",
    skills: [
      { name: "Tailwind CSS", note: "Layout utility-first, custom design tokens, breakpoints" },
      { name: "Bootstrap", note: "Prototyping cepat & refaktorisasi sistem" },
      { name: "Responsive UI", note: "Pendekatan mobile-first & kompatibilitas peramban" },
    ],
  },
  {
    title: "Backend & Basis Data",
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
    title: "Tools & Peralatan",
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
    id: "duluin-jobs",
    name: "Duluin Jobs — Fullstack Recruitment Platform",
    category: "Platform Rekrutmen & Microservices",
    featured: true,
    layoutType: "large",
    description:
      "Platform rekrutmen dan pencarian kerja end-to-end dengan arsitektur backend microservices Go (Golang), dual-frontend Next.js (Applicant & Recruiter Portal), serta sistem verifikasi perusahaan dan pelacakan kandidat.",
    longDescription:
      "Duluin Jobs adalah ekosistem platform rekrutmen komprehensif yang dirancang untuk mempertemukan pencari kerja (job seekers) dan recruiter perusahaan. Bertindak sebagai Fullstack Developer, saya merancang dan membangun arsitektur sistem microservices backend menggunakan Go (Golang) dengan pola Database-Per-Service (PostgreSQL, GORM, Redis, API Gateway) serta membangun 2 portal antarmuka web modern menggunakan Next.js (TypeScript & Tailwind CSS) untuk portal Pelamar dan Portal Recruiter/Superadmin.",
    role: "Fullstack Developer (Go Backend & Next.js Frontend)",
    tags: [
      "Go (Golang)",
      "Next.js",
      "TypeScript",
      "Microservices",
      "PostgreSQL",
      "Tailwind CSS",
      "Docker",
      "Redis",
      "REST API",
    ],
    stats: [
      { label: "Arsitektur", value: "Microservices Go + Dual Next.js" },
      { label: "Portals", value: "Applicant, Recruiter & Superadmin" },
      { label: "Peran", value: "Fullstack Developer" },
    ],
    keyContributions: [
      "Merancang arsitektur backend microservices terdistribusi dengan Go (Golang), API Gateway reverse proxy, SSO Cookie Auth, dan PostgreSQL database-per-service (8 microservices: Gateway, User, Company, Job Posting, Applicant Tracking, Jobseeker Profile, Form, Shared).",
      "Membangun Portal Pelamar (Applicant Web App) berbasis Next.js (App Router), TanStack Query, dan Tailwind CSS untuk eksplorasi lowongan, lamaran instan, dan pelacakan status kandidat.",
      "Mengembangkan Portal Recruiter & Superadmin CMS untuk manajemen verifikasi perusahaan (Approval/Rejection flow), publikasi lowongan kerja, kustomisasi tahap rekrutmen, dan analisis kandidat global.",
      "Mengimplementasikan kontainerisasi lingkungan pengembangan menggunakan Docker Compose untuk orchestration seluruh microservices backend dan dual-frontend.",
    ],
    liveUrl: "https://dev-jobs.duluin.id/",
    githubUrl: "https://github.com/DarmaCahya",
  },
  {
    id: "journal-medika-one",
    name: "Journal Medika One",
    category: "Teknologi Kesehatan",
    featured: true,
    layoutType: "editorial",
    description:
      "Portal jurnal dan publikasi ilmiah kesehatan MedikaOne yang terintegrasi dengan REST API menggunakan Next.js, Tailwind CSS, dan TanStack Query.",
    longDescription:
      "Journal Medika One merupakan platform jurnal ilmiah medis (journal.medikaone.com) untuk publikasi artikel dan riset kesehatan. Saya bertindak sebagai Frontend Developer yang membangun antarmuka web menggunakan Next.js, Tailwind CSS, serta mengintegrasikan REST API backend menggunakan TanStack Query (React Query) untuk penanganan fetching data, caching, dan sinkronisasi status secara efisien.",
    role: "Frontend Developer",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "TanStack Query", "REST API"],
    stats: [
      { label: "Situs Live", value: "journal.medikaone.com" },
      { label: "Peran", value: "Frontend Developer" },
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
    category: "Template Fullstack & CMS",
    featured: true,
    layoutType: "large",
    description:
      "Pengembangan arsitektur template platform client fullstack menggunakan Next.js yang mencakup portal publik perusahaan dan dashboard CMS Administrator lengkap.",
    longDescription:
      "Dibuat dari nol sebagai template kustom berkinerja tinggi untuk proyek klien. Menggabungkan portal depan publik responsif (beranda, galeri aktivitas, layanan, rekrutmen, berita) dan Dashboard Admin CMS komprehensif untuk pengelolaan artikel, pencatatan leads/pesan, manajemen layanan, dan activity log.",
    role: "Fullstack Developer & UI/UX",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Fullstack", "CMS Admin Dashboard"],
    stats: [
      { label: "Peran", value: "Fullstack Dev & UI/UX" },
      { label: "Cakupan", value: "Portal Publik + Admin CMS" },
    ],
    keyContributions: [
      "Merancang UI/UX antarmuka portal publik responsif & dashboard Administrator CMS modern.",
      "Membangun arsitektur Next.js fullstack dengan manajemen konten artikel, galeri, dan leads tracking.",
      "Menyediakan sistem template siap pakai untuk berbagai proyek web klien perusahaan.",
    ],
    githubUrl: "https://github.com/DarmaCahya",
  },
  {
    id: "satria-enam-putra-perkasa",
    name: "PT. Satria Enam Putra Perkasa — Corporate Website",
    category: "Company Profile",
    featured: true,
    layoutType: "horizontal",
    description:
      "Website company profile resmi PT. Satria Enam Putra Perkasa dengan desain antarmuka profesional, sistem profil korporat, dan integrasi katalog layanan.",
    longDescription:
      "Mengembangkan situs web company profile resmi untuk PT. Satria Enam Putra Perkasa. Proyek mencakup perancangan antarmuka UI/UX yang mencerminkan kredibilitas korporat, koding antarmuka Laravel & MySQL database, serta deployment penuh di hosting Hostinger.",
    role: "Web Developer (UI/UX, Coding & Hostinger Deployment)",
    tags: ["Laravel", "MySQL", "Tailwind CSS", "Hostinger", "UI/UX Design", "SEO"],
    stats: [
      { label: "Teknologi", value: "Laravel & MySQL" },
      { label: "Deployment", value: "Hostinger Setup" },
    ],
    keyContributions: [
      "Merancang UI/UX antarmuka korporat yang responsif dan ramah SEO.",
      "Membangun struktur konten profil perusahaan dan katalog layanan menggunakan Laravel.",
      "Melakukan penyiapan environment server, domain, dan deployment penuh di Hostinger.",
    ],
  },
  {
    id: "sentro-care",
    name: "Sentro Care — Healthcare & Service Website",
    category: "Company Profile",
    featured: true,
    layoutType: "editorial",
    description:
      "Pengembangan situs informasi layanan kesehatan Sentro Care dengan tata letak responsif, navigasi intuitif, dan form kontak layanan.",
    longDescription:
      "Merancang dan membangun situs company profile Sentro Care untuk menyajikan informasi fasilitas layanan kesehatan secara jernih dan ramah pengguna. Menggunakan framework Laravel dan MySQL dengan deployment di Hostinger.",
    role: "Web Developer (UI/UX, Coding & Hostinger Deployment)",
    tags: ["Laravel", "MySQL", "Tailwind CSS", "Hostinger", "UI/UX Design"],
    stats: [
      { label: "Teknologi", value: "Laravel & MySQL" },
      { label: "Deployment", value: "Hostinger Setup" },
    ],
    keyContributions: [
      "Merancang tata letak antarmuka yang bersih, mudah diakses, dan responsif di perangkat seluler.",
      "Mengimplementasikan sistem pemrosesan formulir kontak dan permintaan layanan.",
      "Deployment dan konfigurasi penuh di server Hostinger.",
    ],
  },
  {
    id: "nooren",
    name: "Nooren — Brand & Corporate Profile Website",
    category: "Company Profile",
    featured: true,
    layoutType: "horizontal",
    description:
      "Situs company profile brand Nooren dengan tampilan visual elegan, animasi antarmuka halus, serta optimasi kecepatan muat halaman.",
    longDescription:
      "Website resmi brand Nooren yang menyajikan katalog produk dan identitas merek secara profesional. Dikembangkan menggunakan Laravel dan Tailwind CSS dengan setup deployment di Hostinger.",
    role: "Web Developer (UI/UX, Coding & Hostinger Deployment)",
    tags: ["Laravel", "MySQL", "Tailwind CSS", "Hostinger", "UI/UX Design"],
    stats: [
      { label: "Teknologi", value: "Laravel & MySQL" },
      { label: "Deployment", value: "Hostinger Setup" },
    ],
    keyContributions: [
      "Mengembangkan visual branding web Nooren dengan elemen UI interaktif.",
      "Optimasi performa halaman untuk memastikan waktu pemuatan yang sangat cepat.",
      "Deployment server dan konfigurasi SSL di Hostinger.",
    ],
  },
  {
    id: "sauca",
    name: "SAUCA — Corporate Business Portal",
    category: "Company Profile",
    featured: false,
    layoutType: "editorial",
    description:
      "Pengembangan portal bisnis dan company profile SAUCA berkinerja tinggi yang dirancang untuk memperkuat kredibilitas identitas perusahaan.",
    longDescription:
      "Website korporat SAUCA yang menyajikan portofolio usaha dan profil manajemen perusahaan. Dibangun di atas Laravel dan MySQL dengan deployment Hostinger.",
    role: "Web Developer (UI/UX, Coding & Hostinger Deployment)",
    tags: ["Laravel", "MySQL", "Tailwind CSS", "Hostinger", "UI/UX Design"],
    stats: [
      { label: "Teknologi", value: "Laravel & MySQL" },
      { label: "Deployment", value: "Hostinger Setup" },
    ],
    keyContributions: [
      "Membuat struktur arsitektur halaman korporat modern.",
      "Pengintegrasian database MySQL untuk manajemen informasi bisnis.",
      "Konfigurasi hosting dan domain di Hostinger.",
    ],
  },
  {
    id: "soffalux-berkah-jaya",
    name: "PT. Soffalux Berkah Jaya — Industrial Profile",
    category: "Company Profile",
    featured: false,
    layoutType: "horizontal",
    description:
      "Pengembangan situs profil industri & manufaktur PT. Soffalux Berkah Jaya lengkap dengan portofolio produk dan form kontak bisnis.",
    longDescription:
      "Situs company profile untuk PT. Soffalux Berkah Jaya guna menampilkan kapabilitas manufaktur dan suplai industri. Dibangun menggunakan Laravel, MySQL, dan di-deploy di Hostinger.",
    role: "Web Developer (UI/UX, Coding & Hostinger Deployment)",
    tags: ["Laravel", "MySQL", "Tailwind CSS", "Hostinger", "UI/UX Design"],
    stats: [
      { label: "Teknologi", value: "Laravel & MySQL" },
      { label: "Deployment", value: "Hostinger Setup" },
    ],
    keyContributions: [
      "Merancang galeri produk industri dan spesifikasi teknis.",
      "Optimasi struktur navigasi untuk kebutuhan B2B.",
      "Deployment penuh di Hostinger.",
    ],
  },
  {
    id: "coway-international",
    name: "PT. Coway International — Product Showcase",
    category: "Company Profile",
    featured: false,
    layoutType: "editorial",
    description:
      "Website katalog produk dan company profile PT. Coway International untuk menampilkan lini produk serta jalur edukasi konsumen.",
    longDescription:
      "Pengembangan situs profil dan katalog untuk PT. Coway International. Fokus pada penyajian informasi produk yang intuitif bagi calon konsumen.",
    role: "Web Developer (UI/UX, Coding & Hostinger Deployment)",
    tags: ["Laravel", "MySQL", "Tailwind CSS", "Hostinger", "UI/UX Design"],
    stats: [
      { label: "Teknologi", value: "Laravel & MySQL" },
      { label: "Deployment", value: "Hostinger Setup" },
    ],
    keyContributions: [
      "Pengembangan halaman katalog produk responsif.",
      "Integrasi formulir penawaran dan pertanyaan pelanggan.",
      "Deployment Hostinger.",
    ],
  },
  {
    id: "elang-security-nusantara",
    name: "Elang Security Nusantara — Security Services",
    category: "Company Profile",
    featured: false,
    layoutType: "horizontal",
    description:
      "Portal penyedia jasa pengamanan profesional Elang Security Nusantara dengan struktur navigasi terorganisir dan kredensial perusahaan.",
    longDescription:
      "Website profil penyedia layanan keamanan Elang Security Nusantara. Menyajikan informasi legalitas, jaringan operasional, dan layanan pengamanan.",
    role: "Web Developer (UI/UX, Coding & Hostinger Deployment)",
    tags: ["Laravel", "MySQL", "Tailwind CSS", "Hostinger", "UI/UX Design"],
    stats: [
      { label: "Teknologi", value: "Laravel & MySQL" },
      { label: "Deployment", value: "Hostinger Setup" },
    ],
    keyContributions: [
      "Merancang tata letak korporat yang tegas dan profesional.",
      "Mengembangkan modul layanan dan pengajuan kerja sama.",
      "Deployment penuh di Hostinger.",
    ],
  },
  {
    id: "jgr-garmen",
    name: "JGR Garmen — Apparel & Manufacture Profile",
    category: "Company Profile",
    featured: false,
    layoutType: "editorial",
    description:
      "Website company profile dan katalog konveksi JGR Garmen yang menampilkan lini manufaktur pakaian dan galeri hasil produksi.",
    longDescription:
      "Situs resmi JGR Garmen untuk mempromosikan kapasitas produksi konveksi dan manufaktur garmen skala besar.",
    role: "Web Developer (UI/UX, Coding & Hostinger Deployment)",
    tags: ["Laravel", "MySQL", "Tailwind CSS", "Hostinger", "UI/UX Design"],
    stats: [
      { label: "Teknologi", value: "Laravel & MySQL" },
      { label: "Deployment", value: "Hostinger Setup" },
    ],
    keyContributions: [
      "Membuat galeri foto portofolio hasil jahit dan garmen.",
      "Form konsultasi pesanan kustom.",
      "Deployment di Hostinger.",
    ],
  },
  {
    id: "suta",
    name: "SUTA — Business Identity Website",
    category: "Company Profile",
    featured: false,
    layoutType: "horizontal",
    description:
      "Website profil bisnis SUTA dengan desain antarmuka minimalis modern untuk menampilkan profil usaha dan saluran komunikasi klien.",
    longDescription:
      "Website profil usaha SUTA dengan fokus pada penyajian brand identity yang bersih dan modern berbasis Laravel & Hostinger.",
    role: "Web Developer (UI/UX, Coding & Hostinger Deployment)",
    tags: ["Laravel", "MySQL", "Tailwind CSS", "Hostinger", "UI/UX Design"],
    stats: [
      { label: "Teknologi", value: "Laravel & MySQL" },
      { label: "Deployment", value: "Hostinger Setup" },
    ],
    keyContributions: [
      "Desain UI/UX minimalis kontemporer.",
      "Penyiapan infrastruktur web di Hostinger.",
    ],
  },
  {
    id: "nawa-multi-parts",
    name: "Nawa Multi Parts — Industrial Parts Profile",
    category: "Company Profile",
    featured: false,
    layoutType: "editorial",
    description:
      "Situs web resmi Nawa Multi Parts untuk pengenalan suku cadang industri, spesifikasi produk, dan integrasi penawaran harga.",
    longDescription:
      "Website profil perusahaan distributor suku cadang industri Nawa Multi Parts. Dibangun dengan sistem katalog informasi barang dan form inquiry.",
    role: "Web Developer (UI/UX, Coding & Hostinger Deployment)",
    tags: ["Laravel", "MySQL", "Tailwind CSS", "Hostinger", "UI/UX Design"],
    stats: [
      { label: "Teknologi", value: "Laravel & MySQL" },
      { label: "Deployment", value: "Hostinger Setup" },
    ],
    keyContributions: [
      "Penyusunan katalog spesifikasi barang industri.",
      "Form permintaan penawaran harga.",
      "Deployment server Hostinger.",
    ],
  },
  {
    id: "bni-ventures-duluin",
    name: "BNI Ventures & Corporate Portals",
    category: "Platform Fintek & Korporat",
    featured: true,
    layoutType: "editorial",
    description:
      "Pengintegrasian antarmuka frontend dan platform web korporat untuk BNI Ventures, Satu Creative dashboard, dan sistem operasional internal.",
    longDescription:
      "Mengintegrasikan antarmuka frontend dengan API backend untuk portal BNI Ventures, merancang platform Satu Creative (landing page + dashboard operasional internal), serta mengembangkan Whistleblowing System (WBS) dengan fitur manajemen kasus terenkripsi.",
    role: "Website Developer",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST API"],
    stats: [
      { label: "Peran", value: "Website Developer" },
      { label: "Dampak", value: "15+ Platform" },
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
    category: "Platform Presensi Event",
    featured: true,
    layoutType: "horizontal",
    description:
      "Aplikasi web presensi event komunal yang memungkinkan peserta memindai QR code langsung melalui browser tanpa hambatan autentikasi.",
    longDescription:
      "Mengembangkan aplikasi pemindaian presensi ringan dan sangat responsif untuk manajemen event (qrhunt.communal.id). Peserta memindai QR code secara langsung dari browser mereka.",
    role: "Frontend Developer (Freelance)",
    tags: ["Next.js", "React", "REST API", "Tailwind CSS"],
    stats: [
      { label: "Situs Live", value: "qrhunt.communal.id" },
      { label: "Performa", value: "Pemindaian Instan" },
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
    category: "Teknologi Kesehatan",
    featured: true,
    layoutType: "editorial",
    description:
      "Landing page dan portal informasi responsif untuk aplikasi layanan kesehatan MedikaOne.",
    longDescription:
      "MedikaOne memerlukan landing page kesehatan yang dapat dipercaya dengan fokus pada struktur informasi, aksesibilitas layanan, dan responsivitas antar perangkat.",
    role: "Frontend Developer (Freelance)",
    tags: ["React", "Responsive UI", "Tailwind CSS", "SEO"],
    stats: [
      { label: "Situs Live", value: "medikaone.com" },
      { label: "Fokus", value: "Antarmuka Kesehatan" },
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
    category: "Proyek Capstone Bangkit",
    featured: false,
    layoutType: "compact",
    description:
      "Aplikasi AI berbasis seluler pendeteksi kesegaran buah melalui analisis gambar, dengan backend Express.js di Google Cloud Platform.",
    longDescription:
      "Dikembangkan sebagai proyek capstone Bangkit Academy 2024. Membangun layanan backend menggunakan Express.js dan menyediakannya di Google Cloud Platform.",
    role: "Cloud Computing / Backend Dev",
    tags: ["Express.js", "GCP", "REST API", "Node.js"],
    stats: [
      { label: "Program", value: "Bangkit 2024" },
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
    category: "Platform Akademis & Internal",
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
    category: "Otomasi & AI Workflow",
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
