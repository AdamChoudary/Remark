---
name: Remark Studio
description: A digital solutions studio turning ideas into reality — engineered with the same precision as the products it builds.
colors:
  paper: "#fdf3ef"
  paper-2: "#f4e8e4"
  ink: "#1a1210"
  ink-muted: "#4e4544"
  ink-subtle: "#786f6d"
  void: "#090706"
  bg: "#110e0c"
  bg-med: "#1a1614"
  bg-light: "#25211e"
  fg: "#f6f3ef"
  muted: "#c4bcb6"
  red-dusky: "#f6d9d9"
  red-brick: "#e58b8c"
  red-primary: "#b91319"
  red-bright: "#ac0000"
  red-deep: "#5f000b"
  red-oxblood: "#2c0005"
typography:
  display:
    fontFamily: "Syne, sans-serif"
    fontSize: "clamp(2.75rem, 8vw, 7.5rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.2em"
rounded:
  sm: "2px"
  md: "8px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "40px"
  xl: "64px"
  2xl: "96px"
components:
  button-primary:
    backgroundColor: "{colors.red-primary}"
    textColor: "{colors.fg}"
    rounded: "{rounded.full}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.red-bright}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "14px 28px"
  button-outline-hover:
    backgroundColor: "{colors.red-primary}"
    textColor: "{colors.fg}"
---

# Design System: Remark Studio

> Follows the DESIGN.md format spec. Tokens above are normative; prose below explains where and why. Strategic questions (audience, purpose, brand voice, anti-references) live in `PRODUCT.md`; this file is strictly visual. Page copy lives in `CONTENT.md`.

## 1. Overview

**Creative North Star: "The Foundry."**

Remark Studio is a digital solutions studio — web, voice AI, chatbots, CRM/ERP, growth. The Foundry treats red not as a brand accent but as a *material*: the molten substance the studio is built from, the way a foundry is defined by the metal it pours. Every section either sits in the studio's dark cinematic register (near-black, off-white type, red glimpsed as a precise mark) or in a light register where the material itself — a real image, a saturated red mass — dominates the frame. These are not two themes bolted together; they are one brand alternating between its quiet register and its loud one, the way a foundry floor is dim except where the pour happens.

This system explicitly rejects: purple/blue SaaS gradients, glassmorphism, generic default fonts, centered-everything layouts, and — the mistake this rewrite corrects — decorative chrome (empty placeholder frames, coordinate captions, corner registration ticks) standing in for content that doesn't exist yet. A section with no real image is a section that isn't done, not a section wearing a costume of one.

**Key Characteristics:**
- One accent hue (red), expressed as a full tonal ramp, never a second color
- Alternating light/dark sections, unified by the same red running through both
- One dominant, load-bearing gesture per section — never an assembly of small decorated parts
- Real imagery fills whole sections when the brief calls for it; imagery is never boxed into a small illustration slot standing in for the real subject
- The drawn red "mark" (underline, circle, strike) is the recurring brand signature — one per section, never more

## 2. Colors

The palette is genuinely one hue (red, ~27° in OKLCH) expressed as two neutral registers — a warm paper/ink pair for light sections, a near-black/off-white pair for dark sections — plus a six-step red ramp shared by both. Neutrals in both registers are tinted a few thousandths of chroma toward the red hue; there is no true 0-chroma gray anywhere in the system.

### Primary
- **Foundry Crimson** (`#b91319` / `oklch(0.5 0.195 27)`): the one accent. Used as a dominant material in light sections (a saturated field, a hero object) and as a precise mark in dark sections (underline, CTA fill, focus ring). Never a second hue anywhere.
- **Foundry Bright** (`#ac0000` / `oklch(0.445 0.215 26)`): hover/active state for the primary red — brighter, not lighter.
- **Foundry Deep / Oxblood** (`#5f000b`, `#2c0005`): the dark end of the ramp — shadow-side of the material, deep accents on dark surfaces.
- **Dusky Rose / Brick** (`#f6d9d9`, `#e58b8c`): the light end of the ramp — tints, washes, the material seen at its coolest.

