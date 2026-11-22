import type { MetadataRoute } from "next"
import { detailProjects } from "@/lib/projects"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://prastianhd.online"

  return [
    {
      url: baseUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...detailProjects.map((project) => ({
      url: `${baseUrl}/projects/${project.detail!.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ]
}
