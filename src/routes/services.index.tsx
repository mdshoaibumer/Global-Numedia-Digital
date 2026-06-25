import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Search,
  Target,
  Megaphone,
  Globe,
  Zap,
  Workflow,
  MessageCircle,
  Mail,
  LineChart,
  BarChart3,
  Brain,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { PageHero, CTAStrip } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/Reveal";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Global Numedia" },
      {
        name: "description",
        content:
          "SEO, paid media, web, branding, automation and AI marketing. A full-stack growth team on demand.",
      },
      { property: "og:title", content: "Services — Global Numedia" },
      {
        property: "og:description",
        content:
          "Full-stack growth services across SEO, paid media, brand and lifecycle.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const services = [
  {
    icon: Search,
    title: "Search Engine Optimization",
    desc: "Rank for high-intent terms that drive pipeline.",
    to: "/services/seo",
  },
  {
    icon: MapPin,
    title: "Local SEO",
    desc: "Own the map pack in every market you serve.",
    to: "/services/seo",
  },
  {
    icon: Target,
    title: "Google Ads Management",
    desc: "Search, shopping and PMax that prints ROAS.",
    to: "/services/google-ads",
  },
  {
    icon: Megaphone,
    title: "Meta Ads Management",
    desc: "Creative-led paid social, scaled cleanly.",
    to: "/services/social-media",
  },
  {
    icon: Zap,
    title: "Social Media Marketing",
    desc: "Organic systems that compound brand demand.",
    to: "/services/social-media",
  },
  {
    icon: Globe,
    title: "Website Design & Development",
    desc: "Sites that convert, not just look pretty.",
    to: "/services/web-development",
  },
  {
    icon: Zap,
    title: "Branding & Identity Design",
    desc: "Brands that earn premium pricing.",
    to: "/services/branding",
  },
  {
    icon: Workflow,
    title: "Marketing Automation",
    desc: "Lifecycle journeys, scoring, revenue ops.",
    to: "/services",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Marketing",
    desc: "Conversational funnels with 90%+ open rates.",
    to: "/services",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    desc: "Flows and broadcasts that print revenue.",
    to: "/services",
  },
  {
    icon: LineChart,
    title: "Conversion Rate Optimization",
    desc: "Turn the traffic you already have into customers.",
    to: "/services",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    desc: "Clean attribution, live dashboards, weekly reviews.",
    to: "/services",
  },
  {
    icon: Brain,
    title: "AI Marketing Solutions",
    desc: "Agents and workflows that compress execution.",
    to: "/services",
  },
];

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Every channel that
            <br />
            <span className="italic">moves your number.</span>
          </>
        }
        description="One senior team, every lever. We plug into your business, take ownership of growth, and report straight to the P&L."
      />
      <section className="container-pro pb-20">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.03}>
              <Link
                to={s.to}
                className="group relative block h-full overflow-hidden rounded-3xl border border-border bg-card p-7 transition hover:border-foreground/20 hover:shadow-elevated"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-foreground text-background">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-xl">{s.title}</h3>
                <p className="mt-2 text-[15px] text-ink-soft">{s.desc}</p>
                <div className="mt-6 inline-flex items-center gap-1 text-sm font-medium">
                  Learn more{" "}
                  <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <CTAStrip />
    </>
  );
}
