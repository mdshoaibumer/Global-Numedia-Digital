import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring, useTransform } from "framer-motion";

export function Counter({
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1.6,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: duration * 1000, bounce: 0 });
  const text = useTransform(spring, (v) => `${prefix}${v.toFixed(decimals)}${suffix}`);
  const [val, setVal] = useState(`${prefix}0${suffix}`);

  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, mv, to]);

  useEffect(() => text.on("change", (v) => setVal(v)), [text]);

  return <span ref={ref}>{val}</span>;
}
