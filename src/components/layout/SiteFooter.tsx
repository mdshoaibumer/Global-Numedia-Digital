import { Link } from "@tanstack/react-router";
import { Mail, Phone, MessageCircle, MapPin, ArrowUpRight } from "lucide-react";

const cols = [
  {
    title: "Services",
    links: [
      { to: "/services/seo", label: "SEO" },
      { to: "/services/google-ads", label: "Google Ads" },
      { to: "/services/social-media", label: "Social Media" },
      { to: "/services/web-development", label: "Web Development" },
      { to: "/services/branding", label: "Branding" },
      { to: "/services", label: "All services" },
    ],
  },
  {
    title: "Industries",
    links: [
      { to: "/industries", label: "Healthcare" },
      { to: "/industries", label: "Real Estate" },
      { to: "/industries", label: "Restaurants" },
      { to: "/industries", label: "E-commerce" },
      { to: "/industries", label: "Hospitality" },
      { to: "/industries", label: "Education" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/case-studies", label: "Case studies" },
      { to: "/blog", label: "Insights" },
      { to: "/faq", label: "FAQ" },
      { to: "/contact", label: "Contact" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-[#06101f] text-white">
      <div className="absolute inset-0 dot-bg opacity-50" />
      <div
        className="absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)" }}
      />
      <div className="container-pro relative">
        <div className="grid gap-14 py-20 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#06101f]">
                <span className="font-display text-xl leading-none">N</span>
              </span>
              <span className="text-base font-semibold tracking-tight">Global Numedia</span>
            </Link>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-white/70">
              A senior growth team turning marketing budgets into measurable revenue for ambitious
              brands across the world.
            </p>
            <div className="mt-6 space-y-3 text-sm text-white/80">
              <a href="mailto:hello@Global Numedia.agency" className="flex items-center gap-3 hover:text-white">
                <Mail className="h-4 w-4 text-accent" /> hello@Global Numedia.agency
              </a>
              <a href="tel:+15551234567" className="flex items-center gap-3 hover:text-white">
                <Phone className="h-4 w-4 text-accent" /> +1 (555) 123-4567
              </a>
              <a href="https://wa.me/15551234567" className="flex items-center gap-3 hover:text-white">
                <MessageCircle className="h-4 w-4 text-accent" /> WhatsApp us
              </a>
              <div className="flex items-center gap-3 text-white/60">
                <MapPin className="h-4 w-4 text-accent" /> Remote-first · New York · Dubai · London
              </div>
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <div className="text-xs font-medium uppercase tracking-[0.18em] text-white/50">{col.title}</div>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-[15px] text-white/80 transition hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-6 border-t border-white/10 py-8 md:flex-row md:items-center">
          <p className="text-sm text-white/55">© {new Date().getFullYear()} Global Numedia Agency. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Cookies</a>
            <Link to="/contact" className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 font-medium text-[#06101f] hover:opacity-90">
              Start a project <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
