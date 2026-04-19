"use client";

import { cn } from "@/shared/lib/cn";
import { portfolioTabs } from "@/shared/data/projects";
import type { ProjectCategory } from "@/entities/project/model/types";

interface ProjectFilterProps {
  active: "all" | ProjectCategory;
  onChange: (value: "all" | ProjectCategory) => void;
}

export function ProjectFilter({ active, onChange }: ProjectFilterProps) {
  return (
    <div className="mb-8 inline-flex rounded-xl border border-(--border) bg-(--bg-card) p-1">
      {portfolioTabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onChange(tab.value)}
          className={cn(
            "rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200",
            active === tab.value
              ? "bg-primary text-black shadow-[0_0_15px_rgba(255,193,7,0.2)]"
              : "text-(--text-muted) hover:text-primary"
          )}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
}
