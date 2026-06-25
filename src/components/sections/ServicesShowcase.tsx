import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2, Layers } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { services } from "./data";

export function ServicesShowcase() {
  return (
    <section
      id="services"
      className="relative py-24 md:py-32 lg:py-40 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-background via-surface/50 to-background" />
      <div className="container-pro relative">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <Reveal>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                <Layers className="h-3 w-3" /> Services
              </div>
              <h2 className="mt-5 max-w-3xl font-display text-[clamp(2.5rem,6vw,4rem)] leading-[1.05] tracking-[-0.02em] text-foreground">
                A full-stack growth team,{" "}
                <span className="italic text-accent">on demand.</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-pretty text-[15px] leading-relaxed text-ink-soft">
              Plug into senior specialists across every channel your customers
              actually use. One roadmap, one P&L, one accountable team.
            </p>
          </Reveal>
        </div>
        <StaggerContainer
          className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.08}
        >
          {services.map((s) => (
            <StaggerItem key={s.title}>
              <SpotlightCard
                className="h-full rounded-3xl"
                spotlightColor="rgba(120,119,198,0.08)"
                borderColor="rgba(120,119,198,0.12)"
              >
                <Link
                  to={s.to}
                  className={`group relative block h-full overflow-hidden rounded-3xl ring-1 ring-border bg-card p-8 transition-all duration-500 hover:-translate-y-2 hover:ring-accent/25 hover:shadow-elevated`}
                >
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${s.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                  />
                  <div
                    className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-accent/5 transition-all duration-700 group-hover:scale-[2] group-hover:bg-accent/10"
                    aria-hidden="true"
                  />
                  <div className="relative">
                    <motion.div
                      className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-foreground to-secondary text-background shadow-elevated transition-all duration-300 group-hover:scale-110 group-hover:shadow-glow"
                      whileHover={{ rotate: 5 }}
                    >
                      <s.icon className="h-6 w-6" />
                    </motion.div>
                    <h3 className="mt-7 font-display text-[1.6rem] text-foreground">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-[1.7] text-ink-soft">
                      {s.desc}
                    </p>
                    <ul className="mt-6 space-y-2.5 border-t border-border/60 pt-6">
                      {s.deliverables.map((d) => (
                        <li
                          key={d}
                          className="flex items-center gap-2.5 text-[13.5px] text-muted-foreground"
                        >
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                          {d}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
                      Explore service{" "}
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </Link>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
