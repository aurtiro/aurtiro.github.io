import { useState, type FormEvent } from 'react';
import { AppLink } from '../routing/AppLink';
import { platformConfig, submitCandidateProfile } from '../services/platformApi';

const initialState = {
  fullName: '',
  email: '',
  location: '',
  targetRole: '',
  linkedinUrl: '',
  summary: ''
};

export function CandidatePortalPage() {
  const [formData, setFormData] = useState(initialState);
  const [resumeFileName, setResumeFileName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const result = await submitCandidateProfile({
        ...formData,
        resumeFileName
      });
      setStatusMessage(result.message);
      if (result.ok) {
        setFormData(initialState);
        setResumeFileName('');
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
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">Candidate Portal</p>
        <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
          Submit your profile and resume.
        </h1>
        <p className="mt-4 max-w-3xl text-slate-600">
          This intake flow is API-ready. When backend endpoints are enabled, submissions can route directly into the Aurtiro CRM/ATS pipeline.
        </p>
        <div className="mt-4 inline-flex rounded-md border border-shell bg-slate-50 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-600">
          API mode: {platformConfig.isApiConfigured ? 'Connected' : 'Local fallback'}
        </div>
      </section>

      <section className="mt-10 rounded-xl border border-shell bg-white p-6 shadow-panel">
        <form className="grid gap-4" onSubmit={handleSubmit}>
          <label className="grid gap-1 text-sm text-slate-700">
            Full name
            <input
              required
              value={formData.fullName}
              onChange={(event) => setFormData((prev) => ({ ...prev, fullName: event.target.value }))}
              className="rounded-md border border-shell px-3 py-2"
            />
          </label>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-1 text-sm text-slate-700">
              Email
              <input
                required
                type="email"
                value={formData.email}
                onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
                className="rounded-md border border-shell px-3 py-2"
              />
            </label>

            <label className="grid gap-1 text-sm text-slate-700">
              Location
              <input
                required
                value={formData.location}
                onChange={(event) => setFormData((prev) => ({ ...prev, location: event.target.value }))}
                className="rounded-md border border-shell px-3 py-2"
              />
            </label>
          </div>

          <label className="grid gap-1 text-sm text-slate-700">
            Target role
            <input
              required
              value={formData.targetRole}
              onChange={(event) => setFormData((prev) => ({ ...prev, targetRole: event.target.value }))}
              className="rounded-md border border-shell px-3 py-2"
            />
          </label>

          <label className="grid gap-1 text-sm text-slate-700">
            LinkedIn URL
            <input
              value={formData.linkedinUrl}
              onChange={(event) =>
                setFormData((prev) => ({ ...prev, linkedinUrl: event.target.value }))
              }
              className="rounded-md border border-shell px-3 py-2"
            />
          </label>

          <label className="grid gap-1 text-sm text-slate-700">
            Resume
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(event) => setResumeFileName(event.target.files?.[0]?.name ?? '')}
              className="rounded-md border border-shell px-3 py-2"
            />
          </label>

          <label className="grid gap-1 text-sm text-slate-700">
            Brief summary
            <textarea
              rows={5}
              value={formData.summary}
              onChange={(event) => setFormData((prev) => ({ ...prev, summary: event.target.value }))}
              className="rounded-md border border-shell px-3 py-2"
            />
          </label>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-md bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Profile'}
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
