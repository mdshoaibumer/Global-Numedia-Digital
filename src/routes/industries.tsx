import { createFileRoute } from "@tanstack/react-router";
import {
  Stethoscope,
  Home,
  UtensilsCrossed,
  GraduationCap,
  ShoppingBag,
  Hotel,
  Building2,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { PageHero, CTAStrip } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/Reveal";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Global Numedia" },
      {
        name: "description",
        content:
          "Specialized growth programs for healthcare, real estate, restaurants, education, e-commerce, hospitality and local businesses.",
      },
      { property: "og:title", content: "Industries we serve — Global Numedia" },
      {
        property: "og:description",
        content:
          "Healthcare, real estate, restaurants, education, e-commerce, hospitality and local.",
      },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: Industries,
});

const items = [
  {
    icon: Stethoscope,
    name: "Healthcare",
    desc: "HIPAA-aware lead gen, multi-location SEO, brand trust building.",
    stat: "+248% qualified patient inquiries",
  },
  {
    icon: Home,
    name: "Real Estate",
    desc: "Listing-to-lead funnels, IDX-friendly sites, agent attribution.",
    stat: "5.8x ROAS on paid search",
  },
  {
    icon: UtensilsCrossed,
    name: "Restaurants",
    desc: "Local SEO, reservations, delivery and loyalty programs.",
    stat: "+184% direct reservations",
  },
  {
    icon: GraduationCap,
    name: "Education",
    desc: "Enrollment marketing, paid social, lifecycle nurturing.",
    stat: "-42% cost per enrollment",
  },
  {
    icon: ShoppingBag,
    name: "E-commerce",
    desc: "Shopping feeds, Meta creative testing, lifecycle revenue.",
    stat: "+312% Meta-attributed revenue",
  },
  {
    icon: Hotel,
    name: "Hospitality",
    desc: "Direct booking funnels, brand storytelling, loyalty drips.",
    stat: "+74% direct bookings",
  },
  {
    icon: Building2,
    name: "Local Businesses",
    desc: "Map pack, reviews, GBP and conversion-grade microsites.",
    stat: "+3.2x weekly inbound calls",
  },
];

function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={
          <>
            Built for the verticals where{" "}
            <span className="italic">growth gets hard</span>.
          </>
        }
        description="We pick verticals where we can win. Specialized playbooks, benchmarks and creative libraries for the businesses we know best."
      />

      <section className="container-pro pb-24">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((i, idx) => (
            <Reveal key={i.name} delay={idx * 0.04}>
              <div className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 transition hover:border-foreground/20 hover:shadow-soft">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-foreground text-background">
                  <i.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-2xl">{i.name}</h3>
                <p className="mt-2 flex-1 text-[15px] text-ink-soft">
                  {i.desc}
                </p>
                <div className="mt-6 rounded-2xl bg-surface px-4 py-3 text-sm font-medium text-foreground">
                  {i.stat}
                </div>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-medium"
                >
                  Talk to a specialist{" "}
                  <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
