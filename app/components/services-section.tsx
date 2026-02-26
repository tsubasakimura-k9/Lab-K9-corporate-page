import { services } from "@/lib/site-data"
import { SectionTitle } from "./section-title"

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container">
        <SectionTitle>Services</SectionTitle>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="bg-card p-8 rounded-lg border border-border/50 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-md bg-secondary">
                    <Icon className="w-5 h-5 text-foreground" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-medium text-foreground">
                    {service.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
