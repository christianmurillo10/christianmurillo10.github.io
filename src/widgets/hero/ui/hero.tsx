"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { TypingAnimation } from "./typing-animation";
import { profile } from "@/shared/data/profile";

const roles = [
  "Software Engineer",
  "Full Stack Developer",
  "Backend Developer",
  "NodeJS Developer",
];

export function Hero() {
  return (
    <section className="relative flex min-h-[70vh] flex-col justify-center py-16">
      {/* Animated grid background */}
      <div className="animated-grid" />

      {/* Radial glow behind heading */}
      <div className="pointer-events-none absolute left-1/4 top-1/3 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-3 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur-sm"
        >
          Hello, I&apos;m
        </motion.p>

        <h1 className="mb-4 text-5xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
          <span className="gradient-text">{profile.name}</span>
          <span className="text-primary">.</span>
        </h1>

        <div className="mb-6 h-9 text-xl text-(--text-muted) md:text-2xl lg:text-3xl">
          <TypingAnimation words={roles} />
        </div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-primary-dark hover:shadow-[0_0_30px_rgba(255,193,7,0.3)]"
          >
            Get in Touch
          </a>
          <a
            href="/files/ChristianMurilloCV.pdf"
            download
            className="inline-flex items-center gap-2 rounded-lg border border-(--border) bg-(--bg-card) px-6 py-3 text-sm font-medium backdrop-blur-md transition-all hover:border-primary/30 hover:text-primary"
          >
            Download CV
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-(--text-muted)"
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
