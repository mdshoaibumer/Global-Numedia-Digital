import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MessageCircle, Star, ShieldCheck } from "lucide-react";
import { useRef } from "react";
import { Counter } from "@/components/ui/Counter";
import { COMPANY, STATS } from "@/lib/constants";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, prefersReducedMotion ? 0 : 150],
  );
  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.8],
    [1, prefersReducedMotion ? 1 : 0],
  );
  const heroScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, prefersReducedMotion ? 1 : 0.95],
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-[#030712]"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute left-1/4 top-0 hidden h-[800px] w-[800px] rounded-full md:block animate-aurora"
          style={{ background: "radial-gradient(circle, rgba(120, 119, 198, 0.15) 0%, transparent 70%)" }}
        />
        <div
          className="absolute right-0 top-1/3 hidden h-[600px] w-[600px] rounded-full md:block"
          style={{ background: "radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)" }}
        />
        <div
          className="absolute left-1/4 top-0 h-[400px] w-[400px] rounded-full md:hidden"
          style={{ background: "radial-gradient(circle, rgba(120, 119, 198, 0.08) 0%, transparent 70%)" }}
        />
      </div>
      <div
        className="grain-overlay absolute inset-0 hidden md:block"
        aria-hidden="true"
      />

      <motion.div
        style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
        className="relative z-10 flex min-h-screen flex-col justify-center pb-20 pt-32"
      >
        <div className="container-pro">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/4 px-4 py-2 backdrop-blur-xl">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-[13px] font-medium text-white/80">
                AI Search & AEO Pioneers · Google Premier Partner · Meta
                Business Partner
              </span>
            </div>
          </motion.div>

          <div className="mt-8">
            <motion.h1
              className="max-w-5xl font-display text-[clamp(2.75rem,5vw,5.5rem)] leading-[0.95] tracking-[-0.04em] text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 50, rotateX: 40 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                The growth partner
              </motion.span>
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 50, rotateX: 40 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.65,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                Fortune 500 marketers{" "}
              </motion.span>
              <motion.span
                className="relative inline-block"
                initial={{ opacity: 0, y: 50, rotateX: 40 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <span className="relative italic">
                  <span
                    className="bg-linear-to-r from-violet-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent animate-gradient-shift"
                    style={{
                      textShadow:
                        "0 0 60px rgba(139,92,246,0.5), 0 0 120px rgba(99,102,241,0.3)",
                    }}
                  >
                    trust
                  </span>
                  <motion.svg
                    className="absolute -bottom-2 left-0 h-4 w-full"
                    viewBox="0 0 200 12"
                    fill="none"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <motion.path
                      d="M2 8 Q 100 -2 198 8"
                      stroke="url(#hero-underline)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{
                        duration: 1.2,
                        delay: 1.4,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    />
                    <defs>
                      <linearGradient
                        id="hero-underline"
                        x1="0"
                        y1="0"
                        x2="200"
                        y2="0"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0%" stopColor="#a78bfa" />
                        <stop offset="50%" stopColor="#818cf8" />
                        <stop offset="100%" stopColor="#a78bfa" />
                      </linearGradient>
                    </defs>
                  </motion.svg>
                </span>{" "}
                with their P&L.
              </motion.span>
            </motion.h1>
          </div>

          <motion.p
            className="mt-8 max-w-xl text-[clamp(0.9375rem,1.5vw,1.0625rem)] leading-[1.7] text-white/70 font-normal"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              bounce: 0.15,
              duration: 0.9,
              delay: 1,
            }}
          >
            Global Numedia is a senior-only performance marketing agency. Since{" "}
            {COMPANY.foundedYear} we've helped
            <span className="font-semibold text-white">
              {" "}
              {STATS.brandsServed} brands
            </span>{" "}
            generate
            <span className="font-semibold text-white">
              {" "}
              {STATS.revenueGenerated}
            </span>{" "}
            in attributed revenue — now pioneering AI Search Optimization so
            your brand gets cited in ChatGPT, Perplexity &amp; Google AI
            Overviews.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              bounce: 0.15,
              duration: 0.9,
              delay: 1.2,
            }}
          >
            <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-white px-7 py-4 text-[15px] font-semibold text-[#030712] shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_4px_12px_rgba(0,0,0,0.1)] transition-all duration-300 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_8px_24px_rgba(120,119,198,0.25)]"
                >
                  <span className="relative z-10 flex items-center gap-2.5">
                    Book free growth audit
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                  </span>
                  <div className="absolute inset-0 bg-linear-to-r from-violet-400 to-indigo-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <a
                  href={COMPANY.whatsapp}
                  className="group inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/4 px-7 py-4 text-[15px] font-medium text-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl transition-all duration-300 hover:border-white/25 hover:bg-white/[0.07]"
                >
                  <MessageCircle className="h-4 w-4 text-emerald-400" />
                  WhatsApp our strategists
                </a>
              </motion.div>
          </motion.div>

          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/3 p-1 shadow-[0_0_80px_-20px_rgba(120,119,198,0.15)] backdrop-blur-2xl">
              <div className="relative overflow-hidden rounded-[24px] bg-white/2 p-8 md:p-10">
                <div
                  className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-violet-500/10 blur-3xl"
                  aria-hidden="true"
                />
                <div
                  className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-indigo-500/10 blur-3xl"
                  aria-hidden="true"
                />
                <div className="relative grid grid-cols-2 gap-y-10 md:grid-cols-4">
                  <HeroMetric
                    value={680}
                    prefix="₹"
                    suffix=" Cr+"
                    label="Revenue generated"
                    sub="for clients since 2013"
                  />
                  <HeroMetric
                    value={240}
                    suffix="+"
                    label="Brands served"
                    sub="14 industries · 6 countries"
                  />
                  <HeroMetric
                    value={94}
                    suffix="%"
                    label="Client retention"
                    sub="31-month avg. tenure"
                  />
                  <HeroMetric
                    value={5.4}
                    decimals={1}
                    suffix="x"
                    label="Average ROAS"
                    sub="blended paid media"
                  />
                </div>
                <div className="relative mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/6 pt-6 text-xs text-white/50">
                  <div className="flex items-center gap-1.5">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <span className="font-medium text-white/90">4.9/5</span> ·
                    180+ verified reviews
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="h-3.5 w-3.5 text-violet-400" />
                    Google Premier Partner
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="h-3.5 w-3.5 text-violet-400" />
                    Meta Business Partner
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="h-3.5 w-3.5 text-violet-400" />
                    HubSpot Platinum
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/30">
            Scroll
          </span>
          <div className="h-8 w-px bg-linear-to-b from-white/30 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function HeroMetric({
  value,
  prefix,
  suffix,
  decimals,
  label,
  sub,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  sub: string;
}) {
  return (
    <div className="px-2">
      <div className="font-display text-[clamp(2.5rem,5vw,3.5rem)] tabular-nums text-white text-glow">
        <Counter
          to={value}
          prefix={prefix}
          suffix={suffix}
          decimals={decimals ?? 0}
        />
      </div>
      <div className="mt-2 text-sm font-medium text-white/90">{label}</div>
      <div className="mt-1 text-xs text-white/40">{sub}</div>
    </div>
  );
}
