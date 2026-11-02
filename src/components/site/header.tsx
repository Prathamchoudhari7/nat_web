"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { Download, Menu, X } from "lucide-react";
import { navItems, proposal } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const firstLink = useRef<HTMLAnchorElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section that currently occupies the middle of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const id of ["top", ...navItems.map((n) => n.id)]) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const restore = toggle.current;
    // Keep keyboard and screen-reader focus inside the open menu.
    const background = [document.getElementById("main"), document.querySelector("body > footer")];
    background.forEach((el) => el?.setAttribute("inert", ""));
    document.body.style.overflow = "hidden";
    firstLink.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      background.forEach((el) => el?.removeAttribute("inert"));
      window.removeEventListener("keydown", onKey);
      restore?.focus();
    };
  }, [open]);

  return (
    <header className="print:hidden">
      <a
        href="#main"
        className="fixed top-3 left-3 z-[80] -translate-y-20 rounded-full bg-bone px-4 py-2 text-sm text-ink focus:translate-y-0"
      >
        Skip to content
      </a>

      <div
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
          scrolled || open
            ? "border-b border-line bg-ink/80 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <motion.div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-px origin-left bg-copper"
          style={{ scaleX: progress }}
        />
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
          <a href="#top" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
            <Mark />
            <span className="font-display text-sm leading-none font-medium tracking-wide">
              {proposal.agency}
              <span className="ml-2 hidden text-mute sm:inline xl:hidden 2xl:inline">
                / Proposal for {proposal.client}
              </span>
            </span>
          </a>

          <nav aria-label="Proposal sections" className="hidden xl:block">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = active === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      aria-current={isActive ? "location" : undefined}
                      className={`relative flex items-baseline gap-1.5 rounded-full px-3 py-2 font-display text-[13px] transition-colors duration-300 ${
                        isActive ? "text-bone" : "text-mute hover:text-bone"
                      }`}
                    >
                      <span className={`text-[10px] ${isActive ? "text-copper" : ""}`}>
                        {item.index}
                      </span>
                      {item.label}
                      {isActive ? (
                        <motion.span
                          layoutId="nav-dot"
                          aria-hidden
                          className="absolute -bottom-0.5 left-1/2 size-1 -translate-x-1/2 rounded-full bg-copper"
                        />
                      ) : null}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="hidden items-center gap-2 rounded-full border border-line-strong px-4 py-2 font-display text-[13px] transition-colors hover:border-copper hover:text-copper-light md:inline-flex"
            >
              <Download aria-hidden className="size-3.5" />
              Save PDF
            </button>
            <button
              ref={toggle}
              type="button"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="grid size-10 place-items-center rounded-full border border-line-strong transition-colors hover:border-copper xl:hidden"
            >
              {open ? <X aria-hidden className="size-4" /> : <Menu aria-hidden className="size-4" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Proposal sections"
            className="fixed inset-0 z-40 flex flex-col bg-ink px-5 pt-24 pb-8 sm:px-8 xl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div aria-hidden className="hairline-grid pointer-events-none absolute inset-0 opacity-40" />
            <nav className="relative flex-1 overflow-y-auto">
              <ul className="border-t border-line">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.id}
                    className="border-b border-line"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.04, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <a
                      ref={i === 0 ? firstLink : undefined}
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      aria-current={active === item.id ? "location" : undefined}
                      className="flex items-baseline justify-between py-4 font-display text-[clamp(1.75rem,7vw,3rem)] leading-none tracking-tight"
                    >
                      <span className={active === item.id ? "text-copper-light" : ""}>
                        {item.label}
                      </span>
                      <span className="text-xs tracking-[0.2em] text-mute">{item.index}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <div className="relative mt-6 flex items-center justify-between gap-4 text-sm text-mute">
              <span>{proposal.date}</span>
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  setTimeout(() => window.print(), 350);
                }}
                className="inline-flex items-center gap-2 rounded-full border border-line-strong px-4 py-2 font-display text-bone"
              >
                <Download aria-hidden className="size-3.5" />
                Save as PDF
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function Mark() {
  return (
    <span
      aria-hidden
      className="relative grid size-8 place-items-center rounded-full border border-line-strong transition-colors duration-500 group-hover:border-copper"
    >
      <span className="size-2 rounded-full bg-copper transition-transform duration-500 ease-expo group-hover:scale-150" />
    </span>
  );
}
