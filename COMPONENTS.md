# Component Inventory & Orchestration Plan

## Component Map

```
Home (page.tsx:766)
├── Header (77)         — Fixed nav, mobile drawer, scroll state
├── Hero (213)           — Fullscreen, headline, subtitle, ticker, CTA, stats
├── Narrative (305)      — Sticky-scroll problem/solution
├── Capabilities (397)   — Stacked accordion index list
├── WorkPreview (468)    — Horizontal scroll tiles
├── Testimonial (534)    — Pull-quote + metrics
├── Contact (588)        — CTA split + contact details
└── Footer (667)         — 4-col grid, links, socials

Shared:
└── MarkedWord (7)       — Red mark utility (underline/circle/strike)
```

## Skill-to-Component Matrix

| Rule / Skill | Header | Hero | Narrative | Capabilities | Work | Testimonial | Contact | Footer | MarkedWord |
|---|---|---|---|---|---|---|---|---|---|
| design-taste: hero discipline (4.7) | | ✓ | | | | | | | |
| design-taste: layout variety (4.7) | | | ✓ | ✓ | ✓ | ✓ | ✓ | | |
| design-taste: eyebrow restraint | | ✓ | ✓ | | ✓ | | ✓ | ✓ | |
| design-taste: nav rules | ✓ | | | | | | | | |
| design-taste: shape consistency | ✓ | | | ✓ | ✓ | | ✓ | | |
| design-taste: button rules | ✓ | ✓ | | | | | ✓ | | |
| swiss: 8px grid | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | |
| swiss: 12-col grid | | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | |
| swiss: opacity hierarchy | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | |
| swiss: touch targets | ✓ | | | ✓ | | | | | |
| oklch: color tokens | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| emil: easing/duration | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | | ✓ |
| emil: enter/exit rules | ✓ | ✓ | ✓ | | | | | | ✓ |
| emil: scale-on-press | ✓ | ✓ | | | | | ✓ | | |
| emil: stagger timing | | ✓ | | | | | | | |
| feel-better: concentric radius | | | | | ✓ | | | | |
| feel-better: img outlines | ✓ | | | | ✓ | | | ✓ | |
| feel-better: scale 0.96 | ✓ | ✓ | | | | | ✓ | | |
| feel-better: text-wrap | | ✓ | ✓ | ✓ | | ✓ | ✓ | | |
| feel-better: tabular-nums | | ✓ | | | | ✓ | | | |
| feel-better: no transition:all | ✓ | ✓ | ✓ | ✓ | | | ✓ | | |
| review-anim: <300ms UI | ✓ | ✓ | ✓ | ✓ | | | | | ✓ |
| review-anim: hover gate | ✓ | | | ✓ | | | ✓ | | |
| review-anim: reduced-motion | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | | ✓ |
| web-guidelines: contrast a11y | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | |
| web-guidelines: focus-visible | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| web-guidelines: semantic HTML | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | |
| impeccable: anti-slop | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

## Current Violations & Issues

### Hero
1. pt-28 exceeds max pt-24 (hero top padding cap)
2. 6 text elements > max 4 (eyebrow, headline, subtitle, ticker, CTA, stats)
3. Trust ticker inside hero but belongs below (violates "trust strip inside hero" ban)
4. Stats inside hero add clutter
5. No `min-h-[100dvh]` — uses `min-h-screen`

### Testimonial
1. `text-fg/[0.03]` — still uses opacity-based text for the quotation mark (low priority since it's 3% opacity decorative)

### Capabilities
1. Numbered section markers (01/02/03) — impeccable's banned patterns: "Numbered section markers (01/02/03) as default scaffolding"
2. `onMouseEnter/onMouseLeave` for expand on desktop — not mobile-friendly, no touch equivalent
3. Expand timing 500ms exceeds emil's 300ms UI cap

### WorkPreview
1. Horizontal scroll with `overflow-x-auto` — no click/drag scroll support, no scroll indicator
2. `scrollbar-width: none` inline AND `scrollbar-hide` class — redundant
