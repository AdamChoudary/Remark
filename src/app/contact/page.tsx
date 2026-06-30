import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { GridPattern, AccentGlow, GrainOverlay, EdgeGeometry, DotPattern } from "@/components/SvgPatterns";
import { MarkedWord } from "@/components/MarkedWord";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        {/* Hero */}
        <section className="relative min-h-[60vh] overflow-hidden bg-void px-4 pt-32 pb-20 md:px-8">
          <div className="pointer-events-none absolute inset-0 bg-section-1" />
          <GrainOverlay className="opacity-[0.015]" />
          <GridPattern size={50} opacity={0.025} />
          <AccentGlow position="right" size="45%" />

          <div className="relative mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
              <div className="md:col-span-6">
                <p className="mono mb-6 text-xs tracking-[0.25em] text-muted uppercase">Contact</p>
                <h1 className="font-display text-[clamp(2.2rem,7vw,4.5rem)] font-light leading-[1.08] tracking-[-0.03em] text-fg text-balance">
                  Ready to <MarkedWord word="scale" gesture="underline" /> your digital future.
                </h1>
                <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
                  Tell us about your project and we&rsquo;ll get back to you within 24 hours.
                </p>
              </div>
              <div className="md:col-span-5 md:col-start-8 md:self-center">
                <div className="rounded-sm border border-border-subtle bg-bg-med/50 p-6">
                  <p className="mono text-[10px] tracking-[0.15em] text-subtle uppercase">
                    Quick reply
                  </p>
                  <p className="mt-4 text-4xl font-display font-light text-fg">24h</p>
                  <p className="mt-1 text-sm text-muted">Average first response time</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact form + info */}
        <section className="section bg-bg relative overflow-hidden">
          <DotPattern size={30} opacity={0.025} />
          <AccentGlow position="right" size="45%" />
          <EdgeGeometry side="left" lines={5} className="top-1/3 left-0" />

          <div className="relative mx-auto max-w-6xl px-4 md:px-8">
            <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
              {/* Form */}
              <div className="md:col-span-7">
                <ContactForm />
              </div>

              {/* Contact info */}
              <div className="md:col-span-4 md:col-start-9">
                <div className="space-y-10">
                  <div>
                    <p className="mono mb-3 text-[10px] tracking-[0.2em] text-subtle uppercase">Address</p>
                    <p className="text-sm leading-relaxed text-muted">
                      Office #104, Mezzanine Floor<br />
                      Embassy Gardens, Sector C1<br />
                      Bahria Enclave, Islamabad
                    </p>
                  </div>
                  <div>
                    <p className="mono mb-3 text-[10px] tracking-[0.2em] text-subtle uppercase">Phone</p>
                    <a
                      href="tel:+923268450001"
                      className="block text-sm text-muted transition-colors duration-200 hover:text-fg
                        focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                    >
                      +92 326 8450001
                    </a>
                    <a
                      href="tel:+923268450002"
                      className="mt-1 block text-sm text-muted transition-colors duration-200 hover:text-fg
                        focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                    >
                      +92 326 8450002
                    </a>
                  </div>
                  <div>
                    <p className="mono mb-3 text-[10px] tracking-[0.2em] text-subtle uppercase">Email</p>
                    <a
                      href="mailto:hello@remarkstudio.co"
                      className="text-sm text-muted transition-colors duration-200 hover:text-fg
                        focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                    >
                      hello@remarkstudio.co
                    </a>
                  </div>
                  <div>
                    <p className="mono mb-3 text-[10px] tracking-[0.2em] text-subtle uppercase">Social</p>
                    <div className="flex flex-wrap gap-5">
                      {["Instagram", "TikTok", "WhatsApp", "Facebook"].map((s) => (
                        <a
                          key={s}
                          href="#"
                          aria-label={s}
                          className="text-sm text-muted transition-colors duration-200 hover:text-accent
                            focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                        >
                          {s}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map placeholder */}
        <section className="relative h-64 border-t border-border-subtle overflow-hidden md:h-80">
          <img
            src="/architecture_structure.png"
            alt="Islamabad Enclave location"
            className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-luminosity brightness-50 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-void opacity-80" />
          <div className="relative flex h-full items-center justify-center z-10">
            <div className="text-center">
              <span className="inline-block px-4 py-1.5 rounded-sm border border-border-subtle bg-bg-med/75 backdrop-blur-md mono text-[10px] tracking-[0.15em] text-fg uppercase">
                Bahria Enclave &middot; Islamabad
              </span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
