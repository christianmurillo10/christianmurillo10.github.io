import { cn } from "@/shared/lib/cn";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export function Card({ children, className, glow = true }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-(--border) bg-(--bg-card) p-5 transition-all duration-300",
        glow && "glow-card hover:border-primary/20 hover:shadow-[0_0_30px_rgba(255,193,7,0.05)]",
        className
      )}
    >
      {children}
    </div>
  );
}
