import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { partners } from "./data";

export function PartnerBar() {
  return (
    <section className="relative border-y border-border bg-background py-12">
      <div className="container-pro">
        <Reveal variant="blur">
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            Certified, partnered & accredited by
          </p>
        </Reveal>
        <StaggerContainer className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6" staggerDelay={0.06}>
          {partners.map((p) => (
            <StaggerItem key={p.name}>
              <div className="group flex items-center gap-3 rounded-2xl ring-1 ring-border bg-card px-4 py-3.5 transition-all duration-300 hover:ring-accent/30 hover:shadow-[0_8px_30px_-12px_rgba(120,119,198,0.15)] hover:-translate-y-0.5">
                <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:shadow-[0_0_20px_rgba(120,119,198,0.3)]">
                  <p.icon className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <div className="truncate text-[13px] font-semibold text-foreground leading-tight">{p.name}</div>
                  <div className="truncate text-[11px] text-muted-foreground">{p.sub}</div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
