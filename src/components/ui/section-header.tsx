import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export function SectionHeader({
  title,
  subtitle,
  children,
  className,
  titleClassName,
  subtitleClassName,
}: SectionHeaderProps) {
  return (
    <div className={cn("text-center mb-16", className)}>
      <h2 className={cn("text-3xl sm:text-4xl font-bold text-neutral-900 mb-4", titleClassName)}>{title}</h2>
      {subtitle && <p className={cn("text-xl text-neutral-600 max-w-2xl mx-auto", subtitleClassName)}>{subtitle}</p>}
      {children}
    </div>
  );
}
