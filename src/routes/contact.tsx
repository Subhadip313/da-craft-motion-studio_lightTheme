import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { CTAButtons, Reveal } from "@/components/site/primitives";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Da Craft Motion — Kolkata Studio" },
      {
        name: "description",
        content:
          "Call, email or WhatsApp the Da Craft Motion studio in Kolkata. Baghajatin Station Road, open Monday to Saturday.",
      },
      { property: "og:title", content: "Contact | Da Craft Motion" },
      { property: "og:description", content: "Reach the Kolkata studio directly." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <section className="bg-cream pt-[72px]">
      <div className="container-editorial py-16 md:py-24">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h1 className="display-lg mt-5 max-w-3xl text-ink">Come by, call, or message us</h1>
          <p className="lede mt-6 max-w-2xl">
            The studio is in South Kolkata. We reply to WhatsApp fastest, usually within a couple of
            working hours.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          <Reveal className="rounded-sm border border-line bg-white p-7">
            <MapPin className="size-5 text-orange" aria-hidden="true" />
            <h2 className="mt-4 font-display text-lg font-bold text-ink">Studio</h2>
            <address className="mt-2 not-italic text-sm leading-relaxed text-ink-soft">
              {SITE.address}
            </address>
          </Reveal>
          <Reveal delay={60} className="rounded-sm border border-line bg-white p-7">
            <Phone className="size-5 text-orange" aria-hidden="true" />
            <h2 className="mt-4 font-display text-lg font-bold text-ink">Phone</h2>
            <a href={SITE.phoneHref} className="mt-2 block text-sm text-ink-soft hover:text-orange-dim">
              {SITE.phoneDisplay}
            </a>
            <ul className="mt-4 space-y-1 text-sm text-ink-soft">
              {SITE.hours.map((h) => (
                <li key={h.day}>
                  {h.day} — {h.time}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120} className="rounded-sm border border-line bg-white p-7">
            <Mail className="size-5 text-orange" aria-hidden="true" />
            <h2 className="mt-4 font-display text-lg font-bold text-ink">Email</h2>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-2 block text-sm text-ink-soft hover:text-orange-dim"
            >
              {SITE.email}
            </a>
            <ul className="mt-4 flex flex-wrap gap-3 text-sm text-ink-soft">
              {SITE.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer noopener" className="hover:text-orange-dim">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={80} className="mt-12">
          <div className="overflow-hidden rounded-sm border border-line">
            <iframe
              title="Map showing the Da Craft Motion studio location in Kolkata"
              src="https://www.google.com/maps?q=Baghajatin%20Station%20Road%20Kolkata&output=embed"
              loading="lazy"
              className="h-[380px] w-full"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>

        <Reveal delay={100} className="mt-12">
          <CTAButtons />
        </Reveal>
      </div>
    </section>
  );
}
