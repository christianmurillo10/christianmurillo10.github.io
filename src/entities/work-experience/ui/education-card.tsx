"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import type { Education } from "@/entities/work-experience/model/types";

interface EducationCardProps {
  education: Education;
  index: number;
}

export function EducationCard({ education, index }: EducationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="glow-card rounded-xl border border-(--border) bg-(--bg-card) p-5 transition-all duration-300 hover:border-primary/20 hover:shadow-[0_0_30px_rgba(255,193,7,0.05)]"
    >
      <div className="mb-2 inline-flex rounded-lg bg-primary/10 p-2 text-primary">
        <GraduationCap size={18} />
      </div>
      <h3 className="mb-1 text-sm font-bold">{education.course}</h3>
      <p className="text-xs text-primary">{education.school}</p>
      <p className="mt-1 text-xs text-(--text-muted)">{education.batch}</p>
    </motion.div>
  );
}
