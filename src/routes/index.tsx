import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import {
  CTAButtons,
  FinalCTA,
  Reveal,
  SectionHeading,
  StatsBand,
  TrustedMarquee,
} from "@/components/site/primitives";
import {
  HOME_INDUSTRIES,
  HOME_SERVICES,
  IMAGES,
  PROCESS,
  PROJECTS,
  TESTIMONIALS,
  WHY_US,
} from "@/data/content";
import { SITE, localBusinessJsonLd } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Da Craft Motion — Creative Agency in Kolkata" },
      {
        name: "description",
        content:
          "Photography, videography, branding and social content for brands in Kolkata. Create | Inspire | Elevate. Book a free discovery call.",
      },
      { property: "og:title", content: "Da Craft Motion — Creative Agency in Kolkata" },
      {
        property: "og:description",
        content: "A premium full-service creative studio in Kolkata. Create | Inspire | Elevate.",
      },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(localBusinessJsonLd) },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = PROJECTS.slice(0, 6);

  return (
    <>
      <section className="relative overflow-hidden bg-cream pt-[72px]">
        <div className="container-editorial grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <p className="eyebrow">Kolkata creative studio</p>
            <h1 className="display-xl mt-5 text-ink">
              Create. Inspire. <span className="text-orange">Elevate.</span>
            </h1>
            <p className="lede mt-6 max-w-xl">
              {SITE.name} is a full-service creative agency building photography, film, brand
              systems and social content that make ambitious brands impossible to ignore.
            </p>
            <div className="mt-9">
              <CTAButtons />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-lift">
              <img
                src={IMAGES.heroStudio}
                alt="Da Craft Motion crew lighting a set inside the Kolkata studio"
                className="size-full object-cover"
                width={1200}
                height={1500}
              />
            </div>
          </Reveal>
        </div>
      </section>

      <TrustedMarquee />

      <section className="bg-cream" aria-labelledby="services-heading">
        <div className="container-editorial py-20 md:py-28">
          <SectionHeading
            label="What we do"
            title="Services built around the outcome"
            intro="Eight disciplines under one roof, so campaigns stay consistent from the first frame to the final post."
          />
          <ul className="mt-14 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {HOME_SERVICES.map((s, i) => (
              <Reveal as="li" key={s.anchor} delay={i * 60} className="bg-white p-7">
                <p className="font-display text-sm font-bold text-orange">{s.num}</p>
                <h3 className="mt-4 font-display text-xl font-bold text-ink">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{s.blurb}</p>
                <Link
                  to="/services"
                  hash={s.anchor}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-orange-dim hover:gap-3"
                >
                  Explore <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <StatsBand />

      <section className="bg-white" aria-labelledby="work-heading">
        <div className="container-editorial py-20 md:py-28">
          <SectionHeading label="Selected work" title="Recent projects" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, i) => (
              <Reveal as="article" key={p.id} delay={i * 60} className="group">
                <Link to="/portfolio" className="block overflow-hidden rounded-sm">
                  <div className="aspect-[4/3] overflow-hidden bg-sand">
                    <img
                      src={p.image}
                      alt={p.alt}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-ink">{p.title}</h3>
                  <p className="mt-1 text-sm text-ink-soft">
                    {p.client} · {p.category}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-12">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 font-semibold text-orange-dim hover:gap-3"
            >
              View full portfolio <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-cream" aria-labelledby="why-heading">
        <div className="container-editorial py-20 md:py-28">
          <SectionHeading label="Why us" title="Eight reasons brands stay" />
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

      <section className="bg-sand" aria-labelledby="process-heading">
        <div className="container-editorial py-20 md:py-28">
          <SectionHeading label="Process" title="How a project runs" />
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

      <section className="bg-white" aria-labelledby="industries-heading">
        <div className="container-editorial py-20 md:py-28">
          <SectionHeading label="Industries" title="Sectors we know well" />
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {HOME_INDUSTRIES.map((ind, i) => (
              <Reveal as="li" key={`${ind.id}-${ind.name}`} delay={i * 40}>
                <Link to="/industries" className="group block">
                  <div className="aspect-square overflow-hidden rounded-sm bg-sand">
                    <img
                      src={ind.image}
                      alt={ind.alt}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-ink">{ind.name}</p>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-cream" aria-labelledby="testimonials-heading">
        <div className="container-editorial py-20 md:py-28">
          <SectionHeading label="Testimonials" title="What clients say" />
          <ul className="mt-14 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.slice(0, 3).map((t, i) => (
              <Reveal as="li" key={t.name} delay={i * 60} className="rounded-sm bg-white p-7 shadow-soft">
                <blockquote className="text-sm leading-relaxed text-ink-soft">"{t.quote}"</blockquote>
                <p className="mt-5 font-display text-base font-bold text-ink">{t.name}</p>
                <p className="text-xs text-ink-soft">
                  {t.role}, {t.company}
                </p>
              </Reveal>
            ))}
          </ul>
          <div className="mt-12">
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-2 font-semibold text-orange-dim hover:gap-3"
            >
              Read more stories <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
