import type { ReactNode } from "react";
import { cx } from "@/lib/cx";
import { AlertIcon, CheckIcon } from "./icons";

export type BadgeTone = "neutral" | "brand" | "success" | "warning" | "danger" | "info";

export function Badge({ tone = "neutral", className, children }: { tone?: BadgeTone; className?: string; children: ReactNode }) {
  const icon = tone === "success" ? <CheckIcon /> : tone === "danger" || tone === "warning" ? <AlertIcon /> : null;
  return (
    <span className={cx("nw-badge", tone !== "neutral" && `nw-badge--${tone}`, className)}>
      {icon}
      {children}
    </span>
  );
}
