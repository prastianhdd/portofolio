"use client"

import { useEffect, useRef } from "react"
import useOnScreen from "@/hooks/useOnScreen"
import useScrollActive from "@/hooks/useScrollActive"
import { type LocalizedText } from "@/lib/dictionary"
import ComingSoon from "@/public/assets/projects/coming-soon.png"
import FreeLLM from "@/public/assets/projects/freellm.png"
import Ilkom from "@/public/assets/projects/ilkom.png"
import OpenGate from "@/public/assets/projects/opengate.png"
import UGC from "@/public/assets/projects/opsipintar-pineapple.png"
import Opsipintar from "@/public/assets/projects/opsipintar.png"
import Plume from "@/public/assets/projects/plume.png"
import Turtle from "@/public/assets/projects/turtle.png"
import { useTranslation } from "@/store/language"
import { useSectionStore } from "@/store/section"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { StaticImageData } from "next/image"
import Link from "next/link"
import { RoughNotation } from "react-rough-notation"
import ProjectCard from "../ProjectCard"

export default function ProjectSection() {
  const sectionRef = useRef(null)
  const { t } = useTranslation()

  const elementRef = useRef<HTMLDivElement>(null)
  const isOnScreen = useOnScreen(elementRef)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const q = gsap.utils.selector(sectionRef)

    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          scrub: true,
          onEnter: () => {
            gsap.fromTo(
              q(".qoutes-animation"),
              {
                y: "-200%",
              },
              {
                y: 0,
              }
            )
          },
        },
      })
    })

    return () => ctx.revert()
  }, [])

  // Set Active Session
  const projectSectionOnView = useScrollActive(sectionRef)
  const { setSection } = useSectionStore()

  useEffect(() => {
    projectSectionOnView && setSection("#project")
  }, [projectSectionOnView, setSection])

  return (
    <section
      ref={sectionRef}
      id="project"
      className="relative h-full bg-gray-50 dark:bg-gray-100 overflow-hidden py-14 px-10 lg:px-[5%]"
    >
      <div className="w-full max-w-[1100px] h-full m-auto flex flex-col items-center gap-14">
        <div className="w-[80%] md:w-full flex absolute left-1/2 -translate-x-1/2 flex-col gap-8 items-center">
          <RoughNotation
            type="underline"
            strokeWidth={2}
            color="hsl(157, 87%, 41%)"
            order={1}
            show={isOnScreen}
          >
            <div className="text-xl md:text-4xl tracking-tight font-medium w-fit dark:text-accentColor">
              {t.project.heading}
            </div>
          </RoughNotation>
          <div ref={elementRef} className="overflow-hidden ">
            <div className="qoutes-animation  md:w-full text-center font-medium flex flex-col items-center">
              <div>{t.project.quote1}</div>
              <div>{t.project.quote2}</div>
            </div>
          </div>
        </div>
        <div className="w-full pt-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} item={project} />
          ))}
        </div>

        <div className="font-medium">
          {t.project.exploreText}{" "}
          <Link
            href="https://github.com/PrastianHD"
            target="_blank"
            aria-label="Expore more in my github profile"
            rel="noopener noreferrer"
            className="text-accentColor navlink dark:hover:text-black"
          >
            {t.project.exploreLink}
          </Link>
        </div>
      </div>
    </section>
  )
}

