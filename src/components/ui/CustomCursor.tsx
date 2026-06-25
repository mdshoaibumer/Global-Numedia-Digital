import { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [hoverText, setHoverText] = useState("");

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const moveCursor = useCallback(
    (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    },
    [cursorX, cursorY],
  );

  useEffect(() => {
    // Hide on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => moveCursor(e);
    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    // Detect hover targets
    const observer = new MutationObserver(() => {
      setupHoverListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });
    setupHoverListeners();

    function setupHoverListeners() {
      const interactiveElements = document.querySelectorAll(
        'a, button, [role="button"], [data-cursor="pointer"], [data-cursor-text]',
      );
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleElementEnter);
        el.addEventListener("mouseleave", handleElementLeave);
      });
    }

    function handleElementEnter(e: Event) {
      setIsHovering(true);
      const target = e.currentTarget as HTMLElement;
      const text = target.getAttribute("data-cursor-text");
      if (text) setHoverText(text);
    }

    function handleElementLeave() {
      setIsHovering(false);
      setHoverText("");
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave,
      );
      document.documentElement.removeEventListener(
        "mouseenter",
        handleMouseEnter,
      );
      observer.disconnect();
    };
  }, [moveCursor]);

  // Don't render on touch devices
  if (
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches
  ) {
    return null;
  }

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-9999"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
    >
      <motion.div
        className="relative flex items-center justify-center rounded-full border border-brand-warm/40"
        animate={{
          width: isHovering ? 56 : 32,
          height: isHovering ? 56 : 32,
          opacity: isHidden ? 0 : 0.6,
          borderColor: isHovering
            ? "oklch(0.78 0.16 70 / 60%)"
            : "oklch(0.78 0.16 70 / 25%)",
        }}
        transition={{ type: "spring", damping: 20, stiffness: 400, mass: 0.5 }}
        style={{
          marginLeft: isHovering ? -28 : -16,
          marginTop: isHovering ? -28 : -16,
        }}
      >
        {hoverText && isHovering && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="text-[9px] font-semibold uppercase tracking-wider text-foreground"
          >
            {hoverText}
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  );
}
