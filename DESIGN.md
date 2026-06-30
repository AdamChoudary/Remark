# Remark Studio — Design Direction

> The design agents in `~/.claude/agents/` treat this file as canonical for
> *direction*. Page **copy lives in `CONTENT.md`** — pull wording from there.
> Design here is built FRESH from the brief, the skills, and the logo.
> Nothing is carried over from the `main` branch (main's colors/fonts/theme/
> layout are NOT inputs — content only was taken from it).

## Vibe (one line) — LOCKED
Cinematic dark editorial: a near-black gallery, off-white type, and **one
deep-red mark** that lands like punctuation. Confident and precise, quietly
expensive. Not loud, not templated.

## Concept / motif — LOCKED
**The Remark = the mark.** A *remark* is both a mark left behind and something
worth remarking on. The red is never decoration — it is a deliberate **editor's
mark** (underline, circle, or strike) that hits exactly ONE word per section and
animates as if being drawn by hand. This is the brand signature; reuse it as the
through-line across every page. It already lives in the copy
("~~good enough~~ → scalable digital solutions").

## Theme — LOCKED: dark, single-mode
Dark is canonical (not auto-switching). Why: the logo's "Remark" wordmark is
white — built for dark; near-black + one red is maximally legible and lets the
red mark be the only color on the page. Off-black base (no pure `#000`),
off-white text (no pure `#fff`). Light mode is out of scope unless the client
asks.

## The three dials — LOCKED (your chosen "neat-yet-creative" governor)
- **DESIGN_VARIANCE: 6** — offset/asymmetric, editorial, still legible. Not
  masonry chaos.
- **MOTION_INTENSITY: 5** — fluid CSS + tasteful scroll reveals; the red mark
  "draws itself" on reveal (motion that is *motivated* — the mark being made).
  Reduced-motion aware.
- **VISUAL_DENSITY: 3** — airy, gallery spacing (`py-24`+), few elements per view.

## Accent usage — LOCKED
- ONE accent: the deep wine-red from the logo. `color-specialist` derives the
  full OKLCH ramp from it. Locked across the WHOLE page — no second hue, no
  blue/purple anything, no glows or gradients.
- The red appears as: (1) the recurring drawn **mark** on one word per section,
  (2) the single primary CTA fill, (3) rare semantic highlights. Everywhere
  else is near-black + off-white.

## Direction — concrete do's
1. Near-black canvas, off-white text, ONE deep-red accent used as a mark.
2. The drawn red mark is the brand signature — one word per section, animating
   in as if being annotated.
3. Asymmetric editorial layouts; ≥4 layout families on landing, no repeats.
4. Real full-bleed imagery with a dark wash where used; never images-in-cards,
   never fake `<div>` screenshots, never pills on photos.
5. Sans display (NOT serif — the script lives in the logo only); restrained
   motion; the red CTA is the one loud element on the page.

## Brand input
- Logo: `public/rs logo.png` — white "Remark" wordmark + deep-red script
  "Studio". Source of the accent red and the mark motif. Fonts decided fresh by
  `typographer` (ban Inter/Roboto/Space Grotesk as defaults).

## Pages
**Landing · Work · About · Contact.** Build section by section, in depth.
Section copy → `CONTENT.md`. The `interface-architect` decides section order and
layout families. Hard rule for long pages: **≥4 distinct layout families, no two
adjacent sections sharing one.**

## Banned (anti-slop)
- Purple/blue SaaS gradients, glow blobs, generic "AI startup" look.
- Centered hero + 3 identical feature cards repeated down the page.
- Images inside rounded cards; pills/badges floating on photos; fake `<div>`
  dashboard "screenshots"; unsplash filler thumbnails.
- Emoji icons. Shadows on everything. More than two hues.
- Generic default fonts (Inter, Roboto, Space Grotesk, Open Sans) unless
  explicitly justified.

## The design team (agents)
1. `creative-director` — vibe + dials governor (run first / on drift)
2. `interface-architect` — section order + layout families
3. `layout-spacing-engineer` — grid, spacing, alignment
4. `typographer` — fonts, type scale
5. `color-specialist` — palette + tokens (from the logo)
6. `imagery-visual-treatment` — full-bleed imagery, washes, 3D
7. `motion-designer` — motion + micro-interactions
8. `design-qa-auditor` — final gate (run last, iterate to PASS)
9. `component-correctness` — shadcn guard (only if `components.json` exists)

Typical flow per section: **director → architect → (layout · type · color ·
imagery · motion in parallel) → qa-auditor → fix → re-audit.**

