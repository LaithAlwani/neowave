import { cx } from "@/lib/cx";
import { AlertIcon } from "./icons";

export interface TextAreaProps {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  hint?: string;
  error?: string;
  defaultValue?: string;
  rows?: number;
  maxLength?: number;
  className?: string;
}

/** Multi-line companion to TextField, styled by the same nw-field classes. */
export function TextArea({ id, name, label, placeholder, hint, error, defaultValue, rows = 4, maxLength, className }: TextAreaProps) {
  const describedBy = error ? `${id}-err` : hint ? `${id}-hint` : undefined;
  return (
    <div className={cx("nw-field", className)}>
      <label className="nw-field__label" htmlFor={id}>
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        className="nw-field__input"
        placeholder={placeholder}
        defaultValue={defaultValue}
        rows={rows}
        maxLength={maxLength}
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
