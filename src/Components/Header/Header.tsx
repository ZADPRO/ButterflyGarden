import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import logo from "../../assets/Home/LOGO (3).png";
import "./Header.css";
import { useTranslation } from "react-i18next";
import de from "../../assets/language/de.svg";
import en from "../../assets/language/en.svg";
import pair from "../../assets/About/REC.jpg"
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
    "text-[20px] cursor-pointer font-bold underline-animation transition duration-300 ease-in-out relative after:content-[''] after:block after:h-[2px] after:w-0 hover:after:w-full after:bg-[#fcdb7c]  after:transition-all after:duration-300";
  const textColor = "text-[#5ea308] hover:text-[#fcdb7c]";

  return (
    <div>
     <div
style={{
  background: location.pathname === "/"
    ? "#FFFBDB"
    : "rgba(255, 255, 255, 0.1)", // light transparent bg
  backdropFilter: location.pathname === "/" ? "none" : "blur(10px)",
}}


  className={`h-[85px] text-[15px] fixed top-0 left-0 right-0 flex items-center justify-center backdrop-blur-md border-b border-white/20 transition-colors duration-300 z-40`}
>

        <div
          className={`w-full flex ${menuStatus ? "fixed z-50" : ""
            } justify-center items-center h-full`}
        >
          <div className="w-[95%] flex justify-between items-center">
            {/* Logo */}
            <div className="flex justify-start" style={{fontFamily: "Bau Asem, sans-serif"}}>
              <Link to="/" onClick={() => setMenuStatus(false)}>
                <img
                  src={logo}
                  alt="Logo"
                  className="h-14 sm:h-16 md:h-20 transition-transform duration-300 hover:scale-105"
                />
              </Link>
            </div>
            {/* Desktop Nav + Flags on Right */}
            <div className="hidden lg:flex flex-1 justify-end items-center gap-x-10">
              <Link
                to="/"
                className={`${navLinkClass} ${textColor}`}
                onClick={() => {
                  setMenuStatus(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                {t("nav.home")}
              </Link>
              <Link
                to="/about"
                className={`${navLinkClass} ${textColor}`}
                onClick={() => {
                  setMenuStatus(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                {t("nav.about")}
              </Link>
              <Link
                to="/contact"
                className={`${navLinkClass} ${textColor}`}
                onClick={() => {
                  setMenuStatus(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                {t("nav.contact")}
              </Link>
              {/* Language Flags */}
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
                  className={`w-8 h-8 rounded-full overflow-hidden border-2 transition hover:scale-110 ${currentLang === "de"
                      ? "border-blue-500"
                      : "border-transparent"
                    }`}
                >
                  <img src={de} alt="Deutsch" className="w-full h-full object-cover" />
                </button>
              </div>
            </div>

            {/* Mobile Hamburger */}
            <div className="flex lg:hidden justify-center items-center ml-6">
              <button
                className={`relative cursor-pointer block self-center ${menuStatus
                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0"
                    : ""
                  }`}
                onClick={() => setMenuStatus(!menuStatus)}
                aria-expanded={menuStatus}
                aria-label="Toggle navigation"
              >
                <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                  <span className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"></span>
                  <span className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"></span>
                  <span className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Slide-out Menu */}
      {menuStatus && (
        <div className="lg:hidden bg-white shadow-md mt-[85px]">
          <div className="flex flex-col items-center py-4 space-y-4">
            <Link
              to="/"
              className="text-[18px] font-semibold"
              onClick={() => setMenuStatus(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-[18px] font-semibold"
              onClick={() => setMenuStatus(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-[18px] font-semibold"
              onClick={() => setMenuStatus(false)}
            >
              Contact
            </Link>

            {/* Mobile Flags */}
      <div className="flex gap-4 mt-3">
  {/* ENGLISH BUTTON */}
  <div
    className={`p-[2px] rounded-full bg-gradient-to-r from-[#FDD253] to-[#B7FF5E] 
      ${currentLang === "en" ? "" : "bg-transparent"}`}
  >
    <button
      onClick={() => handleChangeLang("en")}
      className="w-8 h-8 rounded-full overflow-hidden bg-white"
    >
      <img src={en} alt="English" className="w-full h-full object-cover" />
    </button>
  </div>

  {/* GERMAN BUTTON */}
  <div
    className={`p-[2px] rounded-full bg-gradient-to-r from-[#FDD253] to-[#B7FF5E] 
      ${currentLang === "de" ? "" : "bg-transparent"}`}
  >
    <button
      onClick={() => handleChangeLang("de")}
      className="w-8 h-8 rounded-full overflow-hidden bg-gradient-to-r from-[#FDD253] to-[#B7FF5E]"
    >
      <img src={de} alt="Deutsch" className="w-full h-full object-cover" />
    </button>
  </div>
</div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
