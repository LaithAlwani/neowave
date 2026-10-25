"use client";

import { useEffect, useState, type ReactNode } from "react";
import { cx } from "@/lib/cx";
import { AlertIcon, CheckIcon } from "./icons";

export type ToastTone = "success" | "danger" | "info";

/** A single transient notice pinned to the bottom of the viewport. Auto-dismisses after `duration` ms (0 keeps it). */
export function Toast({
  tone = "info",
  duration = 8000,
  dismissLabel,
  children,
}: {
  tone?: ToastTone;
  duration?: number;
  dismissLabel: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (!duration) return;
    const timer = setTimeout(() => setOpen(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!open) return null;

  return (
    <div className={cx("nw-toast", `nw-toast--${tone}`)} role="status" aria-live="polite">
      {tone === "success" ? <CheckIcon /> : <AlertIcon />}
      <p className="nw-toast__text">{children}</p>
      <button type="button" className="nw-toast__close" aria-label={dismissLabel} onClick={() => setOpen(false)}>
        ×
      </button>
    </div>
  );
}
