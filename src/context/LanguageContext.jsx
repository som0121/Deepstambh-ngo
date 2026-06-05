import React, { createContext, useEffect, useState, useContext } from "react";

export const LanguageContext = createContext();
export const useLanguage = () => useContext(LanguageContext);

export default function LanguageProvider({ children }) {
  const saved =
    typeof window !== "undefined" ? localStorage.getItem("app_lang") : null;

  const [lang, setLangState] = useState(saved || "english");
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    const loadTranslations = async () => {
      const data =
        lang === "marathi"
          ? await import("../locale/marathi.json")
          : await import("../locale/english.json");

      setTranslations(data.default);
    };

    loadTranslations();
  }, [lang]);

  useEffect(() => {
    localStorage.setItem("app_lang", lang);

    if (typeof document !== "undefined") {
      document.documentElement.classList.remove("english", "marathi");
      document.documentElement.classList.add(lang);
    }
  }, [lang]);

  const t = (key) => translations[key] ?? key;

  const setLang = (newLang) => {
    if (newLang !== lang) setLangState(newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
