# pagegloss.dev

The public website for Pagegloss, an iPad reader for PDFs, ebooks and pictures of pages.
Static HTML, CSS and one small script, served by GitHub Pages at the custom domain in `CNAME`.

- `index.html`: home page.
- `support/index.html`: support page (`/support/`).
- `privacy/index.html`: privacy policy (`/privacy/`).
- `style.css`: shared styles. System fonts only; light and dark palettes as CSS variables.
- `theme.js`: the Light / Dark switch. It sets `data-theme` on `<html>` and remembers the choice in the
  browser's localStorage. Without JavaScript the page is light, or dark when the system is.
- `images/`: App Store screenshots made with public-domain sample pages (resized, metadata removed) and
  the app icon as favicon and apple-touch-icon.

No analytics, no trackers, no external scripts, fonts or stylesheets, in keeping with the privacy policy.
Links are root-relative (`/support/`, `/privacy/`), so pages must be served from the domain root.

To check locally: `python3 -m http.server 8000` in this folder, then open http://localhost:8000/.
