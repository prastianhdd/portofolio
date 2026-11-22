"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { useSectionStore } from "@/store/section"
import { useTranslation } from "@/store/language"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function ThemeSwitch() {
  const { setTheme } = useTheme()
  const { t } = useTranslation()
  const { section } = useSectionStore()
  const isHome = usePathname() === "/"

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="h-11 w-11 dark:hover:bg-gray-800 hover:backdrop-opacity-10"
          variant="ghost"
          size="icon"
          aria-label={t.accessibility.switchTheme}
        >
          <SunIcon
            className={cn(
              "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0",
              isHome && section === "#project" && "dark:text-black"
            )}
          />
          <MoonIcon
            className={cn(
              "absolute h-[1.2rem] text-white w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100",
              isHome && section === "#project" && "dark:text-black"
            )}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="z-[101]" align="end">
        <DropdownMenuItem
          onClick={() => {
            setTheme("light")
          }}
        >
          {t.accessibility.light}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            setTheme("dark")
          }}
        >
          {t.accessibility.dark}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            setTheme("system")
          }}
        >
          {t.accessibility.system}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
