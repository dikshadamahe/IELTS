# 🎓 IELTS Precision & Progress – Design System Documentation

**Version:** 1.0  
**Purpose:** Provide a modern, aspirational design system for the fictional IELTS Institute so product teams (human or AI) can deliver consistent, accessible experiences across web and native surfaces.

---

## 1. 🎯 Brand Principles

| Principle  | Translation in UI                                                                 |
| ---------- | ---------------------------------------------------------------------------------- |
| Confidence | Commanding royal blue surfaces, bold typographic hierarchy, decisive CTAs          |
| Clarity    | Spacious layouts, restrained colour usage, intuitive navigation and messaging      |
| Progress   | Motion reinforces forward momentum (progress trackers, hover lifts, badge flips)   |

**Target audience:** Ambitious students & early-career professionals aged 18–35.

---

## 2. 🎨 Colour System

### Core Palette

| Token              | Hex      | RGB          | Usage                                             |
| ------------------ | -------- | ------------ | ------------------------------------------------- |
| `primary`          | `#1A2B6D`| 26, 43, 109  | Hero shells, headings, nav states, form rails     |
| `secondary` (CTA)  | `#1DB954`| 29, 185, 84  | Primary buttons, highlights, active indicators    |
| `accent` (Success) | `#FFB547`| 255, 181, 71 | Achievement badges, stat highlights, score chips  |
| `neutral-light`    | `#F4F6F8`| 244, 246, 248| Page backgrounds, cards, dashboard shells         |
| `neutral-medium`   | `#D9DEE2`| 217, 222, 226| Dividers, inactive steps, card borders            |
| `neutral-dark`     | `#101214`| 16, 18, 20   | Body copy on light, footer backgrounds            |
| `slate`            | `#273043`| 39, 48, 67   | Secondary text, icons, muted labels               |

#### ✅ Do’s
- Use Royal Blue (`primary`) as the anchor colour for hero areas and typography.
- Reserve Emerald (`secondary`) for CTAs, key indicators, and selection states.
- Deploy Amber (`accent`) sparingly to signify achievement, progress, and success metrics.
- Balance layouts with neutrals to maintain legibility and harmony.

#### ❌ Don’ts
- Avoid amber text on light backgrounds below 16px (contrast breach).
- Never flood large surfaces with Emerald; keep it for moments of action.
- Do not mix more than one highlight colour within a single component.

All tokens are exposed as CSS variables in `src/index.css` and surfaced in Tailwind under `theme.extend.colors`. A machine-readable snapshot lives in `src/assets/design-tokens.json`.

---

## 3. ✍️ Typography

### Font Families

| Role         | Family options (preferred → fallback)              |
| ------------ | -------------------------------------------------- |
| Headings     | Poppins → Montserrat → system sans                 |
| Body         | Source Sans Pro → Inter → system sans              |
| Quotes/Accent| Merriweather (italic) → Georgia → serif            |

Fonts are loaded from Google Fonts via `index.html` and wired into Tailwind (`fontFamily.headings/body/accent`).

### Type Scale (base 16px)

| Style       | Token     | Weight | Size | Line-height | Usage                       |
| ----------- | --------- | ------ | ---- | ----------- | --------------------------- |
| H1          | `text-h1` | 700    | 48px | 1.2         | Hero headlines              |
| H2          | `text-h2` | 600    | 36px | 1.3         | Section titles              |
| H3          | `text-h3` | 600    | 28px | 1.3         | Card titles                 |
| H4          | `text-h4` | 500    | 22px | 1.4         | Subheads, footer headings   |
| Body        | `text-body`| 400   | 16px | 1.6         | Paragraph copy              |
| Small       | `text-small`| 500  | 14px | 1.5         | Nav links, labels           |
| Quotes      | `text-quote`| 400i | 18px | 1.6         | Testimonials, pull quotes   |

**Usage rules**
- H1/H2 always in Poppins bold; H3/H4 may fall back to Montserrat for contrast.
- Maintain generous line height (≥1.4) in body text for readability.
- Merriweather italic strictly for testimonials and inspirational quotes.

---

## 4. 📐 Layout & Spacing

### Grid
- Container max-width: **1200px** (`max-w-content-bleed`).
- Responsive grid: 12 columns with a 24px gutter. Tailwind `container` is centred with `padding: 1rem`.

### Spacing scale (4px base)

| Token | Value | Usage examples                |
| ----- | ----- | ----------------------------- |
| `xs`  | 4px   | Icon padding, fine separators |
| `s`   | 8px   | Chips, tight vertical rhythm  |
| `m`   | 16px  | Card padding, text blocks     |
| `l`   | 24px  | Component spacing             |
| `xl`  | 32px  | Section breathing             |
| `xxl` | 48px  | Hero secondary spacing        |
| `section-gap` | 64px | Section vertical rhythm |

### Breakpoints
- **Mobile:** 0–639px – stacked columns, full-width CTAs.
- **Tablet:** 640–1023px – 2-column grids, sticky progress sections remain full width.
- **Desktop:** 1024–1439px – 3 to 4-column compositions, hero split view.
- **Wide:** 1440px+ – Additional whitespace, hero illustration scaling.

