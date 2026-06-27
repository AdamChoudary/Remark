---
version: 2.0
name: remark-studio-design-system-v2
description: "A dusky luxury design system for Remark Studio — a digital solutions agency landing page. The interface is a warm near-black canvas with deep mahogany-red brand accents, built around one signature horizontal scroll experience. Every design decision is evaluated for its psychological effect: symmetry, relaxation, thrill, and zero annoyance. No blue. No gimmicks. One scroll moment that matters."
---

# Remark Studio Design System v2

## Design Philosophy

**"The scroll is the story."** — The page is designed as an emotional arc, not a grid of sections. Every visual has a complete lifecycle: a deliberate entrance, a purposeful presence, and a meaningful exit. Nothing appears from nowhere and nothing disappears without closure. The horizontal gallery is not decoration — it's the climax. Everything before it builds anticipation; everything after it resolves into trust.

**No dead ends.** — A spotlight that blooms from and returns to the void. A gallery that doesn't just end but bridges to what's next. Numbers that don't just sit there but arrive with ceremony. A background that subtly shifts with every scroll position — never static, always transforming. Every pixel has a purpose and a lifespan.

**One scroll moment, perfectly executed.** — A single horizontal pinned section hits harder than two or three. The first time the user scrolls vertically and the content moves horizontally, that surprise is pure dopamine. The second time, it's expected and loses its magic. We get one chance to amaze — we save it for the Services Gallery.

**Red. Black. White. Nothing else.** — No blue hover state. No secondary accent. No gradient backgrounds. The brand speaks through a disciplined three-color palette. Pure black and pure white are avoided — they feel cheap. Every shade is a considered luxury variant: deep mahogany reds, warm near-blacks, cream off-whites.

**Never annoy the user.** — The scroll engine must feel like a mechanical extension of the user's intent. No forced animation waits. No scrolljacking. No Lenis on mobile. The horizontal section must be skippable. The user is always in control — we just make the ride smooth.

---

## Emotional Arc (Page Rhythm)

```
VERTICAL — Hero
  State: Bold, impressive, confident
  Pace: Slow, cinematic entrance (staggered 1.2s reveals)
  Feeling: "This is a serious studio"
  ↓ scroll

VERTICAL — Narrative
  State: Understanding, empathetic
  Pace: Reading speed. Calm. Information-gathering.
  Feeling: "They understand my problem"
  ↓ scroll

HORIZONTAL — Services Gallery ✦ CLIMAX ✦
  State: Expansion, revelation, breadth
  Pace: Smooth, continuous. Surprise of horizontal motion.
  Feeling: "They have solutions for EVERYTHING"
  ↓ scroll (horizontal transition ends)

VERTICAL — Capabilities
  State: Grounding, concrete, credibility
  Pace: Stable. All content visible. No tricks.
  Feeling: "And they have the tools to deliver"
  ↓ scroll

VERTICAL — Testimonial
  State: Quiet confidence. Social proof.
  Pace: Slow, single voice.
  Feeling: "Other people trust them. I can too."
  ↓ scroll

VERTICAL — CTA
  State: Warm invitation. No pressure.
  Pace: Open-ended, personal.
  Feeling: "I want to talk to them."
```

### Why This Works Psychologically

**The Hero → Narrative → Gallery sequence** follows the classic three-act structure:
- Act 1 (Hero): Establish authority — "We exist, we're good"
- Act 2 (Narrative): Build empathy — "We see your pain points"  
- Act 3 (Gallery): The reveal — "Here's exactly how we solve them"

The horizontal scroll at Act 3 is the **payoff**. The user has been reading vertically (comfortable, expected) and suddenly the page expands horizontally. This shift is:
- **Surprising but not disorienting** — the content is continuous (services/services)
- **Expansive** — horizontal feels infinite, like "they have even more to offer"
- **Rewarding** — the user's scroll investment pays off with visual novelty

**After the climax, the page doesn't try to top itself.** Capabilities (vertical bento) is stable and solid — it reassures. Testimonial is quiet. CTA is warm. The energy decreases gracefully, like the denouement after a movie's climax.

---

## Colors

### Brand Palette (Red — Dusky, Luxury, No Blue)

```yaml
primary: "#7A1A1A"        # Remark Red — deep mahogany-red. Brand accent, CTAs, highlights.
primary-dim: rgba(122, 26, 26, 0.12)  # Subtle red tint — cards, hover rings
primary-glow: rgba(122, 26, 26, 0.3)  # Red glow — spotlight, selection
primary-hover: "#8B2A2A"  # Warmer red — the ONLY hover state for ALL interactive elements
primary-dark: "#4A0E0E"   # Near-black red — decorative accents, footer
primary-warm: "#6B1626"   # Deep burgundy — alternate red accent
```

**ONE red per viewport.** The brand accent is powerful because it's rare. Never more than one red element visible at a time. Red draws the eye — if everything is red, nothing is.

### Dark Surface (Warm Near-Black — Primary Canvas)

```yaml
canvas-dark: "#080808"    # Page background. Deepest, warmest near-black.
surface-1: "#121212"      # Card backgrounds. One step from void.
surface-2: "#1A1818"     # Featured cards. Subtle red undertone.
surface-3: "#252222"     # Hover surfaces. Warm charcoal.
surface-hover: "#302C2C" # Interactive hover on dark.
```

Why warm? Pure gray/black feels industrial. The slight red/brown warmth in all dark surfaces creates a subconscious feeling of being in a dimly lit gallery or lounge — expensive, comfortable, intimate. The warmth is invisible unless compared side-by-side with a cool black.

### Light Surface (Warm Off-White — Gallery Interlude)

```yaml
canvas-light: "#F5F0EB"           # Warm off-white — Services Gallery background only
surface-light-1: "#E5DED3"        # Card backgrounds within gallery
surface-light-2: "#DAD0C3"        # Elevated cards in gallery
surface-light-hover: "#CEC4B7"    # Card hover in gallery
```

The warm off-white is used in ONLY ONE place: the horizontal Services Gallery. This exclusivity makes the gallery feel physically different from the rest of the page — like walking from a dim corridor into a sunlit gallery room. When the user scrolls out of it back into the dark track, there's a subconscious feeling of returning to a comfortable den.

