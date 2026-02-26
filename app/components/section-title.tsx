import { AccentLine } from "./accent-line"

interface SectionTitleProps {
  children: React.ReactNode
}

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <div className="flex flex-col items-center justify-center mb-12 md:mb-16">
      <AccentLine className="mb-5" />
      <h2 className="text-2xl md:text-3xl font-medium text-foreground text-center tracking-wide">
        {children}
      </h2>
    </div>
  )
}
