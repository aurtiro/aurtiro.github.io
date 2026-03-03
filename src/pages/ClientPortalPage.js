import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { AppLink } from '../routing/AppLink';
import { platformConfig, submitHiringRequest } from '../services/platformApi';
const initialState = {
    companyName: '',
    hiringContact: '',
    contactEmail: '',
    roleTitle: '',
    headcountPlan: '',
    notes: ''
};
export function ClientPortalPage() {
    const [formData, setFormData] = useState(initialState);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState(null);
    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setStatusMessage(null);
        try {
            const result = await submitHiringRequest(formData);
            setStatusMessage(result.message);
            if (result.ok) {
                setFormData(initialState);
            }
        }
        catch {
            setStatusMessage('Submission failed. Please retry or use the fallback form on the contact page.');
        }
        finally {
            setIsSubmitting(false);
        }
    };
    return (_jsxs("main", { className: "mx-auto max-w-7xl px-4 pb-20 pt-12 md:px-8 md:pt-16", children: [_jsxs("section", { children: [_jsx("p", { className: "font-mono text-xs uppercase tracking-[0.18em] text-slate-500", children: "Client Portal" }), _jsx("h1", { className: "mt-3 font-display text-4xl font-semibold leading-tight text-ink md:text-5xl", children: "Submit hiring requests and role context." }), _jsx("p", { className: "mt-4 max-w-3xl text-slate-600", children: "This workflow is designed for API-backed intake, interviewer tooling, and pipeline tracking as the Aurtiro platform expands." }), _jsxs("div", { className: "mt-4 inline-flex rounded-md border border-shell bg-slate-50 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-600", children: ["API mode: ", platformConfig.isApiConfigured ? 'Connected' : 'Local fallback'] })] }), _jsx("section", { className: "mt-10 rounded-xl border border-shell bg-white p-6 shadow-panel", children: _jsxs("form", { className: "grid gap-4", onSubmit: handleSubmit, children: [_jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [_jsxs("label", { className: "grid gap-1 text-sm text-slate-700", children: ["Company name", _jsx("input", { required: true, value: formData.companyName, onChange: (event) => setFormData((prev) => ({ ...prev, companyName: event.target.value })), className: "rounded-md border border-shell px-3 py-2" })] }), _jsxs("label", { className: "grid gap-1 text-sm text-slate-700", children: ["Hiring contact", _jsx("input", { required: true, value: formData.hiringContact, onChange: (event) => setFormData((prev) => ({ ...prev, hiringContact: event.target.value })), className: "rounded-md border border-shell px-3 py-2" })] })] }), _jsxs("label", { className: "grid gap-1 text-sm text-slate-700", children: ["Contact email", _jsx("input", { required: true, type: "email", value: formData.contactEmail, onChange: (event) => setFormData((prev) => ({ ...prev, contactEmail: event.target.value })), className: "rounded-md border border-shell px-3 py-2" })] }), _jsxs("label", { className: "grid gap-1 text-sm text-slate-700", children: ["Priority role title", _jsx("input", { required: true, value: formData.roleTitle, onChange: (event) => setFormData((prev) => ({ ...prev, roleTitle: event.target.value })), className: "rounded-md border border-shell px-3 py-2" })] }), _jsxs("label", { className: "grid gap-1 text-sm text-slate-700", children: ["Headcount plan (next 6-12 months)", _jsx("input", { required: true, value: formData.headcountPlan, onChange: (event) => setFormData((prev) => ({ ...prev, headcountPlan: event.target.value })), className: "rounded-md border border-shell px-3 py-2" })] }), _jsxs("label", { className: "grid gap-1 text-sm text-slate-700", children: ["Additional notes", _jsx("textarea", { rows: 5, value: formData.notes, onChange: (event) => setFormData((prev) => ({ ...prev, notes: event.target.value })), className: "rounded-md border border-shell px-3 py-2" })] }), _jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [_jsx("button", { type: "submit", disabled: isSubmitting, className: "rounded-md bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70", children: isSubmitting ? 'Submitting...' : 'Submit Hiring Request' }), _jsx(AppLink, { to: "/contact", className: "rounded-md border border-shell px-5 py-2.5 text-sm font-semibold text-ink", children: "Open Contact Options" })] }), statusMessage && _jsx("p", { className: "text-sm text-slate-600", children: statusMessage })] }) })] }));
}
