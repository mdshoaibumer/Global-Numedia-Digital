import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Compass, Heart, Sparkles, Users, ShieldCheck, Trophy } from "lucide-react";
import { PageHero, CTAStrip } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Global Numedia" },
      { name: "description", content: "We're a senior growth team obsessed with one thing: turning marketing into measurable revenue for ambitious businesses." },
      { property: "og:title", content: "About — Global Numedia" },
      { property: "og:description", content: "A senior growth team behind 180+ ambitious brands." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  { icon: Compass, title: "Outcome over output", desc: "We're hired to move a number, not to fill a content calendar." },
  { icon: Heart, title: "Senior or nothing", desc: "Every account is led by a strategist with 8+ years of experience." },
  { icon: Sparkles, title: "Craft as a competitive edge", desc: "Better creative, better systems, better numbers — every time." },
  { icon: ShieldCheck, title: "Radical transparency", desc: "Live dashboards, weekly stand-ups, no surprises in the report." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Global Numedia"
        title={<>A senior team behind <span className="italic gradient-text">ambitious</span> brands.</>}
        description="We're a remote-first growth agency built by operators, designers and strategists who got tired of agencies optimizing for the wrong things."
      />

      <section className="container-pro py-20">
        <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-4">
          {[
            { v: 180, suffix: "+", label: "Clients served" },
            { v: 47, prefix: "$", suffix: "M+", label: "Revenue generated" },
            { v: 12, suffix: " yrs", label: "Avg. team experience" },
            { v: 94, suffix: "%", label: "Client retention" },
          ].map((s) => (
            <div key={s.label} className="bg-background p-8">
              <div className="font-display text-4xl text-foreground md:text-5xl">
                <Counter to={s.v} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm text-ink-soft">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface py-24 md:py-28">
        <div className="container-pro grid gap-16 lg:grid-cols-2">
          <Reveal>
            <div>
              <div className="text-xs font-medium uppercase tracking-[0.18em] text-accent">Our story</div>
              <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">Built by operators, for operators.</h2>
              <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-ink-soft md:text-base">
                <p>Global Numedia started in 2017 inside a portfolio company. The team had a simple thesis: marketing should be measured in revenue, not in deliverables.</p>
                <p>Seven years later, we've helped 180+ companies grow — from venture-backed startups to multi-location service brands — and generated more than $47M in attributed pipeline.</p>
                <p>We stay small on purpose. Every engagement is led by a senior strategist, supported by a tight pod of specialists. No junior account managers. No deliverable theatre.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative">
              <div className="rounded-3xl border border-border bg-background p-2 shadow-soft">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#06101f] via-[#102A43] to-[#06101f] p-10 text-white">
                  <div className="absolute inset-0 dot-bg opacity-50" />
                  <div className="relative">
                    <Trophy className="h-8 w-8 text-accent" />
                    <div className="mt-8 font-display text-3xl md:text-4xl">"The best agency partnership we've ever had."</div>
                    <div className="mt-6 text-sm text-white/60">— 4.9 average rating across 180+ engagements</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-pro py-24">
        <Reveal>
          <div className="text-xs font-medium uppercase tracking-[0.18em] text-accent">Values</div>
          <h2 className="mt-3 max-w-3xl font-display text-4xl leading-tight md:text-5xl">What we hold ourselves to.</h2>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.05}>
              <div className="h-full rounded-3xl border border-border bg-card p-8">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-foreground text-background">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-2xl">{v.title}</h3>
                <p className="mt-2 text-[15px] text-ink-soft">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
