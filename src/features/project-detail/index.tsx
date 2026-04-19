"use client";

import Image from "next/image";
import { Dialog } from "@/shared/ui/dialog";
import { Badge } from "@/shared/ui/badge";
import type { Project } from "@/entities/project/model/types";

interface ProjectDetailProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  if (!project) return null;

  return (
    <Dialog open={!!project} onClose={onClose}>
      {/* Image Gallery */}
      {project.images.length > 0 && (
        <div className="mb-6 flex snap-x snap-mandatory gap-3 overflow-x-auto rounded-lg pb-2">
          {project.images.map((img, i) => (
            <div
              key={i}
              className="relative aspect-video min-w-[280px] shrink-0 snap-center overflow-hidden rounded-lg"
            >
              <Image
                src={img}
                alt={`${project.name} screenshot ${i + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}

      <h2 className="mb-2 text-xl font-bold">{project.name}</h2>
      <p className="mb-4 text-sm text-(--text-muted)">{project.description}</p>

      {/* Details */}
      {project.details && project.details.length > 0 && (
        <div className="mb-4">
          <h3 className="mb-2 text-sm font-semibold">Key Contributions</h3>
          <ul className="space-y-1.5">
            {project.details.map((detail, i) => (
              <li
                key={i}
                className="flex gap-2 text-xs leading-relaxed text-(--text-muted)"
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                {detail}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tech Stack */}
      <div>
        <h3 className="mb-2 text-sm font-semibold">Tech Stack</h3>
        <div className="flex flex-wrap gap-1.5">
          {project.techStacks.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </div>
    </Dialog>
  );
}
