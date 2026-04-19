"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, House, User, Briefcase, Mail, Download } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/shared/ui/social-icons";
import { navigationItems } from "@/shared/config/navigation";
import { profile, socialLinks } from "@/shared/data/profile";
import { ThemeToggle } from "@/features/theme-toggle";
import { cn } from "@/shared/lib/cn";

const iconMap: Record<string, React.ReactNode> = {
  House: <House size={18} />,
  User: <User size={18} />,
  Briefcase: <Briefcase size={18} />,
  Mail: <Mail size={18} />,
};

export function MobileHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-(--border) bg-(--bg-sidebar)/80 backdrop-blur-md lg:hidden">
      <div className="flex h-14 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="relative h-8 w-8 overflow-hidden rounded-full border border-primary">
            <Image
              src={profile.imagePath}
              alt={profile.name}
              fill
              className="object-cover"
            />
          </div>
          <span className="text-sm font-bold">{profile.name}</span>
        </div>
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-(--text-muted) hover:text-primary"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-(--border) bg-(--bg-sidebar) px-4 pb-4 pt-2">
          <nav className="flex flex-col gap-1">
            {navigationItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors",
                    active
                      ? "bg-primary text-black font-medium"
                      : "text-(--text-muted) hover:bg-white/5 hover:text-primary"
                  )}
                >
                  {iconMap[item.icon]}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <hr className="my-3 border-(--border)" />

          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg p-2 text-(--text-muted) hover:text-primary"
                >
                  {link.icon === "Linkedin" ? (
                    <LinkedInIcon size={16} />
                  ) : (
                    <GitHubIcon size={16} />
                  )}
                </a>
              ))}
            </div>
            <a
              href="/files/ChristianMurilloCV.pdf"
              download
              className="flex items-center gap-2 rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-black"
            >
              <Download size={14} />
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
