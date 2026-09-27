# Muaaz's Portfolio

A personal developer portfolio built with React + Vite, showcasing backend
development work (Python, FastAPI, PostgreSQL) and secondary B2B / lead
generation skills.

## Project structure

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── CurrentFocus.jsx
        ├── HelpWith.jsx
        ├── TechStack.jsx
        ├── Projects.jsx
        ├── LearningJourney.jsx
        ├── About.jsx
        ├── Contact.jsx
        ├── Footer.jsx
        └── Reveal.jsx
```

## 1. Install

You need Node.js 18+ installed. Then, inside the `portfolio` folder:

```bash
npm install
```

## 2. Run it locally

```bash
npm run dev
```

This starts a dev server (usually at `http://localhost:5173`) with hot reload.

## 3. Build for production

```bash
npm run build
```

This creates a `dist/` folder with the optimized static site. You can preview
the production build locally with:

```bash
npm run preview
```

## 4. Where to replace your email

Already done — every "Email Me" button uses `mailto:muaazbinshamshad@gmail.com`
(in `src/components/Hero.jsx` and `src/components/Contact.jsx`). Change it
there if your email ever changes.

## 5. Where to add project screenshots

The project cards in `src/components/Projects.jsx` are currently text-only
(no screenshots), since none were provided. To add one:

1. Put an image file in a `public/` folder (create it if it doesn't exist),
   e.g. `public/student-api.png`.
2. In `Projects.jsx`, add an `<img src="/student-api.png" alt="..." />` inside
   the relevant `.project` card, above or below the description.

## 6. Connecting/adding your GitHub project links

- **Task Management API** and **Support Ticket API** already link to your
  real repositories.
- **Student Management API** has no repository link yet — in
  `src/components/Projects.jsx`, find the object with
  `name: 'Student Management API'` and change:

  ```js
  github: null,
  ```

  to your real repo URL, e.g.:

  ```js
  github: 'https://github.com/muaazbinshamshad-crypto/Student-Management-API',
  ```

  The "Repository link coming soon" button will automatically turn into a
  real "View on GitHub" link once this is set.

## 7. Deploying the site

Any static host works since this builds to plain HTML/CSS/JS. Two simple
options:

**Vercel**
1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com), import the repo.
3. Vercel auto-detects Vite — framework preset "Vite", build command
   `npm run build`, output directory `dist`. Deploy.

**Netlify**
1. Push this project to a GitHub repository.
2. Go to [netlify.com](https://netlify.com), "Add new site" → "Import an
   existing project".
3. Build command: `npm run build`. Publish directory: `dist`. Deploy.

Both have free tiers that are enough for a portfolio site.

## 8. Suggested improvements (optional, no added complexity)

- Add a `public/resume.pdf` and a "Download Resume" button in the Hero once
  you have a resume ready.
- Add real screenshots to the three project cards once you have them handy
  (see section 5).
- Once the Student Management API repo is public, fill in its GitHub link
  (see section 6) — right now it correctly shows "coming soon" instead of a
  fake link.
- As you finish more of the "currently learning" items (pytest, Docker,
  deployment), move them from the "learning" chip row in `TechStack.jsx` to
  the "working with now" row.

## Notes on this redesign

- Section order now follows: Hero → Current Focus → What I Can Build → Stack
  → Projects (Support Ticket API featured) → Learning Journey → About →
  Contact.
- The B2B/lead-generation section from the earlier version was removed since
  it wasn't part of this brief.
- Subtle scroll animations use a small `Reveal.jsx` wrapper (IntersectionObserver
  + CSS transition) — no animation library was added since it wasn't needed.
- All copy is based only on what you provided — no invented clients,
  testimonials, statistics, or skills.
