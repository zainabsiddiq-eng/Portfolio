"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          subtitle="About Me"
          title="Developer & Digital Marketer"
          description="A unique blend of technical expertise and marketing acumen, delivering solutions that are both powerful and discoverable."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="rounded-2xl border border-border bg-surface/50 p-8 backdrop-blur-sm">
              <p className="leading-relaxed text-muted">
                I&apos;m <strong className="text-foreground">Zainab</strong>, a
                passionate Full Stack Developer with nearly{" "}
                <strong className="text-accent">7 years</strong> of experience
                building web applications that solve real-world problems. My
                journey spans from crafting pixel-perfect user interfaces to
                architecting scalable backend systems.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                What sets me apart is my{" "}
                <strong className="text-foreground">4 years of digital marketing</strong>{" "}
                experience. I don&apos;t just build websites — I build products
                that rank, convert, and grow. This dual expertise lets me bridge
                the gap between engineering and business outcomes.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="group rounded-2xl border border-border bg-surface/50 p-6 text-center backdrop-blur-sm transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
              >
                <div className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl">
                  {stat.value}
                </div>
                <p className="mt-2 text-xs font-medium text-muted sm:text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
