import { BeyondBuild } from "@/components/sections/beyond-build";
import { Experience } from "@/components/sections/experience";
import { FinalCta } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { Included } from "@/components/sections/included";
import { Investment } from "@/components/sections/investment";
import { Opportunity } from "@/components/sections/opportunity";
import { Process } from "@/components/sections/process";
import { Structure } from "@/components/sections/structure";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Opportunity />
        <Experience />
        <Structure />
        <Included />
        <Process />
        <Investment />
        <BeyondBuild />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
