import { companyInfo } from "@/lib/site-data"
import { SectionTitle } from "./section-title"

export function CompanySection() {
  return (
    <section id="company" className="py-20 md:py-28">
      <div className="container">
        <SectionTitle>Company</SectionTitle>
        <div className="max-w-2xl mx-auto">
          <div className="bg-card p-8 md:p-10 rounded-lg border border-border/50">
            <dl className="space-y-6">
              {companyInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col sm:flex-row gap-1 sm:gap-0"
                >
                  <dt className="w-full sm:w-1/3 font-medium text-foreground text-sm">
                    {item.label}
                  </dt>
                  <dd className="w-full sm:w-2/3 text-muted-foreground text-sm leading-relaxed">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
