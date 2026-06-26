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
          className="flex items-center justify-between rounded-full border border-slate-200/60 bg-white/90 px-3 pl-5 py-2 shadow-sm backdrop-blur-xl transition-all duration-700"
        >
          <Link to="/" className="group flex items-center gap-2">
            <img src="/logo.jpeg" alt="Global Numedia Logo" className="h-8 w-auto rounded-md object-contain" />
            <span className="flex items-baseline gap-1.5">
              <span className="text-[15px] font-semibold tracking-tight text-slate-900 transition-colors duration-500">
                Global Numedia
              </span>
              <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-slate-500 transition-colors duration-500">
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
                className="relative rounded-full px-3.5 py-1.5 text-sm font-medium text-slate-600 transition-all duration-300 hover:bg-slate-100 hover:text-slate-900 data-[status=active]:bg-slate-100 data-[status=active]:text-slate-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="[&>button]:!border-slate-200 [&>button]:!bg-white [&>button]:!text-slate-700 hover:[&>button]:!bg-slate-100">
              <ThemeToggle />
            </div>
            <Link
              to="/contact"
              className="hidden items-center gap-1.5 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-slate-800 sm:inline-flex"
            >
              Get in touch
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <button
              aria-label="Open menu"
              onClick={() => setOpen((o) => !o)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 md:hidden hover:bg-slate-50"
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
            <div className="rounded-3xl border border-slate-200/60 bg-white/95 p-4 shadow-xl backdrop-blur-2xl">
              <nav className="flex flex-col" aria-label="Mobile navigation">
                {nav.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    activeOptions={{ exact: item.to === "/" }}
                    className="rounded-2xl px-4 py-3 text-base font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 data-[status=active]:bg-slate-100 data-[status=active]:text-slate-900"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition-colors"
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