### Text

```yaml
text-primary: "#F0EBE3"                    # Warm off-white — headlines on dark
text-secondary: rgba(240, 235, 227, 0.85)  # Body on dark — comfortable reading
text-muted: rgba(240, 235, 227, 0.55)      # Secondary/meta text on dark

text-light: "#1A1515"                      # Warm near-black — headlines on light
text-light-secondary: "#3A3530"            # Body on light
text-light-muted: "#6A6560"                # Secondary text on light
```

Pure white (`#ffffff`) on near-black creates halation — the text appears to bloom and causes eye strain after seconds of reading. Warm off-white eliminates this entirely while maintaining contrast. Users won't notice it consciously but will feel less tired.

### Borders

```yaml
border-subtle: rgba(240, 235, 227, 0.03)  # Hairline on dark — barely perceptible
border-default: rgba(240, 235, 227, 0.06)  # Standard dark border
border-strong: rgba(240, 235, 227, 0.12)   # Emphasized dark border
border-light: rgba(26, 21, 21, 0.08)       # Standard light border
border-light-strong: rgba(26, 21, 21, 0.15)# Emphasized light border
```

Borders are traces, not lines. At 0.03-0.06 opacity on dark, they're barely perceptible — just enough to define a card edge without creating visual noise. The near-black canvas provides depth through surface color shift, not borders.

### Removed from v1

| Token | Why Removed |
|-------|-------------|
| `accent-blue: #0052ef` | No blue in the palette. Hover uses `primary-hover` instead. |
| `canvas-cream: #fbfaf7` | Replaced by warmer, dusker `canvas-light: #F5F0EB` |
| `surface-light-1: #f5f5f7` | Too cool/gray — replaced with warm bone tones |

---

## Typography

### Font Family (Unchanged from v1)

```yaml
display: "Montserrat, sans-serif"            # Poster-grade geometric sans — headings, hero
body: "'Inter', -apple-system, sans-serif"   # Variable font — everything else
mono: "'Inter', sans-serif"                  # Technical labels, section markers, stats
```

### Scale (Unchanged from v1)

```yaml
display-xxl: clamp(48px, 8vw, 96px) 700 -0.04em 0.92 uppercase
display-xl:  clamp(36px, 6vw, 72px) 700 -0.03em 0.95
display-lg:  clamp(28px, 4vw, 48px) 700 -0.025em 1.0
display-md:  clamp(22px, 3vw, 36px) 700 -0.02em 1.05
headline:    clamp(18px, 2.5vw, 28px) 700 -0.015em 1.15
subhead:     clamp(16px, 2vw, 22px) Inter 600 -0.01em 1.3
body-lg:     18px Inter 400 1.6 -0.01em
body:        16px Inter 400 1.6
body-sm:     14px Inter 400 1.5
caption:     13px Inter 500 1.4 -0.01em
micro:       12px Inter 500 1.3 0.05em uppercase
button:      14px Inter 600 1.0
```

### Psychological Notes on Typography

- **Negative tracking on display sizes** (up to -0.04em) creates density and gravity. At 96px, -0.04em is -3.84px of letter-spacing. This compression subconsciously signals confidence — the brand has nothing to prove, it can pack letters tight because it knows they'll be read.

- **Montserrat for display only.** If body text used Montserrat, the site would feel like a poster that never ends — exhausting. Inter's neutral warmth gives the eyes a rest between display moments.

- **Lowercase body, uppercase display.** Uppercase subconsciously signals importance/authority. Using it only at display scale (hero, section headers) reserves that authority signal for the most important moments. Micro labels in uppercase at 12px feel technical and precise, not shouty.

- **Minimum 1.6 line-height on body.** On a dark canvas, text needs breathing room. Tighter body text on dark feels cramped and hard to track visually.

---

## Layout & Scroll Architecture

### Page Architecture

```
┌──────────────────────────────────────────────────┐
│  HERO (V)                                        │
│  Full-viewport. Dither BG visible through.       │
│  Spotlight. Title "IDEAS → REALITY". Stats.       │
│  ↓  Enters fast, then slows as user reads         │
├──────────────────────────────────────────────────┤
│  NARRATIVE (V)                                    │
│  "The Problem" — 3 cards + solution.              │
│  ↓  Reading pace. Calm before the climax.         │
├══════════════════════════════════════════════════┤
│  SERVICES GALLERY (H) ✦  THE SIGNATURE MOMENT     │
│                                                   │
│  │ Panel 1  │ Panel 2  │ Panel 3  │ Panel 4  │   │
│  │ 3 cards  │ 3 cards  │ 3 cards  │ 3 cards  │   │
│  │          │          │          │          │   │
│  ← content translates left as user scrolls ↓ →   │
│                                                   │
│  Background: canvas-light (warm off-white)         │
│  —The only light section on the page—             │
│  5 panels × 3 cards each = 15 services            │
│  Progress bar at bottom: ○ ○ ○ ○ ○               │
│  ↓  Climax. Surprise. Expansion.                  │
├══════════════════════════════════════════════════┤
│  HORIZONTAL→VERTICAL TRANSITION                   │
│  As last panel exits, the dark track returns.     │
│  This transition itself feels like exhaling.      │
│  ↓                                                │
├──────────────────────────────────────────────────┤
│  CAPABILITIES (V)                                 │
│  Bento grid. 6 cards. 1 featured.                │
│  Tool marquee below.                             │
│  ↓  Grounding. Stability. Credibility.           │
├──────────────────────────────────────────────────┤
│  TESTIMONIAL (V)                                  │
│  Single quote + 3 metrics. Quiet confidence.      │
│  ↓  Trust.                                       │
├──────────────────────────────────────────────────┤
│  CTA (V)                                         │
│  Form + social links. Warm invitation.           │
│  ↓  Action.                                      │
├──────────────────────────────────────────────────┤
│  FOOTER (V)                                      │
│  Link grid.                                      │
└──────────────────────────────────────────────────┘
```

### Why Only One Horizontal Section?

**The psychological rule: One surprise per experience.**

