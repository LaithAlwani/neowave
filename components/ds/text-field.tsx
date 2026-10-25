import type { HTMLInputTypeAttribute } from "react";
import { cx } from "@/lib/cx";
import { AlertIcon } from "./icons";

export interface TextFieldProps {
  id: string;
  name: string;
  label: string;
  type?: HTMLInputTypeAttribute;
  hint?: string;
  error?: string;
  /** Direction of the typed value only (e.g. "ltr" for phone numbers and emails); label and hint follow the page. */
  dir?: "rtl" | "ltr";
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  autoComplete?: string;
  className?: string;
}

export function TextField({ id, name, label, type = "text", hint, error, dir, defaultValue, placeholder, disabled, autoComplete, className }: TextFieldProps) {
  const describedBy = error ? `${id}-err` : hint ? `${id}-hint` : undefined;
  return (
    <div className={cx("nw-field", className)}>
      <label className="nw-field__label" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        dir={dir}
        className="nw-field__input"
        placeholder={placeholder}
        defaultValue={defaultValue}
        disabled={disabled}
        autoComplete={autoComplete}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={describedBy}
      />
      {error ? (
        <div id={`${id}-err`} className="nw-field__error" role="alert">
          <AlertIcon />
          {error}
        </div>
      ) : hint ? (
        <div id={`${id}-hint`} className="nw-field__hint">
          {hint}
        </div>
      ) : null}
    </div>
  );
}
