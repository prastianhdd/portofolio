import type { Metadata } from "next"
import { notFound } from "next/navigation"
import ProjectDetail from "@/components/ProjectDetail"
import { detailProjects, getDetailProject } from "@/lib/projects"

export const dynamicParams = false

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return detailProjects.map((project) => ({ slug: project.detail!.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getDetailProject(params.slug)
  if (!project) notFound()

  const title = `${project.title} — Prastian Hidayat`
  const description = project.description.en
  const url = `/projects/${project.detail!.slug}`
  const image = {
    url: project.image.src,
    width: project.image.width,
    height: project.image.height,
    alt: project.title,
  }

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: "Prastian Hidayat Portfolio",
      title,
      description,
      url,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      site: "@prastianhd_",
      creator: "@prastianhd_",
      title,
      description,
      images: [image],
    },
  }
}

export default function ProjectPage({ params }: Props) {
  const project = getDetailProject(params.slug)
  if (!project) notFound()
  return <ProjectDetail project={project} />
}
