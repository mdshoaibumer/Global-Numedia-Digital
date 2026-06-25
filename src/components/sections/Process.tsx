import { motion } from "framer-motion";
import { Search, Brain, Zap, BarChart3, Rocket, Workflow } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";

const processSteps = [
  {
    step: "01",
    title: "Discover",
    desc: "Deep-dive audit of traffic, conversion, brand and competitive position.",
    icon: Search,
  },
  {
    step: "02",
    title: "Strategy",
    desc: "A 90-day growth plan tied to revenue outcomes, not vanity metrics.",
    icon: Brain,
  },
  {
    step: "03",
    title: "Execute",
    desc: "A senior pod ships campaigns, creative and technical infrastructure.",
    icon: Zap,
  },
  {
    step: "04",
    title: "Optimize",
    desc: "Weekly experiments, live dashboards and CRO sprints compound returns.",
    icon: BarChart3,
  },
  {
    step: "05",
    title: "Scale",
    desc: "Channel mix expands as unit economics prove out across cohorts.",
    icon: Rocket,
  },
];

export function Process() {
  return (
    <section className="relative bg-background py-24 md:py-32 lg:py-40 overflow-hidden">
      <div className="container-pro">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            <Workflow className="h-3 w-3" /> Our process
          </div>
          <h2 className="mt-5 max-w-3xl font-display text-[clamp(2.5rem,6vw,4rem)] leading-[1.05] tracking-[-0.02em]">
            A repeatable system,{" "}
            <span className="italic text-accent">not a one-off campaign.</span>
          </h2>
        </Reveal>
        <div className="relative mt-16">
          <div className="absolute left-7 top-0 hidden h-full w-px bg-linear-to-b from-accent/40 via-accent/20 to-transparent lg:left-0 lg:right-0 lg:top-9 lg:mx-auto lg:h-px lg:w-full lg:bg-linear-to-r lg:block" />
          <StaggerContainer
            className="grid gap-10 lg:grid-cols-5 lg:gap-6"
            staggerDelay={0.12}
          >
            {processSteps.map((p) => (
              <StaggerItem key={p.step}>
                <div className="group relative">
                  <motion.div
                    className="relative z-10 inline-flex h-18 w-18 items-center justify-center rounded-2xl border border-border bg-background text-foreground shadow-soft transition-all duration-300 group-hover:border-accent/40 group-hover:shadow-[0_8px_30px_-8px_rgba(120,119,198,0.25)]"
                    whileHover={{ scale: 1.08, rotate: 3 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p.icon className="h-6 w-6 text-accent" />
                    <span
                      className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-white"
                      aria-label={`Step ${p.step}`}
                    >
                      {p.step}
                    </span>
                  </motion.div>
                  <h3 className="mt-6 font-display text-2xl text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">
                    {p.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
