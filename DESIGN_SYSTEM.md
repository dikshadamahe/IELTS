# 📘 IELTS Precision & Progress — Design System

Version 2.0 · Updated September 27, 2025  
Purpose: Align every touchpoint of the IELTS Precision & Progress experience with a confident, academic, modern brand that inspires measurable improvement.

---

## 1. Brand Identity

**Tone of voice** — Confident, academic, modern, professional. Messaging should feel like guidance from a trusted mentor who has seen hundreds of successful IELTS journeys.

**Target audience** — Students and young professionals (18–35) preparing for IELTS Academic or General Training while balancing study, work, and relocation goals.

**Core concept** — *Precision + Progress*. Interfaces must communicate structure, clarity, and ambition. Every touchpoint should reassure learners that their preparation is data-driven and momentum-building.

Key translation in UI:

- Precision → clean layouts, tight typographic hierarchy, crystal-clear navigation.
- Progress → motion and metrics that show forward movement (progress bars, glowing badges, demonstrable stats).
- Confidence → bold blue headings, decisive CTAs, crisp interactions with no playful wobble.

---

## 2. Color System

### Primary palette

| Token | Name | HEX | RGB | Meaning | Primary usage |
| --- | --- | --- | --- | --- | --- |
| `color-primary` | Deep Royal Blue | `#1A2B6D` | 26, 43, 109 | Trust & authority | Headings, hero backgrounds, nav states |
| `color-emerald` | Vibrant Emerald Green | `#1DB954` | 29, 185, 84 | Growth & action | Links, CTAs, progress indicators |
| `color-amber` | Warm Golden Amber | `#FFB547` | 255, 181, 71 | Achievement & premium | Achievement badges, highlights |

### Neutral palette

| Token | Name | HEX | RGB | Usage |
| --- | --- | --- | --- | --- |
| `color-gray-light` | Cool Gray Light | `#F4F6F8` | 244, 246, 248 | Background surfaces, section fill |
| `color-gray-medium` | Cool Gray Medium | `#D9DEE2` | 217, 222, 226 | Borders, dividers, subtle outlines |
| `color-charcoal` | Charcoal Black | `#101214` | 16, 18, 20 | Body copy, iconography, max contrast |

> **Usage rules**  
> - Backgrounds default to white or `color-gray-light`.  
> - Body text must use `color-charcoal`. H1–H3 can use `color-primary`; interactive links and CTAs use `color-emerald`.  
> - Use `color-amber` sparingly for badges or key highlights; never cover large surfaces with it.  
> - Avoid combining more than two brand colors in the same region; lean on neutrals for balance.  
> - Ensure contrast ratios stay AA compliant (emerald text must be ≥16px on light backgrounds).

Tokens are available as CSS variables (`--color-*`) in `src/index.css`, mirrored in Tailwind via `tailwind.config.js`, and exported as JSON in `src/assets/design-tokens.json`.

---

## 3. Typography

### Font stack

- **Headings:** Poppins (preferred) → Montserrat → system sans. Bold, geometric, confident.
- **Body copy:** Source Sans Pro → Inter → system sans. Optimised for clarity and long-form reading.
- **Accents & quotes:** Merriweather italic → Georgia → serif. Used only for testimonials, quotes, highlighted statements.

Fonts are streamed from Google Fonts in `index.html` and mapped in Tailwind under `fontFamily.headings`, `fontFamily.body`, and `fontFamily.accent`.

### Type scale (desktop → mobile)

| Style | Weight | Desktop size | Mobile size | Color guidance | Usage |
| --- | --- | --- | --- | --- | --- |
| H1 | 700 | 48px | 32px | `color-primary` | Hero headlines |
| H2 | 600 | 36px | 28px | `color-primary` | Section headings |
| H3 | 500 | 28px | 22px | `color-primary` | Card titles, sub-sections |
| Body Large | 400 | 18px | 16px | `color-charcoal` | Lead paragraphs |
| Body Small | 400 | 14px | 12px | `color-charcoal` or `color-gray-medium` | Nav links, metadata |
| Quotes (accent) | 400 italic | 18px | 16px | `color-charcoal` or `color-emerald` accent | Testimonials |

