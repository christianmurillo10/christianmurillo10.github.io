"use client";

import { motion } from "framer-motion";

interface SkillBarProps {
  name: string;
  value: number;
}

export function SkillBar({ name, value }: SkillBarProps) {
  return (
    <div className="mb-3">
      <div className="mb-1 flex justify-between text-xs">
        <span className="text-(--text-muted)">{name}</span>
        <span className="text-(--text-muted)">{value}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full rounded-full bg-primary"
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
