"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type TextTypeProps = {
  words: string[];
  className?: string;
  caret?: boolean;
  caretClassName?: string;
  typingSpeed?: number; // ms per char
  deletingSpeed?: number; // ms per char
  pauseAfterTyped?: number; // ms after a word completes
  pauseBeforeNext?: number; // ms before next word starts
  startDelay?: number; // initial delay before typing starts
  loop?: boolean; // loop through words
};

/**
 * TextType – lightweight typewriter text animation inspired by React Bits' Text Type.
 * Renders inline so it can be used inside headings/spans.
 */
export function TextType({
  words,
  className,
  caret = true,
  caretClassName,
  typingSpeed = 55,
  deletingSpeed = 28,
  pauseAfterTyped = 1200,
  pauseBeforeNext = 200,
  startDelay = 0,
  loop = true,
}: TextTypeProps) {
  const [index, setIndex] = React.useState(0);
  const [phase, setPhase] = React.useState<"idle" | "typing" | "pausing" | "deleting">(
    startDelay > 0 ? "idle" : "typing"
  );
  const [count, setCount] = React.useState(0);

  const current = words[index] ?? "";
  const chars = React.useMemo(() => Array.from(current), [current]);

  React.useEffect(() => {
    let t: number | undefined;
    if (phase === "idle") {
      t = window.setTimeout(() => setPhase("typing"), startDelay);
    } else if (phase === "typing") {
      if (count < chars.length) {
        t = window.setTimeout(() => setCount((c) => c + 1), typingSpeed);
      } else {
        t = window.setTimeout(() => setPhase("pausing"), pauseAfterTyped);
      }
    } else if (phase === "pausing") {
      t = window.setTimeout(() => setPhase("deleting"), 0);
    } else if (phase === "deleting") {
      if (count > 0) {
        t = window.setTimeout(() => setCount((c) => c - 1), deletingSpeed);
      } else {
        const isLast = index === words.length - 1;
        if (!loop && isLast) {
          // Stop on last word if not looping
          setPhase("idle");
          return;
        }
        t = window.setTimeout(() => {
          setIndex((i) => (i + 1) % words.length);
          setPhase("typing");
          setCount(0);
        }, pauseBeforeNext);
      }
    }
    return () => {
      if (t) window.clearTimeout(t);
    };
  }, [phase, count, chars.length, typingSpeed, deletingSpeed, pauseAfterTyped, pauseBeforeNext, startDelay, index, loop, words.length]);

  const visible = chars.slice(0, count).join("");

  return (
    <span className={cn("inline-flex items-end", className)}>
      <span>{visible}</span>
      {caret && (
        <span
          aria-hidden
          className={cn(
            "ml-1 inline-block align-baseline bg-current animate-texttype-caret",
            caretClassName
          )}
          style={{ width: "0.08em", height: "0.9em" }}
        />
      )}
      <style jsx>{`
        @keyframes texttype-caret {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.25; }
        }
        .animate-texttype-caret { animation: texttype-caret 1.1s infinite; }
      `}</style>
    </span>
  );
}

export default TextType;
