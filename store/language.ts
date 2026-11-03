import { type Dictionary, type Language, dictionary } from "@/lib/dictionary"
import { create } from "zustand"
import { persist } from "zustand/middleware"

interface LanguageState {
  language: Language
  setLanguage: (language: Language) => void
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: "en",
      setLanguage: (language) => set(() => ({ language })),
    }),
    { name: "language-store", skipHydration: true }
  )
)

export const useTranslation = (): { t: Dictionary; language: Language } => {
  const language = useLanguageStore((state) => state.language)
  return { t: dictionary[language], language }
}
