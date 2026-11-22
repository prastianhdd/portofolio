export function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Prastian Hidayat",
    url: "https://prastianhd.online",
    image: "https://prastianhd.online/profile.png",
    jobTitle: "AI & Full-Stack Developer",
    description:
      "AI & Full-Stack Developer focused on AI-powered applications, custom agents, and workflow automation.",
    sameAs: [
      "https://github.com/PrastianHD",
      "https://x.com/prastianhd_",
      "https://www.linkedin.com/in/prastianhd",
    ],
    email: "prastianhd@gmail.com",
    knowsAbout: [
      "Artificial Intelligence",
      "Web3",
      "Blockchain",
      "Solana",
      "TypeScript",
      "Next.js",
      "React",
      "Node.js",
      "Automation",
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