Two horizontal sections would create:
1. **Annotation fatigue**: "Oh, another horizontal one. I get it." The second one is boring before it loads.
2. **Loss of specialness**: If everything is a special scroll treatment, nothing is.
3. **Mobile resentment**: Two sections collapsing to vertical means the mobile user misses TWO experiences. One is acceptable "mobile tax"; two feels like discrimination.
4. **Cognitive whiplash**: V → H → V → H → V requires 4 mental model shifts. V → H → V → V → V requires 2. The brain has limited reorientation budget — spend it wisely.

### Services Gallery Details

**Layout per panel:**
```
┌──────────────────────────────────────────────┐
│  "Our Services"                              │
│  Solutions that deliver                      │
│                                              │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐     │
│  │  01      │ │  02      │ │  03      │     │
│  │ Website  │ │ Digital  │ │ Social   │     │
│  │ Devel.   │ │ Marketing│ │ Media    │     │
│  └──────────┘ └──────────┘ └──────────┘     │
│                                              │
│  ○ ● ○ ○ ○                                  │
└──────────────────────────────────────────────┘
```

- **5 panels**, each 100vw wide. 3 cards per panel.
- Cards within a panel are equal width (~33% of viewport with gaps).
- Cards have warm off-white background (`surface-light-1`) with subtle border.
- Each card: index (tabular, `primary` color), category (micro uppercase), title (headline), description (body-sm)
- Hover: card border shifts to `primary` with a subtle `primary-dim` overlay
- Progress bar at bottom: 5 dots, current highlighted
- Background: `canvas-light` — the ONLY section that breaks the dark track

**Scroll behavior:**
- Section pins at `top top` when reached
- Inner content translates left at 100vw per panel
- Scrub: `0.8` (slight lag = sense of physical inertia, not too tight)
- Ease: `none` (linear — the scroll position directly maps to horizontal position)
- User can scroll fast through panels without forced wait
- When last panel exits left, section unpins

**Mobile ≤1024px:**
- Horizontal deactivated
- Cards display as a vertical grid (3-col → 2-col → 1-col)
- Same cards, same content, no translation

---

## Components

### Spacing System (Unchanged from v1)

```yaml
base: 4px
spacing: hair(1) xxs(4) xs(8) sm(12) md(16) lg(24) xl(32) xxl(48) huge(64) section(96) section-wide(120)
container-max: 1400px
container-wide: 1600px
container-narrow: 720px
gutter: clamp(1.5rem, 5vw, 4rem)
```

### Elevation (Colorimetric — No Shadows)

```yaml
elevation-0: canvas-dark           # Ground
elevation-1: surface-1             # Cards, secondary buttons
elevation-2: surface-2             # Featured cards
elevation-3: surface-hover         # Hover states
```

On light (gallery only):
```yaml
elevation-0-light: canvas-light
elevation-1-light: surface-light-1
elevation-2-light: surface-light-2
```

### Rounded Corners (Unchanged from v1)

```yaml
none: 0    # Full-bleed tiles, photo containers
sm: 6px    # Badges, inline tags
md: 10px   # Form inputs
lg: 16px   # Content cards
xl: 24px   # Capability cards
pill: 9999px # CTAs
full: 9999px # Icon buttons
```

### Navigation (Header)

```yaml
background: rgba(8, 8, 8, 0.85)
backdropFilter: blur(12px)
textColor: text-primary (#F0EBE3)
border-bottom: 1px solid border-default
height: 72px
```

- Frosted glass — the ONLY `backdrop-filter` blur on the site
- Nav link hover: color shifts to `primary-hover` (`#8B2A2A`)
- Mobile: hamburger → full-screen overlay

### Buttons

**Primary** — Deep mahogany-red filled pill.
- Background: `primary` (`#7A1A1A`), text: `text-primary`
- Hover: background → `primary-hover` (`#8B2A2A`) — the red warms up, not changes color
- Active/press: `scale(0.95)` — Apple micro-interaction, 0.1s
- Border-radius: pill

**Ghost** — Transparent with hairline border.
- Background: transparent, text: `text-primary`
- Border: 1px `border-strong`
- Hover: background → `surface-1`, border → `primary`

**No blue hover.** All interactive elements use `primary-hover` (`#8B2A2A`) — a warmer, slightly brighter red. The red family handles both static brand signal AND interactive feedback.

### Hero Section — Complete Lifecycle

```yaml
height: 100vh (min-height: 600px)
background: transparent (Dither BG shows through)
```

**LIFECYCLE:**
```
ENTRY (0s → 1.5s):
  0.0s: Eyebrow slides in from left, accent line draws rightward
  0.4s: "IDEAS" flies in from left (-30px → 0), "REALITY" from right (+30px → 0)
  0.7s: Arrow "→" appears with a brief scale pulse (1 → 1.2 → 1)
  1.0s: Subtitle fades in, accent word "intelligent" glows
  1.2s: CTAs stagger in (ghost first, primary second)
  1.5s: Stats strip slides up, scroll indicator fades in
  1.5s: Spotlight blooms from transparent → full glow (radial expands from center)

PRESENCE (1.5s → user scrolls past 50%):
  Spotlight follows mouse cursor with subtle breathing pulse (0.5s cycle)
  Stats numbers are animated counters (CSS --target, triggered by IO)
  Title arrow "→" has a gentle shimmer (CSS animation on the text-shadow)
  Ghost CTA has underline animation on hover

EXIT (user scrolls past Hero):
  Spotlight pulse slows and fades into Dither background
  Title blurs slightly upward (2px blur + 10px translateY) as it scrolls out
  Arrow "→" dissolves before the words do — the transformation is complete
  Stats strip compresses into a thin line before disappearing
  The Dither background absorbs all elements — no hard cutoffs
```

- CSS gradient spotlight (dusky red glow following mouse)
  - Initial bloom: radial gradient expands from center with 1.5s animation
  - Breathing pulse: `rgba(122, 26, 26, 0.08)` → `rgba(122, 26, 26, 0.12)` oscillation
  - Exit: amplitude decreases over 0.8s as section scrolls up
