# pagegloss.dev

The public website for Pagegloss, an iPad reader for PDFs, ebooks and pictures of pages.
Static HTML, CSS and one small script, served by GitHub Pages at the custom domain in `CNAME`.

- `index.html`: home page.
- `support/index.html`: support page (`/support/`).
- `privacy/index.html`: privacy policy (`/privacy/`).
- `zh-hant/`, `zh-hans/`, `ja/`: the same three pages in Traditional Chinese, Simplified Chinese and
  Japanese, with the same structure and pictures. Every page sets `lang`, lists all four versions as
  `hreflang` alternates (English is `x-default`), and has a language menu in the top bar. When English
  copy changes, change the three translations too; app button names follow the app's own translations.
- `style.css`: shared styles. System fonts only; light and dark palettes as CSS variables. Chinese and
  Japanese pages add the system's CJK fonts through `:lang()`.
- `theme.js`: the Light / Dark switch. It sets `data-theme` on `<html>` and remembers the choice in the
  browser's localStorage. Without JavaScript the page is light, or dark when the system is. It also
  closes the language menu (a plain `<details>`, which works without JavaScript) on an outside click or Escape.
- `images/`: App Store screenshots made with public-domain sample pages (resized, metadata removed) and
  the app icon at 48, 64, 96, 192 and 512 px plus the 180 px apple-touch-icon.
- `favicon.ico` (16, 32 and 48 px) and `site.webmanifest`: the site icon for browsers and search results.
  The icons are made from the app's 1024 px Forest icon, with metadata removed.

No analytics, no trackers, no external scripts, fonts or stylesheets, in keeping with the privacy policy.
Links are root-relative (`/support/`, `/privacy/`, `/ja/support/`), so pages must be served from the domain root.

To check locally: `python3 -m http.server 8000` in this folder, then open http://localhost:8000/.
