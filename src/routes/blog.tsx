import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Bookmark } from "lucide-react";
import { PageHero, CTAStrip } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/Reveal";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Insights — Global Numedia" },
      {
        name: "description",
        content:
          "Frameworks, playbooks and field reports from a senior growth team — without the agency fluff.",
      },
      { property: "og:title", content: "Insights — Global Numedia" },
      {
        property: "og:description",
        content: "Frameworks and playbooks from a senior growth team.",
      },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

const categories = [
  "All",
  "AI & AEO",
  "SEO",
  "Paid Media",
  "CRO",
  "Branding",
  "Strategy",
];

const posts = [
  {
    tag: "AI & AEO",
    title: "How to get cited in ChatGPT: our 90-day AEO playbook.",
    read: "12 min",
    date: "Jun 18, 2026",
    featured: true,
    gradient: "from-violet-500/20 to-indigo-500/10",
  },
  {
    tag: "Paid Media",
    title: "The PMax playbook we run for every e-commerce client.",
    read: "9 min",
    date: "Jun 04, 2026",
    gradient: "from-amber-500/20 to-orange-500/10",
  },
  {
    tag: "SEO",
    title: "Why topical authority beats keyword volume in 2026.",
    read: "7 min",
    date: "May 22, 2026",
    gradient: "from-emerald-500/20 to-teal-500/10",
  },
  {
    tag: "AI & AEO",
    title: "Google AI Overviews: what we learned from 500 client keywords.",
    read: "14 min",
    date: "May 10, 2026",
    gradient: "from-cyan-500/20 to-blue-500/10",
  },
  {
    tag: "CRO",
    title: "12 landing page audits that found ₹4 Cr in lost revenue.",
    read: "13 min",
    date: "Apr 28, 2026",
    gradient: "from-rose-500/20 to-pink-500/10",
  },
  {
    tag: "Branding",
    title: "Building a visual identity that earns pricing power.",
    read: "11 min",
    date: "Apr 14, 2026",
    gradient: "from-purple-500/20 to-violet-500/10",
  },
  {
    tag: "Strategy",
    title: "Inside a 90-day growth sprint at Global Numedia.",
    read: "10 min",
    date: "Mar 30, 2026",
    gradient: "from-indigo-500/20 to-violet-500/10",
  },
  {
    tag: "SEO",
    title: "The content velocity framework that drives 248% organic growth.",
    read: "8 min",
    date: "Mar 16, 2026",
    gradient: "from-emerald-500/20 to-green-500/10",
  },
  {
    tag: "Paid Media",
    title: "Why your Meta campaigns fail after 14 days (and how to fix it).",
    read: "7 min",
    date: "Mar 02, 2026",
    gradient: "from-blue-500/20 to-indigo-500/10",
  },
];

function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.tag === activeCategory);
  const featured = filteredPosts[0];
  const rest = filteredPosts.slice(1);

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={
          <>
            Field notes from a{" "}
            <span className="italic">senior growth team.</span>
          </>
        }
        description="Playbooks, frameworks and teardown reports — published when we have something worth saying."
      />

      {/* Newsletter signup bar */}
      <section className="border-b border-border bg-surface">
        <div className="container-pro flex flex-col items-center justify-between gap-4 py-5 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <Mail className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">
                Weekly Growth Insights
              </p>
              <p className="text-xs text-muted-foreground">
                Join 4,200+ marketers. One email/week. Unsubscribe anytime.
              </p>
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              autoComplete="email"
              placeholder="your@email.com"
              className="rounded-lg border border-border bg-background px-4 py-2 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/20"
            />
            <button className="rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:opacity-90">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Category filter */}
      <section className="container-pro pt-10">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-foreground text-background shadow-sm"
                  : "bg-surface text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured post */}
      {featured && (
        <section className="container-pro py-10">
          <Reveal>
            <Link
              to="/blog"
              className="group relative block overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:border-accent/20 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] md:p-12"
            >
              <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
                <div
                  className={`relative h-56 overflow-hidden rounded-2xl bg-gradient-to-br ${featured.gradient} lg:h-full lg:min-h-[280px]`}
                >
                  <div className="absolute inset-0 dot-bg opacity-40" />
                  <div className="absolute bottom-5 left-5 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    <Bookmark className="h-3 w-3" /> Featured
                  </div>
                </div>
                <div>
                  <div className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                    {featured.tag}
                  </div>
                  <h3 className="mt-3 font-display text-3xl leading-tight md:text-4xl">
                    {featured.title}
                  </h3>
                  <div className="mt-6 flex items-center gap-4 text-sm text-ink-soft">
                    <span>{featured.date}</span>
                    <span>·</span>
                    <span>{featured.read} read</span>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-foreground">
                    Read article{" "}
                    <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        </section>
      )}

      {/* Empty state */}
      {filteredPosts.length === 0 && (
        <section className="container-pro py-20 text-center">
          <p className="text-lg text-muted-foreground">
            No articles in this category yet. Check back soon.
          </p>
          <button
            onClick={() => setActiveCategory("All")}
            className="mt-4 text-sm font-medium text-accent hover:underline"
          >
            View all articles
          </button>
        </section>
      )}

      {/* Post grid */}
      <section className="container-pro pb-24">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <Link
                to="/blog"
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:border-accent/15 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)]"
              >
                <div className={`h-32 bg-gradient-to-br ${p.gradient}`}>
                  <div className="h-full w-full dot-bg opacity-30" />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                    {p.tag}
                  </div>
                  <h3 className="mt-3 flex-1 font-display text-xl leading-snug">
                    {p.title}
                  </h3>
                  <div className="mt-6 flex items-center justify-between text-sm text-ink-soft">
                    <span>
                      {p.date} · {p.read}
                    </span>
                    <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
