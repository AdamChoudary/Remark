import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GridPattern, DotPattern, AccentGlow, GrainOverlay } from "@/components/SvgPatterns";
import { MarkedWord } from "@/components/MarkedWord";

const workCategories = [
  {
    title: "Web Development",
    items: [
      "Property sites with dynamic listings and virtual tours",
      "Portfolio & brand presences for creative professionals",
      "Business websites with CMS and lead generation",
      "SaaS platforms with subscription management",
    ],
  },
  {
    title: "Conversational AI",
    items: [
      "AI voice agents for 24/7 customer support",
      "Smart call routing and helpline automation",
      "Multi-language chatbot deployment",
      "Voice-enabled marketing campaigns",
    ],
  },
  {
    title: "Digital Marketing",
    items: [
      "SEO-first content strategies and technical audits",
      "Performance media buying (Meta, Google, LinkedIn)",
      "Conversion rate optimization and A/B testing",
      "Analytics dashboards and attribution modeling",
    ],
  },
  {
    title: "Brand & Identity",
    items: [
      "Logo architectures and visual identity systems",
      "Brand guidelines and style documentation",
      "Print and digital collateral design",
      "Full rebrand strategy and rollout",
    ],
  },
];

export default function WorkPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        {/* Hero */}
        <section className="relative min-h-[70vh] overflow-hidden bg-void px-4 pt-32 pb-20 md:px-8">
          <div className="pointer-events-none absolute inset-0 bg-section-1" />
          <GrainOverlay className="opacity-[0.015]" />
          <GridPattern size={60} opacity={0.03} />
          <AccentGlow position="left" size="50%" />

          <div className="relative mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
              <div className="md:col-span-7 md:col-start-1">
                <p className="mono mb-6 text-xs tracking-[0.25em] text-muted uppercase">Our Work</p>
                <h1 className="font-display text-[clamp(2.5rem,8vw,5rem)] font-light leading-[1.05] tracking-[-0.03em] text-fg text-balance">
                  What We&rsquo;ve <MarkedWord word="Built" gesture="underline" />
                </h1>
                <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
                  Every project is a partnership. We build digital solutions that move
                  businesses forward.
                </p>
              </div>
              <div className="md:col-span-4 md:col-start-10 md:self-end">
                <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                  <div>
                    <p className="font-display text-4xl font-light text-fg tabular-nums">300+</p>
                    <p className="mt-1 text-[9px] tracking-[0.15em] text-subtle uppercase">Projects Delivered</p>
                  </div>
                  <div>
                    <p className="font-display text-4xl font-light text-fg tabular-nums">98%</p>
                    <p className="mt-1 text-[9px] tracking-[0.15em] text-subtle uppercase">Client Retention</p>
                  </div>
                  <div>
                    <p className="font-display text-4xl font-light text-fg tabular-nums">4.9</p>
                    <p className="mt-1 text-[9px] tracking-[0.15em] text-subtle uppercase">Avg. Rating</p>
                  </div>
                  <div>
                    <p className="font-display text-4xl font-light text-fg tabular-nums">2 Wk</p>
                    <p className="mt-1 text-[9px] tracking-[0.15em] text-subtle uppercase">Avg. Delivery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Editorial Image Break */}
        <section className="relative h-[50dvh] w-full overflow-hidden bg-void border-t border-border-subtle">
          <img
            src="/architecture_structure.png"
            alt="Intelligent structure render"
            className="h-full w-full object-cover opacity-85 mix-blend-luminosity brightness-75 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-void/30 via-transparent to-void" />
        </section>

        {/* Work categories */}
        <section className="section bg-void">
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <div className="space-y-28">
              {workCategories.map((cat, i) => (
                <div
                  key={cat.title}
                  className="grid grid-cols-1 gap-12 md:grid-cols-12 border-t border-border-subtle pt-16"
                >
                  {/* Sticky category title */}
                  <div className="md:col-span-4 md:sticky md:top-28 md:self-start">
                    <p className="mono mb-2 text-[10px] tracking-[0.2em] text-accent uppercase">
                      Category 0{i + 1}
                    </p>
                    <h2 className="font-display text-3xl font-light text-fg">{cat.title}</h2>
                  </div>
                  
                  {/* Items list */}
                  <div className="md:col-span-7 md:col-start-6 space-y-8">
                    {cat.items.map((item, idx) => (
                      <div key={item} className="group relative">
                        <div className="flex items-start gap-4">
                          <span className="mono mt-1 text-[11px] tracking-wider text-subtle">
                            {(idx + 1).toString().padStart(2, "0")}
                          </span>
                          <div>
                            <p className="text-base leading-relaxed text-fg group-hover:text-accent transition-colors duration-200">
                              {item}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative bg-section-2 py-24 overflow-hidden">
          <DotPattern size={30} opacity={0.03} />
          <AccentGlow position="center" size="50%" />
          <div className="relative mx-auto max-w-6xl px-4 md:px-8 text-center">
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-light leading-[1.1] text-fg">
              Ready to build something <MarkedWord word="remarkable" />?
            </h2>
            <a
              href="/contact"
              className="mt-10 inline-block rounded bg-accent px-10 py-4 text-base font-medium text-accent-fg
                transition-[transform,background-color] duration-200 ease-out-expo
                hover:bg-accent-bright active:scale-[0.96]
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Start a project
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
