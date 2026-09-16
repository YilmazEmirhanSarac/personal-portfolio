# Portfolio Site

## Project
Personal portfolio for Emirhan, a computer engineering grad targeting junior 
frontend developer roles. Purpose: showcase background, resume, and projects 
to recruiters.

## Stack
- React (Vite), plain JavaScript (no TypeScript)
- Tailwind CSS
- React Router — multi-page site, not a single-page scroller
- No backend for v1 — contact form is deferred, don't build it yet

## Workflow
- We're following PROGRESS.md, grouped into Setup, Coding, and Finalizing phases.
- Complete one step fully, then stop and wait for my explicit go-ahead before 
  starting the next one.
- Before starting a step, briefly restate what you're about to do.
- After finishing a step:
  1. Update PROGRESS.md — check the step off and add a short note.
  2. Suggest a clear, descriptive commit message for what was just done.
  3. Do NOT run any git commands (add, commit, push). I handle git myself.

## Routes
- `/` — Home
- `/about` — Background: degree, bootcamp, internships
- `/projects` and `/projects/:slug` — Project list + case-study detail pages
- `/resume` — Resume/CV
- `/contact` — Route exists later, not built yet
- `/services`, `/blog` — Routes exist but stay out of the nav until there's content

## Conventions
- Functional components + hooks only
- Tailwind for styling, avoid separate CSS files unless truly necessary
- Keep components small/reusable: Navbar, Footer, ProjectCard, Button, Layout
- Project data lives in `src/data/projects.js`, not hardcoded in JSX

## Design direction
Minimalist, whitespace-heavy, strong typography, mobile-first