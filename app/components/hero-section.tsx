import { heroContent } from "@/lib/site-data"
import { ScrollIndicator } from "./scroll-indicator"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-24 md:py-32"
    >
      <div className="container text-center">
        <h1 className="text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-8 leading-[1.15] text-foreground">
          {heroContent.heading}
        </h1>
        <div className="w-24 h-px bg-accent mx-auto mb-8" />
        <p className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-loose">
          {heroContent.subtext}
        </p>
      </div>
      <ScrollIndicator />
    </section>
  )
}
