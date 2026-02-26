import { companyInfo } from "@/lib/site-data"
import { SectionTitle } from "./section-title"

export function CompanySection() {
  return (
    <section id="company" className="py-24 md:py-32">
      <div className="container">
        <SectionTitle>Company</SectionTitle>
        <div className="max-w-2xl mx-auto">
          <div className="card-refined p-8 md:p-12">
            <dl>
              {companyInfo.map((item, i) => (
                <div
                  key={item.label}
                  className={`flex flex-col sm:flex-row gap-1 sm:gap-0 pb-6 ${
                    i < companyInfo.length - 1
                      ? "border-b border-border/30 mb-6"
                      : ""
                  }`}
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
