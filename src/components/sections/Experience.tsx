"use client";

import { motion } from "framer-motion";
import { Briefcase, TrendingUp } from "lucide-react";
import { experiences } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = [Briefcase, TrendingUp];

export function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          subtitle="Experience"
          title="My Professional Journey"
          description="Years of hands-on experience across software development and digital marketing."
        />

        <div className="space-y-8">
          {experiences.map((exp, i) => {
            const Icon = icons[i] ?? Briefcase;
            return (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group relative rounded-2xl border border-border bg-surface/50 p-8 backdrop-blur-sm transition-all hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5"
              >
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 transition-transform group-hover:scale-110">
                    <Icon className="h-7 w-7 text-accent" />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="text-xl font-bold">{exp.role}</h3>
                        <p className="text-accent">{exp.company}</p>
                      </div>
                      <span className="mt-2 inline-flex w-fit rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent sm:mt-0">
                        {exp.period}
                      </span>
                    </div>

                    <p className="mt-4 leading-relaxed text-muted">
                      {exp.description}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {exp.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2 text-sm text-muted"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
