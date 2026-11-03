import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Prastian Hidayat — AI & Web3 Engineer",
    short_name: "PrastianHD",
    description:
      "AI & Web3 Engineer building autonomous agents, LLM-driven trading algorithms on Solana, and scalable Web3 infrastructure.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  }
}
