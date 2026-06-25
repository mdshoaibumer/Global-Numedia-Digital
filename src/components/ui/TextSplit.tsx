import { motion, useInView, useReducedMotion, type Variants, type Variant } from "framer-motion";
import { useRef } from "react";

interface TextSplitProps {
  children: string;
  className?: string;
  delay?: number;
  once?: boolean;
  splitBy?: "chars" | "words" | "lines";
  animation?: "fade-up" | "fade-down" | "blur-in" | "rotate-in" | "slide-up";
  staggerDelay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

const animations: Record<string, { hidden: object; visible: object }> = {
  "fade-up": {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-down": {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  },
  "blur-in": {
    hidden: { opacity: 0, filter: "blur(10px)", y: 10 },
    visible: { opacity: 1, filter: "blur(0px)", y: 0 },
  },
  "rotate-in": {
    hidden: { opacity: 0, rotateX: 90, y: 20 },
    visible: { opacity: 1, rotateX: 0, y: 0 },
  },
  "slide-up": {
    hidden: { opacity: 0, y: "100%" },
    visible: { opacity: 1, y: "0%" },
  },
};

export function TextSplit({
  children,
  className = "",
  delay = 0,
  once = true,
  splitBy = "words",
  animation = "fade-up",
  staggerDelay = 0.03,
  as: Tag = "span",
}: TextSplitProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <Tag className={className}>{children}</Tag>;
  }

  const { hidden, visible } = animations[animation];

  let elements: string[];
  if (splitBy === "chars") {
    elements = children.split("");
  } else if (splitBy === "lines") {
    elements = children.split("\n");
  } else {
    elements = children.split(" ");
  }

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const childVariants: Variants = {
    hidden: hidden as Variant,
    visible: {
      ...(visible as object),
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        mass: 0.8,
      },
    } as Variant,
  };

  return (
    <motion.span
      ref={ref as React.RefObject<HTMLSpanElement>}
      className={`inline-block ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {elements.map((element, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span className="inline-block" variants={childVariants}>
            {element}
            {splitBy === "words" && i < elements.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

// Heading variant with line-by-line animation
interface AnimatedHeadingProps {
  lines: string[];
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3";
}

export function AnimatedHeading({ lines, className = "", delay = 0, as: Tag = "h1" }: AnimatedHeadingProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <Tag ref={ref as React.RefObject<HTMLHeadingElement>} className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            className="block"
            initial={{ y: "110%", rotateX: 40, opacity: 0 }}
            animate={inView ? { y: "0%", rotateX: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.9,
              delay: delay + i * 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
