import { ArrowUp } from "lucide-react";
import { proposal } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-5 py-8 text-sm text-mute sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <p>
          © 2026 {proposal.agency}. Website proposal prepared for {proposal.client} · {proposal.date}.
        </p>
        <a href="#top" className="-my-3 inline-flex items-center gap-2 self-start py-3 sm:self-auto font-display text-bone transition-colors hover:text-copper-light print:hidden">
          Back to top <ArrowUp aria-hidden className="size-3.5" />
        </a>
      </div>
    </footer>
  );
}
