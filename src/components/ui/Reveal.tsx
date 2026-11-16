"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export const easeOrwood: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Fades and lifts content into view once it enters the viewport. */
export function Reveal({
  children,
  delay = 0,
  y = 32,
  className,
  id,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  id?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      id={id}
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px -4% 0px" }}
      transition={{ duration: 1, delay, ease: easeOrwood }}
    >
      {children}
    </motion.div>
  );
}

/** Image mask reveal: the photograph opens up from a softened window. */
export function MaskReveal({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { clipPath: "inset(10% 6% 10% 6%)", opacity: 0.4 }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 1.5, ease: easeOrwood }}
    >
      {children}
    </motion.div>
  );
}
