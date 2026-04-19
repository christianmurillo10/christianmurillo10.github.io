"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { highlights } from "@/shared/data/content";

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const increment = Math.ceil(target / 40);
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function HighlightsSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="grid grid-cols-2 gap-4 md:grid-cols-4"
    >
      {highlights.map((item) => (
        <div
          key={item.label}
          className="glow-card rounded-xl border border-(--border) bg-(--bg-card) p-5 text-center transition-all duration-300 hover:border-primary/20 hover:shadow-[0_0_30px_rgba(255,193,7,0.05)]"
        >
          <div className="text-3xl font-bold text-primary">
            <CountUp target={item.value} suffix={item.suffix} />
          </div>
          <p className="mt-1 text-xs text-(--text-muted)">{item.label}</p>
        </div>
      ))}
    </motion.div>
  );
}
