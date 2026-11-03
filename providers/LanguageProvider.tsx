"use client"

import { useEffect } from "react"
import { useLanguageStore } from "@/store/language"

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    useLanguageStore.persist.rehydrate()
  }, [])

  return <>{children}</>
}
