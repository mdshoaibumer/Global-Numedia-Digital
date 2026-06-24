import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero, CTAStrip } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/Reveal";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Insights — Global Numedia" },
      { name: "description", content: "Frameworks, playbooks and field reports from a senior growth team — without the agency fluff." },
      { property: "og:title", content: "Insights — Global Numedia" },
      { property: "og:description", content: "Frameworks and playbooks from a senior growth team." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

const posts = [
  { tag: "Paid media", title: "The PMax playbook we run for every e-commerce client.", read: "9 min", date: "Apr 14, 2025" },
  { tag: "SEO", title: "Why topical authority beats keyword volume in 2025.", read: "7 min", date: "Apr 02, 2025" },
  { tag: "Brand", title: "Building a visual identity that earns pricing power.", read: "11 min", date: "Mar 21, 2025" },
  { tag: "CRO", title: "12 landing page audits that found $4M in lost revenue.", read: "13 min", date: "Mar 08, 2025" },
  { tag: "AI", title: "Where we let AI ship and where we don't.", read: "6 min", date: "Feb 24, 2025" },
  { tag: "Operations", title: "Inside a 90-day growth sprint at Global Numedia.", read: "10 min", date: "Feb 09, 2025" },
];

function Blog() {
  const [featured, ...rest] = posts;
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={<>Field notes from a <span className="italic">senior growth team.</span></>}
        description="Playbooks, frameworks and teardown reports — published when we have something worth saying."
      />

      <section className="container-pro pb-12">
        <Reveal>
          <Link to="/blog" className="group relative block overflow-hidden rounded-3xl border border-border bg-card p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
              <div className="relative h-56 overflow-hidden rounded-2xl bg-gradient-to-br from-[#06101f] via-[#102A43] to-[#3b82f6] lg:h-full">
                <div className="absolute inset-0 dot-bg opacity-40" />
                <div className="absolute bottom-5 left-5 text-xs font-medium uppercase tracking-[0.18em] text-white/70">Featured</div>
              </div>
              <div>
                <div className="text-xs font-medium uppercase tracking-[0.18em] text-accent">{featured.tag}</div>
                <h3 className="mt-3 font-display text-3xl leading-tight md:text-5xl">{featured.title}</h3>
                <div className="mt-6 flex items-center gap-4 text-sm text-ink-soft">
                  <span>{featured.date}</span><span>·</span><span>{featured.read} read</span>
                </div>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium">
                  Read article <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
                </span>
              </div>
            </div>
          </Link>
        </Reveal>
      </section>

      <section className="container-pro pb-24">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <Link to="/blog" className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 transition hover:border-foreground/20">
                <div className="text-xs font-medium uppercase tracking-[0.18em] text-accent">{p.tag}</div>
                <h3 className="mt-4 flex-1 font-display text-2xl leading-snug">{p.title}</h3>
                <div className="mt-6 flex items-center justify-between text-sm text-ink-soft">
                  <span>{p.date} · {p.read}</span>
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
