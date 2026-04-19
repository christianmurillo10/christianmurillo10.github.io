"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/shared/ui/section-heading";
import { projects } from "@/shared/data/projects";
import { ProjectFilter } from "@/features/project-filter";
import { ProjectDetail } from "@/features/project-detail";
import { ProjectCard } from "@/entities/project/ui/project-card";
import type { Project, ProjectCategory } from "@/entities/project/model/types";

export function PortfolioPage() {
  const [filter, setFilter] = useState<"all" | ProjectCategory>("all");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <div className="py-8">
      <SectionHeading title="Portfolio" />
      <ProjectFilter active={filter} onChange={setFilter} />

      <div className="grid auto-rows-auto gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={i}
              onSelect={setSelected}
              featured={i === 0 && filtered.length > 3}
            />
          ))}
        </AnimatePresence>
      </div>

      <ProjectDetail
        project={selected}
        onClose={() => setSelected(null)}
      />
    </div>
  );
}
