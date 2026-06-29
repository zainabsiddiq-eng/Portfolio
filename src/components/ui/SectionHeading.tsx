"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  description?: string;
}

export function SectionHeading({
  subtitle,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="mb-12 text-center"
    >
      <span className="mb-3 inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
        {subtitle}
      </span>
      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-muted">{description}</p>
      )}
    </motion.div>
  );
}
