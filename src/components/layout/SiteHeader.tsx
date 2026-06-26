import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${scrolled ? "py-2" : "py-4"}`}
    >
      <div className="container-pro">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className={`flex items-center justify-between rounded-full px-3 pl-5 transition-all duration-700 ${
            scrolled
              ? "border border-border/50 bg-background/80 py-2 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12)] backdrop-blur-2xl backdrop-saturate-150 dark:border-white/8 dark:bg-[#030712]/70 dark:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.04)]"
              : "border border-transparent py-2"
          }`}
        >
          <Link to="/" className="group flex items-center gap-2">
            <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-xl bg-foreground text-background overflow-hidden">
              <span className="absolute inset-0 rounded-xl bg-linear-to-br from-accent to-violet-600 opacity-90" />
              <span className="relative font-display text-lg leading-none text-white">
                N
              </span>
            </span>
            <span className="flex items-baseline gap-1.5">
              <span
                className={`text-[15px] font-semibold tracking-tight transition-colors duration-500 ${scrolled ? "text-foreground dark:text-white" : "text-foreground"}`}
              >
                Global Numedia
              </span>
              <span
                className={`text-[11px] font-medium uppercase tracking-[0.14em] transition-colors duration-500 ${scrolled ? "text-muted-foreground dark:text-white/50" : "text-muted-foreground"}`}
              >
                Digital
              </span>
            </span>
          </Link>

          <nav
            className="hidden items-center gap-0.5 md:flex"
            aria-label="Main navigation"
          >
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className={`relative rounded-full px-3.5 py-1.5 text-sm font-medium transition-all duration-300 ${scrolled ? "text-foreground/70 hover:text-foreground hover:bg-foreground/5 data-[status=active]:bg-foreground/8 data-[status=active]:text-foreground dark:text-white/70 dark:hover:text-white dark:hover:bg-white/6 dark:data-[status=active]:bg-white/8 dark:data-[status=active]:text-white" : "text-ink-soft hover:text-foreground hover:bg-foreground/5 data-[status=active]:bg-foreground/8 data-[status=active]:text-foreground"}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              to="/contact"
              className={`hidden items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 sm:inline-flex ${scrolled ? "bg-foreground text-background hover:opacity-90 dark:bg-white dark:text-[#030712] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]" : "bg-foreground text-background hover:opacity-90"}`}
            >
              Get in touch
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <button
              aria-label="Open menu"
              onClick={() => setOpen((o) => !o)}
              className={`inline-flex h-10 w-10 items-center justify-center rounded-full border md:hidden ${scrolled ? "border-border text-foreground dark:border-white/10 dark:bg-white/5 dark:text-white" : "border-border bg-background text-foreground"}`}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="container-pro mt-3 md:hidden"
          >
            <div className="rounded-3xl border border-border bg-background/95 p-4 shadow-[0_20px_60px_-12px_rgba(0,0,0,0.15)] backdrop-blur-2xl dark:border-white/8 dark:bg-[#030712]/90 dark:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.6)]">
              <nav className="flex flex-col" aria-label="Mobile navigation">
                {nav.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    activeOptions={{ exact: item.to === "/" }}
                    className="rounded-2xl px-4 py-3 text-base font-medium text-foreground/70 hover:bg-foreground/5 hover:text-foreground data-[status=active]:bg-foreground/8 data-[status=active]:text-foreground dark:text-white/70 dark:hover:bg-white/5 dark:hover:text-white dark:data-[status=active]:bg-white/8 dark:data-[status=active]:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-2xl bg-foreground px-4 py-3 text-sm font-semibold text-background dark:bg-white dark:text-[#030712]"
                >
                  Get in touch <ArrowUpRight className="h-4 w-4" />
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
