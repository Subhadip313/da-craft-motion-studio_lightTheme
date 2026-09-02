import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/site/primitives";
import { PROCESS } from "@/data/content";
import { SITE, whatsappHref } from "@/lib/site";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book a Free Discovery Call | Da Craft Motion" },
      {
        name: "description",
        content:
          "Book a free fifteen-minute discovery call with Da Craft Motion in Kolkata and get a one-page plan for your next campaign.",
      },
      { property: "og:title", content: "Book a Free Discovery Call | Da Craft Motion" },
      { property: "og:description", content: "Fifteen minutes, no pitch deck, a real plan." },
    ],
  }),
  component: Booking,
});

const SERVICES = [
  "Photography",
  "Videography",
  "Video Editing",
  "Graphic Design",
  "Social Media Content",
  "Branding",
  "Motion Graphics",
  "Commercial Production",
];

const BUDGETS = ["Under ₹50k", "₹50k – ₹1.5L", "₹1.5L – ₹5L", "₹5L+", "Not sure yet"];

export function Booking() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please add your name and a valid email address.");
      return;
    }
    setError("");
    setSent(true);
  };

  return (
    <section className="bg-cream pt-[72px]">
      <div className="container-editorial grid gap-12 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <p className="eyebrow">Book a call</p>
          <h1 className="display-lg mt-5 text-ink">A free fifteen-minute discovery call</h1>
          <p className="lede mt-6">
            Tell us what you're launching. You'll leave the call with an honest read on scope,
            timeline and budget — whether or not you work with us.
          </p>

          {sent ? (
            <div
              role="status"
              className="mt-10 rounded-sm border border-orange/40 bg-white p-7 text-ink"
            >
              <CheckCircle2 className="size-7 text-orange" aria-hidden="true" />
              <h2 className="mt-4 font-display text-xl font-bold">Request received</h2>
              <p className="mt-2 text-sm text-ink-soft">
                This is a static demo, so nothing was sent to a server. To reach us right now,
                WhatsApp{" "}
                <a href={whatsappHref} className="text-orange-dim underline underline-offset-2">
                  {SITE.phoneDisplay}
                </a>{" "}
                or email{" "}
                <a href={`mailto:${SITE.email}`} className="text-orange-dim underline underline-offset-2">
                  {SITE.email}
                </a>
                .
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="mt-10 grid gap-5 sm:grid-cols-2">
              <Field label="Full name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" />
              <Field label="Company" name="company" />

              <label className="text-sm font-medium text-ink">
                Service needed
                <select
                  name="service"
                  className="mt-2 w-full rounded-sm border border-line bg-white px-3 py-2.5 text-sm text-ink focus:border-orange focus:outline-none"
                >
                  {SERVICES.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </label>

              <label className="text-sm font-medium text-ink">
                Budget range
                <select
                  name="budget"
                  className="mt-2 w-full rounded-sm border border-line bg-white px-3 py-2.5 text-sm text-ink focus:border-orange focus:outline-none"
                >
                  {BUDGETS.map((b) => (
                    <option key={b}>{b}</option>
                  ))}
                </select>
              </label>

              <label className="text-sm font-medium text-ink sm:col-span-2">
                Project details
                <textarea
                  name="details"
                  rows={5}
                  placeholder="What are you launching, and by when?"
                  className="mt-2 w-full rounded-sm border border-line bg-white px-3 py-2.5 text-sm text-ink placeholder:text-ink-soft/60 focus:border-orange focus:outline-none"
                />
              </label>

              {error ? (
                <p role="alert" className="text-sm font-medium text-orange-dim sm:col-span-2">
                  {error}
                </p>
              ) : null}

              <button
                type="submit"
                className="rounded-sm bg-orange px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-dim sm:col-span-2 sm:justify-self-start"
              >
                Request my call
              </button>
            </form>
          )}
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-sm border border-line bg-white p-7">
            <h2 className="font-display text-lg font-bold text-ink">What happens next</h2>
            <ol className="mt-5 space-y-4">
              {PROCESS.slice(0, 4).map((p) => (
                <li key={p.step} className="flex gap-4">
                  <span className="font-display text-sm font-bold text-orange">{p.step}</span>
                  <span>
                    <span className="block text-sm font-semibold text-ink">{p.title}</span>
                    <span className="mt-1 block text-sm text-ink-soft">{p.copy}</span>
                  </span>
                </li>
              ))}
            </ol>
            <h3 className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-ink">Studio hours</h3>
            <ul className="mt-3 space-y-1 text-sm text-ink-soft">
              {SITE.hours.map((h) => (
                <li key={h.day}>
                  {h.day} — {h.time}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="text-sm font-medium text-ink">
      {label}
      {required ? <span className="text-orange"> *</span> : null}
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-sm border border-line bg-white px-3 py-2.5 text-sm text-ink focus:border-orange focus:outline-none"
      />
    </label>
  );
}
