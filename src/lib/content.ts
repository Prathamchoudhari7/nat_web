import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Compass,
  FileText,
  Gauge,
  Images,
  Layers,
  LifeBuoy,
  MessageCircle,
  Rocket,
  Search,
  Send,
  Smartphone,
  Sparkles,
} from "lucide-react";

export const proposal = {
  client: "NAT Engineering",
  agency: "Smart Web",
  email: "smartweb0921@gmail.com",
  date: "November 2026",
} as const;

export const mailto = `mailto:${proposal.email}?subject=${encodeURIComponent(
  "NAT Engineering Website Proposal",
)}&body=${encodeURIComponent(
  "Hello Smart Web,\n\nWe have reviewed the website proposal for NAT Engineering and would like to discuss it further.\n\n",
)}`;

export const navItems = [
  { id: "opportunity", index: "02", label: "Opportunity" },
  { id: "experience", index: "03", label: "Experience" },
  { id: "structure", index: "04", label: "Structure" },
  { id: "included", index: "05", label: "Included" },
  { id: "process", index: "06", label: "Process" },
  { id: "investment", index: "07", label: "Investment" },
  { id: "care", index: "08", label: "Care" },
  { id: "contact", index: "09", label: "Contact" },
] as const;

export type HighlightId =
  | "identity"
  | "services"
  | "projects"
  | "mobile"
  | "enquiry";

export const highlights: {
  id: HighlightId;
  title: string;
  body: string;
}[] = [
  {
    id: "identity",
    title: "Visual identity",
    body: "A confident, industrial-grade visual language: considered typography, a restrained palette and generous space that lets NAT Engineering's work lead.",
  },
  {
    id: "services",
    title: "Service discovery",
    body: "Products and services organised into clear categories, so visitors can find the right capability in a few seconds.",
  },
  {
    id: "projects",
    title: "Project storytelling",
    body: "A portfolio that presents completed work with imagery and relevant details, turning projects into proof of capability.",
  },
  {
    id: "mobile",
    title: "Mobile experience",
    body: "Every page designed for the phone first fast, legible and easy to navigate on site, in transit or in the office.",
  },
  {
    id: "enquiry",
    title: "Enquiry accessibility",
    body: "Enquiry options kept within reach on every page a contact form, direct contact details and a WhatsApp shortcut.",
  },
];

export const pages = [
  {
    index: "01",
    name: "Home",
    summary: "The first impression and a clear route into the business.",
    items: [
      "Company introduction",
      "Services overview",
      "Featured projects",
      "Enquiry call-to-action",
    ],
  },
  {
    index: "02",
    name: "About Us",
    summary: "Who NAT Engineering is, told in its own words.",
    items: [
      "Company profile",
      "Experience",
      "Values",
      "Credentials supplied by the client",
    ],
  },
  {
    index: "03",
    name: "Products & Services",
    summary: "A structured view of everything NAT Engineering offers.",
    items: ["Engineering offerings", "Products", "Service categories"],
  },
  {
    index: "04",
    name: "Projects / Portfolio",
    summary: "Completed work, presented with care and context.",
    items: ["Project gallery", "Project images", "Relevant project information"],
  },
  {
    index: "05",
    name: "Contact Us",
    summary: "Every way to start a conversation, in one place.",
    items: [
      "Enquiry form",
      "Contact information",
      "Location",
      "WhatsApp call-to-action",
    ],
  },
] as const;

export const inclusions: { label: string; icon: LucideIcon }[] = [
  { label: "Five custom-designed pages", icon: Layers },
  { label: "Responsive UI/UX", icon: Smartphone },
  { label: "Next.js development", icon: Code2 },
  { label: "Tasteful animations and interactions", icon: Sparkles },
  { label: "Project portfolio / gallery", icon: Images },
  { label: "Contact form integration", icon: Send },
  { label: "WhatsApp enquiry integration", icon: MessageCircle },
  { label: "Basic on-page SEO", icon: Search },
  { label: "Speed and mobile optimisation", icon: Gauge },
  { label: "Testing and deployment support", icon: Rocket },
  { label: "30 days of post-launch bug fixes", icon: LifeBuoy },
];

export const stages: { name: string; body: string; icon: LucideIcon }[] = [
  {
    name: "Discovery & Content",
    body: "Understanding NAT Engineering's goals and gathering the content, imagery and details the website will present.",
    icon: FileText,
  },
  {
    name: "Design Direction",
    body: "Establishing the visual direction and page designs for review, refined until approved.",
    icon: Compass,
  },
  {
    name: "Development",
    body: "Building the approved designs in Next.js responsive, fast and carefully animated.",
    icon: Code2,
  },
  {
    name: "Testing & Refinement",
    body: "Checking every page across devices and browsers, then polishing the details.",
    icon: Gauge,
  },
  {
    name: "Launch",
    body: "Deployment support to take the website live, followed by 30 days of bug fixes.",
    icon: Rocket,
  },
];

export const exclusions = [
  "Domain",
  "Hosting",
  "Ongoing maintenance",
  "Professional photography",
  "Paid third-party services",
  "Additional pages",
  "Advanced CMS",
  "Custom integrations",
];
