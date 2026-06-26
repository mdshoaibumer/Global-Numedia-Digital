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
      { title: "Search Engine Optimization — Global Numedia" },
      {
        name: "description",
        content:
          "Expert SEO services to boost your rankings, drive organic traffic and grow your business online.",
      },
      {
        property: "og:title",
        content: "Search Engine Optimization — Global Numedia",
      },
      {
        property: "og:description",
        content: "SEO that drives real business results.",
      },
      { property: "og:url", content: "/services/seo" },
    ],
    links: [{ rel: "canonical", href: "/services/seo" }],
  }),
  component: () => (
    <ServicePage
      eyebrow="Search Engine Optimization"
      title="Rank higher, grow faster."
      description="Comprehensive SEO strategies that improve your search visibility, drive qualified traffic and generate leads consistently."
      bullets={[
        "Technical SEO audit and optimization",
        "Keyword research and strategy",
        "On-page and off-page optimization",
        "Content optimization for search",
        "Link building and authority development",
        "Local SEO and Google Business Profile",
      ]}
      deliverables={[
        {
          icon: Wrench,
          title: "Technical SEO",
          desc: "Site speed, crawlability, indexation and schema markup.",
        },
        {
          icon: Search,
          title: "Keyword strategy",
          desc: "Target the terms your customers are searching for.",
        },
        {
          icon: FileText,
          title: "Content optimization",
          desc: "Optimize existing and new content for search engines.",
        },
        {
          icon: Link2,
          title: "Link building",
          desc: "Quality backlinks from relevant, authoritative sites.",
        },
        {
          icon: MapPin,
          title: "Local SEO",
          desc: "Dominate local search results in your market.",
        },
        {
          icon: BarChart3,
          title: "Reporting",
          desc: "Monthly reports with rankings, traffic and conversions.",
        },
      ]}
      metrics={[
        { value: "+200%", label: "average organic traffic growth" },
        { value: "3x", label: "more leads from organic search" },
        { value: "150+", label: "first-page rankings achieved" },
        { value: "95%", label: "client retention rate" },
      ]}
      faq={[
        {
          q: "How long until I see results?",
          a: "SEO is a long-term strategy. Expect to see meaningful results within 3-6 months.",
        },
        {
          q: "Do you guarantee rankings?",
          a: "No one can guarantee specific rankings, but we have a proven track record of delivering growth.",
        },
        {
          q: "What industries do you work with?",
          a: "We work across industries — our strategies are tailored to your specific market and audience.",
        },
        {
          q: "Is local SEO included?",
          a: "Yes, local SEO is part of our standard package for businesses with physical locations.",
        },
      ]}
    />
  ),
});