### Neutral — Light register (Paper)
- **Warm Paper** (`#fdf3ef`): base surface for light sections. Never pure white — tinted toward the red hue at very low chroma.
- **Paper Deep** (`#f4e8e4`): second surface, panel backgrounds, cards.
- **Foundry Ink** (`#1a1210`): primary text on paper. Never pure black.
- **Ink Muted / Subtle** (`#4e4544`, `#786f6d`): secondary text, captions, decorative labels on paper.

### Neutral — Dark register (Void)
- **Void** (`#090706`): base surface for dark sections. Off-black, tinted warm.
- **Bg / Bg-Med / Bg-Light** (`#110e0c`, `#1a1614`, `#25211e`): a three-step elevation scale — higher surfaces are *lighter*, never darker, per dark-mode convention.
- **Foundry Fog** (`#f6f3ef`): primary text on dark. Off-white, never pure white.
- **Muted** (`#c4bcb6`): secondary text on dark.

### Named Rules

**The One Hue Rule.** Every color in this system shares one hue family. If a second hue is ever needed (a semantic error/success state, for instance), it must be proposed and approved explicitly — it does not default in.

**The Material Rule.** In light sections, red is never a hairline. If red appears, it occupies a real, visible mass — a saturated field, a bleeding object, a filled button — never a 1px underline doing all the work of representing the brand. Hairline red is a dark-section move (the drawn mark); light sections commit.

**The Alternation Rule.** Sections alternate between the paper register and the void register down the page. Two adjacent sections never share a register unless a real compositional reason (documented in Components) requires it. *(Revised 2026-07-01: Hero itself is dark/void — see Components — reopening which section anchors the alternation. Narrative, immediately after Hero, should move to paper when it gets its own pass, so the two sections adjacent to each other still alternate.)*

**The No-Empty-Frame Rule.** A bordered box, a corner tick mark, a coordinate caption, or a grid-pattern backdrop is never placed where a real image is still pending. If the image isn't built yet, the section waits — it does not ship wearing gift-wrap around an empty box.

## 3. Typography

**Display Font:** Syne (with sans-serif fallback) — geometric, confident, already the studio's committed identity (not a fresh pick; identity-preservation applies).
**Body Font:** Manrope (with sans-serif fallback) — a quiet, legible workhorse that doesn't compete with Syne's geometry.
**Label/Mono Font:** JetBrains Mono — eyebrows, captions, technical annotations.

**Character:** Syne carries the studio's confidence at poster scale; Manrope stays out of the way in body copy; JetBrains Mono marks anything that reads as precise or technical (labels, captions, real data like coordinates or specs — never decorative filler).

