import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import logo from "../../assets/Home/LOGO (3).png";
import "./Header.css";
import { useTranslation } from "react-i18next";
import de from "../../assets/language/de.svg";
import en from "../../assets/language/en.svg";

const Header: React.FC = () => {
  const location = useLocation();
  const [menuStatus, setMenuStatus] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation("global");
  const currentLang = i18n.language;

  const handleChangeLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const isNoScrollEffect =
    location.pathname === "/blog-view" || location.pathname === "/release-view";

  useEffect(() => {
    const handleScroll = () => {
      if (!isNoScrollEffect) {
        setScrolled(window.scrollY > 10);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isNoScrollEffect]);

  const navLinkClass =
    "text-lg md:text-xl cursor-pointer font-bold underline-animation transition duration-300 ease-in-out relative after:content-[''] after:block after:h-[2px] after:w-0 hover:after:w-full after:bg-[#fcdb7c] after:transition-all after:duration-300";

  const getLinkClass = (path: string) => {
    const isActive = location.pathname === path;
    return `${navLinkClass} ${isActive ? "text-[#fcdb7c]" : "text-[#5EA308] hover:text-[#fcdb7c]"
      }`;
  };

  return (
    <div>
      {/* Header Container */}
      <div
        style={{
          background:
            location.pathname === "/" ? "#FFFBDB" : "rgba(255, 255, 255, 0.1)",
          backdropFilter: location.pathname === "/" ? "none" : "blur(10px)",
        }}
        className={`h-[70px] sm:h-[80px] md:h-[85px] fixed top-0 left-0 right-0 flex items-center justify-center border-b border-white/20 transition-colors duration-300 z-50 ${scrolled ? "shadow-md" : ""
          }`}
      >
        <div className="w-full flex justify-between items-center px-4 md:px-8 lg:px-12">
          {/* Logo */}
          <Link to="/" onClick={() => setMenuStatus(false)}>
            <img
              src={logo}
              alt="Logo"
              className="h-12 sm:h-14 md:h-16 lg:h-20 transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex flex-1 justify-end items-center gap-x-10">
            <Link to="/" className={getLinkClass("/")} onClick={() => setMenuStatus(false)}>
              {t("nav.home")}
            </Link>
            <Link to="/about" className={getLinkClass("/about")} onClick={() => setMenuStatus(false)}>
              {t("nav.about")}
            </Link>
            <Link to="/contact" className={getLinkClass("/contact")} onClick={() => setMenuStatus(false)}>
              {t("nav.contact")}
            </Link>

            {/* Language Switcher (Desktop) */}
            <div className="flex items-center gap-3 ml-6">
              <button
                onClick={() => handleChangeLang("en")}
                className={`w-8 h-8 rounded-full overflow-hidden border-2 transition hover:scale-110 ${currentLang === "en" ? "border-blue-500" : "border-transparent"
                  }`}
              >
                <img src={en} alt="English" className="w-full h-full object-cover" />
              </button>
              <button
                onClick={() => handleChangeLang("de")}
                className={`w-8 h-8 rounded-full overflow-hidden border-2 transition hover:scale-110 ${currentLang === "de" ? "border-blue-500" : "border-transparent"
                  }`}
              >
                <img src={de} alt="Deutsch" className="w-full h-full object-cover" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button + Flags */}
          <div className="flex lg:hidden items-center gap-3">
            {/* Flags */}
            <div className="flex gap-2">
              <button
                onClick={() => handleChangeLang("en")}
                className={`w-10 h-7 rounded-full overflow-hidden border-2 ${currentLang === "en" ? "border-blue-500" : "border-transparent"
                  }`}
              >
                <img src={en} alt="English" />
              </button>
              <button
                onClick={() => handleChangeLang("de")}
                className={`w-10 h-7 rounded-[70%] overflow-hidden border-2 ${currentLang === "de" ? "border-blue-500" : "border-transparent"
                  }`}
              >
                <img src={de} alt="Deutsch" />
              </button>
            </div>

            {/* Hamburger */}
            <button
              className={`relative cursor-pointer block ml-3 ${menuStatus ? "open" : ""}`}
              onClick={() => setMenuStatus(!menuStatus)}
              aria-expanded={menuStatus}
              aria-label="Toggle navigation"
            >
              <div className="w-6 h-6 flex flex-col justify-between">
                <span
                  className={`block h-0.5 bg-slate-900 transition-all duration-300 ${menuStatus ? "rotate-45 translate-y-2 w-full" : "w-4/5"
                    }`}
                ></span>
                <span
                  className={`block h-0.5 bg-slate-900 transition-all duration-300 ${menuStatus ? "-rotate-45" : ""
                    }`}
                ></span>
                <span
                  className={`block h-0.5 bg-slate-900 transition-all duration-300 ${menuStatus ? "opacity-0" : "w-1/2"
                    }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Sidebar (Slide-in) */}
      <div
        className={`fixed top-0 left-0 h-full w-74 bg-[#FFFBDB] shadow-lg transform transition-transform duration-300 z-40 ${menuStatus ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full pt-24 px-6 space-y-6">
          <Link
            to="/"
            className={`text-lg sm:text-xl font-semibold ${location.pathname === "/" ? "text-[#fcdb7c]" : "text-[#5EA308]"
              }`}
            onClick={() => setMenuStatus(false)}
          >
            {t("nav.home")}
          </Link>
          <Link
            to="/about"
            className={`text-lg sm:text-xl font-semibold ${location.pathname === "/about" ? "text-[#fcdb7c]" : "text-[#5EA308]"
              }`}
            onClick={() => setMenuStatus(false)}
          >
            {t("nav.about")}
          </Link>
          <Link
            to="/contact"
            className={`text-lg sm:text-xl font-semibold ${location.pathname === "/contact" ? "text-[#fcdb7c]" : "text-[#5EA308]"
              }`}
            onClick={() => setMenuStatus(false)}
          >
            {t("nav.contact")}
          </Link>
        </div>
      </div>
      {/* Overlay when menu is open */}
      {menuStatus && (
        <div
          className="fixed inset-0 bg-black/10 z-10"
          onClick={() => setMenuStatus(false)}
        ></div>
      )}
    </div>
  );
};

export default Header;