Custom names (`tablet`, `desktop`, `wide`) are available alongside Tailwind defaults for semantic breakpoints.

---

## 5. 🧩 Components

### 5.1 Navbar
- **Structure:** Logo left, navigation centre, CTA cluster right.
- **Behaviour:** Transparent at top; morphs to solid `primary` with blur + shadow after 32px scroll.
- **Interactions:** Nav links use `group-hover` underline that animates outwards; CTA buttons animate with scale and colour darkening.
- **Height:** 64px desktop / 56px mobile (`h-16` with `py-4` wrapper). Sticky header is implemented in `components/Navbar.tsx`.

### 5.2 Hero section
- Split layout: copy (left) + animated illustration (right).
- Background blends `bg-hero-gradient` with subtle radial highlights (`bg-hero-pattern`).
- Primary CTA (`secondary` button) and secondary outline CTA align horizontally on tablet+.
- Stats grid gives social proof; hero illustration floats using `animate-float` keyframe.

### 5.3 Feature cards
- Content order: Icon → Title → Copy → Link CTA.
- Styles: Rounded 24–32px corners, light border, `shadow-card` + `hover:shadow-glow`.
- Hover effect: Lift (`translate-y`) + amber gradient accent.

### 5.4 Testimonials
- Layout: Responsive grid (1 → 3 columns). Each card features circular avatar, amber score chip, Merriweather blockquote.
- Supports emoji or SVG avatar sources.
- Accessible semantics via `<figure>`/`<figcaption>`.

### 5.5 Sticky progress bar
- Lives beneath the navbar and remains `sticky` at `top-16`.
- Scroll-driven width update via `scroll` listener in `ProgressBar.tsx`.
- Segments (Study → Practice → Test → Success) highlight with emerald fill when target threshold reached.

### 5.6 Achievement badges
- Circular badge flips on hover/focus using custom 3D CSS helpers (`.badge-card*`).
- Front face shows icon + title; back face reveals band score with amber glow.

### 5.7 Footer
- Charcoal background with four-column grid: About, Courses, Resources, Newsletter.
- Newsletter CTA uses pill form + emerald submit button.
- Social icons minimal, shift to emerald on hover.

Component source lives under `src/components/` and matches the Tailwind contracts described above.

---

## 6. ✨ Interaction Patterns

| Pattern           | Implementation                                                                 |
| ----------------- | ------------------------------------------------------------------------------ |
| Hover animations  | Buttons scale to 1.05 & darken (`transition ease-brand 200–300ms`). Cards lift with glow. |
| Nav underline     | `::after` style executed via Tailwind `group-hover` to grow from centre.        |
| Sticky progress   | `sticky` container tracks scroll progress and updates gradient fill width.     |
| Badge flip        | `.badge-card-inner` rotates 180° on hover/focus, revealing score.              |
| Focus treatment   | High contrast outlines using emerald for keyboard accessibility.               |

---

## 7. 🎬 Motion & Animation

- **Timing function:** `cubic-bezier(0.4, 0, 0.2, 1)` (exposed as `ease-brand`).
- **Durations:** 200–300 ms for hover/press states; 600–800 ms for scroll or hero pattern shifts.
- **Use cases:**
	- Smooth navbar transition & shadow on scroll.
	- Hero illustration floating loop (6 s).
	- Progress bar fill animation tied to scroll.
	- Achievement badge flip (500 ms) on hover/focus.

---

## 8. 🛠 Implementation Notes

- **Tokens:** CSS variables declared in `src/index.css`; mirrored in Tailwind config and `design-tokens.json`.
- **Tailwind setup:** Custom colours (`primary`, `emerald`, `amber`, `charcoal`), fonts, spacing, shadows, keyframes, and gradients added under `theme.extend` in `tailwind.config.js`.
- **Responsive behaviour:** Mobile-first stacking with `grid`/`flex` breakpoints at `tablet` and `desktop`.
- **Accessibility:**
	- Colour contrast meets WCAG AA (emerald on charcoal limited to icons/CTA text ≥14px).
	- Visible focus outlines for interactive elements.
	- Semantic HTML elements for testimonials (`figure`), navigation (`nav`), and progress semantics.
- **Assets:** All SVG artwork resides in `public/assets/` (logo, hero illustration, resource diagrams, profile placeholders).
- **Fonts:** `Poppins`, `Montserrat`, `Source Sans Pro`, `Inter`, `Merriweather ital` loaded via Google Fonts with weights 400–700.

---

## 9. 📦 Deliverables Checklist

- [x] **Fonts** – Poppins, Inter, Merriweather, Montserrat, Source Sans Pro.
- [x] **Tokens** – Colours, typography, spacing in CSS variables + JSON (`src/assets/design-tokens.json`).
- [x] **Components** – Navbar, Hero, Feature Cards, Testimonials, Sticky Progress Bar, Achievement Badges, Footer.
- [x] **Assets** – SVG logo, hero illustration, resource diagram, student avatars (see `public/assets`).
- [x] **Motion** – Keyframes (`float`, `shimmer`, `flip`) defined in Tailwind for reuse.

---

For implementation details, review the referenced files in `src/components/` and consult Tailwind utility contracts in `tailwind.config.js`.


