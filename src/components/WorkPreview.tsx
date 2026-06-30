"use client";

import { MarkedWord } from "./MarkedWord";
import { DotPattern, AccentGlow } from "./SvgPatterns";

const workItems = [
  { name: "AI Voice Agents", category: "Conversational AI", tagline: "Intelligent voice agents for automated customer support." },
  { name: "Web Development", category: "Engineering", tagline: "Custom-built, high-conversion websites." },
  { name: "Digital Marketing", category: "Growth", tagline: "Data-driven performance marketing campaigns." },
  { name: "Media Production", category: "Cinematic", tagline: "Professional film, color grading & VFX." },
  { name: "Branding & Identity", category: "Design", tagline: "Core visual assets and unified design systems." },
];

// One accent only — every tile is the brand red (hue ~29), varied in focal
// position and brightness for rhythm. No second hue.
const tileGradients = [
  'radial-gradient(ellipse at 30% 20%, oklch(0.26 0.10 29) 0%, oklch(0.12 0.04 29) 38%, oklch(0.07 0.012 29) 100%)',
  'radial-gradient(ellipse at 75% 35%, oklch(0.21 0.075 29) 0%, oklch(0.11 0.035 29) 38%, oklch(0.07 0.012 29) 100%)',
  'radial-gradient(ellipse at 45% 78%, oklch(0.27 0.11 29) 0%, oklch(0.12 0.04 29) 38%, oklch(0.07 0.012 29) 100%)',
  'radial-gradient(ellipse at 20% 55%, oklch(0.23 0.085 29) 0%, oklch(0.11 0.035 29) 38%, oklch(0.07 0.012 29) 100%)',
  'radial-gradient(ellipse at 62% 28%, oklch(0.25 0.10 29) 0%, oklch(0.12 0.04 29) 38%, oklch(0.07 0.012 29) 100%)',
];

export function WorkPreview() {
  return (
    <section id="work" className="section bg-section-4 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <p className="mono mb-4 text-xs tracking-[0.25em] text-muted uppercase">
          Selected Work
        </p>
        <p className="mb-12 max-w-md text-sm leading-relaxed text-subtle">
          A curated selection of projects across our core capabilities.
        </p>
      </div>

      <div className="flex gap-6 overflow-x-auto px-4 pb-6 md:px-8 snap-x snap-mandatory scrollbar-hide">
        {workItems.map((item, i) => (
          <div
            key={item.name}
            className="group relative flex min-w-[300px] max-w-[400px] snap-start flex-col justify-end overflow-hidden rounded-sm
              md:min-w-[400px] transition-transform duration-500 ease-out-expo hover:scale-[1.02]
              focus-within:ring-2 focus-within:ring-accent"
          >
            <div
              className="relative aspect-[4/3] w-full overflow-hidden"
              style={{ background: tileGradients[i % tileGradients.length] }}
            >
              <DotPattern size={20} opacity={0.06} />
              <AccentGlow position="center" size="70%" className="opacity-50" />

              <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-void/30 to-transparent" />

              {/* Category */}
              <div className="absolute top-5 left-6">
                <span className="mono text-[10px] tracking-[0.18em] text-muted uppercase">
                  {item.category}
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                {item.name === "AI Voice Agents" ? (
                  <>
                    <h3 className="font-display text-2xl font-medium text-fg">
                      <MarkedWord word="AI" /> Voice Agents
                    </h3>
                    <p className="mt-2 max-w-[220px] text-xs leading-relaxed text-muted">{item.tagline}</p>
                  </>
                ) : (
                  <>
                    <h3 className="font-display text-2xl font-medium text-fg">{item.name}</h3>
                    <p className="mt-2 max-w-[220px] text-xs leading-relaxed text-muted">{item.tagline}</p>
                  </>
                )}
              </div>

              {/* Hover accent bar */}
              <div className="absolute bottom-0 left-0 h-0.5 w-full bg-accent transition-[transform] duration-500 ease-out-expo origin-left scale-x-0 group-hover:scale-x-100" />
            </div>
          </div>
        ))}

        <a
          href="/work"
          className="flex min-w-[140px] snap-start items-center justify-center text-sm tracking-wide text-muted
            transition-all duration-300 ease-out-expo hover:text-fg hover:translate-x-1
            focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
        >
          View all work &rarr;
        </a>
      </div>
    </section>
  );
}
