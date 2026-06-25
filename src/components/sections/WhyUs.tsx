import { motion } from "framer-motion";
import { BarChart3, ShieldCheck, Star, Workflow, Crown } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { GlowOrb } from "@/components/ui/MagneticButton";

export function WhyUs() {
  const items = [
    { icon: BarChart3, title: "Data-driven decisions", desc: "Every recommendation backed by attribution, cohort analysis and a single source of truth dashboard.", stat: "100%", statLabel: "attribution" },
    { icon: ShieldCheck, title: "Transparent reporting", desc: "Live Looker dashboards, weekly stand-ups, monthly QBRs. You see what we see, when we see it.", stat: "Real-time", statLabel: "dashboards" },
    { icon: Star, title: "Certified senior experts", desc: "Google Premier, Meta Business, HubSpot Platinum, SEMrush, GA4 — all in-house, no offshore handoffs.", stat: "8+ yrs", statLabel: "avg. experience" },
    { icon: Workflow, title: "Proven growth systems", desc: "Frameworks battle-tested across 240+ engagements and ₹680 Cr+ in client revenue since 2013.", stat: "240+", statLabel: "brands scaled" },
  ];
  return (
    <section className="relative overflow-hidden bg-[#030712] py-24 text-white md:py-32 lg:py-40">
      <div className="absolute inset-0" aria-hidden="true"><GlowOrb color="rgba(120, 119, 198, 0.08)" size={600} className="left-0 top-0" /><GlowOrb color="rgba(139, 92, 246, 0.06)" size={400} className="right-0 bottom-0" /></div>
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      <div className="container-pro relative">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-violet-400"><Crown className="h-3 w-3" /> Why Global Numedia</div>
          <h2 className="mt-5 max-w-4xl font-display text-[clamp(2.5rem,6vw,4rem)] leading-[1.05] tracking-[-0.02em]">We earn the renewal,{" "}<span className="bg-linear-to-r from-violet-400 to-indigo-300 bg-clip-text italic text-transparent">not the contract.</span></h2>
        </Reveal>
        <StaggerContainer className="mt-14 grid gap-5 md:grid-cols-2" staggerDelay={0.1}>
          {items.map((it) => (
            <StaggerItem key={it.title}>
              <SpotlightCard className="h-full rounded-3xl" spotlightColor="rgba(120,119,198,0.06)" borderColor="rgba(120,119,198,0.1)">
                <motion.div className="group relative h-full overflow-hidden rounded-3xl ring-1 ring-white/8 bg-white/2 p-8 backdrop-blur-sm transition-all duration-500 hover:ring-violet-500/30 hover:bg-white/4" whileHover={{ y: -4 }}>
                  <div className="absolute inset-0 bg-linear-to-br from-violet-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative flex h-full flex-col">
                    <div className="flex items-start justify-between">
                      <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-violet-500/20 to-indigo-500/10 text-violet-400 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(120,119,198,0.2)]"><it.icon className="h-6 w-6" /></div>
                      <div className="text-right">
                        <div className="font-display text-2xl text-white/90">{it.stat}</div>
                        <div className="text-[11px] text-white/40">{it.statLabel}</div>
                      </div>
                    </div>
                    <h3 className="mt-6 font-display text-[1.5rem] text-white">{it.title}</h3>
                    <p className="mt-3 flex-1 text-[15px] leading-[1.7] text-white/60">{it.desc}</p>
                  </div>
                </motion.div>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
