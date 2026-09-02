import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logoMark from "@/assets/daCraftLogoLba.png";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/site";
import { btn } from "./primitives";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/industries", label: "Industries" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "border-b border-line bg-cream/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container-editorial flex h-[72px] items-center justify-between gap-6">
        <Link to="/" className="group flex items-center gap-3 leading-none" aria-label="Da Craft Motion — home">
          {/* <img src={logoMark} alt="Da Craft Motion logo" className="h-8 w-8 shrink-0 object-contain md:h-9 md:w-9" /> */}
          <div className="flex flex-col leading-none">
            <span className="font-display text-[0.95rem] font-bold tracking-[0.18em] text-ink md:text-base">
              {SITE.wordmark}
            </span>
            <span className="mt-1 hidden text-[0.6rem] tracking-[0.28em] text-orange-dim sm:block">
              {SITE.tagline.toUpperCase()}
            </span>
          </div>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => {
            const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative text-sm font-medium transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-orange after:transition-transform after:duration-300 hover:after:scale-x-100",
                  active ? "text-orange-dim after:scale-x-100" : "text-ink-soft hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/booking" className={cn(btn.primary, "hidden px-5 py-3 text-xs md:inline-flex")}>
            Book a Free Strategy Call
          </Link>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-sm border border-line text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-menu" className="fixed inset-0 top-[72px] z-40 bg-cream lg:hidden">
          <nav aria-label="Mobile" className="container-editorial flex h-full flex-col gap-1 overflow-y-auto py-8">
            {NAV.map((item) => {
              const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "border-b border-line py-4 font-display text-2xl font-bold",
                    active ? "text-orange-dim" : "text-ink",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link to="/booking" className={cn(btn.primary, "mt-8")}>
              Book a Free Strategy Call
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
