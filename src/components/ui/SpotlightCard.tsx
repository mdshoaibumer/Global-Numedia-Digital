import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { motion } from "framer-motion";

/**
 * SpotlightCard — a premium card component with a mouse-tracking radial
 * gradient highlight (border + fill) inspired by Linear/Stripe.
 */
export function SpotlightCard({
  children,
  className = "",
  as: Tag = "div",
  spotlightColor = "rgba(120, 119, 198, 0.12)",
  borderColor = "rgba(120, 119, 198, 0.15)",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "a" | typeof motion.div;
  spotlightColor?: string;
  borderColor?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  function handleMouseMove(e: MouseEvent) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className={`relative overflow-hidden ${className}`}
      style={{ isolation: "isolate" }}
    >
      {/* Border spotlight */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-500"
        style={{
          opacity: hovering ? 1 : 0,
          background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, ${borderColor}, transparent 40%)`,
        }}
      />

      {/* Fill spotlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-500"
        style={{
          opacity: hovering ? 1 : 0,
          background: `radial-gradient(400px circle at ${pos.x}px ${pos.y}px, ${spotlightColor}, transparent 40%)`,
        }}
      />

      {/* Inner shadow overlay for depth */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
        style={{
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04), inset 0 -1px 0 rgba(0,0,0,0.06)",
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
