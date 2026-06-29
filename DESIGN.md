# Remark Studio — Navbar + Hero Design Spec

## 1. Visual Theme & Atmosphere

**Anchor**: Warm editorial minimalism on a dark canvas. Think luxury magazine landing page — restrained, textured, intentional. The site feels like stepping into a dimly lit gallery with warm mahogany accents. Light behaves like it's passing through a smoked glass lens.

The atmosphere is created through layered radial spotlights (deep red, warm amber, subtle glow) rather than gradients or decorative shapes. The canvas has a faint film-grain texture. No floating 3D objects, no animated orbs, no "particle" effects.

- **Load impact**: Typography assembles in sequence (eyebrow → heading → lead → actions). Nothing moves after load.
- **First scroll trigger**: The marquee appears already running at page bottom (no fade-in). It's a design element, not a reveal.
- **Non-uniform moment**: The hero visual (a single refined glass card) sits asymmetrically right-of-center, creating tension with the left-aligned typography.

## 2. Color Palette & Roles

All colors reference CSS variables from `globals.css`. Zero hardcoded hex values.

| Role | Variable | RGB Ref | Usage |
|------|----------|---------|-------|
| Canvas | `--canvas` | 8, 8, 8 | Page background |
| Primary | `--primary` | 122, 26, 26 | Accent, CTAs, emphasis, hover lines |
| Primary hover | `--primary-hover` | 139, 42, 42 | Button hover |
| Ink | `--ink` | 240, 235, 227 | Primary text, headings |
| Ink secondary | `--ink-secondary` | 240, 235, 227, 0.85 | Body text |
| Ink muted | `--ink-muted` | 160, 152, 136 | Subtle text, metadata |
| Ink dim | `--ink-dim` | 160, 152, 136, 0.4 | Placeholder |
| Surface 1 | `--surface-1` | 20, 20, 20 | Header scrolled bg |
| Hairline | `--hairline` | 38, 38, 38 | Borders, dividers |
| Glass bg | `--glass-bg` | 20, 20, 20, 0.55 | Header background |
| Glass border | `--glass-border` | 255, 255, 255, 0.08 | Header border |

**Anti-cliché guard**: No blue tones anywhere. No purple-pink gradients. No `#0D1117` background. No `#c0392b` or any hardcoded warm tone — all reds use `--primary` family.

## 3. Typography Rules

**Font stack**: Montserrat (headings, display) + Inter (body, UI). Loaded via Google Fonts.

**Scale**:
| Token | Size | Weight | Letter-spacing | Usage |
|-------|------|--------|----------------|-------|
| `--display-xxl` | clamp(3rem, 10vw, 7rem) | 800 | -0.06em | Hero main heading word |
| `--display-md` | clamp(1.5rem, 3vw, 2.5rem) | 700 | -0.02em | Within-hero emphasis |
| `--body` | 1rem | 400 | -0.01em | Hero lead paragraph |
| `--button` | 0.8rem | 600 | 0.05em | CTA buttons |
| `--micro` | 0.65rem | 600 | 0.15em | Nav links, top bar, badge text |
| `--caption` | 0.75rem | 600 | 0.10em | Eyebrow text |

**Forbidden fonts**: Inter, Roboto, Arial must NOT be used for display/heading text (only body/UI). Montserrat is the only display font.

**Key rule**: Hero heading uses Montserrat 800 with aggressive -0.06em tracking. No gradient text fills. No outlines. No text shadows.

**Accessibility**: WCAG AAA ratio 7:1 for normal text on `--canvas` background. The primary red on dark bg passes AAA for large text only — used sparingly for emphasis, not body text.

## 4. Component Stylings

