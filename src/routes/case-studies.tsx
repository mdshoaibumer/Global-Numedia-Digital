import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero, CTAStrip } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/Reveal";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Global Numedia" },
      { name: "description", content: "Real outcomes from real engagements. Pipeline, revenue and ROAS across healthcare, real estate, hospitality, e-commerce and more." },
      { property: "og:title", content: "Case Studies — Global Numedia" },
      { property: "og:description", content: "Compounding wins for category leaders." },
      { property: "og:url", content: "/case-studies" },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
  }),
  component: Cases,
});

const cases = [
  { brand: "Helio Dental", industry: "Healthcare", headline: "Tripled qualified patient inquiries in 9 months.", metrics: [["+312%", "leads"], ["-38%", "CAC"], ["6", "new locations launched"]], quote: "They feel like an internal team, not a vendor.", who: "Priya Shah, CMO" },
  { brand: "Atrium Realty", industry: "Real Estate", headline: "5.8x return on ad spend across 12 markets.", metrics: [["5.8x", "ROAS"], ["+186%", "showings"], ["$8.2M", "GCI attributed"]], quote: "Every dollar tracked back to pipeline.", who: "Daniel Okafor, Founder" },
  { brand: "Maison Noir", industry: "Hospitality", headline: "Direct bookings overtook OTAs in two quarters.", metrics: [["+184%", "direct bookings"], ["-26%", "commission paid"], ["4.9", "avg. guest rating"]], quote: "Beautiful brand work and serious performance chops.", who: "Lena Park, VP Marketing" },
  { brand: "Northway SaaS", industry: "B2B SaaS", headline: "Pipeline up 4x without raising spend.", metrics: [["4.0x", "pipeline"], ["+248%", "organic traffic"], ["$2.1M", "ARR sourced"]], quote: "The most strategic agency we've ever hired.", who: "Sam Rivera, Head of Growth" },
  { brand: "Forge Coffee", industry: "Retail", headline: "From single store to 14 locations in 18 months.", metrics: [["14", "stores opened"], ["+312%", "loyalty members"], ["4.8", "Google rating"]], quote: "Global Numedia is part of our growth team.", who: "Mike Chen, COO" },
  { brand: "Orbit Studio", industry: "Education", headline: "Cost per enrollment cut by 42% in one cohort.", metrics: [["-42%", "CPE"], ["+88%", "applications"], ["2x", "course completions"]], quote: "Senior, sharp, and impossible to replace.", who: "Aisha Khan, Director" },
];

function Cases() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title={<>Real outcomes from <span className="italic">real engagements.</span></>}
        description="A small selection of the work we're proud of — across healthcare, real estate, hospitality, SaaS, retail and education."
      />

      <section className="container-pro pb-24 space-y-6">
        {cases.map((c, i) => (
          <Reveal key={c.brand} delay={i * 0.05}>
            <article className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition hover:border-foreground/20 hover:shadow-soft md:p-12">
              <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
                <div>
                  <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    <span>{c.industry}</span><span>·</span><span className="text-foreground">{c.brand}</span>
                  </div>
                  <h3 className="mt-4 max-w-xl font-display text-3xl leading-tight md:text-5xl">{c.headline}</h3>
                  <blockquote className="mt-8 max-w-xl border-l-2 border-accent pl-5 text-[15px] italic text-ink-soft">
                    "{c.quote}"
                    <footer className="mt-2 not-italic text-sm text-muted-foreground">— {c.who}</footer>
                  </blockquote>
                </div>
                <div className="grid grid-cols-3 gap-2 self-start md:gap-3">
                  {c.metrics.map(([v, l]) => (
                    <div key={l} className="rounded-2xl bg-surface p-4">
                      <div className="font-display text-2xl md:text-3xl">{v}</div>
                      <div className="mt-1 text-xs text-ink-soft">{l}</div>
                    </div>
                  ))}
                </div>
              </div>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium">
                Get a similar result <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
              </Link>
            </article>
          </Reveal>
        ))}
      </section>

      <CTAStrip />
    </>
  );
}
