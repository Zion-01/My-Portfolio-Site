# Portfolio — React + TypeScript + Vite + Tailwind v4 + Framer Motion

Modern personal portfolio featuring smooth animations, dark/light theme toggle, responsive sections, and Vercel-ready deployment.

## Features
- Theme system: class-based dark mode with Tailwind v4
- Smooth animations via Framer Motion
- Responsive layout and sections: Hero, About, Skills, Projects, Contact, Footer
- Scroll progress indicator
- Email form powered by EmailJS
- TypeScript-first with ESLint

## Tech Stack
- React 19, TypeScript 5, Vite 7
- Tailwind CSS v4 (@tailwindcss/vite)
- Framer Motion, Lucide Icons, React Icons
- EmailJS (browser)

## Getting Started
1. Install dependencies:
```bash
npm install
```
2. Run dev server:
```bash
npm run dev
```
3. Build for production:
```bash
npm run build
```
4. Preview production build:
```bash
npm run preview
```

## Project Structure
```
src/
  components/        # UI components (Hero, About, Skills, Projects, Contact, Footer, etc.)
  context/           # Theme context provider and hook
  animations/        # Motion presets
  assets/            # Static assets
  App.tsx            # App shell
  index.css          # Tailwind v4 entry + custom styles
```

## Theming (Tailwind v4)
- Dark mode is class-based using a custom variant in `src/index.css`:
```css
@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));
```
- The `ThemeProvider` toggles the `dark` class on `html` and syncs `data-theme` and `color-scheme`.
- Use `dark:` utilities for alternate styles (e.g., `text-gray-900 dark:text-white`).

## Environment Variables
If using the contact form, set your EmailJS credentials (or remove the feature):
- Service ID
- Template ID
- Public key

These are referenced in `src/components/Contact.tsx` when calling `emailjs.sendForm(...)`.

## Deploying to Vercel
1. Push the repo to GitHub.
2. In Vercel, import the repository.
3. Settings:
   - Framework preset: Vite
   - Build command: `npm run build`
   - Output directory: `dist`
4. Add environment variables if needed (EmailJS keys).

## Scripts
- `npm run dev` — start dev server
- `npm run build` — type-check and build
- `npm run preview` — preview production build
- `npm run lint` — run ESLint

## License
This project is available under the MIT License.
