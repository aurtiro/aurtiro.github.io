import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { AppLink } from '../routing/AppLink';
import { loginUser, platformConfig } from '../services/platformApi';
export function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState(null);
    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setStatusMessage(null);
        try {
            const result = await loginUser({ email, password });
            setStatusMessage(result.message);
        }
        catch {
            setStatusMessage('Login failed. Please verify auth API configuration.');
        }
        finally {
            setIsSubmitting(false);
        }
    };
    return (_jsxs("main", { className: "mx-auto max-w-7xl px-4 pb-20 pt-12 md:px-8 md:pt-16", children: [_jsxs("section", { children: [_jsx("p", { className: "font-mono text-xs uppercase tracking-[0.18em] text-slate-500", children: "Portal Login" }), _jsx("h1", { className: "mt-3 font-display text-4xl font-semibold leading-tight text-ink md:text-5xl", children: "Secure access for candidates and hiring teams." }), _jsx("p", { className: "mt-4 max-w-3xl text-slate-600", children: "Auth endpoints are scaffolded and ready to connect to your backend identity provider." }), _jsxs("div", { className: "mt-4 inline-flex rounded-md border border-shell bg-slate-50 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-600", children: ["API mode: ", platformConfig.isApiConfigured ? 'Connected' : 'Auth backend not configured'] })] }), _jsxs("section", { className: "mt-10 max-w-xl rounded-xl border border-shell bg-white p-6 shadow-panel", children: [_jsxs("form", { className: "grid gap-4", onSubmit: handleSubmit, children: [_jsxs("label", { className: "grid gap-1 text-sm text-slate-700", children: ["Email", _jsx("input", { required: true, type: "email", value: email, onChange: (event) => setEmail(event.target.value), className: "rounded-md border border-shell px-3 py-2" })] }), _jsxs("label", { className: "grid gap-1 text-sm text-slate-700", children: ["Password", _jsx("input", { required: true, type: "password", value: password, onChange: (event) => setPassword(event.target.value), className: "rounded-md border border-shell px-3 py-2" })] }), _jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [_jsx("button", { type: "submit", disabled: isSubmitting, className: "rounded-md bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70", children: isSubmitting ? 'Signing in...' : 'Sign In' }), _jsx("button", { type: "button", className: "rounded-md border border-shell px-5 py-2.5 text-sm font-semibold text-ink", children: "Continue with SSO (Planned)" })] }), statusMessage && _jsx("p", { className: "text-sm text-slate-600", children: statusMessage })] }), _jsxs("div", { className: "mt-6 border-t border-shell pt-4", children: [_jsx("p", { className: "text-sm text-slate-600", children: "Need intake access now? Use direct portals while auth integration is finalized." }), _jsxs("div", { className: "mt-3 flex flex-wrap gap-3", children: [_jsx(AppLink, { to: "/portal/candidate", className: "rounded-md border border-shell bg-slate-50 px-4 py-2 text-sm font-semibold text-ink", children: "Candidate Portal" }), _jsx(AppLink, { to: "/portal/client", className: "rounded-md border border-shell bg-slate-50 px-4 py-2 text-sm font-semibold text-ink", children: "Client Portal" })] })] })] })] }));
}
