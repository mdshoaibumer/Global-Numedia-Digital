import { createFileRoute } from "@tanstack/react-router";
import {
  Target,
  TrendingUp,
  DollarSign,
  BarChart3,
  Settings,
  Eye,
} from "lucide-react";
import { ServicePage } from "@/components/layout/ServicePage";

export const Route = createFileRoute("/services/ppc")({
  head: () => ({
    meta: [
      { title: "PPC Management — Global Numedia" },
      {
        name: "description",
        content:
          "Expert PPC management across Google Ads, Bing and display networks — maximizing ROI on every click.",
      },
      {
        property: "og:title",
        content: "PPC Management — Global Numedia",
      },
      {
        property: "og:description",
        content: "Paid advertising that delivers measurable ROI.",
      },
      { property: "og:url", content: "/services/ppc" },
    ],
    links: [{ rel: "canonical", href: "/services/ppc" }],
  }),
  component: () => (
    <ServicePage
      eyebrow="PPC Management"
      title="Clicks that count."
      description="Strategic pay-per-click management that maximizes your ad spend — driving qualified traffic and measurable conversions."
      bullets={[
        "Google Ads (Search, Display, Shopping, Performance Max)",
        "Bing Ads and Microsoft Advertising",
        "Campaign strategy and account structure",
        "Ad copy creation and A/B testing",
        "Bid management and budget optimization",
        "Conversion tracking and attribution",
      ]}
      deliverables={[
        {
          icon: Target,
          title: "Campaign strategy",
          desc: "Data-driven campaigns aligned to your business goals.",
        },
        {
          icon: Settings,
          title: "Account management",
          desc: "Daily optimization of bids, budgets and targeting.",
        },
        {
          icon: Eye,
          title: "Ad creative",
          desc: "Compelling copy and visuals that drive clicks.",
        },
        {
          icon: TrendingUp,
          title: "Performance optimization",
          desc: "Continuous testing and refinement for better results.",
        },
        {
          icon: DollarSign,
          title: "Budget management",
          desc: "Maximize ROI with smart budget allocation.",
        },
        {
          icon: BarChart3,
          title: "Reporting",
          desc: "Transparent dashboards with actionable insights.",
        },
      ]}
      metrics={[
        { value: "5.4x", label: "average return on ad spend" },
        { value: "-35%", label: "reduction in cost per acquisition" },
        { value: "200+", label: "campaigns managed successfully" },
        { value: "94%", label: "client retention rate" },
      ]}
      faq={[
        {
          q: "What platforms do you manage?",
          a: "Google Ads, Bing Ads, and display networks — we go where your customers are searching.",
        },
        {
          q: "What's the minimum ad budget?",
          a: "We recommend a minimum of ₹50,000/month in ad spend to see meaningful results.",
        },
        {
          q: "How quickly will I see results?",
          a: "PPC delivers traffic immediately. Optimization for best ROI typically takes 4-6 weeks.",
        },
        {
          q: "Do you handle landing pages?",
          a: "Yes, we can create and optimize landing pages to maximize conversion rates.",
        },
      ]}
    />
  ),
});
