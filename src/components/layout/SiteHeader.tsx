import { useEffect, useRef, useState } from 'react';
import { navGroups } from '../../data/navigation';
import { AppLink } from '../../routing/AppLink';
import { useAppRouter } from '../../routing/router';

export function SiteHeader() {
  const { path } = useAppRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const closeTimer = useRef<number | null>(null);

  const clearCloseTimer = () => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const closeAllMenus = () => {
    clearCloseTimer();
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  useEffect(() => {
    closeAllMenus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);

  useEffect(() => () => clearCloseTimer(), []);

  const openDropdown = (title: string) => {
    clearCloseTimer();
    setActiveDropdown(title);
  };

  const scheduleClose = (title: string) => {
    clearCloseTimer();
    closeTimer.current = window.setTimeout(() => {
      setActiveDropdown((prev) => (prev === title ? null : prev));
    }, 140);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-shell/80 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <AppLink to="/" className="font-display text-lg font-semibold tracking-wide text-ink">
          AURTIRO
        </AppLink>

        <button
          className="inline-flex rounded-md border border-shell px-3 py-2 font-mono text-xs font-semibold uppercase tracking-wide text-slate-600 md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          Menu
        </button>

        <div className="hidden items-center gap-3 md:flex">
          {navGroups.map((group) => (
            <div
              key={group.title}
              className="relative"
              onMouseEnter={() => openDropdown(group.title)}
              onMouseLeave={() => scheduleClose(group.title)}
            >
              <button
                className="rounded-md px-3 py-2 font-mono text-xs font-medium uppercase tracking-[0.14em] text-slate-600 transition hover:bg-slate-100 hover:text-ink"
                onClick={() =>
                  setActiveDropdown((prev) => (prev === group.title ? null : group.title))
                }
              >
                {group.title}
              </button>

              {activeDropdown === group.title && (
                <div
                  className="absolute right-0 top-full z-30 w-72 rounded-xl border border-shell bg-white p-3 shadow-panel"
                  onMouseEnter={clearCloseTimer}
                  onMouseLeave={() => scheduleClose(group.title)}
                >
                  {group.items.map((item) => (
                    <AppLink
                      key={item.to}
                      to={item.to}
                      className="block rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-ink"
                      onClick={closeAllMenus}
                    >
                      {item.label}
                    </AppLink>
                  ))}
                </div>
              )}
            </div>
          ))}

          <AppLink
            to="/portal/candidate"
            className="rounded-md border border-shell bg-slate-50 px-3 py-2 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-ink transition hover:border-slate-300 hover:bg-white"
          >
            Resume Portal
          </AppLink>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-shell bg-white px-4 py-4 md:hidden">
          <div className="grid gap-3">
            {navGroups.map((group) => (
              <div key={group.title}>
                <p className="mb-1 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500">
                  {group.title}
                </p>
                <div className="grid">
                  {group.items.map((item) => (
                    <AppLink
                      key={item.to}
                      to={item.to}
                      className="rounded-md px-1 py-1.5 text-sm text-slate-700"
                      onClick={closeAllMenus}
                    >
                      {item.label}
                    </AppLink>
                  ))}
                </div>
              </div>
            ))}
            <AppLink
              to="/portal/candidate"
              className="mt-1 rounded-md border border-shell px-2 py-2 text-center text-sm font-semibold text-ink"
              onClick={closeAllMenus}
            >
              Open Resume Portal
            </AppLink>
          </div>
        </div>
      )}
    </header>
  );
}
