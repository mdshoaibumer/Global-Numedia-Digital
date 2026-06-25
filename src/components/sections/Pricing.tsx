import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Star, ArrowUpRight, Zap } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";

const plans = [
  {
    name: "Growth",
    desc: "For startups and small businesses ready to build a marketing foundation.",
    price: { monthly: "₹75K", annual: "₹65K" },
    features: [
      "2 marketing channels",
      "Monthly strategy call",
      "Dedicated account manager",
      "Live reporting dashboard",
      "SEO or Paid Media focus",
      "Bi-weekly optimizations",
    ],
    cta: "Start Growing",
    popular: false,
    gradient: "from-slate-500/10 to-slate-400/5",
  },
  {
    name: "Scale",
    desc: "For growing brands needing a full-stack growth team and proven systems.",
    price: { monthly: "₹1.8L", annual: "₹1.5L" },
    features: [
      "4+ marketing channels",
      "Weekly strategy calls",
      "Senior pod (3-4 specialists)",
      "CRO & conversion optimization",
      "Creative production included",
      "Custom attribution model",
      "Quarterly business reviews",
      "Priority support (4hr SLA)",
    ],
    cta: "Scale Faster",
    popular: true,
    gradient: "from-violet-500/15 to-indigo-500/5",
  },
  {
    name: "Enterprise",
    desc: "For market leaders needing a strategic growth partner at board level.",
    price: { monthly: "Custom", annual: "Custom" },
    features: [
      "Unlimited channels",
      "C-suite strategy partnership",
      "Dedicated 5+ person team",
      "AI & automation workflows",
      "Multi-market expansion",
      "Revenue ops integration",
      "Monthly board-ready reports",
      "24/7 support & dedicated Slack",
      "Onsite quarterly workshops",
    ],
    cta: "Talk to Leadership",
    popular: false,
    gradient: "from-amber-500/10 to-orange-500/5",
    badge: "Premium",
  },
];

export function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section
      id="pricing"
      className="relative overflow-hidden border-t border-border bg-background py-24 md:py-32 lg:py-40"
    >
      <div className="container-pro">
        <Reveal>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              <Zap className="h-3 w-3" /> Pricing
            </div>
            <h2 className="mt-5 font-display text-[clamp(2.5rem,6vw,4rem)] leading-[1.05] tracking-[-0.02em] text-foreground">
              Transparent pricing,{" "}
              <span className="italic text-accent">no surprises.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] text-muted-foreground">
              Every plan includes live dashboards, dedicated strategists, and a
              money-back guarantee on month one.
            </p>
          </div>
        </Reveal>

        {/* Toggle */}
        <Reveal delay={0.1}>
          <div className="mt-10 flex items-center justify-center gap-4">
            <span
              className={`text-sm font-medium transition-colors ${!annual ? "text-foreground" : "text-muted-foreground"}`}
            >
              Monthly
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              role="switch"
              aria-checked={annual}
              className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors duration-300 ${annual ? "bg-accent" : "bg-border"}`}
              aria-label="Toggle annual billing"
            >
              <motion.span
                className="h-5 w-5 rounded-full bg-white shadow-md"
                animate={{ x: annual ? 24 : 4 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <span
              className={`text-sm font-medium transition-colors ${annual ? "text-foreground" : "text-muted-foreground"}`}
            >
              Annual
              <span className="ml-1.5 inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-600">
                Save 15%
              </span>
            </span>
          </div>
        </Reveal>

        {/* Plans */}
        <StaggerContainer
          className="mt-14 grid gap-6 lg:grid-cols-3"
          staggerDelay={0.1}
        >
          {plans.map((plan) => (
            <StaggerItem key={plan.name}>
              <motion.div
                className={`relative h-full overflow-hidden rounded-3xl border p-8 transition-all duration-500 ${
                  plan.popular
                    ? "border-accent/30 bg-linear-to-b from-accent/5 to-background shadow-[0_20px_60px_-15px_rgba(120,119,198,0.15)]"
                    : "border-border bg-background hover:border-accent/15 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)]"
                }`}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -right-8 top-6 rotate-45 bg-linear-to-r from-violet-500 to-indigo-500 px-10 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                    Most Popular
                  </div>
                )}
                {/* Enterprise badge */}
                {"badge" in plan && !plan.popular && (
                  <div className="absolute right-4 top-4 rounded-full bg-brand-warm/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-warm">
                    {(plan as { badge: string }).badge}
                  </div>
                )}

                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${plan.gradient} opacity-50`}
                />

                <div className="relative">
                  <h3 className="font-display text-2xl text-foreground">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                    {plan.desc}
                  </p>

                  {/* Price */}
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="font-display text-[clamp(2.5rem,5vw,3.5rem)] tracking-tight text-foreground">
                      {annual ? plan.price.annual : plan.price.monthly}
                    </span>
                    {plan.price.monthly !== "Custom" && (
                      <span className="text-sm text-muted-foreground">
                        /month
                      </span>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="mt-8 space-y-3 border-t border-border pt-8">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-3 text-[14px] text-foreground/80"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    to="/contact"
                    className={`mt-8 flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 text-sm font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-linear-to-r from-violet-500 to-indigo-500 text-white shadow-[0_8px_24px_-6px_rgba(120,119,198,0.4)] hover:shadow-[0_12px_32px_-6px_rgba(120,119,198,0.5)]"
                        : "border border-border bg-surface text-foreground hover:border-accent/30 hover:bg-accent/5"
                    }`}
                  >
                    {plan.cta}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom note */}
        <Reveal delay={0.3}>
          <p className="mt-12 text-center text-sm text-muted-foreground">
            All plans include: NDA protection · 30-day money-back guarantee · No
            long-term lock-in · Cancel anytime
          </p>
        </Reveal>
      </div>
    </section>
  );
}
