"use client"

import { useEffect, useRef } from "react"
import navlinks from "@/lib/navConfig"
import { cn } from "@/lib/utils"
import { useTranslation } from "@/store/language"
import { useSectionStore } from "@/store/section"
import gsap from "gsap"
import Link from "next/link"
import { usePathname } from "next/navigation"
import LanguageSwitch from "../LanguageSwitch"
import ResumeBtn from "../ResumeBtn"
import ThemeSwitch from "../ThemeSwitch"
import MobileNav from "./MobileNav"

export default function Header() {
  const headerRef = useRef(null)

  useEffect(() => {
    const media = gsap.matchMedia()
    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        headerRef.current,
        { y: -120 },
        { y: 0, duration: 0.7, ease: "Power0.easeNone" }
      )
    })
    return () => media.revert()
  }, [])

  const { section } = useSectionStore()
  const isHome = usePathname() === "/"
  const { t } = useTranslation()

  return (
    <header
      ref={headerRef}
      className="fixed z-[100] top-0 left-0 right-0 bg-transparent backdrop-blur-[6px]"
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-[110] focus:rounded-md focus:bg-white focus:p-3 focus:text-black">{t.accessibility.skipToContent}</a>
      <div className="w-full h-auto bg-gray-50 shadow-sm dark:bg-transparent min-h-[4.5rem] flex items-center px-[5%]">
        <div className="w-full grid items-center grid-cols-8 md:grid-cols-12">
          <div className="col-span-4">
            <Link href="/" className="text-xl">
              <span
                className={cn(
                  "dark:text-white hover:text-accentColor cursor-pointer",
                  isHome && section === "#project" && "dark:text-black"
                )}
              >
                Prastian
              </span>
              <span className="text-accentColor font-bold">HD</span>
            </Link>
          </div>
          <div className="col-span-4 hidden md:block m-auto">
            <nav aria-label={t.accessibility.navigation} className="flex gap-5 lg:gap-10 items-center">
              {navlinks.map((link) => (
                <Link
                  data-active={isHome && link.href === section}
                  key={link.key}
                  href={`/${link.href}`}
                  className={cn(
                    "navlink",
                    isHome && section === "#project" && "dark:text-black"
                  )}
                >
                  {t.nav[link.key]}
                </Link>
              ))}
            </nav>
          </div>
          <div className="col-span-4 flex items-center justify-end gap-1 lg:gap-3">
            <ResumeBtn />
            <ThemeSwitch />
            <LanguageSwitch />
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}
