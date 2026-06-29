"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { personalInfo } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          subtitle="Contact"
          title="Let's Work Together"
          description="Have a project in mind or want to discuss opportunities? I'd love to hear from you."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 lg:col-span-2"
          >
            <div className="rounded-2xl border border-border bg-surface/50 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted">Email</p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="font-medium transition-colors hover:text-accent"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-surface/50 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted">Location</p>
                  <p className="font-medium">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface/50 transition-all hover:border-accent/50 hover:text-accent"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface/50 transition-all hover:border-accent/50 hover:text-accent"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-border bg-surface/50 p-8 backdrop-blur-sm lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm outline-none transition-colors focus:border-accent/50 focus:ring-2 focus:ring-accent/20"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm outline-none transition-colors focus:border-accent/50 focus:ring-2 focus:ring-accent/20"
                />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="subject" className="mb-2 block text-sm font-medium">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="Project inquiry"
                className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm outline-none transition-colors focus:border-accent/50 focus:ring-2 focus:ring-accent/20"
              />
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-2 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-xl border border-border bg-background/50 px-4 py-3 text-sm outline-none transition-colors focus:border-accent/50 focus:ring-2 focus:ring-accent/20"
              />
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-all hover:shadow-xl hover:shadow-violet-500/30 hover:scale-105"
            >
              <Send className="h-4 w-4" />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
