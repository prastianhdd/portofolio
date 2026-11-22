import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import dynamic from "next/dynamic"
import heroLottieData from "@/public/assets/lottie/hero-lottie.json"
import Code from "@/public/assets/hero/code.png"
import HeroSpinner from "@/public/assets/hero/hero-spinner.webp"
import Source from "@/public/assets/hero/source.png"
import Image from "next/image"

const Lottie = dynamic(() => import("lottie-react"), { ssr: false })

export default function HeroTool() {
  const firstSpinnerRef = useRef(null)
  const secondSpinnerRef = useRef(null)
  const [showLottie, setShowLottie] = useState(false)

  useEffect(() => {
    const media = gsap.matchMedia()
    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.to([firstSpinnerRef.current, secondSpinnerRef.current], { rotation: "+=70", duration: 30, repeat: -1 })
    })
    media.add("(min-width: 1280px) and (prefers-reduced-motion: no-preference)", () => {
      setShowLottie(true)
      return () => setShowLottie(false)
    })
    return () => media.revert()
  }, [])

  return (
    <div aria-hidden="true" className="pointer-events-none max-w-[75rem] min-h-[5rem] m-auto w-full absolute top-[55%] md:gap-40 xl:gap-0 md:top-[50%] md:-translate-y-1/2 left-0 right-0 flex items-center justify-between">
      <div className="relative overflow-hidden xl:overflow-visible w-full h-[16rem] md:w-[27rem] md:h-[27rem] flex justify-center items-center">
        {showLottie && <div className="absolute hidden xl:block left-[-10rem] bottom-[3rem] rotate-270"><Lottie animationData={heroLottieData} autoplay loop /></div>}
        <Image ref={firstSpinnerRef} className="w-full h-full object-cover select-none" src={HeroSpinner} alt="" sizes="(min-width: 768px) 432px, 50vw" />
        <div className="w-14 h-14 md:w-20 md:h-20 select-none absolute z-[1] bg-gradient-to-tl from-[#132726] to-[#13191B] shadow-md rounded-full flex justify-center items-center">
          <Image className="w-4 md:w-6" src={Source} alt="" sizes="24px" />
        </div>
      </div>
      <div className="relative overflow-hidden w-full h-[16rem] md:w-[27rem] md:h-[27rem] flex justify-center items-center">
        <Image ref={secondSpinnerRef} className="w-full h-full rotate-180 object-cover select-none" src={HeroSpinner} alt="" sizes="(min-width: 768px) 432px, 50vw" />
        <div className="w-14 h-14 md:w-20 md:h-20 select-none absolute z-[1] bg-gradient-to-tl from-[#132726] to-[#13191B] shadow-md rounded-full flex justify-center items-center">
          <Image className="w-4 md:w-6" src={Code} alt="" sizes="24px" />
        </div>
      </div>
    </div>
  )
}
