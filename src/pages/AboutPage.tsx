import {
  philosophyPoints,
  recognitionItems,
  recruitmentProcess,
  talentBarPoints
} from '../data/siteContent';

export function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 pb-20 pt-12 md:px-8 md:pt-16">
      <section>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">About Aurtiro</p>
        <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
          Recruitment operating model built for technical teams.
        </h1>
      </section>

      <section id="recruitment-process" className="mt-10 scroll-mt-28 rounded-xl border border-shell bg-white p-6 shadow-panel">
        <h2 className="font-display text-2xl font-semibold">Recruitment Process</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {recruitmentProcess.map((step) => (
            <article key={step.title} className="rounded-md border border-shell bg-slate-50 p-4">
              <h3 className="font-display text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="philosophy" className="mt-6 scroll-mt-28 rounded-xl border border-shell bg-white p-6">
        <h2 className="font-display text-2xl font-semibold">Philosophy</h2>
        <ul className="mt-4 grid gap-2 text-sm leading-6 text-slate-600">
          {philosophyPoints.map((point) => (
            <li key={point} className="rounded-md border border-shell bg-slate-50 px-3 py-2">
              {point}
            </li>
          ))}
        </ul>
      </section>

      <section id="talent-bar" className="mt-6 scroll-mt-28 rounded-xl border border-shell bg-white p-6">
        <h2 className="font-display text-2xl font-semibold">Talent Bar</h2>
        <ul className="mt-4 grid gap-2 text-sm leading-6 text-slate-600">
          {talentBarPoints.map((point) => (
            <li key={point} className="rounded-md border border-shell bg-slate-50 px-3 py-2">
              {point}
            </li>
          ))}
        </ul>
      </section>

      <section id="recognitions" className="mt-6 scroll-mt-28 rounded-xl border border-shell bg-white p-6">
        <h2 className="font-display text-2xl font-semibold">Recognitions</h2>
        <ul className="mt-4 grid gap-2 text-sm leading-6 text-slate-600">
          {recognitionItems.map((item) => (
            <li key={item} className="rounded-md border border-shell bg-slate-50 px-3 py-2">
              {item}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
