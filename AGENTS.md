# AGENTS.md — Repo Working Agreement (Codex)

## Project
- A lightweight, static overtime-pay calculator website.
- Target: GitHub Pages hosting (static only).

## Primary goals
- Improve SEO and usability without adding backend.
- Keep the site fast and mobile-friendly.

## Constraints (must follow)
- Do NOT add new dependencies or build tools (no npm, no frameworks).
- Keep all pages working with relative paths (GitHub Pages).
- Do NOT change the overtime calculation logic unless explicitly requested.
- Avoid large refactors. Prefer minimal diffs.
- No external API calls required for core features.
- Keep bundle light: plain HTML/CSS/JS.

## Files & structure
- Main page: index.html
- Styles: style.css
- Logic: calc.js
- SEO: sitemap.xml, robots.txt
- Optional content pages: overtime-guide.html, overtime-faq.html, etc.

## SEO rules
- Every page must have:
  - <title> with primary keyword
  - meta description
  - h1 (single)
  - internal link(s) back to the calculator
- Prefer adding helpful text content below the tool.
- Update sitemap.xml when new pages are added.
- Keep robots.txt pointing to sitemap.

## UI/UX rules
- Mobile first. Inputs and buttons must be easy to tap.
- Avoid clutter. Keep forms simple.
- Result area must be readable and stable (no layout jumps).

## Testing / verification (required in every change)
After changes, provide:
1) A short summary of what changed and why
2) A diff or file-by-file patch
3) Manual test steps (3–5 items), including:
   - calculator works
   - links work
   - mobile layout looks fine

## Typical tasks Codex should handle
- Add content pages (guide/FAQ) + internal links + sitemap updates
- Add localStorage save/restore for inputs
- Improve copy/text for SEO (Japanese)
- Add simple accessibility improvements (labels, focus, contrast)
