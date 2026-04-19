"use client";

import { motion } from "framer-motion";
import type { WorkExperience } from "@/entities/work-experience/model/types";

interface TimelineProps {
  items: WorkExperience[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <>
      {/* Desktop: Horizontal scrollable timeline */}
      <div className="hidden md:block">
        <div className="relative overflow-x-auto pb-6 scrollbar-hide">
          {/* Horizontal line */}
          <div className="absolute left-0 right-0 top-[18px] h-px bg-(--border)" />

          <div className="flex gap-6" style={{ minWidth: `${items.length * 340}px` }}>
            {items.map((item, i) => (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative w-[320px] shrink-0 pt-10"
              >
                {/* Dot on the line */}
                <div className="absolute left-6 top-0 flex flex-col items-center">
                  <div className="relative z-10 h-4 w-4 rounded-full border-2 border-primary bg-(--bg) shadow-[0_0_10px_rgba(255,193,7,0.3)]" />
                </div>

                {/* Card */}
                <div className="glow-card rounded-xl border border-(--border) bg-(--bg-card) p-5 transition-all duration-300 hover:border-primary/20 hover:shadow-[0_0_30px_rgba(255,193,7,0.05)]">
                  <span className="mb-2 inline-block rounded-md bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
                    {item.employmentDate}
                  </span>
                  <h3 className="mb-1 text-sm font-bold">{item.position}</h3>
                  <p className="mb-3 text-xs font-medium text-primary/80">
                    {item.company}
                  </p>
                  <ul className="space-y-1.5">
                    {item.descriptions.slice(0, 3).map((desc, j) => (
                      <li
                        key={j}
                        className="flex gap-2 text-xs leading-relaxed text-(--text-muted)"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        {desc}
                      </li>
                    ))}
                    {item.descriptions.length > 3 && (
                      <li className="text-xs text-primary/60">
                        +{item.descriptions.length - 3} more
                      </li>
                    )}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <p className="mt-2 text-center text-[10px] text-(--text-muted)">
          Scroll to see more &rarr;
        </p>
      </div>

      {/* Mobile: Vertical timeline */}
      <div className="md:hidden">
        <div className="relative space-y-8 pl-8 before:absolute before:left-3 before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-(--border)">
          {items.map((item, i) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              {/* Dot */}
              <div className="absolute -left-8 top-1.5 flex h-6 w-6 items-center justify-center">
                <div className="h-3 w-3 rounded-full border-2 border-primary bg-(--bg) shadow-[0_0_8px_rgba(255,193,7,0.3)]" />
              </div>

              <div className="glow-card rounded-xl border border-(--border) bg-(--bg-card) p-5">
                <div className="mb-1 flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                  <h3 className="text-sm font-bold">{item.position}</h3>
                  <span className="text-xs text-(--text-muted) whitespace-nowrap">
                    {item.employmentDate}
                  </span>
                </div>
                <p className="mb-3 text-xs font-medium text-primary">
                  {item.company}
                </p>
                <ul className="space-y-1.5">
                  {item.descriptions.map((desc, j) => (
                    <li
                      key={j}
                      className="flex gap-2 text-xs leading-relaxed text-(--text-muted)"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
