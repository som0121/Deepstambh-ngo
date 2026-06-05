# Deepastambh Pratishthan — NGO Website

A bilingual (English / Marathi) website built for **Deepastambh Pratishthan**, a social foundation working across Maharashtra in the areas of service, education, and community empowerment. The site presents the foundation's mission, activities, initiatives & success stories, gallery, and donation/volunteer touchpoints.

> Built during my 5-month internship as a frontend developer.

🌐 **Live Demo:** _add your deployed link here (Vercel / Netlify / GitHub Pages)_

---

## ✨ Features

- **Bilingual UI (English & Marathi)** — full internationalization via a custom React Context. Language choice persists across sessions using `localStorage`, and translation files are lazy-loaded on demand.
- **Multi-page experience** — Home, About, Activities, Gallery, Get Involved, Donate, and Contact pages, wired through React Router. The Home page also features an *Initiatives & Success Stories* section.
- **Smart engagement popups** — a centralized popup engine that surfaces *Subscribe*, *Volunteer*, and *Contact* prompts on timed and randomized triggers, managed through React Context so any page can drive it.
- **Reusable component architecture** — Header, Footer, Hero, Mission, Core Focus, Initiatives, and Transformation sections split into self-contained components.
- **Responsive design** — styled with Tailwind CSS for a consistent look across mobile, tablet, and desktop.

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Framework | React 19 |
| Routing | React Router DOM 7 (`HashRouter`) |
| Styling | Tailwind CSS 3, PostCSS, Autoprefixer |
| Build Tool | Vite (rolldown-vite) |
| State / i18n | React Context API + Hooks |
| Linting | ESLint 9 |
| Language | JavaScript (JSX) |

---

## 📁 Project Structure

```
src/
├── App.jsx                 # Routes + global providers
├── main.jsx                # App entry point
├── context/
│   ├── LanguageContext.jsx # Bilingual i18n provider (English/Marathi)
│   └── PopupContext.jsx    # Timed/randomized popup engine
├── locale/
│   ├── english.json        # English translations
│   └── marathi.json        # Marathi translations
├── components/
│   ├── Header/  Footer/  Transformation/
│   └── Popup/              # Subscribe, Volunteer, Contact popups
└── Pages/
    ├── Home/  About/  Activities/  Gallery/
    ├── Getinvolved/  Donate/  Contact/
    └── Home/components/    # Hero, Mission, CoreFocus, Initiatives
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/deepstambh.git
cd deepstambh

# Install dependencies
npm install

# Start the dev server
npm run dev
```

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

---

## 🧩 Challenges Faced & Solutions

- **Bilingual content without bloating components** — Instead of hardcoding two copies of every string, I built a `LanguageContext` with a `t(key)` helper and JSON translation files. Components just call `t("hero_title")`, and the language can be switched globally. Translations are dynamically imported so only the active language's file is loaded.
- **Persisting the user's language choice** — Solved by syncing the selected language to `localStorage` and rehydrating it on load, so a returning visitor keeps their preference.
- **Non-intrusive engagement prompts** — The foundation wanted Subscribe/Volunteer/Contact popups without annoying users. I centralized this in a `PopupContext` using `setTimeout`/`setInterval` with `useRef` to manage timers cleanly and avoid memory leaks, picking a random prompt on each trigger.
- **Clean routing on static hosting** — Used `HashRouter` so deep links work reliably on static hosts (GitHub Pages / Netlify) without server-side route configuration.

---

## 🎯 What I Achieved

- Delivered a complete, production-ready, fully responsive NGO website from scratch.
- Implemented a reusable internationalization system supporting two languages with persistent preferences.
- Designed a maintainable, component-driven architecture using modern React (Context API + Hooks).
- Gained hands-on experience with the React 19 + Vite + Tailwind CSS workflow in a real-world project.

---

## 📄 License

This project was developed as part of an internship. Reach out before reuse.
