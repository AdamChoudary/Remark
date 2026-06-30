import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { StatsBar } from "@/components/StatsBar";
import { Narrative } from "@/components/Narrative";
import { Capabilities } from "@/components/Capabilities";
import { WorkPreview } from "@/components/WorkPreview";
import { Testimonial } from "@/components/Testimonial";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <Hero />
        <TrustStrip />
        <Narrative />
        <Capabilities />
        <StatsBar />
        <WorkPreview />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
