import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ChevronDown, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { faqs } from "./data";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 md:py-32 lg:py-40">
      <div className="container-pro">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.5fr]">
          <Reveal variant="fade-right">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent"><MessageCircle className="h-3 w-3" /> FAQ</div>
              <h2 className="mt-5 font-display text-[clamp(2.25rem,5vw,3.25rem)] leading-[1.1] tracking-[-0.02em]">Questions,{" "}<span className="italic text-accent">answered.</span></h2>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">Still wondering if we're a fit?{" "}<Link to="/contact" className="font-medium text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent">Book a 30-min call</Link>{" "}and we'll tell you straight.</p>
            </div>
          </Reveal>
          <div className="space-y-3">
            {faqs.map((f, idx) => {
              const isOpen = open === idx;
              return (
                <Reveal key={f.q} delay={idx * 0.05}>
                  <motion.div className={`overflow-hidden rounded-2xl border transition-all duration-300 ${isOpen ? "border-accent/20 bg-accent/2 shadow-[0_8px_30px_-12px_rgba(120,119,198,0.1)]" : "border-border bg-card hover:border-accent/10"}`} layout>
                    <button onClick={() => setOpen(isOpen ? null : idx)} className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left">
                      <span className="font-display text-lg text-foreground md:text-xl">{f.q}</span>
                      <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}><ChevronDown className="h-5 w-5 shrink-0 text-accent" /></motion.div>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (<motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} className="overflow-hidden"><p className="px-6 pb-6 text-[15px] leading-[1.75] text-ink-soft">{f.a}</p></motion.div>)}
                    </AnimatePresence>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
