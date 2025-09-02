import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import logo from "../../assets/Home/LOGO (3).png";
import { useTranslation } from "react-i18next";
import girl from "../../assets/Footer/Girl-1.webp";
import bird from "../../assets/Footer/bird.webp";
import cloud from "../../assets/Footer/Cloud.webp";
import { Link } from "react-router-dom";
import wave from "../../assets/Home/Footer shape (1).svg";

const Footer: React.FC = () => {
  const { t } = useTranslation("global");

  return (
    <div className="bg-[#4A9B2F]">
      {/* Top Wave */}
      <img
        src={wave}
        alt="Wave Pattern"
        className="w-full h-full object-cover"
        style={{
          width: "100%",
          objectFit: "fill",
        }}
      />

      {/* Footer Content */}
      <footer className="relative  bg-[#FFFBDB] text-gray-700 overflow-hidden">
        {/* Decorative Elements */}
        <img
          src={cloud}
          alt="Cloud"
          className="absolute top-6 left-6 sm:top-10 sm:left-10 w-12 sm:w-16 opacity-80 z-0"
        />
        <img
          src={bird}
          alt="Bird"
          className="absolute top-12 right-2 sm:top-20 sm:right-1 w-40 sm:w-52 animate-bounce z-0"
        />
        <img
          src={girl}
          alt="Girl"
          className="absolute bottom-6 left-[-20px] sm:bottom-10 sm:left-[80px] w-16 sm:w-20 z-0"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center text-center mt-[-54px] ">
            <img src={logo} alt="KidsJoy" className="h-54 w-54 mb-5" />
            <p
              className="text-base sm:text-lg text-gray-600"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Copyrights @Product of{" "}
              <span
                className="text-[#5EA308] font-semibold"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Maven Academy
              </span>
            </p>
          </div>

          <hr className="my-5 border-t border-gray-300" />

          {/* Navigation Links */}
          <div className="flex justify-center text-[#5ea308] flex-wrap gap-8 mb-1 text-xl font-semibold font-sans" style={{fontFamily: "Bau Asem, sans-serif"}}>
            <Link
              to="/"
              className="hover:text-[#fcdb7c]  transition-colors duration-200 px-3 py-2"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              {t("footer.home")}
            </Link>
            <Link
              to="/about"
              className="hover:text-[#fcdb7c]  transition-colors duration-200 px-3 py-2"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              {t("footer.about")}
            </Link>
            <Link
              to="/contact"
              className="hover:text-[#fcdb7c]  transition-colors duration-200 px-3 py-2"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              {t("footer.contact")}
            </Link>
          </div>

          <hr className="my-8 border-t border-gray-300" />

          {/* Contact Info */}
          <div className=" grid grid-cols-1 ml-40 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-xl font-sans text-center sm:text-left">
            {/* Email */}
            <div className="flex items-center justify-center sm:justify-start space-x-4">
              <div className="bg-gradient-to-r from-[#FDD253] to-[#B7FF5E] p-3 rounded-full">
                <Mail className="text-[#555555]" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-[#555555]">
                  {t("footer.email")}
                </h4>
                <p className="text-gray-600 text-lg">srinathvijaya7@gmail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center justify-center sm:justify-start space-x-4">
              <div className="bg-gradient-to-r from-[#FDD253] to-[#B7FF5E] p-3 rounded-full">
                <Phone className="text-[#555555]" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-[#555555]">
                  {t("footer.mobile")}
                </h4>
                <p className="text-gray-600 text-lg">+41 76 502 5963</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center justify-center sm:justify-start space-x-4">
              <div className="bg-gradient-to-r from-[#FDD253] to-[#B7FF5E] p-3 rounded-full">
                <MapPin className="text-[#555555]" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-[#555555]">
                  {t("footer.address")}
                </h4>
                
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Wave */}
      <img
        src={wave}
        alt="Wave Pattern"
        className="w-full h-full object-cover transform rotate-180"
        style={{
          width: "100%",
          objectFit: "fill",
        }}
      />

      {/* Social Links */}
      {/* <div className="flex justify-center mt-[-40px] flex-wrap gap-6">
        <a
          href="#"
          className="flex items-center space-x-2 text-orange-400 hover:text-orange-500 transition-colors duration-200 px-4 py-3 rounded-lg hover:bg-orange-50 text-lg"
        >
          <Facebook size={20} />
          <span className="font-medium">Facebook</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-2 text-pink-400 hover:text-pink-500 transition-colors duration-200 px-4 py-3 rounded-lg hover:bg-pink-50 text-lg"
        >
          <Instagram size={20} />
          <span className="font-medium">Instagram</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-2 text-blue-400 hover:text-blue-500 transition-colors duration-200 px-4 py-3 rounded-lg hover:bg-blue-50 text-lg"
        >
          <Twitter size={20} />
          <span className="font-medium">Twitter</span>
        </a>
      </div> */}
    </div>
  );
};

export default Footer;
