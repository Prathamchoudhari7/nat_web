"use client";

import { ArrowUpRight, Download } from "lucide-react";

type Variant = "primary" | "ghost";

const base =
  "group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full px-6 py-3.5 font-display text-sm font-medium tracking-wide transition-colors duration-500 ease-expo";

const variants: Record<Variant, string> = {
  primary:
    "bg-bone text-ink hover:text-ink before:absolute before:inset-0 before:translate-y-full before:rounded-full before:bg-copper-light before:transition-transform before:duration-500 before:ease-expo hover:before:translate-y-0",
  ghost:
    "border border-line-strong bg-ink/80 text-bone hover:border-copper hover:text-copper-light",
};

function Inner({ children, icon }: { children: React.ReactNode; icon: React.ReactNode }) {
  return (
    <>
      <span className="relative">{children}</span>
      <span className="relative transition-transform duration-500 ease-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        {icon}
      </span>
    </>
  );
}

type LinkButtonProps = {
  href: string;
  variant?: Variant;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

export function LinkButton({
  href,
  variant = "primary",
  icon = <ArrowUpRight aria-hidden className="size-4" />,
  children,
  className = "",
}: LinkButtonProps) {
  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`}>
      <Inner icon={icon}>{children}</Inner>
    </a>
  );
}

/** Opens the browser print dialog; the print stylesheet produces an A4 PDF. */
export function PrintButton({
  variant = "ghost",
  className = "",
  children = "Save as PDF",
}: {
  variant?: Variant;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className={`${base} ${variants[variant]} cursor-pointer ${className}`}
    >
      <Inner icon={<Download aria-hidden className="size-4" />}>{children}</Inner>
    </button>
  );
}
