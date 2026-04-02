# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start        # Start dev server (localhost:3000)
npm run build    # Production build → ./build/
npm run deploy   # Build + deploy to GitHub Pages (gh-pages -d build)
```

No test suite is configured. No linter config exists beyond CRA defaults.

## Stack

- **Create React App** (JavaScript, no TypeScript)
- **Bootstrap** for styling
- **@formspree/react** for the contact form
- Deployed to **GitHub Pages** via `gh-pages`

## Architecture

The app uses a single-page tab-based navigation pattern — **no React Router**. All routing is managed by `useState` in `Navbar.js`, which conditionally renders one of four page components: `AboutMe`, `Portfolio`, `Contact`, `Resume`.

```
App.js
  └── Navbar.js          ← owns activeTab state; renders current page
        ├── AboutMe.js
        ├── Portfolio.js  ← maps projects.json → Project.js cards
        │     └── Project.js
        ├── Contact.js    ← Formspree form
        └── Resume.js
  └── Footer.js
```

**Project data** lives in `src/data/projects.json` — add or edit projects there, not in component code.

**Static assets** (images for projects) live in `public/images/`. Component images (portrait, background) live in `src/images/` and are imported directly.

**Certificates** are served from `public/certificates/` and linked from `Resume.js`.
