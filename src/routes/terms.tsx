import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use | Da Craft Motion" },
      {
        name: "description",
        content: "Terms covering use of the Da Craft Motion website, quotes, usage rights and payment.",
      },
      { property: "og:title", content: "Terms of Use | Da Craft Motion" },
      { property: "og:description", content: "The terms that govern our work and this website." },
    ],
  }),
  component: Terms,
});

function Terms() {
  return (
    <section className="bg-cream pt-[72px]">
      <div className="container-editorial max-w-3xl py-16 md:py-24">
        <h1 className="display-lg text-ink">Terms of Use</h1>
        <p className="mt-4 text-sm text-ink-soft">Last updated: 1 January 2026</p>

        <div className="mt-10 space-y-8 text-base leading-relaxed text-ink-soft">
          <section>
            <h2 className="font-display text-xl font-bold text-ink">Using this site</h2>
            <p className="mt-3">
              Content on this website is provided for information about {SITE.name}'s services.
              Portfolio imagery is illustrative and produced for demonstration purposes.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-ink">Intellectual property</h2>
            <p className="mt-3">
              All photography, film, design and copy on this site belongs to {SITE.name} or its
              clients. Do not reproduce it without written permission.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-ink">Quotes and scope</h2>
            <p className="mt-3">
              Estimates are valid for thirty days. Work begins once a written scope is approved and
              the agreed advance is received; changes to scope may affect timeline and cost.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-ink">Usage rights</h2>
            <p className="mt-3">
              Delivered assets are licensed for the channels agreed in the scope. Extended or
              broadcast usage can be licensed separately.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-ink">Contact</h2>
            <p className="mt-3">
              Questions about these terms:{" "}
              <a href={`mailto:${SITE.email}`} className="text-orange-dim underline underline-offset-2">
                {SITE.email}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
