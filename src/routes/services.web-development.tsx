import { createFileRoute } from "@tanstack/react-router";
import { Code2, Gauge, Smartphone, Search, ShieldCheck, Layers } from "lucide-react";
import { ServicePage } from "@/components/layout/ServicePage";

export const Route = createFileRoute("/services/web-development")({
  head: () => ({
    meta: [
      { title: "Website Design & Development — Global Numedia" },
      { name: "description", content: "Conversion-grade websites built on modern frameworks. Designed for performance, built to scale." },
      { property: "og:title", content: "Website Design & Development — Global Numedia" },
      { property: "og:description", content: "Websites that convert, not just look pretty." },
      { property: "og:url", content: "/services/web-development" },
    ],
    links: [{ rel: "canonical", href: "/services/web-development" }],
  }),
  component: () => (
    <ServicePage
      eyebrow="Website Design & Development"
      title="Sites that convert."
      description="Beautiful, lightning-fast websites engineered for SEO, conversion and lifetime growth — not just launch day."
      bullets={[
        "Conversion-led design and copywriting",
        "Headless or CMS architecture (Webflow, Shopify, Next.js)",
        "Core Web Vitals at 95+ across mobile and desktop",
        "Schema markup and SEO foundations built-in",
        "Analytics, attribution and A/B testing infrastructure",
        "Ongoing CRO program post-launch",
      ]}
      deliverables={[
        { icon: Layers, title: "Strategy & wireframes", desc: "Information architecture mapped to your buyer journey." },
        { icon: Code2, title: "Design & build", desc: "Senior designers and engineers — no offshore handoffs." },
        { icon: Gauge, title: "Performance", desc: "95+ Lighthouse, edge-rendered, image-optimized." },
        { icon: Smartphone, title: "Mobile-first", desc: "Designed thumb-down for the screens that convert." },
        { icon: Search, title: "SEO foundations", desc: "Schema, sitemap, internal linking, content models." },
        { icon: ShieldCheck, title: "Maintenance", desc: "Monthly care, security, A/B testing and CRO." },
      ]}
      metrics={[
        { value: "98+", label: "Lighthouse performance" },
        { value: "+74%", label: "median conversion lift" },
        { value: "6 wk", label: "typical launch timeline" },
        { value: "0 ms", label: "patience for slow sites" },
      ]}
      faq={[
        { q: "Which platforms do you build on?", a: "Webflow, Shopify, Next.js / TanStack, Sanity, Contentful — we pick what fits." },
        { q: "Do you write the copy?", a: "Yes, senior conversion copywriters are part of every build." },
        { q: "Will we be locked in?", a: "Never. We hand over source code, design files and documentation." },
        { q: "What about migrations?", a: "We handle 301 mapping, SEO preservation and zero-downtime cutovers." },
      ]}
    />
  ),
});