### Hierarchy
- **Display** (700, `clamp(2.75rem, 8vw, 7.5rem)`, line-height 0.95): hero and section headlines. One weight, one massive scale — the studio's single decisive gesture, not a two-tone split.
- **Headline** (700, `clamp(2rem, 4vw, 3.5rem)`, line-height 1.0): sub-section statements (e.g. Narrative's problem/solution beats).
- **Title** (600, `1.5rem`, line-height 1.2): capability names, work-tile titles.
- **Body** (400, `1rem`–`1.125rem`, line-height 1.6, max 65ch): subtitles, descriptions, quotes.
- **Label** (500, `0.6875rem`, line-height 1.4, letter-spacing `0.2em`, uppercase): eyebrows, captions, mono annotations. Used sparingly — see the Eyebrow Rule in Components.

### Named Rules

**The Poster Rule.** Hero and section-level headlines commit to one weight (700) and push scale as far as the viewport allows (`clamp` ceiling ~7.5rem). No two-weight split-emphasis headlines (e.g. a muted first word next to a bold second word) — that reads as timid, not editorial. Emphasis comes from the drawn red mark, not from a second type weight.

**The One-Mark Rule.** Exactly one word per section may carry the drawn red mark (underline, circle, or strike). It is typeset in the same weight as the rest of the headline — the mark itself carries the emphasis, not a font change.

## 4. Elevation

Flat by default, on both registers. Depth comes from surface lightness (dark register: each elevation step is lighter, never darker) and from real material presence (a red field, a real image), not from shadow.

### Shadow Vocabulary
- **Hairline** (`0 0 0 1px oklch(30% 0.01 27 / 0.06)`): the only border treatment. Used instead of a drop shadow wherever a boundary needs marking — a panel edge, a hover card.
- **Whisper** (`0 1px 2px oklch(20% 0.01 27 / 0.05)`): the only permitted drop shadow, for hovering interactive elements only (a lifted button, a raised nav bar). Never stacked, never used for decoration.

### Named Rules

**The Flat-by-Default Rule.** Surfaces are flat at rest. Shadow appears only as a response to state (hover, focus) — never as ambient decoration under a static element.

## 5. Components

### Buttons
- **Shape:** fully rounded (`{rounded.full}`), consistent across both registers.
- **Primary (filled):** `{colors.red-primary}` background, `{colors.fg}` text, hover → `{colors.red-bright}`. Used where the button is the persistent, always-visible action (Header's "Connect").
- **Outline:** transparent background, `{colors.red-primary}` border, ink/fg text depending on register, hover fills to `{colors.red-primary}` with fg text. Used where the button is a first, calmer impression rather than a persistent control (Hero's "Start a project").
- **Voice split is deliberate, not drift:** persistent nav CTA = filled (urgency, always visible); in-page hero/section CTA = outline (refined, first impression). Both registers share this logic; do not force one voice everywhere.

### Navigation (Header) *(corrected 2026-07-01 — was a floating glass-pill card, exactly the banned nav shape)*
Fixed overlay, present on every route. Logo (`public/rs logo.png` — white wordmark + red-script "Studio"), nav links (Services · Process · Capabilities · Work · Contact), plain status text "Available for projects" (no pill, no badge), "Connect" button (filled primary, `{rounded.full}`, rightmost). Sits **flush on the page** — no rounded card, no border, no backdrop blur, no corner registration ticks — matching how Dynamite Studio, Helious, and Neo Mirai all treat their nav bars: text and logo sitting directly over the hero, not boxed in a floating island. A thin top-down scrim (gradient, not a filled bar) keeps it legible as a safety net; since the studio is dark by default now, this rarely has to do much work. Mobile: hamburger → full-screen drawer, nav links stacked large, CTA pinned at drawer bottom. Structural only — the drawn-mark motif and eyebrows never appear here.

### Hero *(register reverted to dark 2026-07-01, after reviewing Dynamite Studio / Helious / Nexora references; image shipped same day)*
Purpose: land the brand proposition in one breath — "this is serious and different from every agency site," with the same cinematic weight as a game-studio or design-conference hero, not a SaaS landing page. Full-bleed real image fills the entire section (viewport height), dark/atmospheric register (void). Typography is **integrated with the image, not segregated beside it**: the headline sits low in the frame, large enough to feel inevitable (poster scale, single weight, off-white/fg color, `IDEAS → REALITY`). No added chrome (no pagination arrows, no numbered progress indicators, no side rail) — those are literal UI from portfolio/case-study sites with real pagination; Remark's hero has none of that to paginate, so borrowing the decoration without the function would itself be slop.

**Image shipped 2026-07-01:** `public/hero_images/Single Continuous Form Jul 01 2026.jpeg` — a single continuous form caught transforming: one end rendered as thin glowing crimson wireframe (the idea, translucent, unresolved), the other end solid matte-black material with the same crimson now glowing as real internal light (the reality it became), dust and fragments marking the transition zone between the two states. The headline is composited directly against this — "IDEAS" sits over the wireframe half, "REALITY" over the solid half, the arrow glyph landing in the transformation zone itself. Headline and image are the same idea stated twice, not two separate elements. `GrainOverlay` stays over it as an established texture technique; a vertical + horizontal scrim keep the type legible without dulling the image. Mark word: **REALITY**, red drawn underline, animates on initial load. Eyebrow: none. Mobile: same bottom-anchored composition, headline scales down.

**Rejected directions (2026-07-01), kept here so they aren't re-proposed:** an isolated monumental sculpture (read as product photography, not a studio); a blacksmith forge mid-strike (read as a metalworking company, no digital/tech signal); long-exposure light-painting calligraphy (too disconnected from the brand's actual services); an editor's-desk mark-up scene (too generic "stock editorial" imagery); a calm painterly Islamabad cityscape (borrowed Neo Mirai's specific technique without being ours); a smooth abstract product-photography form (same "product, not studio" failure as the sculpture); a studio-interior workspace scene (correct instinct, wrong execution — read as generic coworking stock photography). The wireframe-to-solid concept won because it visualizes the headline itself rather than needing a scene or metaphor to explain it.

### Narrative — sticky-scroll pattern
Purpose: make the visitor feel their pain understood, then relieved by the solution. Sticky left panel ("The Problem" → crossfades to "The Solution" at scroll midpoint); right column scrolls three problem statements into view, each a single large editorial statement, no subhead. Resolution beat: `~~good enough~~` (strikethrough draws itself in red) → "scalable digital solutions" fades in — the literal brand copyline. Mark word: **scalable**, red drawn underline. Register: **paper** (moves to light per the revised Alternation Rule — Hero is now dark, so the section immediately after it goes light). Eyebrow: none.

### Capabilities — stacked index pattern
Purpose: establish authority by naming exactly what's built. Six capabilities (Web Development, Voice Agents, Chat Bots, CRM & ERP, Analytics & Insights, Scalable & Secure — from `CONTENT.md`) as numbered editorial rows, hairline rule between each, unequal row heights for natural rhythm — no cards, no equal-width columns. Mark word: **Voice**, red drawn circle (distinct gesture from Hero's underline) on row 02 "AI Voice Agents." Register: void (dark), alternating back from Narrative's paper. Eyebrow: none.

