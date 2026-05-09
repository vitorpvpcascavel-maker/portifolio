import { CertificationCard } from "./CertificationCard";

const items = [
  { name: "CTFL — Certified Tester Foundation Level", issuer: "ISTQB • 2023" },
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services • 2022" },
  { name: "Bacharel em Ciência da Computação", issuer: "Universidade XYZ • 2017" },
];

export function Certifications() {
  return (
    <section className="border-t border-white/5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Certificações & Educação
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-zinc-400">
          Credenciais e formação que sustentam a prática técnica.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {items.map((c, i) => (
            <CertificationCard key={c.name} {...c} delay={0.08 * i} />
          ))}
        </div>
      </div>
    </section>
  );
}
