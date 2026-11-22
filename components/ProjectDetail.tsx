"use client"

import type { Project } from "@/lib/projects"
import { useTranslation } from "@/store/language"
import Image from "next/image"
import Link from "next/link"

export default function ProjectDetail({ project }: { project: Project }) {
  const { t, language } = useTranslation()
  if (!project.detail) return null

  return (
    <main id="main" tabIndex={-1} className="min-h-screen bg-baseBackground text-gray-900 dark:text-gray-100 px-4 pt-32 pb-16">
      <article className="mx-auto flex max-w-3xl flex-col gap-8 [&_a]:focus-visible:outline [&_a]:focus-visible:outline-2 [&_a]:focus-visible:outline-offset-4">
        <Link href="/#project" className="self-start underline underline-offset-4">{t.project.backToProjects}</Link>
        <header className="space-y-4">
          {project.status && <p className="text-sm">{t.project.status[project.status]}</p>}
          <h1 className="break-words text-4xl font-medium sm:text-5xl">{project.title}</h1>
          <p className="text-lg leading-relaxed">{project.description[language]}</p>
        </header>
        <Image src={project.image} alt={project.title} sizes="(min-width: 800px) 768px, 100vw" className="h-auto w-full rounded-xl" />
        <section className="space-y-3">
          <h2 className="text-2xl font-medium">{t.project.scope}</h2>
          <p className="leading-relaxed">{project.detail.scope[language]}</p>
        </section>
        <section className="space-y-3">
          <h2 className="text-2xl font-medium">{t.project.contribution}</h2>
          <p className="leading-relaxed">{t.project.contributionText}</p>
        </section>
        <section className="space-y-3">
          <h2 className="text-2xl font-medium">{t.project.technologies}</h2>
          <ul className="flex flex-wrap gap-2">
            {project.techStacks.map((tech) => <li key={tech} className="rounded-full border border-current px-3 py-1 text-sm">{tech}</li>)}
          </ul>
        </section>
        <section className="space-y-3">
          <h2 className="text-2xl font-medium">{t.project.limitations}</h2>
          <p className="leading-relaxed">{project.detail.limitations[language]}</p>
        </section>
        <div className="flex flex-wrap gap-4 border-t border-current pt-6">
          <a href={project.githubURL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center rounded-md border border-current px-4">{t.project.source}</a>
          {project.liveURL && <a href={project.liveURL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center rounded-md border border-current px-4">{t.project.openProject}</a>}
          <Link href="/#contact" className="inline-flex min-h-11 items-center rounded-md bg-accentColor px-4 text-black">{t.hero.contactBtn}</Link>
        </div>
      </article>
    </main>
  )
}
