"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { useLanguageStore } from "@/store/language"
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
  const { language, setLanguage } = useLanguageStore()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className={cn(
            "dark:hover:bg-gray-800 hover:backdrop-opacity-10 text-xs font-semibold uppercase tracking-wide dark:text-white",
            section === "#project" && "dark:text-black"
          )}
          variant="ghost"
          size="icon"
          aria-label="Switch language"
        >
          {mounted ? language : "en"}
          <span className="sr-only">Switch language</span>
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
