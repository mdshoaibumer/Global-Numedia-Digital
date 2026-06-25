import {
  Search, Target, Megaphone, Globe, Zap, Workflow, Brain,
  Stethoscope, Home as HomeIcon, ShoppingBag, GraduationCap,
  Hotel, Building2, UtensilsCrossed, MapPin, ShieldCheck,
  Compass, Eye, Heart,
} from "lucide-react";

import founderImg from "@/assets/team-founder.jpg";
import marketingImg from "@/assets/team-marketing.jpg";
import seoImg from "@/assets/team-seo.jpg";
import adsImg from "@/assets/team-ads.jpg";
import client1 from "@/assets/client-1.jpg";
import client2 from "@/assets/client-2.jpg";
import client3 from "@/assets/client-3.jpg";

export { founderImg, client1, client2, client3 };

export const services = [
  { icon: Brain, title: "AI Search & AEO", desc: "Get cited in ChatGPT, Perplexity, Gemini and Google AI Overviews — where your buyers actually search in 2026.", deliverables: ["LLM citation building", "Generative Engine Optimization", "AI visibility tracking"], to: "/services/ai-search", gradient: "from-cyan-500/20 to-blue-500/10" },
  { icon: Search, title: "SEO & Content", desc: "Rank for the keywords that actually drive pipeline. We combine technical excellence with editorial strategy.", deliverables: ["Technical audit & architecture", "Topic clusters & content velocity", "Authority link acquisition"], to: "/services/seo", gradient: "from-violet-500/20 to-indigo-500/10" },
  { icon: Target, title: "Google Ads", desc: "Profitable Search, Shopping & Performance Max at scale with ruthless efficiency.", deliverables: ["Account restructure & cleanup", "Smart bid strategy engineering", "Weekly performance QBRs"], to: "/services/google-ads", gradient: "from-amber-500/20 to-orange-500/10" },
  { icon: Megaphone, title: "Meta & LinkedIn Ads", desc: "Creative-led paid social engineered for CAC discipline and scale.", deliverables: ["Creative testing frameworks", "Full-funnel mapping", "Lookalike audience modeling"], to: "/services/social-media", gradient: "from-purple-500/20 to-pink-500/10" },
  { icon: Globe, title: "Web Design & Dev", desc: "Conversion-grade websites built on modern stacks that load in milliseconds.", deliverables: ["UX research & wireframes", "CRO-optimized builds", "Core Web Vitals mastery"], to: "/services/web-development", gradient: "from-emerald-500/20 to-teal-500/10" },
  { icon: Zap, title: "Branding & Identity", desc: "Brand systems that command premium pricing and instant recognition.", deliverables: ["Market positioning strategy", "Complete visual identity", "Brand guidelines system"], to: "/services/branding", gradient: "from-rose-500/20 to-red-500/10" },
  { icon: Workflow, title: "Lifecycle & CRM", desc: "Email, WhatsApp and automation journeys that retain and expand revenue.", deliverables: ["HubSpot/Klaviyo setup", "Lead scoring models", "Revenue ops automation"], to: "/services", gradient: "from-indigo-500/20 to-violet-500/10" },
];

export const industries = [
  { icon: Stethoscope, name: "Healthcare", count: "42 brands" },
  { icon: HomeIcon, name: "Real Estate", count: "38 brands" },
  { icon: ShoppingBag, name: "D2C & E-commerce", count: "56 brands" },
  { icon: GraduationCap, name: "Edtech", count: "24 brands" },
  { icon: Hotel, name: "Hospitality", count: "18 brands" },
  { icon: Building2, name: "B2B SaaS", count: "31 brands" },
  { icon: UtensilsCrossed, name: "F&B", count: "19 brands" },
  { icon: MapPin, name: "Local Multi-location", count: "12 brands" },
];

export const partners = [
  { name: "Google Premier Partner", sub: "Top 3% globally · 2021–2025", icon: ShieldCheck },
  { name: "Meta Business Partner", sub: "Certified since 2019", icon: ShieldCheck },
  { name: "HubSpot Solutions Partner", sub: "Platinum tier", icon: ShieldCheck },
  { name: "SEMrush Certified Agency", sub: "Agency Growth Partner", icon: ShieldCheck },
  { name: "GA4 & GTM Certified", sub: "12 certified analysts", icon: ShieldCheck },
  { name: "Shopify Plus Partner", sub: "D2C build specialist", icon: ShieldCheck },
];

