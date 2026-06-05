import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

import logo from "../../assets/logo.png";
import langIcon from "../../assets/Lchange.svg";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { t, lang, setLang } = useLanguage();

  const toggleLanguage = () => {
    setLang(lang === "english" ? "marathi" : "english");
  };

  const navItems = [
    { key: "nav_home", href: "/" },
    { key: "nav_about", href: "/about" },
    { key: "nav_activities", href: "/activities" },
    { key: "nav_get_involved", href: "/get-involved" },
    { key: "nav_gallery", href: "/gallery" },
    { key: "nav_contact", href: "/contact" },
  ];

  return (
    <header
      className="
       sticky top-0 z-[120]
        w-full h-[80px]
        flex items-center
        backdrop-blur-[6px]
        border-b border-[#E0DBD1]
        bg-[rgba(249,248,245,0.95)]
        before:content-[''] before:absolute before:inset-0
        before:bg-[linear-gradient(0deg,rgba(255,255,255,0.10),rgba(255,255,255,0.10))]
        before:pointer-events-none
        shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
    > 

    
      <div className="max-w-[1200px] w-full mx-auto px-[20px] flex items-center">
        {/* Logo */}
        <NavLink to="/" className="block">
          <img
            src={logo}
            alt="logo" 
            className="h-[70px] max-[480px]:h-[48px]"
          />
        </NavLink>

        {/* Navbar */}
        <div className="ml-auto flex items-center gap-[28px] max-[768px]:hidden">
          <nav className="flex items-center gap-[36px]">
            {navItems.map((item) => (
              <NavLink
                key={item.key}
                to={item.href}
                className={({ isActive }) =>
                  `relative text-[16px] font-['Devanagari MT'] 
                   transition-colors ${
                    isActive
                      ? "text-[#018F4D] font-bold font-['Devanagari MT']"
                      : "text-[#5B5B5B] font-['Devanagari MT'] font-normal"
                  }`
                }
              >
                {t(item.key)}
              </NavLink>
            ))}
          </nav>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="w-[36px] h-[36px] flex items-center
           justify-center rounded-full bg-[rgba(238,114,43,0.20)] transition-all duration-200"
          >
            <img src={langIcon} alt="lang" className="w-[20px] transform transition-all duration-200 hover:scale-110" />
          </button>

          {/* Donate */}
          <NavLink
            to="/donate"
            className="w-[122px] h-[42px] px-[20px] flex items-center 
            justify-center rounded-[29px] text-center
            font-['Devanagari MT'] leading-none font-medium
            shadow-[0_10px_40px_-10px_rgba(1,143,77,0.30)]
           bg-[#018F4D] text-[#FCFBF8] text-[16px] 
            hover:bg-[#0C7A3D]"
          >
            {t("nav_donate")}
          </NavLink>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="ml-auto hidden max-[768px]:flex flex-col gap-[5px]"
        >
          <span className="w-[24px] h-[2px] bg-[#333]" />
          <span className="w-[24px] h-[2px] bg-[#333]" />
          <span className="w-[24px] h-[2px] bg-[#333]" />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="absolute top-[80px] left-0 w-full
         bg-white shadow-md flex flex-col items-center 
         gap-[20px] py-[20px] z-[100]"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.key}
              to={item.href}
              onClick={() => setOpen(false)}
              className="text-[16px] text-[#5B5B5B] hover:text-[#018F4D]"
            >
              {t(item.key)}
            </NavLink>
          ))}

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="w-[36px] h-[36px] flex items-center 
          justify-center rounded-full bg-[rgba(238,114,43,0.20)]"
          >
            <img src={langIcon} alt="lang" className="w-[20px]" />
          </button>

          {/* Donate */}
          <NavLink
            to="/donate"
            className="h-[40px] px-[30px] rounded-[20px] bg-[#018F4D]
             text-white"
          >
            {t("nav_donate")}
          </NavLink>
        </div>
      )}
    </header>
  );
}
