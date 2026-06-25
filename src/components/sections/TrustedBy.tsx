import { Reveal } from "@/components/ui/Reveal";

const logos = ["NORTHWAY", "VERITAS", "ATRIUM", "HELIO", "MAISON", "ORBIT", "LUMEN", "FORGE", "AXIOM", "PARALLEL"];

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
      <div className="relative mt-8 mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-20">
          {[...logos, ...logos, ...logos].map((l, i) => (
            <div key={i} className="font-display text-3xl tracking-[0.15em] text-foreground/10 transition-colors duration-500 hover:text-foreground/40">{l}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
