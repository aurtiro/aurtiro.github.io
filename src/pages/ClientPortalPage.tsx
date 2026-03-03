import { useState, type FormEvent } from 'react';
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
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const result = await submitHiringRequest(formData);
      setStatusMessage(result.message);
      if (result.ok) {
        setFormData(initialState);
      }
    } catch {
      setStatusMessage('Submission failed. Please retry or use the fallback form on the contact page.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="mx-auto max-w-7xl px-4 pb-20 pt-12 md:px-8 md:pt-16">
      <section>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">Client Portal</p>
        <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
          Submit hiring requests and role context.
        </h1>
        <p className="mt-4 max-w-3xl text-slate-600">
          This workflow is designed for API-backed intake, interviewer tooling, and pipeline tracking as the Aurtiro platform expands.
        </p>
        <div className="mt-4 inline-flex rounded-md border border-shell bg-slate-50 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-600">
          API mode: {platformConfig.isApiConfigured ? 'Connected' : 'Local fallback'}
        </div>
      </section>

      <section className="mt-10 rounded-xl border border-shell bg-white p-6 shadow-panel">
        <form className="grid gap-4" onSubmit={handleSubmit}>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-1 text-sm text-slate-700">
              Company name
              <input
                required
                value={formData.companyName}
                onChange={(event) => setFormData((prev) => ({ ...prev, companyName: event.target.value }))}
                className="rounded-md border border-shell px-3 py-2"
              />
            </label>

            <label className="grid gap-1 text-sm text-slate-700">
              Hiring contact
              <input
                required
                value={formData.hiringContact}
                onChange={(event) =>
                  setFormData((prev) => ({ ...prev, hiringContact: event.target.value }))
                }
                className="rounded-md border border-shell px-3 py-2"
              />
            </label>
          </div>

          <label className="grid gap-1 text-sm text-slate-700">
            Contact email
            <input
              required
              type="email"
              value={formData.contactEmail}
              onChange={(event) =>
                setFormData((prev) => ({ ...prev, contactEmail: event.target.value }))
              }
              className="rounded-md border border-shell px-3 py-2"
            />
          </label>

          <label className="grid gap-1 text-sm text-slate-700">
            Priority role title
            <input
              required
              value={formData.roleTitle}
              onChange={(event) => setFormData((prev) => ({ ...prev, roleTitle: event.target.value }))}
              className="rounded-md border border-shell px-3 py-2"
            />
          </label>

          <label className="grid gap-1 text-sm text-slate-700">
            Headcount plan (next 6-12 months)
            <input
              required
              value={formData.headcountPlan}
              onChange={(event) =>
                setFormData((prev) => ({ ...prev, headcountPlan: event.target.value }))
              }
              className="rounded-md border border-shell px-3 py-2"
            />
          </label>

          <label className="grid gap-1 text-sm text-slate-700">
            Additional notes
            <textarea
              rows={5}
              value={formData.notes}
              onChange={(event) => setFormData((prev) => ({ ...prev, notes: event.target.value }))}
              className="rounded-md border border-shell px-3 py-2"
            />
          </label>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-md bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Hiring Request'}
            </button>
            <AppLink
              to="/contact"
              className="rounded-md border border-shell px-5 py-2.5 text-sm font-semibold text-ink"
            >
              Open Contact Options
            </AppLink>
          </div>

          {statusMessage && <p className="text-sm text-slate-600">{statusMessage}</p>}
        </form>
      </section>
    </main>
  );
}
