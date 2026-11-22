import type { Dictionary } from "@/lib/dictionary"

const navlinks: { key: keyof Dictionary["nav"]; href: string }[] = [
  {
    key: "about",
    href: "#about",
  },
  {
    key: "project",
    href: "#project",
  },
  {
    key: "contact",
    href: "#contact",
  },
]

export default navlinks