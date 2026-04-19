"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { House, User, Briefcase, Mail } from "lucide-react";
import { navigationItems } from "@/shared/config/navigation";
import { ThemeToggle } from "@/features/theme-toggle";
import { cn } from "@/shared/lib/cn";

const iconMap: Record<string, React.ReactNode> = {
  House: <House size={20} />,
  User: <User size={20} />,
  Briefcase: <Briefcase size={20} />,
  Mail: <Mail size={20} />,
};

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="hidden h-screen w-[60px] shrink-0 flex-col items-center justify-between border-l border-(--border) bg-(--bg-sidebar) py-6 lg:flex">
      <div className="flex flex-col items-center gap-2">
        {navigationItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group relative rounded-xl p-3 transition-all duration-200",
                active
                  ? "bg-primary text-black shadow-[0_0_15px_rgba(255,193,7,0.3)]"
                  : "text-(--text-muted) hover:bg-white/5 hover:text-primary"
              )}
              aria-label={item.label}
            >
              {iconMap[item.icon]}
              <span className="pointer-events-none absolute right-full mr-2 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-(--bg-card) px-2.5 py-1.5 text-xs text-(--text) opacity-0 shadow-lg transition-opacity group-hover:opacity-100 border border-(--border)">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
      <ThemeToggle />
    </nav>
  );
}
