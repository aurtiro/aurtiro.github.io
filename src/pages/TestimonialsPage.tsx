import { candidateTestimonials, clientTestimonial, peerTestimonial } from '../data/siteContent';

export function TestimonialsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 pb-20 pt-12 md:px-8 md:pt-16">
      <section>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">Testimonials</p>
        <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
          Full social proof across clients, candidates, and peers.
        </h1>
        <p className="mt-4 max-w-3xl text-slate-600">
          The homepage shows short previews for impact. This page contains expanded testimonial detail.
        </p>
      </section>

      <section id="client-testimonial" className="mt-10 scroll-mt-28">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">Client Testimonial</p>
        <article className="mt-4 rounded-xl border border-shell bg-white p-6 shadow-panel">
          <blockquote className="border-l-2 border-shell pl-4 leading-7 text-slate-700">
            “{clientTestimonial.quote}”
          </blockquote>
          <p className="mt-4 text-sm font-semibold text-ink">
            {clientTestimonial.author}, {clientTestimonial.role} · {clientTestimonial.company}
          </p>
        </article>
      </section>

      <section id="candidate-testimonials" className="mt-12 scroll-mt-28">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">
          Candidate Testimonials
        </p>
        <div className="mt-4 grid gap-5 md:grid-cols-2">
          {candidateTestimonials.map((item, index) => (
            <article key={`${item.role}-${index}`} className="rounded-xl border border-shell bg-white p-6">
              <blockquote className="text-sm leading-6 text-slate-600">“{item.quote}”</blockquote>
              <p className="mt-4 text-sm font-semibold text-ink">
                {item.author} · {item.role}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="peer-testimonial" className="mt-12 scroll-mt-28">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">Peer Testimonial</p>
        <article className="mt-4 rounded-xl border border-shell bg-white p-6 shadow-panel">
          <blockquote className="border-l-2 border-shell pl-4 leading-7 text-slate-700">
            “{peerTestimonial.quote}”
          </blockquote>
          <p className="mt-4 text-sm font-semibold text-ink">
            {peerTestimonial.author}, {peerTestimonial.role} · {peerTestimonial.company}
          </p>
        </article>
      </section>
    </main>
  );
}
