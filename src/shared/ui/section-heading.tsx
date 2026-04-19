"use client";

import { cn } from "@/shared/lib/cn";

interface SectionHeadingProps {
  title: string;
  className?: string;
}

export function SectionHeading({ title, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-8", className)}>
      <h2 className="text-2xl font-bold tracking-tight">
        {title}
        <span className="text-primary">.</span>
      </h2>
      <div className="mt-2 h-1 w-12 rounded-full bg-primary" />
    </div>
  );
}
