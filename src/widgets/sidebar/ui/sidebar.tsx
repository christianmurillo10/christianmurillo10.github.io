"use client";

import Image from "next/image";
import { Download } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/shared/ui/social-icons";
import { profile, socialLinks, languages } from "@/shared/data/profile";
import { primarySkills, otherKnowledge } from "@/shared/data/skills";
import { getAge } from "@/shared/lib/utils";
import { SkillBar } from "./skill-bar";
import { Button } from "@/shared/ui/button";

export function Sidebar() {
  return (
    <aside className="hidden h-screen w-[280px] shrink-0 flex-col border-r border-(--border) bg-(--bg-sidebar) lg:flex">
      {/* Fixed top: Profile + Info */}
      <div className="shrink-0 p-6 pb-0">
        {/* Profile Photo with gradient border */}
        <div className="mb-5 flex flex-col items-center">
          <div className="relative mb-3 h-28 w-28">
            <div className="absolute inset-0 rounded-full bg-[conic-gradient(var(--color-primary),transparent,var(--color-primary))]" />
            <div className="absolute inset-[3px] overflow-hidden rounded-full bg-(--bg-sidebar)">
              <Image
                src={profile.imagePath}
                alt={profile.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <h2 className="text-lg font-bold">{profile.name}</h2>
          <p className="mt-0.5 text-xs text-(--text-muted)">{profile.jobTitle}</p>
        </div>

        {/* Info */}
        <div className="mb-5 rounded-lg border border-(--border) bg-(--bg-card) p-3">
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-(--text-muted)">Residence:</span>
              <span>{profile.residence}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-(--text-muted)">City:</span>
              <span>{profile.city}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-(--text-muted)">Age:</span>
              <span>{getAge(profile.birthday)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable: Languages, Skills, Extra Skills, CV, Social */}
      <div className="flex-1 overflow-y-auto px-6 pb-6">
        {/* Languages */}
        <div className="mb-5">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-(--text-muted)">
            Languages
          </h3>
          {languages.map((lang) => (
            <SkillBar key={lang.name} name={lang.name} value={lang.value} />
          ))}
        </div>

        <hr className="mb-5 border-(--border)" />

        {/* Skills */}
        <div className="mb-5">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-(--text-muted)">
            Skills
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {primarySkills.map((skill) => (
              <span
                key={skill.name}
                className="inline-flex items-center gap-1.5 rounded-md border border-primary/30 bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-primary transition-colors hover:bg-primary/15"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        <hr className="mb-5 border-(--border)" />

        {/* Other Knowledge */}
        <div className="mb-5">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-(--text-muted)">
            Extra Skills
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {otherKnowledge.map((item) => (
              <span
                key={item}
                className="rounded-md border border-(--border) bg-white/5 px-2 py-0.5 text-[10px] text-(--text-muted) transition-colors hover:border-primary/30 hover:text-primary"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <hr className="mb-5 border-(--border)" />

        {/* Download CV */}
        <a href="/files/ChristianMurilloCV.pdf" download>
          <Button className="w-full shadow-[0_0_20px_rgba(255,193,7,0.15)] hover:shadow-[0_0_30px_rgba(255,193,7,0.25)]" size="sm">
            <Download size={14} />
            Download CV
          </Button>
        </a>

        {/* Social Links */}
        <div className="mt-4 flex justify-center gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-(--border) p-2.5 text-(--text-muted) transition-all hover:border-primary/20 hover:text-primary hover:shadow-[0_0_15px_rgba(255,193,7,0.1)]"
            >
              {link.icon === "Linkedin" ? (
                <LinkedInIcon size={16} />
              ) : (
                <GitHubIcon size={16} />
              )}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