### Work / Services preview — horizontal scroll pattern
Purpose: show range and quality fast. 5 curated services (AI Voice Agents, Web Development, Digital Marketing, Media Production, Branding & Identity) as large tiles in a draggable horizontal track. **Each tile's full-bleed image IS the tile surface** — the image fills the entire tile, service name and category overlaid directly on it, never placed inside a card border around a small illustration. First tile image shipped 2026-07-01: `public/work_ai_voice_agents.png` — a hand-cast brass-and-obsidian listening instrument clamped in a bench vise, a craftsman's hand adjusting it, warm workbench lamp, a furnace glowing in the background — real workshop-craft imagery, not abstract renders. Remaining four tile images generating; same workshop world, hands visibly making something at bench-scale for each service. Mark word: **AI**, red drawn underline on the first tile. Register: dark. Eyebrow: "Selected Work" permitted here only (section 4, gap of 3 since Hero) — second and final eyebrow on the page if used.

### Testimonial — collage pattern
Purpose: one authoritative voice, not a carousel. One large pull-quote, no avatar/headshot/card container. Three metrics positioned asymmetrically, one overlapping the quote's bottom edge. Mark word: **Satisfaction**, red drawn underline. Register: dark. Eyebrow: none.

### Contact / CTA — asymmetric split pattern
Purpose: close the conversion. Left 60%: display headline "Ready to scale your digital future.", filled primary CTA (third and final "Start a project" appearance). Right 40%: address, phone (`tel:` links), social icons. Mark word: **scale**, red drawn underline. Register: dark. Eyebrow: none.

### Footer — editorial single-column pattern
Purpose: close the page, zero conversion pressure. Hairline rule, logo, status text, four-column link grid, copyright. No mark word, no eyebrow — purely structural, like Header.

### Layout-family diversity
Seven distinct layout families across the page (fixed overlay, Hero's image-integrated pattern, sticky-scroll, stacked index, horizontal scroll, collage, asymmetric split, editorial single-column) — no two adjacent sections share a family. Verify this table whenever a section's pattern changes; a changed Hero pattern must be re-checked against Narrative's pattern for accidental collision.

## 6. Do's and Don'ts

### Do:
- **Do** treat red as a material in light sections — a real mass (field, object, filled button), never a hairline.
- **Do** let a whole section's background be a real image when the content calls for it (Work preview tiles, Hero's image zone) — small boxed illustration slots are not an acceptable substitute for the real subject.
- **Do** give every section exactly one dominant, load-bearing gesture.
- **Do** use the drawn red mark (underline / circle / strike) exactly once per section, varying the gesture so the motif doesn't feel mechanical.
- **Do** alternate light (paper) and dark (void) registers section to section, tied together by the one red hue.
- **Do** use `{rounded.full}` buttons consistently: filled for persistent nav actions, outline for first-impression in-page CTAs.
- **Do** keep neutrals tinted toward the red hue at low chroma in both registers — never a true 0-chroma gray.
- **Do** ground every image concept in what Remark actually is (a digital/tech agency) and in the studio's own craft, not a borrowed aesthetic from a reference site — extract the *technique* (depth, lighting, composition), never the subject matter wholesale.

