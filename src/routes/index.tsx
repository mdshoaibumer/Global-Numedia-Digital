import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowUpRight, MessageCircle, Search, Target, Megaphone, Globe, Sparkles, Zap,
  Mail, BarChart3, Brain, MapPin, ShoppingBag, Stethoscope, Home as HomeIcon, UtensilsCrossed,
  GraduationCap, Hotel, Building2, ChevronDown, Star, ShieldCheck, LineChart,
  Workflow, Phone, CheckCircle2, Award, Trophy, Users2, Calendar, Quote, Rocket,
  Eye, Heart, Compass,
} from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";

import founderImg from "@/assets/team-founder.jpg";
import marketingImg from "@/assets/team-marketing.jpg";
import seoImg from "@/assets/team-seo.jpg";
import adsImg from "@/assets/team-ads.jpg";
import client1 from "@/assets/client-1.jpg";
import client2 from "@/assets/client-2.jpg";
import client3 from "@/assets/client-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Global Numedia — Performance Marketing Agency for Growth-Stage Brands" },
      { name: "description", content: "Global Numedia is a Google Premier & Meta Business Partner agency. Since 2013 we've helped 240+ brands generate ₹680 Cr+ in attributed revenue through SEO, paid media, branding and lifecycle marketing." },
      { property: "og:title", content: "Global Numedia — Performance Marketing Agency" },
      { property: "og:description", content: "Google Premier & Meta Business Partner. 240+ brands. ₹680 Cr+ in client revenue." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const services = [
  { icon: Search, title: "SEO & Content", desc: "Rank for the keywords that actually drive pipeline.", deliverables: ["Technical audit", "Topic clusters", "Authority links"], to: "/services/seo" },
  { icon: Target, title: "Google Ads", desc: "Profitable Search, Shopping & Performance Max at scale.", deliverables: ["Account restructure", "Bid strategy", "Weekly QBRs"], to: "/services/google-ads" },
  { icon: Megaphone, title: "Meta & LinkedIn Ads", desc: "Creative-led paid social engineered for CAC discipline.", deliverables: ["Creative testing", "Funnel mapping", "Audience modeling"], to: "/services/social-media" },
  { icon: Globe, title: "Web Design & Dev", desc: "Conversion-grade websites built on modern stacks.", deliverables: ["UX research", "CRO build", "Core Web Vitals"], to: "/services/web-development" },
  { icon: Zap, title: "Branding & Identity", desc: "Brand systems that command premium pricing.", deliverables: ["Positioning", "Visual identity", "Brand guidelines"], to: "/services/branding" },
  { icon: Workflow, title: "Lifecycle & CRM", desc: "Email, WhatsApp and automation journeys that retain.", deliverables: ["HubSpot/Klaviyo", "Lead scoring", "Revenue ops"], to: "/services" },
];

const industries = [
  { icon: Stethoscope, name: "Healthcare" },
  { icon: HomeIcon, name: "Real Estate" },
  { icon: ShoppingBag, name: "D2C & E-commerce" },
  { icon: GraduationCap, name: "Edtech" },
  { icon: Hotel, name: "Hospitality" },
  { icon: Building2, name: "B2B SaaS" },
  { icon: UtensilsCrossed, name: "F&B" },
  { icon: MapPin, name: "Local Multi-location" },
];

const partners = [
  { name: "Google Premier Partner", sub: "Top 3% globally · 2021–2025", icon: ShieldCheck },
  { name: "Meta Business Partner", sub: "Certified since 2019", icon: ShieldCheck },
  { name: "HubSpot Solutions Partner", sub: "Platinum tier", icon: ShieldCheck },
  { name: "SEMrush Certified Agency", sub: "Agency Growth Partner", icon: ShieldCheck },
  { name: "GA4 & GTM Certified", sub: "12 certified analysts", icon: ShieldCheck },
  { name: "Shopify Plus Partner", sub: "D2C build specialist", icon: ShieldCheck },
];

const caseStudies = [
  {
    brand: "Helio Dental Network",
    industry: "Healthcare · 14 clinics",
    challenge: "Stagnant patient inflow despite 6 active marketing vendors and rising CPL across Google Ads.",
    strategy: "Consolidated channels into a single attribution model. Rebuilt landing pages by treatment line. Launched local SEO across 14 GMB profiles.",
    execution: "9-month engagement · ₹38L/mo media · 240 landing pages · 1,800 reviews captured",
    metric: "+312%",
    metricLabel: "qualified patient leads",
    roi: "5.8× ROI",
    accent: "from-[#3b82f6]/12",
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
    accent: "from-[#10b981]/12",
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
    accent: "from-[#f59e0b]/12",
  },
];

const testimonials = [
  { quote: "Global Numedia rebuilt our funnel and tripled qualified leads in one quarter. They feel like an internal team, not a vendor.", name: "Dr. Priya Shah", role: "CMO, Veritas Health Group", img: client1 },
  { quote: "The most strategic agency we've ever hired. Every rupee is tracked back to closed pipeline.", name: "Daniel Okafor", role: "Founder, Atrium Realty", img: client2 },
  { quote: "Beautiful brand work and serious performance chops. Rare combination. They earned a four-year renewal.", name: "Lena Park", role: "VP Marketing, Northway", img: client3 },
];

const team = [
  { name: "Arjun Mehta", role: "Founder & CEO", bio: "Former Head of Growth at two unicorn SaaS companies. 18 years in performance marketing.", img: founderImg },
  { name: "Ananya Kapoor", role: "Marketing Director", bio: "Built integrated programs for HUL, Tata Cliq and Razorpay. HubSpot Inbound Certified.", img: marketingImg },
  { name: "Rohan Iyer", role: "Head of SEO", bio: "Scaled organic to 12M sessions/mo across 40+ engagements. SEMrush Academy faculty.", img: seoImg },
  { name: "Meera Suresh", role: "Head of Paid Media", bio: "Manages ₹14 Cr/mo in media across Google, Meta and LinkedIn. Google Premier-certified.", img: adsImg },
];

const values = [
  { icon: Compass, title: "Strategy before tactics", desc: "We don't ship channels. We ship growth systems tied to revenue and margin." },
  { icon: Eye, title: "Radical transparency", desc: "Live dashboards. Honest reporting. We tell you what's broken before you ask." },
  { icon: Heart, title: "Own the outcome", desc: "We measure success in your P&L, not in our deliverables tracker." },
];

const awards = [
  { year: "2024", title: "Agency of the Year (Performance)", org: "Drum Awards APAC" },
  { year: "2024", title: "Best Healthcare Campaign", org: "ET Brand Equity" },
  { year: "2023", title: "Google Premier Partner — Top 3%", org: "Google" },
  { year: "2023", title: "Search Agency of the Year", org: "Afaqs! Foxglove" },
  { year: "2022", title: "Best Use of Data", org: "Campaign India" },
];

const timeline = [
  { year: "2013", title: "Founded in Bengaluru", desc: "Arjun and 3 ex-startup operators launch the first 5-person studio." },
  { year: "2017", title: "100th client retained", desc: "Built our first enterprise account team. Opened Mumbai office." },
  { year: "2020", title: "Google Premier Partner", desc: "Entered the top 3% of Google agency partners globally." },
  { year: "2023", title: "Expanded to Dubai & Singapore", desc: "Cross-border GTM for 40+ brands across the GCC and APAC." },
  { year: "2025", title: "₹680 Cr+ client revenue", desc: "240 brands · 78 person team · 94% client retention." },
];

const faqs = [
  { q: "How quickly will I see results?", a: "Paid media typically shows lift in 2–4 weeks. SEO and organic systems compound over 90–180 days. You'll have live dashboards from day one." },
  { q: "Do you require long contracts?", a: "No. We work month-to-month after an initial 90-day sprint so the work earns the renewal. Our average client tenure is 31 months." },
  { q: "What size budgets do you work with?", a: "Most engagements range from ₹1L to ₹25L per month in services, with media budgets from ₹2L to ₹2Cr+. We're a fit when growth is a board-level priority." },
  { q: "Will I work with senior people?", a: "Always. Every engagement is led by a strategist with 8+ years of experience. No junior pass-offs after the sales call." },
  { q: "Can you white-label for agencies?", a: "Yes, we partner with a select group of agencies under NDA for SEO, paid media and development." },
];

function Home() {
  return (
    <>
      <Hero />
      <PartnerBar />
      <TrustedBy />
      <Story />
      <ServicesShowcase />
      <WhyUs />
      <Results />
      <Industries />
      <Process />
      <CaseStudies />
      <Team />
      <AwardsSection />
      <Timeline />
      <Testimonials />
      <FAQ />
      <ContactCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-surface to-background pb-20 pt-32 md:pb-24 md:pt-40">
      <div className="absolute inset-0 grid-bg" />
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="pointer-events-none absolute -top-40 left-1/2 h-[620px] w-[920px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 60%)" }}
      />

      <div className="container-pro relative">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3.5 py-1.5 text-xs font-medium tracking-wide text-ink-soft backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 animate-pulse-glow rounded-full bg-success" />
            Google Premier Partner · Meta Business Partner · Est. 2013
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="mt-6 max-w-5xl font-display text-[44px] leading-[1.02] tracking-tight text-foreground text-balance md:text-7xl lg:text-[88px]">
            The growth partner Fortune 500 marketers{" "}
            <span className="relative inline-block">
              <span className="italic gradient-text">trust</span>
              <svg className="absolute -bottom-2 left-0 h-3 w-full text-accent/60" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none">
                <path d="M2 8 Q 100 -2 198 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </span>{" "}
            with their P&L.
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-ink-soft md:text-xl">
            Global Numedia is a senior-only performance marketing agency. Since 2013 we've helped
            <span className="font-semibold text-foreground"> 240+ brands</span> generate
            <span className="font-semibold text-foreground"> ₹680 Cr+</span> in attributed revenue across
            SEO, paid media, branding and lifecycle marketing.
          </p>
        </Reveal>

        <Reveal delay={0.22}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition hover:opacity-90">
              Book free growth audit
              <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
            </Link>
            <a href="https://wa.me/919999999999" className="group inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-medium text-foreground transition hover:bg-muted">
              <MessageCircle className="h-4 w-4 text-success" />
              WhatsApp our strategists
            </a>
          </div>
        </Reveal>

        {/* Authority metric bar — above the fold */}
        <Reveal delay={0.32}>
          <div className="relative mt-12 overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-[#06101f] via-[#0a1729] to-[#06101f] p-1 shadow-elevated">
            <div className="relative overflow-hidden rounded-[22px] p-8 text-white md:p-10">
              <div className="absolute inset-0 dot-bg opacity-40" />
              <div className="relative grid grid-cols-2 gap-y-8 md:grid-cols-4">
                <Metric value={680} prefix="₹" suffix=" Cr+" label="Revenue generated" sub="for clients since 2013" />
                <Metric value={240} suffix="+" label="Brands served" sub="14 industries · 6 countries" />
                <Metric value={94} suffix="%" label="Client retention" sub="31-month avg. tenure" />
                <Metric value={5.4} decimals={1} suffix="x" label="Average ROAS" sub="blended paid media" />
              </div>
              <div className="relative mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-xs text-white/65">
                <div className="flex items-center gap-1.5"><div className="flex">{[...Array(5)].map((_,i)=><Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400"/>)}</div><span className="font-medium text-white">4.9/5</span> · 180+ verified reviews</div>
                <div className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-accent"/>Google Premier Partner</div>
                <div className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-accent"/>Meta Business Partner</div>
                <div className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-accent"/>HubSpot Platinum</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Metric({ value, prefix, suffix, decimals, label, sub }: { value: number; prefix?: string; suffix?: string; decimals?: number; label: string; sub: string }) {
  return (
    <div className="px-2">
      <div className="font-display text-4xl text-white md:text-5xl">
        <Counter to={value} prefix={prefix} suffix={suffix} decimals={decimals ?? 0} />
      </div>
      <div className="mt-2 text-sm font-medium text-white">{label}</div>
      <div className="mt-1 text-xs text-white/55">{sub}</div>
    </div>
  );
}

function PartnerBar() {
  return (
    <section className="border-y border-border bg-background py-10">
      <div className="container-pro">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Certified, partnered & accredited by
        </p>
        <div className="mt-7 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {partners.map((p) => (
            <div key={p.name} className="group flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3.5 transition hover:border-foreground/20 hover:shadow-soft">
              <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <p.icon className="h-4.5 w-4.5" />
              </div>
              <div className="min-w-0">
                <div className="truncate text-[13px] font-semibold text-foreground leading-tight">{p.name}</div>
                <div className="truncate text-[11px] text-muted-foreground">{p.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const logos = ["NORTHWAY", "VERITAS", "ATRIUM", "HELIO", "MAISON", "ORBIT", "LUMEN", "FORGE", "AXIOM", "PARALLEL"];

function TrustedBy() {
  return (
    <section className="bg-surface py-12">
      <div className="container-pro">
        <p className="text-center text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Trusted by 240+ ambitious teams — from Series A startups to BSE 500 enterprises
        </p>
        <div className="relative mt-7 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex w-max animate-marquee gap-16">
            {[...logos, ...logos].map((l, i) => (
              <div key={i} className="font-display text-2xl tracking-[0.2em] text-ink/40">{l}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="border-t border-border bg-background py-20 md:py-24">
      <div className="container-pro">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          <Reveal>
            <div>
              <div className="text-xs font-medium uppercase tracking-[0.18em] text-accent">Our story</div>
              <h2 className="mt-3 max-w-xl font-display text-4xl leading-tight md:text-5xl">
                Built by operators, for operators.
              </h2>
              <div className="mt-7 space-y-5 text-[15.5px] leading-relaxed text-ink-soft md:text-base">
                <p>
                  Global Numedia was founded in 2013 in Bengaluru by Arjun Mehta after a decade of leading
                  growth at two venture-backed SaaS companies. The thesis was simple: most agencies optimise
                  for retainers; clients need someone optimising for revenue.
                </p>
                <p>
                  Twelve years later we're a team of 78 senior strategists, engineers, designers and analysts
                  across Bengaluru, Mumbai, Dubai and Singapore — partnering with 240+ brands from Series A
                  startups to BSE 500 enterprises. We have never lost a client to a competing agency in our
                  flagship retainer book.
                </p>
                <p className="font-medium text-foreground">
                  We are still owner-operated, still senior-only, and still measured by the only metric that
                  matters: your P&L.
                </p>
              </div>

              <div className="mt-8 inline-flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft">
                <img src={founderImg} alt="Arjun Mehta, Founder & CEO" loading="lazy" width={64} height={64} className="h-14 w-14 rounded-xl object-cover" />
                <div>
                  <div className="text-[15px] font-semibold text-foreground">Arjun Mehta</div>
                  <div className="text-xs text-muted-foreground">Founder & CEO · ex-Head of Growth, two SaaS unicorns</div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid gap-4">
              <div className="rounded-3xl border border-border bg-gradient-to-br from-surface to-background p-7">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-foreground text-background">
                  <Rocket className="h-4.5 w-4.5" />
                </div>
                <div className="mt-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">Our mission</div>
                <h3 className="mt-2 font-display text-2xl leading-snug text-foreground">
                  Build the most accountable growth team a CMO has ever worked with.
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                  Senior talent only. Honest reporting. Revenue as the only scoreboard. No theatre.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {values.map((v) => (
                  <div key={v.title} className="rounded-3xl border border-border bg-card p-6">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <v.icon className="h-4 w-4" />
                    </div>
                    <div className="mt-4 font-display text-lg leading-tight text-foreground">{v.title}</div>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ServicesShowcase() {
  return (
    <section id="services" className="container-pro py-20 md:py-28">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="text-xs font-medium uppercase tracking-[0.18em] text-accent">Services</div>
            <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight text-foreground md:text-6xl">
              A full-stack growth team, on demand.
            </h2>
          </div>
          <p className="max-w-md text-pretty text-ink-soft">
            Plug into senior specialists across every channel your customers actually use. One roadmap,
            one P&L, one accountable team.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.04}>
            <Link to={s.to} className="group relative block h-full overflow-hidden rounded-3xl border border-border bg-card p-7 transition duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-elevated">
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-accent/5 transition-all duration-500 group-hover:scale-150 group-hover:bg-accent/10" />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-foreground to-secondary text-background shadow-soft transition group-hover:scale-105">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-2xl text-foreground">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{s.desc}</p>
                <ul className="mt-5 space-y-1.5 border-t border-border pt-5">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-[13px] text-muted-foreground">
                      <CheckCircle2 className="h-3.5 w-3.5 text-success" />{d}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-foreground">
                  Explore service <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    { icon: BarChart3, title: "Data-driven decisions", desc: "Every recommendation backed by attribution, cohort analysis and a single source of truth dashboard." },
    { icon: ShieldCheck, title: "Transparent reporting", desc: "Live Looker dashboards, weekly stand-ups, monthly QBRs. You see what we see, when we see it." },
    { icon: Star, title: "Certified senior experts", desc: "Google Premier, Meta Business, HubSpot Platinum, SEMrush, GA4 — all in-house, no offshore handoffs." },
    { icon: Workflow, title: "Proven growth systems", desc: "Frameworks battle-tested across 240+ engagements and ₹680 Cr+ in client revenue since 2013." },
  ];
  return (
    <section className="relative overflow-hidden bg-[#06101f] py-20 text-white md:py-28">
      <div className="absolute inset-0 dot-bg opacity-50" />
      <div className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full opacity-30 blur-3xl" style={{ background: "radial-gradient(circle, #3b82f6, transparent 70%)" }} />
      <div className="container-pro relative">
        <Reveal>
          <div className="text-xs font-medium uppercase tracking-[0.18em] text-accent">Why Global Numedia</div>
          <h2 className="mt-3 max-w-3xl font-display text-4xl leading-tight md:text-6xl">
            We earn the renewal, not the contract.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.06}>
              <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur transition hover:border-accent/40 hover:bg-white/[0.06]">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <it.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-2xl">{it.title}</h3>
                <p className="mt-3 text-white/70">{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Results() {
  const stats = [
    { v: 312, suffix: "%", label: "avg. lead growth", sub: "across 12-month engagements" },
    { v: 5.4, decimals: 1, suffix: "x", label: "return on ad spend", sub: "blended across paid channels" },
    { v: 680, prefix: "₹", suffix: " Cr+", label: "client revenue", sub: "attributed since 2013" },
    { v: 248, suffix: "%", label: "organic traffic lift", sub: "median in 9 months" },
  ];
  return (
    <section className="container-pro py-20 md:py-28">
      <Reveal>
        <div className="grid items-end gap-6 md:grid-cols-2">
          <div>
            <div className="text-xs font-medium uppercase tracking-[0.18em] text-accent">Results</div>
            <h2 className="mt-3 font-display text-4xl leading-tight md:text-6xl">
              Numbers that move boards.
            </h2>
          </div>
          <p className="text-ink-soft md:text-lg">
            We don't ship reports — we ship revenue. These are the medians across our active book.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-px overflow-hidden rounded-[28px] border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-background p-8">
            <div className="font-display text-5xl text-foreground md:text-6xl">
              <Counter to={s.v} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals ?? 0} />
            </div>
            <div className="mt-3 text-sm font-medium text-foreground">{s.label}</div>
            <div className="mt-1 text-sm text-muted-foreground">{s.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section className="border-t border-border bg-surface py-20 md:py-28">
      <div className="container-pro">
        <Reveal>
          <div className="text-xs font-medium uppercase tracking-[0.18em] text-accent">Industries</div>
          <h2 className="mt-3 max-w-3xl font-display text-4xl leading-tight md:text-6xl">
            Built for the verticals where growth gets hard.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {industries.map((i, idx) => (
            <Reveal key={i.name} delay={idx * 0.03}>
              <Link to="/industries" className="group flex h-full flex-col justify-between rounded-3xl border border-border bg-background p-6 transition hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-soft">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-muted text-foreground transition group-hover:bg-foreground group-hover:text-background">
                  <i.icon className="h-5 w-5" />
                </div>
                <div className="mt-8 flex items-end justify-between">
                  <span className="font-display text-xl">{i.name}</span>
                  <ArrowUpRight className="h-4 w-4 text-ink-soft transition group-hover:rotate-45 group-hover:text-foreground" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const processSteps = [
  { step: "01", title: "Discover", desc: "Audit traffic, conversion, brand and competitive position." },
  { step: "02", title: "Strategy", desc: "A 90-day growth plan tied to revenue, not vanity metrics." },
  { step: "03", title: "Execute", desc: "A senior pod ships campaigns, creative and infrastructure." },
  { step: "04", title: "Optimize", desc: "Weekly tests, dashboards and CRO sprints compound returns." },
  { step: "05", title: "Scale", desc: "Channel mix expands as economics prove out." },
];

function Process() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container-pro">
        <Reveal>
          <div className="text-xs font-medium uppercase tracking-[0.18em] text-accent">Our process</div>
          <h2 className="mt-3 max-w-3xl font-display text-4xl leading-tight md:text-6xl">
            A repeatable system, not a one-off campaign.
          </h2>
        </Reveal>

        <div className="relative mt-14">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block" />
          <div className="grid gap-8 lg:grid-cols-5">
            {processSteps.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.08}>
                <div className="relative">
                  <div className="relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-background font-display text-lg text-foreground shadow-soft">
                    {p.step}
                  </div>
                  <h3 className="mt-6 font-display text-2xl">{p.title}</h3>
                  <p className="mt-2 text-[15px] text-ink-soft">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseStudies() {
  return (
    <section className="border-t border-border bg-surface py-20 md:py-28">
      <div className="container-pro">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="text-xs font-medium uppercase tracking-[0.18em] text-accent">Client success stories</div>
              <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight md:text-6xl">
                Compounding wins for category leaders.
              </h2>
            </div>
            <Link to="/case-studies" className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium hover:bg-muted">
              View all case studies <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 space-y-5">
          {caseStudies.map((c, i) => (
            <Reveal key={c.brand} delay={i * 0.05}>
              <div className={`group relative overflow-hidden rounded-[28px] border border-border bg-gradient-to-br ${c.accent} to-transparent bg-background transition hover:-translate-y-0.5 hover:shadow-elevated`}>
                <div className="grid gap-0 lg:grid-cols-[1.4fr_1fr]">
                  <div className="p-8 md:p-10">
                    <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      <span>{c.industry}</span>
                    </div>
                    <h3 className="mt-3 font-display text-3xl text-foreground md:text-4xl">{c.brand}</h3>

                    <div className="mt-6 grid gap-5 md:grid-cols-3">
                      <CaseBlock label="Challenge" body={c.challenge} />
                      <CaseBlock label="Strategy" body={c.strategy} />
                      <CaseBlock label="Execution" body={c.execution} />
                    </div>

                    <Link to="/case-studies" className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
                      Read full case study <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
                    </Link>
                  </div>

                  <div className="relative flex flex-col justify-center gap-6 border-t border-border bg-gradient-to-br from-[#06101f] to-[#0a1a2e] p-8 text-white md:p-10 lg:border-l lg:border-t-0">
                    <div className="absolute inset-0 dot-bg opacity-30" />
                    <div className="relative">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55">Result</div>
                      <div className="mt-3 font-display text-7xl leading-none text-white">{c.metric}</div>
                      <div className="mt-2 text-sm text-white/70">{c.metricLabel}</div>
                    </div>
                    <div className="relative inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur">
                      <LineChart className="h-3.5 w-3.5 text-success" />{c.roi}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseBlock({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">{label}</div>
      <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{body}</p>
    </div>
  );
}

function Team() {
  return (
    <section className="container-pro py-20 md:py-28">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="text-xs font-medium uppercase tracking-[0.18em] text-accent">Leadership</div>
            <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight md:text-6xl">
              Senior operators. No junior pass-offs.
            </h2>
          </div>
          <p className="max-w-md text-pretty text-ink-soft">
            Every engagement is led by a strategist with 8+ years of experience. The people who pitched
            you are the people who run your account.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.05}>
            <div className="group overflow-hidden rounded-3xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-elevated">
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <img src={t.img} alt={t.name} loading="lazy" width={768} height={896} className="h-full w-full object-cover grayscale transition duration-500 group-hover:grayscale-0 group-hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-5">
                <div className="font-display text-xl text-foreground">{t.name}</div>
                <div className="mt-0.5 text-[12.5px] font-medium text-accent">{t.role}</div>
                <p className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground">{t.bio}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function AwardsSection() {
  return (
    <section className="border-y border-border bg-surface py-20 md:py-24">
      <div className="container-pro">
        <Reveal>
          <div className="grid items-end gap-6 md:grid-cols-2">
            <div>
              <div className="text-xs font-medium uppercase tracking-[0.18em] text-accent">Recognition</div>
              <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
                Awarded by the industry that knows the work.
              </h2>
            </div>
            <p className="text-ink-soft md:text-lg">
              Eleven major awards across performance, brand and search in the last 36 months.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 divide-y divide-border overflow-hidden rounded-3xl border border-border bg-background">
          {awards.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.03}>
              <div className="group flex flex-wrap items-center justify-between gap-4 px-6 py-5 transition hover:bg-surface md:px-8">
                <div className="flex items-center gap-5">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Trophy className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <div className="font-display text-lg text-foreground md:text-xl">{a.title}</div>
                    <div className="text-xs text-muted-foreground">{a.org}</div>
                  </div>
                </div>
                <div className="font-display text-xl text-muted-foreground">{a.year}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section className="container-pro py-20 md:py-28">
      <Reveal>
        <div className="text-xs font-medium uppercase tracking-[0.18em] text-accent">Journey</div>
        <h2 className="mt-3 max-w-3xl font-display text-4xl leading-tight md:text-5xl">
          Twelve years of compounding results.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-5">
        {timeline.map((t) => (
          <div key={t.year} className="bg-background p-6">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-2.5 py-1 text-[11px] font-semibold text-accent">
              <Calendar className="h-3 w-3" />{t.year}
            </div>
            <div className="mt-4 font-display text-xl text-foreground leading-snug">{t.title}</div>
            <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">{t.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  return (
    <section className="border-t border-border bg-surface py-20 md:py-28">
      <div className="container-pro">
        <Reveal>
          <div className="text-xs font-medium uppercase tracking-[0.18em] text-accent">Testimonials</div>
          <h2 className="mt-3 max-w-3xl font-display text-4xl leading-tight md:text-6xl">
            What it feels like working with us.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 grid gap-8 rounded-[32px] border border-border bg-background p-8 shadow-soft md:grid-cols-[1fr_auto] md:p-12">
            <div>
              <Quote className="h-9 w-9 text-accent/40" />
              <motion.blockquote
                key={t.quote}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-4 font-display text-2xl leading-snug text-foreground md:text-[34px]"
              >
                "{t.quote}"
              </motion.blockquote>
              <div className="mt-7 flex items-center gap-4">
                <img src={t.img} alt={t.name} loading="lazy" width={56} height={56} className="h-14 w-14 rounded-full object-cover ring-2 ring-background" />
                <div>
                  <div className="font-semibold text-foreground">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
                <div className="ml-3 flex">
                  {[...Array(5)].map((_, x) => <Star key={x} className="h-4 w-4 fill-amber-400 text-amber-400" />)}
                </div>
              </div>
            </div>
            <div className="flex items-end gap-2 md:flex-col md:justify-between">
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button key={idx} onClick={() => setI(idx)} className={`h-2 w-8 rounded-full transition ${idx === i ? "bg-foreground" : "bg-border"}`} aria-label={`Testimonial ${idx + 1}`} />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="container-pro py-20 md:py-28">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <div>
            <div className="text-xs font-medium uppercase tracking-[0.18em] text-accent">FAQ</div>
            <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">Questions, answered.</h2>
            <p className="mt-4 text-ink-soft">
              Still wondering if we're a fit? <Link to="/contact" className="underline underline-offset-4">Book a 30-min call</Link> and we'll tell you straight.
            </p>
          </div>
        </Reveal>

        <div className="space-y-3">
          {faqs.map((f, idx) => {
            const isOpen = open === idx;
            return (
              <Reveal key={f.q} delay={idx * 0.04}>
                <div className="overflow-hidden rounded-2xl border border-border bg-card">
                  <button onClick={() => setOpen(isOpen ? null : idx)} className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left">
                    <span className="font-display text-lg text-foreground md:text-xl">{f.q}</span>
                    <ChevronDown className={`h-5 w-5 shrink-0 text-ink-soft transition ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  <motion.div initial={false} animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
                    <p className="px-6 pb-6 text-[15px] leading-relaxed text-ink-soft">{f.a}</p>
                  </motion.div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  const ctas = [
    { icon: Calendar, label: "Free 30-min strategy call", sub: "With a senior strategist · no pitch", href: "/contact", primary: true },
    { icon: MessageCircle, label: "WhatsApp our team", sub: "Avg. reply in 12 minutes", href: "https://wa.me/919999999999" },
    { icon: Phone, label: "+91 99999 99999", sub: "Mon–Fri · 9:30am–7pm IST", href: "tel:+919999999999" },
    { icon: Mail, label: "hello@Global Numedia.digital", sub: "We reply within one business day", href: "mailto:hello@Global Numedia.digital" },
  ];
  return (
    <section className="relative overflow-hidden bg-[#06101f] py-20 text-white md:py-28">
      <div className="absolute inset-0 dot-bg opacity-50" />
      <div className="pointer-events-none absolute -left-32 top-10 h-[420px] w-[420px] rounded-full opacity-30 blur-3xl" style={{ background: "radial-gradient(circle, #3b82f6, transparent 70%)" }} />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full opacity-25 blur-3xl" style={{ background: "radial-gradient(circle, #10b981, transparent 70%)" }} />

      <div className="container-pro relative">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <Reveal>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/80 backdrop-blur">
                <span className="inline-block h-1.5 w-1.5 animate-pulse-glow rounded-full bg-success" />
                Currently accepting 4 new clients for Q2
              </div>
              <h2 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
                Let's build a growth engine your board will brag about.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
                Tell us about your business. We'll send you a candid 7-page audit of your current
                marketing — what's working, what's broken, and where the biggest revenue is hiding.
                Free, no obligation, replied within 48 hours.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/70">
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-success" />NDA-friendly</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-success" />Senior strategist only</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-success" />No sales pitch</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid gap-3">
              {ctas.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className={`group flex items-center justify-between gap-4 rounded-2xl border p-5 transition ${
                    c.primary
                      ? "border-accent/40 bg-gradient-to-br from-accent/20 to-accent/5 hover:from-accent/30"
                      : "border-white/10 bg-white/[0.04] hover:border-white/25 hover:bg-white/[0.07]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${c.primary ? "bg-accent text-accent-foreground" : "bg-white/10 text-white"}`}>
                      <c.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-display text-lg text-white">{c.label}</div>
                      <div className="text-xs text-white/60">{c.sub}</div>
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-white/70 transition group-hover:rotate-45 group-hover:text-white" />
                </a>
              ))}

              <div className="mt-4 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex -space-x-2">
                  <img src={client1} alt="" loading="lazy" width={36} height={36} className="h-9 w-9 rounded-full object-cover ring-2 ring-[#06101f]" />
                  <img src={client2} alt="" loading="lazy" width={36} height={36} className="h-9 w-9 rounded-full object-cover ring-2 ring-[#06101f]" />
                  <img src={client3} alt="" loading="lazy" width={36} height={36} className="h-9 w-9 rounded-full object-cover ring-2 ring-[#06101f]" />
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-[11px] font-medium text-white ring-2 ring-[#06101f]">
                    <Users2 className="h-3.5 w-3.5" />
                  </div>
                </div>
                <div className="text-xs text-white/70">
                  <span className="font-semibold text-white">240+ founders & CMOs</span> have run their growth audit with us.
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