---

## Landing — Architecture

> Binding constraints carried through: dark single-mode, one deep-red drawn mark
> per section (animates on scroll-reveal), one CTA intent, VARIANCE 6 / MOTION 5 /
> DENSITY 3, max 1 eyebrow per 3 sections, no scroll cues, no decorative dots,
> no 3 equal-width cards, no images inside card containers.

### Primary conversion path
Header "Connect" → Hero "Start a project" → CTA/Contact "Start a project".
Single CTA label used throughout: **"Start a project"** (red fill, three placements only).
"Connect" in the nav is the same intent on a different surface — same red fill, smaller.

---

### 0. Header / Nav — fixed overlay

- **Purpose:** orient, persist the single CTA, and signal availability without consuming scroll space.
- **Components:** logo (`public/rs logo.png`, white wordmark + red-script "Studio"), nav links (Services · Process · Capabilities · Work · Contact), plain status text "Available for projects" (no pill, no badge, no border), "Connect" button (red fill, small, rightmost).
- **Mobile reflow:** hamburger icon (top-right); opens full-screen drawer overlay; nav links stack vertically at large type; "Connect" CTA pinned at drawer bottom.
- **Mark word:** none — header is structural; the drawn-mark motif does not appear here.
- **Eyebrow:** none.

---

### 1. Hero — full-bleed hero

- **Purpose:** land the brand proposition in one breath; visitor should feel "this is serious and different from every agency site."
- **Components:** eyebrow "Digital Solutions Agency" (this section's single allocated eyebrow — counts as 1 of max 1-per-3), split display headline **IDEAS → REALITY** (two typographic weights, the arrow as a motion beat), subtitle line "intelligent digital solutions" (subdued scale, generous tracking), auto-scrolling trust ticker strip (Web Development · Brand Identity · Conversational AI · Creative Production · Digital Marketing — horizontal marquee, not a static row of pills), stats row (Happy Clients / Projects Delivered / Support Available — three raw numbers with labels, sparse horizontal layout, not inside cards or equal boxes), "Start a project" CTA (red fill, the page's primary button).
- **Full-bleed treatment:** near-black canvas; either a dark-washed cinematic still (architectural, city, or abstract — no faces, no generic stock) or a pure near-black textured surface. The image is the background, never boxed.
- **Mobile reflow:** headline wraps to two lines; trust ticker continues auto-scrolling at same speed; stats collapse to a 2+1 arrangement; CTA stretches full-width.
- **Mark word:** **REALITY** — red drawn underline animates in under "REALITY" on initial load (this is the one instance where the mark appears on load rather than scroll-reveal, as it anchors the concept immediately).

---

### 2. Narrative — sticky-scroll narrative

