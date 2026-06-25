import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Phone, Mail } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { trackEvent } from "@/lib/utils";

export function FloatingContact() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="pointer-events-none fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3"
      role="region"
      aria-label="Contact widget"
    >
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            className="pointer-events-auto w-72 overflow-hidden rounded-2xl border border-border bg-background shadow-elevated"
            role="dialog"
            aria-label="Contact options"
          >
            <div className="bg-[#06101f] px-5 py-4 text-white">
              <div className="text-[13px] uppercase tracking-[0.15em] text-white/60">
                We're online
              </div>
              <div className="mt-1 font-display text-lg">Let's talk growth</div>
            </div>
            <div className="flex flex-col p-3">
              <a
                href={COMPANY.whatsapp}
                onClick={() =>
                  trackEvent("contact_click", {
                    method: "whatsapp",
                    source: "floating_widget",
                  })
                }
                className="flex items-center gap-3 rounded-xl p-3 hover:bg-muted"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-success/15 text-success">
                  <MessageCircle className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-sm font-medium">WhatsApp</div>
                  <div className="text-xs text-muted-foreground">
                    Reply in &lt; 2 min
                  </div>
                </div>
              </a>
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                onClick={() =>
                  trackEvent("contact_click", {
                    method: "phone",
                    source: "floating_widget",
                  })
                }
                className="flex items-center gap-3 rounded-xl p-3 hover:bg-muted"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent/15 text-accent">
                  <Phone className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-sm font-medium">Call us</div>
                  <div className="text-xs text-muted-foreground">
                    {COMPANY.phone}
                  </div>
                </div>
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                onClick={() =>
                  trackEvent("contact_click", {
                    method: "email",
                    source: "floating_widget",
                  })
                }
                className="flex items-center gap-3 rounded-xl p-3 hover:bg-muted"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-foreground/10 text-foreground">
                  <Mail className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-sm font-medium">Email</div>
                  <div className="text-xs text-muted-foreground">
                    {COMPANY.email}
                  </div>
                </div>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={false}
        animate={{
          opacity: visible ? 1 : 0,
          scale: visible ? 1 : 0.8,
          y: visible ? 0 : 20,
        }}
        transition={{ duration: 0.3 }}
        onClick={() => {
          const wasOpen = open;
          setOpen((o) => !o);
          if (!wasOpen) trackEvent("floating_contact_opened");
        }}
        className="pointer-events-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-success text-white shadow-[0_18px_40px_-10px_rgba(16,185,129,0.55)] transition hover:scale-105"
        aria-label={open ? "Close contact options" : "Open contact options"}
        aria-expanded={open}
      >
        {open ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </motion.button>
    </div>
  );
}
