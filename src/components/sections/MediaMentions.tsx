import { Reveal } from "@/components/ui/Reveal";

const publications = [
  "Forbes", "Entrepreneur", "YourStory", "Inc42",
  "Business Standard", "Economic Times", "Mint",
];

export function MediaMentions() {
  return (
    <section className="py-12 border-b border-border">
      <div className="container-pro">
        <Reveal>
          <p className="text-center text-[11px] font-medium uppercase tracking-[0.25em] text-muted-foreground mb-6">
            Featured & mentioned in
          </p>
        </Reveal>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {publications.map((pub) => (
            <span
              key={pub}
              className="font-display text-xl tracking-tight text-foreground/15 transition-colors duration-300 hover:text-foreground/50 select-none"
            >
              {pub}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
