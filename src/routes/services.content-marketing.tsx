import { createFileRoute } from "@tanstack/react-router";
import {
  FileText,
  TrendingUp,
  Users,
  BarChart3,
  PenTool,
  Share2,
} from "lucide-react";
import { ServicePage } from "@/components/layout/ServicePage";

export const Route = createFileRoute("/services/content-marketing")({
  head: () => ({
    meta: [
      { title: "Content Marketing — Global Numedia" },
      {
        name: "description",
        content:
          "Strategic content marketing that drives traffic, builds authority and generates leads for your business.",
      },
      {
        property: "og:title",
        content: "Content Marketing — Global Numedia",
      },
      {
        property: "og:description",
        content: "Content that drives traffic and generates leads.",
      },
      { property: "og:url", content: "/services/content-marketing" },
    ],
    links: [{ rel: "canonical", href: "/services/content-marketing" }],
  }),
  component: () => (
    <ServicePage
      eyebrow="Content Marketing"
      title="Content that converts."
      description="Strategic content creation and distribution that builds authority, drives organic traffic and turns readers into customers."
      bullets={[
        "Content strategy aligned to business goals",
        "Blog posts, articles and long-form content",
        "Content calendar planning and execution",
        "SEO-optimized content production",
        "Content distribution across channels",
        "Performance tracking and optimization",
      ]}
      deliverables={[
        {
          icon: PenTool,
          title: "Content strategy",
          desc: "Research-backed plans tied to your audience and goals.",
        },
        {
          icon: FileText,
          title: "Content creation",
          desc: "High-quality articles, blogs and guides.",
        },
        {
          icon: Share2,
          title: "Distribution",
          desc: "Multi-channel promotion to maximize reach.",
        },
        {
          icon: TrendingUp,
          title: "SEO integration",
          desc: "Every piece optimized for search visibility.",
        },
        {
          icon: Users,
          title: "Audience building",
          desc: "Content that attracts and retains your ideal customers.",
        },
        {
          icon: BarChart3,
          title: "Analytics",
          desc: "Track performance and refine strategy continuously.",
        },
      ]}
      metrics={[
        { value: "+180%", label: "average organic traffic growth" },
        { value: "3x", label: "more leads from content" },
        { value: "50+", label: "content pieces delivered monthly" },
        { value: "95%", label: "client satisfaction rate" },
      ]}
      faq={[
        {
          q: "What type of content do you create?",
          a: "Blog posts, articles, guides, infographics, social content and more — tailored to your audience.",
        },
        {
          q: "How do you measure content success?",
          a: "Traffic, engagement, lead generation and conversions — all tracked in real-time dashboards.",
        },
        {
          q: "How often will content be published?",
          a: "We create a custom calendar based on your goals — typically 8-16 pieces per month.",
        },
        {
          q: "Do you handle content distribution?",
          a: "Yes, we distribute across social media, email, and partner channels for maximum reach.",
        },
      ]}
    />
  ),
});
