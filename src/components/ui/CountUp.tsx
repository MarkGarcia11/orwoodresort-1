"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { easeOrwood } from "./Reveal";

/**
 * Counts from `from` up to a target when scrolled into view.
 * Pass `sinceYear` to count the years elapsed since that year (computed on the client).
 */
export function CountUp({
  to,
  sinceYear,
  from = 0,
  duration = 2.4,
  suffix = "",
}: {
  to?: number;
  sinceYear?: number;
  from?: number;
  duration?: number;
  suffix?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const target = sinceYear !== undefined ? new Date().getFullYear() - sinceYear : (to ?? 0);
  const [value, setValue] = useState(target);

  useEffect(() => {
    if (!inView || reduce) return;
    setValue(from);
    const controls = animate(from, target, {
      duration,
      ease: easeOrwood,
      onUpdate: (latest) => setValue(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, from, target, duration, reduce]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
      {suffix}
    </span>
  );
}
