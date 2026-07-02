import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArchitecturalGrid, AccentGlow, GrainOverlay, EdgeGeometry, DotPattern } from "@/components/SvgPatterns";
import { MarkedWord } from "@/components/MarkedWord";

const values = [
  {
    title: "Precision",
    desc: "Every pixel, every interaction, every line of copy is intentional. We don't ship good enough.",
  },
  {
    title: "Partnership",
    desc: "We embed with your team. Your business goals drive the technical decisions, not the other way around.",
  },
  {
    title: "Craft",
    desc: "Digital products are judged by how they feel, not just what they do. We build for both.",
  },
  {
    title: "Scale",
    desc: "Solutions that grow with you. From a landing page to a full platform — architecture matters from day one.",
  },
];

const team = [
  { name: "Hassan Raza", role: "Founder & Lead Developer" },
  { name: "Design Team", role: "UI/UX & Visual Design" },
  { name: "Engineering", role: "Full-Stack Development" },
  { name: "AI & Automation", role: "Voice & Chat Systems" },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        {/* Hero */}
        <section className="relative min-h-[70vh] overflow-hidden bg-void px-4 pt-32 pb-20 md:px-8">
          <div className="pointer-events-none absolute inset-0 bg-section-1" />
          <GrainOverlay className="opacity-[0.015]" />
          <ArchitecturalGrid opacity={0.025} />
          <AccentGlow position="right" size="50%" />

          <div className="relative mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
              <div className="md:col-span-7 md:col-start-2">
                <p className="mono mb-6 text-xs tracking-[0.25em] text-muted uppercase">About</p>
                <h1 className="font-display text-[clamp(2.2rem,7vw,4.5rem)] font-light leading-[1.08] tracking-[-0.03em] text-fg text-balance">
                  We build digital solutions that move <MarkedWord word="businesses" gesture="underline" /> forward.
                </h1>
              </div>
              <div className="md:col-span-4 md:col-start-9 md:self-end">
                <p className="text-base leading-relaxed text-muted max-w-[40ch]">
                  Remark Studio is a Islamabad-based digital solutions agency. We combine
                  engineering discipline with creative ambition to deliver products that
                  perform.
                </p>
              </div>
            </div>
          </div>

          {/* Decorative side bar */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-px bg-border-subtle hidden md:block" />
          <div className="pointer-events-none absolute right-0 top-1/4 h-32 w-32 -translate-y-1/2 translate-x-8 rounded-full border border-border-subtle hidden md:block" />
        </section>

        {/* Values */}
        <section className="section bg-bg relative overflow-hidden">
          <DotPattern size={28} opacity={0.025} />
          <AccentGlow position="left" size="40%" />

          <div className="relative mx-auto max-w-6xl px-4 md:px-8">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
              {/* Left Column - Sticky Image + Title */}
              <div className="md:col-span-5 md:sticky md:top-28 md:self-start space-y-8 mb-12 md:mb-0">
                <div>
                  <p className="mono mb-2 text-[10px] tracking-[0.2em] text-accent uppercase">Values</p>
                  <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-light leading-[1.1] text-fg">
                    Built on core principles.
                  </h2>
                </div>
                <div className="relative aspect-square w-full overflow-hidden rounded-sm bg-bg-med">
                  <img
                    src="/abstract_systems.png"
                    alt="Core principles model"
                    className="h-full w-full object-cover opacity-90 brightness-75 contrast-125 mix-blend-luminosity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent opacity-60" />
                </div>
              </div>

              {/* Right Column - Scrollable Values stack */}
              <div className="md:col-span-6 md:col-start-7 space-y-12">
                {values.map((v, i) => (
                  <div key={v.title} className="border-t border-border-subtle pt-8 first:border-t-0 first:pt-0">
                    <span className="mono text-[11px] text-accent">0{i + 1}</span>
                    <h3 className="font-display text-2xl font-light text-fg mt-2">{v.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted max-w-[45ch]">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Full-bleed visual break */}
        <section className="relative h-[55dvh] w-full overflow-hidden">
          <img
            src="/about_studio_floor.png"
            alt="Remark Studio workspace"
            className="h-full w-full object-cover opacity-75 brightness-90 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-void/40 via-transparent to-void" />
        </section>

        {/* Team */}
        <section className="section bg-void overflow-hidden">
          <ArchitecturalGrid opacity={0.015} />
          <EdgeGeometry side="right" lines={6} className="top-1/3 right-0" />

          <div className="relative mx-auto max-w-6xl px-4 md:px-8">
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-light leading-[1.1] text-fg mb-16">
              The people behind the work.
            </h2>

            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((m) => (
                <div key={m.name} className="group">
                  <div className="aspect-[3/4] w-full rounded-sm bg-bg-med flex items-end overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-void/20 to-transparent z-10" />
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/80 via-transparent to-transparent group-hover:opacity-20 transition-opacity duration-300" />
                    
                    <div className="w-full p-6 relative z-20">
                      <p className="font-display text-lg font-light text-fg">{m.name}</p>
                      <p className="mt-1 text-xs tracking-[0.1em] text-muted uppercase">{m.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative bg-section-2 py-24 overflow-hidden">
          <AccentGlow position="center" size="50%" />
          <EdgeGeometry side="left" lines={5} className="bottom-1/4 left-0" />
          <div className="relative mx-auto max-w-6xl px-4 md:px-8 text-center">
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-light leading-[1.1] text-fg">
              Let&rsquo;s build something <MarkedWord word="remarkable" gesture="circle" /> together.
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
