import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import { AppLink } from '../../routing/AppLink';
export function TestimonialSpotlight({ testimonials, viewAllTo }) {
    const [index, setIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const touchStartX = useRef(null);
    const touchStartY = useRef(null);
    const showNext = () => {
        setIndex((prev) => (prev + 1) % testimonials.length);
    };
    const showPrevious = () => {
        setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };
    const showIndex = (value) => {
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
    const handleKeyDown = (event) => {
        if (event.key === 'ArrowRight') {
            showNext();
        }
        if (event.key === 'ArrowLeft') {
            showPrevious();
        }
    };
    const handleTouchStart = (event) => {
        const touch = event.touches[0];
        touchStartX.current = touch.clientX;
        touchStartY.current = touch.clientY;
    };
    const handleTouchEnd = (event) => {
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
            }
            else {
                showNext();
            }
        }
    };
    const active = testimonials[index];
    return (_jsxs("aside", { className: "rounded-2xl border border-shell bg-white p-6 shadow-panel animate-riseIn [animation-delay:.1s]", tabIndex: 0, onKeyDown: handleKeyDown, onMouseEnter: () => setIsPaused(true), onMouseLeave: () => setIsPaused(false), onFocus: () => setIsPaused(true), onBlur: () => setIsPaused(false), onTouchStart: handleTouchStart, onTouchEnd: handleTouchEnd, children: [_jsx("p", { className: "font-mono text-xs uppercase tracking-[0.18em] text-slate-500", children: "Candidate Signal" }), _jsx("h2", { className: "mt-3 font-display text-2xl font-semibold", children: "Testimonial Preview" }), _jsxs("blockquote", { className: "mt-4 border-l-2 border-shell pl-4 text-slate-600", children: ["\u201C", active.quote, "\u201D"] }), _jsxs("p", { className: "mt-4 text-sm font-semibold text-ink", children: [active.author, " \u00B7 ", active.role] }), _jsx("p", { className: "mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500", children: "Swipe on mobile or use controls." }), _jsxs("div", { className: "mt-4 flex items-center justify-between gap-3", children: [_jsx("div", { className: "flex gap-1.5", children: testimonials.map((item, testimonialIndex) => (_jsx("button", { className: `h-2.5 w-2.5 rounded-full ${testimonialIndex === index ? 'bg-ink' : 'bg-slate-300'}`, "aria-label": `Show testimonial ${testimonialIndex + 1}`, onClick: () => showIndex(testimonialIndex) }, `${item.role}-${testimonialIndex}`))) }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("button", { className: "rounded-md border border-shell px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50", "aria-label": "Show previous testimonial", onClick: showPrevious, children: "Prev" }), _jsx("button", { className: "rounded-md border border-shell px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50", "aria-label": "Show next testimonial", onClick: showNext, children: "Next" })] })] }), _jsx(AppLink, { to: viewAllTo, className: "mt-5 inline-flex rounded-md border border-shell bg-slate-50 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink transition hover:border-slate-300 hover:bg-white", children: "View All Testimonials" })] }));
}