- Eyebrow: "DIGITAL SOLUTIONS AGENCY" + red accent line that draws rightward on entrance
- Title: "IDEAS → REALITY" with staged entrance directions
  - "IDEAS" flies left-to-right, "REALITY" flies right-to-left — they converge on the arrow
  - Arrow has a scale pulse entrance, then subtle shimmer while present
  - On exit: arrow dissolves first, words follow (asymmetry = interest)
- Stats strip with counter animation:
  - Numbers count from 0 to target on IO trigger (CSS `--target` or GSAP)
  - Each number lands with a subtle text-shadow pulse (0→glow→off)
  - Divider lines animate from 0 height to full on entrance
- Scroll indicator: "Scroll" label + animated line
  - Fades in at 1.5s
  - Line height oscillates (20px → 40px → 20px, 2s cycle) — breathing, not mechanical

### Narrative Section (V) — Complete Lifecycle

```yaml
background: surface-1
cards: 3 problem cards on dark + 1 solution callout
```

**LIFECYCLE:**
```
ENTRY (as section scrolls into view):
  Section top border line draws from left-to-right in `primary` (1.2s)
  Header fades in: "THE PROBLEM" + title
  Cards stagger in (0.12s delays) with left border already visible — slides up with red stripe
  Solution card enters last — gradient line draws from top to bottom

PRESENCE (while section is in view):
  Cards quiet — content is being read, not watched
  Solution line pulses gently at the bottom (subtle, 4s cycle)

EXIT (user scrolls past section):
  Bottom edge of section dissolves into the Gallery:
    A CSS `::after` pseudo-element with gradient from `surface-1` → transparent
    As gallery section scrolls up, this gradient peels away like a curtain
    The warm off-white of the gallery bleeds through the dissolve
  Problem cards fade in sequence (last card first — stacking depth)
  Solution line fades last — it's the bridge
  Result: "The answer to these problems dissolves into the solutions below"
```

**What changed from v1:** Cards no longer jump to white background. Everything stays on dark track surfaces:
- Problem cards: `surface-1` background with `primary` left border (2px)
  - Left border draws from bottom→top on entry (direction gives energy)
- Problem card title: `text-primary`
- Problem card description: `text-secondary`
- Solution: `primary-dim` background with gradient line (`primary` → transparent)
  - Gradient line draws from top→bottom as the solution enters
- **Entry border**: A thin `primary` line at the top of the section that draws left→right on section entrance — each section gets this "chapter opening" ceremony

**Why:** White cards on dark background feel like a newsletter template, not a luxury experience. Keeping everything within the dark track maintains the warm, intimate atmosphere. The cards are distinguished by surface shifts and border treatments, not by flipping to white.

**The dissolve transition:** When the user scrolls from Narrative to Gallery, the Narrative's bottom edge literally dissolves — a CSS mask/gradient that peels upward. The Gallery's off-white background appears through this dissolve, making the tonal shift feel like a physical transition rather than an abrupt cut. This is the only place on the page where one section visually bleeds into the next — making the Narrative→Gallery movement feel significant.

### Services Gallery (H — The Signature Moment)

```yaml
background: canvas-light (#F5F0EB) — the ONLY light section
panels: 5 panels × 3 cards = 15 services
card:
  background: surface-light-1
  border: 1px solid border-light
  hover: border → primary
```

**LIFECYCLE:**
```
ENTRY (section pins at top):
  1. Section enters from below — the dissolve from Narrative creates a "curtain reveal"
  2. First panel slides in from right with 2deg → 0deg rotation settle (0.6s)
  3. 3 cards within first panel stagger in (0.1s delays each) with slight scale (0.97→1)
  4. Progress bar appears: 5 dots, dot 1 filled, remaining 4 as outlines
  5. Panel label fades in: "Panel 01 / 05"

PRESENCE (as user scrolls through all 5 panels):
  Each panel transition:
    - Panel exits left with slight opacity fade (1→0.85) — feels like looking back
    - Next panel enters from right with the same 2deg→0 settle
    - Cards within each panel stagger similarly
    - Progress dot fills as panel passes, previous dot dims
  Card interactions (3-state):
    1. Rest: border border-light, quiet. Arrow invisible.
    2. Hover: border → primary, primary-dim wash overlay, arrow fades in (right+up 3px)
    3. Click: scale(0.98) press, smooth scroll to #contact with service param
    Note: hover is a DELIBERATE action — no hover effects during scroll (throttled via GSAP)

PROGRESSION TRACKING:
  - 5-dot progress bar at bottom
  - Each dot is a filled circle when active, outlined when pending, mini (0.5×) when past
  - Panel counter: "01 / 05" — updates with each panel
  - Dots have a subtle connecting line between them (1px, border-default)

EXIT (last panel → transition to Capabilities):
  Panel 5 is special — it's the CLOSING:
    - First two cards: services 13 and 14 (standard cards)
    - Third card (position 15): TRANSITION CARD — not a service
      - Title: "All 15 services"
      - Description: "From websites to AI. From design to marketing. From strategy to execution — we deliver end-to-end."
      - Button: "See how we deliver →" (links to next section)
      - Background: subtle primary-tint (primary-dim on light) — different from other cards
  When panel 5 is fully in view:
    - Progress bar animates: 5 dots merge into a continuous horizontal line
    - Line extends and a small "↓" appears below it
    - This is the signal: "Gallery complete — keep scrolling"
  As user scrolls past:
    - Gallery unpins
    - Background transitions from canvas-light → canvas-dark
    - Transition card is the last thing visible before the dark track returns
    - The Capabilities section appears beneath

  **NO abrupt end.** The gallery doesn't just stop. It announces its completion, bridges to the next section, and closes gracefully.
```

- Section pins at top when reached via vertical scroll
- Inner track translates left: 5 panels, each 100vw
- Each panel: header (section label + title) + 3 cards in a row
- Cards: index number (`primary`, tabular), category (micro), title (headline), description (body-sm), arrow icon on hover
- Card hover: border shifts to `primary`, subtle `primary-dim` overlay
- Progress bar at bottom: 5 dots, current panel highlighted
- Background: `canvas-light` — the tonal shift from dark to light IS part of the experience

