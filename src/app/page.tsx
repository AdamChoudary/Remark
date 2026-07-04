import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { Narrative } from "@/components/Narrative";
import { Capabilities } from "@/components/Capabilities";
import { WorkPreview } from "@/components/WorkPreview";
import { Testimonial } from "@/components/Testimonial";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SeamStitch } from "@/components/SvgPatterns";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <Hero />
        <TrustStrip />
        {/* Red stitches sew the register changes together — the seam reads as
            sewn, not cut. Only at real register boundaries, not every gap:
            a stitch between two already-continuous dark sections would be
            decoration. StatsBar was removed, not restyled: its centered
            metric trio duplicated Testimonial's metrics and existed only as
            a divider band — the exact thing this pass is deleting. */}
        <SeamStitch />
        <Narrative />
        <SeamStitch />
        <Capabilities />
        <WorkPreview />
        <Testimonial />
        {/* No seam Testimonial→Contact: both are dark surfaces, so there's no
            register change to sew — a stitch here reads as a stray red tick in a
            dark field, not craft. Seams stay only on the two real dark↔light edges. */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