Usage rules:

- Headings must always use the Poppins stack; never render Merriweather in a heading level.  
- Line-height across body copy: 1.4–1.6 for readability.  
- Reserve bold for headings and key emphasis; avoid all-caps body paragraphs.  
- Quote blocks use Merriweather italic with generous padding and accent color.

---

## 4. Layout & Grid

- **Grid system:** 12-column responsive grid capped at 1200 px, centred via Tailwind `container`.  
- **Gutters:** Minimum 24 px between columns on desktop; stack to full-width on mobile.  
- **Section padding:** 64 px top/bottom on desktop (`py-section-gap`), 32 px on mobile.  
- **Card padding:** 24 px internal padding, radius 16 px or greater.  
- **Spacing scale (px):** 4, 8, 16, 24, 32, 48, 64. Utilities exposed as Tailwind spacing tokens (`space-4`, `space-6`, etc.).  
- **Container behaviour:** Always centre align key sections, leaving ample whitespace to reinforce clarity.

---

## 5. Components

### Navbar

- Height 72 px. Logo left, nav links right (max five).  
- Transparent at page top; on scroll, shift to solid Deep Royal Blue with subtle blur and shadow.  
- Links use Body Small typography, uppercase tracking, and emerald underline that expands from centre in 0.2 s.  
- CTA: pill-shaped, emerald background, white text, amber glow on hover.

### Hero section

- Split layout: text left, illustration/right asset. White or subtle blue→gray gradient background.  
- H1 uses Poppins Bold Deep Royal Blue; supporting copy in Body Large.  
- Primary CTA button: solid emerald. Secondary CTA: outline blue.  
- Include social proof stats wherever possible.

### Feature cards

- Display three or four cards in a responsive grid.  
- White background, 16 px radius, `shadow-sm` default.  
- Icons in emerald circle with amber accent, positioned above heading.  
- Hover: translateY(-4px), `shadow-lg`, emerald border glow.

### Testimonials

- Carousel or grid of two-to-three cards.  
- Section background uses Cool Gray Light.  
- Quote copy uses Merriweather italic; name/title in Poppins small caps.  
- Include oversized, semi-transparent emerald quote mark for accent.  
- Score badge leverages amber chip treatment.

### Footer

- Background Deep Royal Blue.  
- Text white, Body Small scale.  
- Links adopt emerald underline grow on hover.  
- Include contact info, quick links, and achievement badges (e.g., “500+ Students Succeeded”) when space permits.

---

## 6. Interaction Patterns

- **Hover animations** — Links: underline grows from centre. Buttons: subtle scale (1.03) and shadow pop. Cards: lift + emerald/amber glow.  
- **Sticky progress bar** — Slim emerald bar sits directly beneath the navbar, tracking scroll progress across sections; width updates smoothly on scroll.  
- **Achievement badges** — Pill/circular badges with amber border. On hover/focus, show subtle glow; never use playful bounce.  
- **Motion principles** — Keep timing 200 ms ease-out for hover states, 400 ms+ for scroll-based transitions. Effects should feel refined, not gamified.  
- **Accessibility** — Ensure focus states are visible (emerald outline). Animations must respect reduced-motion preferences.

---

## Implementation quick links

- Tokens & utilities in `src/index.css`, `tailwind.config.js`, `src/assets/design-tokens.json`.  
- Core components inside `src/components/`.  
- Motion helpers (`ease-brand`, `animate-float`) defined in Tailwind config.  
- Refer to `README.md` for setup instructions and quick start.

This document should guide designers, engineers, and content strategists to build cohesive experiences that feel structured, aspirational, and unmistakably IELTS Precision & Progress.


