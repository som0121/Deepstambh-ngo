# Deepastambh Pratishthan — NGO Website

Bilingual (English / Marathi) website for **Deepastambh Pratishthan**, a Maharashtra-based
foundation working in service, education, and community empowerment. Built during a
5-month frontend internship.

> 🧑‍💻 I built this website during my **5-month internship at Aivot AI**, where I
> worked as an **Associate Software Engineer**. It was my first end-to-end frontend
> project — spanning component architecture, a custom i18n system, responsive design,
> and static-host deployment.

🌐 **Live Demo:** _add your deployed link here (Vercel / Netlify / GitHub Pages)_

---

## ✨ Features

- **Bilingual UI (EN/MR)** — custom React Context i18n; preference persists via `localStorage`, translations lazy-loaded.
- **Multi-page** — Home, About, Activities, Gallery, Get Involved, Donate, Contact (React Router).
- **Engagement popups** — centralized Subscribe/Volunteer/Contact prompts on timed & randomized triggers.
- **Reusable components** — Header, Footer, Hero, Mission, Core Focus, Initiatives, Transformation.
- **Responsive** — Tailwind CSS across mobile, tablet, desktop.

---

## 🛠️ Tech Stack

**React 19** · **React Router 7 (HashRouter)** · **Tailwind CSS 3** · **Vite (rolldown-vite)** · **Context API + Hooks** · **ESLint 9** · **JavaScript (JSX)**

---

## 📁 Structure

src/
├── App.jsx · main.jsx
├── context/    # LanguageContext (i18n), PopupContext (popup engine)
├── locale/     # english.json, marathi.json
├── components/ # Header, Footer, Transformation, Popup/
└── Pages/      # Home, About, Activities, Gallery, Getinvolved, Donate, Contact



---

## 🚀 Getting Started

```bash
git clone https://github.com/<your-username>/deepstambh.git
cd deepstambh
npm install
npm run dev
Scripts: dev · build · preview · lint

🧩 Highlights
i18n without duplication — t(key) helper + JSON files; only the active language loads.
Persistent language — synced to localStorage, rehydrated on load.
Clean popups — PopupContext with useRef timers to avoid leaks.
Static-host routing — HashRouter for reliable deep links on GitHub Pages / Netlify.


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

## 🙌 Acknowledgements

Built as part of my internship at **Aivot AI** (Associate Software Engineer),
for **Deepastambh Pratishthan**.

---

## 📄 License

This project was developed as part of an internship. Reach out before reuse.
