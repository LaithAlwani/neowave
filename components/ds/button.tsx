import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cx } from "@/lib/cx";

export type ButtonVariant = "primary" | "secondary" | "ghost";

export interface ButtonStyleProps {
  variant?: ButtonVariant;
  size?: "md" | "lg";
  block?: boolean;
  className?: string;
}

/** Class list for a button-styled element (the design uses it on <a> CTAs too). */
export function buttonClassName({ variant = "primary", size, block, className }: ButtonStyleProps): string {
  return cx("nw-btn", `nw-btn--${variant}`, size === "lg" && "nw-btn--lg", block && "nw-btn--block", className);
}

type ButtonProps = ButtonStyleProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & { children: ReactNode };

export function Button({ variant, size, block, className, type = "button", children, ...rest }: ButtonProps) {
  return (
    <button type={type} className={buttonClassName({ variant, size, block, className })} {...rest}>
      {children}
    </button>
  );
}
