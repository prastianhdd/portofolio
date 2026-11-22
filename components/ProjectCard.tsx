"use client"

import { useTranslation } from "@/store/language"
import Image from "next/image"
import Link from "next/link"
import type { Project } from "@/lib/projects"

interface Props {
  item: Project
}

export default function ProjectCard({ item }: Props) {
  const { t, language } = useTranslation()

  return (
    <article className="w-full min-w-0 flex flex-col overflow-hidden rounded-xl border border-gray-300 bg-white text-black shadow-sm">
      <a
        href={item.githubURL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${t.project.source}: ${item.title}`}
      >
        <Image
          alt={item.title}
          src={item.image}
          sizes="(min-width: 1223px) 351px, (min-width: 1024px) calc((90vw - 48px) / 3), (min-width: 768px) calc((100vw - 104px) / 2), (min-width: 640px) calc(100vw - 80px), calc(100vw - 32px)"
          className="w-full aspect-video object-cover"
        />
      </a>
      <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
        <div className="flex flex-wrap gap-2 items-center">
          {item.status && (
            <span className="rounded-full border border-gray-300 px-3 py-1 text-xs">
              {t.project.status[item.status]}
            </span>
          )}
          {item.fork && (
            <span className="rounded-full border border-gray-300 px-3 py-1 text-xs">
              {t.project.customizedFork}
            </span>
          )}
        </div>
        <h3 className="text-xl font-medium break-words">{item.title}</h3>
        <p className="text-sm leading-relaxed text-gray-700">{item.description[language]}</p>
        <ul className="flex flex-wrap gap-2" aria-label={t.project.technologies}>
          {item.techStacks.map((tech) => (
            <li key={tech} className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">{tech}</li>
          ))}
        </ul>
        <div className="mt-auto pt-3 flex flex-wrap gap-3">
          {item.detail && (
            <Link
              href={`/projects/${item.detail.slug}`}
              aria-label={`${t.project.viewDetails}: ${item.title}`}
              className="inline-flex min-h-11 items-center rounded-md border border-gray-400 px-4 text-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              {t.project.viewDetails}
            </Link>
          )}
          <a
            href={item.githubURL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${t.project.source}: ${item.title}`}
            className="inline-flex min-h-11 items-center rounded-md border border-gray-400 px-4 text-sm hover:bg-gray-100"
          >
            {t.project.source}
          </a>
          {item.liveURL && (
            <a
              href={item.liveURL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t.project.openProject}: ${item.title}`}
              className="inline-flex min-h-11 items-center rounded-md bg-accentColor px-4 text-sm hover:brightness-95"
            >
              {t.project.openProject}
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
