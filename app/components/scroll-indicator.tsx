"use client"

import { useEffect, useState } from "react"

export function ScrollIndicator() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHidden(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      aria-hidden="true"
      className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-opacity duration-500 ${
        hidden ? "opacity-0" : "opacity-100"
      }`}
    >
      <span className="text-[10px] font-medium tracking-[0.3em] text-muted-foreground uppercase">
        Scroll
      </span>
      <div className="relative w-px h-8 overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-accent/30" />
        <div className="absolute w-full h-full bg-accent animate-scroll-line" />
      </div>
    </div>
  )
}