### Don't:
- **Don't** use purple/blue SaaS gradients, glassmorphism, or generic "AI startup" gradients anywhere.
- **Don't** use Inter, Roboto, Space Grotesk, or Open Sans as defaults — Syne / Manrope / JetBrains Mono are locked.
- **Don't** ship a placeholder frame (dashed border, corner registration ticks, coordinate caption, grid-pattern backdrop) standing in for a real image that hasn't been built yet. Wait for the real asset, or fill the space with an honest solid/gradient crimson field instead.
- **Don't** assemble a hero (or any section) from many small timid elements — a rail, an eyebrow, a two-tone headline, an arrow glyph, a subtitle, and a button all competing quietly. One dominant gesture per section.
- **Don't** use a floating rounded glass-pill nav with backdrop blur and decorative corner flourishes — the most recognizable 2024-25 AI nav shape. Header's flush treatment solves the real legibility problem (white-only logo, dark-by-default sections) without reaching for that shape.
- **Don't** repeat a layout family on two adjacent sections.
- **Don't** add more than one eyebrow per three sections; most sections carry none.
- **Don't** let "Start a project" / "Connect" appear more than three times on the landing page (Header, Hero, Contact).
- **Don't** introduce a second accent hue for any reason without an explicit, documented exception.
- **Don't** let hero/tile imagery read as isolated product photography (a single dramatic object on a void background) — it must feel like the studio's actual work or craft, not a trophy shot.

---

## Process note

Sections are built **one at a time, reviewed live in the browser before the next starts.** Before picking a new section's layout family, check this file's Components section (for the layout-family diversity table) alongside Hallmark's own rotation log at `.hallmark/log.json`, so no two sections repeat a macrostructure. The installed design skills (Hallmark for DNA-extraction/macrostructure picks, `design-taste-frontend`, `impeccable` for craft/QA and this file's own format) inform each pass — not ad hoc edits.

## Revision history

- **2026-07-01 (image round):** Hero's final image shipped (wireframe-to-solid transformation, composited directly with the headline). First Work-tile image shipped (craftsman's workshop, listening instrument). Several rejected image directions logged under Hero so they aren't re-proposed. Header corrected from a floating glass-pill card (self-contradicting this file's own Do's/Don'ts) to a flush bar matching the actual reference sites reviewed.
- **2026-07-01 (this rewrite):** Converted to the actual Impeccable/DESIGN.md spec format (YAML frontmatter + six fixed sections), following a full read of every Impeccable reference doc. Incorporates the creative-director diagnosis that the prior Hero/Header pass was structurally slop (decorative chrome standing in for missing content, red reduced to a hairline against the locked "bold vibrant" identity, a floating-glass-pill nav). Folds the section-by-section page architecture (previously a bespoke "Landing — Architecture" doc) into Components, where the DESIGN.md spec actually accommodates it.
- **2026-07-01 (earlier same day):** Light/dark alternation direction adopted, Neo Mirai DNA extracted via Hallmark, Hero rebuilt as Split Studio diptych. Superseded by this rewrite's correction that the diptych execution used decorative chrome instead of real content.
- **2026-06-30:** Dial intensity increase (VARIANCE 6→8, MOTION 5→6), SVG pattern system introduced, multi-page architecture established.

*(Note: this file was briefly reverted to its pre-2026-07-01 state by an external `git checkout`/restore action partway through today's session; this version reconstructs everything from conversation history. Nothing after this point has been committed to git yet.)*
