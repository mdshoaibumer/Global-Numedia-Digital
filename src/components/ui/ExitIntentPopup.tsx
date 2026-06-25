import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, Gift } from "lucide-react";
import { trackEvent } from "@/lib/utils";

export function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Don't show on mobile
    if (window.matchMedia("(pointer: coarse)").matches) return;
    // Don't show if already dismissed this session
    if (sessionStorage.getItem("exit-popup-dismissed")) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !dismissed) {
        setShow(true);
        trackEvent("exit_intent_shown");
      }
    };

    // Delay listener — give user time to consume value before prompting
    const timeout = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 20000);

    return () => {
      clearTimeout(timeout);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [dismissed]);

  const handleDismiss = () => {
    setShow(false);
    setDismissed(true);
    sessionStorage.setItem("exit-popup-dismissed", "true");
  };

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleDismiss}
            className="fixed inset-0 z-200 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed left-1/2 top-1/2 z-201 w-[90%] max-w-lg -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative overflow-hidden rounded-3xl border border-border bg-background p-8 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] md:p-10">
              {/* Background decoration */}
              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-violet-500/10 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl" />

              {/* Close button */}
              <button
                onClick={handleDismiss}
                className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-muted/50 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label="Close popup"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="relative">
                {/* Icon */}
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-violet-500 to-indigo-500 text-white shadow-lg">
                  <Gift className="h-6 w-6" />
                </div>

                {/* Content */}
                <h3 className="mt-5 font-display text-[clamp(1.5rem,4vw,2rem)] leading-tight text-foreground">
                  Wait — grab your free
                  <br />
                  <span className="italic text-accent">
                    marketing audit
                  </span>{" "}
                  first.
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                  We'll send you a candid 7-page audit of your current marketing
                  — what's working, what's broken, and where the biggest revenue
                  is hiding. Free, no obligation.
                </p>

                {/* Form */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const email = new FormData(e.currentTarget).get("email");
                    trackEvent("exit_intent_submit", { email });
                    handleDismiss();
                  }}
                  className="mt-6 flex flex-col gap-3 sm:flex-row"
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Your work email"
                    required
                    className="flex-1 rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                  />
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-violet-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_-6px_rgba(120,119,198,0.4)] transition-all duration-300 hover:shadow-[0_12px_32px_-6px_rgba(120,119,198,0.5)]"
                  >
                    Get Free Audit
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                  </button>
                </form>

                {/* Trust signals */}
                <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                  <span>✓ No credit card</span>
                  <span>✓ No sales pitch</span>
                  <span>✓ Reply within 48hrs</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
