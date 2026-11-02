"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "motion/react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { highlights, type HighlightId } from "@/lib/content";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";
import { DesktopMockup, MobileMockup } from "./concept-mockups";

const CYCLE_MS = 4800;

export function Experience() {
  const [active, setActive] = useState<HighlightId>("identity");
  const [touched, setTouched] = useState(false);
  const stage = useRef<HTMLDivElement>(null);
  const inView = useInView(stage, { amount: 0.4 });
  const reduce = usePrefersReducedMotion();

  // Gently tour the highlights until the visitor takes over.
  useEffect(() => {
    if (touched || reduce || !inView) return;
    const t = setInterval(() => {
      setActive((cur) => {
        const i = highlights.findIndex((h) => h.id === cur);
        return highlights[(i + 1) % highlights.length].id;
      });
    }, CYCLE_MS);
    return () => clearInterval(t);
  }, [touched, reduce, inView]);

  const current = highlights.find((h) => h.id === active)!;

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="relative overflow-hidden border-y border-line bg-ink-2 py-28 sm:py-36 print:border-0 print:bg-transparent"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <SectionHeader
          id="experience-title"
          index="03"
          label="The Digital Experience"
          title={<>Designed to be understood in seconds.</>}
          intro={
            <p>
              A first look at the design direction how NAT Engineering&apos;s
              website could look, feel and guide visitors from first impression to
              enquiry.
            </p>
          }
        />

        <div className="mt-20 grid gap-12 lg:mt-28 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Reveal>
              <div role="tablist" aria-label="Design highlights" aria-orientation="vertical" className="border-t border-line">
                {highlights.map((h, i) => {
                  const on = h.id === active;
                  return (
                    <button
                      key={h.id}
                      role="tab"
                      type="button"
                      id={`tab-${h.id}`}
                      aria-selected={on}
                      aria-controls="experience-panel"
                      tabIndex={on ? 0 : -1}
                      onClick={() => {
                        setTouched(true);
                        setActive(h.id);
                      }}
                      onKeyDown={(e) => {
                        const dir = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : e.key === "ArrowUp" || e.key === "ArrowLeft" ? -1 : 0;
                        if (!dir) return;
                        e.preventDefault();
                        const next = highlights[(i + dir + highlights.length) % highlights.length];
                        setTouched(true);
                        setActive(next.id);
                        document.getElementById(`tab-${next.id}`)?.focus();
                      }}
                      className="group relative flex w-full items-center gap-5 border-b border-line py-5 text-left"
                    >
                      <span className={`font-display text-xs transition-colors ${on ? "text-copper" : "text-mute"}`}>
                        0{i + 1}
                      </span>
                      <span
                        className={`font-display text-xl tracking-tight transition-colors duration-300 sm:text-2xl ${
                          on ? "text-bone" : "text-mute group-hover:text-bone-dim"
                        }`}
                      >
                        {h.title}
                      </span>
                      <span aria-hidden className="absolute bottom-[-1px] left-0 h-px w-full overflow-hidden">
                        {on ? (
                          <motion.span
                            key={`${h.id}-${touched}`}
                            className="block h-full origin-left bg-copper"
                            initial={{ scaleX: touched || reduce ? 1 : 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: CYCLE_MS / 1000, ease: "linear" }}
                          />
                        ) : null}
                      </span>
                    </button>
                  );
                })}
              </div>
            </Reveal>

            <div id="experience-panel" role="tabpanel" aria-labelledby={`tab-${active}`} className="mt-8 min-h-28">
              <AnimatePresence mode="wait">
                <motion.p
                  key={current.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4 }}
                  className="max-w-sm leading-relaxed text-bone-dim"
                >
                  {current.body}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          <div ref={stage} className="lg:col-span-8">
            <Reveal y={48}>
              <figure className="avoid-break">
                <div className="relative pr-[14%] pb-[10%] sm:pr-[18%]">
                  <DesktopMockup active={active} />
                  <div className="absolute right-0 bottom-0 w-[30%] sm:w-[25%]">
                    <MobileMockup active={active} />
                  </div>
                </div>
                <figcaption className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 font-display text-xs tracking-[0.18em] text-mute uppercase">
                  <span className="rounded-full border border-copper/60 px-3 py-1 text-copper-light">
                    Conceptual design
                  </span>
                  Illustrative direction only. Not an approved website mockup.
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
