import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";

const notifications = [
  {
    name: "Priya S.",
    city: "Mumbai",
    action: "booked a free growth audit",
    time: "2 min ago",
  },
  {
    name: "Daniel O.",
    city: "Bengaluru",
    action: "started a strategy call",
    time: "5 min ago",
  },
  {
    name: "Rahul M.",
    city: "Dubai",
    action: "downloaded the SEO checklist",
    time: "8 min ago",
  },
  {
    name: "Sneha K.",
    city: "Pune",
    action: "booked a free growth audit",
    time: "12 min ago",
  },
  {
    name: "Amit P.",
    city: "Delhi NCR",
    action: "signed up for AI search audit",
    time: "15 min ago",
  },
  {
    name: "Lena P.",
    city: "Singapore",
    action: "requested a proposal",
    time: "18 min ago",
  },
  {
    name: "Vikram R.",
    city: "Hyderabad",
    action: "booked a free growth audit",
    time: "22 min ago",
  },
  {
    name: "Neha T.",
    city: "Mumbai",
    action: "started a strategy call",
    time: "25 min ago",
  },
];

export function SocialProofToast() {
  const [current, setCurrent] = useState<number | null>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    // Don't show on mobile
    if (window.matchMedia("(max-width: 768px)").matches) return;

    // First notification after 8 seconds
    const initialDelay = setTimeout(() => {
      setCurrent(0);
    }, 8000);

    return () => clearTimeout(initialDelay);
  }, [dismissed]);

  useEffect(() => {
    if (current === null || dismissed) return;

    // Auto-hide after 5 seconds
    const hideTimer = setTimeout(() => {
      setCurrent(null);
    }, 5000);

    return () => clearTimeout(hideTimer);
  }, [current, dismissed]);

  useEffect(() => {
    if (current !== null || dismissed) return;

    // Show next notification after 15-25 seconds
    const delay = 15000 + Math.random() * 10000;
    const nextTimer = setTimeout(() => {
      setCurrent((prev) => {
        const next = ((prev ?? -1) + 1) % notifications.length;
        return next;
      });
    }, delay);

    return () => clearTimeout(nextTimer);
  }, [current, dismissed]);

  const handleDismiss = () => {
    setCurrent(null);
    setDismissed(true);
  };

  const notification = current !== null ? notifications[current] : null;

  return (
    <AnimatePresence>
      {notification && !dismissed && (
        <motion.div
          initial={{ opacity: 0, x: -80, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -80, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-6 left-6 z-90 hidden md:block"
        >
          <div className="flex items-center gap-3 rounded-2xl border border-border bg-background/95 p-4 pr-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] backdrop-blur-xl">
            <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
              <CheckCircle2 className="h-5 w-5 text-emerald-500" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">
                <span className="font-semibold">{notification.name}</span> from{" "}
                {notification.city}
              </p>
              <p className="text-xs text-muted-foreground">
                {notification.action} · {notification.time}
              </p>
            </div>
            <button
              onClick={handleDismiss}
              className="absolute right-3 top-3 rounded-full p-1 text-muted-foreground/50 transition-colors hover:text-foreground"
              aria-label="Dismiss notifications"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