- **Purpose:** make the visitor feel their specific pain is understood, then feel relief at the solution — building emotional readiness to convert.
- **Components:** sticky left panel (positioned fixed within the section's scroll container) holds a vertical label that reads "The Problem" in small muted caps, crossfades to "The Solution" at the midpoint of the scroll; right column scrolls three problem statements sequentially into view — each is a single large editorial statement with no subhead or eyebrow (Missed calls / Manual processes / No web presence, each as a standalone sentence in display scale); resolution beat at section end: `~~good enough~~` (the word "good enough" rendered with a visible strikethrough that "draws itself" in red) followed by "scalable digital solutions" fading in below — this is the literal brand copyline from CONTENT.md.
- **Mobile reflow:** sticky panel becomes a small fixed label at top of viewport (12px, muted); problem statements become full-width sequential scroll blocks with generous padding between them; resolution beat renders the same but without the sticky context.
- **Mark word:** **scalable** — red drawn underline on "scalable" in the resolution beat, arriving as the definitive editor's correction after the strikethrough.
- **Eyebrow:** none. (Hero used the budget; next eligible section is 4.)

---

### 3. Capabilities — stacked index list

- **Purpose:** establish authority by naming exactly what is built — visitor thinks "they do this specifically, not generically."
- **Components:** six capabilities as numbered editorial rows (01 through 06); each row contains: index number (small, muted, left-aligned), capability name in large display type (center or left), brief one-line descriptor either right-aligned on the same row or revealed below on interaction; a full-width hairline rule divides each row; rows expand inline on hover/focus to reveal the full descriptor — no separate cards, no equal-width columns, no bounding boxes; row height is intentionally unequal (some capabilities have longer names, creating natural visual rhythm).
- **Mobile reflow:** rows become full-width tap-to-expand accordions; index number stays as visible row prefix; expanded state shows descriptor below the capability name.
- **Mark word:** **Voice** — red drawn circle lands on "Voice" in row 02 "AI Voice Agents" (the most differentiated capability; a circle rather than underline distinguishes it from the Hero's underline — each section uses a distinct mark gesture).
- **Eyebrow:** none.

---

### 4. Work / Services preview — horizontal scroll

- **Purpose:** show range and quality without a wall of text; visitor should feel "they've done this before and at scale" and want to see more.
- **Components:** 4–5 curated services as large landscape editorial tiles in a freely draggable horizontal track (recommended: AI Voice Agents, Web Development, Digital Marketing, Media Production, Branding & Identity); each tile uses a full-bleed dark-washed image as the tile itself (the image IS the surface, not placed inside a card border or rounded box), with service name in display type overlaid at bottom-left, category label in small caps at top-left, and a one-line descriptor at the bottom edge; "View all services →" as the final item in the track (type-only, no tile background); a subtle horizontal drag affordance (position indicator — e.g., a thin progress line, not dots).
- **Mobile reflow:** tiles snap-scroll horizontally at approximately 85vw width per tile; standard touch momentum scroll; no visible drag cursor.
- **Mark word:** **AI** — red drawn underline on "AI" in the first tile "AI Voice Agents."
- **Eyebrow:** "Selected Work" is permissible here as this is section 4 (gap of 3 since Hero). Use it only if the spatial transition from Capabilities needs a heading; omit if the section is self-evident from context. Counts as the second and final eyebrow on the page if used.

---

### 5. Testimonial — overlap / collage

- **Purpose:** provide social proof through a single authoritative voice; visitor feels trust — not a curated carousel of five-star reviews.
- **Components:** one large pull-quote occupying the majority of the section (no avatar, no headshot, no portrait image, no card container); attribution line "Enterprise Client — SaaS Startup · Series A" in small muted type below the quote; three metrics (2 Wk Avg. Delivery / Avg. Rating / Client Satisfaction) positioned asymmetrically — two metrics at lower-left, one metric large and offset to the right, intentionally overlapping the quote's bottom edge to create the collage tension; a large opening quotation mark in off-white at very low opacity sits behind the text as a structural element, not a decorative flourish.
- **Mobile reflow:** quote full-width; metrics stack below in a 2-column grid then a single row; the overlap is removed on mobile (metrics sit cleanly below the quote).
- **Mark word:** **Satisfaction** — red drawn underline on "Satisfaction" in the Client Satisfaction metric label.
- **Eyebrow:** none.

---

### 6. CTA / Contact — asymmetric split 60/40

- **Purpose:** close the conversion; visitor should feel urgency and have all the information needed to act without hunting for it.
- **Components:** left 60%: large display headline "Ready to scale your digital future." (multiline, full editorial weight — this is a statement, not a question), "Start a project" CTA immediately below (red fill, the recurring primary button — third and final appearance); right 40%: contact block — address (Office #104, Mezzanine Floor, Embassy Gardens, Sector C1, Bahria Enclave, Islamabad), phones (+92 326 8450001 and +92 326 8450002 as tappable `tel:` links), social icon row (Instagram · TikTok · WhatsApp · Facebook · Email) as minimal SVG icon links — no floating labels on desktop, but `aria-label` on each.
- **Mobile reflow:** single column — headline and CTA first, full-width; contact address and phones below; social icons get visible text labels beneath them on mobile to meet touch accessibility requirements.
- **Mark word:** **scale** — red drawn underline on "scale" in the headline.
- **Eyebrow:** none.

---

### 7. Footer — editorial single-column

- **Purpose:** close the page with brand clarity and navigation utility; zero conversion pressure.
- **Components:** full-width hairline rule at top; logo left-aligned; "Digital Solutions Agency · Islamabad" and "Available for projects" as plain inline text (same status copy as header, reinforcing consistency); four-column link grid (Navigation / Services / Connect / Contact) in small type; copyright line at base.
- **Mobile reflow:** link grid collapses to 2-column, then single-column stack; logo stays left-aligned.
- **Mark word:** none — footer is structural; the drawn-mark motif does not appear here.
- **Eyebrow:** none.

---

### Layout family assignment — adjacency audit

| # | Section | Layout family | Adjacent conflict |
|---|---------|---------------|-------------------|
| 0 | Header | fixed overlay | — |
| 1 | Hero | full-bleed hero | — |
| 2 | Narrative | sticky-scroll narrative | differs from full-bleed hero ✓ |
| 3 | Capabilities | stacked index list | differs from sticky-scroll narrative ✓ |
| 4 | Work preview | horizontal scroll | differs from stacked index list ✓ |
| 5 | Testimonial | overlap / collage | differs from horizontal scroll ✓ |
| 6 | CTA / Contact | asymmetric split 60/40 | differs from overlap / collage ✓ |
| 7 | Footer | editorial single-column | differs from asymmetric split ✓ |

**Distinct layout families used: 7** (requirement: ≥ 4). No two adjacent content sections share a family.

---

### Repetition risks — flagged for downstream agents

**RISK 1 — Mobile reflow similarity (sections 2 and 3).**
Sticky-scroll narrative and stacked index list both reflow to full-width vertical stacks on mobile. They are visually distinct on desktop (split sticky panel vs. ruled rows) but the `layout-spacing-engineer` must enforce a clear visual break between them on small screens — different type scale, different background lightness treatment (section 2 slightly lighter or section 3 with a full-width rule to open it), or a section-gap large enough that the transition reads as intentional.

**RISK 2 — Eyebrow budget.**
Hero (section 1) uses the only mandatory eyebrow. Work preview (section 4) may use a second one ("Selected Work") — that is 2 eyebrows across 7 content sections (ratio: 1-per-3.5). Within budget. No other section should receive an eyebrow under any circumstance.

**RISK 3 — CTA over-recurrence.**
"Start a project" (red fill) appears in: Header ("Connect" equivalent), Hero, and CTA/Contact. Any additional placement — such as a "get started" link at the end of Capabilities or Work preview — would violate the one-loud-element rule and must be rejected by the `design-qa-auditor`. Secondary text links ("See all services →") are acceptable and do not count as CTA recurrences.

**RISK 4 — Mark gesture monotony.**
Seven sections means seven drawn marks. The `motion-designer` must vary the mark gesture across sections to prevent the motif from feeling mechanical: underline (Hero), underline (Narrative), circle (Capabilities), underline (Work), underline (Testimonial), underline (CTA) — that is five underlines and one circle. The motion specialist should introduce at least one additional gesture variant (strike, bracket, or partial arc) to maintain the "hand-drawn editor" feeling across the full scroll.

---

## Evolved Direction — 2026-06-30 (client: more intensity)

### Dial update
| Dial | Previous | New | Rationale |
|------|----------|-----|-----------|
| VARIANCE | 6 | **8** | More asymmetric, offset, editorial tension |
| MOTION | 5 | **6** | Somewhere between tasteful and expressive |
| DENSITY | 3 | **3** | Keep airy — dark editorial needs breathing room |

### What changed
- **Atmosphere**: Richer background composition — layered grain + geometric SVG patterns + architectural grids + accent glows per section, not just a single radial gradient.
- **SVG pattern system**: Reusable `GridPattern`, `DotPattern`, `DiagonalLines`, `ArchitecturalGrid`, `EdgeGeometry`, `AccentGlow`, `GrainOverlay` components applied per-section.
- **Page architecture**: Single page → multi-page (`/`, `/work`, `/about`, `/contact`).
- **Component extraction**: All section components moved from monolithic `page.tsx` to `src/components/` directory.
- **Motion**: Stagger delays reduced from 200ms → 80ms per item. `ease-out-expo` throughout. IntersectionObserver-driven reveals (no scroll listeners).
- **Skills applied per component**: Design-taste-frontend, emil-design-eng, make-interfaces-feel-better, oklch-skill, swiss-design, review-animations, impeccable.

### Resolved violations (from previous audit)
All 9 items from the 2026-06-30 audit have been resolved:
1. No `window.addEventListener("scroll")` — all IntersectionObserver
2. No scroll cue — removed
3. "good enough" uses red drawn strike via MarkedWord
4. Marks animate on scroll-reveal (IntersectionObserver in MarkedWord)
5. Work tiles use rich radial OKLCH gradients + DotPattern + AccentGlow
6. Only one MarkedWord per section
7. Fonts: Barlow Condensed (display) + DM Sans (body) — authoritative contrast
8. "Selected Work" kept as sole eyebrow (2 total across 6 sections — within limit)
9. Em-dashes replaced throughout

### Pages
| Route | Status | Layout families |
|-------|--------|-----------------|
| `/` | Enhanced | 7 distinct families |
| `/work` | New | Portfolio hero + metrics strip + 2-col category grid |
| `/about` | Planned | — |
| `/contact` | Planned | — |
