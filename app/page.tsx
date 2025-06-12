"use client"

import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState, useRef, useCallback, useMemo } from "react"
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
    <div className="w-20 h-px bg-[#B08D57] mb-4 animate-subtle-breathing-opacity" />
    <h2 className="text-3xl md:text-4xl font-semibold text-black text-center">{children}</h2>
  </div>
)

// 流体風ヒーローエレメント
const LiquidIntelligenceElement: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })
  const [orientation, setOrientation] = useState({ beta: 90, gamma: 0 })
  const [emphasizedEffects, setEmphasizedEffects] = useState<string[]>([])

  const backgroundRef = useRef<HTMLDivElement>(null)
  const lastAcceleration = useRef({ x: 0, y: 0, z: 0, timestamp: Date.now() })

  useEffect(() => {
    setIsMounted(true)
    const checkIsMobile = /Mobi|Android/i.test(navigator.userAgent)
    setIsMobile(checkIsMobile)
  }, [])

  const handleMouseMove = useCallback((event: MouseEvent) => {
    setMousePosition({
      x: (event.clientX / window.innerWidth) * 100,
      y: (event.clientY / window.innerHeight) * 100,
    })
  }, [])

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

        if (totalDelta > 12) {
          const effectId = `emphasis-${Date.now()}`
          setEmphasizedEffects((prev) => [...prev, effectId])
          setTimeout(() => {
            setEmphasizedEffects((prev) => prev.filter((id) => id !== effectId))
          }, 1500)
        }
        lastAcceleration.current = { x: x || 0, y: y || 0, z: z || 0, timestamp: now }
      }
    }
  }, [])

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

    return () => {
      if (isMobile) {
        window.removeEventListener("deviceorientation", handleDeviceOrientation)
        window.removeEventListener("devicemotion", handleDeviceMotion)
      } else {
        window.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [isMounted, isMobile, handleMouseMove, handleDeviceOrientation, handleDeviceMotion])

  const gradX = isMobile ? 50 + (orientation.gamma / 90) * 25 : mousePosition.x
  const gradY = isMobile ? 50 + ((orientation.beta - 90) / 90) * 25 : mousePosition.y

  const backgroundStyle: React.CSSProperties = {
    backgroundImage: `
      radial-gradient(circle at ${gradX}% ${gradY}%, rgba(100, 100, 120, 0.25) 0%, transparent 45%),
      radial-gradient(circle at ${100 - gradX}% ${100 - gradY}%, rgba(120, 120, 140, 0.2) 0%, transparent 55%)
    `,
    backgroundSize: "150% 150%, 200% 200%",
    backgroundRepeat: "no-repeat",
    transition: "background-image 0.2s ease-out",
  }

  const particles = useMemo(() => {
    if (!isMounted) return []
    const numParticles = 20
    return Array.from({ length: numParticles }).map((_, i) => {
      const size = Math.random() * 3 + 1.5
      const duration = Math.random() * 8 + 10
      const delay = Math.random() * -duration
      const left = Math.random() * 95 + 2.5
      const top = Math.random() * 95 + 2.5
      const animationName = Math.random() > 0.5 ? "animate-faint-ripple" : "animate-gentle-glow"
      return (
        <div
          key={`particle-${i}`}
          className={`absolute rounded-full ${animationName}`}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${left}%`,
            top: `${top}%`,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
            backgroundColor: `rgba(180, 180, 200, ${Math.random() * 0.35 + 0.25})`,
            zIndex: 1,
          }}
        />
      )
    })
  }, [isMounted])

  const emphasizedParticleElements = emphasizedEffects.map((id) => {
    const size = Math.random() * 60 + 40
    const left = Math.random() * 70 + 15
    const top = Math.random() * 70 + 15
    return (
      <div
        key={id}
        className="absolute rounded-full opacity-0"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${left}%`,
          top: `${top}%`,
          background: `radial-gradient(circle, rgba(220, 220, 255, 0.4) 0%, transparent 70%)`,
          animation: `gentle-glow 1.5s ease-out forwards, faint-ripple 1.5s ease-out forwards`,
          transform: `scale(${Math.random() * 0.5 + 0.8})`,
          zIndex: 2,
        }}
      />
    )
  })

  if (!isMounted) {
    return <div className="fixed inset-0 z-0 bg-gray-100" />
  }

  return (
    <div ref={backgroundRef} className="fixed inset-0 z-0 overflow-hidden" style={backgroundStyle}>
      {particles}
      {emphasizedParticleElements}
      <div
        className="absolute inset-[20%] rounded-full animate-subtle-breathing-scale opacity-5"
        style={{
          background: "radial-gradient(circle, rgba(200,200,200,0.04) 0%, transparent 70%)",
          zIndex: 0,
        }}
      />
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
              src={`${process.env.NODE_ENV === 'production' ? '/Lab-K9-corporate-page' : ''}/images/logo.png`}
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
              テクノロジーとビジネスの力で、
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
              テクノロジーと経営マネジメントのかけ合わせで、はたらく人の幸福度をあげる。私たちは、テクノロジーがもたらす変化を、真の豊かさへと繋げることを使命とします。事業の効率化の先にある、人々の創造性と幸福度の向上に貢献します。
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
                  { label: "取引先実績", value: "神戸市、NTTデータ、JR西日本、他多数" },
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
