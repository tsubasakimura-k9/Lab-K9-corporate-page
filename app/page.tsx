"use client"

import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState, useRef, useCallback } from "react"
import { InteractiveCard } from "./components/interactive-card" // 新しいコンポーネントをインポート

interface NavLinkProps {
  href: string
  children: React.ReactNode
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <Link href={href} className="text-sm font-medium text-black hover:text-gray-700 transition-colors">
    {children}
  </Link>
)

interface SectionProps {
  id: string
  className?: string
  children: React.ReactNode
}

const Section: React.FC<SectionProps> = ({ id, className, children }) => (
  <section id={id} className={`py-16 md:py-24 lg:py-32 ${className || ""}`}>
    <div className="container mx-auto px-4 md:px-6">{children}</div>
  </section>
)

interface SectionTitleProps {
  children: React.ReactNode
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => (
  <div className="flex flex-col items-center justify-center mb-12 md:mb-16">
    <div className="w-20 h-px bg-[#B08D57] mb-4 animate-wave-motion opacity-100" />
    <h2 className="text-3xl md:text-4xl font-semibold text-black text-center">{children}</h2>
  </div>
)

// 流体風ヒーローエレメント
const LiquidIntelligenceElement: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })
  const [mouseClientY, setMouseClientY] = useState<number>(typeof window !== "undefined" ? window.innerHeight / 2 : 0)
  const [belowHero, setBelowHero] = useState(false)
  const [orientation, setOrientation] = useState({ beta: 90, gamma: 0 })

  const [autoAnimate, setAutoAnimate] = useState(false)

  const backgroundRef = useRef<HTMLDivElement>(null)
  const lastAcceleration = useRef({ x: 0, y: 0, z: 0, timestamp: Date.now() })

  // 各波線ごとのランダムパラメータ（初回マウント時に固定）
  const waveParamsRef = useRef<{ ampFactor: number; freqFactor: number; yOffset: number; speedFactor: number; opacity: number }[]>([])
  if (waveParamsRef.current.length === 0) {
    waveParamsRef.current = Array.from({ length: 8 }).map(() => ({
      ampFactor: 0.5 + Math.random() * 0.5, // 0.5〜1.0 倍 (現状をMAXとする)
      freqFactor: 0.9 + Math.random() * 0.3, // 0.9〜1.2 倍
      yOffset: Math.random() * 6 - 3,        // -3〜+3 px
      speedFactor: 0.6 + Math.random() * 1.4, // 0.6〜2.0 倍
      opacity: 0.2 + Math.random() * 0.4,     // 0.2〜0.6
    }))
  }

  useEffect(() => {
    setIsMounted(true)
    const mobile = /Mobi|Android/i.test(navigator.userAgent)
    setIsMobile(mobile)
    // 波線は常に自動アニメーション
    setAutoAnimate(true)
  }, [])

  const handleMouseMove = (event: MouseEvent) => {
    const xPercent = (event.clientX / window.innerWidth) * 100
    const yPercent = (event.clientY / window.innerHeight) * 100
    setMousePosition({ x: xPercent, y: yPercent })
    setMouseClientY(event.clientY)
    const docY = event.clientY + window.scrollY
    setBelowHero(docY > window.innerHeight)
  }

  const handleDeviceOrientation = useCallback((event: DeviceOrientationEvent) => {
    if (event.beta !== null && event.gamma !== null) {
      setOrientation({ beta: event.beta, gamma: event.gamma })
    }
  }, [])

  const handleDeviceMotion = useCallback((event: DeviceMotionEvent) => {
    if (event.accelerationIncludingGravity && event.accelerationIncludingGravity.x !== null) {
      const { x, y, z } = event.accelerationIncludingGravity
      const now = Date.now()
      const timeDiff = now - lastAcceleration.current.timestamp

      if (timeDiff > 100) {
        const deltaX = Math.abs((x || 0) - lastAcceleration.current.x)
        const deltaY = Math.abs((y || 0) - lastAcceleration.current.y)
        const deltaZ = Math.abs((z || 0) - lastAcceleration.current.z)
        const totalDelta = deltaX + deltaY + deltaZ

        // パーティクル削除により、エフェクト処理は不要
        if (totalDelta > 12) {
          // 今後のエフェクト拡張用に閾値チェックは残す
        }
        lastAcceleration.current = { x: x || 0, y: y || 0, z: z || 0, timestamp: now }
      }
    }
  }, [])

  const handleScroll = () => {
    const docY = mouseClientY + window.scrollY
    setBelowHero(docY > window.innerHeight)
  }

  useEffect(() => {
    if (!isMounted) return

    const requestDeviceMotionPermission = async () => {
      if (typeof (DeviceMotionEvent as any).requestPermission === "function") {
        try {
          const permissionState = await (DeviceMotionEvent as any).requestPermission()
          if (permissionState === "granted") {
            window.addEventListener("deviceorientation", handleDeviceOrientation)
            window.addEventListener("devicemotion", handleDeviceMotion)
          }
        } catch (error) {
          console.error("DeviceMotionEvent permission request failed:", error)
        }
      } else {
        window.addEventListener("deviceorientation", handleDeviceOrientation)
        window.addEventListener("devicemotion", handleDeviceMotion)
      }
    }

    if (isMobile) {
      requestDeviceMotionPermission()
    } else {
      window.addEventListener("mousemove", handleMouseMove)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      if (isMobile) {
        window.removeEventListener("deviceorientation", handleDeviceOrientation)
        window.removeEventListener("devicemotion", handleDeviceMotion)
      } else {
        window.removeEventListener("mousemove", handleMouseMove)
      }
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isMounted, isMobile, handleMouseMove, handleDeviceOrientation, handleDeviceMotion])

  // gradX, gradYの自動アニメーション
  const [autoAnimTick, setAutoAnimTick] = useState(0)
  useEffect(() => {
    if (autoAnimate) {
      const interval = setInterval(() => setAutoAnimTick(t => t + 1), 50)
      return () => clearInterval(interval)
    }
  }, [autoAnimate])
  
  const gradX = isMobile
    ? autoAnimate
      ? 50 + Math.sin(autoAnimTick / 40) * 20
      : 50 + (orientation.gamma / 90) * 25
    : mousePosition.x
  const gradY = isMobile
    ? autoAnimate
      ? 50 + Math.cos(autoAnimTick / 60) * 20
      : 50 + ((orientation.beta - 90) / 90) * 25
    : mousePosition.y

  // 有機的なうねりを持つ波線を生成
  const createOrganicWavePath = (
    baseAmp: number,
    freq: number,
    phase: number,
    yBase: number,
  ) => {
    const pts: string[] = []
    for (let x = -60; x <= 260; x += 2) {
      // 振幅にゆらぎを加える
      const ampMod = baseAmp * 0.4 * Math.sin(((x + phase) * 0.15 * Math.PI) / 180)
      // 追加の高周波成分で微細なゆらぎを与える
      const jitter = baseAmp * 0.15 * Math.sin(((x + phase * 0.3) * 0.6 * Math.PI) / 180)
      const y = yBase + (baseAmp + ampMod) * Math.sin(((x + phase) * freq * Math.PI) / 180) + jitter
      pts.push(`${x},${y}`)
    }
    return `M ${pts.join(" L ")}`
  }

  // アニメーション用のフェーズを更新（左右にゆったり流れる）
  const phase = autoAnimTick

  if (!isMounted) {
    return <div className="fixed inset-0 z-0 bg-gray-100" />
  }

  return (
    <div ref={backgroundRef} className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div
        className="absolute inset-0 animate-subtle-breathing-scale pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${gradX}% ${gradY}%, ${belowHero ? "rgba(59,130,246,0.28)" : "rgba(255,217,102,0.25)"} 0%, ${belowHero ? "rgba(59,130,246,0.12)" : "rgba(255,217,102,0.1)"} 40%, transparent 75%)`,
          opacity: 0.8,
          transition: "background-position 0.05s linear",
          zIndex: 0,
        }}
      />

      <svg
        className="absolute top-48 left-0 w-full h-44 overflow-visible"
        viewBox="-60 0 320 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {Array.from({ length: 8 }).map((_, i) => {
          const param = waveParamsRef.current[i]
          // 振幅を 50% に縮小
          const amplitudeBase = (30 + i * 0.6) * 0.5
          const amplitude = amplitudeBase * param.ampFactor
          const frequencyBase = 0.35 + i * 0.018
          const frequency = frequencyBase * param.freqFactor
          // 振幅を小さくした分だけ下方向へずらし、最下部の位置をキープ
          const yBase = 20 + i * 4.5 + param.yOffset + amplitude
          const phaseLine = phase * param.speedFactor + i * 45
          const d = createOrganicWavePath(amplitude, frequency, phaseLine, yBase)
          return (
            <path
              key={i}
              d={d}
              stroke="#FFD966"
              strokeWidth={0.5}
              fill="none"
              strokeLinecap="round"
              opacity={param.opacity}
            />
          )
        })}
      </svg>
    </div>
  )
}

