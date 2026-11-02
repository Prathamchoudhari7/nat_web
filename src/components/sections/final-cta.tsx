import { Mail } from "lucide-react";
import { LinkButton, PrintButton } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { mailto, proposal } from "@/lib/content";

export function FinalCta() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative isolate overflow-hidden border-t border-line py-28 sm:py-40 print:break-inside-avoid"
    >
      <div aria-hidden className="hairline-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_50%_100%,black,transparent_70%)] print:hidden" />
      <div aria-hidden className="absolute -bottom-1/2 left-1/2 -z-10 aspect-square w-[min(120vw,1100px)] -translate-x-1/2 rounded-full border border-copper/25 print:hidden" />
      <div aria-hidden className="absolute -bottom-[35%] left-1/2 -z-10 aspect-square w-[min(80vw,720px)] -translate-x-1/2 rounded-full border border-line-strong print:hidden" />

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <p className="flex items-center gap-3 font-display text-xs tracking-[0.22em] text-mute uppercase">
            <span className="text-copper">09</span>
            <span aria-hidden className="h-px w-6 bg-line-strong" />
            Next Steps
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            id="contact-title"
            className="mt-10 max-w-[14ch] font-display text-[clamp(3rem,9vw,8.5rem)] leading-[0.92] font-medium tracking-[-0.05em]"
          >
            Let&apos;s Build Something <span className="font-light text-copper-light italic">Exceptional.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-12">
          <Reveal delay={0.12} className="lg:col-span-5">
            <p className="text-lg leading-relaxed text-bone-dim">
              We look forward to creating a digital presence that reflects{" "}
              {proposal.client}&apos;s work and ambitions.
            </p>
          </Reveal>

          <Reveal delay={0.18} className="lg:col-span-6 lg:col-start-7">
            <div className="flex flex-col gap-3 sm:flex-row print:hidden">
              <LinkButton href={mailto} icon={<Mail aria-hidden className="size-4" />}>
                Discuss This Proposal
              </LinkButton>
              <PrintButton />
            </div>
            <dl className="mt-12 grid grid-cols-1 gap-6 border-t border-line pt-6 sm:grid-cols-2">
              <div>
                <dt className="font-display text-xs tracking-[0.2em] text-mute uppercase">Agency</dt>
                <dd className="mt-2 font-display text-lg">{proposal.agency}</dd>
              </div>
              <div>
                <dt className="font-display text-xs tracking-[0.2em] text-mute uppercase">Email</dt>
                <dd className="mt-2 font-display text-lg">
                  <a href={mailto} className="-my-2 inline-block py-2 break-all underline decoration-line-strong underline-offset-4 transition-colors hover:text-copper-light hover:decoration-copper">
                    {proposal.email}
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
