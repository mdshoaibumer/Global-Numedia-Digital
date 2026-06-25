import { motion, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

type RevealVariant = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale" | "blur" | "slide-up";

const variants = {
  "fade-up": { hidden: { opacity: 0, y: 40, filter: "blur(4px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)" } },
  "fade-down": { hidden: { opacity: 0, y: -40, filter: "blur(4px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)" } },
  "fade-left": { hidden: { opacity: 0, x: -50, filter: "blur(4px)" }, visible: { opacity: 1, x: 0, filter: "blur(0px)" } },
  "fade-right": { hidden: { opacity: 0, x: 50, filter: "blur(4px)" }, visible: { opacity: 1, x: 0, filter: "blur(0px)" } },
  "scale": { hidden: { opacity: 0, scale: 0.92, filter: "blur(8px)" }, visible: { opacity: 1, scale: 1, filter: "blur(0px)" } },
  "blur": { hidden: { opacity: 0, filter: "blur(12px)" }, visible: { opacity: 1, filter: "blur(0px)" } },
  "slide-up": { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0 } },
};

const reducedMotionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export function Reveal({
  children,
  delay = 0,
  y = 40,
  variant = "fade-up",
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  variant?: RevealVariant;
  className?: string;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-60px" });
  const prefersReducedMotion = useReducedMotion();
  const v = variants[variant];

  if (prefersReducedMotion) {
    return (
      <motion.div
        ref={ref}
        initial={reducedMotionVariants.hidden}
        animate={inView ? reducedMotionVariants.visible : reducedMotionVariants.hidden}
        transition={{ duration: 0.3, delay }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={variant === "fade-up" ? { opacity: 0, y, filter: "blur(4px)" } : v.hidden}
      animate={inView ? v.visible : v.hidden}
      transition={{
        type: "spring",
        bounce: 0.18,
        duration: 0.8,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ParallaxReveal({
  children,
  offset = 60,
  className,
}: {
  children: ReactNode;
  offset?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [offset, -offset]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.08,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { type: "spring", bounce: 0.15, duration: 0.7 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
