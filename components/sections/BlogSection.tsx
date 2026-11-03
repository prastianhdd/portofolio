"use client"

import { useEffect, useRef } from "react"
import useOnScreen from "@/hooks/useOnScreen"
import useScrollActive from "@/hooks/useScrollActive"
import { useTranslation } from "@/store/language"
import { useSectionStore } from "@/store/section"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { ArrowRight } from "iconsax-react"
import Link from "next/link"
import { RoughNotation } from "react-rough-notation"
import BlogCard from "../BlogCard"

export default function BlogSection() {
  const sectionRef = useRef(null)
  const { t } = useTranslation()

  const elementRef = useRef<HTMLDivElement>(null)
  const isOnScreen = useOnScreen(elementRef)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const q = gsap.utils.selector(sectionRef)

    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          scrub: true,
          onEnter: () => {
            gsap.fromTo(
              q(".qoutes-animation"),
              {
                y: "-200%",
              },
              {
                y: 0,
              }
            )
          },
        },
      })
    })

    return () => ctx.revert()
  }, [])

  // Set Active Session
  const blogSectionOnView = useScrollActive(sectionRef)
  const { setSection } = useSectionStore()

  useEffect(() => {
    blogSectionOnView && setSection("#blog")
  }, [blogSectionOnView, setSection])

  return (
    <section
      ref={sectionRef}
      id="blog"
      className="h-full bg-baseBackground py-14 px-10 lg:px-[5%]"
    >
      <div className="w-full max-w-[1100px] h-full m-auto flex flex-col items-center gap-14">
        <div className="w-[80%] md:w-full flex flex-col gap-8 items-center">
          <RoughNotation
            type="underline"
            strokeWidth={2}
            color="hsl(157, 87%, 41%)"
            order={1}
            show={isOnScreen}
          >
            <div className="text-xl md:text-4xl tracking-tight font-medium w-fit dark:text-accentColor">
              {t.blog.heading}
            </div>
          </RoughNotation>
          <div ref={elementRef} className="overflow-hidden flex flex-col gap-1">
            <div className="qoutes-animation mx-auto text-center text-sm dark:text-white flex flex-col items-center font-normal">
              {t.blog.intro1Pre}{" "}
              <span className="text-accentColor">{t.blog.intro1Link}</span>.
            </div>
            <div className="qoutes-animation mx-auto text-center text-sm dark:text-white flex flex-col items-center font-normal">
              <div>{t.blog.intro2}</div>
            </div>
          </div>
        </div>

        <div className="md:w-full pt-4 pb-10 flex flex-col items-start gap-6">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} item={blog} />
          ))}
        </div>

        <Link
          href="https://x.com/prastianhd_"
          target="_blank"
          aria-label="Follow Prastian on X"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <div className="text-accentColor navlink text-sm italic">
            {t.blog.followLink}
          </div>
          <ArrowRight color="white" size={15} />
        </Link>
      </div>
    </section>
  )
}

export interface Blog {
  id: number
  title: string
  description: string
  image: string
  publishAt: string
  link: string
}

const blogs: Blog[] = [
  {
    id: 1,
    title: "Tweet placeholder #1",
    description:
      "Replace this with the text of one of your X posts. Keep it short — about 1-2 sentences works best for the card layout.",
    image: "/assets/blog/dns.svg",
    publishAt: "May 2026",
    link: "https://x.com/prastianhd_",
  },
  {
    id: 2,
    title: "Tweet placeholder #2",
    description:
      "Replace this with another tweet. Update the link to point to that specific post on x.com.",
    image: "/assets/blog/kernel-terminal.svg",
    publishAt: "May 2026",
    link: "https://x.com/prastianhd_",
  },
  {
    id: 3,
    title: "Tweet placeholder #3",
    description:
      "Third tweet placeholder. Swap in your latest highlight — release notes, project ship, or a thread you wrote.",
    image: "/assets/blog/ipvs.svg",
    publishAt: "May 2026",
    link: "https://x.com/prastianhd_",
  },
]
