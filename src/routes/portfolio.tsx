import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { FinalCTA, Reveal } from "@/components/site/primitives";
import { PORTFOLIO_FILTERS, PROJECTS } from "@/data/content";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Selected Work | Da Craft Motion" },
      {
        name: "description",
        content:
          "Campaign photography, brand films, identity systems and social content delivered for brands across Kolkata and India.",
      },
      { property: "og:title", content: "Portfolio | Da Craft Motion" },
      { property: "og:description", content: "Fifteen recent projects and the results behind them." },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  const [filter, setFilter] = useState<string>("All");
  const [openId, setOpenId] = useState<string | null>(null);

  const shown = useMemo(
    () =>
      filter === "All"
        ? PROJECTS
        : PROJECTS.filter((p) => p.tags.includes(filter) || p.category === filter || p.industry === filter),
    [filter],
  );

  const open = PROJECTS.find((p) => p.id === openId) ?? null;

  return (
    <>
      <section className="bg-cream pt-[72px]">
        <div className="container-editorial py-16 md:py-24">
          <Reveal>
            <p className="eyebrow">Portfolio</p>
            <h1 className="display-lg mt-5 max-w-3xl text-ink">Work that had a job to do</h1>
            <p className="lede mt-6 max-w-2xl">
              Filter by discipline or industry. Every case notes the challenge, the approach and
              what actually happened afterwards.
            </p>
          </Reveal>

          <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
            {PORTFOLIO_FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
                className={cn(
                  "rounded-sm border px-4 py-2 text-sm font-medium transition",
                  filter === f
                    ? "border-orange bg-orange text-white"
                    : "border-line text-ink-soft hover:border-orange hover:text-orange-dim",
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-editorial py-16 md:py-20">
          {shown.length === 0 ? (
            <p className="text-sm text-ink-soft">No projects in this category yet.</p>
          ) : (
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {shown.map((p, i) => (
                <Reveal as="li" key={p.id} delay={(i % 6) * 50}>
                  <button
                    type="button"
                    onClick={() => setOpenId(p.id)}
                    className="group block w-full text-left"
                  >
                    <div
                      className={cn(
                        "overflow-hidden rounded-sm bg-sand",
                        p.ratio === "portrait" && "aspect-[4/5]",
                        p.ratio === "landscape" && "aspect-[4/3]",
                        p.ratio === "square" && "aspect-square",
                      )}
                    >
                      <img
                        src={p.image}
                        alt={p.alt}
                        loading="lazy"
                        className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <h2 className="mt-4 font-display text-lg font-bold text-ink">{p.title}</h2>
                    <p className="mt-1 text-sm text-ink-soft">
                      {p.client} · {p.category}
                    </p>
                    {p.stat ? <p className="mt-2 text-xs font-semibold text-orange-dim">{p.stat}</p> : null}
                  </button>
                </Reveal>
              ))}
            </ul>
          )}
        </div>
      </section>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={open.title}
          className="fixed inset-0 z-[60] grid place-items-center bg-ink/60 p-4"
          onClick={() => setOpenId(null)}
        >
          <div
            className="max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-sm bg-white p-6 md:p-9"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-[16/9] overflow-hidden rounded-sm bg-sand">
              <img src={open.image} alt={open.alt} className="size-full object-cover" />
            </div>
            <h2 className="mt-6 font-display text-2xl font-bold text-ink">{open.title}</h2>
            <p className="mt-1 text-sm text-ink-soft">
              {open.client} · {open.industry}
            </p>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink-soft">
              <p>
                <span className="font-semibold text-ink">Challenge. </span>
                {open.challenge}
              </p>
              <p>
                <span className="font-semibold text-ink">Approach. </span>
                {open.approach}
              </p>
              <p>
                <span className="font-semibold text-ink">Result. </span>
                {open.result}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpenId(null)}
              className="mt-7 rounded-sm bg-orange px-5 py-2.5 text-sm font-semibold text-white hover:bg-orange-dim"
            >
              Close
            </button>
          </div>
        </div>
      ) : null}

      <FinalCTA />
    </>
  );
}
