import { useEffect, useRef, useState, type KeyboardEvent, type TouchEvent } from 'react';
import type { Testimonial } from '../../data/siteContent';
import { AppLink } from '../../routing/AppLink';

type TestimonialSpotlightProps = {
  testimonials: Testimonial[];
  viewAllTo: string;
};

export function TestimonialSpotlight({ testimonials, viewAllTo }: TestimonialSpotlightProps) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const showNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const showPrevious = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const showIndex = (value: number) => {
    const total = testimonials.length;
    setIndex(((value % total) + total) % total);
  };

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const timer = window.setInterval(showNext, 6500);
    return () => window.clearInterval(timer);
  }, [isPaused]);

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'ArrowRight') {
      showNext();
    }

    if (event.key === 'ArrowLeft') {
      showPrevious();
    }
  };

  const handleTouchStart = (event: TouchEvent<HTMLElement>) => {
    const touch = event.touches[0];
    touchStartX.current = touch.clientX;
    touchStartY.current = touch.clientY;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLElement>) => {
    if (touchStartX.current === null || touchStartY.current === null) {
      return;
    }

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStartX.current;
    const deltaY = touch.clientY - touchStartY.current;

    touchStartX.current = null;
    touchStartY.current = null;

    if (Math.abs(deltaX) > 44 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX > 0) {
        showPrevious();
      } else {
        showNext();
      }
    }
  };

  const active = testimonials[index];

  return (
    <aside
      className="rounded-2xl border border-shell bg-white p-6 shadow-panel animate-riseIn [animation-delay:.1s]"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">Candidate Signal</p>
      <h2 className="mt-3 font-display text-2xl font-semibold">Testimonial Preview</h2>
      <blockquote className="mt-4 border-l-2 border-shell pl-4 text-slate-600">“{active.quote}”</blockquote>
      <p className="mt-4 text-sm font-semibold text-ink">
        {active.author} · {active.role}
      </p>
      <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500">
        Swipe on mobile or use controls.
      </p>
      <div className="mt-4 flex items-center justify-between gap-3">
        <div className="flex gap-1.5">
          {testimonials.map((item, testimonialIndex) => (
            <button
              key={`${item.role}-${testimonialIndex}`}
              className={`h-2.5 w-2.5 rounded-full ${
                testimonialIndex === index ? 'bg-ink' : 'bg-slate-300'
              }`}
              aria-label={`Show testimonial ${testimonialIndex + 1}`}
              onClick={() => showIndex(testimonialIndex)}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            className="rounded-md border border-shell px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            aria-label="Show previous testimonial"
            onClick={showPrevious}
          >
            Prev
          </button>
          <button
            className="rounded-md border border-shell px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            aria-label="Show next testimonial"
            onClick={showNext}
          >
            Next
          </button>
        </div>
      </div>

      <AppLink
        to={viewAllTo}
        className="mt-5 inline-flex rounded-md border border-shell bg-slate-50 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink transition hover:border-slate-300 hover:bg-white"
      >
        View All Testimonials
      </AppLink>
    </aside>
  );
}
