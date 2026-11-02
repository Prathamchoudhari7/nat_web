import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";

const pillars = [
  {
    title: "Capabilities",
    body: "Present what NAT Engineering can do with clarity and authority, so prospective clients understand its strengths at a glance.",
  },
  {
    title: "Services",
    body: "Organise products and services into a structure that is easy to browse, compare and understand.",
  },
  {
    title: "Projects",
    body: "Showcase completed work through a considered gallery that lets the projects speak for the company.",
  },
  {
    title: "Enquiries",
    body: "Make getting in touch effortless by form, phone, email or WhatsApp from any page and any device.",
  },
];

export function Opportunity() {
  return (
    <section
      id="opportunity"
      aria-labelledby="opportunity-title"
      className="print-break mx-auto max-w-[1440px] px-5 py-28 sm:px-8 sm:py-36 lg:px-12"
    >
      <SectionHeader
        id="opportunity-title"
        index="02"
        label="The Opportunity"
        title={
          <>
            A website that works as hard as the{" "}
            <span className="text-copper-light">engineering</span> behind it.
          </>
        }
        intro={
          <p>
            For an engineering business, the website is often the first place a
            prospective client forms an opinion. The proposed website gives{" "}
            <span className="text-bone">NAT Engineering</span> a modern,
            professional platform to present its capabilities, services and
            projects and to turn interest into enquiries.
          </p>
        }
      />

      <div className="mt-20 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:mt-28 lg:grid-cols-4">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08} className="avoid-break group bg-ink p-7 transition-colors duration-500 hover:bg-ink-2 sm:p-8">
            <p className="font-display text-xs tracking-[0.2em] text-mute">0{i + 1}</p>
            <h3 className="mt-16 font-display text-2xl tracking-tight transition-colors duration-500 group-hover:text-copper-light">
              {p.title}
            </h3>
            <p className="mt-4 leading-relaxed text-bone-dim">{p.body}</p>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 lg:ml-[25%]">
        <p className="max-w-xl border-l border-copper pl-5 text-sm leading-relaxed text-mute">
          All company information, including history, experience, credentials and
          project details, will be supplied and approved by NAT Engineering. Nothing will
          be published without confirmation.
        </p>
      </Reveal>
    </section>
  );
}
