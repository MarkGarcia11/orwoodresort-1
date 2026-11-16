"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { PhotoAsset } from "@/content/photos";
import { Photo } from "./Photo";
import { easeOrwood } from "./Reveal";

/**
 * Full-bleed photograph with restrained scroll parallax and a slow settle-in zoom.
 * Place inside a positioned container (usually `absolute inset-0`).
 */
export function ParallaxImage({
  photo,
  priority = false,
  className = "",
  sizes = "100vw",
  objectPosition = "center",
  intensity = 12,
}: {
  photo: PhotoAsset;
  priority?: boolean;
  className?: string;
  sizes?: string;
  objectPosition?: string;
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${intensity}%`, `${intensity}%`]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div className="absolute inset-x-0 -top-[12%] h-[124%]" style={{ y: reduce ? "0%" : y }}>
        <motion.div
          className="relative h-full w-full"
          initial={reduce ? false : { scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.6, ease: easeOrwood }}
        >
          <Photo photo={photo} priority={priority} sizes={sizes} objectPosition={objectPosition} />
        </motion.div>
      </motion.div>
    </div>
  );
}
