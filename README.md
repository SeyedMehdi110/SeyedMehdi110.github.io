# Larki Apps website

Official static website for **Larki Apps**, operated by **Seyed Tork Larki** (Australian sole trader).

This site is intended for:

- Google Play Console developer website
- Google Play privacy-policy URL
- App customer support
- Dun & Bradstreet D-U-N-S business verification context
- Listing additional mobile applications in future

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Home / developer overview |
| `apps.html` | Application catalogue |
| `qibla-and-prayer.html` | Qibla & Prayer product page |
| `privacy-policy.html` | Privacy Policy for Qibla & Prayer |
| `contact.html` | Support contact details |
| `styles.css` | Shared stylesheet |
| `script.js` | Mobile navigation and image fallbacks |

## Assets

Place the following files in the `assets/` folder:

- `assets/qibla_app_icon.png`
- `assets/qibla_screenshot_1.jpg`
- `assets/qibla_screenshot_2.jpg`
- `assets/qibla_screenshot_3.jpg`

If an image is missing, the page shows a professional placeholder and continues to work.

## Before publishing

1. Confirm the support email on the Contact and Privacy Policy pages is correct (`binarywhisper.apps@gmail.com`).
2. Add the app icon and screenshots to `assets/`.
3. Optionally set absolute Open Graph / canonical URLs once you know your final GitHub Pages URL.

## Preview locally

No build tools are required.

### Option A — open files directly

1. Open `index.html` in your browser (double-click or File → Open).
2. Relative links work for browsing between pages.

### Option B — local web server (recommended)

From this folder in PowerShell:

```powershell
# Python 3
python -m http.server 8080
```

Then visit `http://localhost:8080/`.

Or with Node (if installed):

```powershell
npx --yes serve -l 8080
```

## Publish with GitHub Pages

1. Create a new GitHub repository (for example `larki-apps-website`).
2. Push this folder to the repository default branch (`main`).
3. In GitHub: **Settings → Pages**.
4. Under **Build and deployment**, set Source to **Deploy from a branch**.
5. Choose branch `main` and folder `/ (root)`, then save.
6. Confirm the repository root includes `.nojekyll` so GitHub Pages serves the static files without Jekyll processing.
6. After a few minutes, your site will be available at a URL such as:
   - `https://<username>.github.io/<repository-name>/`
7. Use these URLs in Google Play Console:
   - Developer website: `https://<username>.github.io/<repository-name>/`
   - Privacy policy: `https://<username>.github.io/<repository-name>/privacy-policy.html`
   - Support: `https://<username>.github.io/<repository-name>/contact.html`

### Project-site subdirectory note

All internal links are relative (`index.html`, `apps.html`, `styles.css`, and so on), so the site works both:

- from the repository root on GitHub Pages, and
- from a project subdirectory such as `https://username.github.io/repo-name/`.

If you later host the site at a custom domain root, you can keep the same relative links.

## Adding a future app

1. Create a new product page (for example `my-new-app.html`) using `qibla-and-prayer.html` as a template.
2. Add a new card in `apps.html` inside `.card-grid` (there is an HTML comment marking the app-entry block).
3. Optionally feature the app on `index.html`.
4. Add a dedicated privacy policy page if the new app has different data practices, or extend the existing policy carefully and keep naming clear.
5. Add icons and screenshots under `assets/`.

## Technical notes

- Plain HTML, CSS and minimal JavaScript only
- No React, Node build step, npm dependency, analytics, tracking, advertising cookies, external fonts or database
- Australian English
- Keyboard-accessible navigation with a skip link
- Favicon uses the Qibla app icon when present

## Licence / ownership

Website content © 2026 Larki Apps. Operated by Seyed Tork Larki, Australia.
