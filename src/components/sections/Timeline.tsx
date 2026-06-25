import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { timeline } from "./data";

export function Timeline() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
      <div className="container-pro">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            <Calendar className="h-3 w-3" /> Journey
          </div>
          <h2 className="mt-5 max-w-3xl font-display text-[clamp(2.25rem,5vw,3.25rem)] leading-[1.1] tracking-[-0.02em]">
            Twelve years of{" "}
            <span className="italic text-accent">compounding results.</span>
          </h2>
        </Reveal>
        <StaggerContainer
          className="mt-14 grid gap-1 overflow-hidden rounded-[28px] border border-border bg-border md:grid-cols-5"
          staggerDelay={0.1}
        >
          {timeline.map((t) => (
            <StaggerItem key={t.year}>
              <motion.div
                className="group relative h-full bg-background p-7 transition-colors duration-300 hover:bg-accent/3"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1.5 text-[11px] font-bold text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                  <Calendar className="h-3 w-3" />
                  {t.year}
                </div>
                <div className="mt-5 font-display text-xl text-foreground leading-snug">
                  {t.title}
                </div>
                <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
                  {t.desc}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
