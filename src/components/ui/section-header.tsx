import { Reveal } from "./reveal";

type SectionHeaderProps = {
  index: string;
  label: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  id?: string;
};

/** Numbered editorial heading shared by every proposal section. */
export function SectionHeader({ index, label, title, intro, id }: SectionHeaderProps) {
  return (
    <div className="grid gap-8 border-t border-line pt-6 lg:grid-cols-12 lg:gap-6">
      <Reveal className="lg:col-span-3">
        <p className="flex items-center gap-3 font-display text-xs tracking-[0.22em] text-mute uppercase">
          <span className="text-copper">{index}</span>
          <span aria-hidden className="h-px w-6 bg-line-strong" />
          {label}
        </p>
      </Reveal>
      <div className="lg:col-span-9">
        <Reveal delay={0.05}>
          <h2
            id={id}
            className="max-w-[18ch] font-display text-[clamp(2.4rem,6vw,5.25rem)] leading-[0.95] font-medium tracking-[-0.035em] text-balance"
          >
            {title}
          </h2>
        </Reveal>
        {intro ? (
          <Reveal delay={0.12}>
            <div className="mt-8 max-w-2xl text-lg leading-relaxed text-bone-dim">
              {intro}
            </div>
          </Reveal>
        ) : null}
      </div>
    </div>
  );
}
