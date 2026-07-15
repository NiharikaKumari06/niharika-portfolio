# Niharika Kumari — Portfolio

A production-ready, recruiter-focused portfolio built with React (Vite), Tailwind CSS,
Framer Motion, React Icons, React Router, and React Type Animation.

## Tech stack

- **React 18** + **Vite** — fast dev server and build
- **Tailwind CSS** — utility-first styling, dark mode via `class` strategy
- **Framer Motion** — entrance animations, scroll-triggered reveals, scroll progress bar
- **React Icons** — Feather + Font Awesome icon sets
- **React Router DOM** — routing shell (single-page, ready to extend)
- **React Type Animation** — hero typing effect
- **@emailjs/browser** — contact form email delivery, no backend required

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build locally
npm run preview
```

The dev server runs at `http://localhost:5173` by default.

## Before you deploy — replace these placeholders

1. **Profile photo** — add `profile.jpg` to `src/assets/`, then swap the
   gradient monogram placeholder in `src/components/Hero.jsx` for an
   `<img>` tag. See `src/assets/README.md` for details.
2. **Resume** — replace `public/resume.pdf` with your real resume. The
   "Download Resume" button already points to `/resume.pdf`, so no code
   changes are needed once the file is swapped.
3. **Contact form (EmailJS)** — in `src/components/Contact.jsx`, replace:
   ```js
   const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
   const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
   const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'
   ```
   with the values from your [EmailJS](https://www.emailjs.com/) dashboard
   (Service, Template, and Public Key). No backend or server is required —
   EmailJS delivers straight from the browser.
4. **Social + contact links** — update the LinkedIn, GitHub, email, and
   phone links in `src/components/Hero.jsx`, `Footer.jsx`, and
   `Contact.jsx` with your real details.
5. **Project links** — update the `github` and `demo` URLs in
   `src/components/Projects.jsx` for each project.
6. **Domain / SEO URLs** — update the canonical URL, Open Graph URL, and
   sitemap reference in `index.html` and `public/robots.txt` once you know
   your deployed domain.
7. **OG image** — add an `og-image.png` (1200×630px recommended) to
   `public/` for rich social-media link previews; `index.html` already
   references `/og-image.png`.

## Project structure

```
src/
├── assets/            # profile photo, resume, favicon (replace placeholders)
├── components/        # Navbar, Hero, About, Experience, Projects, Skills,
│                       # Certifications, Education, Contact, Footer,
│                       # ThemeToggle, ScrollProgress, LoadingScreen
├── context/
│   └── ThemeContext.jsx  # dark/light mode provider
├── pages/
│   └── Home.jsx        # assembles all sections
├── App.jsx
├── main.jsx
└── index.css           # Tailwind layers + design tokens
```

## Features included

- Dark mode / light mode toggle (persisted in `localStorage`, respects
  system preference on first visit)
- Scroll progress bar
- Animated loading screen on first paint
- Smooth-scroll navigation with a responsive, collapsible mobile menu
- Scroll-triggered section reveal animations (Framer Motion `whileInView`)
- Hover micro-interactions on cards, buttons, and links
- Typing animation in the hero (React Type Animation)
- SEO metadata: title, description, keywords, canonical URL, Open Graph
  tags, Twitter Card tags, `robots.txt`
- SVG favicon
- Resume download button
- Validated contact form wired to EmailJS
- Respects `prefers-reduced-motion`

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects the Vite framework preset — no configuration needed.
   The included `vercel.json` handles SPA routing rewrites for React Router.
4. Click **Deploy**. Your site will be live at `your-project.vercel.app`.

Alternatively, using the Vercel CLI:

```bash
npm install -g vercel
vercel
```

## Customization notes

- **Colors**: the accent blue (`#2563EB`) and neutral "ink" palette are
  defined in `tailwind.config.js` under `theme.extend.colors`.
- **Typography**: Space Grotesk (display), Inter (body), and JetBrains Mono
  (labels/data) are loaded via Google Fonts in `index.html` and mapped in
  `tailwind.config.js` under `theme.extend.fontFamily`.
- **Content**: all copy (experience, projects, skills, certifications,
  education) lives in small data arrays at the top of each component file
  in `src/components/` — edit those arrays to update content without
  touching layout code.