**Scroll mechanics:**
- Lenis smooth scroll active (desktop only)
- GSAP ScrollTrigger: pin section, scrub translation
- Scrub value: 0.8 (slight inertia)
- Ease: "none" (linear position mapping)
- User can scroll fast — no forced wait at any panel
- 5 panels = ~5 viewport-heights of scroll distance
- Hover effects disabled during active scroll (GSAP ScrollTrigger `onScroll` event sets a flag)

**Mobile fallback (≤1024px):**
- Section is a standard vertical section
- Cards display in responsive grid (3-col → 2-col → 1-col)
- IntersectionObserver reveals instead of GSAP
- Transition card appears as the last item in the grid

### Capabilities (V — Vertical Bento)

```yaml
background: canvas-dark
cards: 6 capability cards in bento grid
  - Web Development (featured, spans 2 rows, primary-dim background)
  - 5 other cards (surface-1 background, standard bento position)
```

**LIFECYCLE:**
```
ENTRY (section scrolls into view, after Gallery exits):
  Section top border line draws left-to-right in `primary` — the "chapter open"
  Bento grid tiles appear with staggered pop-in (scale 0.95→1, not just fade)
    - Featured card enters first (largest, most important)
    - Remaining 5 cards enter in reading order (left→right, top→bottom)
    - Each card's icon spins in (Remix icon rotates -90deg→0 over 0.4s)
  Tool marquee begins: text starts from stopped, accelerates to speed 2 over 1.5s
    - The marquee "spools up" like a reel — it doesn't start at full speed

PRESENCE (while section is in view):
  Card hover: 3-state interaction
    1. Rest: surface-1 (or primary-dim for featured), icon circle has border-transparent
    2. Hover: surface → surface-2, icon background fills with primary, text shifts slightly right
    3. Click: scale(0.98), smooth scroll to #contact
  Tool marquee at constant speed while section is in primary view
  Featured card gets subtle pulsing top border (1.5s cycle, primary-glow)
  Card content is scannable — this section communicates credibility through density

EXIT (user scrolls past):
  Cards do NOT fade — they remain visible as they scroll upward (content permanence)
  Tool marquee speed decreases over 1s (2→0), text decelerates to stop
  The marquee stops at a natural break point between words — never mid-word
  Last element visible: the decelerating marquee giving a sense of completion
```

- Stable, grounded layout. No scroll tricks.
- 6 cards: 3 columns, 2 rows (featured card spans row 1-2 column 1)
- Each card: icon (Remix icon in `primary`), title (headline), description (body-sm)
- Featured card (Web Development): `primary-dim` background with 2px `primary` top border
- Other cards: `surface-1` background
- Card hover: surface shifts to `surface-2`, icon background fills with `primary`
- Tool marquee below: CurvedLoop SVG with tool names, loops continuously
  - Text: "REACT ✦ NEXT.JS ✦ AI & MACHINE LEARNING ✦ ..."
  - Speed: accelerates on entry (0→2), decelerates on exit (2→0)
  - Direction: left, interactive drag
  - Fill: `text-muted`, font: Montserrat 4rem, transparent edge mask
  - The marquee creates gentle motion that feels alive, not mechanical

### Testimonial (V) — Complete Lifecycle

```yaml
background: surface-1
```

**LIFECYCLE:**
```
ENTRY (section scrolls into view):
  Section top border line draws left-to-right in primary
  Quote mark fades in first (0→0.3 opacity, 0.8s) — anchors the section
  Quote text enters word-by-word with subtle opacity stagger (0.05s per word, elegant not gimmicky)
  Accent word in quote gets a brief primary-glow pulse when it appears
  Author avatar + name fade in as a unit (1.2s)
  Metrics bar slides up from below (30px→0, 1.2s ease-out-expo)
    - Metrics bar background: surface-2 (not white — stays on dark track)

PRESENCE (section in view):
  Counters animate from 0 to target value:
    - Triggered by IntersectionObserver when metrics bar enters viewport
    - GSAP count animation: 1.5s duration per metric
    - Staggered: metric 1 starts → 0.3s → metric 2 → 0.3s → metric 3
    - Each counter uses font-variant-numeric: tabular-nums (no width jitter)

  ARRIVAL CEREMONY (when all 3 counters reach target):
    - A brief collective pulse: all 3 metric values glow primary-glow for 0.3s, then settle
    - This feels like a slot machine hitting jackpot — subtle, satisfying
    - After the pulse, metrics remain highlighted (slightly warmer than before the count)

EXIT (user scrolls past):
  Quote mark stays visible longest — last element to scroll out
  Metrics bar collapses downward (reverse of entry)
  No drama — this section's exit is quiet, like the end of a conversation
```

- Large quote mark (`primary`, 8rem, 0.3 opacity) — fades in first
- Quote in Montserrat with one word in `primary` — word-by-word staggered entry
- Author: name + title, small avatar circle
- Metrics bar: 3 metrics on `surface-2` background
  - 4.9 / 2-Week / 100% — counters animate from 0
  - Tabular figures in `text-primary`
  - Labels in `text-muted` micro uppercase
  - All three counters pulse briefly when the last one reaches target
- Clean, quiet with one delightful surprise (the counter arrival)

### CTA (V) — Complete Lifecycle

```yaml
background: canvas-dark
```

**LIFECYCLE:**
```
ENTRY (section scrolls into view):
  Section top border line draws left-to-right in primary
  Grid background pattern fades in (opacity 0→0.3, 2s — very slow, never attention-seeking)
  Title fades and slides up: "Let's build something remarkable"
  Form inputs stagger in: name → email → service → message (0.15s delays)
  Submit button arrives last with a brief primary-glow pulse
  Social links appear at the bottom as the last element

PRESENCE (form interaction):
  Input focus: border → primary, label shifts up (float label pattern)
  Input filled: subtle check icon appears in the field (green → no, primary → yes)
  Characters typed: a thin progress line under the message field grows (visual feedback)
  Submit button hover: primary → primary-hover with a subtle magnetic effect

EXIT (form submission):
  On submit (click):
    - Button shows loading state: text replaced by spinner (CSS-only, no spinner SVG)
    - Form fields lock (pointer-events: none, visual opacity 0.6)

    SUCCESS:
      - Form collapses (fields fade, button fades — 0.5s total)
      - Success state fades in:
        - Primary checkmark icon (animated circle draw + checkmark stroke)
        - "Thank you!" in display-md
        - "We'll be in touch within 24 hours." in body
        - These replace the form in the same DOM position (no layout shift)
      - No redirect. The success state is the new permanent state for this view.

    ERROR:
      - Form does NOT collapse
      - Button returns to original state
      - Error message appears below the submit button in primary (animated slide down)
      - First invalid field shakes briefly (CSS keyframe, 0.3s)
      - No alert() — ever.

EXIT (user scrolls past CTA):
  Form stays visible as it scrolls upward (if submitted, the success message scrolls out)
  Grid pattern fades out (opacity 0.3→0)
  Social links are the last element visible before Footer
```

