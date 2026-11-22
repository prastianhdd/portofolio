import { useEffect, useRef } from "react"
import { useTranslation } from "@/store/language"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import { gsap } from "gsap"
import Link from "next/link"

export default function HeroContent() {
  const sectionRef = useRef(null)
  const { t } = useTranslation()

  useEffect(() => {
    const q = gsap.utils.selector(sectionRef)

    const media = gsap.matchMedia()
    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.timeline({ defaults: { stagger: 0.2, duration: 0.3 } })
        .fromTo(q(".text-animation"), { y: 100 }, { y: 0 })
        .fromTo(q(".bio-animation"), { scale: 0 }, { scale: 1, ease: "back", duration: 0.3 })
    })
    return () => media.revert()
  }, [])

  return (
    <div
      ref={sectionRef}
      className="relative z-20 max-w-[55rem] m-auto w-full px-4 py-24 text-center flex flex-col gap-4 justify-center items-center"
    >
      <div className="overflow-hidden">
        <h1 className="text-animation dark:bg-[linear-gradient(#fff,rgba(255,255,255,.6))] inline-block text-black dark:text-transparent bg-clip-text leading-tight text-4xl md:text-6xl font-semibold">
          {t.hero.intro}
        </h1>
      </div>

      <div className="overflow-hidden">
        <div className="text-animation text-2xl md:text-4xl font-semibold text-center">
          <span className="bg-[linear-gradient(#000000,rgba(0,0,0,.6))] dark:bg-[linear-gradient(#fff,rgba(255,255,255,.6))] inline-block text-transparent bg-clip-text">
            {t.hero.role}
          </span>
        </div>
      </div>

      <div className="w-[300px] max-w-full md:w-[370px] relative z-30 text-center text-sm dark:bg-[linear-gradient(#fff,rgba(255,255,255,.6))] inline-block text-black dark:text-transparent bg-clip-text">
        {t.hero.bio}
      </div>

      <div className="bio-animation max-w-lg text-sm md:text-base text-gray-700 dark:text-gray-300">
        {t.hero.tagline}
      </div>

      <div className="flex flex-wrap justify-center items-center gap-3 mt-5">
        <Link
          href="#contact"
          aria-label={t.hero.contactBtn}
          className="contact_me_btn min-h-11 px-4 py-[6px] shadow-md group flex items-center gap-2"
        >
          <div className="dark:text-black relative z-[3] text-sm">
            {t.hero.contactBtn}
          </div>
          <div className="sr-only">{t.hero.contactBtn}</div>
          <div className="contact_me_btn_overlay group-hover:opacity-100" />
          <div className="relative group overflow-hidden w-4 z-[3]">
            <div className="flex group-hover:animate-animate-frame-contact-me-btn-icon translate-x-[-100%]">
              <ArrowRightIcon className="text-black flex-none relative z-[3]" />
              <ArrowRightIcon className="text-black flex-none relative z-[3]" />
            </div>
          </div>
        </Link>

        <Link
          href="#project"
          aria-label={t.hero.viewProject}
          className="min-h-11 px-4 py-[6px] text-sm border border-accentColor text-accentColor hover:bg-accentColor hover:text-black transition-colors flex items-center gap-2"
        >
          <span>{t.hero.viewProject}</span>
        </Link>
      </div>
    </div>
  )
}
