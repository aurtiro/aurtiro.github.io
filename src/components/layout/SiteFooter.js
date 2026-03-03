import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AppLink } from '../../routing/AppLink';
export function SiteFooter() {
    return (_jsx("footer", { className: "border-t border-shell bg-white py-10", children: _jsxs("div", { className: "mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-4 text-sm text-slate-500 md:flex-row md:items-center md:px-8", children: [_jsx("p", { className: "font-mono text-xs uppercase tracking-[0.18em]", children: "Aurtiro \u00A9 2026" }), _jsxs("div", { className: "flex flex-wrap items-center gap-4", children: [_jsx(AppLink, { to: "/services", className: "hover:text-ink", children: "Services" }), _jsx(AppLink, { to: "/testimonials", className: "hover:text-ink", children: "Testimonials" }), _jsx(AppLink, { to: "/portal/candidate", className: "hover:text-ink", children: "Resume Portal" }), _jsx("a", { className: "hover:text-ink", href: "https://www.aurtiro.com", children: "www.aurtiro.com" })] })] }) }));
}
