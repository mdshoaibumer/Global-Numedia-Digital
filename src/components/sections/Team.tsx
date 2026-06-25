import { motion } from "framer-motion";
import { Users2 } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { team } from "./data";

export function Team() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
      <div className="container-pro">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <Reveal>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                <Users2 className="h-3 w-3" /> Leadership
              </div>
              <h2 className="mt-5 max-w-2xl font-display text-[clamp(2.5rem,6vw,4rem)] leading-[1.05] tracking-[-0.02em]">
                Senior operators.{" "}
                <span className="italic text-accent">No junior pass-offs.</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-pretty text-[15px] leading-relaxed text-ink-soft">
              Every engagement is led by a strategist with 8+ years of
              experience. The people who pitched you are the people who run your
              account.
            </p>
          </Reveal>
        </div>
        <StaggerContainer
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          staggerDelay={0.08}
        >
          {team.map((t) => (
            <StaggerItem key={t.name}>
              <motion.div
                className="group overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:border-accent/20 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.12)]"
                whileHover={{ y: -6 }}
              >
                <div className="relative aspect-4/5 overflow-hidden bg-muted">
                  <img
                    src={t.img}
                    alt={`${t.name}, ${t.role} at Global Numedia`}
                    loading="lazy"
                    decoding="async"
                    width={384}
                    height={480}
                    className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40" />
                  <div
                    className="absolute bottom-4 left-4 right-4 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
                    aria-hidden="true"
                  >
                    <div className="rounded-2xl border border-white/10 bg-black/50 px-4 py-3 backdrop-blur-xl">
                      <div className="text-xs font-medium text-white/80">
                        {t.bio}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="font-display text-xl text-foreground">
                    {t.name}
                  </div>
                  <div className="mt-0.5 text-[12.5px] font-semibold text-accent">
                    {t.role}
                  </div>
                  <p className="sr-only">{t.bio}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
