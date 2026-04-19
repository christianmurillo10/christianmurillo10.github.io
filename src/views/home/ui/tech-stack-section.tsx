"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { techStacks } from "@/shared/data/skills";

const doubled = [...techStacks, ...techStacks];

export function TechStackSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="overflow-hidden"
    >
      {/* Row 1 — scrolls left */}
      <div className="mb-4 flex animate-marquee gap-4" style={{ width: "max-content" }}>
        {doubled.map((tech, i) => (
          <div
            key={`${tech.name}-${i}`}
            className="group flex w-[120px] shrink-0 flex-col items-center gap-2 rounded-xl border border-(--border) bg-(--bg-card) p-4 transition-all duration-300 hover:border-primary/20 hover:shadow-[0_0_20px_rgba(255,193,7,0.06)]"
          >
            <div className="relative h-10 w-10 grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-110">
              <Image
                src={tech.src}
                alt={tech.name}
                fill
                className="object-contain"
              />
            </div>
            <span className="whitespace-nowrap text-[10px] text-(--text-muted) transition-colors group-hover:text-primary">
              {tech.name}
            </span>
          </div>
        ))}
      </div>

      {/* Row 2 — scrolls right */}
      <div
        className="flex animate-marquee gap-4"
        style={{ width: "max-content", animationDirection: "reverse", animationDuration: "40s" }}
      >
        {doubled.map((tech, i) => (
          <div
            key={`${tech.name}-rev-${i}`}
            className="group flex w-[120px] shrink-0 flex-col items-center gap-2 rounded-xl border border-(--border) bg-(--bg-card) p-4 transition-all duration-300 hover:border-primary/20 hover:shadow-[0_0_20px_rgba(255,193,7,0.06)]"
          >
            <div className="relative h-10 w-10 grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-110">
              <Image
                src={tech.src}
                alt={tech.name}
                fill
                className="object-contain"
              />
            </div>
            <span className="whitespace-nowrap text-[10px] text-(--text-muted) transition-colors group-hover:text-primary">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
