"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/shared/ui/section-heading";
import { aboutMe } from "@/shared/data/content";
import { workHistories } from "@/shared/data/experience";
import { educations } from "@/shared/data/experience";
import { Timeline } from "@/entities/work-experience/ui/timeline";
import { EducationCard } from "@/entities/work-experience/ui/education-card";

export function AboutPage() {
  return (
    <div className="space-y-16 py-8">
      {/* About Me */}
      <div>
        <SectionHeading title="About Me" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          {aboutMe.map((paragraph, i) => (
            <p
              key={i}
              className="text-sm leading-relaxed text-(--text-muted)"
            >
              {paragraph}
            </p>
          ))}
        </motion.div>
      </div>

      {/* Work History */}
      <div>
        <SectionHeading title="Work Experience" />
        <Timeline items={workHistories} />
      </div>

      {/* Education */}
      <div>
        <SectionHeading title="Education" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {educations.map((edu, i) => (
            <EducationCard key={edu.school} education={edu} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
