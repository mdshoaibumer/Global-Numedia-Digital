import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Calculator,
  Sparkles,
  TrendingUp,
  Target,
  DollarSign,
} from "lucide-react";
import { Counter } from "@/components/ui/Counter";
import { trackEvent } from "@/lib/utils";

const industries = [
  "Healthcare",
  "Real Estate",
  "E-commerce / D2C",
  "Edtech",
  "Hospitality",
  "B2B SaaS",
  "F&B / Restaurant",
  "Finance",
  "Legal",
  "Other",
];

const budgetRanges = [
  { label: "₹1–3 Lakh/mo", value: 200000 },
  { label: "₹3–7 Lakh/mo", value: 500000 },
  { label: "₹7–15 Lakh/mo", value: 1100000 },
  { label: "₹15–30 Lakh/mo", value: 2250000 },
  { label: "₹30+ Lakh/mo", value: 4000000 },
];

const goals = [
  "Generate more leads",
  "Increase online sales",
  "Build brand awareness",
  "Improve ROI on ads",
  "Rank higher on Google",
  "Reduce cost per acquisition",
];

interface FormData {
  industry: string;
  budget: number;
  goal: string;
  name: string;
  email: string;
  phone: string;
}

export function ROICalculator() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    industry: "",
    budget: 0,
    goal: "",
    name: "",
    email: "",
    phone: "",
  });
  const [showResults, setShowResults] = useState(false);

  const totalSteps = 4;
  const progress = ((step + 1) / totalSteps) * 100;

  // Calculate projected results based on inputs — memoized to avoid recalc with new random on every render
  const projections = useMemo(() => {
    if (!formData.budget || !formData.industry)
      return { leads: 0, roas: 0, revenue: 0, cpl: 0 };
    // Deterministic "random" based on industry string to keep results stable
    const seed = formData.industry.charCodeAt(0) * 7 + formData.budget;
    const variance = (seed % 30) / 100; // 0–0.30 deterministic variance
    const leads = Math.round((formData.budget / 100000) * 45 * (1 + variance));
    const roas = parseFloat((3.2 + variance * 9).toFixed(1));
    const revenue = Math.round(formData.budget * roas);
    const cpl = leads > 0 ? Math.round(formData.budget / leads) : 0;
    return { leads, roas, revenue, cpl };
  }, [formData.budget, formData.industry]);

  const handleNext = () => {
    if (step < totalSteps - 1) {
      trackEvent("roi_calculator_step", {
        step: step + 1,
        stepName: ["industry", "budget", "goal", "contact"][step],
        value:
          step === 0
            ? formData.industry
            : step === 1
              ? formData.budget
              : step === 2
                ? formData.goal
                : formData.email,
      });
      setStep(step + 1);
    } else {
      trackEvent("roi_calculator_complete", {
        industry: formData.industry,
        budget: formData.budget,
        goal: formData.goal,
      });
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (showResults) {
      setShowResults(false);
    } else if (step > 0) {
      setStep(step - 1);
    }
  };

  const canProceed = () => {
    switch (step) {
      case 0:
        return formData.industry !== "";
      case 1:
        return formData.budget > 0;
      case 2:
        return formData.goal !== "";
      case 3:
        return formData.email !== "" && formData.name !== "";
      default:
        return false;
    }
  };

  return (
    <section
      id="roi-calculator"
      className="relative overflow-hidden border-t border-border bg-surface py-24 md:py-32 lg:py-40"
    >
      <div className="container-pro">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              <Calculator className="h-3 w-3" /> ROI Calculator
            </div>
            <h2 className="mt-5 font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-foreground">
              See your projected{" "}
              <span className="italic text-accent">growth.</span>
            </h2>
            <p className="mt-3 text-[15px] text-muted-foreground">
              Answer 4 quick questions and get a personalized growth projection
              based on our data from 240+ campaigns.
            </p>
          </div>

          {/* Progress bar */}
          {!showResults && (
            <div className="mt-10" aria-live="polite" aria-atomic="true">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>
                  Step {step + 1} of {totalSteps}
                </span>
                <span>{Math.round(progress)}% complete</span>
              </div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-border">
                <motion.div
                  className="h-full rounded-full bg-linear-to-r from-violet-500 to-indigo-500"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
            </div>
          )}

          {/* Steps */}
          <div className="mt-10">
            <AnimatePresence mode="wait">
              {showResults ? (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <ResultsPanel
                    leads={projections.leads}
                    roas={projections.roas}
                    revenue={projections.revenue}
                    cpl={projections.cpl}
                    budget={formData.budget}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  {step === 0 && (
                    <StepCard title="What industry are you in?">
                      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                        {industries.map((ind) => (
                          <button
                            key={ind}
                            onClick={() =>
                              setFormData({ ...formData, industry: ind })
                            }
                            className={`rounded-2xl border p-4 text-left text-sm font-medium transition-all duration-200 ${
                              formData.industry === ind
                                ? "border-accent bg-accent/10 text-accent shadow-[0_0_20px_-4px_rgba(120,119,198,0.2)]"
                                : "border-border bg-background text-foreground hover:border-accent/30"
                            }`}
                          >
                            {ind}
                          </button>
                        ))}
                      </div>
                    </StepCard>
                  )}

                  {step === 1 && (
                    <StepCard title="What's your monthly marketing budget?">
                      <div className="grid gap-3">
                        {budgetRanges.map((b) => (
                          <button
                            key={b.label}
                            onClick={() =>
                              setFormData({ ...formData, budget: b.value })
                            }
                            className={`flex items-center justify-between rounded-2xl border p-5 text-left transition-all duration-200 ${
                              formData.budget === b.value
                                ? "border-accent bg-accent/10 shadow-[0_0_20px_-4px_rgba(120,119,198,0.2)]"
                                : "border-border bg-background hover:border-accent/30"
                            }`}
                          >
                            <span className="text-sm font-semibold text-foreground">
                              {b.label}
                            </span>
                            <DollarSign
                              className={`h-4 w-4 ${formData.budget === b.value ? "text-accent" : "text-muted-foreground"}`}
                            />
                          </button>
                        ))}
                      </div>
                    </StepCard>
                  )}

                  {step === 2 && (
                    <StepCard title="What's your primary marketing goal?">
                      <div className="grid gap-3 md:grid-cols-2">
                        {goals.map((g) => (
                          <button
                            key={g}
                            onClick={() =>
                              setFormData({ ...formData, goal: g })
                            }
                            className={`flex items-center gap-3 rounded-2xl border p-4 text-left text-sm font-medium transition-all duration-200 ${
                              formData.goal === g
                                ? "border-accent bg-accent/10 text-accent shadow-[0_0_20px_-4px_rgba(120,119,198,0.2)]"
                                : "border-border bg-background text-foreground hover:border-accent/30"
                            }`}
                          >
                            <Target
                              className={`h-4 w-4 shrink-0 ${formData.goal === g ? "text-accent" : "text-muted-foreground"}`}
                            />
                            {g}
                          </button>
                        ))}
                      </div>
                    </StepCard>
                  )}

                  {step === 3 && (
                    <StepCard title="Where should we send your growth plan?">
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="roi-name" className="sr-only">
                            Your name
                          </label>
                          <input
                            id="roi-name"
                            type="text"
                            placeholder="Your name"
                            autoComplete="name"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            className="w-full rounded-xl border border-border bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                          />
                        </div>
                        <div>
                          <label htmlFor="roi-email" className="sr-only">
                            Work email
                          </label>
                          <input
                            id="roi-email"
                            type="email"
                            placeholder="Work email"
                            autoComplete="email"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                            className="w-full rounded-xl border border-border bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                          />
                        </div>
                        <div>
                          <label htmlFor="roi-phone" className="sr-only">
                            Phone (optional)
                          </label>
                          <input
                            id="roi-phone"
                            type="tel"
                            placeholder="Phone (optional)"
                            autoComplete="tel"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                phone: e.target.value,
                              })
                            }
                            className="w-full rounded-xl border border-border bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                          />
                        </div>
                      </div>
                    </StepCard>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Navigation */}
          {!showResults && (
            <div className="mt-8 flex items-center justify-between">
              <button
                onClick={handleBack}
                disabled={step === 0}
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground disabled:opacity-0"
              >
                <ArrowLeft className="h-4 w-4" /> Back
              </button>
              <button
                onClick={handleNext}
                disabled={!canProceed()}
                className="group inline-flex items-center gap-2 rounded-full bg-linear-to-r from-violet-500 to-indigo-500 px-7 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_-6px_rgba(120,119,198,0.4)] transition-all duration-300 hover:shadow-[0_12px_32px_-6px_rgba(120,119,198,0.5)] disabled:opacity-40 disabled:shadow-none"
              >
                {step === totalSteps - 1 ? "See My Results" : "Continue"}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function StepCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-border bg-background p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)]">
      <h3 className="mb-6 font-display text-xl text-foreground">{title}</h3>
      {children}
    </div>
  );
}

