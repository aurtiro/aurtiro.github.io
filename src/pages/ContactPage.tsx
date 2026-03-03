import { AppLink } from '../routing/AppLink';

const googleFormUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLScCwUkA9ebAhVieAVVernYUVQHrhYIUE8seNRd8YPttLmswmQ/viewform';

export function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 pb-20 pt-12 md:px-8 md:pt-16">
      <section>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">Contact</p>
        <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
          Connect through the right workflow.
        </h1>
        <p className="mt-4 max-w-3xl text-slate-600">
          The website now routes users into dedicated portal paths. Google Forms remains available as fallback intake while API integrations are finalized.
        </p>
      </section>

      <section className="mt-10 grid gap-5 md:grid-cols-2">
        <article className="rounded-xl border border-shell bg-white p-6 shadow-panel">
          <h2 className="font-display text-2xl font-semibold">For Hiring Teams</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Submit role context, headcount goals, and timeline through the client portal. This workflow is designed to map into CRM/ATS records.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <AppLink
              to="/portal/client"
              className="rounded-md bg-ink px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Open Client Portal
            </AppLink>
            <a
              href={googleFormUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-shell px-4 py-2.5 text-sm font-semibold text-ink transition hover:border-slate-300"
            >
              Google Form Fallback
            </a>
          </div>
        </article>

        <article className="rounded-xl border border-shell bg-white p-6 shadow-panel">
          <h2 className="font-display text-2xl font-semibold">For Job Seekers</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Submit resume and role preferences through the candidate portal. This flow is designed for future profile storage and matching.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <AppLink
              to="/portal/candidate"
              className="rounded-md bg-ink px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Open Candidate Portal
            </AppLink>
            <a
              href={googleFormUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-shell px-4 py-2.5 text-sm font-semibold text-ink transition hover:border-slate-300"
            >
              Google Form Fallback
            </a>
          </div>
        </article>
      </section>

      <section className="mt-6 rounded-xl border border-shell bg-white p-6">
        <h2 className="font-display text-2xl font-semibold">Account Access</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Login workflows are scaffolded for future role-based access and data-layer permissions.
        </p>
        <AppLink
          to="/auth/login"
          className="mt-4 inline-flex rounded-md border border-shell bg-slate-50 px-4 py-2.5 text-sm font-semibold text-ink transition hover:border-slate-300 hover:bg-white"
        >
          Open Login Page
        </AppLink>
      </section>
    </main>
  );
}
