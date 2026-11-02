import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { inclusions } from "@/lib/content";

export function Included() {
  return (
    <section
      id="included"
      aria-labelledby="included-title"
      className="mx-auto max-w-[1440px] px-5 py-28 sm:px-8 sm:py-36 lg:px-12"
    >
      <SectionHeader
        id="included-title"
        index="05"
        label="What's Included"
        title={<>Everything needed to launch with confidence.</>}
      />

      <div className="mt-16 lg:mt-24 lg:ml-[25%]">
        <ul className="grid border-t border-line md:grid-cols-2 md:gap-x-10">
          {inclusions.map(({ label, icon: Icon }, i) => (
            <li key={label} className="avoid-break border-b border-line">
              <Reveal delay={(i % 2) * 0.06} y={16}>
                <div className="group flex items-center gap-5 py-5 sm:py-6">
                  <span className="w-7 font-display text-xs text-mute transition-colors duration-300 group-hover:text-copper">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 font-display text-lg tracking-tight transition-transform duration-500 ease-expo group-hover:translate-x-1.5 sm:text-xl">
                    {label}
                  </span>
                  <Icon
                    aria-hidden
                    strokeWidth={1.5}
                    className="size-5 text-mute transition-colors duration-300 group-hover:text-copper-light"
                  />
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
