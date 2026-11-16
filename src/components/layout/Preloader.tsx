"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { easeOrwood } from "@/components/ui/Reveal";

const STORAGE_KEY = "orwood-intro-seen";

/**
 * A brief, once-per-session logo intro. It never blocks interaction (pointer-events are disabled)
 * and is skipped entirely for visitors who prefer reduced motion.
 */
export function Preloader() {
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      return;
    }
    setVisible(true);
    // No cleanup: this timer must survive React's development double-invocation of effects.
    setTimeout(() => setVisible(false), 1400);
  }, [reduce]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-delta-950 text-ivory"
          exit={{ opacity: 0, transition: { duration: 0.9, ease: easeOrwood } }}
        >
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: easeOrwood }}
          >
            <Logo tone="light" />
          </motion.div>
          <motion.span
            className="absolute bottom-0 left-0 h-px bg-sand/80"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.2, ease: easeOrwood }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