- Grid background pattern (60px CSS grid, 0.3 opacity, radial mask fading edges)
- Title: "Let's build something remarkable"
- Form: name, email, service, message
  - Inputs on `surface-1`, border `border-default`, focus → `primary`
  - Labels in `text-muted` micro uppercase, float-label behavior
- Post-submit states:
  - Loading: button text → spinner, fields fade
  - Success: form replaced by checkmark + "Thank you" message
  - Error: shake first invalid field, show error message below button
- Social links: Instagram, TikTok, WhatsApp, Email
  - Icon-only, circle buttons, hover → `primary-hover`

### Footer

```yaml
background: canvas-dark
border-top: 1px solid border-default
```

- 4-column link grid: Services, Company, Contact, Social
- All links hover to `primary`
- Status dot in `primary` with pulse animation
- Copyright + location + availability

### Dither Background — The Continuous Thread

```yaml
waveColor:
  hero:       [0.12, 0.02, 0.02]  # Deep red — bold, confident
  narrative:  [0.10, 0.03, 0.03]  # Slightly warmer, less intense — reading mode
  gallery:    [0.08, 0.05, 0.04]  # Warm amber — preparing for light section
  capabilities: [0.10, 0.03, 0.02] # Returns to deep but warmer
  testimonial:  [0.10, 0.02, 0.02] # Deep red, settled
  cta:          [0.08, 0.02, 0.02] # Subtle, receding — lets the form speak
```

The Dither is the **only element on the page that never ends**. It doesn't enter, it doesn't exit — it transforms. This is the solution to the biggest dead end: a static background.

**How it works:**
- A single GSAP ScrollTrigger tracks overall scroll progress (0 → 1 across the page)
- As scroll progresses, the Dither's `waveColor` lerps between color states
- The transition is continuous and slow — 200-300px of scroll to shift between states
- The Dither becomes a "scroll thermometer" — the background subtly tells you where you are

**Why subtle?** The color shifts are small (0.01-0.04 per channel) and slow. The user doesn't consciously notice them but subconsciously feels the page is alive. If the shifts were obvious, they'd be distracting.

**Relationship to the Gallery:**
- As the user scrolls toward the Gallery (Narrative→Gallery transition), the Dither shifts from deep red to warm amber
- During the Gallery's horizontal scroll, the Dither is partially obscured by the light background — but what's visible at the edges still shifts
- As the user exits the Gallery, the Dither shifts back to deep red
- The Dither is the UNDERSCORE — it runs beneath everything, tying all sections into one continuous experience

---

## Global Animation Integration

### The Continuous Thread

Every section lifecycle described above is connected. No section acts in isolation. Here's how they weave together:

```
Scroll Progress:  0%          20%         40%         60%         80%         100%
                 |────HERO────|──NARRATIVE─|──GALLERY(H)─|─CAPABILITIES─|TEST|CTA|FT|
                                                                                
Dither Color:    deep red ──→ warmer ──→ amber ──→ deep red ──→ settled ──→ subtle
                 [0.12,0.02]  [0.10,0.03] [0.08,0.05] [0.10,0.03]  [0.10,0.02] [0.08,0.02]
                 
Entry Borders:   ──────→→→   ─────→→→    ─────→→→    ─────→→→     ───→→→     ───→→→
(primary line     Each section gets a top border that draws left→right on entry
 drawing across)

Section Energy:  HIGH ──→ CALM ──→ CLIMAX ──→ GROUNDED ──→ TRUST ──→ WARM
                 loud     reading   thrill    stable      quiet    invite
```

The Dither color shift is the slowest, most continuous animation on the page — taking the full scroll length to complete its transformation. Section entry borders are the fastest — discrete moments of "chapter opening." Between these two extremes, each section has its own lifecycle tempo.

### How Lifecycles Feed Into Each Other

| Exit From | Feeds Into | Mechanism |
|-----------|-----------|-----------|
| Hero spotlight fades | Narrative's calm entrance | Spotlight dissolves into Dither; Dither shifts warmer |
| Narrative dissolves upward | Gallery appears through dissolve | CSS mask gradient on Narrative's bottom edge peels up |
| Gallery progress bar completes | Capabilities section signaled | Dots merge into line + "↓" — visual cue to continue |
| Tool marquee decelerates | Testimonial quiet entrance | Marquee stops → 0.5s pause → testimonial border draws |
| Metrics arrival pulse | CTA warm invitation | The "confirmed" feeling of metrics pulsing carries into CTA |
| CTA form submits (or not) | Footer appears | Footer is always waiting, always stable — the ground |

### Dead End Checklist

Every visual element is checked against this before implementation:

- [ ] Does it have a defined ENTRANCE (how, when, how long)?
- [ ] Does it have a PRESENCE behavior (what it does while visible)?
- [ ] Does it have an EXIT (how it leaves or transforms)?
- [ ] Does its exit feed into the next element's entrance?
- [ ] If it never exits (like Dither), does it TRANSFORM?
- [ ] Is there any element that appears from nowhere with no context?
- [ ] Is there any element that disappears with no closure?

**If a visual hasn't been defined through all 4 lifecycle phases (ENTRY, PRESENCE, EXIT, FEED-INTO), it's a dead end and needs to be fixed.**

---

## Animation & Motion

### Dual Engine Philosophy

