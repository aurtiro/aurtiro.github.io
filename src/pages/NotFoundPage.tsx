import { AppLink } from '../routing/AppLink';

export function NotFoundPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 pb-24 pt-20 md:px-8">
      <section className="rounded-2xl border border-shell bg-white p-8 shadow-panel">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">404</p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-ink">Page not found</h1>
        <p className="mt-4 max-w-2xl text-slate-600">
          The requested route does not exist. Use the homepage to navigate to available services,
          portals, and subpages.
        </p>
        <AppLink
          to="/"
          className="mt-6 inline-flex rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Return to Home
        </AppLink>
      </section>
    </main>
  );
}
