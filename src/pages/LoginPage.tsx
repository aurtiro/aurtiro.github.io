import { useState, type FormEvent } from 'react';
import { AppLink } from '../routing/AppLink';
import { loginUser, platformConfig } from '../services/platformApi';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const result = await loginUser({ email, password });
      setStatusMessage(result.message);
    } catch {
      setStatusMessage('Login failed. Please verify auth API configuration.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="mx-auto max-w-7xl px-4 pb-20 pt-12 md:px-8 md:pt-16">
      <section>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">Portal Login</p>
        <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
          Secure access for candidates and hiring teams.
        </h1>
        <p className="mt-4 max-w-3xl text-slate-600">
          Auth endpoints are scaffolded and ready to connect to your backend identity provider.
        </p>
        <div className="mt-4 inline-flex rounded-md border border-shell bg-slate-50 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-600">
          API mode: {platformConfig.isApiConfigured ? 'Connected' : 'Auth backend not configured'}
        </div>
      </section>

      <section className="mt-10 max-w-xl rounded-xl border border-shell bg-white p-6 shadow-panel">
        <form className="grid gap-4" onSubmit={handleSubmit}>
          <label className="grid gap-1 text-sm text-slate-700">
            Email
            <input
              required
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="rounded-md border border-shell px-3 py-2"
            />
          </label>

          <label className="grid gap-1 text-sm text-slate-700">
            Password
            <input
              required
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="rounded-md border border-shell px-3 py-2"
            />
          </label>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-md bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? 'Signing in...' : 'Sign In'}
            </button>
            <button
              type="button"
              className="rounded-md border border-shell px-5 py-2.5 text-sm font-semibold text-ink"
            >
              Continue with SSO (Planned)
            </button>
          </div>

          {statusMessage && <p className="text-sm text-slate-600">{statusMessage}</p>}
        </form>

        <div className="mt-6 border-t border-shell pt-4">
          <p className="text-sm text-slate-600">
            Need intake access now? Use direct portals while auth integration is finalized.
          </p>
          <div className="mt-3 flex flex-wrap gap-3">
            <AppLink
              to="/portal/candidate"
              className="rounded-md border border-shell bg-slate-50 px-4 py-2 text-sm font-semibold text-ink"
            >
              Candidate Portal
            </AppLink>
            <AppLink
              to="/portal/client"
              className="rounded-md border border-shell bg-slate-50 px-4 py-2 text-sm font-semibold text-ink"
            >
              Client Portal
            </AppLink>
          </div>
        </div>
      </section>
    </main>
  );
}
