import { services } from "@/lib/site-data"
import { SectionTitle } from "./section-title"

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container">
        <SectionTitle>Services</SectionTitle>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="card-refined p-8 md:p-10 hover:-translate-y-0.5 transition-all duration-500 ease-out"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-accent/10">
                    <Icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
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
