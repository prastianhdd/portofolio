"use client"

import { useEffect, useRef } from "react"
import navlinks from "@/lib/navConfig"
import { cn } from "@/lib/utils"
import { useTranslation } from "@/store/language"
import { useSectionStore } from "@/store/section"
import gsap from "gsap"
import Link from "next/link"
import LanguageSwitch from "../LanguageSwitch"
import ResumeBtn from "../ResumeBtn"
import ThemeSwitch from "../ThemeSwitch"
import MobileNav from "./MobileNav"

export default function Header() {
  const headerRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { top: -120 },
      { top: 0, duration: 0.7, delay: 2.2, ease: "Power0.easeNone" }
    )
  }, [])

  const { section } = useSectionStore()
  const { t } = useTranslation()

  return (
    <header
      ref={headerRef}
      className="fixed z-[100] top-0 left-0 right-0 bg-transparent backdrop-blur-[6px]"
    >
      <div className="w-full h-auto bg-gray-50 shadow-sm dark:bg-transparent min-h-[4.5rem] flex items-center px-[5%]">
        <div className="w-full grid items-center grid-cols-8 md:grid-cols-12">
          <div className="col-span-4">
            <Link href="/" className="text-xl">
              <span
                className={cn(
                  "dark:text-white hover:text-accentColor cursor-pointer",
                  section === "#project" && "dark:text-black"
                )}
              >
                Prastian
              </span>
              <span className="text-accentColor font-bold">HD</span>
            </Link>
          </div>
          <div className="col-span-4 hidden md:block m-auto">
            <div className="flex gap-[3rem] items-center">
              {navlinks.map((link) => (
                <Link
                  data-active={link.href === section}
                  key={link.key}
                  href={link.href}
                  className={cn(
                    "navlink",
                    section === "#project" && "dark:text-black"
                  )}
                >
                  {t.nav[link.key]}
                </Link>
              ))}
            </div>
          </div>
          <div className="col-span-4 flex items-center justify-end gap-2 md:gap-10">
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
