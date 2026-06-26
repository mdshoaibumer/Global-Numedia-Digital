import { Link } from "@tanstack/react-router";
import { Mail, Phone, MessageCircle, MapPin, ArrowUpRight } from "lucide-react";
import { COMPANY } from "@/lib/constants";

const cols = [
  {
    title: "Services",
    links: [
      { to: "/services/content-marketing", label: "Content Marketing" },
      { to: "/services/app-development", label: "App Development" },
      { to: "/services/seo", label: "SEO" },
      { to: "/services/ppc", label: "PPC Management" },
      { to: "/services/social-media", label: "Social Media" },
      { to: "/services", label: "All services" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/services", label: "Services" },
      { to: "/contact", label: "Contact" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="sticky bottom-0 z-0 overflow-hidden bg-[#030712] text-white">
      {/* Premium background effects */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-120 w-180 -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(120,119,198,0.6) 0%, transparent 70%)",
        }}
      />
      <div className="container-pro relative">
        <div className="grid gap-14 py-20 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo.jpeg" alt="Global Numedia Logo" className="h-9 w-9 rounded-full bg-white object-cover p-[2px]" />
              <span className="text-base font-semibold tracking-tight">
                Global Numedia
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-white/60">
              Your digital growth partner — offering web development, SEO,
              social media marketing, PPC, design and business coaching.
            </p>
            <div className="mt-6 space-y-3 text-sm text-white/70">
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 text-violet-400" /> {COMPANY.email}
              </a>
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4 text-violet-400" /> {COMPANY.phone}
              </a>
              <a
                href={COMPANY.whatsapp}
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <MessageCircle className="h-4 w-4 text-emerald-400" /> WhatsApp
                us
              </a>
              <div className="flex items-center gap-3 text-white/50">
                <MapPin className="h-4 w-4 text-violet-400" />{" "}
                {COMPANY.locations}
              </div>
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <div className="text-xs font-medium uppercase tracking-[0.18em] text-white/50">
                {col.title}
              </div>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-[15px] text-white/80 transition hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-6 border-t border-white/6 py-8 md:flex-row md:items-center">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Global Numedia Digital. All rights
            reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/50">
            <a href="#" className="transition-colors hover:text-white">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Terms
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Cookies
            </a>
            <Link
              to="/contact"
              className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-linear-to-r from-violet-500 to-indigo-500 px-4 py-2 font-medium text-white shadow-[0_8px_24px_-6px_rgba(120,119,198,0.4)] transition-all hover:shadow-[0_12px_32px_-6px_rgba(120,119,198,0.5)]"
            >
              Start a project <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
