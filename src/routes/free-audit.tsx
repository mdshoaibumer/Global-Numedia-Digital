import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  ArrowRight,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Gauge,
  Search,
  Shield,
  Smartphone,
  Zap,
  BarChart3,
  ArrowUpRight,
  Loader2,
  MessageCircle,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { COMPANY } from "@/lib/constants";

export const Route = createFileRoute("/free-audit")({
  head: () => ({
    meta: [
      { title: "Free Website & Marketing Audit — Global Numedia" },
      {
        name: "description",
        content:
          "Get an instant analysis of your website's SEO, speed, mobile-friendliness, and marketing effectiveness. Free, no obligation.",
      },
    ],
  }),
  component: FreeAuditPage,
});

interface AuditResult {
  overall: number;
  seo: { score: number; issues: string[] };
  speed: { score: number; issues: string[] };
  mobile: { score: number; issues: string[] };
  security: { score: number; issues: string[] };
  content: { score: number; issues: string[] };
}

function generateMockAudit(url: string): AuditResult {
  // Simulate varied but realistic scores based on URL length (deterministic-ish)
  const seed = url.length * 7 + url.charCodeAt(url.length - 1);
  const rand = (min: number, max: number) =>
    min + ((seed * 13 + min * 7) % (max - min));

  return {
    overall: rand(38, 72),
    seo: {
      score: rand(30, 75),
      issues: [
        "Missing meta descriptions on 12 pages",
        "No structured data (Schema.org) detected",
        "H1 tags missing on 4 key pages",
        "Images missing alt text (23 instances)",
        "No XML sitemap found",
      ].slice(0, rand(3, 5)),
    },
    speed: {
      score: rand(25, 65),
      issues: [
        "Largest Contentful Paint: 4.2s (should be <2.5s)",
        "Total Blocking Time: 850ms (should be <200ms)",
        "Uncompressed images adding 2.1MB to page weight",
        "Render-blocking JavaScript detected",
        "No CDN detected for static assets",
      ].slice(0, rand(3, 5)),
    },
    mobile: {
      score: rand(45, 80),
      issues: [
        "Tap targets too small (14 elements)",
        "Text too small to read without zooming",
        "Viewport not set correctly",
        "Content wider than screen on mobile",
      ].slice(0, rand(2, 4)),
    },
    security: {
      score: rand(50, 90),
      issues: [
        "Mixed content warnings (HTTP resources on HTTPS page)",
        "No Content Security Policy header",
        "Missing X-Frame-Options header",
        "Cookies without Secure flag",
      ].slice(0, rand(1, 4)),
    },
    content: {
      score: rand(20, 60),
      issues: [
        "No blog or content hub detected",
        "Thin content on service pages (<300 words)",
        "No FAQ schema markup",
        "Missing call-to-action on 6 pages",
        "No lead magnets or gated content found",
      ].slice(0, rand(3, 5)),
    },
  };
}

