"use client";

import { useState } from "react";
import { Minus } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { exclusions } from "@/lib/content";
import { PROJECT_TOTAL, deliverables, inr, milestones } from "@/lib/pricing";

const tones = ["bg-copper", "bg-copper-light", "bg-bone-dim"];

const terms = [
  ["Allocation", "The breakdown shows how the fixed project fee is allocated across the work. Deliverables are not priced or sold individually."],
  ["Additional work", "Any work beyond the agreed scope will be quoted separately."],
  ["Scope", "This proposal is subject to final scope approval."],
];

export function Investment() {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <section
      id="investment"
      aria-labelledby="investment-title"
      className="print-break relative mx-auto max-w-[1440px] px-5 py-28 sm:px-8 sm:py-36 lg:px-12"
    >
      <div className="border-t border-line pt-6">
        <Reveal>
          <p className="flex items-center gap-3 font-display text-xs tracking-[0.22em] text-mute uppercase">
            <span className="text-copper">07</span>
            <span aria-hidden className="h-px w-6 bg-line-strong" />
            Investment
          </p>
        </Reveal>
      </div>

      {/* Headline figure */}
      <div className="avoid-break mt-14 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-8">
          <Reveal>
            <h2 id="investment-title" className="font-display text-sm tracking-[0.22em] text-bone-dim uppercase">
              Total proposed investment
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 font-display text-[clamp(4.5rem,17vw,15rem)] leading-[0.85] font-medium tracking-[-0.06em]">
              <span className="mr-[0.04em] align-[0.12em] text-[0.55em] font-light text-copper-light">₹</span>
              {PROJECT_TOTAL.toLocaleString("en-IN")}
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.15} className="lg:col-span-4 lg:self-end">
          <div className="border-l border-copper pl-6">
            <p className="font-display text-xl leading-snug">
              One-time website design and development fee.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-mute">
              A fixed project fee for the complete five-page website. The
              breakdown below shows how it is allocated across the work.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Technical breakdown */}
      <div className="mt-20 lg:mt-28">
        <Reveal>
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
            <h3 className="font-display text-2xl tracking-tight sm:text-3xl">How the investment is allocated</h3>
            <p className="font-display text-xs tracking-[0.2em] text-mute uppercase">Fixed fee · INR</p>
          </div>
        </Reveal>

        <ol className="mt-8 border-t border-line-strong">
          {deliverables.map((d, i) => (
            <li key={d.title} className="avoid-break group relative border-b border-line">
              <Reveal y={14}>
                <div className="grid grid-cols-[2.25rem_1fr_auto] gap-x-3 gap-y-3 py-6 transition-colors duration-500 sm:gap-x-5 sm:py-7 lg:grid-cols-12 lg:gap-x-6 lg:py-8">
                  <span className="pt-1 font-display text-xs text-mute transition-colors duration-300 group-hover:text-copper lg:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="font-display text-lg leading-snug tracking-tight sm:text-xl lg:col-span-4">
                    {d.title}
                  </h4>
                  <p className="text-right font-display text-lg whitespace-nowrap tabular-nums sm:text-xl lg:col-span-2 lg:col-start-11 lg:row-start-1">
                    {inr(d.amount)}
                  </p>
                  <p className="col-span-2 col-start-2 text-sm leading-relaxed text-bone-dim lg:col-span-5 lg:col-start-6 lg:row-start-1">
                    {d.description}
                  </p>
                </div>
              </Reveal>
              {/* Share of the total fee, drawn as a hairline along the row */}
              <span
                aria-hidden
                style={{ width: `${(d.amount / PROJECT_TOTAL) * 100}%` }}
                className="absolute bottom-[-1px] left-0 h-px bg-copper/40 transition-colors duration-500 group-hover:bg-copper"
              />
            </li>
          ))}
        </ol>

        <Reveal>
          <div className="avoid-break flex flex-col gap-2 border-b border-line-strong py-8 sm:flex-row sm:items-end sm:justify-between">
            <p className="font-display text-sm tracking-[0.2em] text-bone-dim uppercase">Total project investment</p>
            <p className="font-display text-5xl font-medium tracking-[-0.04em] text-copper-light tabular-nums sm:text-6xl">
              {inr(PROJECT_TOTAL)}
            </p>
          </div>
        </Reveal>
      </div>

      {/* Milestones */}
      <div className="avoid-break mt-20 lg:mt-28">
        <Reveal>
          <h3 className="font-display text-xs tracking-[0.22em] text-mute uppercase">Payment milestones</h3>
          <div aria-hidden className="mt-6 flex h-2 gap-1 overflow-hidden rounded-full">
            {milestones.map((m, i) => (
              <span
                key={m.label}
                style={{ flexGrow: m.share }}
                className={`${tones[i]} rounded-full transition-opacity duration-500 ${
                  hover !== null && hover !== i ? "opacity-25" : "opacity-100"
                }`}
              />
            ))}
          </div>
        </Reveal>

        <ol className="mt-8 grid border-t border-line lg:grid-cols-[4fr_3fr_3fr]">
          {milestones.map((m, i) => (
            <li
              key={m.label}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              className="border-b border-line lg:border-b-0 lg:not-last:border-r lg:not-first:pl-8"
            >
              <Reveal delay={i * 0.08} y={16}>
                <div className="flex items-end justify-between gap-6 py-7 lg:flex-col lg:items-start lg:pr-8">
                  <div>
                    <p className="flex items-center gap-2 font-display text-xs tracking-[0.2em] text-mute uppercase">
                      <span aria-hidden className={`size-2 rounded-full ${tones[i]}`} />
                      Milestone 0{i + 1}
                    </p>
                    <p className="mt-3 font-display text-lg leading-snug">
                      <span className="text-copper-light">{m.share}%</span> {m.label.toLowerCase()}
                    </p>
                  </div>
                  <p className="font-display text-3xl tracking-tight whitespace-nowrap tabular-nums sm:text-4xl lg:mt-6">
                    {inr(m.amount)}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
        <div className="flex items-baseline justify-between border-t border-line-strong py-5 font-display">
          <span className="text-sm tracking-[0.18em] text-mute uppercase">Total</span>
          <span className="text-xl tabular-nums">{inr(PROJECT_TOTAL)}</span>
        </div>
      </div>

      {/* Exclusions & terms */}
      <div className="mt-20 grid gap-10 lg:mt-24 lg:grid-cols-12 lg:gap-6">
        <Reveal className="avoid-break lg:col-span-7">
          <div className="rounded-sm border border-line bg-ink-2 p-7 sm:p-10 print:bg-transparent">
            <h3 className="font-display text-2xl tracking-tight">Not included</h3>
            <p className="mt-2 text-sm text-mute">Unless separately agreed in writing.</p>
            <ul className="mt-8 grid gap-x-8 sm:grid-cols-2">
              {exclusions.map((e) => (
                <li key={e} className="flex items-center gap-3 border-t border-line py-3 text-bone-dim">
                  <Minus aria-hidden className="size-3.5 text-copper" />
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="avoid-break lg:col-span-4 lg:col-start-9">
          <dl className="space-y-6">
            {terms.map(([t, d]) => (
              <div key={t} className="border-t border-line pt-4">
                <dt className="font-display text-xs tracking-[0.2em] text-mute uppercase">{t}</dt>
                <dd className="mt-2 leading-relaxed">{d}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
