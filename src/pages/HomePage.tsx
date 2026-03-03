import {
  clientLogos,
  clientTestimonial,
  featuredCandidateTestimonials,
  featuredClients,
  peerTestimonial,
  platformModules,
  services
} from '../data/siteContent';
import { AppLink } from '../routing/AppLink';
import { TestimonialSpotlight } from '../components/testimonials/TestimonialSpotlight';

export function HomePage() {
  const marqueeItems = [...clientLogos, ...clientLogos];

  return (
    <main id="home" className="mx-auto max-w-7xl px-4 pb-20 pt-12 md:px-8 md:pt-20">
      <section className="grid gap-8 md:grid-cols-[1.1fr,0.9fr]">
        <div className="animate-riseIn">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-shell bg-white px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-slate-600">
            Technical Staffing Platform for AI + Deployed Engineering Teams
          </p>
          <h1 className="font-display text-4xl font-semibold leading-tight text-ink md:text-6xl">
            Bespoke recruiting for teams that cannot miss on talent.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-600">
            Aurtiro combines high-context technical recruiting with software-style operating rigor so leaders can hire faster without lowering the bar.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <AppLink
              to="/services"
              className="rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Explore Services
            </AppLink>
            <AppLink
              to="/contact"
              className="rounded-md border border-shell bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:border-slate-300"
            >
              Contact Aurtiro
            </AppLink>
            <AppLink
              to="/portal/candidate"
              className="rounded-md border border-shell bg-slate-50 px-5 py-3 text-sm font-semibold text-ink transition hover:border-slate-300"
            >
              Resume Portal
            </AppLink>
          </div>
        </div>

        <TestimonialSpotlight testimonials={featuredCandidateTestimonials} viewAllTo="/testimonials" />
      </section>

      <section className="mt-16 rounded-2xl border border-shell bg-white py-7">
        <div className="mb-4 px-6">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">Past Clients Preview</p>
          <p className="mt-2 max-w-3xl text-sm text-slate-600">
            Trusted by startups and global brands for critical technical hiring across distributed systems, platform, and infrastructure teams.
          </p>
        </div>
        <div className="overflow-hidden whitespace-nowrap">
          <div className="animate-marquee font-mono text-xs uppercase tracking-[0.14em] text-slate-500">
            {marqueeItems.map((client, index) => (
              <span key={`${client}-${index}`} className="mx-6 inline-block">
                {client}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-5 px-6">
          <AppLink
            to="/clients"
            className="inline-flex rounded-md border border-shell bg-slate-50 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink transition hover:border-slate-300 hover:bg-white"
          >
            View Full Client List
          </AppLink>
        </div>
      </section>

      <section className="mt-20">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">Services Preview</p>
        <h2 className="mt-3 font-display text-3xl font-semibold">Two engagement models, one quality bar.</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          The landing page surfaces only highlights. Full execution detail, deliverables, and use cases are available on the dedicated services page.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.id} className="rounded-xl border border-shell bg-white p-6 shadow-panel">
              <h3 className="font-display text-xl font-semibold text-ink">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{service.shortSummary}</p>
            </article>
          ))}
        </div>

        <div className="mt-6">
          <AppLink
            to="/services"
            className="inline-flex rounded-md border border-shell bg-slate-50 px-4 py-2.5 text-sm font-semibold text-ink transition hover:border-slate-300 hover:bg-white"
          >
            Open Full Services Page
          </AppLink>
        </div>
      </section>

      <section className="mt-20">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">Social Proof Preview</p>
        <div className="mt-4 grid gap-5 md:grid-cols-2">
          <article className="rounded-xl border border-shell bg-white p-6 shadow-panel">
            <h3 className="font-display text-xl font-semibold">Client Spotlight</h3>
            <blockquote className="mt-3 border-l-2 border-shell pl-4 text-sm leading-6 text-slate-600">
              “{clientTestimonial.quote.slice(0, 300)}..."
            </blockquote>
            <p className="mt-3 text-sm font-semibold text-ink">
              {clientTestimonial.author}, {clientTestimonial.company}
            </p>
          </article>

          <article className="rounded-xl border border-shell bg-white p-6 shadow-panel">
            <h3 className="font-display text-xl font-semibold">Peer Spotlight</h3>
            <blockquote className="mt-3 border-l-2 border-shell pl-4 text-sm leading-6 text-slate-600">
              “{peerTestimonial.quote.slice(0, 300)}..."
            </blockquote>
            <p className="mt-3 text-sm font-semibold text-ink">
              {peerTestimonial.author}, {peerTestimonial.company}
            </p>
          </article>
        </div>

        <div className="mt-6">
          <AppLink
            to="/testimonials"
            className="inline-flex rounded-md border border-shell bg-slate-50 px-4 py-2.5 text-sm font-semibold text-ink transition hover:border-slate-300 hover:bg-white"
          >
            Read Full Testimonials
          </AppLink>
        </div>
      </section>

      <section className="mt-20">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">Application Roadmap</p>
        <h2 className="mt-3 font-display text-3xl font-semibold">Architected for a real platform, not only a brochure site.</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Aurtiro now ships as a multi-page application with a backend-ready integration layer for auth, portal submissions, and CRM/ATS sync.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {platformModules.map((module) => (
            <article key={module.title} className="rounded-xl border border-shell bg-white p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500">{module.status}</p>
              <h3 className="mt-2 font-display text-xl font-semibold">{module.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{module.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20 rounded-2xl border border-shell bg-white p-7 shadow-panel">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">Next Step</p>
        <h2 className="mt-3 font-display text-3xl font-semibold">Start from the right portal.</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Hiring teams and candidates each have dedicated subpages and workflows so intake data can map cleanly into future backend systems.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <AppLink
            to="/portal/client"
            className="rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Open Client Portal
          </AppLink>
          <AppLink
            to="/portal/candidate"
            className="rounded-md border border-shell bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:border-slate-300"
          >
            Open Candidate Portal
          </AppLink>
          <AppLink
            to="/auth/login"
            className="rounded-md border border-shell bg-slate-50 px-5 py-3 text-sm font-semibold text-ink transition hover:border-slate-300"
          >
            Portal Login
          </AppLink>
        </div>
      </section>

      <section className="mt-16">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">Recognized Client Set</p>
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
    </main>
  );
}
