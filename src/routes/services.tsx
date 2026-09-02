import { createFileRoute } from "@tanstack/react-router";
import { FinalCTA, Reveal, SectionHeading } from "@/components/site/primitives";
import { Accordion } from "@/components/site/Accordion";
import { SERVICES } from "@/data/content";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Photography, Film & Branding | Da Craft Motion" },
      {
        name: "description",
        content:
          "Photography, videography, editing, graphic design, social content, branding, motion graphics and commercial production in Kolkata.",
      },
      { property: "og:title", content: "Services | Da Craft Motion" },
      {
        property: "og:description",
        content: "Eight creative disciplines under one roof, delivered end to end.",
      },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <section className="bg-cream pt-[72px]">
        <div className="container-editorial py-16 md:py-24">
          <Reveal>
            <p className="eyebrow">Services</p>
            <h1 className="display-lg mt-5 max-w-3xl text-ink">
              Everything a campaign needs, made in one place
            </h1>
            <p className="lede mt-6 max-w-2xl">
              Scope one discipline or the whole pipeline. Either way you get one producer, one
              schedule and one consistent visual language.
            </p>
          </Reveal>
        </div>
      </section>

      {SERVICES.map((s, idx) => (
        <section
          key={s.id}
          id={s.id}
          aria-labelledby={`${s.id}-title`}
          className={idx % 2 === 0 ? "bg-white" : "bg-cream"}
        >
          <div className="container-editorial grid gap-12 py-20 md:py-24 lg:grid-cols-[1fr_1.05fr]">
            <Reveal>
              <p className="font-display text-sm font-bold text-orange">{s.num}</p>
              <h2 id={`${s.id}-title`} className="display-md mt-3 text-ink">
                {s.title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-soft">{s.description}</p>

              <h3 className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-ink">
                What's included
              </h3>
              <ul className="mt-4 grid gap-2 text-sm text-ink-soft sm:grid-cols-2">
                {s.included.map((i) => (
                  <li key={i} className="border-l-2 border-orange/40 pl-3">
                    {i}
                  </li>
                ))}
              </ul>

              <h3 className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-ink">
                Why it matters
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-ink-soft">
                {s.benefits.map((b) => (
                  <li key={b}>— {b}</li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={100}>
              <div className="grid grid-cols-2 gap-4">
                {s.gallery.map((g) => (
                  <div key={g.src + g.alt} className="aspect-[4/5] overflow-hidden rounded-sm bg-sand">
                    <img src={g.src} alt={g.alt} loading="lazy" className="size-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-ink">
                  Common questions
                </h3>
                <Accordion items={s.faqs} />
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="bg-sand">
        <div className="container-editorial py-20 md:py-24">
          <SectionHeading
            align="center"
            label="Not sure where to start?"
            title="Tell us the goal, we'll scope the work"
            intro="Most projects begin with a fifteen-minute call and a one-page plan with real numbers attached."
          />
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
