# Sylvon James — Portfolio & Interactive Design Showroom

A fully responsive, deploy-ready portfolio inspired by the *design principles* of roshis.dev: big typography, dark immersive atmosphere, thoughtful interactions, strong project storytelling. All original code and visuals here are independently made.

## What works

- Responsive homepage with hero animation, featured work, skills, about and contact.
- Dark/light mode and remembered theme preference.
- Project-overview dialogs, functional menu, scroll animation, and copy-email control.
- Design showroom with functional category filters.
- Full-screen live preview viewer for every showroom card, with desktop/tablet/mobile sizes and a "next concept" action.
- Three **working illustrative design demos** hosted *within* the site:
  - **Horizon Finance** — interactive dashboard (time range, balance demo, navigation).
  - **Form & Form** — storefront (product categories, add/remove cart items, cart drawer).
  - **Morrow** — wellness app (mood check-in, habits, journal, breathing exercise).
- SEO metadata, accessible buttons/labels, reduced-motion support.
- No build step, frameworks, database, or API keys required for the portfolio and included demos.

**Important:** The three built-in demos are original example designs, **not** actual Figma files. To feature the owner's real Figma designs, edit `site-data.js` with their Figma prototype URLs. A Figma prototype can run in the embedded viewer where Figma allows embedding; a design-only Figma file is not automatically converted into executable/deployed website code. If you build and deploy a Figma design separately, set its `liveUrl` to the deployed website so visitors can explore that functional implementation.

## Run locally

### Option A — Node.js (recommended)

Open a terminal in this folder and run:

```bash
npm run dev
```

Then open **http://localhost:3000**. This project has no npm dependencies.

### Option B — Python

Open a terminal in this folder and run:

```bash
python -m http.server 3000
```

Open **http://localhost:3000**.

### Option C — VS Code

Install the Live Server extension and choose **Open with Live Server** on `index.html`.

The JS uses ES modules; **do not** open the index page directly via `file://`.

## Personalize your portfolio

Edit **`site-data.js`**:

- `name`, `fullName`, `role`, `hero...`, `about`, `availability`
- `email`: currently `hello@yourdomain.com` **placeholder; replace it before publishing**
- `github`, `linkedin`, `resumeUrl`
- `projects`: edit real titles, summaries, tags; add `url` for working deployed projects
- `showroom`: add/edit designs, Figma links, and live demo URLs
- `skills`

The existing sample project summaries are editable starting content; verify all content and credentials before publication. The design showroom demo apps represent fictional brands for demonstration only.

### Add a Figma prototype (interactive embed)

1. In Figma, share your **prototype**. Ensure viewing permissions allow portfolio visitors to view it.
2. Put its URL in a showroom entry in `site-data.js`. Example:

```js
{
  id: 'my-figma-design',
  number: '04',
  name: 'My Figma concept',
  subtitle: 'An interactive prototype',
  kind: 'Mobile App',
  category: 'Mobile',
  year: '2026',
  color: '#d6cdf0',
  art: 'morrow', // use 'morrow', 'form' or 'horizon' for the card artwork
  previewType: 'figma',
  liveUrl: '',
  figmaUrl: 'https://www.figma.com/proto/YOUR_REAL_LINK',
  description: 'Explore the interactive prototype.'
}
```

When clicked, the site opens an embedded Figma viewer and shows a separate full Figma link. Some Figma files are private or may restrict embedding; check the sharing settings if the viewer is blocked.

### Add an independently hosted website for a Figma design

After implementing and deploying the design on Vercel/Cloudflare/GitHub Pages, provide its live URL:

```js
previewType: 'website',
liveUrl: 'https://your-live-project.example',
figmaUrl: 'https://www.figma.com/proto/YOUR_REAL_LINK',
```

Now the viewer loads the **live deployed site**, and there is also a button to open the actual Figma design. Some websites block iframe embedding using `X-Frame-Options` / `Content-Security-Policy`: the full-site link is still provided for those cases.

## Deploy

### Cloudflare Pages

1. Upload this folder to GitHub, or use Cloudflare Pages Direct Upload.
2. For Git integration: framework preset **None**, build command **empty**, output directory **`.`** (project root).
3. Deploy. All `previews/*.html` pages deploy automatically.

### Vercel

1. Import the folder/repository.
2. Choose framework **Other**; no build command. The root folder is the published directory.
3. Deploy; the interactive demo pages work under `/previews/`.

### GitHub Pages

Upload this folder to a repository and enable Pages on the root. Relative links will work inside a repository subpath.

## Structure

```text
index.html                 Homepage & live viewer
styles.css                 Site styles, animations, responsive design
site-data.js               Owner content + work + showroom configuration
app.js                     Filters, dialogs, theme, navigation, viewer
previews/horizon.html      Working finance dashboard demo
previews/form-and-form.html Working e-commerce storefront demo
previews/morrow.html       Working wellness mobile app demo
assets/favicon.svg         Custom favicon
server.js                  Dependency-free Node local server
package.json               npm run dev/start scripts
README.md                  These instructions
```

## What isn't included

- No database, login, authentication, or CMS, because a public portfolio and these demo concepts do not require one.
- No real email-sending backend. The contact address opens the visitor's mail app; the copy-email button works.
- No auto-export of Figma to HTML. Real designed-to-code websites need their own implementation before they can be live-hosted.
- The sample storefront has no real payments and the sample finance dashboard has no connection to banks.

This package is a functioning starting site; update the sample material with your real information and Figma URLs before production.
