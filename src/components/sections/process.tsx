"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { stages } from "@/lib/content";

export function Process() {
  const track = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: track, offset: ["start 80%", "end 55%"] });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="print-break border-y border-line bg-ink-2 py-28 sm:py-36 print:border-0 print:bg-transparent"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <SectionHeader
          id="process-title"
          index="06"
          label="Our Process"
          title={<>A considered process, from first brief to launch.</>}
        />

        <div className="relative mt-20 lg:mt-28">
          {/* Progress rail: vertical on mobile, horizontal on desktop */}
          <div aria-hidden className="absolute top-0 bottom-0 left-[11px] w-px bg-line lg:top-[11px] lg:right-0 lg:bottom-auto lg:left-0 lg:h-px lg:w-auto print:hidden">
            <motion.span style={{ scaleY: fill }} className="absolute inset-0 origin-top bg-copper lg:hidden" />
            <motion.span style={{ scaleX: fill }} className="absolute inset-0 hidden origin-left bg-copper lg:block" />
          </div>

          <ol ref={track} className="grid gap-12 lg:grid-cols-5 lg:gap-8">
            {stages.map(({ name, body, icon: Icon }, i) => (
              <li key={name} className="avoid-break relative pl-12 lg:pt-14 lg:pl-0">
                <Reveal delay={i * 0.08} y={20}>
                  <span
                    aria-hidden
                    className="absolute top-0 left-0 grid size-[23px] place-items-center rounded-full border border-copper bg-ink-2 print:bg-transparent"
                  >
                    <span className="size-[7px] rounded-full bg-copper" />
                  </span>
                  <p className="font-display text-xs tracking-[0.22em] text-mute">
                    STAGE 0{i + 1}
                  </p>
                  <h3 className="mt-3 font-display text-2xl leading-tight tracking-tight">{name}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-bone-dim">{body}</p>
                  <Icon aria-hidden strokeWidth={1.25} className="mt-6 size-6 text-copper/80" />
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        <Reveal className="mt-20">
          <div className="flex flex-col gap-2 border-t border-line pt-6 sm:flex-row sm:items-baseline sm:gap-10">
            <p className="font-display text-xs tracking-[0.22em] text-mute uppercase">Timeline</p>
            <p className="font-display text-lg">
              To be confirmed after final scope and content approval.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
