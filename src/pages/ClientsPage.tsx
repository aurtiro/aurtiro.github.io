import { clientLogos, featuredClients } from '../data/siteContent';

export function ClientsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 pb-20 pt-12 md:px-8 md:pt-16">
      <section>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">Past Clients</p>
        <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
          Brands and teams served across startup to enterprise scale.
        </h1>
        <p className="mt-4 max-w-3xl text-slate-600">
          Aurtiro has supported hiring across product engineering, infrastructure, data, and platform
          organizations in both high-growth and global environments.
        </p>
      </section>

      <section className="mt-10">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-slate-500">High Recognition Set</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {featuredClients.map((client) => (
            <span
              key={client}
              className="inline-flex items-center rounded-full border border-shell bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.06em] text-slate-600"
            >
              {client}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-2xl border border-shell bg-white p-6 shadow-panel">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-slate-500">Full Client List</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {clientLogos.map((client) => (
            <div key={client} className="rounded-md border border-shell bg-slate-50 px-3 py-2 text-sm text-slate-700">
              {client}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