### Navbar
| State | Style |
|-------|-------|
| Default | Glass background (--glass-bg). 1px bottom border (--glass-border). Height 64px. Logo: "REMARK" in micro with 0.2em tracking, --ink-muted. Nav links: --micro font, --ink-secondary, uppercase, 0.1em tracking. |
| Scrolled | Background becomes --surface-1 at 0.85 opacity. Bottom border becomes --hairline-soft. Transition 0.4s ease-out. |
| Nav link hover | Color → --ink. Pseudo-underline (2px --primary) expands from center. |
| Nav link focus-visible | 2px --primary outline. |
| CTA button default | --primary bg, --ink text, --radius-pill, 0.5rem 1.25rem padding. |
| CTA button hover | --primary-hover bg. |
| CTA button active | scale(0.97). |
| Hamburger default | Two 18×2px lines, --ink, 5px gap. Centered in 32×32px area. |
| Hamburger active | Top line: translateY(3.5px) rotate(45deg). Bottom: translateY(-3.5px) rotate(-45deg). |
| Mobile panel default | Position fixed, right 0, top 64px, width 300px, --surface-1, border-left --hairline. translateX(100%) hidden. |
| Mobile panel open | translateX(0). Transition 0.4s ease-out. |
| Mobile link default | --heading size, --ink-secondary, border-bottom --hairline-soft. |
| Mobile link hover | --ink color. |
| Mobile CTA | --primary full-width pill, 0.75rem 1.5rem. |

