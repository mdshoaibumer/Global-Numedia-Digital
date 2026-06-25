import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/layout/ServicePage";
import { Brain, Bot, Search, MessageSquare, BarChart3, Globe } from "lucide-react";

export const Route = createFileRoute("/services/ai-search")({
  component: AISearchPage,
});

function AISearchPage() {
  return (
    <ServicePage
      eyebrow="AI-Native Marketing"
      title="AI Search & Answer Engine Optimization"
      description="Your buyers don't just Google anymore. They ask ChatGPT, Perplexity, Gemini, and Copilot. We make sure your brand shows up with authoritative, cited answers across every AI-powered search surface."
      bullets={[
        "AI Overview & Featured Snippet optimization",
        "LLM citation building & entity authority",
        "Generative Engine Optimization (GEO)",
        "Answer Engine Optimization (AEO)",
        "Conversational content architecture",
        "AI search visibility tracking & reporting",
        "Knowledge graph optimization",
        "Structured data & schema markup",
      ]}
      deliverables={[
        { icon: Search, title: "AI Visibility Audit", desc: "We scan how your brand appears (or doesn't) across ChatGPT, Perplexity, Gemini, and Google AI Overviews." },
        { icon: Brain, title: "Entity & Authority Mapping", desc: "Build your brand's knowledge graph signals so LLMs recognize you as the authoritative source." },
        { icon: MessageSquare, title: "Conversational Content", desc: "Create content architectured for how AI models parse, summarize, and cite information." },
        { icon: Bot, title: "Citation Engineering", desc: "Strategic placement across sources that LLMs crawl and reference in their responses." },
        { icon: Globe, title: "Multi-Platform Optimization", desc: "Optimize for Google AI Overviews, ChatGPT, Perplexity, Claude, Copilot simultaneously." },
        { icon: BarChart3, title: "AI Visibility Tracking", desc: "Proprietary monitoring of your brand mentions and citations across all major AI platforms." },
      ]}
      metrics={[
        { value: "116%", label: "higher visibility in LLMs than competitors" },
        { value: "586%", label: "increase in AI-sourced traffic" },
        { value: "3.2x", label: "more cited answers vs. traditional SEO" },
        { value: "94K", label: "client mentions in AI sources" },
      ]}
      faq={[
        { q: "What is Answer Engine Optimization?", a: "AEO is the practice of optimizing your content to appear as direct answers in AI-powered search engines like ChatGPT, Perplexity, and Google's AI Overviews — not just traditional blue links." },
        { q: "How is this different from regular SEO?", a: "Traditional SEO optimizes for keyword rankings. AEO/GEO optimizes for how AI models understand, cite, and recommend your brand. They're complementary — we do both." },
        { q: "Can you track AI search visibility?", a: "Yes. We use proprietary tools to monitor how often and how prominently your brand is mentioned across ChatGPT, Perplexity, Gemini, and Google AI Overviews." },
        { q: "How long until we see results?", a: "Initial visibility improvements in AI platforms typically appear within 60-90 days. Significant citation growth compounds over 4-6 months." },
        { q: "Do we need this if we already rank well on Google?", a: "Absolutely. Google rankings don't guarantee AI citations. Many brands ranking #1 on Google are invisible in ChatGPT and Perplexity responses." },
      ]}
    />
  );
}
