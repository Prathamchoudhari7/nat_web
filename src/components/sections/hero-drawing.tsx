"use client";

import { motion } from "motion/react";
import { introDelay } from "@/lib/intro";

const ticks = Array.from({ length: 120 }, (_, i) => i);
const bolts = Array.from({ length: 8 }, (_, i) => (i * Math.PI) / 4);
// Delays are offset so the drawing starts as the preloader curtain lifts.
const draw = (at: number, duration = 2.4) => {
  const delay = at + introDelay();
  return {
    initial: { pathLength: 0, opacity: 0 },
    animate: { pathLength: 1, opacity: 1 },
    transition: { pathLength: { delay, duration, ease: [0.65, 0, 0.35, 1] as const }, opacity: { delay, duration: 0.3 } },
  };
};
const fade = (at: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { delay: at + introDelay(), duration: 1.2 },
});

// The rotating rings live in their own HTML layers so the browser can spin
// them on the compositor instead of repainting the SVG every frame.
const layer = "absolute inset-0 h-full w-full will-change-transform";

/**
 * An original, abstract engineering drawing flange, bolt circle and an
 * I-beam section drafted line by line. Purely decorative.
 */
export function HeroDrawing() {
  return (
    <div aria-hidden className="relative h-full w-full">
      <svg viewBox="0 0 800 800" fill="none" className={`${layer} animate-spin-slow`}>
        <circle cx="400" cy="400" r="330" stroke="var(--color-line-strong)" />
        {ticks.map((i) => {
          const a = (i / ticks.length) * Math.PI * 2;
          const long = i % 10 === 0;
          const r1 = 330;
          const r2 = long ? 306 : 318;
          return (
            <line
              key={i}
              x1={(400 + Math.cos(a) * r1).toFixed(2)}
              y1={(400 + Math.sin(a) * r1).toFixed(2)}
              x2={(400 + Math.cos(a) * r2).toFixed(2)}
              y2={(400 + Math.sin(a) * r2).toFixed(2)}
              stroke={long ? "var(--color-copper)" : "var(--color-line-strong)"}
              strokeWidth={long ? 1.25 : 0.75}
            />
          );
        })}
      </svg>

      <svg viewBox="0 0 800 800" fill="none" className={`${layer} animate-spin-rev`}>
        <circle cx="400" cy="400" r="252" stroke="var(--color-line-strong)" strokeDasharray="2 10" />
        {bolts.map((a) => (
          <circle
            key={a}
            cx={(400 + Math.cos(a) * 252).toFixed(2)}
            cy={(400 + Math.sin(a) * 252).toFixed(2)}
            r="11"
            stroke="var(--color-bone-dim)"
            strokeOpacity="0.5"
          />
        ))}
      </svg>

      <svg viewBox="0 0 800 800" fill="none" strokeLinecap="round" className="absolute inset-0 h-full w-full">
        <motion.circle cx="400" cy="400" r="196" stroke="var(--color-bone)" strokeOpacity="0.35" {...draw(0.3)} />
        <motion.circle cx="400" cy="400" r="150" stroke="var(--color-copper)" strokeOpacity="0.8" strokeWidth="1.25" {...draw(0.6)} />

        {/* I-beam section */}
        <motion.path
          d="M330 330 H470 V350 H412 V450 H470 V470 H330 V450 H388 V350 H330 Z"
          stroke="var(--color-bone)"
          strokeWidth="1.5"
          {...draw(1, 2.8)}
        />
        <motion.path
          d="M330 330 H470 V350 H412 V450 H470 V470 H330 V450 H388 V350 H330 Z"
          fill="url(#hatch)"
          {...fade(3.2)}
        />

        {/* Centre lines */}
        <motion.path d="M400 40 V760 M40 400 H760" stroke="var(--color-copper)" strokeOpacity="0.55" strokeDasharray="14 6 2 6" {...draw(0.1, 3)} />

        {/* Dimension line */}
        <motion.path d="M204 610 H596 M204 598 V622 M596 598 V622" stroke="var(--color-bone-dim)" strokeOpacity="0.6" {...draw(1.6)} />
        <motion.text
          x="400"
          y="600"
          textAnchor="middle"
          className="fill-mute font-display text-[13px] tracking-[0.2em]"
          {...fade(2.6)}
        >
          Ø 392
        </motion.text>

        <defs>
          <pattern id="hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="8" stroke="var(--color-copper)" strokeOpacity="0.45" />
          </pattern>
        </defs>
      </svg>
    </div>
  );
}
