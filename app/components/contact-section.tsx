import { siteConfig } from "@/lib/site-data"
import { AccentLine } from "./accent-line"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-secondary/50">
      <div className="container text-center">
        <AccentLine className="mx-auto mb-12" />
        <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-4">
          Contact
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          AI活用に関するご相談・お問い合わせはお気軽にご連絡ください。
        </p>
        <p className="mt-4 text-sm text-muted-foreground/70">
          {siteConfig.emailDisplay}
        </p>
      </div>
    </section>
  )
}
