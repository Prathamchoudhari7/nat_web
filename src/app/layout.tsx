import type { Metadata, Viewport } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { Providers } from "@/components/providers";
import { Preloader } from "@/components/site/preloader";
import "./globals.css";

const display = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const sans = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NAT Engineering Website Proposal | Smart Web",
  description:
    "A tailored website design and development proposal for NAT Engineering, prepared by Smart Web. November 2026.",
  // A private client proposal: keep it out of search results.
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#0b0d10",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${sans.variable} antialiased`}
      // The preloader script sets data-intro on <html> before hydration.
      suppressHydrationWarning
    >
      <body className="grain bg-ink font-sans text-bone">
        <Preloader />
        {/* Without JavaScript, reveal animations never run, so show everything. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
