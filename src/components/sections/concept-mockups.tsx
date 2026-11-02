import { Cog, Hammer, Menu, MessageCircle, Ruler, Wrench } from "lucide-react";
import type { HighlightId } from "@/lib/content";

/*
 * Conceptual desktop and mobile previews. All sizing uses container-query
 * units (cqw) so the composition scales as one drawing at any width.
 */

function Zone({
  id,
  active,
  className = "",
  children,
}: {
  id: HighlightId;
  active: HighlightId;
  className?: string;
  children: React.ReactNode;
}) {
  const on = id === active;
  return (
    <div
      className={`relative transition-[opacity,filter] duration-700 ease-expo ${
        on ? "opacity-100" : "opacity-45 saturate-50 print:opacity-100 print:saturate-100"
      } ${className}`}
    >
      {children}
      <span
        aria-hidden
        className={`pointer-events-none absolute -inset-[0.6cqw] rounded-[0.6cqw] border transition-all duration-700 ease-expo ${
          on ? "border-copper opacity-100" : "scale-[0.98] border-transparent opacity-0"
        }`}
      />
    </div>
  );
}

function Bar({ w, className = "" }: { w: string; className?: string }) {
  return <span className={`block h-[0.55cqw] rounded-full bg-bone/15 ${className}`} style={{ width: w }} />;
}

const services = [Cog, Wrench, Ruler, Hammer];

export function DesktopMockup({ active }: { active: HighlightId }) {
  return (
    <div className="@container overflow-hidden rounded-[1.2cqw] border border-line-strong bg-ink-2 shadow-[0_40px_120px_-40px_rgb(0_0_0/0.8)] print:shadow-none">
      {/* Browser chrome */}
      <div className="flex items-center gap-[1cqw] border-b border-line px-[1.6cqw] py-[1.1cqw]">
        <span className="flex gap-[0.6cqw]">
          {[0, 1, 2].map((i) => (
            <span key={i} className="size-[0.9cqw] rounded-full bg-bone/15" />
          ))}
        </span>
        <span className="mx-auto rounded-full bg-ink px-[3cqw] py-[0.4cqw] font-display text-[1cqw] text-mute">
          Concept preview, not a live website
        </span>
      </div>

      <div className="space-y-[2.4cqw] p-[2.4cqw]">
        <Zone id="identity" active={active}>
          <div className="flex items-center justify-between">
            <span className="font-display text-[1.7cqw] font-semibold tracking-tight">
              NAT<span className="text-copper">.</span>
              <span className="ml-[0.6cqw] font-normal text-mute">Engineering</span>
            </span>
            <span className="hidden gap-[2cqw] font-display text-[1.05cqw] text-bone-dim @[280px]:flex">
              <span>Home</span>
              <span>About</span>
              <span>Products &amp; Services</span>
              <span>Projects</span>
              <span>Contact</span>
            </span>
          </div>
          <div className="mt-[2.4cqw] grid grid-cols-12 gap-[2cqw]">
            <div className="col-span-6 flex flex-col justify-center">
              <span className="font-display text-[1cqw] tracking-[0.3em] text-copper uppercase">
                Engineering solutions
              </span>
              <span className="mt-[1cqw] font-display text-[4.2cqw] leading-[0.95] font-medium tracking-[-0.04em]">
                Built with
                <br />
                precision.
              </span>
              <span className="mt-[1.6cqw] space-y-[0.7cqw]">
                <Bar w="85%" />
                <Bar w="62%" />
              </span>
            </div>
            <div className="metal relative col-span-6 aspect-[4/3] overflow-hidden rounded-[0.6cqw]">
              <div className="hatch absolute inset-y-0 right-0 w-1/2" />
              <div className="absolute top-[18%] left-[12%] h-[64%] w-[10%] rounded-[0.3cqw] bg-bone/10" />
              <div className="absolute top-[18%] left-[12%] h-[8%] w-[56%] rounded-[0.3cqw] bg-bone/15" />
              <div className="copper-metal absolute bottom-[14%] left-[30%] h-[3%] w-[48%] rounded-full opacity-80" />
              <span className="absolute bottom-[0.8cqw] left-[1cqw] font-display text-[0.9cqw] text-mute">
                Client imagery
              </span>
            </div>
          </div>
        </Zone>

        <Zone id="services" active={active}>
          <span className="font-display text-[1cqw] tracking-[0.25em] text-mute uppercase">
            Products &amp; services
          </span>
          <div className="mt-[1cqw] grid grid-cols-4 gap-[1.2cqw]">
            {services.map((Icon, i) => (
              <div key={i} className="rounded-[0.6cqw] border border-line bg-ink p-[1.2cqw]">
                <Icon aria-hidden className="size-[2cqw] text-copper" strokeWidth={1.5} />
                <Bar w="70%" className="mt-[1.4cqw]" />
                <Bar w="45%" className="mt-[0.6cqw] bg-bone/10" />
              </div>
            ))}
          </div>
        </Zone>

        <div className="grid grid-cols-12 gap-[2cqw]">
          <Zone id="projects" active={active} className="col-span-8">
            <span className="font-display text-[1cqw] tracking-[0.25em] text-mute uppercase">
              Featured projects
            </span>
            <div className="mt-[1cqw] grid grid-cols-3 gap-[1cqw]">
              {[0, 1, 2].map((i) => (
                <div key={i}>
                  <div className={`metal relative aspect-[4/5] overflow-hidden rounded-[0.5cqw] ${i === 1 ? "translate-y-[1cqw]" : ""}`}>
                    <div className="hatch absolute inset-0 opacity-60" style={{ clipPath: `polygon(0 ${60 - i * 15}%, 100% ${40 + i * 10}%, 100% 100%, 0 100%)` }} />
                  </div>
                  <Bar w="70%" className={`mt-[0.8cqw] ${i === 1 ? "translate-y-[1cqw]" : ""}`} />
                </div>
              ))}
            </div>
          </Zone>

          <Zone id="enquiry" active={active} className="col-span-4 flex">
            <div className="flex w-full flex-col justify-between rounded-[0.6cqw] border border-line bg-ink p-[1.4cqw]">
              <span className="font-display text-[1.7cqw] leading-tight tracking-tight">
                Start an enquiry
              </span>
              <span className="space-y-[0.8cqw]">
                <span className="block h-[2.4cqw] rounded-[0.4cqw] border border-line" />
                <span className="block h-[2.4cqw] rounded-[0.4cqw] border border-line" />
              </span>
              <span className="flex items-center gap-[0.8cqw]">
                <span className="rounded-full bg-copper px-[1.4cqw] py-[0.6cqw] font-display text-[1cqw] text-ink">
                  Send
                </span>
                <span className="flex items-center gap-[0.4cqw] rounded-full border border-line-strong px-[1cqw] py-[0.6cqw] font-display text-[1cqw]">
                  <MessageCircle aria-hidden className="size-[1.2cqw]" /> WhatsApp
                </span>
              </span>
            </div>
          </Zone>
        </div>
      </div>
    </div>
  );
}

