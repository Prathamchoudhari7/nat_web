"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { LinkButton } from "@/components/ui/button";
import { proposal } from "@/lib/content";
import { introDelay } from "@/lib/intro";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";
import { HeroDrawing } from "./hero-drawing";

const ease = [0.16, 1, 0.3, 1] as const;
const headline = [
  ["Engineering", "a"],
  ["Stronger"],
  ["Digital", "Presence."],
];

const meta = [
  { label: "Prepared for", value: proposal.client },
  { label: "Prepared by", value: proposal.agency },
  { label: "Document", value: "Website Proposal" },
  { label: "Date", value: proposal.date },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const drawingY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const drawingRotate = useTransform(scrollYProgress, [0, 1], [0, 12]);
  const copyY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const reduce = usePrefersReducedMotion();

  const d = introDelay();
  let word = 0;

  return (
    <section
      ref={ref}
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-svh flex-col overflow-hidden pt-28 pb-10 print:min-h-0 print:pt-0"
    >
      <div aria-hidden className="hairline-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_70%_40%,black_10%,transparent_70%)] print:hidden" />

      <motion.div
        aria-hidden
        style={reduce ? undefined : { y: drawingY, rotate: drawingRotate }}
        className="pointer-events-none absolute top-1/2 right-[-38%] -z-10 aspect-square w-[150vw] -translate-y-[45%] opacity-40 sm:right-[-22%] sm:w-[110vw] sm:opacity-70 lg:right-[-8%] lg:w-[min(62vw,980px)] lg:opacity-100 print:hidden"
      >
        <HeroDrawing />
      </motion.div>

      <motion.div
        style={reduce ? undefined : { y: copyY }}
        className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col px-5 sm:px-8 lg:px-12"
      >
        <motion.p
          className="flex items-center gap-2.5 font-display text-[11px] tracking-[0.2em] whitespace-nowrap text-bone-dim uppercase sm:gap-3 sm:text-xs sm:tracking-[0.28em]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: d + 0.15 }}
        >
          <span aria-hidden className="h-px w-6 bg-copper sm:w-10" />
          Smart Web <span className="text-copper">×</span> NAT Engineering
        </motion.p>

        <h1
          id="hero-title"
          className="mt-10 font-display text-[clamp(3.1rem,min(8.6vw,15svh),9.25rem)] leading-[0.9] font-medium tracking-[-0.05em] sm:mt-12"
        >
          {headline.map((line, li) => (
            <span key={li} className="block">
              {line.map((w) => {
                const i = word++;
                const accent = w === "Stronger";
                return (
                  <span key={w} className="mr-[0.22em] inline-block overflow-hidden pb-[0.08em] align-bottom last:mr-0">
                    <motion.span
                      data-reveal
                      className={`inline-block ${accent ? "font-light text-copper-light italic" : ""}`}
                      initial={{ y: "110%" }}
                      animate={{ y: "0%" }}
                      transition={{ duration: 1.2, ease, delay: d + 0.25 + i * 0.08 }}
                    >
                      {w}
                    </motion.span>
                  </span>
                );
              })}
            </span>
          ))}
        </h1>

        <motion.div
          data-reveal
          className="mt-10 mb-14 grid gap-8 sm:mt-12 lg:grid-cols-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease, delay: d + 0.9 }}
        >
          <p className="max-w-md text-lg leading-relaxed text-bone-dim lg:col-span-5 lg:text-xl">
            A tailored website design and development proposal for {proposal.client}.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-7 lg:justify-end lg:self-end print:hidden">
            <LinkButton href="#opportunity" icon={<ArrowDown aria-hidden className="size-4" />}>
              Explore Proposal
            </LinkButton>
            <LinkButton href="#investment" variant="ghost" icon={<ArrowRight aria-hidden className="size-4" />}>
              View Investment
            </LinkButton>
          </div>
        </motion.div>

        <motion.dl
          data-reveal
          className="mt-auto grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-6 sm:grid-cols-4 print:mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: d + 1.2 }}
        >
          {meta.map((m) => (
            <div key={m.label}>
              <dt className="font-display text-[11px] tracking-[0.22em] text-mute uppercase">{m.label}</dt>
              <dd className="mt-1.5 font-display text-sm sm:text-base">{m.value}</dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  );
}
