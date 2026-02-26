import { siteConfig } from "@/lib/site-data"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-secondary/50">
      <div className="container text-center">
        <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-4">
          Contact
        </h2>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
          AI活用に関するご相談・お問い合わせはお気軽にご連絡ください。
        </p>
        <p className="text-foreground font-medium">
          {siteConfig.emailDisplay}
        </p>
      </div>
    </section>
  )
}
