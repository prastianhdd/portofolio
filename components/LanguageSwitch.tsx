"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useLanguageStore, useTranslation } from "@/store/language"
import { useSectionStore } from "@/store/section"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function LanguageSwitch() {
  const { section } = useSectionStore()
  const isHome = usePathname() === "/"
  const { language, setLanguage } = useLanguageStore()
  const { t } = useTranslation()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className={cn(
            "h-11 w-11 dark:hover:bg-gray-800 hover:backdrop-opacity-10 text-xs font-semibold uppercase tracking-wide dark:text-white",
            isHome && section === "#project" && "dark:text-black"
          )}
          variant="ghost"
          size="icon"
          aria-label={t.accessibility.switchLanguage}
        >
          {mounted ? language : "en"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="z-[101] min-w-[6rem]" align="end">
        <DropdownMenuItem
          onClick={() => setLanguage("en")}
          className={cn(language === "en" && "text-accentColor font-medium")}
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage("id")}
          className={cn(language === "id" && "text-accentColor font-medium")}
        >
          Indonesia
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
