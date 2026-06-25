import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight, Trophy, LineChart } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { caseStudies } from "./data";

export function CaseStudies() {
  return (
    <section className="border-t border-border bg-surface py-24 md:py-32 lg:py-40">
      <div className="container-pro">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <Reveal><div><div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent"><Trophy className="h-3 w-3" /> Client success stories</div><h2 className="mt-5 max-w-2xl font-display text-[clamp(2.5rem,6vw,4rem)] leading-[1.05] tracking-[-0.02em]">Compounding wins for{" "}<span className="italic text-accent">category leaders.</span></h2></div></Reveal>
          <Reveal delay={0.1}><MagneticButton strength={0.1}><Link to="/case-studies" className="group inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold transition-all duration-300 hover:border-accent/30 hover:shadow-[0_8px_24px_-8px_rgba(120,119,198,0.15)]">View all case studies <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" /></Link></MagneticButton></Reveal>
        </div>
        <div className="mt-14 space-y-6">
          {caseStudies.map((c, i) => (
            <Reveal key={c.brand} delay={i * 0.08} variant="slide-up">
              <motion.div className="group relative overflow-hidden rounded-4xl border border-border bg-background transition-all duration-500 hover:border-accent/15 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)]" whileHover={{ y: -3 }}>
                <div className={`absolute inset-0 bg-linear-to-br ${c.gradient} to-transparent opacity-40`} />
                <div className="relative grid gap-0 lg:grid-cols-[1.4fr_1fr]">
                  <div className="p-8 md:p-10 lg:p-12">
                    <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground"><span className="h-px w-6 bg-accent/50" /><span>{c.industry}</span></div>
                    <h3 className="mt-4 font-display text-[clamp(1.75rem,4vw,2.5rem)] text-foreground">{c.brand}</h3>
                    <div className="mt-8 grid gap-6 md:grid-cols-3">
                      <CaseBlock label="Challenge" body={c.challenge} />
                      <CaseBlock label="Strategy" body={c.strategy} />
                      <CaseBlock label="Execution" body={c.execution} />
                    </div>
                    <Link to="/case-studies" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-accent">Read full case study <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /></Link>
                  </div>
                  <div className="relative flex flex-col justify-center gap-6 border-t border-border bg-[#030712] p-8 text-white md:p-10 lg:border-l lg:border-t-0 lg:p-12">
                    <div className="absolute inset-0 overflow-hidden">
                      <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-violet-500/10 blur-3xl" />
                      <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl" />
                      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                    </div>
                    <div className="relative">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">Primary Result</div>
                      <div className="mt-4 font-display text-[clamp(4rem,10vw,5.5rem)] leading-none text-white text-glow">{c.metric}</div>
                      <div className="mt-3 text-[15px] text-white/60">{c.metricLabel}</div>
                    </div>
                    <div className="relative inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-medium text-white/80 backdrop-blur"><LineChart className="h-3.5 w-3.5 text-emerald-400" />{c.roi}</div>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseBlock({ label, body }: { label: string; body: string }) {
  return (<div><div className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent"><span className="h-1 w-1 rounded-full bg-accent" />{label}</div><p className="mt-2.5 text-[14px] leading-[1.7] text-ink-soft">{body}</p></div>);
}
