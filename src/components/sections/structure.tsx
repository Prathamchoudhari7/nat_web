"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { pages } from "@/lib/content";

export function Structure() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="structure"
      aria-labelledby="structure-title"
      className="print-break mx-auto max-w-[1440px] px-5 py-28 sm:px-8 sm:py-36 lg:px-12"
    >
      <SectionHeader
        id="structure-title"
        index="04"
        label="Proposed Website Structure"
        title={<>Five pages. One clear journey.</>}
        intro={
          <p>
            A focused structure that covers everything a prospective client needs
            and nothing they don&apos;t.
          </p>
        }
      />

      <Reveal className="mt-20 lg:mt-28">
        {/* Desktop: a horizontal accordion. Tablet/mobile: stacked cards, always open. */}
        <ul className="grid gap-3 sm:grid-cols-2 lg:flex lg:h-[34rem] lg:gap-2 print:grid print:h-auto print:grid-cols-2">
          {pages.map((page, i) => {
            const on = i === active;
            return (
              <li
                key={page.name}
                onMouseEnter={() => setActive(i)}
                className={`avoid-break group relative overflow-hidden rounded-sm border bg-ink-2 transition-[flex-grow,border-color,background-color] duration-700 ease-expo lg:min-w-0 print:bg-transparent ${
                  i === pages.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""
                } ${on ? "border-line lg:flex-[3.2] lg:border-copper/50" : "border-line lg:flex-1 lg:hover:bg-ink-3"}`}
              >
                <button
                  type="button"
                  aria-expanded={on}
                  aria-controls={`page-${page.index}`}
                  onClick={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="absolute inset-0 z-10 hidden cursor-pointer lg:block print:hidden"
                >
                  <span className="sr-only">Show details for {page.name}</span>
                </button>

                <div className="relative flex h-full flex-col p-7 sm:p-8">
                  <div className="flex items-start justify-between">
                    <span className="font-display text-xs tracking-[0.22em] text-mute">
                      PAGE <span className={on ? "lg:text-copper" : ""}>{page.index}</span>
                    </span>
                    <ArrowUpRight
                      aria-hidden
                      className={`size-5 text-mute transition-all duration-700 ease-expo ${
                        on ? "lg:text-copper" : "lg:rotate-45"
                      }`}
                    />
                  </div>

                  {/* Collapsed vertical label (desktop only) */}
                  <span
                    aria-hidden
                    className={`pointer-events-none absolute bottom-8 left-7 hidden rotate-180 font-display text-2xl whitespace-nowrap tracking-tight transition-opacity duration-500 [writing-mode:vertical-rl] lg:block print:hidden ${
                      on ? "opacity-0" : "opacity-100 delay-200"
                    }`}
                  >
                    {page.name}
                  </span>

                  <div
                    id={`page-${page.index}`}
                    className={`mt-14 flex flex-1 flex-col transition-opacity lg:flex-none duration-500 lg:mt-auto lg:w-[24rem] lg:max-w-full print:opacity-100 ${
                      on ? "lg:opacity-100 lg:delay-200" : "lg:opacity-0"
                    }`}
                  >
                    <h3 className="font-display text-3xl leading-none tracking-tight sm:text-4xl lg:text-[2.75rem]">
                      {page.name}
                    </h3>
                    <p className="mt-4 text-bone-dim">{page.summary}</p>
                    <ul className="mt-8 border-t border-line">
                      {page.items.map((item) => (
                        <li key={item} className="flex items-center gap-3 border-b border-line py-3 text-sm">
                          <span aria-hidden className="size-1 rounded-full bg-copper" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </Reveal>

      <Reveal>
        <p className="mt-8 text-sm text-mute">
          Final content and page structure are subject to confirmation with NAT
          Engineering.
        </p>
      </Reveal>
    </section>
  );
}
