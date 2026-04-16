import Image from "next/image";
import { projectsData } from "@/data/config";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

const gradientMap: Record<string, { light: string; dark: string }> = {
  amber: {
    light: "from-amber-100 to-orange-100",
    dark: "from-amber-900/60 to-orange-900/60",
  },
  blue: {
    light: "from-blue-100 to-indigo-100",
    dark: "from-blue-900/60 to-indigo-900/60",
  },
  emerald: {
    light: "from-emerald-100 to-teal-100",
    dark: "from-emerald-900/60 to-teal-900/60",
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionHeading>{projectsData.heading}</SectionHeading>
        </ScrollReveal>

        <div className="grid gap-8 md:gap-10">
          {projectsData.projects.map((project, i) => {
            const colors = gradientMap[project.color] ?? gradientMap.blue;

            return (
              <ScrollReveal key={project.title} delay={i * 100}>
                <article className="brutalist-card bg-card overflow-hidden">
                  <div className="grid md:grid-cols-[1fr_1fr] gap-0">
                    {/* Preview area */}
                    <div className="relative h-56 sm:h-64 md:h-auto overflow-hidden">
                      {project.image ? (
                        <>
                          <Image
                            src={project.image}
                            alt={`Screenshot of ${project.title}`}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover object-top"
                          />
                          {/* Subtle dark overlay in dark mode for blending */}
                          <div className="absolute inset-0 bg-black/0 dark:bg-black/20 transition-opacity duration-300" />
                        </>
                      ) : (
                        <>
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${colors.light} dark:opacity-0 transition-opacity duration-300`}
                          />
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${colors.dark} opacity-0 dark:opacity-100 transition-opacity duration-300`}
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-4xl md:text-5xl font-bold text-foreground/10 dark:text-foreground/15 select-none">
                              {project.title
                                .split(" ")
                                .map((w) => w[0])
                                .join("")}
                            </span>
                          </div>
                        </>
                      )}

                      {project.upcoming && (
                        <div className="absolute top-4 left-4 z-10">
                          <span className="inline-block px-3 py-1 text-xs font-mono uppercase tracking-wider bg-foreground text-background">
                            Coming Soon
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content panel */}
                    <div className="p-6 md:p-8 flex flex-col justify-center">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <h3 className="text-xl md:text-2xl font-bold text-foreground">
                          {project.title}
                        </h3>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="shrink-0 text-muted hover:text-foreground transition-colors"
                            aria-label={`View ${project.title}`}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                          </a>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-mono px-2 py-1 bg-foreground/5 dark:bg-foreground/10 text-muted border border-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <p className="text-muted text-sm md:text-base leading-relaxed mb-5">
                        {project.description}
                      </p>

                      {project.impacts.length > 0 && (
                        <ul className="space-y-2">
                          {project.impacts.map((impact, j) => (
                            <li
                              key={j}
                              className="flex items-start gap-2 text-sm text-foreground"
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-foreground" />
                              {impact}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
