import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { Narrative } from "@/components/Narrative";
import { ArchitecturalDesign } from "@/components/ArchitecturalDesign/index";
import { WorkPreview } from "@/components/WorkPreview";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <Hero />
        <TrustStrip />
        <Narrative />
        <ArchitecturalDesign />
        <WorkPreview />
      </main>
      <Footer />
    </>
  );
}


