import { createFileRoute } from "@tanstack/react-router";
import {
  Target,
  ShoppingCart,
  FlaskConical,
  BarChart3,
  Sparkles,
  Layers,
} from "lucide-react";
import { ServicePage } from "@/components/layout/ServicePage";

export const Route = createFileRoute("/services/google-ads")({
  head: () => ({
    meta: [
      { title: "Google Ads Management — Global Numedia" },
      {
        name: "description",
        content:
          "Profitable Google Search, Shopping and Performance Max programs managed by senior PPC strategists.",
      },
      {
        property: "og:title",
        content: "Google Ads Management — Global Numedia",
      },
      {
        property: "og:description",
        content: "Search, Shopping and PMax that prints ROAS.",
      },
      { property: "og:url", content: "/services/google-ads" },
    ],
    links: [{ rel: "canonical", href: "/services/google-ads" }],
  }),
  component: () => (
    <ServicePage
      eyebrow="Google Ads Management"
      title="Paid search that prints."
      description="Senior PPC strategists running profitable Search, Shopping and Performance Max — with full-funnel attribution and weekly experimentation."
      bullets={[
        "Conversion tracking and offline conversion imports",
        "Full account restructure and bidding overhaul",
        "Keyword and negative keyword expansion sprints",
        "Performance Max asset and audience signals",
        "Shopping feed optimization for e-commerce",
        "Weekly creative, copy and landing page tests",
      ]}
      deliverables={[
        {
          icon: Target,
          title: "Search & PMax",
          desc: "Full-funnel campaigns built around margin, not clicks.",
        },
        {
          icon: ShoppingCart,
          title: "Shopping & feed ops",
          desc: "Feed enrichment, segmentation and bidding.",
        },
        {
          icon: FlaskConical,
          title: "Weekly experiments",
          desc: "Bid strategy, audience and creative tests.",
        },
        {
          icon: Sparkles,
          title: "Ad creative",
          desc: "Copy, RSAs, video and display assets shipped weekly.",
        },
        {
          icon: Layers,
          title: "Landing pages",
          desc: "Match-typed LPs designed to convert each segment.",
        },
        {
          icon: BarChart3,
          title: "Pipeline reporting",
          desc: "ROAS, CAC, LTV — not just CTR.",
        },
      ]}
      metrics={[
        { value: "5.4x", label: "average ROAS across accounts" },
        { value: "-38%", label: "median CAC reduction" },
        { value: "+212%", label: "qualified lead volume" },
        { value: "<2 wk", label: "to first attribution lift" },
      ]}
      faq={[
        {
          q: "What's the minimum ad spend?",
          a: "We work best with $10k+/month in media so we can run meaningful experiments.",
        },
        {
          q: "Do you build landing pages?",
          a: "Yes — high-converting LPs are part of every retainer.",
        },
        { q: "Who owns the account?", a: "You do. Always. We just manage it." },
        {
          q: "Can you fix a broken account?",
          a: "Yes. Our first 30 days is a full rebuild and migration if needed.",
        },
      ]}
    />
  ),
});
