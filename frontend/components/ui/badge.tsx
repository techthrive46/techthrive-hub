import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type BadgeVariant = "default" | "success" | "warning" | "muted";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variants: Record<BadgeVariant, string> = {
  default: "bg-[var(--accent-light)] text-[var(--accent)] ring-1 ring-[var(--accent)]/20",
  success: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-500/20",
  warning: "bg-amber-50 text-amber-700 ring-1 ring-amber-500/20",
  muted: "bg-slate-100 text-[var(--muted)] ring-1 ring-slate-200",
};

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wide",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
