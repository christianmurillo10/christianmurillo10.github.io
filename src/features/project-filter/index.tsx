"use client";

import { cn } from "@/shared/lib/cn";
import { portfolioTabs, projects } from "@/shared/data/projects";
import type { ProjectCategory } from "@/entities/project/model/types";

interface ProjectFilterProps {
  active: "all" | ProjectCategory;
  onChange: (value: "all" | ProjectCategory) => void;
}

export function ProjectFilter({ active, onChange }: ProjectFilterProps) {
  const getCount = (value: "all" | ProjectCategory) =>
    value === "all"
      ? projects.length
      : projects.filter((p) => p.category === value).length;

  return (
    <div className="mb-8 inline-flex rounded-xl border border-(--border) bg-(--bg-card) p-1">
      {portfolioTabs.map((tab) => {
        const isActive = active === tab.value;
        return (
          <button
            key={tab.value}
            onClick={() => onChange(tab.value)}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200",
              isActive
                ? "bg-primary text-black shadow-[0_0_15px_rgba(255,193,7,0.2)]"
                : "text-(--text-muted) hover:text-primary"
            )}
          >
            <span>{tab.name}</span>
            <span
              className={cn(
                "rounded-full px-1.5 py-0.5 text-[10px] font-semibold leading-none",
                isActive
                  ? "bg-black/15 text-black"
                  : "bg-(--border) text-(--text-muted)"
              )}
            >
              {getCount(tab.value)}
            </span>
          </button>
        );
      })}
    </div>
  );
}
