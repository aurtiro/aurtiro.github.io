import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AppLink } from '../routing/AppLink';
export function NotFoundPage() {
    return (_jsx("main", { className: "mx-auto max-w-7xl px-4 pb-24 pt-20 md:px-8", children: _jsxs("section", { className: "rounded-2xl border border-shell bg-white p-8 shadow-panel", children: [_jsx("p", { className: "font-mono text-xs uppercase tracking-[0.18em] text-slate-500", children: "404" }), _jsx("h1", { className: "mt-3 font-display text-4xl font-semibold text-ink", children: "Page not found" }), _jsx("p", { className: "mt-4 max-w-2xl text-slate-600", children: "The requested route does not exist. Use the homepage to navigate to available services, portals, and subpages." }), _jsx(AppLink, { to: "/", className: "mt-6 inline-flex rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800", children: "Return to Home" })] }) }));
}
