"use client"

import { useState } from "react"
import navlinks from "@/lib/navConfig"
import { cn } from "@/lib/utils"
import { useTranslation } from "@/store/language"
import { useSectionStore } from "@/store/section"
import { DownloadIcon } from "@radix-ui/react-icons"
import { HambergerMenu } from "iconsax-react"
import { useRouter } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "../ui/button"

export default function MobileNav() {
  const [opened, setOpened] = useState<boolean>(false)
  const { section } = useSectionStore()
  const { t } = useTranslation()
  const router = useRouter()

  const goTo = (href: string) => {
    router.push(href)
    setOpened(false)
  }

  return (
    <Sheet open={opened} onOpenChange={setOpened}>
      <SheetTrigger asChild className="block md:hidden">
        <Button
          className="dark:text-white h-11 w-11 px-0 flex justify-center items-center"
          variant="default"
          aria-label="Toggle navigation menu"
        >
          <HambergerMenu />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        style={{ zIndex: 1000 }}
        className="w-full h-full flex flex-col [&>svg]:text-zinc-900 border-0"
      >
        <div className="text-xl pt-2">
          <span className="dark:text-white">Prastian</span>
          <span className="text-accentColor font-bold">.dev</span>
        </div>

        <nav className="flex-1 flex flex-col justify-center gap-2">
          {navlinks.map((navLink) => {
            const active = navLink.href === section
            return (
              <button
                key={navLink.key}
                type="button"
                onClick={() => goTo(navLink.href)}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "w-full text-left py-4 px-2 text-3xl font-medium border-b border-gray-200 dark:border-zinc-800 transition-colors",
                  active
                    ? "text-accentColor"
                    : "text-black dark:text-white hover:text-accentColor dark:hover:text-accentColor"
                )}
              >
                {t.nav[navLink.key]}
              </button>
            )
          })}
        </nav>

        <div className="flex flex-col gap-3 pb-8">
          <a
            href="/Prastian-Hidayat-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.hero.downloadCV}
            className="flex h-12 items-center justify-center gap-2 border border-accentColor text-accentColor hover:bg-accentColor hover:text-black transition-colors rounded-md"
          >
            <span>{t.hero.downloadCV}</span>
            <DownloadIcon className="flex-none" />
          </a>
          <button
            type="button"
            onClick={() => goTo("#contact")}
            className="flex h-12 items-center justify-center bg-accentColor text-black font-medium rounded-md"
          >
            {t.hero.contactBtn}
          </button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
