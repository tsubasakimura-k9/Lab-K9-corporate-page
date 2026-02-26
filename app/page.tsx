import { Header } from "./components/header"
import { HeroSection } from "./components/hero-section"
import { ServicesSection } from "./components/services-section"
import { CasesSection } from "./components/cases-section"
import { CompanySection } from "./components/company-section"
import { ContactSection } from "./components/contact-section"
import { Footer } from "./components/footer"
import { ScrollFadeIn } from "./components/scroll-fade-in"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <ScrollFadeIn>
          <HeroSection />
        </ScrollFadeIn>
        <ScrollFadeIn delay={100}>
          <ServicesSection />
        </ScrollFadeIn>
        <ScrollFadeIn delay={100}>
          <CasesSection />
        </ScrollFadeIn>
        <ScrollFadeIn delay={100}>
          <CompanySection />
        </ScrollFadeIn>
        <ScrollFadeIn delay={100}>
          <ContactSection />
        </ScrollFadeIn>
      </main>
      <Footer />
    </div>
  )
}
