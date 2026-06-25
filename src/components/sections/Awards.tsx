import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { awards } from "./data";

export function AwardsSection() {
  return (
    <section className="border-y border-border bg-surface py-24 md:py-28">
      <div className="container-pro">
        <div className="grid items-end gap-8 md:grid-cols-2">
          <Reveal>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                <Trophy className="h-3 w-3" /> Recognition
              </div>
              <h2 className="mt-5 font-display text-[clamp(2.25rem,5vw,3.25rem)] leading-[1.1] tracking-[-0.02em]">
                Awarded by the industry that{" "}
                <span className="italic text-accent">knows the work.</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[15px] leading-relaxed text-ink-soft md:text-base">
              Eleven major awards across performance, brand and search in the
              last 36 months.
            </p>
          </Reveal>
        </div>
        <StaggerContainer
          className="mt-12 divide-y divide-border overflow-hidden rounded-[28px] border border-border bg-background"
          staggerDelay={0.06}
        >
          {awards.map((a) => (
            <StaggerItem key={a.title}>
              <motion.div
                className="group flex flex-wrap items-center justify-between gap-4 px-7 py-6 transition-all duration-300 hover:bg-accent/2 md:px-8"
                whileHover={{ x: 4 }}
              >
                <div className="flex items-center gap-5">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-amber-100 to-amber-50 text-amber-600 transition-all duration-300 group-hover:shadow-[0_8px_20px_-6px_rgba(245,158,11,0.3)]">
                    <Trophy className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-display text-lg text-foreground md:text-xl">
                      {a.title}
                    </div>
                    <div className="mt-0.5 text-xs text-muted-foreground">
                      {a.org}
                    </div>
                  </div>
                </div>
                <div className="font-display text-2xl text-muted-foreground/50 transition-colors group-hover:text-accent">
                  {a.year}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
