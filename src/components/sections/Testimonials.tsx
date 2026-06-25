import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "./data";

export function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const t = testimonials[i];

  const next = useCallback(() => {
    setI((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setI((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Auto-rotation — pause on hover
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [paused, next]);

  return (
    <section className="border-t border-border bg-surface py-24 md:py-32 lg:py-40">
      <div className="container-pro">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            <Quote className="h-3 w-3" /> Testimonials
          </div>
          <h2 className="mt-5 max-w-3xl font-display text-[clamp(2.5rem,6vw,4rem)] leading-[1.05] tracking-[-0.02em]">
            What it feels like{" "}
            <span className="italic text-accent">working with us.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <div
            className="mt-12 relative overflow-hidden rounded-[36px] border border-border bg-background p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] md:p-14"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-accent/5 blur-3xl" />
            <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <Quote className="h-10 w-10 text-accent/30" />
                <AnimatePresence mode="wait">
                  <motion.blockquote
                    key={t.quote}
                    initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-5 font-display text-[clamp(1.5rem,3.5vw,2.25rem)] leading-[1.3] text-foreground"
                  >
                    "{t.quote}"
                  </motion.blockquote>
                </AnimatePresence>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={t.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="mt-8 flex items-center gap-4"
                  >
                    <img
                      src={t.img}
                      alt={t.name}
                      loading="lazy"
                      width={56}
                      height={56}
                      className="h-14 w-14 rounded-full object-cover ring-2 ring-accent/20"
                    />
                    <div>
                      <div className="font-semibold text-foreground">
                        {t.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {t.role}
                      </div>
                    </div>
                    <div className="ml-4 flex">
                      {[...Array(5)].map((_, x) => (
                        <Star
                          key={x}
                          className="h-4 w-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
                {/* Desktop navigation arrows */}
                <div className="mt-8 hidden items-center gap-3 md:flex">
                  <button
                    onClick={prev}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-accent/40 hover:text-accent"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={next}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-accent/40 hover:text-accent"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                  <span className="ml-2 text-xs text-muted-foreground">
                    {i + 1} / {testimonials.length}
                  </span>
                </div>
              </div>
              <div className="flex gap-2 md:flex-col">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setI(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${idx === i ? "w-10 bg-accent" : "w-2.5 bg-border hover:bg-muted-foreground/30"}`}
                    aria-label={`Testimonial ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
