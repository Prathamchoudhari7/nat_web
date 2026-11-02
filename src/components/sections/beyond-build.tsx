import { Check } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { carePlans, inr, infrastructure } from "@/lib/pricing";

const careNotes = [
  "Website care is optional. The project can be launched and run without a care plan.",
  "Care plans are a service provided by Smart Web. They are not a third-party infrastructure charge.",
  "Minor updates mean text or image replacements within existing page layouts.",
  "New pages, redesigns and new functionality are quoted separately.",
  "Both care plans are proposed and subject to final agreement.",
  "The website project already includes 30 days of post-launch bug-fix support.",
];

export function BeyondBuild() {
  return (
    <section
      id="care"
      aria-labelledby="care-title"
      className="print-break border-t border-line bg-ink-2 py-28 sm:py-36 print:border-0 print:bg-transparent"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <SectionHeader
          id="care-title"
          index="08"
          label="Beyond the Build"
          title={<>Beyond the Build.</>}
          intro={<p>Transparent infrastructure costs and optional ongoing website care.</p>}
        />

        {/* Infrastructure */}
        <div className="avoid-break mt-20 grid gap-10 lg:mt-28 lg:grid-cols-12 lg:gap-6">
          <Reveal className="lg:col-span-4">
            <h3 className="font-display text-2xl tracking-tight sm:text-3xl">Infrastructure</h3>
            <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-copper/50 px-3 py-1 font-display text-[11px] tracking-[0.18em] text-copper-light uppercase">
              Paid directly by you · No markup
            </p>
          </Reveal>
          <div className="lg:col-span-8">
            <dl className="border-t border-line-strong">
              {infrastructure.map((row, i) => (
                <Reveal key={row.item} delay={i * 0.06} y={14}>
                  <div className="flex flex-col gap-1 border-b border-line py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                    <dt className="font-display text-lg tracking-tight sm:text-xl">{row.item}</dt>
                    <dd className="font-display text-2xl tracking-tight whitespace-nowrap tabular-nums sm:text-3xl">
                      {row.range}
                      <span className="ml-2 text-sm tracking-normal text-mute">{row.period}</span>
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>
            <Reveal>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-mute">
                Domain and hosting are purchased directly from the selected
                providers. These are indicative estimates, and actual charges
                depend on the provider and plan selected. Smart Web does not add a
                markup to these third-party costs. Hosting needs depend on the
                final setup, so a paid plan may not always be required.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Optional care plans */}
        <div className="mt-24 lg:mt-32">
          <Reveal>
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-t border-line pt-6">
              <h3 className="font-display text-2xl tracking-tight sm:text-3xl">Optional website care</h3>
              <p className="font-display text-xs tracking-[0.2em] text-mute uppercase">Proposed · Monthly</p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2 md:gap-5">
            {carePlans.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 0.08} className="avoid-break">
                <article
                  className={`group relative flex h-full flex-col overflow-hidden rounded-sm border p-7 transition-colors duration-500 sm:p-10 ${
                    plan.featured
                      ? "border-copper/45 bg-ink-3 hover:border-copper print:bg-transparent"
                      : "border-line bg-ink hover:border-line-strong print:bg-transparent"
                  }`}
                >
                  {plan.featured ? (
                    <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-copper" />
                  ) : null}
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="font-display text-xl tracking-tight sm:text-2xl">{plan.name}</h4>
                    {plan.featured ? (
                      <span className="font-display text-[11px] tracking-[0.18em] whitespace-nowrap text-copper-light uppercase">
                        Extended care
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-8 font-display tabular-nums">
                    <span className="text-5xl font-medium tracking-[-0.04em] sm:text-6xl">{inr(plan.monthly)}</span>
                    <span className="ml-2 text-mute">/ month</span>
                  </p>
                  <ul className="mt-10 flex-1 border-t border-line">
                    {plan.inclusions.map((item) => (
                      <li key={item} className="flex gap-3 border-b border-line py-3.5 text-bone-dim">
                        <Check
                          aria-hidden
                          strokeWidth={1.75}
                          className={`mt-1 size-4 shrink-0 ${plan.featured ? "text-copper-light" : "text-copper"}`}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-xs text-mute">Proposed inclusions, subject to final agreement.</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="avoid-break mt-12">
            <ul className="grid gap-x-10 border-t border-line md:grid-cols-2">
              {careNotes.map((note) => (
                <li key={note} className="flex gap-3 border-b border-line py-4 text-sm leading-relaxed text-bone-dim">
                  <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-copper" />
                  {note}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
