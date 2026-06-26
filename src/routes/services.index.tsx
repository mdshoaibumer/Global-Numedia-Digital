import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Search,
  Target,
  Megaphone,
  Smartphone,
  FileText,
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
          "Content marketing, app development, SEO, PPC and social media marketing services for growing businesses.",
      },
      { property: "og:title", content: "Services — Global Numedia" },
      {
        property: "og:description",
        content:
          "Digital marketing and development services for growing businesses.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const services = [
  {
    icon: FileText,
    title: "Content Marketing",
    desc: "Strategic content that drives traffic and generates leads.",
    to: "/services/content-marketing",
  },
  {
    icon: Smartphone,
    title: "App Development",
    desc: "Custom mobile and web apps built for your business.",
    to: "/services/app-development",
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    desc: "Rank higher and drive qualified organic traffic.",
    to: "/services/seo",
  },
  {
    icon: Target,
    title: "PPC Management",
    desc: "Paid advertising that delivers measurable ROI.",
    to: "/services/ppc",
  },
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    desc: "Build your brand and engage your audience on social.",
    to: "/services/social-media",
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
