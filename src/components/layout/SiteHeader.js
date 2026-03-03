import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import { navGroups } from '../../data/navigation';
import { AppLink } from '../../routing/AppLink';
import { useAppRouter } from '../../routing/router';
export function SiteHeader() {
    const { path } = useAppRouter();
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const closeTimer = useRef(null);
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
    const openDropdown = (title) => {
        clearCloseTimer();
        setActiveDropdown(title);
    };
    const scheduleClose = (title) => {
        clearCloseTimer();
        closeTimer.current = window.setTimeout(() => {
            setActiveDropdown((prev) => (prev === title ? null : prev));
        }, 140);
    };
    return (_jsxs("header", { className: "sticky top-0 z-40 border-b border-shell/80 bg-white/90 backdrop-blur-xl", children: [_jsxs("nav", { className: "mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8", children: [_jsx(AppLink, { to: "/", className: "font-display text-lg font-semibold tracking-wide text-ink", children: "AURTIRO" }), _jsx("button", { className: "inline-flex rounded-md border border-shell px-3 py-2 font-mono text-xs font-semibold uppercase tracking-wide text-slate-600 md:hidden", onClick: () => setMenuOpen((prev) => !prev), "aria-expanded": menuOpen, "aria-label": "Toggle menu", children: "Menu" }), _jsxs("div", { className: "hidden items-center gap-3 md:flex", children: [navGroups.map((group) => (_jsxs("div", { className: "relative", onMouseEnter: () => openDropdown(group.title), onMouseLeave: () => scheduleClose(group.title), children: [_jsx("button", { className: "rounded-md px-3 py-2 font-mono text-xs font-medium uppercase tracking-[0.14em] text-slate-600 transition hover:bg-slate-100 hover:text-ink", onClick: () => setActiveDropdown((prev) => (prev === group.title ? null : group.title)), children: group.title }), activeDropdown === group.title && (_jsx("div", { className: "absolute right-0 top-full z-30 w-72 rounded-xl border border-shell bg-white p-3 shadow-panel", onMouseEnter: clearCloseTimer, onMouseLeave: () => scheduleClose(group.title), children: group.items.map((item) => (_jsx(AppLink, { to: item.to, className: "block rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-ink", onClick: closeAllMenus, children: item.label }, item.to))) }))] }, group.title))), _jsx(AppLink, { to: "/portal/candidate", className: "rounded-md border border-shell bg-slate-50 px-3 py-2 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-ink transition hover:border-slate-300 hover:bg-white", children: "Resume Portal" })] })] }), menuOpen && (_jsx("div", { className: "border-t border-shell bg-white px-4 py-4 md:hidden", children: _jsxs("div", { className: "grid gap-3", children: [navGroups.map((group) => (_jsxs("div", { children: [_jsx("p", { className: "mb-1 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500", children: group.title }), _jsx("div", { className: "grid", children: group.items.map((item) => (_jsx(AppLink, { to: item.to, className: "rounded-md px-1 py-1.5 text-sm text-slate-700", onClick: closeAllMenus, children: item.label }, item.to))) })] }, group.title))), _jsx(AppLink, { to: "/portal/candidate", className: "mt-1 rounded-md border border-shell px-2 py-2 text-center text-sm font-semibold text-ink", onClick: closeAllMenus, children: "Open Resume Portal" })] }) }))] }));
}