function FreeAuditPage() {
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AuditResult | null>(null);
  const [step, setStep] = useState<"input" | "email" | "result">("input");

  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    setStep("email");
  };

  const handleGetResults = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    // Simulate analysis time
    setTimeout(() => {
      setResult(generateMockAudit(url));
      setStep("result");
      setLoading(false);
    }, 3000);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#030712] pb-20 pt-32 text-white">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="container-pro relative">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-4 py-2 backdrop-blur-xl">
                <Gauge className="h-3.5 w-3.5 text-violet-400" />
                <span className="text-[13px] font-medium text-white/80">
                  Free Instant Analysis
                </span>
              </div>
            </motion.div>

            <motion.h1
              className="mt-6 font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-[-0.03em]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Get your free
              <br />
              <span className="bg-linear-to-r from-violet-400 to-indigo-300 bg-clip-text italic text-transparent">
                website & marketing audit.
              </span>
            </motion.h1>

            <motion.p
              className="mt-5 text-lg text-white/60"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We'll scan your website for SEO, speed, mobile, security, and
              content issues — and show you exactly where revenue is hiding.
            </motion.p>

            {/* Input form */}
            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <AnimatePresence mode="wait">
                {step === "input" && (
                  <motion.form
                    key="url-form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    onSubmit={handleAnalyze}
                    className="mx-auto flex max-w-xl items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-xl"
                  >
                    <Globe className="ml-3 h-5 w-5 shrink-0 text-white/40" />
                    <input
                      type="url"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      placeholder="Enter your website URL..."
                      required
                      inputMode="url"
                      autoComplete="url"
                      aria-label="Website URL"
                      className="flex-1 bg-transparent px-2 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="rounded-xl bg-linear-to-r from-violet-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_-6px_rgba(120,119,198,0.4)] transition-all hover:shadow-[0_12px_32px_-6px_rgba(120,119,198,0.5)]"
                    >
                      Analyze Free
                    </button>
                  </motion.form>
                )}

                {step === "email" && (
                  <motion.form
                    key="email-form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    onSubmit={handleGetResults}
                    className="mx-auto max-w-xl"
                  >
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                      <p className="text-sm text-white/70">
                        Great! We're analyzing{" "}
                        <span className="font-semibold text-white">{url}</span>
                      </p>
                      <p className="mt-2 text-xs text-white/50">
                        Enter your email to receive the full detailed report:
                      </p>
                      <div className="mt-4 flex items-center gap-2">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="your@email.com"
                          required
                          autoComplete="email"
                          aria-label="Email address"
                          className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-violet-500/50 focus:outline-none"
                        />
                        <button
                          type="submit"
                          disabled={loading}
                          className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-violet-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white disabled:opacity-70"
                        >
                          {loading ? (
                            <>
                              <Loader2 className="h-4 w-4 animate-spin" />
                              Analyzing...
                            </>
                          ) : (
                            <>
                              Get Results
                              <ArrowRight className="h-4 w-4" />
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>

              {step === "input" && (
                <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-xs text-white/40">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> No
                    credit card required
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />{" "}
                    Instant results
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />{" "}
                    100% free
                  </span>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results */}
      <AnimatePresence>
        {result && step === "result" && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="border-t border-border bg-background py-16 md:py-24"
          >
            <div className="container-pro">
              {/* Overall score */}
              <Reveal>
                <div className="mx-auto max-w-4xl">
                  <div className="text-center">
                    <h2 className="font-display text-3xl text-foreground md:text-4xl">
                      Your Website Score
                    </h2>
                    <div className="mt-6 inline-flex h-32 w-32 items-center justify-center rounded-full border-4 border-border bg-surface">
                      <span
                        className={`font-display text-5xl ${result.overall >= 70 ? "text-emerald-500" : result.overall >= 50 ? "text-amber-500" : "text-red-500"}`}
                      >
                        <Counter to={result.overall} suffix="" />
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">
                      out of 100
                    </p>
                    <p className="mt-2 text-sm font-medium text-foreground">
                      {result.overall >= 70
                        ? "Good — but there's room to grow"
                        : result.overall >= 50
                          ? "Needs improvement — you're losing leads"
                          : "Critical issues — you're leaving revenue on the table"}
                    </p>
                  </div>

                  {/* Category breakdown */}
                  <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <AuditCategory
                      icon={Search}
                      label="SEO"
                      score={result.seo.score}
                      issues={result.seo.issues}
                    />
                    <AuditCategory
                      icon={Zap}
                      label="Page Speed"
                      score={result.speed.score}
                      issues={result.speed.issues}
                    />
                    <AuditCategory
                      icon={Smartphone}
                      label="Mobile"
                      score={result.mobile.score}
                      issues={result.mobile.issues}
                    />
                    <AuditCategory
                      icon={Shield}
                      label="Security"
                      score={result.security.score}
                      issues={result.security.issues}
                    />
                    <AuditCategory
                      icon={BarChart3}
                      label="Content & CRO"
                      score={result.content.score}
                      issues={result.content.issues}
                    />
                  </div>

                  {/* CTA */}
                  <div className="mt-14 rounded-3xl border border-accent/20 bg-linear-to-r from-violet-500/5 to-indigo-500/5 p-8 text-center md:p-12">
                    <h3 className="font-display text-2xl text-foreground md:text-3xl">
                      Want us to fix these issues?
                    </h3>
                    <p className="mt-3 text-[15px] text-muted-foreground">
                      Book a free 30-minute call with a senior strategist. We'll
                      walk through your audit and build a custom growth plan —
                      no obligation, no pitch.
                    </p>
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                      <a
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-violet-500 to-indigo-500 px-8 py-4 text-sm font-semibold text-white shadow-[0_8px_24px_-6px_rgba(120,119,198,0.4)]"
                      >
                        Book Free Strategy Call
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                      <a
                        href={COMPANY.whatsapp}
                        className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-8 py-4 text-sm font-semibold text-foreground"
                      >
                        <MessageCircle className="h-4 w-4 text-emerald-500" />
                        WhatsApp Us
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* How it works - show when no results yet */}
      {!result && (
        <section className="border-t border-border bg-surface py-16 md:py-24">
          <div className="container-pro">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="font-display text-3xl text-foreground">
                  What you'll get in your free audit
                </h2>
                <div className="mt-10 grid gap-6 text-left md:grid-cols-2">
                  {[
                    {
                      icon: Search,
                      title: "SEO Analysis",
                      desc: "Meta tags, headings, sitemap, schema markup, keyword opportunities",
                    },
                    {
                      icon: Zap,
                      title: "Speed Report",
                      desc: "Core Web Vitals, LCP, FID, CLS — with specific fix recommendations",
                    },
                    {
                      icon: Smartphone,
                      title: "Mobile Audit",
                      desc: "Responsive design, tap targets, viewport, mobile UX issues",
                    },
                    {
                      icon: Shield,
                      title: "Security Check",
                      desc: "SSL, headers, mixed content, cookie compliance",
                    },
                    {
                      icon: BarChart3,
                      title: "Content & CRO",
                      desc: "Conversion rate potential, content gaps, lead gen opportunities",
                    },
                    {
                      icon: Globe,
                      title: "Competitor Snapshot",
                      desc: "How you stack up against top 3 competitors in your space",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex gap-4 rounded-2xl border border-border bg-background p-5"
                    >
                      <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}
    </>
  );
}

function AuditCategory({
  icon: Icon,
  label,
  score,
  issues,
}: {
  icon: typeof Search;
  label: string;
  score: number;
  issues: string[];
}) {
  const color =
    score >= 70
      ? "text-emerald-500"
      : score >= 50
        ? "text-amber-500"
        : "text-red-500";
  const bg =
    score >= 70
      ? "bg-emerald-500/10"
      : score >= 50
        ? "bg-amber-500/10"
        : "bg-red-500/10";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border border-border bg-card p-6"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className={`inline-flex h-9 w-9 items-center justify-center rounded-lg ${bg} ${color}`}
          >
            <Icon className="h-4 w-4" />
          </div>
          <span className="font-semibold text-foreground">{label}</span>
        </div>
        <span className={`font-display text-2xl ${color}`}>{score}</span>
      </div>
      <ul className="mt-4 space-y-2">
        {issues.map((issue, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-xs text-muted-foreground"
          >
            {score >= 70 ? (
              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />
            ) : score >= 50 ? (
              <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-500" />
            ) : (
              <XCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-red-500" />
            )}
            {issue}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
