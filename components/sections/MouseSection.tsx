"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function MouseSection() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const media = gsap.matchMedia()
    media.add("(min-width: 1024px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)", () => {
      const moveX = gsap.quickTo(cursorRef.current, "x", { duration: 0.2 })
      const moveY = gsap.quickTo(cursorRef.current, "y", { duration: 0.2 })
      const opacity = gsap.quickSetter(cursorRef.current, "opacity")
      const onMouseMove = (event: MouseEvent) => {
        moveX(event.clientX)
        moveY(event.clientY)
        opacity(1)
      }
      const hideCursor = () => opacity(0)
      const showCursor = () => opacity(1)
      document.addEventListener("mousemove", onMouseMove)
      document.addEventListener("mouseleave", hideCursor)
      document.addEventListener("mousedown", hideCursor)
      document.addEventListener("mouseup", showCursor)
      return () => {
        document.removeEventListener("mousemove", onMouseMove)
        document.removeEventListener("mouseleave", hideCursor)
        document.removeEventListener("mousedown", hideCursor)
        document.removeEventListener("mouseup", showCursor)
        opacity(0)
      }
    })
    return () => media.revert()
  }, [])

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="hidden lg:block w-4 h-4 opacity-0 pointer-events-none rounded-full border-2 border-accentColor dark:border-accentColor z-[9999] fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2"
    />
  )
}
