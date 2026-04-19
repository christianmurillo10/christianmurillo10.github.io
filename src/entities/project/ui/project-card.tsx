"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import { Badge } from "@/shared/ui/badge";
import type { Project } from "@/entities/project/model/types";

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
  featured?: boolean;
}

export function ProjectCard({ project, index, onSelect, featured }: ProjectCardProps) {
  const hasImage = project.images.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay: index * 0.05 }}
      layout
      className={`glow-card group cursor-pointer overflow-hidden rounded-xl border border-(--border) bg-(--bg-card) transition-all duration-300 hover:border-primary/20 hover:shadow-[0_0_30px_rgba(255,193,7,0.06)] ${featured ? "sm:col-span-2 sm:row-span-2" : ""}`}
      onClick={() => onSelect(project)}
    >
      {/* Image */}
      <div className={`relative overflow-hidden bg-white/5 ${featured ? "aspect-[16/10]" : "aspect-video"}`}>
        {hasImage ? (
          <Image
            src={project.images[0]}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className={`font-bold text-primary/15 ${featured ? "text-7xl" : "text-4xl"}`}>
              {project.name.charAt(0)}
            </span>
          </div>
        )}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        {/* Eye icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
          <div className="rounded-full bg-primary p-3 text-black shadow-[0_0_20px_rgba(255,193,7,0.4)] transition-transform group-hover:scale-100 scale-75">
            <Eye size={featured ? 22 : 18} />
          </div>
        </div>
        {/* Category tag */}
        <div className="absolute left-3 top-3 rounded-md bg-black/50 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-white/80 opacity-0 transition-opacity group-hover:opacity-100">
          {project.category}
        </div>
      </div>

      {/* Info */}
      <div className={`${featured ? "p-5" : "p-4"}`}>
        <h3 className={`mb-1 font-semibold line-clamp-1 ${featured ? "text-base" : "text-sm"}`}>
          {project.name}
        </h3>
        <p className={`mb-3 text-(--text-muted) line-clamp-2 ${featured ? "text-sm" : "text-xs"}`}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.techStacks.slice(0, featured ? 5 : 3).map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
          {project.techStacks.length > (featured ? 5 : 3) && (
            <Badge>+{project.techStacks.length - (featured ? 5 : 3)}</Badge>
          )}
        </div>
      </div>
    </motion.div>
  );
}
