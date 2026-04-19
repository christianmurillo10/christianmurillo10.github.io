"use client";

import { Hero } from "@/widgets/hero/ui/hero";
import { SectionHeading } from "@/shared/ui/section-heading";
import { HighlightsSection } from "./highlights-section";
import { ServicesSection } from "./services-section";
import { TechStackSection } from "./tech-stack-section";
export function HomePage() {
  return (
    <div className="space-y-16">
      <Hero />
      <HighlightsSection />
      <div>
        <SectionHeading title="What I Do" />
        <ServicesSection />
      </div>
      <div>
        <SectionHeading title="Tech Stack" />
        <TechStackSection />
      </div>
    </div>
  );
}
