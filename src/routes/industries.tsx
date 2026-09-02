import { createFileRoute } from "@tanstack/react-router";
import { FinalCTA, Reveal } from "@/components/site/primitives";
import { INDUSTRIES } from "@/data/content";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve | Da Craft Motion Kolkata" },
      {
        name: "description",
        content:
          "Fashion, food, real estate, hospitality, retail, healthcare, education, corporate and e-commerce creative production in Kolkata.",
      },
      { property: "og:title", content: "Industries | Da Craft Motion" },
      { property: "og:description", content: "Sector-specific creative production experience." },
    ],
  }),
  component: Industries,
});

function Industries() {
  return (
    <>
      <section className="bg-cream pt-[72px]">
        <div className="container-editorial py-16 md:py-24">
          <Reveal>
            <p className="eyebrow">Industries</p>
            <h1 className="display-lg mt-5 max-w-3xl text-ink">We already speak your category</h1>
            <p className="lede mt-6 max-w-2xl">
              Shooting a menu is not shooting a showflat. Here is how our approach changes by
              sector.
            </p>
          </Reveal>
        </div>
      </section>

      {INDUSTRIES.map((ind, idx) => (
        <section
          key={ind.id + ind.name}
          id={ind.id}
          className={idx % 2 === 0 ? "bg-white" : "bg-cream"}
          aria-labelledby={`${ind.id}-${idx}-title`}
        >
          <div
            className={`container-editorial grid items-center gap-10 py-16 md:py-20 lg:grid-cols-2 ${
              idx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <Reveal>
              <div className="aspect-[4/3] overflow-hidden rounded-sm bg-sand shadow-soft">
                <img src={ind.image} alt={ind.alt} loading="lazy" className="size-full object-cover" />
              </div>
              <ul className="mt-4 grid grid-cols-3 gap-3">
                {ind.thumbs.map((t) => (
                  <li key={t.src + t.alt} className="aspect-square overflow-hidden rounded-sm bg-sand">
                    <img src={t.src} alt={t.alt} loading="lazy" className="size-full object-cover" />
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={80}>
              <h2 id={`${ind.id}-${idx}-title`} className="display-md text-ink">
                {ind.name}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-soft">{ind.copy}</p>
            </Reveal>
          </div>
        </section>
      ))}

      <FinalCTA />
    </>
  );
}
