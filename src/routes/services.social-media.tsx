import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, Film, Megaphone, Users, Calendar, BarChart3 } from "lucide-react";
import { ServicePage } from "@/components/layout/ServicePage";

export const Route = createFileRoute("/services/social-media")({
  head: () => ({
    meta: [
      { title: "Social Media Marketing — Global Numedia" },
      { name: "description", content: "Organic and paid social systems on Instagram, TikTok, LinkedIn and Meta that build brand demand and scale revenue." },
      { property: "og:title", content: "Social Media Marketing — Global Numedia" },
      { property: "og:description", content: "Creative-led social that compounds demand." },
      { property: "og:url", content: "/services/social-media" },
    ],
    links: [{ rel: "canonical", href: "/services/social-media" }],
  }),
  component: () => (
    <ServicePage
      eyebrow="Social Media Marketing"
      title="Creative that earns attention."
      description="Organic and paid social systems on Meta, Instagram, TikTok and LinkedIn — built around the only thing that scales: great creative."
      bullets={[
        "Editorial content calendar and brand voice",
        "Short-form video production and editing",
        "Community management and inbound DMs",
        "Paid social media management (Meta, TikTok, LinkedIn)",
        "Creator and UGC partnerships",
        "Monthly performance and trend reports",
      ]}
      deliverables={[
        { icon: Sparkles, title: "Brand voice & system", desc: "A scalable visual and verbal identity for social." },
        { icon: Film, title: "Short-form video", desc: "8–24 reels per month, scripted and edited in-house." },
        { icon: Megaphone, title: "Paid social", desc: "Meta and TikTok ads with full creative testing matrix." },
        { icon: Users, title: "Community", desc: "DMs, comments and conversational lead capture." },
        { icon: Calendar, title: "Content calendar", desc: "Always 4 weeks ahead, approved through one dashboard." },
        { icon: BarChart3, title: "Reporting", desc: "Reach, engaged sessions, leads, revenue." },
      ]}
      metrics={[
        { value: "+312%", label: "median engaged follower growth" },
        { value: "4.1x", label: "ROAS on Meta paid social" },
        { value: "24+", label: "pieces of video shipped monthly" },
        { value: "92%", label: "client renewal rate" },
      ]}
      faq={[
        { q: "Do you produce video?", a: "Yes — scripted, edited and captioned in-house. We can also film on-site." },
        { q: "Which platforms do you cover?", a: "Meta, Instagram, TikTok, LinkedIn and YouTube Shorts. We pick what fits your audience." },
        { q: "Do you run influencer campaigns?", a: "Yes, sourcing, briefing, contracting and measurement." },
        { q: "Do we own the content?", a: "Always. Full rights, source files, fonts and assets are yours." },
      ]}
    />
  ),
});
