import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pb-20 pt-36 md:pb-28 md:pt-44">
      <div className="absolute inset-0 grid-bg" />
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-130 w-205 -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 65%)" }}
      />
      <div className="container-pro relative">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3.5 py-1.5 text-xs font-medium tracking-wide text-ink-soft backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 animate-pulse-glow rounded-full bg-accent" />
            {eyebrow}
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.02] tracking-tight text-foreground text-balance md:text-7xl lg:text-[88px]">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-ink-soft md:text-xl">
            {description}
          </p>
        </Reveal>
        {children && <Reveal delay={0.22}>{children}</Reveal>}
      </div>
    </section>
  );
}

export function CTAStrip() {
  return (
    <section className="container-pro py-20 md:py-28">
      <div className="relative overflow-hidden rounded-4xl bg-[#06101f] px-6 py-16 text-white md:px-16 md:py-24">
        <div className="absolute inset-0 dot-bg opacity-50" />
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-100 w-100 rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, #3b82f6, transparent 70%)" }}
        />
        <div
          className="pointer-events-none absolute -bottom-40 -left-20 h-100 w-100 rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, #10b981, transparent 70%)" }}
        />
        <div className="relative grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white/70">
              Let's grow
            </div>
            <h2 className="mt-5 max-w-2xl font-display text-4xl leading-tight md:text-6xl">
              Ready to turn marketing into measurable revenue?
            </h2>
            <p className="mt-4 max-w-xl text-white/70 md:text-lg">
              Book a free 30-minute strategy call. We'll audit your funnel, find the leaks, and map a 90-day growth plan.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Link to="/contact" className="group inline-flex items-center justify-between gap-3 rounded-2xl bg-white px-6 py-5 text-[#06101f] transition hover:opacity-95">
              <span>
                <span className="block text-[11px] uppercase tracking-[0.16em] text-[#06101f]/60">Step 1</span>
                <span className="mt-0.5 block text-base font-semibold">Book free strategy call</span>
              </span>
              <ArrowUpRight className="h-5 w-5 transition group-hover:rotate-45" />
            </Link>
            <a href="https://wa.me/15551234567" className="group inline-flex items-center justify-between gap-3 rounded-2xl border border-white/15 bg-white/5 px-6 py-5 backdrop-blur transition hover:bg-white/10">
              <span>
                <span className="block text-[11px] uppercase tracking-[0.16em] text-white/60">Or chat now</span>
                <span className="mt-0.5 block text-base font-semibold">WhatsApp our team</span>
              </span>
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PrimaryButton({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link to={to} className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition hover:opacity-90">
      {children}
      <motion.span whileHover={{ x: 2 }}>
        <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
      </motion.span>
    </Link>
  );
}
