import type { LucideIcon } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { PageHero, CTAStrip } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/Reveal";

export interface ServicePageProps {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  deliverables: { icon: LucideIcon; title: string; desc: string }[];
  metrics: { value: string; label: string }[];
  faq: { q: string; a: string }[];
}

export function ServicePage(p: ServicePageProps) {
  return (
    <>
      <PageHero eyebrow={p.eyebrow} title={p.title} description={p.description}>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background hover:opacity-90">
            Get a free audit <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
          </Link>
          <a href="https://wa.me/15551234567" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-medium hover:bg-muted">
            <MessageCircle className="h-4 w-4 text-success" /> WhatsApp us
          </a>
        </div>
      </PageHero>

      <section className="container-pro py-20 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
              <div className="text-xs font-medium uppercase tracking-[0.18em] text-accent">What you get</div>
              <h2 className="mt-3 font-display text-3xl leading-tight md:text-4xl">A program designed for compounding returns.</h2>
              <ul className="mt-8 space-y-4">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-[15px] text-foreground">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success/15 text-success">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-3">
              {p.metrics.map((m) => (
                <div key={m.label} className="rounded-3xl border border-border bg-surface p-6">
                  <div className="font-display text-4xl text-foreground">{m.value}</div>
                  <div className="mt-2 text-sm text-ink-soft">{m.label}</div>
                </div>
              ))}
              <div className="col-span-2 rounded-3xl bg-[#06101f] p-6 text-white">
                <div className="text-[11px] uppercase tracking-[0.18em] text-white/55">Engagement</div>
                <div className="mt-2 font-display text-2xl">90-day growth sprints, month-to-month after.</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="container-pro">
          <Reveal>
            <div className="text-xs font-medium uppercase tracking-[0.18em] text-accent">Deliverables</div>
            <h2 className="mt-3 max-w-2xl font-display text-3xl leading-tight md:text-5xl">Everything we ship, every month.</h2>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {p.deliverables.map((d, i) => (
              <Reveal key={d.title} delay={i * 0.05}>
                <div className="h-full rounded-3xl border border-border bg-background p-7">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-foreground text-background">
                    <d.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-display text-xl">{d.title}</h3>
                  <p className="mt-2 text-[15px] text-ink-soft">{d.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-pro py-20 md:py-24">
        <Reveal>
          <h2 className="font-display text-3xl leading-tight md:text-4xl">FAQs</h2>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {p.faq.map((f) => (
            <div key={f.q} className="rounded-2xl border border-border bg-card p-6">
              <div className="font-display text-lg">{f.q}</div>
              <p className="mt-2 text-[15px] text-ink-soft">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
