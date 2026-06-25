import { TrendingUp, BarChart3, LineChart, Rocket } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";

export function Results() {
  const stats = [
    {
      v: 312,
      suffix: "%",
      label: "avg. lead growth",
      sub: "across 12-month engagements",
      icon: TrendingUp,
    },
    {
      v: 5.4,
      decimals: 1,
      suffix: "x",
      label: "return on ad spend",
      sub: "blended across paid channels",
      icon: BarChart3,
    },
    {
      v: 680,
      prefix: "₹",
      suffix: " Cr+",
      label: "client revenue",
      sub: "attributed since 2013",
      icon: LineChart,
    },
    {
      v: 248,
      suffix: "%",
      label: "organic traffic lift",
      sub: "median in 9 months",
      icon: Rocket,
    },
  ];
  return (
    <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
      <div className="container-pro">
        <div className="grid items-end gap-8 md:grid-cols-2">
          <Reveal>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-warm/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-warm">
                <TrendingUp className="h-3 w-3" /> Results
              </div>
              <h2 className="mt-5 font-display text-[clamp(2.5rem,6vw,4rem)] leading-[1.05] tracking-[-0.02em]">
                Numbers that{" "}
                <span className="italic text-brand-warm">move boards.</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[15px] leading-relaxed text-ink-soft md:text-base">
              We don't ship reports — we ship revenue. These are the medians
              across our active book of business.
            </p>
          </Reveal>
        </div>
        <StaggerContainer
          className="mt-14 grid gap-1 overflow-hidden rounded-4xl border border-border bg-surface md:grid-cols-2 lg:grid-cols-4"
          staggerDelay={0.1}
        >
          {stats.map((s) => (
            <StaggerItem key={s.label}>
              <div className="group relative bg-background p-8 transition-colors duration-300 hover:bg-accent/3">
                <div className="absolute inset-y-0 right-0 w-px bg-border lg:block" />
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <s.icon className="h-4 w-4" />
                </div>
                <div className="font-display text-[clamp(2.5rem,5vw,3.5rem)] tracking-tight text-foreground">
                  <Counter
                    to={s.v}
                    prefix={s.prefix}
                    suffix={s.suffix}
                    decimals={s.decimals ?? 0}
                  />
                </div>
                <div className="mt-2 text-sm font-semibold text-foreground">
                  {s.label}
                </div>
                <div className="mt-1 text-[13px] text-muted-foreground">
                  {s.sub}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
