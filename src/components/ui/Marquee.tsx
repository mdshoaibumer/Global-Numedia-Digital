import { motion } from "framer-motion";

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
}

export function Marquee({
  children,
  speed = 30,
  direction = "left",
  pauseOnHover = true,
  className = "",
}: MarqueeProps) {
  return (
    <div
      className={`group flex overflow-hidden [--duration:${speed}s] ${className}`}
      style={{ "--duration": `${speed}s` } as React.CSSProperties}
    >
      <div
        className={`flex shrink-0 items-center gap-8 ${
          pauseOnHover ? "group-hover:paused" : ""
        } ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}
      >
        {children}
      </div>
      <div
        className={`flex shrink-0 items-center gap-8 ${
          pauseOnHover ? "group-hover:paused" : ""
        } ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}

// Pre-built logo items for the TrustedBy section
const clientLogos = [
  { name: "Veritas Health", width: "w-28" },
  { name: "Atrium Realty", width: "w-24" },
  { name: "Maison Noir", width: "w-28" },
  { name: "NorthWay Corp", width: "w-24" },
  { name: "TechVista", width: "w-20" },
  { name: "Luxe Hotels", width: "w-24" },
  { name: "EduPrime", width: "w-22" },
  { name: "FreshBites", width: "w-24" },
  { name: "CloudScale", width: "w-24" },
  { name: "MedFirst", width: "w-22" },
  { name: "PropertyHub", width: "w-24" },
  { name: "StyleCraft", width: "w-24" },
];

export function LogoMarquee() {
  return (
    <div className="relative overflow-hidden py-8">
      {/* Gradient masks */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-linear-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-linear-to-l from-background to-transparent" />

      <Marquee speed={40} pauseOnHover>
        {clientLogos.map((logo) => (
          <div
            key={logo.name}
            className="flex h-12 items-center justify-center rounded-xl border border-border/50 bg-surface/50 px-6 py-3 backdrop-blur-sm transition-all duration-300 hover:border-accent/20 hover:bg-surface"
          >
            <span className="whitespace-nowrap text-sm font-semibold text-muted-foreground/70 transition-colors duration-300 hover:text-foreground">
              {logo.name}
            </span>
          </div>
        ))}
      </Marquee>

      {/* Second row going opposite direction */}
      <div className="mt-4">
        <Marquee speed={35} direction="right" pauseOnHover>
          {clientLogos
            .slice()
            .reverse()
            .map((logo) => (
              <div
                key={logo.name + "-rev"}
                className="flex h-12 items-center justify-center rounded-xl border border-border/50 bg-surface/50 px-6 py-3 backdrop-blur-sm transition-all duration-300 hover:border-accent/20 hover:bg-surface"
              >
                <span className="whitespace-nowrap text-sm font-semibold text-muted-foreground/70 transition-colors duration-300 hover:text-foreground">
                  {logo.name}
                </span>
              </div>
            ))}
        </Marquee>
      </div>
    </div>
  );
}
