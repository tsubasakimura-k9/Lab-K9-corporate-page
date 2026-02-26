"use client"

import { useEffect, useRef, useState } from "react"

interface AccentLineProps {
  className?: string
}

export function AccentLine({ className = "" }: AccentLineProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`h-px bg-accent transition-all duration-1000 ease-out ${
        visible ? "w-20 opacity-100" : "w-0 opacity-0"
      } ${visible ? "accent-line-shimmer" : ""} ${className}`}
    />
  )
}
