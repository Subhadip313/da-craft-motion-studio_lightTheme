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
  HERO_MEDIA,
  HOME_INDUSTRIES,
  HOME_SERVICES,
  IMAGES,
  PROCESS,
  PROJECTS,
  TESTIMONIALS,
  WHY_US,
} from "@/data/content";
import { SITE, localBusinessJsonLd } from "@/lib/site";

function HeroMedia() {
  if (HERO_MEDIA.type === "video" && HERO_MEDIA.videoSrc) {
    return (
      <video
        src={HERO_MEDIA.videoSrc}
        poster={HERO_MEDIA.poster}
        autoPlay
        loop
        muted
        playsInline
        className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />
    );
  }

  return (
    <img
      src={HERO_MEDIA.src}
      alt={HERO_MEDIA.alt}
      className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      width={1200}
      height={1500}
    />
  );
}

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
      <section className="relative overflow-hidden bg-[#f5ead7] pt-[72px]">
        <div className="absolute left-[-10%] top-[8%] h-80 w-80 rounded-full bg-[#f3d8b9]/60 blur-3xl" />
        <div className="absolute right-[8%] bottom-[10%] h-72 w-72 rounded-full bg-[#e7d8c8]/60 blur-3xl" />

        <div className="container-editorial relative grid items-center gap-10 py-16 md:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
          <Reveal>
            <p className="eyebrow text-orange-dim">Full-service creative agency</p>
            <h1 className="hero-display mt-5 max-w-[660px] text-ink">
              Creative
              <br className="hidden md:block" />
              content
              <br className="hidden md:block" />
              that <span className="hero-script text-orange">grows</span>
              <br className="hidden md:block" />
              your brand
            </h1>
            <p className="lede mt-6 max-w-xl text-ink-soft">
              We help businesses stand out through photography, videography, branding, design and
              social media content that drives engagement and delivers real business growth.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <CTAButtons />
            </div>
            <div className="mt-12 inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-ink-soft">
              <span className="inline-block -translate-y-[1px] text-orange">↓</span>
              Scroll
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="hero-scene relative mx-auto w-full max-w-[620px]">
              <div className="absolute left-[8%] top-[12%] h-[38%] w-[38%] rounded-[26%] bg-[#eadcc6]/70 blur-[2px]" />
              <div className="absolute right-[4%] top-[12%] h-[42%] w-[42%] rotate-12 rounded-[24px] bg-[#d5cabd]/70 shadow-soft" />
              <div className="absolute bottom-[8%] left-[12%] h-[30%] w-[30%] rotate-[-18deg] rounded-[24px] bg-[#d7cfc2]/70" />
              <div className="absolute inset-[6%] rounded-[40px] border border-ink/5 bg-white/10 backdrop-blur-[1px]" />

              <div className="hero-panel group relative mx-auto aspect-[4/4.8] w-full overflow-hidden rounded-[30px] border border-ink/10 bg-[#f5efe7] shadow-[0_30px_80px_-42px_rgba(43,36,28,0.55)]">
                <div className="hero-media-wrap relative size-full overflow-hidden">
                  <HeroMedia />
                </div>
              </div>
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
              <Reveal
                as="li"
                key={s.anchor}
                delay={i * 60}
                className="group relative overflow-hidden border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-orange hover:shadow-soft"
              >
                <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-orange transition-transform duration-300 group-hover:scale-x-100" />
                <p className="font-display text-sm font-bold text-orange">{s.num}</p>
                <h3 className="mt-4 font-display text-xl font-bold text-ink transition-colors duration-300 group-hover:text-orange-dim">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{s.blurb}</p>
                <Link
                  to="/services"
                  hash={s.anchor}
                  className="link-draw mt-5 inline-flex items-center gap-2 text-sm font-semibold text-orange-dim"
                >
                  Explore <ArrowRight className="size-4" aria-hidden="true" />
                  <span className="link-draw-underline" />
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