### Hero
| State | Style |
|-------|-------|
| Typography entrance | Words reveal via clip-path inset(0 0 100% 0) → inset(0 0 0 0), staggered 0.2s/0.4s/0.6s, 1.2s ease-out-expo. No gradient text. |
| Eyebrow | --micro text, --ink-muted. Badge + separator line + year. |
| Lead paragraph | Reveals at delay-2 with standard fadeSlideUp. |
| Actions | Reveal at delay-3. |
| CTA primary default | --primary bg, --radius-pill, 0.85rem 2rem, 600 weight. |
| CTA primary hover | --primary-hover bg + box-shadow glow (0 0 24px --primary-glow). |
| CTA primary focus-visible | 2px outline offset 2px. |
| CTA ghost default | --ink-secondary, underline via pseudo-element (1px --hairline). |
| CTA ghost hover | --ink color, underline turns --primary. |
| Glass card default | Glass-light background, 1px --hairline-light border, rounded --radius-lg. Contains: eyebrow (--micro, --primary), title (--display-md, --ink, Montserrat 700), description (--body-sm, --ink-secondary), CTA text. |
| Glass card hover | Subtle translateY(-2px) — no float animation, no perpetual rotation. |
| Marquee items | --caption text, --ink-muted, uppercase, 0.1em tracking. Constantly scrolling. |
| Top bar | Fixed left/right at top. Status dot (6px, #22c55e, pulse animation) + "Available for projects" label + location. |

**Interactive states**: Every interactive element (button, link, hamburger) includes: default, hover, focus-visible, active. Non-interactive decorative elements have no hover states.

## 5. Layout Principles

### Navbar
- Full-width fixed header. Inner max-width 1400px with `clamp(1.5rem, 5vw, 4rem)` padding.
- Three columns: Logo (left), Nav links (center), Status + CTA button (right).
- On mobile (<1024px): nav links and right group hide, hamburger appears.

### Hero
- Full viewport (`100dvh`). Section uses flexbox.
- Left column (55%): Typography stack — status bar, eyebrow, heading words, lead paragraph, CTA buttons.
- Right column (45%): Single glass card (the featured service), centered vertically.
- Vertical divider line at 55% mark — subtle hairline, 0.2 opacity.
- Bottom: Full-width marquee bar (48px tall) — always visible, no entrance animation.
- Container padding: `clamp(1.5rem, 5vw, 4rem)`.

### Spacing gradient
- From eyebrow to heading: 2rem
- Heading to lead: 2rem
- Lead to actions: 2.5rem
- Margin between sections: var(--space-section) = 96px

## 6. Depth & Elevation

No box-shadows on hero elements. Depth comes from:
- Opacity layering (glass card, grid lines, atmosphere gradient)
- The glass backdrop-filter (saturate 180%, blur 20px)
- The primary glow on CTA hover (`box-shadow: 0 0 24px var(--primary-glow)`)

The atmosphere is created via CSS radial gradients on absolute-positioned pseudo-elements (not box-shadows):
- `--gradient-spotlight-deep` at 30% 40%
- `--gradient-spotlight-warm` at 70% 30%

## 7. Animation & Interaction

**Interaction Level**: L2 (scroll reveal + micro-interactions)

### Entrance sequence (page load)
| Time | Element | Effect |
|------|---------|--------|
| 0s | Hero section renders | Background, grid lines, marquee (already running) |
| 0.2s | "IDEAS" word | clip-path inset(0 0 100% 0) → inset(0 0 0 0), 1.2s ease-out-expo |
| 0.4s | "INTO" word | Same, 1.2s ease-out-expo |
| 0.6s | "REALITY" word | Same, 1.2s ease-out-expo |
| 0.8s | Eyebrow + lead | fadeSlideUp, 0.6s ease-out-expo |
| 1.0s | Actions + glass card | fadeSlideUp, 0.6s ease-out-expo |

### Micro-interactions
- CTA buttons: hover glow, active scale(0.97)
- Nav links: underline expand on hover
- Glass card: subtle translateY(-2px) on hover
- Hamburger: line transform animation

### Reduced motion
All animations reduce to 0.01ms under `prefers-reduced-motion: reduce`. The scroll marquee stops. The status dot pulse stops. Clip-path reveals become instant opacity: 1.

### No-no list
- No perpetual animations (float, pulse, shimmer, spin) on decorative elements
- No gradient text fills
- No emoji as icons
- No `filter: blur()` on moving elements
- `backdrop-filter: blur()` ≤ 14px (currently 20px in globals.css — reduce to 14px)

## 8. Do's and Don'ts

### Do's
- Use CSS variables for all colors
- Keep typography restrained — one typeface for display (Montserrat), one for body (Inter)
- Use clip-path for word reveals — it's a subtle, intentional entrance
- Make the glass card feel editorial, like a magazine cover line
- Let whitespace breathe — aggressive tracking on headings, generous padding
- Keep the marquee running at all times — it's a design signature
- Ensure every interactive element has 3 states (hover, focus-visible, active)

### Don'ts
- Don't use gradient text fills on headings (AI cliché)
- Don't use emoji as icons (✦, ◆, ★ — all emoji) — use inline SVGs instead
- Don't add floating badges ("New", "AI-Powered") — they look like fabricated data
- Don't animate decorative background elements (orbs pulsing, spheres rotating)
- Don't stack multiple glass cards with different rotations — keep it to one refined card
- Don't use `#c0392b` or any hardcoded warm tone — all reds must use --primary family
- Don't add perpetual float/bounce animations on cards
- Don't use `will-change` on elements that don't animate
- Don't add text-shadow, drop-shadow, or outline to heading text

## 9. Responsive Behavior

### Breakpoints
| Breakpoint | Behavior |
|------------|----------|
| > 1024px | Full split layout. Grid line visible. Glass card in right column. |
| 1024px | Collapse to single column. Typography on top, glass card below. Grid lines hidden. Vertical divider hidden. |
| 768px | Reduce font sizes. Reduce padding. Marquee height → 40px. Hero min-height collapses (no longer 100vh). |
| 480px | CTA buttons full-width. Eyebrow year hidden. Hamburger 56px header. |

### Touch targets
- All interactive elements ≥ 44×44px
- Nav links in mobile menu: full-width tap targets
- CTA buttons: minimum 44px height
- Hamburger: 32×32px (within 44px minimum touch area via padding)

### Mobile collapse strategy
- Right column (glass card) slides below typography
- The glass card becomes full-width, no rotation
- The card text scales down proportionally
- Floating badges are removed at ≤ 1024px
- Bottom marquee remains but text is smaller and faster (20s duration)

### Accessibility
- `prefers-reduced-motion` respected throughout
- All CTA buttons and links have visible focus-visible outlines
- Semantic HTML (`<header>`, `<nav>`, `<section>`, `<h1>`, `<h2>`, `<a>`)
- `aria-label` on icon-only buttons (hamburger, social links)
- Screen reader text for decorative elements (`aria-hidden="true"`)
- Color contrast meets WCAG AA minimum (targeting AAA where possible)
- `text-wrap: pretty` on paragraphs to prevent orphans

---

# Remark Studio — Full Site Design System (Expanded)

> This document extends the Navbar + Hero spec above with shared patterns and remaining sections.

## Shared Patterns

### Reveal Animation System
Every section uses the `useReveal` hook (`hooks/useReveal.ts`) — a single `IntersectionObserver` shared across all components. Elements with class `.reveal` fade + slide up (20px, 0.7s ease-out-expo) when they enter the viewport.

Standard delay classes (globally defined in `app/globals.css`):
| Class | Delay |
|-------|-------|
| `.reveal-delay-1` | 0.12s |
| `.reveal-delay-2` | 0.24s |
| `.reveal-delay-3` | 0.36s |
| `.reveal-delay-4` | 0.48s |
| `.reveal-delay-5` | 0.6s |
| `.reveal-delay-6` | 0.72s |

Under `prefers-reduced-motion: reduce`, all reveals become instant (opacity: 1, transform: none, transition: none).

### SectionHeader Component
Shared component at `components/SectionHeader/`. Three optional slots:
- `eyebrow` — small uppercase label in `--primary`, 0.1em tracking
- `title` — `<h2>` in `--display-lg` → `--heading` (responsive clamp)
- `subtitle` — optional body copy below title

Every section header follows the same vertical spacing: `eyebrow → 16px → title → 8px → subtitle → 96px section gap`.

### Section Top Line Ceremony
Each major section begins with a thin red horizontal rule that scales in on scroll. Implemented via `.section-top-line` pseudo-element: 1px height, `--primary` background, `transform: scaleX(0) → scaleX(1)` on scroll reveal.

---

## 10. Narrative Section (The Friction Trilogy)

### Visual Philosophy
Three acts, three visual compositions — each a distinct metaphor for the friction it addresses. The visual language evolves from **fragmented → flowing → connected**, mirroring the narrative arc from problem to resolution.

- **Act 1 — "The Mosaic":** Broken geometric tiles converge into a unified grid. Represents the transition from invisible web presence to visible platform. Split-screen layout. Cool electric blue accent.
- **Act 2 — "The Signal":** Concentric elliptical rings animate from silent to resonant. Represents AI voice agents establishing connection. Full-screen immersive layout. Warm amber accent.
- **Act 3 — "The Network":** A hexagonal node-link system resolves from dark disconnected dots to an illuminated architecture. Represents integrated CRM/ERP. Inverted split-screen. Crimson accent.

**Interaction Level**: L2 (scroll-triggered CSS reveals only)  
**Dependencies**: CSS transitions + transforms only (no JS animation libs in this section)

### Color System

| Act | Background | Accent | Accent Text | Token Names |
|-----|-----------|--------|-------------|-------------|
| 01 | `oklch(12% 0.035 260)` deep navy | `oklch(58% 0.15 225)` electric blue | `oklch(72% 0.12 230)` | `--act-bg`, `--act-accent`, `--act-accent-text` |
| 02 | `oklch(11% 0.025 35)` warm charcoal | `oklch(62% 0.18 60)` burnt amber | `oklch(75% 0.14 65)` | |
| 03 | `oklch(12% 0.04 300)` violet-black | `oklch(52% 0.18 15)` deep crimson | `oklch(65% 0.14 20)` | |

Each act defines `--act-accent-dim` (12% opacity) and `--act-accent-subtle` (6% opacity) for layered backgrounds and glows.

### Act Structure

| Act | Layout | Visual Element | Content Position | Animation |
|-----|--------|---------------|-----------------|-----------|
| 01 | Split-screen (55% visual / 45% content) | 20 floating tiles → 5×4 grid | Right-aligned | Tiles scatter-rotate then converge, staggered 35ms per tile, 0.8s ease-out-expo |
| 02 | Full-screen immersive | 7 elliptical rings + core dot | Center-overlaid | Rings fade in sequence (100ms stagger), core pulses after reveal |
| 03 | Split-screen inverted (40% content / 60% visual) | 33 nodes × ~60 edges in hex lattice | Left-aligned | Edges fade in staggered (15ms), nodes follow (20ms) |
| Quote | Full-screen cinematic | 3-line staggered text + center rule | Center | Lines slide up 32px (200ms stagger), rule draws center-out at 1s delay |
| Closing | Single column | None (CTA button) | Left | Standard fade-slide-up 0.7s |

### Visual Specifications

#### Act 1 — Mosaic Tiles
- **Grid**: 5 columns × 4 rows, 56px tiles with 4px gap (responsive scaling)
- **Tiles**: 20 `<div>` elements with `background: var(--act-accent-dim)`, `border: 0.5px solid var(--act-accent)`, 3px radius
- **Initial state**: Each tile has unique `translate(x, y)` and `rotate()` values, opacity 0.03–0.20
- **Final state**: All tiles snap to `translate(0, 0) rotate(0deg)`, opacity 1
- **Variants**: 2 tiles span 2 columns, 1 spans 2 rows, 1 is 84×84px
- **Transition**: 0.8s `cubic-bezier(0.16, 1, 0.3, 1)` per tile, staggered by `--i * 0.035s`
- **Background glow**: Radial gradient behind visual, fades in over 1.5s
- **Giant numeral**: "01" at 50vw, 3% white opacity, centered behind everything

#### Act 2 — Elliptical Rings
- **SVG**: `viewBox="0 0 500 500"`, preserves aspect ratio, max 70vh/70vw
- **Rings**: 7 ellipses, radii 220→20 (step ~30px), `rx/ry = 1/0.72` ratio
- **Stroke widths**: 0.8px (outer 2) → 1.2px (middle 2) → 2px (inner 3)
- **Opacity**: 0.15 (outermost) → 0.7 (innermost), linearly scaled
- **Reveal**: Sequence staggered by `--i * 0.1s + 0.1s`, opacity 0→0.6 on `.visible`
- **Core dot**: Fills after 0.8s delay, then infinite pulse (r 4→5 over 3s)
- **Background glow**: Radial gradient centered, fades in over 1.5s

#### Act 3 — Hex Network
- **SVG**: `viewBox="0 0 500 400"`, max 55vh/55vw
- **Nodes**: 33 circles (r=3.5), positioned in staggered rows (6/5/6/5/6/5)
- **Edges**: ~60 line segments connecting lattice neighbors (each node connects to up to 6 neighbors)
- **Reveal order**: Edges first (opacity 0→0.2, staggered `--i * 0.015s`), nodes follow (opacity 0→0.7, staggered `--i * 0.02s + 0.3s`)
- **Background glow**: Radial gradient on `::before` pseudo-element, right-aligned

#### Pull Quote
- Background: `oklch(10% 0.01 30)` with warm radial glow
- Typography: Montserrat 700, `clamp(1.5rem, 4.5vw, 3.5rem)`, -0.03em tracking
- Three lines, each animates independently with `--i * 0.2s` stagger
- Horizontal decorative rule: 0→120px width, draws from center at 1s delay
- Vertical rule stripes: `repeating-linear-gradient(90deg, ...)` at 60px intervals, 2% opacity

#### Closing Section
- Background: `oklch(11% 0.015 270)`
- Standard editorial layout (max-width 580px)
- CTA button with squared 4px radius, primary red, arrow icon hover

### Content Layout
```
Act 1:  [Visual 55%]  |  [Content 45%]    → content right-aligned
Act 2:  [Visual full]                        → content center-overlaid
         [Content center]
Act 3:  [Content 40%]  |  [Visual 60%]    → content left-aligned
```

### Divider Between Acts
- 64px thin divider with 48px × 1px accent-colored line at center

### Responsive Behavior

| Breakpoint | Act 1 Visual | Act 2 Visual | Act 3 Visual | Content |
|-----------|-------------|-------------|-------------|---------|
| > 1024px | 56px tiles, left | 70vh rings | 55vh network | Split layout |
| 1024px | 42px tiles | 60vw rings | 50vw network | All left-aligned |
| 768px | Collapsed above content, 36px tiles | Background (20% opacity) | Collapsed above content, 80vw | Single column |
| 480px | 28px tiles | Dimmed | 80vw | Full-width CTA |

- `prefers-reduced-motion`: All durations → 0.01ms, all content immediately visible at final opacity/transform
- Touch targets: CTA button ≥ 48px height, all interactive elements ≥ 44×44px
- Decorative elements use `aria-hidden="true"`

### Anti-Cliché Check
- ❌ No ghost watermarks
- ❌ No floating badges or pills
- ❌ No emoji as decorative elements
- ❌ No gradient text fills
- ❌ No `filter: blur()` on animated elements
- ❌ No perpetual animations (only core dot pulse — stops under reduced motion)
- ❌ No bento grid, no glass metrics, no count-up
- ✅ All colors via CSS variables from design tokens
- ✅ `prefers-reduced-motion` fallback included

---

## 11. ServicesGallery (Horizontal Scroll Gallery)

### Layout
Full-viewport pinned horizontal scroll section. Uses GSAP ScrollTrigger with pin + scrub. Dark theme background (`--canvas-light` for the gallery area with light cards, `--canvas` for the rest).

### Behavior
- Section pins for ~200% viewport scroll distance
- During scroll, the gallery track translates horizontally
- Active panel tracked via GSAP `onUpdate` callback (progress → index)
- Panel indicator dots at bottom of viewport update in sync
- On desktop: horizontal drag interaction enabled (native scroll + cursor grab)
- On mobile (< 768px): collapses to vertical list with standard reveal animation (no GSAP)

### Panel Structure (15 services, 5 panels of 3 items)
Each panel contains:
- 3 service cards in a row
- Each card: index number (micro, --ink-muted), category badge (--badge-bg), title (uppercase, --display-md weight 700), description (--body-sm, --ink-light-secondary), metric (--micro, --ink-light-muted)
- Panel CTA: "View All Services →" link at panel bottom

### Light Theme
The gallery uses a separate light color system:
- `--canvas-light: #F5F0EB`, `--surface-light-1: #E5DED3`
- Text: `--ink-light`, `--ink-light-secondary`, `--ink-light-muted`
- Hairlines: `--hairline-light`, `--hairline-light-strong`
- Glass cards use `--glass-bg-light` (white tint)

---

## 12. Capabilities Section (Newspaper Columns)

### Layout
3-column newspaper grid (`repeat(3, 1fr)`). Each column separated by a vertical hairline rule (`border-left: 1px solid var(--hairline-soft)`). Header follows standard `SectionHeader` pattern.

### Entry Structure (6 entries, 2 per column)
- **Red rule**: 28px × 2px `--primary` rule above the title (0.6 opacity)
- **Title**: --heading, weight 700, --ink
- **Description**: --body-sm, --ink-secondary, line-height 1.7
- **Metric**: Inline in description text, highlighted in `--primary`, weight 600 (e.g., "Over **50+** projects delivered")

### Footer
- **CTA row**: "Need a custom solution?" + "Let's talk" button (squared, --primary background)
- **Stats row**: Three stats separated by red dots (3px, `--primary` 0.4 opacity). Each stat: value in `--primary`, label in `--ink-muted`, micro font, uppercase
- Separated from columns by a top border (`var(--hairline-soft)`)

### Responsive
| Breakpoint | Behavior |
|------------|----------|
| < 768px | Single column. Column rules become section dividers (`border-top` between columns). Footer stacks vertically, CTA button full-width. |

---

## 13. Testimonial Section (Editorial Pull-Quote)

### Layout
Centered single-column layout (max-width 720px). Designed as a magazine pull-quote — no decorative quote marks, no emoji, no glass box.

### Structure (top to bottom)
1. **Red rule**: 48px × 2px centered rule in `--primary` (0.5 opacity)
2. **Quote**: `--heading` → `--display-lg`, weight 700, -0.02em tracking, --ink. No italic, no giant decorative quote marks.
3. **Attribution**: Author (--caption, uppercase, --ink, weight 600) + dot divider + Role (--caption, uppercase, --ink-muted)
4. **Center rule**: 32px × 1px hairline divider
5. **Stats row**: Three stats in a horizontal row. Each: value (--display-md, weight 700, --ink) + label (--micro, uppercase, --ink-muted)

### Constraints
- No star emoji (★★★★★) — use numeric rating "4.9" instead
- No badge tags (SaaS, Enterprise, Startup)
- No glass box — stats are inline text, not cards

### Responsive
| Breakpoint | Behavior |
|------------|----------|
| < 768px | Left-aligned (no centered). Attribution stacks vertically. Stats row aligns left. |
| < 480px | Stats column (vertical stack). |

---

## 14. CTA Section (Contact)

### Layout
Two-column grid (`1.2fr 1fr`). Left: heading + contact info. Right: office + CTA + socials. No brutalist box, no glass card, no left accent bar.

### Left Column
- Eyebrow: "Get in Touch" in --primary, --caption font
- Heading: "Let's work together" in --display-lg
- Description: --body, --ink-secondary, max-width 400px
- Email: large link (`clamp(1.25rem, 2.5vw, --heading)`, weight 700, --primary). Underline animates from left on hover (`scaleX(0) → 1`, 0.5s ease-out-expo).
- Phone: --body, --ink-muted

### Right Column
- Office: Label (--micro, uppercase, --ink-muted) + Address (--body, --ink-secondary)
- CTA Button: "Start your project" — squared button, --primary background, --button font, arrow icon
- Socials: Text links separated by `/` dividers. Font: --caption, uppercase, --ink-muted → --primary on hover.

### Responsive
| Breakpoint | Behavior |
|------------|----------|
| < 1024px | Single column, side section moves below |
| < 480px | Button full-width, socials wrap |

---

## 15. Footer

### Layout
4-column grid (`1.5fr 1fr 1fr 1fr`). Gradient spotlight overlay (`--gradient-spotlight-warm` at 0.3 opacity). No watermark, no emoji, no "↑ Top" link.

### Columns
1. **Brand**: "Remark Studio" (--heading, weight 700) + tagline "Digital Solutions Agency" (--micro, uppercase, --ink-muted) + copyright
2. **Services**: 5 links (Website Dev, Voice AI, Chat Bots, CRM, Marketing)
3. **Company**: 4 links (Process, Capabilities, Contact, Blog)
4. **Connect**: Social links as column-stacked text links (no badge pills, no icon)

### Newsletter
- Row between grid and bottom bar. Top/bottom hairline borders.
- Heading: "Get insights delivered to your inbox" (--body, weight 600)
- Form: inline input + "Subscribe" button. No glass card. Input has bottom border, button is text-style.
- No submit handler wired yet (visual placeholder)

### Bottom Bar
- Email + phone on left (--micro, --ink-muted)
- "Available for projects" status on right with small red dot (5px, `--primary`, border-radius 50%)
- No "↑ Top" link. No ✦ emoji.

### Responsive
| Breakpoint | Behavior |
|------------|----------|
| < 1024px | 2-column grid (brand spans full width) |
| < 768px | Single column grid. Bottom bar stacks center. Footer socials move to row layout. |

---

## 16. Page Types & Shared Conventions

### Page Shell
Every page follows the same structure:
```tsx
<div className="page-wrapper">
  <Header />
  <main>
    {/* section-top-line sections */}
  </main>
  <Footer />
</div>
```

All page-level containers use `'use client'` for reveal animations. Pages use `useReveal(0.1)` for the wrapper ref.

### Page-Specific Sections

| Page | Sections | Status |
|------|----------|--------|
| `/` (Home) | Header, Hero, Narrative, ServicesGallery, Capabilities, Testimonial, CTA, Footer | ✅ Redesigned |
| `/services` | ServicesHero, ServicesGrid, ServicesCTA | 🔄 Extract inline code to components |
| `/process` | ProcessHero, ProcessTimeline, ProcessStats, ProcessCTA | 🔄 Extract inline code to components |
| `/about` | AboutHero, StorySection, ServicesList, TeamSection, ValuesSection, CTASection | 📅 Day 3-4 |
| `/career` | CareerHero, OpeningsList, JobDetail, PerksSection, CultureGallery | 📅 Day 4-5 |
| `/contact` | ContactHero, ContactForm, OfficeInfo | 📅 Day 5 |

### Data Files
Centralized in `data/`:
- `data/services.ts`: `services[]` (15 items for services page), `workItems[]` (15 items for gallery), `categories[]`
- `data/careers.ts`: `jobOpenings[]` (6 positions), `departments[]`, `perks[]` (6 items)

All section-specific data should be imported from `data/`, not defined inline in components.

---

## 17. Performance Budget (Non-Negotiable)

| Metric | Target |
|--------|--------|
| LCP | < 2.5s |
| CLS | < 0.1 |
| INP | < 200ms |
| Max WebGL instances | 1 per page (Dither canvas) |
| `backdrop-filter: blur()` | ≤ 14px |
| `filter: blur()` on moving elements | ❌ Forbidden |
| ScrollTrigger pins | Max 2 per page |
| `pointermove` handlers | Must rAF throttle |
| Images | Lazy load below fold, `loading="lazy"`, responsive `sizes` |

---

## 18. Anti-Cliché Audit Checklist

Every section is checked against:
- [x] No purple-pink-blue gradients
- [x] No `#0D1117` background
- [x] No gradient text fills on headings
- [x] No emoji as icons (✦, ◆, ★) — inline SVGs only
- [x] No floating badges ("New", "AI-Powered")
- [x] No CSS silhouette placeholders for products
- [x] No left-border accent cards
- [x] No rounded card + left-border accent combo
- [x] No perpetual float/bounce animations
- [x] No bento grid (Capabilities uses newspaper columns)
- [x] No count-up number animations
- [x] No glass metrics boxes (Testimonial uses inline stats)
- [x] No giant decorative quote marks
- [x] No transparent watermark text
- [x] No star emoji ratings — use numeric values
- [x] No social badge pills — use text links with `/` dividers
