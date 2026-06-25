import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("gn-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  function accept() {
    localStorage.setItem("gn-cookie-consent", "accepted");
    setShow(false);
  }

  function decline() {
    localStorage.setItem("gn-cookie-consent", "declined");
    setShow(false);
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
          className="fixed bottom-4 left-4 right-4 z-9999 mx-auto max-w-lg rounded-2xl border border-border bg-card/95 p-5 shadow-2xl backdrop-blur-xl md:left-6 md:right-auto"
        >
          <button
            onClick={decline}
            className="absolute right-3 top-3 rounded-full p-1 text-muted-foreground transition hover:text-foreground"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-surface">
              <Cookie className="h-4 w-4 text-foreground" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">
                We value your privacy
              </p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                We use cookies to enhance your browsing experience, serve
                personalized ads, and analyze traffic. By clicking "Accept", you
                consent to our use of cookies.
              </p>
              <div className="mt-3 flex items-center gap-2">
                <button
                  onClick={accept}
                  className="rounded-full bg-foreground px-4 py-1.5 text-xs font-medium text-background transition hover:opacity-90"
                >
                  Accept all
                </button>
                <button
                  onClick={decline}
                  className="rounded-full border border-border px-4 py-1.5 text-xs font-medium text-foreground transition hover:bg-surface"
                >
                  Decline
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
