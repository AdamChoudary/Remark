---
name: Remark Studio Design System
colors:
  surface: '#fff8f6'
  surface-dim: '#f1d3cf'
  surface-bright: '#fff8f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff0ee'
  surface-container: '#ffe9e6'
  surface-container-high: '#ffe2dd'
  surface-container-highest: '#fadcd7'
  on-surface: '#271815'
  on-surface-variant: '#5b403c'
  inverse-surface: '#3e2c29'
  inverse-on-surface: '#ffedea'
  outline: '#906f6a'
  outline-variant: '#e4beb8'
  surface-tint: '#b91d11'
  primary: '#730000'
  on-primary: '#ffffff'
  primary-container: '#9e0000'
  on-primary-container: '#ffa698'
  inverse-primary: '#ffb4a8'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e5e2e1'
  on-secondary-container: '#656464'
  tertiary: '#001da6'
  on-tertiary: '#ffffff'
  tertiary-container: '#002be3'
  on-tertiary-container: '#b0b8ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad4'
  primary-fixed-dim: '#ffb4a8'
  on-primary-fixed: '#410000'
  on-primary-fixed-variant: '#930000'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#dfe0ff'
  tertiary-fixed-dim: '#bcc3ff'
  on-tertiary-fixed: '#000c60'
  on-tertiary-fixed-variant: '#0028d4'
  background: '#fff8f6'
  on-background: '#271815'
  surface-variant: '#fadcd7'
  studio-crimson: '#9E0000'
  ink-black: '#0A0A0A'
  paper-white: '#FFFFFF'
  soft-gray: '#F5F5F7'
  stroke-subtle: '#E2E2E2'
typography:
  display-xl:
    fontFamily: Montserrat
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 80px
  section-gap: 120px
---

## Brand & Style
The design system is built upon the pillars of **Creative Authority** and **Modern Precision**. It is tailored for a high-end studio environment that balances the bold, expressive nature of a creative agency with the clinical efficiency of a technology firm.

The visual language follows a **Corporate Modern** approach with **Minimalist** influences. It prioritizes clarity through generous whitespace and a "high-fidelity" finish—achieved through crisp, micro-borders and deliberate, subtle depth. The emotional response should be one of trust, sophistication, and cutting-edge capability.

## Colors
The palette is anchored by **Studio Crimson**, a deep, sophisticated red derived from the logo, symbolizing passion and impact. This is paired with a monochromatic suite of neutrals to maintain a professional, high-end feel.

- **Primary (Studio Crimson):** Used for key actions, brand moments, and critical highlights.
- **Secondary (Ink Black):** Used for primary headings and high-contrast UI elements to provide a sense of "tech-forward" weight.
- **Neutral:** A range of whites and soft grays creates a layered surface system, ensuring the UI feels airy and premium.
- **Functional:** Success, Warning, and Error states should use desaturated versions of green and amber to ensure they do not compete with the brand red.

## Typography
The typography strategy uses a "Dual-Sans" pairing. **Montserrat** provides geometric strength and a modern architectural feel for headlines, while **Inter** offers unmatched legibility and a technical aesthetic for body copy and interface labels.

- **Headlines:** Use Montserrat with tight letter spacing for a high-end editorial look.
- **Body:** Inter is set with a generous line height (1.6) to improve readability and contribute to the overall sense of whitespace.
- **Labels:** Small labels should use uppercase with slight letter tracking to create a "captioned" feel common in studio portfolios.

## Layout & Spacing
This design system utilizes a **Fixed Grid** model for desktop to ensure a controlled, gallery-like presentation of creative work.

- **Grid:** 12-column grid with a maximum container width of 1440px. 
- **Rhythm:** An 8px linear scale is used for component-level spacing, but section-level spacing is intentionally "over-indexed" (120px+) to evoke a luxury, premium feel.
- **Breakpoints:**
  - **Mobile (< 768px):** 4 columns, 20px margins.
  - **Tablet (768px - 1024px):** 8 columns, 40px margins.
  - **Desktop (> 1024px):** 12 columns, 80px margins.

## Elevation & Depth
Depth is conveyed through **Low-contrast Outlines** and **Ambient Shadows**. Instead of heavy shadows, the system uses 1px strokes in `stroke-subtle` (#E2E2E2) to define component boundaries.

- **Tonal Layers:** Surfaces are differentiated by slight shifts from `paper-white` to `soft-gray` rather than deep shadows.
- **Shadows:** When used (e.g., on primary modals or floating buttons), shadows should be ultra-diffused: `0px 20px 40px rgba(0,0,0,0.04)`.
- **Interactions:** On hover, elements should slightly lift using a subtle transform and a marginally more defined shadow to provide tactile feedback.

## Shapes
To maintain a "crisp" and "polished" aesthetic, the system uses **Soft (0.25rem)** roundedness. 

- **Standard Elements:** Buttons, inputs, and small cards use a 4px (Soft) radius.
- **Large Elements:** Featured cards or hero containers may use `rounded-lg` (8px) to soften the layout without feeling bubbly.
- **Circular Elements:** Strictly reserved for status indicators or avatars.

## Components
Consistent high-fidelity detailing is achieved through the following rules:

- **Buttons:** 
  - *Primary:* Solid `studio-crimson` with white text. 4px radius. No shadow, but a 1px darker border for crispness.
  - *Secondary:* Transparent with a 1px `ink-black` border. Subtle 50ms transition on hover to solid black.
- **Input Fields:** 
  - Background: `paper-white`. 
  - Border: 1px `stroke-subtle`. 
  - Focus State: 1px `studio-crimson` border with a 2px soft red outer glow (halo).
- **Cards:** 
  - Used primarily for portfolio items. These should feature "full-bleed" imagery with a 1px internal stroke to ensure the image edges look sharp against the white background.
- **Chips/Tags:** 
  - Small, uppercase Montserrat text inside a `soft-gray` background with no border.
- **Checkboxes & Radios:** 
  - Minimalist 1px outlines. When selected, they fill with `studio-crimson` and a white checkmark/dot.