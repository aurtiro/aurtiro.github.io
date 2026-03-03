import { services } from '../data/siteContent';
import { AppLink } from '../routing/AppLink';

export function ServicesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 pb-20 pt-12 md:px-8 md:pt-16">
      <section>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">Services</p>
        <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
          Service architecture built for hiring outcomes.
        </h1>
        <p className="mt-4 max-w-3xl text-slate-600">
          Aurtiro provides two core engagement models. Each is designed to balance hiring velocity,
          quality signal, and stakeholder alignment for technical organizations.
        </p>
      </section>

      <section className="mt-10 grid gap-6">
        {services.map((service) => (
          <article
            key={service.id}
            id={service.id}
            className="scroll-mt-28 rounded-xl border border-shell bg-white p-6 shadow-panel"
          >
            <h2 className="font-display text-2xl font-semibold text-ink">{service.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{service.shortSummary}</p>
            <p className="mt-3 text-sm leading-6 text-slate-600">{service.fullDescription}</p>
            <ul className="mt-4 grid gap-2 text-sm text-slate-700">
              {service.deliverables.map((deliverable) => (
                <li key={deliverable} className="rounded-md border border-shell bg-slate-50 px-3 py-2">
                  {deliverable}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section id="hiring-managers" className="mt-10 scroll-mt-28 rounded-xl border border-shell bg-white p-6">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-slate-500">For Hiring Managers</p>
        <h2 className="mt-2 font-display text-2xl font-semibold">Client workspace tooling</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Coming soon: interviewer selection, training, scorecard consistency checks, pipeline tracking,
          and stakeholder-level reporting views.
        </p>
        <AppLink
          to="/portal/client"
          className="mt-5 inline-flex rounded-md border border-shell bg-slate-50 px-4 py-2.5 text-sm font-semibold text-ink transition hover:border-slate-300 hover:bg-white"
        >
          Open Client Portal
        </AppLink>
      </section>

      <section id="job-seekers" className="mt-6 scroll-mt-28 rounded-xl border border-shell bg-white p-6">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-slate-500">For Job Seekers</p>
        <h2 className="mt-2 font-display text-2xl font-semibold">Candidate journey tooling</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Candidate portal workflows are being expanded for profile management, resume storage,
          role matching preferences, and interview process tracking.
        </p>
        <AppLink
          to="/portal/candidate"
          className="mt-5 inline-flex rounded-md border border-shell bg-slate-50 px-4 py-2.5 text-sm font-semibold text-ink transition hover:border-slate-300 hover:bg-white"
        >
          Open Candidate Portal
        </AppLink>
      </section>
    </main>
  );
}
