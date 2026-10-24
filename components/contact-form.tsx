"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "@/app/actions/contact";
import { Badge } from "@/components/ds/badge";
import { Button } from "@/components/ds/button";
import { AlertIcon } from "@/components/ds/icons";
import { TextField } from "@/components/ds/text-field";
import type { Content } from "@/content/types";
import type { FieldError } from "@/lib/validate-contact";

const idle: ContactState = { status: "idle" };

export function ContactForm({ c }: { c: Content }) {
  const [state, action, pending] = useActionState(submitContact, idle);
  const t = c.contact;

  if (state.status === "sent") {
    return (
      <div className="n-form">
        <div className="n-ok" role="status">
          <Badge tone="success">{t.sent.badge}</Badge>
          <h3 className="n-h3">{t.sent.title}</h3>
          <p>{t.sent.body}</p>
        </div>
      </div>
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
        <TextField id="biz-name" name="name" label={t.fields.name.label} dir={c.dir} defaultValue={values?.name} error={message(fields.name)} autoComplete="organization" />
        <TextField id="biz-phone" name="phone" type="tel" label={t.fields.phone.label} hint={t.fields.phone.hint} dir="ltr" defaultValue={values?.phone} error={message(fields.phone)} autoComplete="tel" />
        <TextField id="biz-kind" name="kind" label={t.fields.kind.label} hint={t.fields.kind.hint} dir={c.dir} defaultValue={values?.kind} error={message(fields.kind)} />
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
