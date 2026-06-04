"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "@/app/contact/actions";
import { cn } from "@/lib/utils";

const initial: ContactState = { ok: false };

const projectTypes = [
  "New custom pool",
  "Spa",
  "Water feature",
  "Renovation",
  "Outdoor living",
  "Not sure yet",
];

const fieldBase =
  "w-full rounded-xl border border-ocean/20 bg-white/70 px-4 py-3 text-ink placeholder:text-muted/60 transition-colors focus:border-teal focus:outline-none focus:ring-2 focus:ring-aqua/40";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initial);

  if (state.ok) {
    return (
      <div className="rounded-2xl border border-teal/30 bg-foam/70 p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal/15 text-teal">
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="font-display mt-4 text-2xl font-medium text-abyss">Message sent</h3>
        <p className="mt-2 text-muted">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5" noValidate>
      {/* Honeypot */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="name" error={state.fieldErrors?.name}>
          <input id="name" name="name" type="text" autoComplete="name" required className={fieldBase} placeholder="Your name" />
        </Field>
        <Field label="Email" htmlFor="email" error={state.fieldErrors?.email}>
          <input id="email" name="email" type="email" autoComplete="email" required className={fieldBase} placeholder="you@email.com" />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone" htmlFor="phone" optional>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={fieldBase} placeholder="Optional" />
        </Field>
        <Field label="Project type" htmlFor="projectType" optional>
          <select id="projectType" name="projectType" defaultValue="" className={cn(fieldBase, "appearance-none")}>
            <option value="" disabled>
              Select one
            </option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="About your site" htmlFor="message" error={state.fieldErrors?.message}>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={cn(fieldBase, "resize-y")}
          placeholder="Tell us about the yard, the look you are after, and roughly when you would like to start."
        />
      </Field>

      {state.message && !state.ok && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          {state.message}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4 pt-1">
        <button
          type="submit"
          disabled={pending}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-abyss px-7 py-3 text-sm font-medium text-foam transition-all duration-300 hover:bg-deep hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-60"
        >
          {pending ? "Sending..." : "Send message"}
        </button>
        <p className="text-xs text-muted">We reply to every note, usually within a day or two.</p>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 flex items-center justify-between text-sm font-medium text-abyss">
        <span>{label}</span>
        {optional && <span className="text-xs font-normal text-muted">Optional</span>}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs text-red-600">{error}</p>}
    </div>
  );
}
