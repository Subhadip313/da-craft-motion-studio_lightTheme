import { createFileRoute } from "@tanstack/react-router";
import { FinalCTA, Reveal, SectionHeading, StatsBand } from "@/components/site/primitives";
import { IMAGES, PROCESS, WHY_US } from "@/data/content";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Da Craft Motion — Kolkata Creative Studio" },
      {
        name: "description",
        content:
          "Meet the Kolkata studio behind Da Craft Motion: directors, designers and editors building brand work that performs.",
      },
      { property: "og:title", content: "About Da Craft Motion" },
      {
        property: "og:description",
        content: "The people, principles and process behind our Kolkata creative studio.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="bg-cream pt-[72px]">
        <div className="container-editorial grid gap-12 py-16 md:py-24 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="eyebrow">About us</p>
            <h1 className="display-lg mt-5 text-ink">A studio built for brands that mean it</h1>
            <p className="lede mt-6">
              {SITE.name} began as two people with a camera and a stubborn belief that good craft
              should still be accountable to results. Today we are a full production team in
              Kolkata working with fashion houses, restaurants, developers and founders across
              India.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-lift">
              <img
                src={IMAGES.studioTeam}
                alt="The Da Craft Motion team reviewing footage in the studio"
                className="size-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <StatsBand />

      <section className="bg-white">
        <div className="container-editorial grid gap-12 py-20 md:py-28 lg:grid-cols-2">
          <Reveal>
            <h2 className="display-md text-ink">Our mission</h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              Make brands in this city look as considered as the work they do — and make that
              visibility measurable, not decorative.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display-md text-ink">Our vision</h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              To be the studio Eastern India calls first when a launch has to land, with craft that
              holds up against anything made anywhere.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-editorial py-20 md:py-28">
          <SectionHeading label="Values" title="What we hold to" />
          <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_US.map((w, i) => (
              <Reveal as="li" key={w.title} delay={i * 50} className="border-t border-line pt-5">
                <h3 className="font-display text-lg font-bold text-ink">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{w.copy}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-sand">
        <div className="container-editorial py-20 md:py-28">
          <SectionHeading label="Process" title="How we work" />
          <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {PROCESS.map((p, i) => (
              <Reveal as="li" key={p.step} delay={i * 60}>
                <p className="font-display text-3xl font-bold text-orange/40">{p.step}</p>
                <h3 className="mt-2 font-display text-xl font-bold text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.copy}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
