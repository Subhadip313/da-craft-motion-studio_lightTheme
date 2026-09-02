import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUp } from "lucide-react";
import logoMark from "@/assets/daCraftLogoLba.png";
import { SITE } from "@/lib/site";

const SERVICE_LINKS = [
  { label: "Photography", hash: "photography" },
  { label: "Videography", hash: "videography" },
  { label: "Branding", hash: "brand-identity" },
  { label: "Social Media", hash: "social-media-content" },
  { label: "Motion Graphics", hash: "motion-graphics" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Static demo: no data leaves the browser. Wire FORM_ENDPOINT to go live.
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setDone(true);
  };

  return (
    <footer className="bg-ink text-cream">
      <div className="container-editorial py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          <div>
            <div className="flex items-center gap-3">
              {/* <img src={logoMark} alt="Da Craft Motion logo" className="h-9 w-9 shrink-0 object-contain" /> */}
              <p className="font-display text-lg font-bold tracking-[0.16em]">{SITE.wordmark}</p>
            </div>
            <p className="mt-2 text-sm tracking-[0.2em] text-orange">{SITE.tagline}</p>
            <address className="mt-6 not-italic text-sm leading-relaxed text-cream/70">
              {SITE.address}
              <br />
              {/* TODO: replace placeholder contact details in src/lib/site.ts */}
              <a href={SITE.phoneHref} className="hover:text-orange">
                {SITE.phoneDisplay}
              </a>
              <br />
              <a href={`mailto:${SITE.email}`} className="hover:text-orange">
                {SITE.email}
              </a>
            </address>
          </div>

          <nav aria-label="Services">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-cream/50">Services</h2>
            <ul className="mt-5 space-y-3 text-sm text-cream/75">
              {SERVICE_LINKS.map((s) => (
                <li key={s.hash}>
                  <Link to="/services" hash={s.hash} className="hover:text-orange">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-cream/50">Company</h2>
            <ul className="mt-5 space-y-3 text-sm text-cream/75">
              <li>
                <Link to="/about" className="hover:text-orange">
                  About
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-orange">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-orange">
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="hover:text-orange">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/booking" className="hover:text-orange">
                  Book a Call
                </Link>
              </li>
            </ul>
            <h2 className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-cream/50">Legal</h2>
            <ul className="mt-5 space-y-3 text-sm text-cream/75">
              <li>
                <Link to="/privacy" className="hover:text-orange">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-orange">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-cream/50">Newsletter</h2>
            <p className="mt-5 text-sm text-cream/70">
              One short email a month: new work, and what actually performed.
            </p>
            {done ? (
              <p role="status" className="mt-4 rounded-sm border border-orange/40 p-3 text-sm text-orange">
                Thanks — you're on the list. (Demo only: nothing was sent to a server.)
              </p>
            ) : (
              <form onSubmit={onSubmit} className="mt-4 flex gap-2" noValidate>
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="min-w-0 flex-1 rounded-sm border border-cream/25 bg-transparent px-3 py-2.5 text-sm text-cream placeholder:text-cream/40 focus:border-orange focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-sm bg-orange px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-dim"
                >
                  Join
                </button>
              </form>
            )}

            <ul className="mt-8 flex flex-wrap gap-4 text-sm text-cream/70">
              {SITE.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer noopener" className="hover:text-orange">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-cream/15 pt-6 text-xs text-cream/55 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 hover:text-orange"
          >
            Back to top <ArrowUp className="size-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
