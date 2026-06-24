import { createFileRoute } from "@tanstack/react-router";
import { Palette, Type, BookOpen, Sparkles, Camera, Layers } from "lucide-react";
import { ServicePage } from "@/components/layout/ServicePage";

export const Route = createFileRoute("/services/branding")({
  head: () => ({
    meta: [
      { title: "Branding & Identity Design — Global Numedia" },
      { name: "description", content: "Brand strategy, identity systems and design languages that command premium pricing." },
      { property: "og:title", content: "Branding & Identity Design — Global Numedia" },
      { property: "og:description", content: "Brands that earn premium pricing." },
      { property: "og:url", content: "/services/branding" },
    ],
    links: [{ rel: "canonical", href: "/services/branding" }],
  }),
  component: () => (
    <ServicePage
      eyebrow="Branding & Identity"
      title="A brand customers remember."
      description="Strategy, identity systems and design languages built to earn premium pricing — and to scale beautifully across every surface."
      bullets={[
        "Brand strategy, positioning and messaging",
        "Visual identity: logo, type, color and motion",
        "Brand guidelines and Figma component library",
        "Photography and art direction",
        "Launch collateral: pitch decks, social, packaging",
        "Brand audits and rebrand roadmaps",
      ]}
      deliverables={[
        { icon: Sparkles, title: "Strategy", desc: "Positioning, narrative, audience and voice." },
        { icon: Palette, title: "Identity system", desc: "Logo, palette, secondary marks, motion." },
        { icon: Type, title: "Typography", desc: "Custom or curated type pairings, licensed for use." },
        { icon: BookOpen, title: "Guidelines", desc: "Living Figma library, not a static PDF." },
        { icon: Camera, title: "Art direction", desc: "Photography and illustration direction for launch." },
        { icon: Layers, title: "Launch kit", desc: "Decks, socials, packaging, signage, swag." },
      ]}
      metrics={[
        { value: "8 wk", label: "typical identity timeline" },
        { value: "+38%", label: "median pricing power post-rebrand" },
        { value: "100%", label: "ownership of source files" },
        { value: "12 yrs", label: "senior design team avg." },
      ]}
      faq={[
        { q: "Do you do full rebrands?", a: "Yes — strategy through rollout across every surface." },
        { q: "Can we keep our existing logo?", a: "If it's working. We'll be honest about what to keep and what to evolve." },
        { q: "Do you license fonts for us?", a: "Yes, included in the build." },
        { q: "Do you design websites too?", a: "Yes — see our web development service for end-to-end launch." },
      ]}
    />
  ),
});
