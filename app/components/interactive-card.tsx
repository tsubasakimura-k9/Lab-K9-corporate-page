"use client"

import type React from "react"
import { useRef, useState } from "react"

interface InteractiveCardProps {
  children: React.ReactNode
  className?: string
}

export function InteractiveCard({ children, className }: InteractiveCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [style, setStyle] = useState<React.CSSProperties>({
    transform: "perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)",
    boxShadow: "0px 5px 15px -3px rgba(0, 0, 0, 0.08)", // 初期影をさらに控えめに
    transition: "transform 0.8s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.8s cubic-bezier(0.23, 1, 0.32, 1)",
  })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const { clientX, clientY } = e
    const { left, top, width, height } = cardRef.current.getBoundingClientRect()

    const xPct = (clientX - left) / width - 0.5
    const yPct = (clientY - top) / height - 0.5

    // 傾きを極限まで小さく
    const rotateX = yPct * -2 // 最大傾斜角度を1-2度程度に
    const rotateY = xPct * 2 // 最大傾斜角度を1-2度程度に
    const translateZ = 5 // 浮き上がり量を5px程度に

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px)`,
      // 影の変化もごくわずかに
      boxShadow: `0px ${6 + Math.abs(yPct * 5)}px ${18 + Math.abs(xPct * 5)}px -5px rgba(0, 0, 0, 0.1)`,
      transition: "transform 0.15s ease-out, box-shadow 0.15s ease-out", // ホバー中の追従は少しだけゆっくりめに
    })
  }

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)",
      boxShadow: "0px 5px 15px -3px rgba(0, 0, 0, 0.08)", // 初期影に戻す
      transition: "transform 1s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 1s cubic-bezier(0.23, 1, 0.32, 1)", // 戻る時間を少し長く
    })
  }

  return (
    <div
      ref={cardRef}
      className={className}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}
