import { cases, clients } from "@/lib/site-data"
import { SectionTitle } from "./section-title"

export function CasesSection() {
  return (
    <section id="cases" className="py-20 md:py-28 bg-secondary/50">
      <div className="container">
        <SectionTitle>Cases</SectionTitle>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {cases.map((c) => (
            <div
              key={c.tag}
              className="bg-card p-6 rounded-lg border border-border/50"
            >
              <span className="inline-block text-xs font-medium text-accent-foreground bg-accent/15 px-3 py-1 rounded-full mb-3">
                {c.tag}
              </span>
              <p className="text-foreground font-medium mb-1">{c.summary}</p>
              <p className="text-sm text-muted-foreground">{c.scale}</p>
            </div>
          ))}
        </div>

        <div>
          <p className="text-sm text-muted-foreground text-center mb-6">
            主な取引先・パートナー
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {clients.map((client) => (
              <span
                key={client}
                className="text-sm text-muted-foreground/80 whitespace-nowrap"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