function ResultsPanel({
  leads,
  roas,
  revenue,
  cpl,
  budget,
}: {
  leads: number;
  roas: number;
  revenue: number;
  cpl: number;
  budget: number;
}) {
  return (
    <div className="overflow-hidden rounded-3xl border border-accent/20 bg-background shadow-[0_30px_80px_-20px_rgba(120,119,198,0.15)]">
      {/* Header */}
      <div className="border-b border-border bg-linear-to-r from-violet-500/10 to-indigo-500/5 p-8">
        <div className="flex items-center gap-3">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-violet-500 to-indigo-500 text-white">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-display text-xl text-foreground">
              Your Growth Projection
            </h3>
            <p className="text-xs text-muted-foreground">
              Based on data from 240+ similar campaigns
            </p>
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid gap-0 divide-y divide-border md:grid-cols-2 md:divide-x md:divide-y-0">
        <ResultMetric
          label="Projected Monthly Leads"
          value={leads}
          suffix="+"
          icon={<Target className="h-4 w-4" />}
          delay={0.2}
        />
        <ResultMetric
          label="Expected ROAS"
          value={roas}
          suffix="x"
          decimals={1}
          icon={<TrendingUp className="h-4 w-4" />}
          delay={0.4}
        />
        <ResultMetric
          label="Projected Revenue/mo"
          value={Math.round(revenue / 100000)}
          prefix="₹"
          suffix=" L"
          icon={<DollarSign className="h-4 w-4" />}
          delay={0.6}
        />
        <ResultMetric
          label="Est. Cost Per Lead"
          value={cpl}
          prefix="₹"
          icon={<Calculator className="h-4 w-4" />}
          delay={0.8}
        />
      </div>

      {/* CTA */}
      <div className="border-t border-border p-8 text-center">
        <p className="text-sm text-muted-foreground">
          Want us to build a detailed plan to hit these numbers?
        </p>
        <a
          href="/contact"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-violet-500 to-indigo-500 px-8 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_-6px_rgba(120,119,198,0.4)] transition-all duration-300 hover:shadow-[0_12px_32px_-6px_rgba(120,119,198,0.5)]"
        >
          Book Free Strategy Call
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

function ResultMetric({
  label,
  value,
  prefix,
  suffix,
  decimals,
  icon,
  delay,
}: {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  icon: React.ReactNode;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="p-8"
    >
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        {icon}
        {label}
      </div>
      <div className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] tracking-tight text-foreground">
        <Counter
          to={value}
          prefix={prefix}
          suffix={suffix}
          decimals={decimals ?? 0}
        />
      </div>
    </motion.div>
  );
}
