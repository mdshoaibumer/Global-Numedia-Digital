import { Reveal } from "@/components/ui/Reveal";
import { ShieldCheck, Award, Star } from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "Google Premier Partner", year: "2024" },
  { icon: ShieldCheck, label: "Meta Business Partner", year: "2024" },
  { icon: Award, label: "HubSpot Platinum Partner", year: "" },
  { icon: Star, label: "Clutch Top Agency India", year: "2024" },
  { icon: Award, label: "Semrush Certified Agency", year: "" },
  { icon: Star, label: "DesignRush Best Digital Agency", year: "2023" },
];

export function CertificationBadges() {
  return (
    <section className="border-y border-border bg-surface/50 py-12">
      <div className="container-pro">
        <Reveal>
          <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-8">
            Certified & recognized by
          </p>
        </Reveal>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {badges.map((b) => (
            <div
              key={b.label}
              className="flex items-center gap-2.5 rounded-xl border border-border bg-background/80 px-4 py-2.5 backdrop-blur-sm transition hover:border-foreground/10 hover:shadow-sm"
            >
              <b.icon className="h-4 w-4 text-accent shrink-0" />
              <div>
                <span className="text-sm font-medium text-foreground">{b.label}</span>
                {b.year && <span className="ml-1.5 text-[10px] font-medium text-muted-foreground">{b.year}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
