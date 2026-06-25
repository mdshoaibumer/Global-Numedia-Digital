import { motion } from "framer-motion";
import { Rocket, Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { founderImg, values } from "./data";

export function Story() {
  return (
    <section className="relative border-t border-border bg-background py-24 md:py-32 lg:py-40 overflow-hidden">
      <div
        className="pointer-events-none absolute right-0 top-1/4 h-125 w-125 rounded-full bg-accent/3 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-pro">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-24">
          <Reveal variant="fade-right">
            <div>
              <motion.div
                className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent"
                whileHover={{ scale: 1.03 }}
              >
                <Sparkles className="h-3 w-3" /> Our story
              </motion.div>
              <h2 className="mt-5 max-w-xl font-display text-[clamp(2.5rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.02em]">
                Built by operators,{" "}
                <span className="italic text-accent">for operators.</span>
              </h2>
              <div className="mt-8 space-y-5 text-[15.5px] leading-[1.75] text-ink-soft md:text-base">
                <p>
                  Global Numedia was founded in 2013 in Bengaluru by Arjun Mehta
                  after a decade of leading growth at two venture-backed SaaS
                  companies. The thesis was simple: most agencies optimise for
                  retainers; clients need someone optimising for{" "}
                  <span className="font-medium text-foreground">revenue</span>.
                </p>
                <p>
                  Twelve years later we're a team of{" "}
                  <span className="font-medium text-foreground">
                    78 senior strategists, engineers, designers and analysts
                  </span>{" "}
                  across Bengaluru, Mumbai, Dubai and Singapore — partnering
                  with 240+ brands from Series A startups to BSE 500
                  enterprises.
                </p>
                <p className="relative rounded-2xl border-l-2 border-accent/50 bg-accent/3 p-4 pl-5 font-medium text-foreground">
                  We are still owner-operated, still senior-only, and still
                  measured by the only metric that matters: your P&L.
                </p>
              </div>
              <motion.div
                className="mt-8 inline-flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 12px 40px -12px rgba(120,119,198,0.12)",
                }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={founderImg}
                  alt="Arjun Mehta, Founder & CEO"
                  loading="lazy"
                  width={64}
                  height={64}
                  className="h-14 w-14 rounded-xl object-cover ring-2 ring-accent/20"
                />
                <div>
                  <div className="text-[15px] font-semibold text-foreground">
                    Arjun Mehta
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Founder & CEO · ex-Head of Growth, two SaaS unicorns
                  </div>
                </div>
              </motion.div>
            </div>
          </Reveal>
          <Reveal variant="fade-left" delay={0.15}>
            <div className="grid gap-4">
              <motion.div
                className="relative overflow-hidden rounded-3xl border border-border bg-linear-to-br from-surface to-background p-8"
                whileHover={{ borderColor: "rgba(120,119,198,0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/5 blur-2xl" />
                <div className="relative">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-accent to-violet-600 text-white shadow-[0_8px_24px_-6px_rgba(120,119,198,0.4)]">
                    <Rocket className="h-5 w-5" />
                  </div>
                  <div className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                    Our mission
                  </div>
                  <h3 className="mt-2 font-display text-[clamp(1.5rem,3vw,1.75rem)] leading-snug text-foreground">
                    Build the most accountable growth team a CMO has ever worked
                    with.
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                    Senior talent only. Honest reporting. Revenue as the only
                    scoreboard. No theatre.
                  </p>
                </div>
              </motion.div>
              <div className="grid gap-4 sm:grid-cols-3">
                {values.map((v) => (
                  <motion.div
                    key={v.title}
                    className="group rounded-3xl border border-border bg-card p-6 transition-colors duration-300 hover:border-accent/20"
                    whileHover={{
                      y: -4,
                      boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:shadow-[0_0_20px_rgba(120,119,198,0.25)]">
                      <v.icon className="h-4 w-4" />
                    </div>
                    <div className="mt-4 font-display text-lg leading-tight text-foreground">
                      {v.title}
                    </div>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
                      {v.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
