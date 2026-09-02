import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Da Craft Motion" },
      {
        name: "description",
        content: "How Da Craft Motion handles enquiries, analytics cookies and client material.",
      },
      { property: "og:title", content: "Privacy Policy | Da Craft Motion" },
      { property: "og:description", content: "Our approach to data and privacy." },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <section className="bg-cream pt-[72px]">
      <div className="container-editorial max-w-3xl py-16 md:py-24">
        <h1 className="display-lg text-ink">Privacy Policy</h1>
        <p className="mt-4 text-sm text-ink-soft">Last updated: 1 January 2026</p>

        <div className="mt-10 space-y-8 text-base leading-relaxed text-ink-soft">
          <section>
            <h2 className="font-display text-xl font-bold text-ink">What we collect</h2>
            <p className="mt-3">
              When you submit an enquiry we collect the name, email, phone number and project
              details you choose to share. This website is a static site and does not create
              accounts or store payment information.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-ink">How we use it</h2>
            <p className="mt-3">
              Solely to respond to your enquiry, prepare a proposal and deliver work you commission.
              We do not sell or rent your details to anyone.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-ink">Cookies</h2>
            <p className="mt-3">
              We use a small number of cookies to remember your cookie preference and to understand
              aggregate site usage. You can clear them at any time in your browser.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-ink">Client material</h2>
            <p className="mt-3">
              Footage, images and brand assets shared with us stay confidential and are published
              only with your written permission.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-ink">Your rights</h2>
            <p className="mt-3">
              Write to{" "}
              <a href={`mailto:${SITE.email}`} className="text-orange-dim underline underline-offset-2">
                {SITE.email}
              </a>{" "}
              to access, correct or delete the information we hold about you.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
