# Realcognita — Next.js + Tailwind CSS conversion

Converted from the static HTML/CSS/JS site to Next.js 14 (App Router) + Tailwind CSS.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000

Build for production: `npm run build && npm start`

## Structure

- **Routing**: every original `.html` page → a Next.js route in `app/` (e.g.
  `about-us.html` → `app/about-us/page.jsx` → `/about-us`). `index.html` → `app/page.jsx` (`/`).
  All internal links (`href="about-us.html"`, `href="index.html"`, etc.) were rewritten to
  Next.js-style paths (`/about-us`, `/`).
- **PageShell**: every route renders through one shared `src/components/PageShell.jsx`
  (Header + page content + Footer + page-specific scripts). Each `app/<slug>/page.jsx` is
  just its `metadata`, an `html` string, and a `scripts` array — no repeated boilerplate.
- **Header/Footer**: `src/components/Header.jsx` and `src/components/Footer.jsx` replace
  the old runtime injection from `js/components.js` (nav/mega-menu/preloader markup and
  footer/scroll-top/chatbot markup), rendered from `app/layout.js` on every page.
- **Design fidelity**: all original CSS (`css/main.css`, `css/inner-pages.css`,
  `css/premium-enhancements.css`, every `css/pages/*.css`) is carried over unchanged into
  `public/css/` and linked from the root layout — pixel-identical design. Tailwind is
  installed and wired up (`app/globals.css`, `tailwind.config.js` — colors/fonts/radii
  pulled from the site's original Tailwind config block) and layered underneath, ready for
  new work.
- **Behavior**: `js/main.js`, `js/theme.js`, `js/chatbot.js` (sliders, mega-menu, theme
  toggle, region switcher, contact modal, chatbot, scroll reveal, etc.) load globally via
  `next/script`. Page-specific scripts (`js/pages/blog.js`, `case_studies.js`,
  `our-team.js`, `testimonials.js`, `white-papers.js`) load only on their page. Inline
  `<script>` snippets from each original page are preserved as inline `next/script` blocks.
- **Assets**: `assets/` copied as-is into `public/assets/`.

## Fixes applied

- **`suppressHydrationWarning`** on `<html>` in `app/layout.js` — the theme/region
  anti-flash script sets `data-theme`/`data-region` on `<html>` before React hydrates,
  which is expected and safe, but React flags it as a mismatch unless told otherwise.
- **DOMContentLoaded / load timing bug (root cause of theme toggle + hero text not
  appearing)**: `main.js` and `theme.js` initialize on `document.addEventListener("DOMContentLoaded", ...)`
  (and `main.js` also on `window.addEventListener("load", ...)`). Those events fire once,
  right after the initial HTML parses — *before* Next.js hydrates and injects these scripts
  via `next/script`. The listeners were registering for events that had already fired and
  silently never running (the theme-toggle click handler and scroll-reveal-gated text were
  both wired up inside these blocks). Fixed with a small compatibility shim prepended to
  `public/js/main.js` and `public/js/theme.js`: if the page has already finished loading by
  the time the script runs, those callbacks fire immediately instead of waiting on an event
  that will never come again.
- **Theme CSS audit**: `css/main.css` re-themes the whole site by flipping `--color-*`
  custom properties under `[data-theme="dark"]`, and body text correctly inherits
  `var(--color-text)`. Checked every stylesheet for hardcoded hex values matching the
  theme's own text colors (a common bug that freezes text to one theme) — none found. The
  few hardcoded white-text rules in some `css/pages/*.css` files are deliberate (fixed
  dark-card sections that keep white text regardless of site theme), not bugs.

## Known limitations / next steps

- Page content is rendered via `dangerouslySetInnerHTML` (one HTML string per page) rather
  than hand-written JSX/components, to guarantee 1:1 design fidelity across all 23 pages
  without risking breakage from a manual re-type of ~11,000 lines of markup. It's real
  Next.js routing/architecture, but the interactive bits (sliders, forms, mega-menu,
  chatbot) still run as the original vanilla JS DOM code, not React state/hooks.
- If you want specific pages/sections turned into "real" React components (props, state,
  reusable pieces) instead of raw HTML blocks — e.g. the mega menu, the chatbot, or a
  particular page — say which ones and that can be done next, section by section.
- `next/script` re-runs page-init logic on every client-side navigation; for a page or two
  with one-time animations you may notice it re-trigger. Easiest fix if it bothers you:
  swap `strategy="afterInteractive"` for a `useEffect`-based init per page.
