export type Language = "en" | "id"

export interface LocalizedText {
  en: string
  id: string
}

export const dictionary = {
  en: {
    nav: {
      about: "About",
      project: "Project",
      updates: "Updates",
      contact: "Contact",
    },
    hero: {
      intro: "It's Prastian Hidayat",
      role: "AI & Web3 Engineer | Automation Architect",
      bio: "Shipping autonomous AI agents, LLM-driven trading algorithms, and high-leverage digital workflows. Bridging the gap between scalable Web3 infrastructure and Agentic AI.",
      tagline: "Where on-chain data meets intelligent automation.",
      contactBtn: "Contact Me",
      downloadCV: "Download CV",
      resume: "Resume",
      viewProject: "View Project",
      contactStrip: "Contact me",
    },
    about: {
      quote: "Simplicity is the soul of efficiency.",
      heading: "About me",
      bio: "Full-stack builder specializing in Agentic AI, Web3 infrastructure, and scalable backend automation. I don't just write code, I engineer autonomous digital workers. My current focus ranges from deploying LLM-driven trading bots on Solana (like Meteoraa and Charon) and engineering custom API gateways, to orchestrating complex digital workflows via n8n. Combining a deep background in on-chain data extraction with modern AI orchestration, I build hands-free, high-utility systems. I'm also a technical writer sharing pragmatic blockchain guides",
      educationLabel: "My Educational background.",
      university: "Putra Bangsa University (UPB)",
      degree: "Computer Science (Ilmu Komputer), Kebumen — Indonesia.",
      yearsExperience: "Years Experience",
      publicRepos: "Public Repositories",
      githubFollowers: "GitHub Followers",
    },
    project: {
      heading: "Featured Projects",
      quote1: "Good design is obvious. Great design is transparent.",
      quote2: "Design is not for philosophy, it's for life.",
      exploreText: "Explore more projects in",
      exploreLink: "my github profile",
    },
    blog: {
      heading: "Updates",
      intro1Pre: "I share quick notes, project updates, and thoughts on Web3 over on",
      intro1Link: "X",
      intro2: "Here are a few recent posts.",
      followLink: "Follow @prastianhd on X",
    },
    contact: {
      pre: "Want to collaborate?",
      heading: "Contact me!",
      name: "Prastian Hidayat",
      role: "Web3 Developer & Technical Writer",
      paragraph:
        "I'm always excited to connect with like-minded professionals and potential collaborators. Whether you have a project in mind, need assistance, or just want to say hello, feel free to reach out!",
      madeWith: "Made with ❤️ by Prastian Hidayat",
    },
  },
  id: {
    nav: {
      about: "Tentang",
      project: "Proyek",
      updates: "Update",
      contact: "Kontak",
    },
    hero: {
      intro: "Halo, saya Prastian Hidayat",
      role: "AI & Web3 Engineer | Automation Architect",
      bio: "Membangun AI agent otonom, algoritma trading berbasis LLM, dan workflow digital berdaya ungkit tinggi. Menjembatani infrastruktur Web3 yang skalabel dengan Agentic AI.",
      tagline: "Tempat data on-chain bertemu automasi cerdas.",
      contactBtn: "Hubungi Saya",
      downloadCV: "Unduh CV",
      resume: "Resume",
      viewProject: "Lihat Proyek",
      contactStrip: "Hubungi saya",
    },
    about: {
      quote: "Kesederhanaan adalah jiwa dari efisiensi.",
      heading: "Tentang saya",
      bio: "Full-stack builder yang berfokus pada Agentic AI, infrastruktur Web3, dan automasi backend yang skalabel. Saya tidak sekadar menulis kode, saya merekayasa pekerja digital otonom. Fokus saya saat ini mulai dari men-deploy bot trading berbasis LLM di Solana (seperti Meteoraa dan Charon) dan merekayasa API gateway kustom, hingga mengorkestrasi workflow digital kompleks via n8n. Memadukan latar belakang mendalam di ekstraksi data on-chain dengan orkestrasi AI modern, saya membangun sistem berdaya guna tinggi yang hands-free. Saya juga seorang technical writer yang berbagi panduan blockchain praktis",
      educationLabel: "Latar belakang pendidikan saya.",
      university: "Universitas Putra Bangsa (UPB)",
      degree: "Ilmu Komputer, Kebumen — Indonesia.",
      yearsExperience: "Tahun Pengalaman",
      publicRepos: "Repositori Publik",
      githubFollowers: "Pengikut GitHub",
    },
    project: {
      heading: "Proyek Unggulan",
      quote1: "Desain yang baik itu jelas. Desain yang hebat itu transparan.",
      quote2: "Desain bukan untuk filosofi, tapi untuk kehidupan.",
      exploreText: "Jelajahi proyek lainnya di",
      exploreLink: "profil github saya",
    },
    blog: {
      heading: "Update",
      intro1Pre: "Saya berbagi catatan singkat, update proyek, dan pemikiran soal Web3 di",
      intro1Link: "X",
      intro2: "Berikut beberapa postingan terbaru.",
      followLink: "Ikuti @prastianhd_ di X",
    },
    contact: {
      pre: "Ingin berkolaborasi?",
      heading: "Hubungi saya!",
      name: "Prastian Hidayat",
      role: "Web3 Developer & Technical Writer",
      paragraph:
        "Saya selalu senang terhubung dengan profesional dan calon kolaborator yang sejalan. Entah Anda punya ide proyek, butuh bantuan, atau sekadar ingin menyapa, jangan ragu untuk menghubungi!",
      madeWith: "Dibuat dengan ❤️ oleh Prastian Hidayat",
    },
  },
}

export type Dictionary = (typeof dictionary)["en"]