export const caseStudies = [
  {
    brand: "Helio Dental Network",
    industry: "Healthcare · 14 clinics",
    challenge: "Stagnant patient inflow despite 6 active marketing vendors and rising CPL across Google Ads.",
    strategy: "Consolidated channels into a single attribution model. Rebuilt landing pages by treatment line. Launched local SEO across 14 GMB profiles.",
    execution: "9-month engagement · ₹38L/mo media · 240 landing pages · 1,800 reviews captured",
    metric: "+312%",
    metricLabel: "qualified patient leads",
    roi: "5.8× ROI",
    gradient: "from-violet-500/8 via-indigo-500/4",
  },
  {
    brand: "Atrium Realty Group",
    industry: "Real Estate · NCR & Bengaluru",
    challenge: "Cost per qualified site visit had tripled in 18 months. Sales team complained of unqualified leads.",
    strategy: "Rebuilt funnel around intent — gated floor plans, WhatsApp qualification bot, integrated CRM scoring with sales team.",
    execution: "12-month engagement · cross-channel media · custom Salesforce integration · weekly pipeline reviews",
    metric: "5.8x",
    metricLabel: "return on ad spend",
    roi: "₹84 Cr attributed",
    gradient: "from-emerald-500/8 via-green-500/4",
  },
  {
    brand: "Maison Noir Hospitality",
    industry: "Hospitality · 7 properties",
    challenge: "Over-reliant on OTA bookings (78%) with eroding margins and zero direct customer relationship.",
    strategy: "Direct-booking website rebuild, loyalty program launch, paid brand defense and a content engine targeting destination keywords.",
    execution: "18-month engagement · brand + performance + CRM · 4-language site · loyalty tech stack",
    metric: "+184%",
    metricLabel: "direct bookings YoY",
    roi: "OTA share 78% → 41%",
    gradient: "from-amber-500/8 via-yellow-500/4",
  },
];

export const testimonials = [
  { quote: "Global Numedia rebuilt our funnel and tripled qualified leads in one quarter. They feel like an internal team, not a vendor.", name: "Dr. Priya Shah", role: "CMO, Veritas Health Group", img: client1 },
  { quote: "The most strategic agency we've ever hired. Every rupee is tracked back to closed pipeline.", name: "Daniel Okafor", role: "Founder, Atrium Realty", img: client2 },
  { quote: "Beautiful brand work and serious performance chops. Rare combination. They earned a four-year renewal.", name: "Lena Park", role: "VP Marketing, Northway", img: client3 },
];

export const team = [
  { name: "Arjun Mehta", role: "Founder & CEO", bio: "Former Head of Growth at two unicorn SaaS companies. 18 years in performance marketing.", img: founderImg },
  { name: "Ananya Kapoor", role: "Marketing Director", bio: "Built integrated programs for HUL, Tata Cliq and Razorpay. HubSpot Inbound Certified.", img: marketingImg },
  { name: "Rohan Iyer", role: "Head of SEO", bio: "Scaled organic to 12M sessions/mo across 40+ engagements. SEMrush Academy faculty.", img: seoImg },
  { name: "Meera Suresh", role: "Head of Paid Media", bio: "Manages ₹14 Cr/mo in media across Google, Meta and LinkedIn. Google Premier-certified.", img: adsImg },
];

export const values = [
  { icon: Compass, title: "Strategy before tactics", desc: "We don't ship channels. We ship growth systems tied to revenue and margin." },
  { icon: Eye, title: "Radical transparency", desc: "Live dashboards. Honest reporting. We tell you what's broken before you ask." },
  { icon: Heart, title: "Own the outcome", desc: "We measure success in your P&L, not in our deliverables tracker." },
];

export const awards = [
  { year: "2024", title: "Agency of the Year (Performance)", org: "Drum Awards APAC" },
  { year: "2024", title: "Best Healthcare Campaign", org: "ET Brand Equity" },
  { year: "2023", title: "Google Premier Partner — Top 3%", org: "Google" },
  { year: "2023", title: "Search Agency of the Year", org: "Afaqs! Foxglove" },
  { year: "2022", title: "Best Use of Data", org: "Campaign India" },
];

export const timeline = [
  { year: "2013", title: "Founded in Bengaluru", desc: "Arjun and 3 ex-startup operators launch the first 5-person studio." },
  { year: "2017", title: "100th client retained", desc: "Built our first enterprise account team. Opened Mumbai office." },
  { year: "2020", title: "Google Premier Partner", desc: "Entered the top 3% of Google agency partners globally." },
  { year: "2023", title: "Expanded to Dubai & Singapore", desc: "Cross-border GTM for 40+ brands across the GCC and APAC." },
  { year: "2025", title: "₹680 Cr+ client revenue", desc: "240 brands · 78 person team · 94% client retention." },
];

export const faqs = [
  { q: "How quickly will I see results?", a: "Paid media typically shows lift in 2–4 weeks. SEO and organic systems compound over 90–180 days. You'll have live dashboards from day one." },
  { q: "Do you require long contracts?", a: "No. We work month-to-month after an initial 90-day sprint so the work earns the renewal. Our average client tenure is 31 months." },
  { q: "What size budgets do you work with?", a: "Most engagements range from ₹1L to ₹25L per month in services, with media budgets from ₹2L to ₹2Cr+. We're a fit when growth is a board-level priority." },
  { q: "Will I work with senior people?", a: "Always. Every engagement is led by a strategist with 8+ years of experience. No junior pass-offs after the sales call." },
  { q: "Can you white-label for agencies?", a: "Yes, we partner with a select group of agencies under NDA for SEO, paid media and development." },
];
