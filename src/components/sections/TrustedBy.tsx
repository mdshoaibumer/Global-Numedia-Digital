import { Reveal } from "@/components/ui/Reveal";
import { Marquee } from "@/components/ui/Marquee";

const logos = [
  "NORTHWAY", "VERITAS", "ATRIUM", "HELIO", "MAISON",
  "ORBIT", "LUMEN", "FORGE", "AXIOM", "PARALLEL",
  "CLOUDSCALE", "FRESHBITES", "TECHVISTA", "MEDIFIRST",
];

export function TrustedBy() {
  return (
    <section className="bg-surface py-14 overflow-hidden">
      <div className="container-pro">
        <Reveal variant="blur">
          <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Trusted by 240+ ambitious teams — from Series A startups to BSE 500 enterprises
          </p>
        </Reveal>
      </div>

      {/* Dual-row infinite marquee */}
      <div className="relative mt-8">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-surface to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-surface to-transparent" />

        <Marquee speed={45} pauseOnHover direction="left">
          {logos.map((l) => (
            <div
              key={l}
              className="flex h-14 items-center justify-center rounded-xl border border-border/40 bg-background/50 px-8 backdrop-blur-sm transition-all duration-300 hover:border-accent/20 hover:bg-background"
            >
              <span className="whitespace-nowrap font-display text-lg tracking-[0.15em] text-foreground/20 transition-colors duration-300 hover:text-foreground/60">
                {l}
              </span>
            </div>
          ))}
        </Marquee>

        <div className="mt-3">
          <Marquee speed={38} pauseOnHover direction="right">
            {logos.slice().reverse().map((l) => (
              <div
                key={l + "-r"}
                className="flex h-14 items-center justify-center rounded-xl border border-border/40 bg-background/50 px-8 backdrop-blur-sm transition-all duration-300 hover:border-accent/20 hover:bg-background"
              >
                <span className="whitespace-nowrap font-display text-lg tracking-[0.15em] text-foreground/20 transition-colors duration-300 hover:text-foreground/60">
                  {l}
                </span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
