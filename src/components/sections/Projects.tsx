"use client";

import { motion } from "framer-motion";
import { ExternalLink, Search, Server } from "lucide-react";
import { projects } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

const projectIcons = [Search, Server];

export function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          subtitle="Projects"
          title="Featured Work"
          description="Showcasing projects that demonstrate my full stack development and SEO expertise."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, i) => {
            const Icon = projectIcons[i] ?? Search;
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-surface/50 backdrop-blur-sm transition-all hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-cyan-500/5 opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="relative p-8">
                  <div className="mb-6 flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 transition-transform group-hover:scale-110 group-hover:rotate-3">
                      <Icon className="h-7 w-7 text-accent" />
                    </div>
                    <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold transition-colors group-hover:text-accent">
                    {project.title}
                  </h3>

                  <p className="mt-3 leading-relaxed text-muted">
                    {project.description}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-muted"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-background/60 px-2.5 py-1 text-xs font-medium text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-violet-500/25"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
