## Style Guide (Monorepo)

### Tokens

- Define tokens as CSS variables in `scss/abstracts/_variables.scss`.
- Tailwind consumes variables via `theme.extend`.
- Dark mode: toggle the `dark` class on the root; variables override under `:root.dark`.

### Layering Order

1. abstracts → 2) tailwind base → 3) base → 4) tailwind components → 5) layout/components → 6) tailwind utilities → 7) themes

Entry: `packages/styles/scss/index.scss` respects this order.

### Role Split

- Tailwind: layout, spacing, typography scale, responsive, state variants, dark mode.
- SCSS: complex component skins, animations, one-off advanced selectors.
- Avoid styling the same property in both Tailwind and SCSS for the same element.

### Resets

- Prefer Tailwind Preflight. If SCSS reset is used, do not enable Preflight.

### Tailwind Config

- Shared config: `libs/tailwind-config/tailwind.config.ts`.
- Include content globs for `apps`, `packages`, `libs`.
- Use CSS variable-backed colors, spacing, radii.

### Safelist / Dynamic Classes

- When generating class names dynamically, add a safelist in the app’s Tailwind config.

### Accessibility

- Do not override focus-visible styles with SCSS skins.

