# Deepastambh Pratishthan — NGO Website

Bilingual (English / Marathi) website for **Deepastambh Pratishthan**, a Maharashtra-based
foundation working in service, education, and community empowerment. Built during a
5-month frontend internship.

🌐 **Live Demo:** _add deployed link_

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


