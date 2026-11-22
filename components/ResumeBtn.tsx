"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { cn } from "@/lib/utils"
import { useTranslation } from "@/store/language"
import { useSectionStore } from "@/store/section"
import { usePathname } from "next/navigation"

export default function ResumeBtn() {
  const linkRef = useRef<HTMLAnchorElement>(null)
  useEffect(() => {
    const media = gsap.matchMedia()
    media.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      const q = gsap.utils.selector(linkRef)
      gsap.fromTo(q(".border-top"), { left: "-100%" }, { left: "100%", repeat: -1, duration: 2 })
      gsap.fromTo(q(".border-right"), { top: "-100%" }, { top: "100%", delay: 0.5, repeat: -1, duration: 2 })
      gsap.fromTo(q(".border-bottom"), { right: "-100%" }, { right: "100%", delay: 1, repeat: -1, duration: 2 })
      gsap.fromTo(q(".border-left"), { bottom: "-100%" }, { bottom: "100%", delay: 1.5, repeat: -1, duration: 2 })
    })
    return () => media.revert()
  }, [])

  const { section } = useSectionStore()
  const isHome = usePathname() === "/"
  const { t } = useTranslation()
  return (
    <a
      ref={linkRef}
      href="https://drive.google.com/drive/folders/1mcpduJNmaqj8v3n-clbxKU6qfMGdRXuN"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "relative overflow-hidden hidden min-h-11 items-center justify-center rounded-md border border-gray-500 px-4 text-xs text-black dark:text-gray-300 hover:bg-accentColor hover:text-black lg:inline-flex",
        isHome && section === "#project" && "dark:text-black"
      )}
    >
      <span aria-hidden="true" className="border-top pointer-events-none absolute left-[-100%] top-0 h-px w-full bg-accentColor" />
      <span aria-hidden="true" className="border-right pointer-events-none absolute right-0 top-[-100%] h-full w-px bg-accentColor" />
      <span aria-hidden="true" className="border-bottom pointer-events-none absolute bottom-0 right-[-100%] h-px w-full bg-accentColor" />
      <span aria-hidden="true" className="border-left pointer-events-none absolute bottom-[-100%] left-0 h-full w-px bg-accentColor" />
      {t.hero.resume}
    </a>
  )
}
