import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { COMPANY } from "@/lib/constants";

export function ContactCTA() {
  const ctas = [
    {
      icon: Calendar,
      label: "Book a free consultation",
      sub: "No obligation · Let's discuss your needs",
      href: "/contact",
      primary: true,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp us",
      sub: "Quick replies during business hours",
      href: COMPANY.whatsapp,
    },
    {
      icon: Phone,
      label: COMPANY.phone,
      sub: "Mon–Fri · 9:30am–7pm IST",
      href: `tel:${COMPANY.phoneRaw}`,
    },
    {
      icon: Mail,
      label: COMPANY.email,
      sub: "We reply within one business day",
      href: `mailto:${COMPANY.email}`,
    },
  ];
  return (
    <section className="relative overflow-hidden bg-[#030712] py-24 text-white md:py-32">
      <div className="absolute inset-0">
        <div
          className="absolute left-0 top-0 hidden h-[600px] w-[600px] rounded-full md:block animate-aurora"
          style={{ background: "radial-gradient(circle, rgba(120, 119, 198, 0.08) 0%, transparent 70%)" }}
        />
      </div>
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="container-pro relative">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <Reveal variant="fade-right">
            <div>
              <motion.div
                className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/4 px-4 py-2 backdrop-blur-xl"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(16,185,129,0)",
                    "0 0 0 8px rgba(16,185,129,0.1)",
                    "0 0 0 0 rgba(16,185,129,0)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="text-[13px] font-medium text-white/80">
                  Available for new projects
                </span>
              </motion.div>
              <h2 className="mt-7 font-display text-[clamp(2.5rem,6vw,4rem)] leading-[1.05] tracking-[-0.02em]">
                Ready to grow your{" "}
                <span className="bg-linear-to-r from-violet-400 to-indigo-300 bg-clip-text italic text-transparent">
                  business?
                </span>
              </h2>
              <p className="mt-6 max-w-xl text-[clamp(1rem,2vw,1.125rem)] leading-relaxed text-white/60">
                Tell us about your business and goals. We'll get back to you
                with a clear plan on how we can help.
                <span className="font-medium text-white/80">
                  {" "}
                  Free consultation, no obligation.
                </span>
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/50">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  Free consultation
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  No obligation
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  Quick response
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal variant="fade-left" delay={0.15}>
            <div className="grid gap-3">
              {ctas.map((c) => (
                <motion.a
                  key={c.label}
                  href={c.href}
                  className={`group flex items-center justify-between gap-4 rounded-2xl border p-5 transition-all duration-300 ${c.primary ? "border-violet-500/30 bg-linear-to-r from-violet-500/15 to-indigo-500/5 hover:from-violet-500/25 hover:to-indigo-500/10 hover:shadow-[0_8px_30px_-8px_rgba(120,119,198,0.2)]" : "border-white/6 bg-white/2 hover:border-white/15 hover:bg-white/5"}`}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${c.primary ? "bg-linear-to-br from-violet-500 to-indigo-500 text-white shadow-[0_8px_24px_-6px_rgba(120,119,198,0.4)]" : "bg-white/6 text-white"}`}
                    >
                      <c.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-display text-lg text-white">
                        {c.label}
                      </div>
                      <div className="text-xs text-white/50">{c.sub}</div>
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-white/40 transition-all duration-300 group-hover:rotate-45 group-hover:text-white" />
                </motion.a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function MobileFixedCTA() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    // Only show after user scrolls past hero section (approx viewport height)
    const onScroll = () =>
      setVisible(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
          className="fixed bottom-4 left-4 right-4 z-50 md:hidden"
        >
          <Link
            to="/contact"
            className="flex items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-violet-500 to-indigo-500 px-6 py-4 text-sm font-semibold text-white shadow-[0_12px_40px_-8px_rgba(120,119,198,0.5)] backdrop-blur-xl"
          >
            Book a Free Consultation <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
