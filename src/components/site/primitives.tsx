import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUp, MessageCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { whatsappHref } from "@/lib/site";
import { STATS, CLIENT_WORDMARKS } from "@/data/content";

/* ------------------------------------------------------------------ reveal */

export function Reveal({
  children,
  className,
  delay = 0,
  as: As = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <As
      ref={ref as never}
      className={cn("reveal", visible && "is-visible", className)}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </As>
  );
}

/* ----------------------------------------------------------------- buttons */

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 disabled:opacity-60";

export const btn = {
  primary: cn(base, "bg-orange text-white hover:bg-orange-dim hover:-translate-y-0.5 shadow-soft"),
  outline: cn(base, "border border-ink/25 text-ink hover:border-orange hover:text-orange-dim"),
  ghostLight: cn(base, "border border-cream/35 text-cream hover:border-orange hover:text-orange"),
};

export function CTAButtons({ variant = "light" }: { variant?: "light" | "dark" }) {
  return (
    <div className="flex flex-wrap gap-3">
      <Link to="/booking" className={btn.primary}>
        Book a Call <ArrowRight className="size-4" aria-hidden="true" />
      </Link>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer noopener"
        className={variant === "dark" ? btn.ghostLight : btn.outline}
      >
        WhatsApp Us
      </a>
    </div>
  );
}

/* ---------------------------------------------------------------- sections */

export function SectionHeading({
  label,
  title,
  intro,
  align = "left",
}: {
  label?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {label ? <p className="eyebrow mb-4">{label}</p> : null}
      <h2 className="display-lg">{title}</h2>
      {intro ? <p className="lede mt-5">{intro}</p> : null}
    </Reveal>
  );
}

export function FinalCTA() {
  return (
    <section className="bg-ink text-cream" aria-labelledby="final-cta">
      <div className="container-editorial py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-end">
          <div>
            <p className="eyebrow text-orange">Let's begin</p>
            <h2 id="final-cta" className="display-lg mt-4 text-cream">
              Ready to Elevate Your Brand?
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/70">
              Tell us what you are launching. We will tell you honestly what it needs, what it costs
              and how fast it can ship.
            </p>
          </div>
          <CTAButtons variant="dark" />
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- marquee */

export function TrustedMarquee() {
  return (
    <section aria-label="Clients we work with" className="border-y border-line bg-white py-10">
      <p className="container-editorial eyebrow mb-6">Trusted by brands across industries</p>
      <div className="marquee-mask overflow-hidden" tabIndex={0}>
        <ul className="marquee-track items-center gap-12 px-6">
          {[...CLIENT_WORDMARKS, ...CLIENT_WORDMARKS].map((w, i) => (
            <li
              key={`${w}-${i}`}
              className="whitespace-nowrap font-display text-lg font-bold tracking-[0.18em] text-ink/30 transition-colors duration-300 hover:text-orange focus-within:text-orange md:text-xl"
              aria-hidden={i >= CLIENT_WORDMARKS.length}
            >
              {w}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------- stats */

function useCountUp(target: number, active: boolean) {
  const [value, setValue] = useState(target);
  useEffect(() => {
    if (!active) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1400;
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      setValue(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    setValue(0);
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active]);
  return value;
}

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          setActive(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const shown = useCountUp(value, active);
  return (
    <div ref={ref} className="border-t border-line pt-6">
      <p className="font-display text-[clamp(2.4rem,5vw,3.6rem)] font-bold leading-none text-ink">
        {shown}
        <span className="text-orange">{suffix}</span>
      </p>
      <p className="mt-3 text-sm text-ink-soft">{label}</p>
    </div>
  );
}

export function StatsBand() {
  return (
    <section aria-label="Agency results" className="bg-sand">
      <div className="container-editorial grid gap-8 py-16 sm:grid-cols-2 lg:grid-cols-4 md:py-20">
        {STATS.map((s) => (
          <StatItem key={s.label} {...s} />
        ))}
      </div>
    </section>
  );
}

/* --------------------------------------------------- floating page chrome */

export function PageChrome() {
  const [showTop, setShowTop] = useState(false);
  const [cookie, setCookie] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    try {
      setCookie(localStorage.getItem("dcm-cookie-ack") !== "1");
    } catch {
      setCookie(true);
    }
  }, []);

  const dismiss = () => {
    setCookie(false);
    try {
      localStorage.setItem("dcm-cookie-ack", "1");
    } catch {
      /* storage unavailable */
    }
  };

  return (
    <>
      <div className="pointer-events-none fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
        {showTop ? (
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="pointer-events-auto grid size-11 place-items-center rounded-full border border-line bg-white text-ink shadow-soft transition hover:border-orange hover:text-orange"
          >
            <ArrowUp className="size-4" aria-hidden="true" />
          </button>
        ) : null}
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Chat with Da Craft Motion on WhatsApp"
          className="pointer-events-auto flex items-center gap-2 rounded-full bg-orange px-4 py-3 text-sm font-semibold text-white shadow-lift transition hover:bg-orange-dim"
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </div>

      {cookie ? (
        <div
          role="region"
          aria-label="Cookie notice"
          className="fixed bottom-4 left-4 z-40 max-w-sm rounded-sm border border-line bg-white p-4 shadow-lift"
        >
          <div className="flex items-start gap-3">
            <p className="text-xs leading-relaxed text-ink-soft">
              We use a couple of cookies to understand how this site is used. Nothing invasive.{" "}
              <Link to="/privacy" className="text-orange-dim underline underline-offset-2">
                Privacy Policy
              </Link>
              .
            </p>
            <button
              type="button"
              onClick={dismiss}
              aria-label="Dismiss cookie notice"
              className="shrink-0 rounded-sm border border-line p-1 text-ink transition hover:border-orange hover:text-orange"
            >
              <X className="size-3.5" aria-hidden="true" />
            </button>
          </div>
          <button type="button" onClick={dismiss} className="mt-3 text-xs font-semibold text-orange-dim">
            Got it
          </button>
        </div>
      ) : null}
    </>
  );
}
