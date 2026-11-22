import type { LocalizedText } from "@/lib/dictionary"
import type { StaticImageData } from "next/image"
import ComingSoon from "@/public/assets/projects/coming-soon.png"
import FreeLLM from "@/public/assets/projects/freellm.png"
import Ilkom from "@/public/assets/projects/ilkom.png"
import OpenGate from "@/public/assets/projects/opengate.png"
import UGC from "@/public/assets/projects/opsipintar-pineapple.png"
import Opsipintar from "@/public/assets/projects/opsipintar.png"
import Plume from "@/public/assets/projects/plume.png"
import Turtle from "@/public/assets/projects/turtle.png"
import SmartPlant from "@/public/assets/projects/smartplant.png"
import SEO from "@/public/assets/projects/seo.png"
import TabelKebenaran from "@/public/assets/projects/tabel-kebenaran.png"

export interface Project {
  id: number
  title: string
  description: LocalizedText
  techStacks: string[]
  image: StaticImageData
  githubURL: string
  liveURL: string
  featured?: boolean
  status?: "running" | "development"
  fork?: boolean
  detail?: {
    slug: string
    scope: LocalizedText
    limitations: LocalizedText
  }
}

export const projects: Project[] = [
  {
    id: 4,
    title: "opengate",
    description: {
      en: "An API gateway project exploring a single entry point for requests to multiple LLM providers. Not yet ready for public use.",
      id: "Proyek API gateway untuk mengeksplorasi satu pintu akses request ke beberapa provider LLM. Belum siap digunakan publik.",
    },
    techStacks: ["API Gateway", "Backend", "LLM Router"],
    image: OpenGate,
    githubURL: "https://github.com/PrastianHD/opengate",
    liveURL: "https://opengate.host/",
    featured: true,
    status: "development",
  },
  {
    id: 10,
    title: "smartplant",
    description: {
      en: "An ESP32 plant monitoring and automatic irrigation project with a web dashboard for sensor readings and watering history. The preview image uses simulated data.",
      id: "Proyek monitoring tanaman dan penyiraman otomatis berbasis ESP32, dengan dashboard web untuk data sensor serta riwayat penyiraman. Gambar pratinjau menggunakan data simulasi.",
    },
    techStacks: ["ESP32", "TypeScript", "Cloudflare Workers", "D1"],
    image: SmartPlant,
    githubURL: "https://github.com/prastianhdd/smartplant",
    liveURL: "https://smartplant.web.id/",
    featured: true,
  },
  {
    id: 11,
    title: "opsipintar-pineaple",
    description: {
      en: "A UGC content workflow that analyzes Shopee product links and prepares creative hooks, image material, and video prompts for affiliate content.",
      id: "Workflow konten UGC yang menganalisis tautan produk Shopee dan menyiapkan hook kreatif, materi gambar, serta prompt video untuk konten affiliate.",
    },
    techStacks: ["Next.js", "TypeScript", "Prompt Engineering"],
    image: UGC,
    githubURL: "https://github.com/PrastianHD/opsipintar-pineaple",
    liveURL: "https://v0-prompt-craft-ugc-generator.vercel.app/",
    featured: true,
  },
  {
    id: 8,
    title: "opsipintar",
    description: {
      en: "A digital marketing hub connecting affiliate workflows and web operations through n8n automation.",
      id: "Hub digital marketing yang menghubungkan workflow affiliate dan operasional web melalui automasi n8n.",
    },
    techStacks: ["n8n", "Web Development", "Automation"],
    image: Opsipintar,
    githubURL: "https://github.com/PrastianHD/opsipintar",
    liveURL: "https://www.opsipintar.site/",
    featured: true,
    status: "running",
    detail: {
      slug: "opsipintar",
      scope: {
        en: "The project explores connecting affiliate activities and web operations in a digital marketing hub. n8n provides the workflow automation layer.",
        id: "Proyek ini mengeksplorasi penghubungan aktivitas affiliate dan operasional web dalam hub digital marketing. n8n menjadi lapisan automasi workflow.",
      },
      limitations: {
        en: "The project runs and has a public site. Paying customers and measured business outcomes have not been established; working status is not a production-readiness guarantee.",
        id: "Proyek sudah berjalan dan memiliki situs publik. Pelanggan berbayar serta hasil bisnis terukur belum terkonfirmasi; status berjalan bukan jaminan kesiapan produksi.",
      },
    },
  },
  {
    id: 7,
    title: "roadmap-kurikulum",
    description: {
      en: "A Computer Science learning roadmap covering algorithms, programming, and related study topics.",
      id: "Peta belajar Ilmu Komputer yang mencakup algoritma, pemrograman, dan topik perkuliahan terkait.",
    },
    techStacks: ["Computer Science", "Roadmap", "Education"],
    image: Ilkom,
    githubURL: "https://github.com/prastianhdd/roadmap-kurikulum",
    liveURL: "https://ilmukomputer.web.id/",
    featured: true,
  },
  {
    id: 9,
    title: "plume-testnet",
    description: {
      en: "Scripts for exploring Plume testnet workflows, including check-ins, faucet claims, swaps, and staking.",
      id: "Script untuk mengeksplorasi workflow testnet Plume, termasuk check-in, klaim faucet, swap, dan staking.",
    },
    techStacks: ["JavaScript", "EVM", "Blockchain"],
    image: Plume,
    githubURL: "https://github.com/PrastianHD/plume-testnet",
    liveURL: "",
    featured: true,
  },
  {
    id: 12,
    title: "seo-dari-nol",
    description: {
      en: "Learning material explaining how Google discovers, reads, and evaluates web pages.",
      id: "Materi belajar tentang cara Google menemukan, membaca, dan menilai halaman web.",
    },
    techStacks: ["MDX", "SEO", "Education"],
    image: SEO,
    githubURL: "https://github.com/prastianhdd/seo-dari-nol",
    liveURL: "https://seo-dari-nol.vercel.app/",
  },
  {
    id: 13,
    title: "tabel-kebenaran",
    description: {
      en: "An interactive web tool that generates truth tables to visualize propositional logic.",
      id: "Tool web interaktif yang menghasilkan tabel kebenaran untuk memvisualisasikan logika proposisional.",
    },
    techStacks: ["JavaScript", "Logic", "Education"],
    image: TabelKebenaran,
    githubURL: "https://github.com/prastianhdd/tabel-kebenaran",
    liveURL: "https://tabellogika.vercel.app/",
  },
  {
    id: 14,
    title: "InLynk",
    description: {
      en: "A voice conversation PWA for sharing thoughts and practicing languages.",
      id: "PWA percakapan berbasis suara untuk berbagi cerita dan belajar bahasa.",
    },
    techStacks: ["Next.js", "TypeScript", "Tailwind CSS", "PWA"],
    image: ComingSoon,
    githubURL: "https://github.com/prastianhdd/InLynk",
    liveURL: "",
  },
  {
    id: 15,
    title: "kampusfund",
    description: {
      en: "A JavaScript web project built with React and Vite. Its README currently contains the starter template documentation.",
      id: "Proyek web JavaScript berbasis React dan Vite. README saat ini masih memuat dokumentasi template awal.",
    },
    techStacks: ["React", "Vite", "JavaScript"],
    image: ComingSoon,
    githubURL: "https://github.com/PrastianHD/kampusfund",
    liveURL: "",
  },
  {
    id: 16,
    title: "evm-tools",
    description: {
      en: "JavaScript tools for EVM network workflows, including ETH transfers, contract interaction, and smart contract creation.",
      id: "Tool JavaScript untuk workflow jaringan EVM, termasuk transfer ETH, interaksi kontrak, dan pembuatan smart contract.",
    },
    techStacks: ["JavaScript", "EVM", "Smart Contracts"],
    image: ComingSoon,
    githubURL: "https://github.com/PrastianHD/evm-tools",
    liveURL: "",
  },
  {
    id: 17,
    title: "relay-sdk",
    description: {
      en: "A JavaScript script project for working with Relay Link bridge workflows.",
      id: "Proyek script JavaScript untuk workflow bridge Relay Link.",
    },
    techStacks: ["JavaScript", "Bridge", "Web3"],
    image: ComingSoon,
    githubURL: "https://github.com/PrastianHD/relay-sdk",
    liveURL: "",
  },
  {
    id: 1,
    title: "meteoraa",
    description: {
      en: "A customized fork exploring AI agents and liquidity workflows in the Solana ecosystem.",
      id: "Pengembangan dari fork untuk mengeksplorasi AI agent dan workflow likuiditas di ekosistem Solana.",
    },
    techStacks: ["Solana", "AI Agent", "Web3"],
    image: ComingSoon,
    githubURL: "https://github.com/PrastianHD/meteoraa",
    liveURL: "",
    fork: true,
  },
  {
    id: 2,
    title: "charon",
    description: {
      en: "A customized fork exploring LLM agents and market-data workflows for crypto trading experiments.",
      id: "Pengembangan dari fork untuk mengeksplorasi agent LLM dan workflow data pasar dalam eksperimen trading kripto.",
    },
    techStacks: ["Trading Bot", "Agentic AI", "Crypto"],
    image: ComingSoon,
    githubURL: "https://github.com/PrastianHD/charon",
    liveURL: "",
    fork: true,
  },
  {
    id: 5,
    title: "freellm",
    description: {
      en: "A collection of LLM provider references for exploring model access during development.",
      id: "Kumpulan referensi provider LLM untuk mengeksplorasi akses model selama pengembangan.",
    },
    techStacks: ["Python", "LLM", "API"],
    image: FreeLLM,
    githubURL: "https://github.com/PrastianHD/freellm",
    liveURL: "",
  },
  {
    id: 6,
    title: "turtle",
    description: {
      en: "An AI chat interface project exploring UI customization and backend integration.",
      id: "Proyek antarmuka chat AI untuk mengeksplorasi kustomisasi UI dan integrasi backend.",
    },
    techStacks: ["UI/UX", "AI Integration"],
    image: Turtle,
    githubURL: "https://github.com/prastianhdd/turtle",
    liveURL: "",
  },
]

export const detailProjects = projects.filter((project) => project.detail)

export function getDetailProject(slug: string) {
  return detailProjects.find((project) => project.detail?.slug === slug)
}
