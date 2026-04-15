import { skillsData } from "@/data/config";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 bg-card/50">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionHeading>{skillsData.heading}</SectionHeading>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillsData.categories.map((category, i) => (
            <ScrollReveal key={category.title} delay={i * 100}>
              <div className="brutalist-card p-6 md:p-8 bg-card h-full">
                <h3 className="text-sm font-mono uppercase tracking-widest text-muted mb-5">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block px-3 py-1.5 text-sm font-medium bg-foreground/5 text-foreground border border-border rounded-sm hover:bg-foreground hover:text-background transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
