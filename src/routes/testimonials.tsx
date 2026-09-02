import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { FinalCTA, Reveal, StatsBand } from "@/components/site/primitives";
import { TESTIMONIALS } from "@/data/content";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Client Testimonials | Da Craft Motion" },
      {
        name: "description",
        content:
          "Founders, marketers and restaurateurs on what it is like working with Da Craft Motion in Kolkata.",
      },
      { property: "og:title", content: "Client Testimonials | Da Craft Motion" },
      { property: "og:description", content: "Real words from the brands we produce for." },
    ],
  }),
  component: Testimonials,
});

function Testimonials() {
  return (
    <>
      <section className="bg-cream pt-[72px]">
        <div className="container-editorial py-16 md:py-24">
          <Reveal>
            <p className="eyebrow">Testimonials</p>
            <h1 className="display-lg mt-5 max-w-3xl text-ink">The part we can't write ourselves</h1>
            <p className="lede mt-6 max-w-2xl">
              Long-term clients across fashion, food, property and healthcare on the work and the
              working relationship.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-editorial py-16 md:py-24">
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal
                as="li"
                key={t.name}
                delay={(i % 3) * 60}
                className="flex flex-col rounded-sm border border-line bg-cream p-7"
              >
                {t.rating ? (
                  <p className="flex gap-1" aria-label={`${t.rating} out of 5 stars`}>
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <Star key={s} className="size-4 fill-orange text-orange" aria-hidden="true" />
                    ))}
                  </p>
                ) : null}
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">
                  "{t.quote}"
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  {t.photo ? (
                    <img
                      src={t.photo}
                      alt={`Portrait of ${t.name}`}
                      loading="lazy"
                      className="size-11 rounded-full object-cover"
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="grid size-11 place-items-center rounded-full bg-orange-tint font-display text-sm font-bold text-orange-dim"
                    >
                      {t.initials}
                    </span>
                  )}
                  <div>
                    <p className="font-display text-base font-bold text-ink">{t.name}</p>
                    <p className="text-xs text-ink-soft">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <StatsBand />
      <FinalCTA />
    </>
  );
}
