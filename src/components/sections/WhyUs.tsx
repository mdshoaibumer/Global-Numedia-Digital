import { motion } from "framer-motion";
import { BarChart3, ShieldCheck, Star, Workflow, Crown } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export function WhyUs() {
  const items = [
    {
      icon: BarChart3,
      title: "Results-focused approach",
      desc: "We track what matters — your growth. Every project has clear goals and measurable outcomes.",
      stat: "Clear",
      statLabel: "goals",
    },
    {
      icon: ShieldCheck,
      title: "Transparent communication",
      desc: "Regular updates, honest feedback and no surprises. You always know where your project stands.",
      stat: "Always",
      statLabel: "in the loop",
    },
    {
      icon: Star,
      title: "Experienced team",
      desc: "Skilled professionals across web development, design, marketing and coaching — dedicated to your success.",
      stat: "Expert",
      statLabel: "team",
    },
    {
      icon: Workflow,
      title: "End-to-end solutions",
      desc: "From strategy to execution — websites, marketing, design and coaching all under one roof.",
      stat: "Full",
      statLabel: "service",
    },
  ];
  return (
    <section className="relative overflow-hidden bg-[#030712] py-24 text-white md:py-32 lg:py-40">
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute left-0 top-0 hidden h-[500px] w-[500px] rounded-full md:block"
          style={{ background: "radial-gradient(circle, rgba(120, 119, 198, 0.06) 0%, transparent 70%)" }}
        />
      </div>
      <div
        className="absolute inset-0 opacity-[0.02]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 20%, rgba(200,170,100,0.4) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(120,119,198,0.3) 0%, transparent 50%)",
        }}
      />
      <div className="container-pro relative">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-violet-400">
            <Crown className="h-3 w-3" /> Why Global Numedia
          </div>
          <h2 className="mt-5 max-w-4xl font-display text-[clamp(2.5rem,6vw,4rem)] leading-[1.05] tracking-[-0.02em]">
            Why businesses choose{" "}
            <span className="bg-linear-to-r from-violet-400 to-indigo-300 bg-clip-text italic text-transparent">
              us.
            </span>
          </h2>
        </Reveal>
        <StaggerContainer
          className="mt-14 grid gap-5 md:grid-cols-2"
          staggerDelay={0.1}
        >
          {items.map((it) => (
            <StaggerItem key={it.title}>
              <SpotlightCard
                className="h-full rounded-3xl"
                spotlightColor="rgba(120,119,198,0.06)"
                borderColor="rgba(120,119,198,0.1)"
              >
                <motion.div
                  className="group relative h-full overflow-hidden rounded-3xl ring-1 ring-white/8 bg-white/2 p-8 backdrop-blur-sm transition-all duration-500 hover:ring-violet-500/30 hover:bg-white/4"
                  whileHover={{ y: -4 }}
                >
                  <div className="absolute inset-0 bg-linear-to-br from-violet-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative flex h-full flex-col">
                    <div className="flex items-start justify-between">
                      <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-violet-500/20 to-indigo-500/10 text-violet-400 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(120,119,198,0.2)]">
                        <it.icon className="h-6 w-6" />
                      </div>
                      <div className="text-right">
                        <div className="font-display text-2xl text-white/90">
                          {it.stat}
                        </div>
                        <div className="text-[11px] text-white/60">
                          {it.statLabel}
                        </div>
                      </div>
                    </div>
                    <h3 className="mt-6 font-display text-[1.5rem] text-white">
                      {it.title}
                    </h3>
                    <p className="mt-3 flex-1 text-[15px] leading-[1.7] text-white/60">
                      {it.desc}
                    </p>
                  </div>
                </motion.div>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Named Methodology — Brand Differentiator */}
        <Reveal>
          <div className="mt-20 rounded-3xl ring-1 ring-white/8 bg-white/2 p-10 md:p-14 backdrop-blur-sm">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-14">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-400">
                  Our Framework
                </div>
                <h3 className="mt-4 font-display text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.1] text-white">
                  The R.O.A.S. Method™
                </h3>
                <p className="mt-3 max-w-lg text-[15px] leading-[1.7] text-white/60">
                  Every engagement follows our proprietary 4-phase system that
                  has generated ₹680 Cr+ in measurable client revenue.
                </p>
              </div>
              <div className="grid flex-1 grid-cols-2 gap-4">
                {[
                  {
                    letter: "R",
                    name: "Research",
                    desc: "Deep-dive audit & competitor intelligence",
                  },
                  {
                    letter: "O",
                    name: "Optimize",
                    desc: "Fix foundations, build conversion architecture",
                  },
                  {
                    letter: "A",
                    name: "Accelerate",
                    desc: "Scale channels with data-backed spend",
                  },
                  {
                    letter: "S",
                    name: "Sustain",
                    desc: "Compound gains with retention & LTV loops",
                  },
                ].map((step) => (
                  <div
                    key={step.letter}
                    className="rounded-2xl ring-1 ring-white/6 bg-white/3 p-5 transition-colors hover:ring-amber-400/20"
                  >
                    <div className="font-display text-2xl text-amber-400">
                      {step.letter}
                    </div>
                    <div className="mt-1 text-sm font-semibold text-white">
                      {step.name}
                    </div>
                    <div className="mt-1 text-xs text-white/50">
                      {step.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
