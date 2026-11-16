import type { CSSProperties, ReactNode } from "react";
import type { ThemeKey } from "@/content/site";

/**
 * Each business category gets its own colour identity while sharing one brand system.
 * `accent` is for decorative elements and buttons, `strong` is text-safe on ivory,
 * and `tint` is a soft surface colour for section backgrounds.
 */
export const themes: Record<ThemeKey, { accent: string; strong: string; tint: string }> = {
  brand: { accent: "#1f5e73", strong: "#174b5c", tint: "#f4eee3" },
  marina: { accent: "#1f5e73", strong: "#154a5b", tint: "#e6f0f2" },
  sports: { accent: "#2d7f98", strong: "#1f6378", tint: "#e3f1f4" },
  fishing: { accent: "#3d6e60", strong: "#2e5548", tint: "#e7efea" },
  camp: { accent: "#5b6b34", strong: "#46522a", tint: "#eff1e2" },
  dining: { accent: "#a4552b", strong: "#7f3f1b", tint: "#f8eadb" },
  store: { accent: "#8a6a36", strong: "#6c5226", tint: "#f3ebdb" },
  storage: { accent: "#3d4d57", strong: "#2a363e", tint: "#e9edef" },
  events: { accent: "#7a3f55", strong: "#5f2e41", tint: "#f4e9ed" },
};

export function ThemeScope({
  theme = "brand",
  className = "",
  children,
}: {
  theme?: ThemeKey;
  className?: string;
  children: ReactNode;
}) {
  const palette = themes[theme];
  const style = {
    "--accent": palette.accent,
    "--accent-strong": palette.strong,
    "--tint": palette.tint,
  } as CSSProperties;

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}
