"use client";

import { useState } from "react";
import { Send } from "lucide-react";

const inputClass =
  "mt-2 w-full rounded-lg border border-ink/12 bg-white px-4 py-3 text-base text-ink shadow-sm transition placeholder:text-ink/35 focus:border-clay focus:outline-none focus:ring-4 focus:ring-clay/15";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="rounded-lg border border-ink/10 bg-white/75 p-5 shadow-soft sm:p-8"
      data-integration="Connect this form to your preferred CRM, secure email provider or form endpoint."
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold text-ink">
          Name
          <input className={inputClass} name="name" type="text" autoComplete="name" required />
        </label>
        <label className="text-sm font-semibold text-ink">
          Email
          <input className={inputClass} name="email" type="email" autoComplete="email" required />
        </label>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold text-ink">
          Location
          <input className={inputClass} name="location" type="text" placeholder="Lisbon, Portugal, online..." />
        </label>
        <label className="text-sm font-semibold text-ink">
          Session preference
          <select className={inputClass} name="preference" defaultValue="">
            <option value="" disabled>
              Choose one
            </option>
            <option>In-person in Lisbon</option>
            <option>Online therapy</option>
            <option>Couples therapy</option>
            <option>Not sure yet</option>
          </select>
        </label>
      </div>

      <label className="mt-5 block text-sm font-semibold text-ink">
        What would you like support with?
        <textarea className={`${inputClass} min-h-36 resize-y`} name="message" required />
      </label>

      <label className="mt-5 flex gap-3 text-sm leading-6 text-ink/68">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 h-4 w-4 rounded border-ink/20 text-ink focus:ring-clay"
        />
        <span>
          I understand this form is for non-urgent enquiries and should not be used in a crisis.
        </span>
      </label>

      <button
        type="submit"
        className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-linen transition hover:bg-slateleaf"
      >
        <Send aria-hidden="true" className="h-4 w-4" />
        Send enquiry
      </button>

      {submitted ? (
        <p className="mt-4 rounded-lg bg-sand px-4 py-3 text-sm leading-6 text-ink/75" role="status">
          Thank you. The form is ready for integration; once connected, enquiries can be sent securely.
        </p>
      ) : null}
    </form>
  );
}
