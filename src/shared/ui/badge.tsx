import { cn } from "@/shared/lib/cn";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary",
        className
      )}
    >
      {children}
    </span>
  );
}
