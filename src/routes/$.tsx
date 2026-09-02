import { createFileRoute, Link } from "@tanstack/react-router";
import { btn } from "@/components/site/primitives";

export const Route = createFileRoute("/$")({
  head: () => ({
    meta: [
      { title: "Page Not Found | Da Craft Motion" },
      { name: "robots", content: "noindex" },
      { name: "description", content: "This page doesn't exist. Head back to the Da Craft Motion home page." },
      { property: "og:title", content: "Page Not Found | Da Craft Motion" },
      { property: "og:description", content: "This page doesn't exist." },
    ],
  }),
  component: NotFound,
});

function NotFound() {
  return (
    <section className="grid min-h-screen place-items-center bg-cream pt-[72px]">
      <div className="container-editorial max-w-xl text-center">
        <p className="eyebrow">404</p>
        <h1 className="display-lg mt-4 text-ink">This frame doesn't exist</h1>
        <p className="lede mt-5">
          The page you're after has moved or was never shot. Let's get you back to the work.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link to="/" className={btn.primary}>
            Back home
          </Link>
          <Link to="/portfolio" className={btn.outline}>
            See the portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
