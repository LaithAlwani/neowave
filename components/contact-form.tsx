"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "@/app/actions/contact";
import { Badge } from "@/components/ds/badge";
import { Button } from "@/components/ds/button";
import { AlertIcon } from "@/components/ds/icons";
import { TextArea } from "@/components/ds/text-area";
import { TextField } from "@/components/ds/text-field";
import { Toast } from "@/components/ds/toast";
import type { Content } from "@/content/types";
import { contactInputFromFormData, MAX_MESSAGE_LENGTH, type FieldError } from "@/lib/validate-contact";

const idle: ContactState = { status: "idle" };

/**
 * The Server Action never throws, but the call itself can (offline, server unreachable,
 * stale deployment). Catch that here so the visitor sees the generic error with their
 * values intact instead of the page falling over to an error boundary.
 */
async function safeSubmit(prev: ContactState, formData: FormData): Promise<ContactState> {
  try {
    return await submitContact(prev, formData);
  } catch (err) {
    console.error("[contact] The request did not reach the server:", err);
    return {
      status: "error",
      attempt: (prev.status === "error" ? prev.attempt : 0) + 1,
      form: "generic",
      values: contactInputFromFormData(formData),
    };
  }
}

export function ContactForm({ c }: { c: Content }) {
  const [state, action, pending] = useActionState(safeSubmit, idle);
  const t = c.contact;

  if (state.status === "sent") {
    return (
      <>
        <div className="n-form">
          <div className="n-ok" role="status">
            <Badge tone="success">{t.sent.badge}</Badge>
            <h3 className="n-h3">{t.sent.title}</h3>
            <p>{t.sent.body}</p>
          </div>
        </div>
        {state.notice ? (
          <Toast tone="success" dismissLabel={t.toast.dismiss}>
            {t.toast[state.notice]}
          </Toast>
        ) : null}
      </>
    );
  }

  const error = state.status === "error" ? state : null;
  const fields = error?.fields ?? {};
  const values = error?.values;
  const message = (key?: FieldError) => (key ? t.errors[key] : undefined);

  return (
    <form className="n-form" action={action} noValidate>
      <input type="hidden" name="locale" value={c.locale} />
      {/* Remount the fields after each failed attempt so the typed values survive the form reset. */}
      <div key={error?.attempt ?? 0} style={{ display: "contents" }}>
        <TextField id="c-full-name" name="fullName" label={t.fields.fullName.label} defaultValue={values?.fullName} error={message(fields.fullName)} autoComplete="name" />
        <TextField id="c-email" name="email" type="email" label={t.fields.email.label} hint={t.fields.email.hint} dir="ltr" defaultValue={values?.email} error={message(fields.email)} autoComplete="email" />
        <TextField id="biz-phone" name="phone" type="tel" label={t.fields.phone.label} hint={t.fields.phone.hint} dir="ltr" defaultValue={values?.phone} error={message(fields.phone)} autoComplete="tel" />
        <TextArea id="c-message" name="message" label={t.fields.message.label} placeholder={t.fields.message.placeholder} defaultValue={values?.message} error={message(fields.message)} maxLength={MAX_MESSAGE_LENGTH} />
      </div>
      {error?.form ? (
        <p className="n-form-err" role="alert">
          <AlertIcon />
          {t.errors.generic}
        </p>
      ) : null}
      <Button type="submit" variant="primary" size="lg" block disabled={pending}>
        {pending ? t.sending : t.submit}
      </Button>
      <p className="n-note">{t.note}</p>
    </form>
  );
}
