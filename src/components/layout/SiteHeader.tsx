import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/case-studies", label: "Case studies" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`}>
      <div className="container-pro">
        <div
          className={`flex items-center justify-between rounded-full px-3 pl-5 transition-all duration-500 ${
            scrolled
              ? "border border-border/80 bg-background/80 py-2 shadow-[0_8px_30px_-12px_rgba(8,17,32,0.15)] backdrop-blur-xl"
              : "border border-transparent py-2"
          }`}
        >
          <Link to="/" className="group flex items-center gap-2">
            <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-xl bg-foreground text-background">
              <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent to-foreground opacity-90" />
              <span className="relative font-display text-lg leading-none">N</span>
            </span>
            <span className="flex items-baseline gap-1.5">
              <span className="text-[15px] font-semibold tracking-tight text-foreground">Global Numedia</span>
              <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">Digital</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="rounded-full px-3.5 py-1.5 text-sm font-medium text-ink-soft transition hover:bg-muted hover:text-foreground data-[status=active]:bg-muted data-[status=active]:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="hidden items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:opacity-90 sm:inline-flex"
            >
              Book strategy call
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <button
              aria-label="Open menu"
              onClick={() => setOpen((o) => !o)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background md:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="container-pro mt-3 md:hidden"
          >
            <div className="rounded-3xl border border-border bg-background/95 p-4 shadow-elevated backdrop-blur-xl">
              <nav className="flex flex-col">
                {nav.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    activeOptions={{ exact: item.to === "/" }}
                    className="rounded-2xl px-4 py-3 text-base font-medium text-ink-soft hover:bg-muted hover:text-foreground data-[status=active]:bg-muted data-[status=active]:text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-2xl bg-foreground px-4 py-3 text-sm font-medium text-background"
                >
                  Book strategy call <ArrowUpRight className="h-4 w-4" />
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
