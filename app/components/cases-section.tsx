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
              className="card-refined p-6 md:p-8 hover:-translate-y-0.5 transition-all duration-500 ease-out"
            >
              <span className="inline-block text-[11px] font-medium text-accent tracking-widest uppercase border-b border-accent/40 pb-0.5 mb-3">
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
          <div className="flex flex-wrap items-center justify-center">
            {clients.map((client, i) => (
              <span
                key={client}
                className="flex items-center text-sm text-muted-foreground/80 whitespace-nowrap"
              >
                {i > 0 && (
                  <span className="mx-3 text-foreground/20" aria-hidden="true">|</span>
                )}
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
