"use client"

import { useEffect } from "react"
import { useLanguageStore } from "@/store/language"

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = useLanguageStore((state) => state.language)

  useEffect(() => {
    useLanguageStore.persist.rehydrate()
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  return <>{children}</>
}
