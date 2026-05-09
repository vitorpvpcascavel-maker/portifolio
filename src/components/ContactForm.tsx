import { type FormEvent, useState } from "react";

import { useI18n } from "../i18n/useI18n";

export function ContactForm() {
  const { copy } = useI18n();
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-4"
      noValidate
    >
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
          className="w-full rounded-lg border border-white/10 bg-night/80 px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none ring-accent-purple/0 transition focus:border-accent-purple/40 focus:ring-2 focus:ring-accent-purple/30"
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
          className="w-full rounded-lg border border-white/10 bg-night/80 px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none transition focus:border-accent-purple/40 focus:ring-2 focus:ring-accent-purple/30"
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
          className="w-full resize-none rounded-lg border border-white/10 bg-night/80 px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none transition focus:border-accent-purple/40 focus:ring-2 focus:ring-accent-purple/30"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-accent-purple py-3 text-sm font-semibold text-night transition hover:bg-violet-200"
      >
        {copy.contact.formSubmit}
      </button>
      {sent && (
        <p className="text-center text-sm text-emerald-400" role="status">
          {copy.contact.formThanks}
        </p>
      )}
    </form>
  );
}
