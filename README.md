# IELTS Precision & Progress

A fictional IELTS institute homepage crafted with React and Tailwind CSS. The experience embodies the **Precision & Progress** design system—balancing confident brand identity with data-driven storytelling for ambitious learners.

## Setup

```powershell
git clone <repo-link>
cd <repo-folder>
npm install
npm run dev
```

Use `npm run build` for production bundles and `npm run preview` to inspect the compiled output locally.

## Stack

- **React + Vite** for fast iterations and modern build tooling.
- **Tailwind CSS** with custom tokens for the IELTS Precision & Progress design system.
- **Type-safe design tokens** surfaced via `design-tokens.json` and mirrored in CSS variables.

## Design Choices

- Palette centres on Deep Royal Blue (trust), Emerald Green (growth), and Golden Amber (achievement), anchored by neutral grays for structure.
- Typographic pairing of Poppins for headings, Source Sans Pro for body text, and Merriweather italics for testimonials adds academic confidence.
- Interactive patterns—underline grows, button lift, sticky progress bar—reinforce the feeling of forward movement without playful distractions.
- Responsive 12-column grid with a 64px section rhythm ensures clarity from mobile to desktop.

## Key Sections

- **Navbar:** 72px sticky header with scroll-aware styling and CTA glow.
- **Hero:** Split layout with bold headline, supporting stats, and dual call-to-action.
- **Features:** Grid of animated cards highlighting core program strengths.
- **Testimonials:** Merriweather quotes paired with amber score badges for social proof.
- **Progress Bar:** Sticky emerald tracker that visualises scrolled progress.
- **Achievement Badges:** Amber-bordered pills celebrating community milestones.
- **Footer:** Deep Royal Blue closing section with resources, newsletter, and social links.

## Notes

- Fully responsive, mobile-first layout tested against Tailwind’s breakpoints.
- Animations respect `prefers-reduced-motion` and provide accessible focus outlines.
- Static front-end demo; hook into CMS or backend of your choice for production use.
