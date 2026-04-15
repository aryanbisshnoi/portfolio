import { aboutData } from "@/data/config";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="grid md:grid-cols-[1fr_auto] gap-12 md:gap-20">
            {/* Text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                {aboutData.heading}
              </h2>
              <div className="h-1 w-16 bg-foreground mb-8" />

              <div className="space-y-5">
                {aboutData.paragraphs.map((p, i) => (
                  <p key={i} className="text-muted leading-relaxed text-base md:text-lg">
                    {p}
                  </p>
                ))}
              </div>
            </div>

            {/* Highlights sidebar */}
            <div className="flex flex-row flex-wrap md:flex-col gap-4 md:gap-5 md:min-w-[200px]">
              {aboutData.highlights.map((item, i) => (
                <div
                  key={i}
                  className="brutalist-card px-5 py-4 bg-card flex-1 md:flex-initial min-w-[140px]"
                >
                  <p className="text-xs font-mono uppercase tracking-widest text-muted mb-1">
                    {item.label}
                  </p>
                  <p className="text-lg font-bold text-foreground">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
