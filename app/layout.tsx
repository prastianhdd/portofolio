import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/react"
import { Jost } from "next/font/google"
import { LanguageProvider } from "@/providers/LanguageProvider"
import { ThemeProvider } from "@/providers/ThemeProvider"
import { JsonLd } from "@/components/JsonLd"
import Loader from "@/components/Loader"
import Header from "@/components/layouts/header"
import "./globals.css"

const jost = Jost({ subsets: ["latin"] })

const SITE_URL = "https://prastianhd.online"

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: "Prastian Hidayat — AI & Web3 Engineer",
    template: "%s | Prastian Hidayat",
  },
  description:
    "AI & Web3 Engineer building autonomous agents, LLM-driven trading algorithms on Solana, and scalable Web3 infrastructure. Portfolio of Prastian Hidayat.",
  applicationName: "Prastian Hidayat Portfolio",
  generator: "Next.js",
  keywords: [
    "Prastian Hidayat",
    "Web3 Engineer",
    "AI Agent",
    "Solana Developer",
    "Blockchain",
    "Full Stack Developer",
    "TypeScript",
    "Next.js",
    "Portfolio",
    "Indonesia",
  ],
  creator: "Prastian Hidayat",
  authors: [{ name: "Prastian Hidayat", url: SITE_URL }],
  publisher: "Prastian Hidayat",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "id_ID",
    url: SITE_URL,
    siteName: "Prastian Hidayat Portfolio",
    title: "Prastian Hidayat — AI & Web3 Engineer",
    description:
      "AI & Web3 Engineer building autonomous agents, LLM-driven trading algorithms on Solana, and scalable Web3 infrastructure.",
    images: [
      {
        url: "/profile.png",
        width: 400,
        height: 400,
        alt: "Prastian Hidayat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@prastianhd_",
    creator: "@prastianhd_",
    title: "Prastian Hidayat — AI & Web3 Engineer",
    description:
      "AI & Web3 Engineer building autonomous agents, LLM-driven trading algorithms on Solana, and scalable Web3 infrastructure.",
    images: ["/profile.png"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  verification: {
    google: "KV08ReQYOo2ugf-G0X4l3l2uNdU8tGzO85StbN3uPKs",
  },
  category: "technology",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <Analytics />
        <JsonLd />
        <Loader />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <Header />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
