import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShow(window.scrollY > 600);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
          onClick={scrollTop}
          className="fixed bottom-20 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/90 shadow-lg backdrop-blur-xl transition hover:bg-surface hover:shadow-xl"
          aria-label="Back to top"
        >
          <ArrowUp className="h-4 w-4 text-foreground" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
