export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 text-sm text-zinc-500 sm:flex-row sm:px-6">
        <span className="font-bold text-zinc-400">QA Automation Elite</span>
        <p className="order-last sm:order-none">
          © {new Date().getFullYear()} — Todos os direitos reservados.
        </p>
        <nav className="flex flex-wrap justify-center gap-4">
          <a href="https://linkedin.com" className="hover:text-accent-purple">
            LinkedIn
          </a>
          <a href="https://github.com" className="hover:text-accent-purple">
            GitHub
          </a>
          <a href="mailto:contato@exemplo.com" className="hover:text-accent-purple">
            Email
          </a>
          <a href="/cv.pdf" className="hover:text-accent-purple">
            Currículo
          </a>
        </nav>
      </div>
    </footer>
  );
}