```yaml
desktop (>1024px):
  smooth-scroll: Lenis
  horizontal-section: GSAP ScrollTrigger (pinned, scrub)
  reveals: CSS transitions + IntersectionObserver
  easing: ease-out-expo for reveals, linear for horizontal scrub

mobile (≤1024px):
  smooth-scroll: Native (Lenis disabled)
  horizontal-section: Disabled (collapsed to vertical)
  reveals: CSS transitions + IntersectionObserver (unchanged)
  easing: ease-out-expo for reveals
```

Lenis and GSAP are **dynamically imported** only on desktop. They never load on mobile. This means:
- Mobile users don't pay the bundle cost for features they can't use
- No risk of Lenis fighting touch scroll (the #1 cause of "annoying" scroll)
- Desktop users get the full experience
- The site works perfectly without JS (standard vertical scroll)

### Scroll Engine Details

**Lenis config:**
```yaml
duration: 1.2        # Scroll duration — faster than default (1.5) for snappiness
easing: "easeOutExpo" # Same curve as CSS reveals — cohesive feel
orientation: "vertical"
smoothWheel: true
wheelMultiplier: 1     # No scroll speed modification — user's scroll is respected
touchMultiplier: 1     # Touch = native scroll feel (Lenis touch handling disabled)
```

**GSAP ScrollTrigger for Gallery:**
```yaml
trigger: ".services-gallery"
start: "top top"
end: "+=500%"           # 5 panels × 100vh each
pin: true
pinSpacing: true
invalidateOnRefresh: true

timeline:
  - translate x: 0 → -400vw (5 panels - 1)
  - scrub: 0.8          # Slight inertia — feels physical
  - ease: "none"        # Linear — exact scroll-to-position mapping
```

**MatchMedia (mobile deactivation):**
```yaml
ScrollTrigger.matchMedia():
  "(min-width: 1025px)": activate horizontal gallery
  "(max-width: 1024px)": deactivate horizontal gallery, show vertical
```

### Scroll-Reveal Pattern (Vertical Sections)

CSS + IntersectionObserver (unchanged from v1):
```
observer: { threshold: 0.1, rootMargin: '-50px' }
targets: .reveal → .visible
CSS: opacity 0→1, translateY(30px)→0
transition: 1.2s var(--ease-out-expo)
```

No GSAP for vertical section reveals. These are simple, lightweight, CSS-driven.

### Hover States

Every interactive element uses `primary-hover` (`#8B2A2A`):
- Buttons: background color shift (no scale on hover — only on press)
- Cards: border color shift to `primary` + `primary-dim` overlay
- Links: color shift to `primary-hover` + underline on text links
- Press: `transform: scale(0.95)` with 0.1s transition

**No blue anywhere.** The old electric blue hover (`#0052ef`) is entirely removed. The red family handles both static brand presence and interactive feedback.

### What NOT to Animate

- Parallax backgrounds — causes layout thrashing, poor mobile perf
- Word-by-word or letter-by-letter reveals — annoying, slow
- Page transitions — single page, no routes
- Complex keyframe sequences — the 1.2s reveal is enough
- Scroll-driven background color shifts — disorienting
- Decorative gradient animations — the Dither BG is the only shader
- Content animations within horizontal cards during scroll — the scroll IS the motion

---

## Performance Budget

| Asset | Bundle | Loading Strategy |
|-------|--------|-----------------|
| Lenis | ~8KB gz | Dynamic import, desktop-only (>1024px) |
| GSAP + ScrollTrigger | ~22KB gz | Dynamic import, desktop-only (>1024px) |
| Three.js (Dither) | ~50KB gz | Dynamic import, ssr: false (existing) |
| CSS (all) | < 50KB | Static, bundled |
| Fonts | 2 families | Preconnect + preload |
| **Initial JS** | **< 30KB** | No animation libs in initial bundle |

### Loading Sequence

```
1. HTML renders (server)
2. CSS paints (static, no JS needed for layout)
3. IntersectionObserver fires for .reveal elements
4. [If viewport > 1024px] Dynamic import: Lenis + GSAP
5. [If viewport > 1024px] Initialize smooth scroll + horizontal gallery
6. [Always] Dynamic import: Dither (Three.js canvas)

If JS fails at step 3: All content still visible, basic vertical scroll works
If JS fails at step 4: Vertical sections reveal, horizontal section shows as vertical grid
If JS fails at step 5: Dither BG shows static noise pattern → plain dark
```

---

## Responsive Behavior

### Breakpoints

```yaml
mobile: < 768px
tablet: 768-1024px
desktop: 1024-1440px
wide: > 1440px
```

### Scroll Behavior by Viewport

| Viewport | Scroll Engine | Services Gallery | Capabilities |
|----------|--------------|------------------|--------------|
| > 1024px | Lenis smooth | Horizontal pinned (5 panels × 3 cards) | Vertical bento grid |
| ≤ 1024px | Native | Vertical responsive grid | Vertical bento grid |

### Mobile Behavior

- No Lenis — native scroll only. Lenis fighting touch scroll is THE most annoying mobile UX pattern.
- Horizontal gallery collapses to a vertical section with cards in a responsive grid
- All other sections render as standard vertical sections
- Touch targets ≥ 44×44px (WCAG AAA)
- Section spacing compresses: 96-120px → 48-64px
- Display type scales via `clamp()`, tracking percentage stays constant

### The Horizontal Section on Mobile

The mobile user sees:
- Same section header ("Our Services / Solutions that deliver")
- Same 15 cards in a 3-col → 2-col → 1-col grid
- Same reveal animations (IntersectionObserver, staggered)
- NO horizontal translation, NO pinned behavior, NO progress bar
- The experience is complete and good — just different

This is important. Mobile users shouldn't feel cheated. The vertical grid is a perfectly valid layout — it's not a "lesser" version. It's the same content, adapted to the medium.

---

## Do's and Don'ts

### Do

- **Save the surprise.** One horizontal pinned section. The Services Gallery is the page's signature moment. Don't dilute it with a second one.
- **Use red sparingly.** One red element per viewport maximum. Red is powerful because it's rare.
- **Use warm off-white text on dark.** `#F0EBE3`, not `#ffffff`. Your users' eyes will thank you after 30 seconds.
- **Let the horizontal section breathe.** The warm off-white background is a tonal vacation from the dark track. Don't add more light sections.
- **Let users scroll fast.** No forced animation waits. The horizontal section should be skippable.
- **Use `primary-hover` everywhere.** All interactive elements hover to a warmer, slightly brighter red. The red family handles both static and interactive states.
- **Use tabular figures for stats.** Numbers should never shift width during counter animation.
- **Mount Lenis + GSAP dynamically.** Desktop-only. Never on mobile.
- **Keep the dark track as default.** Light sections are intentional interludes, not defaults.
- **Use pill-shaped CTAs exclusively.** No rounded rectangles for buttons.
- **Let the Narrative breathe.** It's the calm before the horizontal climax. Rushing it weakens the payoff.

### Don't

- **Don't use blue.** No blue hover states, no blue links, no blue accents. The old electric blue (`#0052ef`) is entirely removed.
- **Don't use two horizontal sections.** The second one is boring before it loads. One signature moment, perfectly executed.
- **Don't use pure black or pure white.** `#000000` and `#ffffff` are banned. Use warm near-black and warm off-white variants.
- **Don't use box-shadows.** Depth comes from surface color shift, not shadows.
- **Don't use `backdrop-filter: blur()` anywhere except the header nav.**
- **Don't use display-level tracking on body text.** Negative tracking is for Montserrat headlines only.
- **Don't animate content within horizontal cards during scroll.** The scroll IS the animation.
- **Don't enable Lenis on mobile.** Native scroll only. Scrolljacking on mobile is infuriating.
- **Don't add decorative gradients on section backgrounds.** The Dither shader is the only gradient effect.
- **Don't add parallax scrolling, animated backgrounds, or scroll-triggered effects beyond the horizontal gallery.**
- **Don't reduce negative letter-spacing on display sizes.** Reduce font-size instead, keep tracking percentage.
- **Don't use uppercase for text below 18px body scale.** Uppercase is for display and micro labels only.

---

## Key Decisions & Rationale

### Why Only One Light Section?

The warm off-white gallery section is the ONLY break from the dark track. This exclusivity gives it weight. When the user scrolls from dark (Hero/Narrative) into light (Gallery), the shift feels significant — like entering a different room. When they scroll out back to dark (Capabilities/Testimonial), it feels like returning home.

If there were multiple light sections, the dark↔light alternation would become a predictable rhythm, then an annoyance. The brain habituates quickly — what was once a delightful shift becomes an expected pattern that's ignored.

### Why 5 Panels × 3 Cards (Not 15 Individual Slides)?

- 15 individual slides = 15 scroll positions = tedious. The user feels trapped.
- 5 panels = 5 scroll positions = manageable. The user feels in control.
- 3 cards per panel = enough variety within a single viewport to feel rich
- The 5-dot progress bar provides clear orientation: "I'm on panel 3 of 5. Almost there."
- Each panel's 3 cards can be scanned quickly — the user doesn't have to "enter" each card

### Why No Second Horizontal Section?

The Capabilities section with its bento grid serves a different psychological purpose: stability. After the thrill of the horizontal gallery, the user needs to feel grounded. A bento grid that appears solid and complete provides:
- Reassurance: "This is a real company with real tools"
- Completeness: The grid is fully visible — no hidden content, nothing missed
- Contrast: The stable grid makes the previous horizontal section feel even more dynamic in retrospect

If Capabilities were also horizontal, the user would never get that grounding moment. The page would feel like a carnival ride — thrilling but exhausting.

---

## Implementation Plan

### Phase 1: Palette Refactor
1. Update `app/globals.css`: Replace all v1 CSS variables with v2 dusky palette
2. Remove `accent-blue` and all blue usage
3. Update `--gradient-spotlight` to use `#7A1A1A`
4. Update `--accent-glow` to use `rgba(122, 26, 26, 0.3)`
5. Delete or update `--accent-dim` to `rgba(122, 26, 26, 0.12)`
6. Update `::selection` color to new `primary`
7. Check and fix any inline color values in component CSS files

### Phase 2: Scroll Engine
1. `npm install lenis gsap`
2. Create `components/SmoothScrollProvider.tsx`:
   - Dynamic import of Lenis + GSAP
   - Desktop-only check (>1024px)
   - Initialize Lenis with config
   - Connect Lenis ticker → GSAP ticker
   - Register ScrollTrigger
   - Resize handler (refresh ScrollTrigger)
   - Cleanup on unmount
3. Wrap `<main>` in `SmoothScrollProvider` in `HomePage.tsx`
4. Create `hooks/useSmoothScroll.ts` for sections to consume

### Phase 3: Services Gallery (Horizontal)
1. Create `components/ServicesGallery.tsx` (replaces `components/Work/Work.tsx`)
2. Structure: outer pinned wrapper → inner horizontal track → 5 panels × 3 cards
3. Register ScrollTrigger: pin + scrub timeline
4. Add progress bar (5 dots, GSAP-updated active state)
5. Mobile fallback: display same cards in responsive grid
6. Remove `components/Work/Work.tsx` and `Work.css` (or archive)
7. Update `HomePage.tsx` import

### Phase 4: Capabilities (Vertical — No Changes to Scroll)
1. No horizontal scroll — it stays a vertical bento grid
2. Update colors to new palette (update `Capabilities.css`)
3. Featured card gets `primary-dim` background + `primary` top border
4. Tool marquee (CurvedLoop) stays — it's the section's subtle motion

### Phase 5: Narrative Color Fix
1. Update `Narrative.css`: Remove white card backgrounds, use `surface-1` with `primary` left border
2. Cards transition from dark bg to warm dark bg — not from white

### Phase 6: Polish & QA
1. Update Hero CSS spotlight to use new `primary-glow`
2. Update Button CSS hover states from electric blue to `primary-hover`
3. Update Testimonial CSS — metrics bar on dark surface instead of white
4. Update CTA form inputs on dark surface
5. Test Lenis/GSAP load and behavior on desktop
6. Verify no Lenis/GSAP on mobile (check network tab)
7. Verify horizontal gallery collapses on ≤1024px
8. Test fast scrolling through gallery (no forced pauses)
9. Check all hover states use red, not blue
10. Verify warm off-white text on dark (no pure white anywhere)
