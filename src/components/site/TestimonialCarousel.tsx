import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { TESTIMONIALS } from "@/data/content";

const SLIDES = TESTIMONIALS.slice(0, 5);

/** Auto-advancing quote carousel; pauses on hover/focus and respects reduced motion. */
export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const id = window.setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 7000);
    return () => window.clearInterval(id);
  }, [paused]);

  const go = (dir: number) => setIndex((i) => (i + dir + SLIDES.length) % SLIDES.length);
  const active = SLIDES[index];
  if (!active) return null;

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Client testimonials"
      className="rounded-sm border border-line bg-cream p-7 md:p-12"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <Quote className="size-8 text-orange" aria-hidden="true" />

      <div aria-live="polite" aria-atomic="true">
        <div
          key={active.name}
          aria-roledescription="slide"
          aria-label={`${index + 1} of ${SLIDES.length}`}
          className="reveal is-visible"
        >
          <blockquote className="mt-6 font-display text-[clamp(1.25rem,2.6vw,2rem)] font-bold leading-snug text-ink">
            "{active.quote}"
          </blockquote>
          <div className="mt-8 flex items-center gap-4">
            {active.photo ? (
              <img
                src={active.photo}
                alt={`Portrait of ${active.name}`}
                loading="lazy"
                className="size-12 rounded-full object-cover"
              />
            ) : (
              <span
                aria-hidden="true"
                className="grid size-12 place-items-center rounded-full bg-orange-tint font-display text-sm font-bold text-orange-dim"
              >
                {active.initials}
              </span>
            )}
            <div>
              <p className="font-display text-base font-bold text-ink">{active.name}</p>
              <p className="text-xs text-ink-soft">
                {active.role}, {active.company}
              </p>
            </div>
            {active.rating ? (
              <p className="ml-auto flex gap-1" aria-label={`${active.rating} out of 5 stars`}>
                {Array.from({ length: active.rating }).map((_, s) => (
                  <Star key={s} className="size-4 fill-orange text-orange" aria-hidden="true" />
                ))}
              </p>
            ) : null}
          </div>
        </div>
      </div>

      <div className="mt-9 flex items-center gap-3">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous testimonial"
          className="grid size-10 place-items-center rounded-full border border-line bg-white text-ink transition hover:border-orange hover:text-orange"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next testimonial"
          className="grid size-10 place-items-center rounded-full border border-line bg-white text-ink transition hover:border-orange hover:text-orange"
        >
          <ArrowRight className="size-4" aria-hidden="true" />
        </button>
        <ul className="ml-2 flex gap-2">
          {SLIDES.map((s, i) => (
            <li key={s.name}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show testimonial ${i + 1}`}
                aria-current={i === index ? "true" : undefined}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  i === index ? "w-7 bg-orange" : "w-3 bg-ink/20 hover:bg-ink/40",
                )}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
