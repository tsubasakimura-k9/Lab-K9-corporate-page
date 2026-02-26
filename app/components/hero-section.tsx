import { heroContent } from "@/lib/site-data"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-24 md:py-32"
    >
      <div className="container text-center">
        <h1 className="text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-8 leading-tight text-foreground">
          {heroContent.heading}
        </h1>
        <p className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed">
          {heroContent.subtext}
        </p>
      </div>
    </section>
  )
}
