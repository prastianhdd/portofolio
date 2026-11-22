"use client"

import { useState } from "react"
import navlinks from "@/lib/navConfig"
import { cn } from "@/lib/utils"
import { useTranslation } from "@/store/language"
import { useSectionStore } from "@/store/section"
import { DownloadIcon } from "@radix-ui/react-icons"
import { HambergerMenu } from "iconsax-react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "../ui/button"

export default function MobileNav() {
  const [opened, setOpened] = useState<boolean>(false)
  const { section } = useSectionStore()
  const { t } = useTranslation()
  const isHome = usePathname() === "/"

  return (
    <Sheet open={opened} onOpenChange={setOpened}>
      <SheetTrigger asChild className="block md:hidden">
        <Button
          className="dark:text-white h-11 w-11 px-0 flex justify-center items-center"
          variant="default"
          aria-label={t.accessibility.openMenu}
        >
          <HambergerMenu aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent
        style={{ zIndex: 1000 }}
        closeLabel={t.accessibility.closeMenu}
        className="w-full h-full max-h-[100dvh] overflow-y-auto flex flex-col border-0"
      >
        <SheetTitle className="sr-only">{t.accessibility.navigation}</SheetTitle>
        <SheetDescription className="sr-only">{t.accessibility.menuDescription}</SheetDescription>
        <div className="text-xl pt-2 shrink-0">
          <span className="dark:text-white">Prastian</span>
          <span className="text-accentColor font-bold">.dev</span>
        </div>
        <nav aria-label={t.accessibility.navigation} className="min-h-0 shrink-0 flex-1 flex flex-col justify-center gap-2 py-6">
          {navlinks.map((navLink) => {
            const active = isHome && navLink.href === section
            return (
              <Link
                key={navLink.key}
                href={`/${navLink.href}`}
                onClick={() => setOpened(false)}
                aria-current={active ? "location" : undefined}
                className={cn(
                  "w-full text-left py-4 px-2 text-3xl font-medium border-b border-gray-200 dark:border-zinc-800 transition-colors",
                  active
                    ? "text-accentColor"
                    : "text-black dark:text-white hover:text-accentColor dark:hover:text-accentColor"
                )}
              >
                {t.nav[navLink.key]}
              </Link>
            )
          })}
        </nav>
        <div className="flex shrink-0 flex-col gap-3 pb-8">
          <a
            href="https://drive.google.com/drive/folders/1mcpduJNmaqj8v3n-clbxKU6qfMGdRXuN"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.hero.downloadCV}
            className="flex h-12 items-center justify-center gap-2 border border-accentColor text-accentColor hover:bg-accentColor hover:text-black transition-colors rounded-md"
          >
            <span>{t.hero.downloadCV}</span>
            <DownloadIcon className="flex-none" aria-hidden="true" />
          </a>
          <Link
            href="/#contact"
            onClick={() => setOpened(false)}
            className="flex h-12 items-center justify-center bg-accentColor text-black font-medium rounded-md"
          >
            {t.hero.contactBtn}
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}
