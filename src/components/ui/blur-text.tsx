"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type BlurTextProps = {
  text: string;
  className?: string;
  delay?: number; // seconds before first char animates
  duration?: number; // seconds per char
  stagger?: number; // seconds between chars
  translateY?: number; // px move distance
  blur?: number; // px initial blur
  /** If true, animation starts when the component enters the viewport */
  triggerOnView?: boolean;
  /** If true, only animates the first time it comes into view */
  once?: boolean;
};

/**
 * BlurText – blur + fade + slight-y movement, staggered per character.
 * Inspired by React Bits' Blur Text component.
 */
export function BlurText({
  text,
  className,
  delay = 0,
  duration = 0.6,
  stagger = 0.06,
  translateY = 12,
  blur = 8,
  triggerOnView = false,
  once = true,
}: BlurTextProps) {
  const chars = React.useMemo(() => Array.from(text), [text]);
  const rootRef = React.useRef<HTMLSpanElement | null>(null);
  const [active, setActive] = React.useState(!triggerOnView);

  React.useEffect(() => {
    if (!triggerOnView) return;
    const el = rootRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Toggle to false then true to re-trigger animations if needed
            setActive((prev) => {
              if (!prev) return true;
              if (!once) {
                // force reflow by toggling
                requestAnimationFrame(() => setActive(false));
                requestAnimationFrame(() => setActive(true));
              }
              return true;
            });
            if (once) observer.disconnect();
          } else if (!once) {
            setActive(false);
          }
        });
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [triggerOnView, once]);

  return (
    <span ref={rootRef} className={cn("inline-block", className)} aria-label={text}>
      {chars.map((ch, i) => {
        const style = {
          animationDelay: `${delay + i * stagger}s`,
          animationDuration: `${duration}s`,
          "--bt-y": `${translateY}px`,
          "--bt-blur": `${blur}px`,
        } as React.CSSProperties & Record<string, string>;
        return (
          <span
            key={i}
            className={cn(
              "inline-block opacity-0 will-change-transform will-change-filter",
              active && "blur-text-char"
            )}
            style={style}
          >
            {ch === " " ? "\u00A0" : ch}
          </span>
        );
      })}

      <style jsx>{`
        @keyframes bt-blur-in {
          0% {
            opacity: 0;
            transform: translateY(var(--bt-y, 12px));
            filter: blur(var(--bt-blur, 8px));
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }
        .blur-text-char {
          animation-name: bt-blur-in;
          animation-fill-mode: forwards;
          animation-timing-function: cubic-bezier(0.2, 0.65, 0.2, 1);
        }
      `}</style>
    </span>
  );
}

export default BlurText;
