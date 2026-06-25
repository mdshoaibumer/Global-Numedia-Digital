import { createFileRoute } from "@tanstack/react-router";
import {
  Search,
  Link2,
  FileText,
  BarChart3,
  MapPin,
  Wrench,
} from "lucide-react";
import { ServicePage } from "@/components/layout/ServicePage";

export const Route = createFileRoute("/services/seo")({
  head: () => ({
    meta: [
      { title: "SEO Services — Global Numedia" },
      {
        name: "description",
        content:
          "Technical SEO, content and link-building programs that compound into pipeline.",
      },
      { property: "og:title", content: "SEO Services — Global Numedia" },
      {
        property: "og:description",
        content: "Rank for the keywords that move your number.",
      },
      { property: "og:url", content: "/services/seo" },
    ],
    links: [{ rel: "canonical", href: "/services/seo" }],
  }),
  component: () => (
    <ServicePage
      eyebrow="Search Engine Optimization"
      title="Rank where it pays."
      description="Technical, content and authority programs engineered to compound traffic, leads and revenue — not just keywords."
      bullets={[
        "Full technical SEO audit and remediation roadmap",
        "Topical maps tied to revenue and buying intent",
        "On-page optimization across templates and content",
        "Editorial content production with subject-matter experts",
        "White-hat link-building from real publications",
        "Local SEO and Google Business Profile management",
      ]}
      deliverables={[
        {
          icon: Wrench,
          title: "Technical foundation",
          desc: "Core Web Vitals, indexation, schema, internal linking.",
        },
        {
          icon: Search,
          title: "Keyword strategy",
          desc: "Mapped to revenue, not search volume.",
        },
        {
          icon: FileText,
          title: "Editorial content",
          desc: "4–12 pieces per month from senior writers.",
        },
        {
          icon: Link2,
          title: "Authority building",
          desc: "Digital PR, niche links, partnerships.",
        },
        {
          icon: MapPin,
          title: "Local visibility",
          desc: "GBP, citations, reviews and map-pack dominance.",
        },
        {
          icon: BarChart3,
          title: "Attribution dashboard",
          desc: "Pipeline-attributed reporting, refreshed daily.",
        },
      ]}
      metrics={[
        { value: "+248%", label: "median organic traffic in 9 months" },
        { value: "3.2x", label: "more booked calls from organic" },
        { value: "180+", label: "first-page rankings per program" },
        { value: "98%", label: "of clients retain past month 6" },
      ]}
      faq={[
        {
          q: "How long until results?",
          a: "We typically see lift in 60–90 days and meaningful pipeline within 4–6 months.",
        },
        {
          q: "Do you publish content for us?",
          a: "Yes — we manage strategy, writing, editing, publishing and internal linking end-to-end.",
        },
        {
          q: "What if we already have an in-house team?",
          a: "We pair beautifully. We'll embed as a senior strategy + execution layer.",
        },
        {
          q: "Is local SEO included?",
          a: "If you have physical locations, local is bundled at no extra cost.",
        },
      ]}
    />
  ),
});
