"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ElementType } from "react";
import { easeOrwood } from "./Reveal";

type SplitWordsProps = {
  /** Headline text. Wrap a word in underscores (for example `_Like_`) to set it in italic. */
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  /** When true the words animate as they scroll into view instead of on load. */
  inView?: boolean;
  emphasisClassName?: string;
};

/** Word-by-word masked reveal for editorial headlines. Keeps the text readable for screen readers. */
export function SplitWords({
  text,
  as: Tag = "h2",
  className = "",
  delay = 0,
  inView = false,
  emphasisClassName = "italic",
}: SplitWordsProps) {
  const reduce = useReducedMotion();
  const words = text.split(/\s+/).filter(Boolean);
  const label = text.replace(/_/g, "");

  return (
    <Tag className={className} aria-label={label}>
      {words.map((raw, index) => {
        const emphasis = raw.includes("_");
        const word = raw.replace(/_/g, "");
        const trigger = inView
          ? { whileInView: { y: "0%" }, viewport: { once: true, margin: "-5% 0px" } }
          : { animate: { y: "0%" } };

        return (
          <span key={`${word}-${index}`}>
            <span className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-top" aria-hidden="true">
              <motion.span
                className={`inline-block ${emphasis ? emphasisClassName : ""}`}
                initial={reduce ? false : { y: "108%" }}
                {...trigger}
                transition={{ duration: 1.1, delay: delay + index * 0.075, ease: easeOrwood }}
              >
                {word}
              </motion.span>
            </span>{" "}
          </span>
        );
      })}
    </Tag>
  );
}
