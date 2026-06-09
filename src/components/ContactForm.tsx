import { type FormEvent, useState } from "react";

import { useI18n } from "../i18n/useI18n";
import { whatsAppContactUrl } from "../site";

const inputClass =
  "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-accent-purple/40 focus:ring-2 focus:ring-accent-purple/30 dark:border-white/10 dark:bg-[#0a0612]/80 dark:text-white dark:placeholder:text-zinc-600";

export function ContactForm() {
  const { copy } = useI18n();
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("nome") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("mensagem") ?? "").trim();

    if (!name || !email || !message) {
      return;
    }

    const url = whatsAppContactUrl(copy.contact.whatsappMessage, {
      name,
      email,
      message,
    });
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
    form.reset();
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4" noValidate>
      <div>
        <label htmlFor="nome" className="sr-only">
          {copy.contact.formName}
        </label>
        <input
          id="nome"
          name="nome"
          type="text"
          required
          placeholder={copy.contact.formName}
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="email" className="sr-only">
          {copy.contact.formEmail}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder={copy.contact.formEmail}
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="mensagem" className="sr-only">
          {copy.contact.formMessage}
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          required
          rows={5}
          placeholder={copy.contact.formMessage}
          className={`${inputClass} resize-none`}
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-accent-purple py-3 text-sm font-semibold text-[#0f0a18] transition hover:bg-violet-200"
      >
        {copy.contact.formSubmit}
      </button>
      {sent && (
        <p className="text-center text-sm text-emerald-500 dark:text-emerald-400" role="status">
          {copy.contact.formThanks}
        </p>
      )}
    </form>
  );
}