export function MobileMockup({ active }: { active: HighlightId }) {
  const on = active === "mobile";
  return (
    <div
      className={`@container relative overflow-hidden rounded-[11cqw] border bg-ink p-[3.5cqw] shadow-[0_40px_80px_-30px_rgb(0_0_0/0.9)] transition-colors print:shadow-none duration-700 ${
        on ? "border-copper" : "border-line-strong"
      }`}
    >
      <div className="relative overflow-hidden rounded-[8cqw] bg-ink-2 px-[6cqw] pt-[12cqw] pb-[8cqw]">
        <span aria-hidden className="absolute top-[3cqw] left-1/2 h-[4.5cqw] w-[28cqw] -translate-x-1/2 rounded-full bg-ink" />
        <div className="flex items-center justify-between">
          <span className="font-display text-[6cqw] font-semibold">
            NAT<span className="text-copper">.</span>
          </span>
          <Menu aria-hidden className="size-[6cqw] text-bone-dim" />
        </div>
        <span className="mt-[8cqw] block font-display text-[3.4cqw] tracking-[0.3em] text-copper uppercase">
          Engineering
        </span>
        <span className="mt-[2cqw] block font-display text-[11cqw] leading-[0.95] font-medium tracking-[-0.04em]">
          Built with precision.
        </span>
        <div className="metal relative mt-[6cqw] aspect-[4/3] overflow-hidden rounded-[3cqw]">
          <div className="hatch absolute inset-y-0 right-0 w-1/2" />
          <div className="copper-metal absolute bottom-[16%] left-[14%] h-[3%] w-[60%] rounded-full opacity-80" />
        </div>
        <div className="mt-[6cqw] space-y-[3cqw]">
          {services.slice(0, 3).map((Icon, i) => (
            <div key={i} className="flex items-center gap-[3cqw] border-b border-line pb-[3cqw]">
              <Icon aria-hidden className="size-[5cqw] text-copper" strokeWidth={1.5} />
              <span className="block h-[2cqw] flex-1 rounded-full bg-bone/15" />
            </div>
          ))}
        </div>
        <span className="absolute right-[5cqw] bottom-[5cqw] grid size-[13cqw] place-items-center rounded-full bg-copper text-ink">
          <MessageCircle aria-hidden className="size-[6cqw]" />
        </span>
      </div>
    </div>
  );
}