export default function HomePage() {
  const [heroTextDistorted, setHeroTextDistorted] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeroTextDistorted(false)
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex flex-col min-h-screen text-black bg-transparent">
      <LiquidIntelligenceElement />
      <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Lab K9 Logo"
              width={128}
              height={32}
              className="object-contain"
              priority
            />
          </Link>
          <nav className="hidden md:flex gap-6">
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#vision">Vision</NavLink>
            <NavLink href="#company">Company</NavLink>
          </nav>
        </div>
      </header>
      <main className="flex-1 relative z-10">
        <section
          id="hero"
          className="relative h-[calc(100vh-4rem)] flex flex-col items-center justify-center bg-transparent overflow-hidden"
        >
          <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
            <h1
              className={`text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight text-gray-900 ${heroTextDistorted ? "animate-text-distort" : ""}`}
            >
              テクノロジーと
              <br className="block md:hidden" />
              ビジネスの力で、
              <br />
              しあわせをつくる。
            </h1>
            <p
              className={`max-w-3xl mx-auto text-lg md:text-xl text-gray-700 transition-opacity duration-700 ease-out ${heroTextDistorted ? "opacity-0" : "opacity-100 delay-200"}`}
            >
              AI/DXソリューションからD2Cブランドまで。
              <br />
              私たちは領域を越えて、本質的な価値創造に挑みます。
            </p>
          </div>
        </section>

        <Section id="services" className="bg-white/40">
          <SectionTitle>Services</SectionTitle>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            <InteractiveCard className="bg-gray-50/30 p-8 rounded-lg shadow-sm hover:shadow-xl transition-shadow flex flex-col h-full">
              <h3 className="text-2xl font-semibold text-black mb-4">AI / DX Solutions</h3>
              <p className="text-gray-700 leading-relaxed flex-grow">
                貴社の経営課題を解決するため、AIソリューションの企画・開発、DX戦略の企画・実行までをワンストップで支援します。ビジネスの全体最適化を実現し、AIネイティブで持続的な成長が可能な事業開発・組織開発を上流から下流までサポートします。
              </p>
            </InteractiveCard>
            <InteractiveCard className="bg-gray-50/30 p-8 rounded-lg shadow-sm hover:shadow-xl transition-shadow flex flex-col h-full">
              <h3 className="text-2xl font-semibold text-black mb-4">D2C Brand (Lifestyle Products)</h3>
              <p className="text-gray-700 leading-relaxed flex-grow">
                テクノロジーとデザインの知見を活かし、日々の暮らしを豊かにするD2Cブランドを展開します。現在、複数のブランドを準備中です。
              </p>
            </InteractiveCard>
          </div>
        </Section>

        <Section id="vision" className="bg-gray-50/40">
          <SectionTitle>Our Purpose</SectionTitle>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              テクノロジーと経営マネジメントのかけ合わせで、はたらく人の幸福度をあげる。テクノロジーとデザインのかけ合わせで、人のくらしの幸福度をあげる。私たちは、テクノロジーがもたらす変化を、真の豊かさへと繋げることを使命とします。事業の効率化の先にある、人々の創造性と幸福度の向上に貢献します。
            </p>
          </div>
        </Section>

        <Section id="company" className="bg-white/40">
          <SectionTitle>Company Profile</SectionTitle>
          <div className="max-w-2xl mx-auto">
            <InteractiveCard className="bg-white/30 p-8 md:p-10 rounded-lg shadow-sm border border-gray-200/20 hover:shadow-xl transition-shadow">
              <ul className="space-y-5">
                {[
                  { label: "会社名", value: "株式会社Lab K9" },
                  { label: "住所", value: "〒530-0001 大阪府大阪市北区梅田1-1-3 大阪駅前第3ビル 29階" },
                  { label: "代表取締役", value: "木村 翼" },
                  { label: "取引先実績", value: "NTTデータ、artience、SCOグループ、広告代理店、映像制作会社、ECアパレル企業、建設企業、東大松尾研発AIスタートアップ、他多数" },
                  { label: "連絡先", value: "info[at]lab-k9.com（[at]を@に変換してお送りください）" },
                ].map((item) => (
                  <li key={item.label} className="flex flex-col sm:flex-row">
                    <span className="w-full sm:w-1/3 font-semibold text-gray-800 mb-1 sm:mb-0">{item.label}</span>
                    <span className="w-full sm:w-2/3 text-gray-700">{item.value}</span>
                  </li>
                ))}
              </ul>
            </InteractiveCard>
          </div>
        </Section>
      </main>
      <footer className="py-8 bg-gray-100/40 border-t border-gray-200/20 relative z-10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} Lab K9 Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
