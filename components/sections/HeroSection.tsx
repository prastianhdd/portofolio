"use client"

import HeroLines from "@/public/assets/hero/hero-lines.png"
import Image from "next/image"
import SocialLinks from "../SocialLinks"
import HeroContent from "./HeroContent"
import HeroTool from "./HeroTool"

export default function HeroSection() {
  return (
    <section
      id="home"
      className="w-full relative z-[50] min-h-screen bg-baseBackground pt-[4.5rem] pb-24 flex flex-col justify-center"
    >
      <Image
        className="w-[38rem] max-w-full absolute top-[6.5rem] md:top-[50%] left-[50%] -translate-x-1/2 md:-translate-y-1/2 select-none pointer-events-none"
        alt=""
        src={HeroLines}
        sizes="(min-width: 608px) 608px, 100vw"
      />
      <HeroTool />
      <HeroContent />
      <SocialLinks />
    </section>
  )
}
