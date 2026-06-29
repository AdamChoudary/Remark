<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:frontend-design-skills -->
# Frontend Design Skills — Mandatory Reference

Every frontend/UI/design task MUST activate ALL three skills below simultaneously. Read them as a combined framework — they are complementary, not alternatives.

---

## Skill 1: xiaopu-web-design (Spec-First Workflow)

Installed from `~/.claude/skills/xiaopu-web-design/SKILL.md`

**Core philosophy**: DESIGN.md spec first, code second. Never write UI code without a spec.

### Phase A — Understand requirements
- Accept flexible input: PRD, URL, screenshot, keywords, brand name, or any mix
- URL analysis: extract tokens via Playwright crawler (`scripts/crawl_website.py`), fall back to `extract_design_tokens.py`, then fall back to manual curl
- **Motion audit** for scroll-driven reference sites: record trigger, driver, elements, effect, timing per block
- No reference → use `references/style-seeds.md` (10 preset directions), confirm with user
- **Interaction level** is mandatory: L1 (static+micro), L2 (scroll reveal/parallax), L3 (pin/scrub/3D/cursor)

### Phase B — Produce DESIGN.md (9 sections, never skip)
1. Visual Theme & Atmosphere
2. Color Palette & Roles (CSS vars with RGB aux values)
3. Typography Rules (Google Fonts URL, scale table, forbidden fonts)
4. Component Stylings (all states: default/hover/active/focus/disabled)
5. Layout Principles (grid, spacing gradient, container widths)
6. Depth & Elevation (shadow system)
7. Animation & Interaction (full code per interaction level)
8. Do's and Don'ts (≥8 items, ≥5 don'ts)
9. Responsive Behavior (breakpoints, touch targets, collapse strategy)

L2+ MUST include `prefers-reduced-motion` fallback. Confirm with user before Phase C.

### Phase C — Generate code from spec
- All colors via CSS variables — **zero hardcoded hex**
- Fonts strictly per Typography Rules
- Every interactive element has hover + focus states
- Images: no solid-color placeholders (use Unsplash, reference URLs, or user assets)
- Icons: existing project lib > lucide-react > inline SVG (no emoji as icons unless brand does)
- Audit: spec compliance, reference diff, responsive (mobile+desktop), quality checklist

### Landing Page Hard Rules
- **3 "wow" moments** in fixed positions: Hero (load impact), first scroll (hook), listing area (non-uniform layout) — plus 1 clever detail
- **Performance redlines**: max 1 WebGL per page, pause when offscreen via IntersectionObserver. No `filter: blur()` on moving elements. `backdrop-filter: blur()` ≤ 14px. Max 2 ScrollTrigger pins. `pointermove` must rAF throttle. Custom cursors only for design/creative sites.
- If scroll-jacking is needed, use Lenis; otherwise native `scroll-behavior: smooth`
- **Every 1-2 screens must have a signature moment** — 3 consecutive screens of only fade reveal is a fail

---

## Skill 2: garden-skills-web-design-engineer (Pixel-Intentional Design)

Installed from `~/.claude/skills/garden-skills-web-design-engineer/SKILL.md`

**Core philosophy**: "The bar is stunning, not functional. Every pixel is intentional." Respect design systems while daring to innovate.

### Step 0 — Verify facts before anything
When the task names a specific product, brand, SDK, or event you're not 100% sure about, **WebSearch first**. Never assert from training data. If search is ambiguous → ask the user.

### Workflow
1. **Understand requirements** — don't mechanically ask 10 questions. Enough info? Build. Vague? Probe lightly. Genuinely ambiguous? Switch to Design Direction Advisor (3 differentiated directions from different schools).
2. **Gather design context** (priority): user-provided resources > existing product pages > industry best practices > named anchor (read single recipe file from `references/style-recipes/<anchor>.md`) > starting from scratch
3. **Brand asset protocol**: Logo (SVG/PNG, both variants) is non-negotiable. Real product imagery for physical products, real UI screenshots for digital. Color hex alone is not a brand. Source assets from official press kit > brand site > App Store > honest placeholder. Never use CSS silhouettes for real products. If you can't source a logo → stop and ask.
4. **Articulate 4 positioning questions** before choosing a system: Narrative role, Viewing distance, Visual temperature, Capacity check
5. **Declare design system** before coding: anchor/recipe, color palette, typography, spacing, border-radius, shadow hierarchy, motion style. Load only the recipe file you're using. **Checkpoint: wait for confirmation**.
6. **Show v0 early** — placeholders + key layout + tokens. Let user course-correct. **Checkpoint: wait before continuing**.
7. **Full build** with all states. **Checkpoint on non-trivial decisions**.
8. **Verification** via Pre-delivery Checklist

### Design Principles
- **Anti-cliché**: Avoid purple-pink-blue gradients, rounded card + left-border accent, emoji as icons, CSS silhouette product imagery, Inter/Roboto/Arial as display, cyber-neon on `#0D1117`, fabricated stats. The only exception: the brand spec uses it.
- **Emoji rules**: No emoji by default. Only use if the brand itself uses them. Never as icon substitutes.
- **Placeholder philosophy**: Missing icon → `[icon]` square. Missing avatar → initial-letter circle. Missing image → aspect-ratio placeholder card. Missing data → ask. Missing logo → stop and ask. Placeholder signals "real material needed." A fake signals "I cut corners."
- **Aim to stun**: 4-6× ratio between h1 and body text. Color fills, textures, blend modes, advanced CSS (`backdrop-filter`, `mix-blend-mode`, `mask`). CSS transforms/opacity for 60fps.
- **No filler content**. Whitespace is design. Don't add sections without asking.

### React + Babel inline rules
- Never use `const styles = { ... }` — namespace each file's style objects
- Separate `<script type="text/babel">` blocks don't share scope — use `Object.assign(window, { Component })` to share
- No `scrollIntoView` — use `element.scrollTop` or `window.scrollTo`

### Tweaks panel
Floating bottom-right panel for live parameter adjustment: theme color, font size, dark mode, spacing, component variants, animation toggles. Hidden when closed. Add 1-2 creative toggles by default.

### Pre-delivery Checklist (all must pass)
- [ ] Step 0 ran for named product/brand
- [ ] Branded work: `brand-spec.md` exists, logo is real, product imagery is real, UI screenshots are real
- [ ] Browser console: no errors, no warnings
- [ ] Renders correctly on target viewports
- [ ] Interactive components include hover/focus/active/disabled/loading states
- [ ] No text overflow; `text-wrap: pretty`
- [ ] All colors from declared design system — no rogue hues
- [ ] No `scrollIntoView`, no `const styles = {...}`
- [ ] No AI clichés unless brand spec uses them
- [ ] No filler/fabricated data
- [ ] Visual quality at Dribbble/Behance showcase level

---

## Skill 3: claudedesignskills (Performance-First Modern Patterns)

Installed from `~/.claude/skills/claudedesignskills/SKILL.md`

**Core philosophy**: Design decisions prioritize Core Web Vitals. LCP < 2.5s, INP < 200ms, CLS < 0.1.

### Design Principles (2024-2025)

**1. Performance-First**
- Defer non-critical animations until after page load
- Only CSS transforms/opacity for animations (GPU-accelerated — no top/left/width/height)
- Lazy load images, videos, 3D content
- Progressive enhancement: core content works without JS

**2. Bold Minimalism**
- `clamp()` for fluid typography (`--font-size-xs` through `--font-size-3xl`)
- Limited palettes (3-5 colors), OKLCH color space for perceptual uniformity
- WCAG AAA contrast: 7:1 normal text, 4.5:1 large text

**3. Micro-Interactions**
- Hover: scale (1.05-1.1x), color transitions (200-300ms), shadow depth
- Button press: scale down 0.95x with spring physics
- Loading: skeleton screens over spinners, blur-up for images, staggered reveals
- All interactive elements: hover + focus + active + disabled states

**4. Scrollytelling patterns**
- Scroll-triggered reveals (fade, slide, scale, clip-path)
- Scroll-linked: parallax, horizontal sections, pinned scrub, 3D tied to scroll
- Progress indicators: reading bar, step guides, SVG path following scroll

**5. Cursor UX** — only for design/creative sites
- CSS transforms only (no top/left), rAF for JS cursors
- Disable on mobile/touch devices: `matchMedia('(hover: hover)')`
- Respect `prefers-reduced-motion`

**6. Glassmorphism (modern)**
```css
.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}
```

**7. Depth system**
```css
--elevation-1: 0 1px 3px rgba(0,0,0,0.12);
--elevation-2: 0 4px 8px rgba(0,0,0,0.15);
--elevation-3: 0 8px 16px rgba(0,0,0,0.18);
--elevation-4: 0 16px 32px rgba(0,0,0,0.2);
```

### Accessibility (mandatory)
- `prefers-reduced-motion` reduces all animations to 0.01ms
- All interactive elements keyboard accessible with visible `:focus-visible` indicators
- Touch targets ≥ 44×44px with ≥ 8px spacing
- Semantic HTML with proper heading hierarchy and landmark regions
- Screen reader support: `aria-labels`, `aria-live` regions

### Performance Optimization Checklist
- Use CSS transforms + opacity only for GPU-accelerated animations
- `will-change` sparingly (memory cost) — set during animation, remove after
- Inline critical CSS above-the-fold, defer non-critical
- Async/defer JS, preload fonts and hero images
- Responsive images with `<picture>` (AVIF > WebP > JPEG), `loading="lazy"`
- Code-split with dynamic imports, route-based splitting
- Test on real mobile devices, not just simulators

### Common Patterns Reference
- **Immersive Hero**: full viewport, subtle 3D or animated gradient, fluid typography, parallax exit
- **Horizontal Scroll Gallery**: GSAP ScrollTrigger pin + scrub, lazy load images, parallax within cards
- **Staggered Content Reveals**: Framer Motion variants with `staggerChildren: 0.1`, `whileInView`
- **Animated Data Visualization**: count-up on scroll into view, staggered reveals, animated chart reveals
- **Page Transitions**: View Transitions API (progressive) > Barba.js + GSAP > Framer Motion AnimatePresence
- **Interactive Cursor**: `matchMedia('(hover: hover)')` gate, rAF loop, GSAP for scale morph on hover targets
- **3D Product Viewer**: React Three Fiber with OrbitControls, auto-rotate, material variants
- **Loading States**: skeleton screens with shimmer animation, blur-up progressive images

### Anti-Patterns (avoid)
- Over-animation: if you can't explain why an animation exists, remove it
- Ignoring mobile performance: test on real devices, reduce complexity on mobile
- Missing fallbacks: progressive enhancement, feature detection before modern APIs
- Accessibility oversight: test keyboard-only, test with screen reader, check `prefers-reduced-motion`
- Ignoring loading states: skeleton screens, reserved space, smooth transitions
- Scroll hijacking: enhance scroll, don't replace it. Never disable native scroll entirely

---

## Combined Workflow — How They Fit Together

When starting ANY frontend/ui task:

1. **Verify facts** (skill 2 Step 0) — WebSearch any named product/brand/SDK
2. **Understand requirements** (skill 1 Phase A + skill 2 Step 1) — flexible input, probe only as needed
3. **Produce DESIGN.md** (skill 1 Phase B × 9 sections) — this IS the spec
4. **Declare design system** (skill 2 Step 3) + **performance-first tokens** (skill 3) — colors in OKLCH, fluid clamp() typography, elevation hierarchy, glass tokens
5. **Show v0** (skill 2 Step 4) — placeholders + layout + tokens, let user course-correct
6. **Full build** (skill 1 Phase C + skill 2 Steps 5-7 + skill 3 patterns) — all states, micro-interactions, accessibility, performance
7. **Verify** (skill 1 audit + skill 2 checklist + skill 3 performance/accessibility checks)

### Non-negotiable on every component
- All colors via CSS variables — zero hardcoded hex
- `:focus-visible` + `:active` + hover on every interactive element
- `prefers-reduced-motion` fallback
- Touch targets ≥ 44×44px
- No `filter: blur()` on animated/moving elements
- CSS transforms + opacity for GPU animation (never top/left/width/height)
- No emoji as icons (unless brand does)
- No AI clichés (purple-pink gradients, left-border accent cards, Inter/Roboto as display, fabricated stats)
<!-- END:frontend-design-skills -->
