# Prastian Hidayat — Portfolio

![ts](https://badgen.net/badge/Built%20With/TypeScript/blue)

Personal portfolio of **Prastian Hidayat** — Web3 Developer, Full Stack Engineer, and Technical Writer based in Kebumen, Indonesia. Built with Next.js (SSG) and TypeScript, with Tailwind CSS for styling and GSAP for animations. Light & dark themes supported (dark by default).

## Features

- Responsive design
- Light & dark themes
- Accessible
- SEO friendly

## Tech Stack

- **Frontend** — [Next.js](https://nextjs.org/), [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/)
- **Styling** — [Tailwind CSS](https://tailwindcss.com/)
- **Animations** — [GSAP](https://gsap.com/)
- **State** — [Zustand](https://zustand-demo.pmnd.rs/)
- **Deployment** — [Vercel](https://vercel.com/)

## Running locally

```bash
git clone https://github.com/PrastianHD/profile.git
cd profile
npm install
npm run dev
```

## Setup checklist

After cloning, add these files in `public/`:

- `profile.png` — your profile photo (used in About section)
- `Prastian-Hidayat-CV.pdf` — your CV (linked from Hero "Download CV" button and header "Resume" button)

Then update placeholder content in:

- `components/sections/BlogSection.tsx` — replace tweet placeholders with real X post links
- `components/sections/ProjectSection.tsx` — featured projects list

