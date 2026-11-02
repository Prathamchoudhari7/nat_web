import { proposal } from "@/lib/content";

/*
 * Engineering Blueprint Reveal: a ~2s intro drawn entirely with SVG and CSS
 * keyframes (see `.preloader` in globals.css). It ships no client JavaScript
 * and dismisses itself even if scripts fail. The inline script runs before
 * first paint and skips the intro on repeat visits in the same session or
 * when the visitor prefers reduced motion.
 */
const decide = `(function(){var d=document.documentElement;try{if(sessionStorage.getItem("sw-intro")||matchMedia("(prefers-reduced-motion: reduce)").matches){d.dataset.intro="skip";return}sessionStorage.setItem("sw-intro","1")}catch(e){}d.dataset.intro="play"})()`;

const ticks = Array.from({ length: 72 }, (_, i) => i);

export function Preloader() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: decide }} />
      <div className="preloader" aria-hidden>
        <div className="pl-inner absolute inset-0 grid place-items-center">
          <div className="pl-grid hairline-grid absolute inset-0 [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]" />
          <span className="pl-line-h absolute inset-x-0 top-1/2 h-px bg-copper/45" />
          <span className="pl-line-v absolute inset-y-0 left-1/2 w-px bg-copper/30" />

          <svg viewBox="0 0 400 400" fill="none" className="absolute top-1/2 left-1/2 size-[min(88vw,480px)] -translate-x-1/2 -translate-y-1/2">
            <circle className="pl-draw" style={{ "--d": "0.15s" } as React.CSSProperties} cx="200" cy="200" r="186" pathLength={1} stroke="var(--color-line-strong)" />
            <circle className="pl-draw" style={{ "--d": "0.3s" } as React.CSSProperties} cx="200" cy="200" r="150" pathLength={1} stroke="var(--color-copper)" strokeWidth="1.25" />
            <circle className="pl-draw" style={{ "--d": "0.45s" } as React.CSSProperties} cx="200" cy="200" r="118" pathLength={1} stroke="var(--color-line-strong)" strokeDasharray="0.004 0.012" />
            <g className="pl-ticks">
              {ticks.map((i) => {
                const a = (i / ticks.length) * Math.PI * 2;
                const long = i % 6 === 0;
                const r2 = long ? 170 : 177;
                return (
                  <line
                    key={i}
                    x1={(200 + Math.cos(a) * 186).toFixed(2)}
                    y1={(200 + Math.sin(a) * 186).toFixed(2)}
                    x2={(200 + Math.cos(a) * r2).toFixed(2)}
                    y2={(200 + Math.sin(a) * r2).toFixed(2)}
                    stroke={long ? "var(--color-copper)" : "var(--color-line-strong)"}
                    strokeWidth={long ? 1.2 : 0.7}
                  />
                );
              })}
            </g>
          </svg>

          <div className="relative flex flex-col items-center px-6 text-center font-display">
            <span className="pl-word block overflow-hidden">
              <span className="block text-[clamp(1.5rem,6.8vw,2.6rem)] leading-tight font-medium tracking-[0.14em] text-bone">
                SMART WEB
              </span>
            </span>
            <span className="pl-word block overflow-hidden">
              <span className="block py-1 text-[clamp(1rem,4.5vw,1.4rem)] leading-none font-light text-copper-light">×</span>
            </span>
            <span className="pl-word block overflow-hidden">
              <span className="block text-[clamp(1.5rem,6.8vw,2.6rem)] leading-tight font-medium tracking-[0.14em] whitespace-nowrap text-bone">
                NAT ENGINEERING
              </span>
            </span>
            <span className="pl-sweep mt-5 block h-px w-[min(64vw,300px)] bg-copper" />
            <span className="pl-caption mt-4 block text-[10px] tracking-[0.32em] text-mute uppercase sm:text-[11px]">
              Website Proposal / {proposal.date}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
