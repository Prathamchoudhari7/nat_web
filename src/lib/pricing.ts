/*
 * All commercial values for the proposal live here. Amounts are whole rupees.
 * The checks at the bottom run at build time, so a mistyped figure fails the
 * build instead of reaching the client.
 */

export const PROJECT_TOTAL = 65_000;

export const inr = (amount: number) => `₹${amount.toLocaleString("en-IN")}`;

export type Deliverable = { title: string; amount: number; description: string };

export const deliverables: Deliverable[] = [
  {
    title: "Discovery, UX Strategy & Information Architecture",
    amount: 5_000,
    description:
      "Requirements discussion, review of the content supplied by NAT Engineering, a sitemap for the five pages and a section-by-section content plan for each page.",
  },
  {
    title: "Bespoke UI/UX Design & Responsive Layouts",
    amount: 15_000,
    description:
      "Custom visual design for all five pages, covering typography, colour, spacing and component styles, with layouts prepared for mobile, tablet and desktop and refined with your feedback before design approval.",
  },
  {
    title: "Next.js & TypeScript Frontend Development",
    amount: 20_000,
    description:
      "Custom implementation of five responsive website pages using Next.js App Router, TypeScript, reusable React components, structured navigation and maintainable frontend architecture.",
  },
  {
    title: "Motion Design & Interactive Components",
    amount: 7_000,
    description:
      "Scroll-reveal animations, hover states, mobile navigation and project gallery interactions, built with lightweight animation code that respects reduced-motion settings.",
  },
  {
    title: "Technical SEO & Performance Optimization",
    amount: 6_000,
    description:
      "Page titles, meta descriptions, semantic heading structure, social sharing tags, sitemap and robots configuration, and optimised responsive images. Improves search readiness; rankings are not guaranteed.",
  },
  {
    title: "Enquiry Form & WhatsApp Integration",
    amount: 4_000,
    description:
      "A validated enquiry form that delivers submissions to a nominated email address, plus WhatsApp click-to-chat links on key pages.",
  },
  {
    title: "Quality Assurance, Deployment & Launch",
    amount: 8_000,
    description:
      "Testing across common browsers and devices, form and link checks, accessibility and performance review, deployment to the selected hosting, domain connection and 30 days of post-launch bug fixes.",
  },
];

export const milestones = [
  { share: 40, label: "Advance", amount: 26_000 },
  { share: 30, label: "Upon design approval", amount: 19_500 },
  { share: 30, label: "Before launch", amount: 19_500 },
] as const;

export const infrastructure = [
  { item: "Domain registration", range: "₹800–₹1,500", period: "per year" },
  { item: "Hosting", range: "₹2,000–₹5,000", period: "per year" },
] as const;

export type CarePlan = { name: string; monthly: number; featured?: boolean; inclusions: string[] };

export const carePlans: CarePlan[] = [
  {
    name: "Basic Care",
    monthly: 3_000,
    inclusions: [
      "Routine website health checks",
      "Up to two minor content update requests per month",
      "Dependency and security update review",
      "Basic technical issue monitoring",
      "Business-hours email support",
    ],
  },
  {
    name: "Premium Care",
    monthly: 5_000,
    featured: true,
    inclusions: [
      "Everything included in Basic Care",
      "Up to five minor content update requests per month",
      "Monthly technical and performance review",
      "Priority business-hours support",
      "Monthly maintenance summary",
    ],
  },
];

const sum = (values: readonly number[]) => values.reduce((a, b) => a + b, 0);

if (sum(deliverables.map((d) => d.amount)) !== PROJECT_TOTAL) {
  throw new Error("Pricing: deliverable breakdown does not total the project fee.");
}
if (sum(milestones.map((m) => m.amount)) !== PROJECT_TOTAL) {
  throw new Error("Pricing: payment milestones do not total the project fee.");
}
if (milestones.some((m) => (PROJECT_TOTAL * m.share) / 100 !== m.amount)) {
  throw new Error("Pricing: a milestone amount does not match its percentage.");
}
