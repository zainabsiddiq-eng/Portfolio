"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

const skillCategories = [
  { key: "languages" as const, label: "Languages", color: "from-rose-500 to-pink-500" },
  { key: "frontend" as const, label: "Frontend", color: "from-violet-500 to-purple-500" },
  { key: "backend" as const, label: "Backend", color: "from-cyan-500 to-blue-500" },
  { key: "marketing" as const, label: "SEO & Marketing", color: "from-emerald-500 to-teal-500" },
  { key: "tools" as const, label: "Tools & DevOps", color: "from-amber-500 to-orange-500" },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          subtitle="Skills"
          title="Technologies I Work With"
          description="A comprehensive toolkit spanning full stack development, SEO, and modern DevOps practices."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="rounded-2xl border border-border bg-surface/50 p-6 backdrop-blur-sm"
            >
              <div className="mb-4 flex items-center gap-3">
                <div
                  className={`h-1 w-8 rounded-full bg-gradient-to-r ${category.color}`}
                />
                <h3 className="font-semibold">{category.label}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills[category.key].map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: catIndex * 0.1 + i * 0.05 }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="cursor-default rounded-lg border border-border bg-background/50 px-3 py-1.5 text-sm font-medium transition-colors hover:border-accent/40 hover:text-accent"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
