"use client"

import { useEffect, useRef } from "react"
import useScrollActive from "@/hooks/useScrollActive"
import { projects } from "@/lib/projects"
import { useTranslation } from "@/store/language"
import { useSectionStore } from "@/store/section"
import Link from "next/link"
import ProjectCard from "../ProjectCard"

export default function ProjectSection() {
  const sectionRef = useRef(null)
  const { t } = useTranslation()
  const projectSectionOnView = useScrollActive(sectionRef)
  const { setSection } = useSectionStore()

  useEffect(() => {
    projectSectionOnView && setSection("#project")
  }, [projectSectionOnView, setSection])

  return (
    <section
      ref={sectionRef}
      id="project"
      className="relative bg-gray-50 dark:bg-gray-100 py-14 px-4 sm:px-10 lg:px-[5%]"
    >
      <div className="w-full max-w-[1100px] m-auto flex flex-col items-center gap-10">
        <div className="max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl tracking-tight font-medium text-black">
            {t.project.heading}
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">{t.project.intro}</p>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter((project) => project.featured).map((project) => (
            <ProjectCard key={project.id} item={project} />
          ))}
        </div>
        <details className="w-full">
          <summary className="cursor-pointer rounded-md py-3 font-medium text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">
            {t.project.otherProjects}
          </summary>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter((project) => !project.featured).map((project) => (
              <ProjectCard key={project.id} item={project} />
            ))}
          </div>
        </details>
        <div className="font-medium text-center text-black">
          {t.project.exploreText}{" "}
          <Link
            href="https://github.com/PrastianHD"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-gray-600"
          >
            {t.project.exploreLink}
          </Link>
        </div>
      </div>
    </section>
  )
}
