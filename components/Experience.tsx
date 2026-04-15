import { experienceData } from "@/data/config";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 bg-card/50">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionHeading>{experienceData.heading}</SectionHeading>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10 md:space-y-12">
            {experienceData.roles.map((role, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="relative pl-12 md:pl-16">
                  {/* Timeline dot */}
                  <div className="absolute left-2.5 md:left-4.5 top-1 w-3 h-3 border-2 border-foreground bg-background" />

                  <div className="brutalist-card p-6 md:p-8 bg-card">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-4">
                      <div>
                        <h3 className="text-lg md:text-xl font-bold">
                          {role.title}
                        </h3>
                        <p className="text-muted font-medium">
                          {role.company}
                        </p>
                      </div>
                      <span className="text-xs font-mono uppercase tracking-wider text-muted whitespace-nowrap">
                        {role.duration}
                      </span>
                    </div>

                    <ul className="space-y-2.5">
                      {role.points.map((point, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2.5 text-sm md:text-base text-muted leading-relaxed"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-foreground/40" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
