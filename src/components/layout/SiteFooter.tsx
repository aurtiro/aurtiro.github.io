import { AppLink } from '../../routing/AppLink';

export function SiteFooter() {
  return (
    <footer className="border-t border-shell bg-white py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-4 text-sm text-slate-500 md:flex-row md:items-center md:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.18em]">Aurtiro © 2026</p>
        <div className="flex flex-wrap items-center gap-4">
          <AppLink to="/services" className="hover:text-ink">
            Services
          </AppLink>
          <AppLink to="/testimonials" className="hover:text-ink">
            Testimonials
          </AppLink>
          <AppLink to="/portal/candidate" className="hover:text-ink">
            Resume Portal
          </AppLink>
          <a className="hover:text-ink" href="https://www.aurtiro.com">
            www.aurtiro.com
          </a>
        </div>
      </div>
    </footer>
  );
}
