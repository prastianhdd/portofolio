export function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Prastian Hidayat",
    url: "https://prastianhd.online",
    image: "https://prastianhd.online/profile.png",
    jobTitle: "AI & Web3 Engineer",
    description:
      "AI & Web3 Engineer building autonomous agents, LLM-driven trading algorithms on Solana, and scalable Web3 infrastructure.",
    sameAs: [
      "https://github.com/PrastianHD",
      "https://x.com/prastianhd_",
      "https://www.linkedin.com/in/prastianhd",
    ],
    email: "prastianhd@gmail.com",
    alumniOf: "Universitas Putra Bangsa",
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