export interface Project {
  id: number
  title: string
  description: LocalizedText
  techStacks: string[]
  image: StaticImageData
  githubURL: string
  githubApi: string
  liveURL: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "meteoraa",
    description: {
      en: "Smart AI Agent for the Solana ecosystem. Autopilots DLMM LP strategies to screen promising memecoins and execute efficient on-chain swaps in real time.",
      id: "AI Agent cerdas ekosistem Solana. Autopilot strategi LP DLMM untuk screening memecoin potensial dan eksekusi swap on-chain efisien secara real-time.",
    },
    techStacks: ["Solana", "AI Agent", "Web3"],
    image: ComingSoon,
    githubURL: "https://github.com/PrastianHD/meteoraa",
    liveURL: "",
    githubApi: "https://api.github.com/repos/PrastianHD/meteoraa",
  },
  {
    id: 2,
    title: "charon",
    description: {
      en: "Advanced memecoin trading bot powered by an LLM Agent. Performs real-time market sentiment analysis and pulls GMGN data for precise crypto trade execution.",
      id: "Bot trading memecoin tingkat lanjut berbasis Agent LLM. Mampu analisis sentimen pasar real-time dan tarik data GMGN untuk eksekusi trading kripto presisi.",
    },
    techStacks: ["Trading Bot", "Agentic AI", "Crypto"],
    image: ComingSoon,
    githubURL: "https://github.com/PrastianHD/charon",
    liveURL: "",
    githubApi: "https://api.github.com/repos/PrastianHD/charon",
  },
  {
    id: 3,
    title: "prompt-ugc",
    description: {
      en: "Affiliate marketing automation pipeline. Automatically extracts data from Shopee/TikTok links and generates high-quality text-to-video prompts for UGC content.",
      id: "Pipeline automasi affiliate marketing. Otomatis ekstrak data dari link Shopee/TikTok dan generate prompt text-to-video berkualitas untuk konten UGC.",
    },
    techStacks: ["Automation", "Prompt Engineering", "Affiliate"],
    image: UGC,
    githubURL: "https://github.com/PrastianHD/prompt-ugc",
    liveURL: "",
    githubApi: "https://api.github.com/repos/PrastianHD/prompt-ugc",
  },
  {
    id: 4,
    title: "opengate",
    description: {
      en: "Custom API Gateway in the style of OpenRouter to manage and route LLM requests from a single entry point. Built for efficient AI provider management.",
      id: "Sistem API Gateway kustom ala OpenRouter untuk kelola dan rute request LLM dari satu pintu. Dirancang untuk efisiensi manajemen AI provider.",
    },
    techStacks: ["API Gateway", "Backend", "LLM Router"],
    image: OpenGate,
    githubURL: "https://github.com/PrastianHD/opengate",
    liveURL: "https://www.opengate.host/",
    githubApi: "https://api.github.com/repos/PrastianHD/opengate",
  },
  {
    id: 5,
    title: "freellm",
    description: {
      en: "A collection of AI providers for free LLM model access. A cost-effective solution for building AI infrastructure in early development stages.",
      id: "Kumpulan provider AI akses model LLM gratis. Solusi hemat biaya untuk membangun infrastruktur AI pada tahap development awal.",
    },
    techStacks: ["Python", "LLM", "API"],
    image: FreeLLM,
    githubURL: "https://github.com/PrastianHD/freellm",
    liveURL: "https://prastianhd.github.io/freellm/",
    githubApi: "https://api.github.com/repos/PrastianHD/freellm",
  },
  {
    id: 6,
    title: "turtle",
    description: {
      en: "Open-source fork of the Claude Web UI with backend integration to the Opus 4.8 AI model via AWS. Responsive interface with enterprise-grade compute.",
      id: "Fork Claude Web UI open-source dengan integrasi backend ke model AI Opus 4.8 via AWS. Antarmuka responsif dengan komputasi tingkat enterprise.",
    },
    techStacks: ["UI/UX", "AWS", "AI Integration"],
    image: Turtle,
    githubURL: "https://github.com/prastianhdd/turtle",
    liveURL: "https://claudepro.web.id/",
    githubApi: "https://api.github.com/repos/prastianhdd/turtle",
  },
  {
    id: 7,
    title: "roadmap-kurikulum",
    description: {
      en: "Comprehensive guide repository mapping the Computer Science curriculum roadmap. A foundational structure for mastering algorithms, programming, and modern IT.",
      id: "Repositori panduan komprehensif peta roadmap kurikulum Ilmu Komputer. Struktur fundamental untuk kuasai algoritma, programming, dan teknologi IT modern.",
    },
    techStacks: ["Computer Science", "Roadmap", "Education"],
    image: Ilkom,
    githubURL: "https://github.com/prastianhdd/roadmap-kurikulum",
    liveURL: "https://ilmukomputer.web.id/",
    githubApi: "https://api.github.com/repos/prastianhdd/roadmap-kurikulum",
  },
  {
    id: 8,
    title: "opsipintar",
    description: {
      en: "Main hub platform built on n8n for digital marketing. Connects directly to Shopee & TikTok affiliates to manage conversions and centralized web operations.",
      id: "Platform hub utama berbasis n8n untuk digital marketing. Terhubung langsung ke affiliate Shopee & TikTok untuk kelola konversi dan operasional web terpusat.",
    },
    techStacks: ["n8n", "Web Development", "Automation"],
    image: Opsipintar,
    githubURL: "https://github.com/PrastianHD/opsipintar",
    liveURL: "https://www.opsipintar.site/",
    githubApi: "https://api.github.com/repos/PrastianHD/opsipintar",
  },

  {
    id: 9,
    title: "plume-testnet",
    description: {
      en: "Plume Testnet automation script with multi-wallet support. Features: daily check-in, ETH/GOON faucet claim, automatic swap to goonUSD, and a staking module.",
      id: "Skrip otomasi Plume Testnet dengan dukungan multi-wallet. Fitur: daily check-in, klaim faucet ETH/GOON, swap otomatis ke goonUSD, dan modul staking.",
    },
    techStacks: ["JavaScript", "EVM", "Blockchain"],
    image: Plume,
    githubURL: "https://github.com/PrastianHD/plume-testnet",
    liveURL: "",
    githubApi: "https://api.github.com/repos/PrastianHD/plume-testnet",
  },
]
