import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Globe } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { industries } from "./data";

export function Industries() {
  return (
    <section className="border-t border-border bg-surface py-24 md:py-32 lg:py-40">
      <div className="container-pro">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            <Globe className="h-3 w-3" /> Industries
          </div>
          <h2 className="mt-5 max-w-3xl font-display text-[clamp(2.5rem,6vw,4rem)] leading-[1.05] tracking-[-0.02em]">
            Built for the verticals where{" "}
            <span className="italic text-accent">growth gets hard.</span>
          </h2>
        </Reveal>
        <StaggerContainer
          className="mt-14 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          staggerDelay={0.05}
        >
          {industries.map((ind) => (
            <StaggerItem key={ind.name}>
              <Link
                to="/industries"
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border bg-background p-7 transition-all duration-500 hover:-translate-y-1 hover:border-accent/20 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)]"
              >
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/4 transition-all duration-700 group-hover:scale-[2.5] group-hover:bg-accent/8" />
                <div className="relative">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-muted text-foreground transition-all duration-300 group-hover:bg-linear-to-br group-hover:from-accent group-hover:to-violet-600 group-hover:text-white group-hover:shadow-[0_8px_24px_-6px_rgba(120,119,198,0.4)]">
                    <ind.icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="relative mt-10">
                  <span className="font-display text-xl text-foreground">
                    {ind.name}
                  </span>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {ind.count}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-ink-soft/0 transition-all duration-300 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
